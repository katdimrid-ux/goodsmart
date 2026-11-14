import React, { useState } from 'react';
import {
  X,
  User,
  Package,
  MapPin,
  CreditCard,
  Info,
  Globe,
  Moon,
  Sun,
  HelpCircle,
  LogOut,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Check
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export default function BurgerMenuDrawer({ isOpen, onClose }) {
  const { showToast } = useCart();
  const { lang, setLang, t, supportedLanguages } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('Clair');

  if (!isOpen) return null;

  const handleSelectLanguage = (code, name) => {
    setLang(code);
    showToast(`Langue sélectionnée : ${name}`, 'info');
  };

  const handleToggleTheme = () => {
    const nextTheme = currentTheme === 'Clair' ? 'Sombre' : 'Clair';
    setCurrentTheme(nextTheme);
    showToast(`${t.theme} : ${nextTheme}`, 'info');
  };

  const handleAction = (label) => {
    showToast(`${label}`, 'info');
    onClose();
  };

  const handleLogout = () => {
    showToast(t.logout, 'info');
    onClose();
  };

  const currentLangObj = supportedLanguages.find((l) => l.code === lang) || supportedLanguages[0];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Fond obscurci très doux */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-marine-950/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-sm bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-left duration-300">
          
          {/* Haut du Drawer & Profil Utilisateur */}
          <div className="p-6 bg-stone-50/70">
            {/* Bouton Fermer */}
            <div className="flex items-center justify-between pb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> {t.menuTitle}
              </span>
              <button
                onClick={onClose}
                className="p-2 text-stone-400 hover:text-stone-700 hover:bg-white rounded-full transition-colors shadow-2xs"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Carte Profil */}
            <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-marine-900 to-marine-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                AD
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-stone-900 truncate">
                  Alexandre Dupont
                </h3>
                <p className="text-xs text-stone-500 truncate">
                  alexandre.dupont@email.com
                </p>
                <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {t.memberStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Liste des Options du Menu */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            
            {/* Profil / Compte */}
            <button
              onClick={() => handleAction(t.profile)}
              className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 text-stone-800 text-sm font-medium transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-stone-100 group-hover:bg-emerald-50 text-stone-600 group-hover:text-emerald-700 rounded-xl transition-colors">
                  <User className="w-4 h-4" />
                </div>
                <span>{t.profile}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>

            {/* Historique des Commandes */}
            <button
              onClick={() => handleAction(t.orders)}
              className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 text-stone-800 text-sm font-medium transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-stone-100 group-hover:bg-emerald-50 text-stone-600 group-hover:text-emerald-700 rounded-xl transition-colors">
                  <Package className="w-4 h-4" />
                </div>
                <span>{t.orders}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>

            {/* Adresses Enregistrées */}
            <button
              onClick={() => handleAction(t.addresses)}
              className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 text-stone-800 text-sm font-medium transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-stone-100 group-hover:bg-emerald-50 text-stone-600 group-hover:text-emerald-700 rounded-xl transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{t.addresses}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>

            {/* Moyens de Paiement */}
            <button
              onClick={() => handleAction(t.payments)}
              className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 text-stone-800 text-sm font-medium transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-stone-100 group-hover:bg-emerald-50 text-stone-600 group-hover:text-emerald-700 rounded-xl transition-colors">
                  <CreditCard className="w-4 h-4" />
                </div>
                <span>{t.payments}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>

            <div className="my-2 h-px bg-stone-100" />

            {/* SÉLECTEUR DE LANGUES INTERACTIF (Accordion / Sous-menu) */}
            <div className="rounded-2xl bg-stone-50/70 p-1">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="w-full flex items-center justify-between p-2.5 text-stone-800 text-sm font-medium rounded-xl hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white text-emerald-600 rounded-xl shadow-2xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span>{t.languages}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span>{currentLangObj.flag}</span>
                    <span>{currentLangObj.name}</span>
                  </span>
                  {isLangOpen ? (
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  )}
                </div>
              </button>

              {/* Liste dépliable des langues supportées */}
              {isLangOpen && (
                <div className="mt-1 pt-1 border-t border-stone-200/50 space-y-1 pl-2 pr-1 pb-1 animate-in slide-in-from-top-1 duration-200">
                  {supportedLanguages.map((item) => {
                    const isSelected = item.code === lang;
                    return (
                      <button
                        key={item.code}
                        onClick={() => handleSelectLanguage(item.code, item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'text-stone-700 hover:bg-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{item.flag}</span>
                          <span>{item.name}</span>
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Paramètres de thème */}
            <button
              onClick={handleToggleTheme}
              className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 text-stone-800 text-sm font-medium transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-stone-100 group-hover:bg-emerald-50 text-stone-600 group-hover:text-emerald-700 rounded-xl transition-colors">
                  {currentTheme === 'Clair' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </div>
                <span>{t.theme}</span>
              </div>
              <span className="text-xs font-semibold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full">
                {currentTheme === 'Clair' ? t.themeLight : t.themeDark}
              </span>
            </button>

            {/* À propos de nous */}
            <button
              onClick={() => handleAction(t.about)}
              className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 text-stone-800 text-sm font-medium transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-stone-100 group-hover:bg-emerald-50 text-stone-600 group-hover:text-emerald-700 rounded-xl transition-colors">
                  <Info className="w-4 h-4" />
                </div>
                <span>{t.about}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>

            {/* Aide & Support */}
            <button
              onClick={() => handleAction(t.help)}
              className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 text-stone-800 text-sm font-medium transition-colors group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-stone-100 group-hover:bg-emerald-50 text-stone-600 group-hover:text-emerald-700 rounded-xl transition-colors">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span>{t.help}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>

          </div>

          {/* Pied du Drawer */}
          <div className="p-4 bg-stone-50/50 space-y-3">
            <button
              onClick={handleLogout}
              className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-rose-50 text-rose-600 text-sm font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>{t.logout}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.versionBadge}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
