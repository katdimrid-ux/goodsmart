import React, { useState } from 'react';
import { X, Lock, Truck, CreditCard, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cartItems,
    subtotal,
    discountAmount,
    deliveryFee,
    estimatedTax,
    finalTotal,
    appliedPromo,
    checkoutSuccess,
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    email: 'jane.courses@example.com',
    address: '15 Boulevard du Marché',
    city: 'Paris',
    state: 'IDF',
    zipCode: '75010',
    paymentMethod: 'card',
    cardNumber: '4242 •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '888',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const orderNumber = `GM-${Math.floor(100000 + Math.random() * 900000)}`;
      checkoutSuccess({
        orderNumber,
        items: [...cartItems],
        total: finalTotal,
        date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }),
        shipping: formData,
      });
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center py-6">
        <div
          onClick={() => !isSubmitting && setIsCheckoutOpen(false)}
          className="fixed inset-0 bg-marine-950/60 backdrop-blur-xs transition-opacity"
        />

        <div className="relative inline-block w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-left z-10 animate-in zoom-in-95 duration-200">
          
          {/* En-tête */}
          <div className="flex items-center justify-between pb-5 mb-5 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-marine-100 text-marine-900 rounded-2xl shadow-2xs">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-marine-900">Paiement Sécurisé</h2>
                <p className="text-xs text-stone-500">Protection cryptée SSL 256 bits</p>
              </div>
            </div>

            <button
              onClick={() => !isSubmitting && setIsCheckoutOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-800 rounded-full hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Adresse de livraison */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-marine-900 uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-600" />
                Adresse de Livraison
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Nom complet</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-stone-50 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-stone-50 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Adresse</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-stone-50 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Ville</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-stone-50 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Région</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-stone-50 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Code postal</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-stone-50 shadow-2xs focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Mode de paiement */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-marine-900 uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-emerald-600" />
                Moyen de Paiement
              </h3>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'card', label: 'Carte Bancaire', sub: 'Immédiat' },
                  { id: 'apple', label: 'Apple/Google Pay', sub: 'Sans contact' },
                  { id: 'cod', label: 'À la livraison', sub: 'Espèces/Carte' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                    className={`p-3 rounded-2xl text-left transition-all ${
                      formData.paymentMethod === m.id
                        ? 'bg-marine-900 text-white shadow-sm'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-800'
                    }`}
                  >
                    <div className="text-xs font-bold">{m.label}</div>
                    <div className={`text-[10px] ${formData.paymentMethod === m.id ? 'text-marine-100' : 'text-stone-500'}`}>{m.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Récapitulatif doux sans bordures pixel */}
            <div className="bg-stone-50 rounded-2xl p-4 shadow-2xs space-y-2 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Sous-total ({cartItems.length} articles)</span>
                <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Réduction ({appliedPromo.code})</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-600">
                <span>Livraison</span>
                <span>{deliveryFee === 0 ? <strong className="text-emerald-600">Gratuite</strong> : `$${deliveryFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Taxes</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="h-px bg-stone-200/50 my-1" />
              <div className="flex justify-between text-sm font-bold text-stone-900">
                <span>Total à régler</span>
                <span className="text-marine-900 font-extrabold text-base">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Bouton de confirmation */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-marine-900 hover:bg-marine-800 disabled:bg-stone-400 text-white font-semibold text-sm shadow-md shadow-marine-900/15 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Validation de la commande...</span>
                </div>
              ) : (
                <>
                  <span>Confirmer la commande (${finalTotal.toFixed(2)})</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
