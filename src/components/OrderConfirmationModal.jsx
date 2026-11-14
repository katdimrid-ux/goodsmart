import React from 'react';
import { CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OrderConfirmationModal() {
  const { activeOrder, setActiveOrder } = useCart();

  if (!activeOrder) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center flex items-center justify-center py-8">
        <div
          onClick={() => setActiveOrder(null)}
          className="fixed inset-0 bg-marine-950/60 backdrop-blur-xs transition-opacity"
        />

        <div className="relative inline-block w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center z-10 animate-in zoom-in-95 duration-200">
          
          {/* Icône Island Green avec halo doux */}
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-marine-900">Commande Confirmée !</h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Votre commande <strong className="text-stone-900">{activeOrder.orderNumber}</strong> est en cours de préparation au marché.
          </p>

          {/* Détails sans bordures rigides */}
          <div className="mt-5 bg-stone-50 rounded-2xl p-4 text-left space-y-2.5 text-xs shadow-2xs">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200/50">
              <span className="text-stone-500 font-medium">Livraison Express :</span>
              <span className="font-semibold text-stone-900 flex items-center gap-1">
                <Truck className="w-4 h-4 text-emerald-600" /> Sous 24h - 48h
              </span>
            </div>

            <div>
              <span className="text-stone-500 font-medium block">Destinataire :</span>
              <p className="font-semibold text-stone-800">
                {activeOrder.shipping.fullName} • {activeOrder.shipping.address}, {activeOrder.shipping.city}
              </p>
            </div>

            <div className="pt-2 border-t border-stone-200/50 flex justify-between font-bold text-sm text-stone-900">
              <span>Montant Réglé :</span>
              <span className="text-marine-900">${activeOrder.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Bouton retour marché */}
          <div className="mt-6">
            <button
              onClick={() => setActiveOrder(null)}
              className="w-full py-3.5 px-4 rounded-2xl bg-marine-900 hover:bg-marine-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Continuer mes achats</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
