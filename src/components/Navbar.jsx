import React from 'react';
import { ShoppingBag, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenBurger }) {
  const { totalItemCount, setIsCartOpen } = useCart();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Gauche : Menu Burger & Logo "Goods Mart" */}
          <div className="flex items-center gap-3">
            {/* Bouton Menu Burger */}
            <button
              onClick={onOpenBurger}
              className="p-2.5 text-marine-900 hover:text-marine-700 hover:bg-stone-100/80 rounded-2xl transition-all active:scale-95 shadow-2xs"
              aria-label="Ouvrir le menu"
              title="Menu principal"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Titre de Marque Goods Mart */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-baseline gap-1 focus:outline-none group"
            >
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-marine-900 group-hover:opacity-90 transition-opacity">
                Goods Mart
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 ml-0.5 inline-block" />
            </a>
          </div>

          {/* Droite : Profil Account & Bouton Panier */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Icône de Profil Account */}
            <button
              onClick={onOpenBurger}
              className="p-2.5 text-stone-700 hover:text-marine-900 hover:bg-stone-100 rounded-full transition-colors shadow-2xs"
              aria-label={t.account}
              title={t.account}
            >
              <User className="w-5 h-5" />
            </button>

            {/* Bouton Panier en Bleu Marine avec Badge Island Green */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center px-4 py-2.5 rounded-full bg-marine-900 hover:bg-marine-800 text-white transition-all shadow-sm active:scale-95 group"
              aria-label={t.cart}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 sm:mr-1.5" />
              <span className="hidden sm:inline text-xs font-semibold">{t.cart}</span>
              {totalItemCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:static sm:ml-1.5 bg-emerald-500 text-white text-[11px] font-bold px-1.5 py-0.5 sm:px-2 rounded-full leading-tight shadow-xs">
                  {totalItemCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
