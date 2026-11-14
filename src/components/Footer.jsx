import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-marine-950 text-stone-400 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-white tracking-tight">Goods Mart</span>
            <span className="text-emerald-400 text-xs font-semibold">• {t.freshMarketToday}</span>
          </div>

          <p className="text-stone-400 text-center sm:text-left">
            © {new Date().getFullYear()} Goods Mart. {t.footerTagline}
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="text-emerald-400 font-medium">✓ {t.freshProducts}</span>
            <span>•</span>
            <span className="font-medium">{t.fastDelivery}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
