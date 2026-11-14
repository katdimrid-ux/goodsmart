import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Plus, Minus, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductQuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isWishlisted } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const wishlisted = isWishlisted(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center">
        {/* Dimmed backdrop */}
        <div
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Box */}
        <div className="relative inline-block w-full max-w-3xl p-6 sm:p-8 my-8 text-left align-middle bg-white rounded-3xl shadow-2xl transform transition-all z-10 border border-stone-200">
          
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            <div className="space-y-3">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
                {quickViewProduct.badge && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-stone-950 font-black text-xs px-2.5 py-1 rounded shadow-md uppercase tracking-wider">
                    {quickViewProduct.badge}
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {quickViewProduct.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="uppercase tracking-wider font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded">
                    {quickViewProduct.category}
                  </span>
                  <div className="flex items-center gap-1 text-stone-700">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-bold text-sm">{quickViewProduct.rating}</span>
                    <span className="text-stone-400 text-xs">({quickViewProduct.reviewCount} reviews)</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 leading-snug">
                  {quickViewProduct.name}
                </h2>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-black text-stone-900">
                    ${quickViewProduct.price.toFixed(2)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm text-stone-400 line-through">
                      ${quickViewProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {quickViewProduct.inStock && (
                    <span className="ml-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      In Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Detailed Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Specs Table */}
              {quickViewProduct.specs && (
                <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80 space-y-1.5 text-xs">
                  <h4 className="font-bold text-stone-900 mb-1 text-[11px] uppercase tracking-wider">
                    Product Specifications
                  </h4>
                  {Object.entries(quickViewProduct.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-0.5 border-b border-stone-200/50 last:border-none">
                      <span className="text-stone-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="text-stone-800 font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons: Quantity, Add to Cart, Wishlist */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50 p-1">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-1.5 hover:bg-stone-200 text-stone-600 rounded-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-bold text-stone-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-1.5 hover:bg-stone-200 text-stone-600 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3 px-4 bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-amber-600/25 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart (${(quickViewProduct.price * quantity).toFixed(2)})</span>
                  </button>

                  {/* Wishlist toggle */}
                  <button
                    onClick={() => toggleWishlist(quickViewProduct)}
                    className={`p-3 rounded-xl border transition-all ${
                      wishlisted
                        ? 'bg-rose-50 border-rose-300 text-rose-600'
                        : 'border-stone-200 text-stone-600 hover:text-rose-600 hover:bg-stone-50'
                    }`}
                    title={wishlisted ? 'Saved in wishlist' : 'Save to wishlist'}
                  >
                    <Heart className={`w-5 h-5 ${wishlisted ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Trust guarantees */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-stone-500 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Truck className="w-3 h-3 text-amber-600" /> Fast Delivery
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-amber-600" /> 2-Yr Guarantee
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <RefreshCw className="w-3 h-3 text-amber-600" /> Free Returns
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
