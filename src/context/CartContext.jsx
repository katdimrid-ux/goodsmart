import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROMO_CODES } from '../data/kitchenProducts';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'goods_mart_cart_v1';
const WISHLIST_STORAGE_KEY = 'goods_mart_wishlist_v1';

export function CartProvider({ children }) {
  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Initialize wishlist from localStorage
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & UI states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);

  // Promo Code State
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // Persist Cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  // Persist Wishlist
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
    } catch (e) {
      console.error('Failed to save wishlist to localStorage', e);
    }
  }, [wishlistItems]);

  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3200);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    showToast(`Added ${quantity > 1 ? `${quantity}x ` : ''}"${product.name}" to cart!`);
  };

  const updateQuantity = (productId, delta) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    const target = cartItems.find((item) => item.id === productId);
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    if (target) {
      showToast(`Removed "${target.name}" from cart`, 'info');
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedPromo(null);
  };

  const toggleWishlist = (product) => {
    const exists = wishlistItems.some((item) => item.id === product.id);
    if (exists) {
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed from favorites`, 'info');
    } else {
      setWishlistItems((prev) => [...prev, product]);
      showToast(`Saved to favorites!`);
    }
  };

  const isWishlisted = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  // Pricing calculations
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 75;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const deliveryFee = isFreeShipping ? 0 : 6.99;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  // Apply promo
  const applyPromoCode = (code) => {
    const normalized = (code || promoCodeInput).trim().toUpperCase();
    setPromoError('');
    if (!normalized) {
      setPromoError('Please enter a coupon code.');
      return;
    }
    const promo = PROMO_CODES[normalized];
    if (!promo) {
      setPromoError('Invalid coupon code. Try KITCHEN15 or CHEF20.');
      return;
    }
    if (promo.minOrder && subtotal < promo.minOrder) {
      setPromoError(`This code requires a minimum order of $${promo.minOrder}.`);
      return;
    }
    setAppliedPromo({ code: normalized, ...promo });
    setPromoCodeInput('');
    showToast(`Promo "${normalized}" applied!`);
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast('Promo code removed', 'info');
  };

  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discountAmount = (subtotal * appliedPromo.discountPercent) / 100;
    } else if (appliedPromo.discountAmount) {
      discountAmount = Math.min(subtotal, appliedPromo.discountAmount);
    }
  }

  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const estimatedTax = taxableAmount > 0 ? taxableAmount * 0.08 : 0;
  const finalTotal = Math.max(0, taxableAmount + deliveryFee + estimatedTax);

  const checkoutSuccess = (orderData) => {
    setActiveOrder(orderData);
    clearCart();
    setIsCheckoutOpen(false);
    showToast('Order placed successfully! 🎉', 'success');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        totalItemCount,
        subtotal,
        discountAmount,
        deliveryFee,
        isFreeShipping,
        freeShippingThreshold,
        progressToFreeShipping,
        amountToFreeShipping,
        estimatedTax,
        finalTotal,
        appliedPromo,
        promoCodeInput,
        setPromoCodeInput,
        promoError,
        applyPromoCode,
        removePromoCode,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toggleWishlist,
        isWishlisted,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        quickViewProduct,
        setQuickViewProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        activeOrder,
        setActiveOrder,
        checkoutSuccess,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
