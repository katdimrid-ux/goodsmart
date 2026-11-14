import React, { useEffect, useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SplashScreen({ onComplete }) {
  const { t } = useLanguage();
  // Animation stages: 'intro' -> 'sucking' -> 'absorbed' -> 'slide-up'
  const [animStage, setAnimStage] = useState('intro');

  useEffect(() => {
    // 1. Démarrage de l'aspiration après 0.85s
    const suckTimer = setTimeout(() => {
      setAnimStage('sucking');
    }, 850);

    // 2. Texte entièrement aspiré dans le panier à 1.65s
    const absorbedTimer = setTimeout(() => {
      setAnimStage('absorbed');
    }, 1650);

    // 3. Déclenchement du glissement fluide vers le haut (Slide-up) à 2.05s
    const slideTimer = setTimeout(() => {
      setAnimStage('slide-up');
    }, 2050);

    // 4. Fin de l'animation et fermeture après le slide-up (2.8s)
    const endTimer = setTimeout(() => {
      onComplete?.();
    }, 2800);

    return () => {
      clearTimeout(suckTimer);
      clearTimeout(absorbedTimer);
      clearTimeout(slideTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  const handleFastForward = () => {
    if (animStage !== 'slide-up') {
      setAnimStage('slide-up');
      setTimeout(() => {
        onComplete?.();
      }, 700);
    }
  };

  const isSlideUp = animStage === 'slide-up';
  const isSucking = animStage === 'sucking' || animStage === 'absorbed' || isSlideUp;
  const isAbsorbed = animStage === 'absorbed' || isSlideUp;

  return (
    <div
      onClick={handleFastForward}
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 bg-white cursor-pointer select-none transition-all duration-700 ease-in-out ${
        isSlideUp ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* 
        Rendu minimaliste, lumineux et moderne sur fond ENTIÈREMENT BLANC (bg-white)
        Sans aucune boîte de contour rigide
      */}
      <div className="relative flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Halo doux Island Green sur fond blanc */}
        <div className="absolute w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Icône du Panier d'Achat flottante sur fond blanc */}
        <div className="relative z-20 flex items-center justify-center">
          <div
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-500/15 transition-transform ${
              animStage === 'sucking' ? 'animate-cart-gulp' : ''
            }`}
          >
            <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600" />
            
            {/* Confirmation subtile après absorption */}
            {isAbsorbed && (
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white rounded-full p-1 shadow-md animate-in zoom-in-75 duration-200">
                <Check className="w-3.5 h-3.5" />
              </span>
            )}
          </div>
        </div>

        {/* Nom imposant "Goods Mart" en Bleu Marine et Island Green */}
        <div className="relative h-14 sm:h-16 flex items-center justify-center z-10">
          <div className={isSucking ? 'animate-suck' : 'opacity-100 scale-100'}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-marine-900 whitespace-nowrap flex items-center justify-center gap-1.5">
              <span>Goods</span>
              <span className="text-emerald-500">Mart</span>
            </h1>
          </div>
        </div>

        {/* Tagline discrète */}
        <p className="text-xs sm:text-sm font-medium text-stone-400 tracking-wider uppercase pt-2">
          {t.brandTagline}
        </p>

      </div>
    </div>
  );
}
