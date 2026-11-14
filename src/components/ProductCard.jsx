import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { Check, Plus } from 'lucide-react';

// Fallback SVG haute fidélité pour éviter tout crash réseau ou boucle d'erreur
const FALLBACK_IMAGE = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" fill="%23f5f5f4"><rect width="400" height="400" fill="%23f5f5f4"/><circle cx="200" cy="180" r="45" fill="%23e7e5e4"/><path d="M120 280c20-40 60-60 80-60s60 20 80 60" fill="%23d6d3d1"/><text x="50%" y="85%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="600" font-size="16" fill="%23a8a29e">Goods Mart</text></svg>';

export default function ProductCard({ product, isSwipeItem = false }) {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [justAdded, setJustAdded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const handleImageError = (e) => {
    // Évite la récursion infinie qui faisait crasher et scintiller les cellules
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMAGE;
    setImgLoaded(true);
  };

  return (
    <div
      className={`group bg-white rounded-2xl shadow-xs hover:shadow-md p-3 sm:p-3.5 flex flex-col justify-between transition-shadow duration-200 select-none ${
        isSwipeItem
          ? 'w-[155px] min-w-[155px] sm:w-[215px] sm:min-w-[215px] snap-start shrink-0 h-full'
          : 'w-full h-full'
      }`}
    >
      {/* 1. Conteneur d'image calibré anti-glitch avec accélération matérielle */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-100 mb-2.5 transform-gpu isolate">
        {/* Placeholder doux pendant le chargement */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-stone-100 animate-pulse" />
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-transform duration-300 transform-gpu group-hover:scale-105 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* 2. Détails du produit à hauteur normalisée (empêche les sauts de lignes et décalages) */}
      <div className="flex-1 flex flex-col justify-between space-y-2">
        <div>
          {/* Hauteur minimale fixée pour aligner parfaitement tous les prix et boutons sur la même ligne */}
          <h3 className="font-semibold text-xs sm:text-sm text-stone-900 line-clamp-2 leading-snug min-h-[2.5rem] sm:min-h-[2.75rem] flex items-start">
            {product.name}
          </h3>
          <p className="mt-1 text-sm sm:text-base font-bold text-stone-900">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* 3. Bouton d'ajout en Bleu Marine (Design Uber / Bolt sans tremblement) */}
        <button
          onClick={handleAdd}
          className={`w-full py-2 sm:py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors duration-150 active:scale-98 shadow-xs ${
            justAdded
              ? 'bg-emerald-600 text-white shadow-emerald-600/20'
              : 'bg-marine-900 hover:bg-marine-800 text-white shadow-marine-900/10'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5 shrink-0" />
              <span>{t.added}</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5 shrink-0" />
              <span>{t.add}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
