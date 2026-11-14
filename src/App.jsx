import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SECTIONS, PRODUCTS } from './data/kitchenProducts';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import SearchBarSubheader from './components/SearchBarSubheader';
import BurgerMenuDrawer from './components/BurgerMenuDrawer';
import CategorySection from './components/CategorySection';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import ToastContainer from './components/ToastContainer';
import Footer from './components/Footer';
import { SearchX } from 'lucide-react';

function MarketApp() {
  const [showSplash, setShowSplash] = useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();

  // Filtrage par recherche
  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return PRODUCTS.filter((product) => {
      const matchName = product.name.toLowerCase().includes(query);
      const matchUnit = product.unit?.toLowerCase().includes(query);
      return matchName || matchUnit;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/80 text-stone-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* 1. Splash Screen épuré sur fond entièrement BLANC (bg-white) */}
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {/* 2. Menu Burger Latéral avec Sélecteur de Langues Interactif */}
      <BurgerMenuDrawer
        isOpen={isBurgerOpen}
        onClose={() => setIsBurgerOpen(false)}
      />

      {/* 3. Header Principal Aéré (Logo Goods Mart, Burger, Profil, Panier) */}
      <Navbar
        onOpenBurger={() => setIsBurgerOpen(true)}
      />

      {/* 3. Barre de recherche dédiée située un cran plus bas */}
      <SearchBarSubheader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Contenu Principal du Marché */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        
        {/* Mode Recherche : Grille fluide d'au moins 2 colonnes sur mobile */}
        {searchQuery.trim() ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h2 className="text-sm sm:text-base font-bold text-marine-900">
                {t.resultsFor} "{searchQuery}" ({filteredSearchResults.length})
              </h2>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold underline"
              >
                {t.clear}
              </button>
            </div>

            {filteredSearchResults.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                {filteredSearchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12 text-center max-w-md mx-auto my-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <SearchX className="w-6 h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900">{t.noResultsTitle}</h3>
                <p className="text-xs text-stone-500">
                  {t.noResultsDesc}
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 bg-marine-900 hover:bg-marine-800 text-white font-medium text-xs rounded-xl shadow-xs transition-all"
                >
                  {t.viewAllAisles}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Mode Rayons : Sections par catégories avec défilement horizontal (Swipe à droite) */
          <div className="space-y-4">
            
            {/* Tagline d'ambiance discrète */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-marine-900">
                  {t.freshMarketToday}
                </span>
              </div>
              <span className="text-[11px] text-stone-400 hidden sm:inline">
                {t.swipeHint}
              </span>
            </div>

            {/* Sections thématiques avec swipe fluide */}
            {SECTIONS.map((section) => {
              const sectionProducts = PRODUCTS.filter((p) => p.sectionId === section.id);
              return (
                <CategorySection
                  key={section.id}
                  section={section}
                  products={sectionProducts}
                />
              );
            })}
          </div>
        )}
      </main>

      {/* Tiroir Panier & Modales de Commande */}
      <CartDrawer />
      <CheckoutModal />
      <OrderConfirmationModal />
      <ToastContainer />

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <MarketApp />
      </CartProvider>
    </LanguageProvider>
  );
}
