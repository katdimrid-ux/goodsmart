import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function WishlistDrawer() {
  const { isWishlistOpen, setIsWishlistOpen, wishlistItems, toggleWishlist, addToCart } = useCart();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/50">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-rose-100 text-rose-600 rounded-lg">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900">Saved Favorites</h2>
                <p className="text-xs text-stone-500 font-medium">
                  {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-300 flex items-center justify-center">
                  <Heart className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-stone-800 text-lg">Your wishlist is empty</h3>
                  <p className="text-xs text-stone-500 max-w-xs">
                    Tap the heart icon on any kitchen item to save it for later or compare.
                  </p>
                </div>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl shadow-md transition-all"
                >
                  Browse Kitchen Catalog
                </button>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 bg-stone-50/80 rounded-xl border border-stone-200 items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg bg-stone-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 line-clamp-1">
                      {item.name}
                    </h4>
                    <div className="text-xs font-extrabold text-stone-900 mt-1">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => {
                        addToCart(item, 1);
                      }}
                      className="p-2 bg-stone-900 hover:bg-amber-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => toggleWishlist(item)}
                      className="p-2 text-stone-400 hover:text-rose-600 rounded-lg hover:bg-stone-200/60 transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistItems.length > 0 && (
            <div className="p-4 border-t border-stone-200 bg-stone-50">
              <button
                onClick={() => {
                  wishlistItems.forEach((item) => addToCart(item, 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span>Add All Items to Cart</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
