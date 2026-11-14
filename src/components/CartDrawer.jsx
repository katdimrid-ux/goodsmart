import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Tag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    totalItemCount,
    subtotal,
    discountAmount,
    deliveryFee,
    isFreeShipping,
    amountToFreeShipping,
    progressToFreeShipping,
    estimatedTax,
    finalTotal,
    appliedPromo,
    promoCodeInput,
    setPromoCodeInput,
    promoError,
    applyPromoCode,
    removePromoCode,
    updateQuantity,
    removeFromCart,
    setIsCheckoutOpen,
  } = useCart();

  const { t } = useLanguage();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Fond obscurci très doux */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-marine-950/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* En-tête épuré */}
          <div className="p-5 flex items-center justify-between bg-stone-50/80 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-marine-100 text-marine-900 rounded-2xl shadow-2xs">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-marine-900">{t.yourCart}</h2>
                <p className="text-xs text-stone-500">
                  {totalItemCount} {totalItemCount <= 1 ? t.selectedItem : t.selectedItems}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-white rounded-full transition-colors shadow-2xs"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Indicateur de livraison gratuite Island Green */}
          {cartItems.length > 0 && (
            <div className="bg-emerald-50 px-5 py-3.5">
              <div className="flex items-center justify-between text-xs font-semibold mb-2 text-stone-800">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  {isFreeShipping ? (
                    <span className="text-emerald-700 font-bold">{t.freeDeliveryUnlocked}</span>
                  ) : (
                    <span>
                      {t.addMoreForFreeDelivery} <strong className="text-emerald-800">${amountToFreeShipping.toFixed(2)}</strong> {t.forFreeDelivery}
                    </span>
                  )}
                </span>
                <span className="text-emerald-700 font-bold">{progressToFreeShipping}%</span>
              </div>
              <div className="w-full bg-emerald-100 h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 transition-all duration-500 rounded-full"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>
          )}

          {/* Liste des articles */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-stone-800 text-base">{t.emptyCartTitle}</h3>
                  <p className="text-xs text-stone-500 max-w-xs">
                    {t.emptyCartDesc}
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 bg-marine-900 hover:bg-marine-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-all"
                >
                  {t.startShopping}
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3.5 p-3.5 bg-stone-50/70 hover:bg-stone-50 rounded-2xl shadow-xs items-center justify-between transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="%23f5f5f4"><rect width="100" height="100" fill="%23f5f5f4"/><circle cx="50" cy="45" r="15" fill="%23d6d3d1"/></svg>';
                    }}
                    className="w-16 h-16 object-cover rounded-xl bg-stone-200 shrink-0 shadow-2xs"
                  />

                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900 truncate">
                      {item.name}
                    </h4>
                    <div className="text-xs font-bold text-stone-900 mt-0.5">
                      ${item.price.toFixed(2)}
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center bg-white rounded-xl shadow-2xs p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-0.5 hover:bg-stone-100 text-stone-600 rounded-lg transition-colors"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-0.5 hover:bg-stone-100 text-stone-600 rounded-lg transition-colors"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col justify-between items-end h-16 py-0.5">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                      title="Retirer l'article"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="text-xs font-bold text-marine-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Résumé de commande */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-stone-50/80 shadow-md space-y-3.5">
              {/* Code promo */}
              <div className="space-y-1.5">
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-emerald-50 px-3.5 py-2 rounded-xl text-xs shadow-2xs">
                    <span className="text-emerald-800 font-semibold flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                      {appliedPromo.code}: {appliedPromo.description}
                    </span>
                    <button
                      onClick={removePromoCode}
                      className="text-stone-400 hover:text-stone-700 font-bold ml-2"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      applyPromoCode();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={promoCodeInput}
                      onChange={(e) => setPromoCodeInput(e.target.value)}
                      placeholder={t.couponPlaceholder}
                      className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-white shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-medium"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-stone-800 hover:bg-stone-900 text-white rounded-xl text-xs font-semibold shadow-xs"
                    >
                      {t.apply}
                    </button>
                  </form>
                )}
                {promoError && (
                  <p className="text-[11px] text-rose-600 font-medium">{promoError}</p>
                )}
              </div>

              {/* Détails du Total */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-1">
                <div className="flex justify-between">
                  <span>{t.subtotal}</span>
                  <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>{t.discount}</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>{t.delivery}</span>
                  <span>{deliveryFee === 0 ? <strong className="text-emerald-600">{t.free}</strong> : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.estimatedTax}</span>
                  <span>${estimatedTax.toFixed(2)}</span>
                </div>
                <div className="h-px bg-stone-200/60 my-1" />
                <div className="flex justify-between text-sm font-bold text-stone-900">
                  <span>{t.total}</span>
                  <span className="text-marine-900 font-extrabold text-base">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Bouton de Commande Bleu Marine */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 rounded-2xl bg-marine-900 hover:bg-marine-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-marine-900/15 active:scale-98 transition-all"
              >
                <span>{t.checkout}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.sslSecure}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
