import React from 'react';
import { Flame, ShieldCheck, Truck, Award, Sparkles, ArrowRight, Star } from 'lucide-react';
import { STORE_FEATURES } from '../data/kitchenProducts';

export default function Hero({ onExploreCategory }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-800 text-white pt-8 pb-14 sm:pt-14 sm:pb-20">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Premium Kitchen Goods & Culinary Tools</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Master Every Recipe with <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                Professional Cookware
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Equip your kitchen with chef-tested cast iron, artisan cutlery, high-powered appliances, and sustainable prep goods built to last a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onExploreCategory('cookware')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Shop Cookware</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onExploreCategory('appliances')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-stone-800/80 hover:bg-stone-700/90 text-stone-200 font-semibold text-sm border border-stone-700/80 transition-all flex items-center justify-center gap-2"
              >
                <span>View Appliances</span>
              </button>
            </div>

            {/* Social Proof / Mini Ratings */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-stone-200">4.9/5</span>
                <span>(3,500+ Reviews)</span>
              </div>
              <div className="hidden sm:block text-stone-700">•</div>
              <div>Over <strong className="text-stone-200">25,000+</strong> kitchens upgraded</div>
            </div>
          </div>

          {/* Right Spotlight Featured Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-stone-800/90 to-stone-900/90 border border-stone-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-stone-950 mb-4 group">
                <img
                  src="https://images.unsplash.com/photo-1584990347449-399b5ff01099?auto=format&fit=crop&w=800&q=80"
                  alt="Dutch Oven Featured"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 font-black text-xs px-2.5 py-1 rounded-md shadow-md uppercase tracking-wide">
                  Staff Favorite
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-stone-950/80 backdrop-blur-md px-3.5 py-2 rounded-lg flex items-center justify-between text-xs">
                  <span className="text-stone-300 font-medium">Heirloom Enamelled Cast Iron</span>
                  <span className="font-bold text-amber-400">$89.99</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-stone-100 text-base">Signature 6-Quart Dutch Oven</h3>
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">In Stock</span>
                </div>
                <p className="text-xs text-stone-400 line-clamp-2">
                  Engineered for exceptional heat distribution and slow simmering. Transitions effortlessly from cooktop to dinner table.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-stone-400 border-t border-stone-800">
                  <span>✓ Induction Safe</span>
                  <span>✓ Oven Up to 500°F</span>
                  <span>✓ Lifetime Durability</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Banner */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-stone-800/80">
          {STORE_FEATURES.map((feat, idx) => {
            const icons = {
              Truck: <Truck className="w-5 h-5 text-amber-400" />,
              ShieldCheck: <ShieldCheck className="w-5 h-5 text-amber-400" />,
              Award: <Award className="w-5 h-5 text-amber-400" />,
              Headphones: <Flame className="w-5 h-5 text-amber-400" />
            };

            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-stone-800/40 border border-stone-800/60"
              >
                <div className="p-2 rounded-lg bg-stone-800 text-amber-400 shrink-0">
                  {icons[feat.icon] || <Sparkles className="w-5 h-5 text-amber-400" />}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-200">{feat.title}</h4>
                  <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
