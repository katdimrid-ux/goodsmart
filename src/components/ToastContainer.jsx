import React from 'react';
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ToastContainer() {
  const { toasts, removeToast } = useCart();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        let icon = <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />;
        let borderClass = 'border-emerald-500/30';
        let bgClass = 'bg-stone-900 text-white';

        if (toast.type === 'info') {
          icon = <Info className="w-4 h-4 text-sky-400 shrink-0" />;
          borderClass = 'border-sky-500/30';
        } else if (toast.type === 'error') {
          icon = <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />;
          borderClass = 'border-rose-500/30';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-xl shadow-xl border ${borderClass} ${bgClass} animate-in fade-in slide-in-from-bottom-3 duration-300`}
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              {icon}
              <span className="line-clamp-2">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-stone-400 hover:text-white p-1 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
