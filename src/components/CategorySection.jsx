import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CategorySection({ section, products }) {
  const scrollContainerRef = useRef(null);
  const { t } = useLanguage();

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!products || products.length === 0) return null;

  // Titre et sous-titre traduits dynamiquement
  const sectionTranslation = t.sections?.[section.id] || {};
  const displayTitle = sectionTranslation.title || section.title;
  const displaySubtitle = sectionTranslation.subtitle || section.subtitle;

  return (
    <section className="py-3 sm:py-5">
      {/* En-tête de section traduit */}
      <div className="flex items-end justify-between mb-3 px-1">
        <div>
          <h2 className="text-base sm:text-xl font-bold tracking-tight text-marine-900">
            {displayTitle}
          </h2>
          {displaySubtitle && (
            <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
              {displaySubtitle}
            </p>
          )}
        </div>

        {/* Contrôles de défilement (Desktop) */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="p-2 rounded-full bg-white hover:bg-stone-50 text-stone-700 transition-colors shadow-xs active:scale-95"
            aria-label="Faire défiler vers la gauche"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2 rounded-full bg-white hover:bg-stone-50 text-stone-700 transition-colors shadow-xs active:scale-95"
            aria-label="Faire défiler vers la droite"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Conteneur de défilement horizontal fluide anti-glitch */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto flex items-stretch gap-3 sm:gap-4 pb-3 pt-1 snap-x scrollbar-none touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehaviorX: 'contain',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isSwipeItem={true}
          />
        ))}
      </div>
    </section>
  );
}
