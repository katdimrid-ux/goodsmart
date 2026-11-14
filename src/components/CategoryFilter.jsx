import React from 'react';
import { APPLIANCE_CATEGORIES } from '../data/kitchenProducts';

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  productCount,
  searchQuery,
  onClearSearch,
}) {
  return (
    <div className="py-4 sm:py-6 space-y-3">
      {/* Horizontal scrolling row of appliance category pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        {APPLIANCE_CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 select-none ${
                isActive
                  ? 'bg-marine-900 text-white shadow-sm ring-2 ring-marine-900/10'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Clean status indicator for active search or filter */}
      {(searchQuery || activeCategory !== 'all') && (
        <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong className="text-stone-900">{productCount}</strong> {productCount === 1 ? 'item' : 'items'}
            </span>
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-medium border border-emerald-200/60">
                Matching: "{searchQuery}"
                <button
                  onClick={onClearSearch}
                  className="hover:text-emerald-950 font-bold ml-0.5 text-xs"
                >
                  ✕
                </button>
              </span>
            )}
          </div>

          {(searchQuery || activeCategory !== 'all') && (
            <button
              onClick={() => {
                onSelectCategory('all');
                onClearSearch();
              }}
              className="text-stone-500 hover:text-marine-900 underline text-xs font-medium"
            >
              Reset filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
