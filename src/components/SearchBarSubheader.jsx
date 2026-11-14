import React from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SearchBarSubheader({ searchQuery, onSearchChange }) {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <div className="relative w-full max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full pl-11 pr-11 py-3 sm:py-3.5 rounded-2xl bg-white shadow-xs hover:shadow-sm focus:shadow-md text-sm text-stone-900 placeholder-stone-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
            aria-label={t.clear}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
