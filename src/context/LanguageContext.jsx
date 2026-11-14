import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export const SUPPORTED_LANGUAGES = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export const TRANSLATIONS = {
  fr: {
    // Splash & Brand
    brandTagline: 'Marché Frais & Ingrédients de Cuisine',
    freshMarketToday: 'Marché Frais du Jour',
    swipeHint: 'Faites glisser les rayons vers la droite pour explorer',
    
    // Header & Search
    searchPlaceholder: 'Rechercher des produits frais, condiments, tubercules...',
    cart: 'Panier',
    account: 'Mon Compte',
    
    // Search Results
    resultsFor: 'Résultats pour',
    clear: 'Effacer',
    noResultsTitle: 'Aucun ingrédient trouvé',
    noResultsDesc: 'Essayez un autre mot-clé (ex: tomate, oignon, piment, huile).',
    viewAllAisles: 'Voir tous les rayons',

    // Product Card
    add: 'Ajouter',
    added: 'Ajouté',

    // Drawer / Menu
    memberStatus: 'Client Privilège',
    menuTitle: 'Goods Mart Club',
    profile: 'Mon Profil & Compte',
    orders: 'Mes Commandes & Livraisons',
    addresses: 'Adresses de livraison',
    payments: 'Moyens de paiement',
    languages: 'Langue (Languages)',
    theme: 'Thème d\'affichage',
    themeLight: 'Clair',
    themeDark: 'Sombre',
    about: 'À propos de Goods Mart',
    help: 'Centre d\'aide & Assistance',
    logout: 'Se déconnecter',
    versionBadge: 'Goods Mart • Sécurisé',
    
    // Cart Drawer
    yourCart: 'Votre Panier',
    selectedItem: 'article sélectionné',
    selectedItems: 'articles sélectionnés',
    emptyCartTitle: 'Votre panier est vide',
    emptyCartDesc: 'Parcourez les rayons du marché et ajoutez vos ingrédients frais.',
    startShopping: 'Faire mon marché',
    freeDeliveryUnlocked: 'Livraison express gratuite débloquée !',
    addMoreForFreeDelivery: 'Plus que',
    forFreeDelivery: 'pour la livraison offerte',
    couponPlaceholder: 'Code Promo (ex: MARCHE15)',
    apply: 'Appliquer',
    subtotal: 'Sous-total',
    discount: 'Réduction',
    delivery: 'Livraison',
    free: 'Gratuite',
    estimatedTax: 'Taxes estimées',
    total: 'Total',
    checkout: 'Passer la commande',
    sslSecure: 'Paiement Sécurisé SSL',

    // Sections
    sections: {
      'legumes-frais': {
        title: 'Légumes & Frais',
        subtitle: 'Tomates du jardin, oignons rouges, poivrons et légumes feuilles',
      },
      'epices-condiments': {
        title: 'Épices & Condiments',
        subtitle: 'Piments forts, ail, gingembre, mélanges de curry et aromates',
      },
      'tubercules-grains': {
        title: 'Tubercules & Grains',
        subtitle: 'Ignames blanches fermes, plantains mûrs, riz et légumineuses',
      },
      'huiles-essentiels': {
        title: 'Huiles & Essentiels',
        subtitle: 'Huile de cuisson pure, huile d\'olive vierge et assaisonnements',
      },
    },

    // Footer
    footerTagline: 'Vos courses du marché livrées fraîches à domicile.',
    freshProducts: 'Produits 100% Frais',
    fastDelivery: 'Livraison Rapide',
  },

  en: {
    brandTagline: 'Fresh Market Groceries & Kitchen Ingredients',
    freshMarketToday: 'Today\'s Fresh Market',
    swipeHint: 'Swipe right to explore all market aisles',

    searchPlaceholder: 'Search fresh produce, condiments, tubers, oils...',
    cart: 'Cart',
    account: 'Account',

    resultsFor: 'Results for',
    clear: 'Clear',
    noResultsTitle: 'No ingredients found',
    noResultsDesc: 'Try searching for tomatoes, onions, peppers, or cooking oil.',
    viewAllAisles: 'View all aisles',

    add: 'Add',
    added: 'Added',

    memberStatus: 'Privilege Member',
    menuTitle: 'Goods Mart Club',
    profile: 'Profile & Account',
    orders: 'Orders & Deliveries',
    addresses: 'Delivery Addresses',
    payments: 'Payment Methods',
    languages: 'Language',
    theme: 'Display Theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    about: 'About Goods Mart',
    help: 'Help Center & Support',
    logout: 'Log Out',
    versionBadge: 'Goods Mart • Secured',

    yourCart: 'Your Cart',
    selectedItem: 'item selected',
    selectedItems: 'items selected',
    emptyCartTitle: 'Your cart is empty',
    emptyCartDesc: 'Explore our grocery aisles and add your favorite fresh items.',
    startShopping: 'Start Shopping',
    freeDeliveryUnlocked: 'Free express delivery unlocked!',
    addMoreForFreeDelivery: 'Add',
    forFreeDelivery: 'more for free delivery',
    couponPlaceholder: 'Promo Code (e.g. FRESH15)',
    apply: 'Apply',
    subtotal: 'Subtotal',
    discount: 'Discount',
    delivery: 'Delivery',
    free: 'Free',
    estimatedTax: 'Estimated Tax',
    total: 'Total',
    checkout: 'Proceed to Checkout',
    sslSecure: 'Secure SSL Payment',

    sections: {
      'legumes-frais': {
        title: 'Fresh Vegetables & Produce',
        subtitle: 'Garden tomatoes, red onions, bell peppers and fresh greens',
      },
      'epices-condiments': {
        title: 'Spices & Condiments',
        subtitle: 'Hot peppers, garlic, ginger, curry blends and seasonings',
      },
      'tubercules-grains': {
        title: 'Tubers & Grains',
        subtitle: 'Firm white yams, sweet plantains, parboiled rice and beans',
      },
      'huiles-essentiels': {
        title: 'Oils & Cooking Essentials',
        subtitle: 'Pure cooking oils, extra virgin olive oil and palm oil',
      },
    },

    footerTagline: 'Your fresh market groceries delivered straight to your door.',
    freshProducts: '100% Fresh Produce',
    fastDelivery: 'Fast Delivery',
  },

  zh: {
    brandTagline: '新鲜市集食品与精选料理食材',
    freshMarketToday: '今日新鲜食材市集',
    swipeHint: '向右滑动探索各个食材专区',

    searchPlaceholder: '搜索番茄、洋葱、香料、薯类、食用油...',
    cart: '购物车',
    account: '我的账户',

    resultsFor: '搜索结果',
    clear: '清除',
    noResultsTitle: '未找到相关食材',
    noResultsDesc: '请尝试其他关键词（例如：番茄、洋葱、辣椒、食用油）。',
    viewAllAisles: '查看所有专区',

    add: '加入',
    added: '已加入',

    memberStatus: '尊享会员',
    menuTitle: 'Goods Mart 俱乐部',
    profile: '个人资料与账户',
    orders: '我的订单与配送',
    addresses: '收货地址',
    payments: '支付方式',
    languages: '选择语言 (Language)',
    theme: '显示主题',
    themeLight: '浅色',
    themeDark: '深色',
    about: '关于 Goods Mart',
    help: '帮助中心与客服',
    logout: '退出登录',
    versionBadge: 'Goods Mart • 安全加密',

    yourCart: '您的购物车',
    selectedItem: '件选购商品',
    selectedItems: '件选购商品',
    emptyCartTitle: '您的购物车是空的',
    emptyCartDesc: '浏览市集专区，添加优质新鲜食材。',
    startShopping: '去选购',
    freeDeliveryUnlocked: '已达免运费标准！',
    addMoreForFreeDelivery: '还差',
    forFreeDelivery: '即可享受免费免配',
    couponPlaceholder: '优惠券代码',
    apply: '兑换',
    subtotal: '商品小计',
    discount: '优惠折扣',
    delivery: '配送运费',
    free: '免费',
    estimatedTax: '预估税费',
    total: '应付总额',
    checkout: '前往结账',
    sslSecure: '256位 SSL 安全支付',

    sections: {
      'legumes-frais': {
        title: '新鲜蔬菜与果蔬',
        subtitle: '新鲜番茄、红洋葱、彩椒及每日新鲜叶菜',
      },
      'epices-condiments': {
        title: '香料与厨房调味',
        subtitle: '辣椒、生姜、大蒜、精调咖喱粉及天然海盐',
      },
      'tubercules-grains': {
        title: '根茎薯类与优质谷物',
        subtitle: '特级白山药、香甜大蕉、精选大米与大豆',
      },
      'huiles-essentiels': {
        title: '食用油与基础食材',
        subtitle: '纯正植物油、特级初榨橄榄油与风味红棕榈油',
      },
    },

    footerTagline: '新鲜市集食材，品质直达您家厨房。',
    freshProducts: '100% 新鲜认证',
    fastDelivery: '准时极速配送',
  },

  ja: {
    brandTagline: '新鮮な市場食材と厳選キッチングローサリー',
    freshMarketToday: '本日の生鮮市場',
    swipeHint: '右にスワイプしてすべての売り場をチェック',

    searchPlaceholder: 'トマト、玉ねぎ、スパイス、ヤム芋、油を検索...',
    cart: 'カート',
    account: 'アカウント',

    resultsFor: '検索結果',
    clear: 'クリア',
    noResultsTitle: '食材が見つかりませんでした',
    noResultsDesc: '別のキーワード（例：トマト、玉ねぎ、油など）をお試しください。',
    viewAllAisles: 'すべての売り場を見る',

    add: '追加',
    added: '追加済み',

    memberStatus: 'プレミアム会員',
    menuTitle: 'Goods Mart Club',
    profile: 'プロフィールとアカウント',
    orders: '注文履歴と配送状況',
    addresses: 'お届け先住所',
    payments: 'お支払い方法',
    languages: '言語設定 (Languages)',
    theme: '表示テーマ',
    themeLight: 'ライト',
    themeDark: 'ダーク',
    about: 'Goods Martについて',
    help: 'ヘルプ＆サポート',
    logout: 'ログアウト',
    versionBadge: 'Goods Mart • 安全暗号化',

    yourCart: 'ショッピングカート',
    selectedItem: '点の商品',
    selectedItems: '点の商品',
    emptyCartTitle: 'カートに商品がありません',
    emptyCartDesc: '新鮮な市場の食材を探してカートに追加しましょう。',
    startShopping: 'お買い物を始める',
    freeDeliveryUnlocked: '送料無料が適用されました！',
    addMoreForFreeDelivery: 'あと',
    forFreeDelivery: 'で送料無料',
    couponPlaceholder: 'クーポンコード',
    apply: '適用',
    subtotal: '小計',
    discount: '割引',
    delivery: '配送料',
    free: '無料',
    estimatedTax: '推定税額',
    total: '合計金額',
    checkout: 'レジへ進む',
    sslSecure: 'SSL暗号化安全決済',

    sections: {
      'legumes-frais': {
        title: '新鮮野菜・生鮮品',
        subtitle: 'トマト、赤玉ねぎ、パプリカ、旬の葉野菜',
      },
      'epices-condiments': {
        title: 'スパイス・調味料',
        subtitle: '唐辛子、生姜、にんにく、カレーパウダー、自然海塩',
      },
      'tubercules-grains': {
        title: '芋類・穀物・豆類',
        subtitle: '白ヤム芋、甘いプランテン、厳選米、豆類',
      },
      'huiles-essentiels': {
        title: '食用油・クッキング基本',
        subtitle: 'ピュア植物油、エキストラバージンオリーブオイル、パーム油',
      },
    },

    footerTagline: '新鮮な市場の食材をご自宅まで迅速にお届けします。',
    freshProducts: '100% 新鮮保証',
    fastDelivery: 'スピード配送',
  },

  es: {
    brandTagline: 'Mercado Fresco e Ingredientes de Cocina',
    freshMarketToday: 'Mercado Fresco de Hoy',
    swipeHint: 'Desliza hacia la derecha para explorar todas las secciones',

    searchPlaceholder: 'Buscar tomates, cebollas, especias, tubérculos, aceites...',
    cart: 'Carrito',
    account: 'Mi Cuenta',

    resultsFor: 'Resultados para',
    clear: 'Borrar',
    noResultsTitle: 'No se encontraron ingredientes',
    noResultsDesc: 'Prueba con otra palabra clave (ej: tomate, cebolla, aceite).',
    viewAllAisles: 'Ver todas las secciones',

    add: 'Añadir',
    added: 'Añadido',

    memberStatus: 'Miembro Privilegio',
    menuTitle: 'Goods Mart Club',
    profile: 'Mi Perfil y Cuenta',
    orders: 'Mis Pedidos y Envíos',
    addresses: 'Direcciones de entrega',
    payments: 'Métodos de pago',
    languages: 'Idioma (Languages)',
    theme: 'Tema de pantalla',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    about: 'Acerca de Goods Mart',
    help: 'Centro de Ayuda y Soporte',
    logout: 'Cerrar sesión',
    versionBadge: 'Goods Mart • Seguro',

    yourCart: 'Tu Carrito',
    selectedItem: 'artículo seleccionado',
    selectedItems: 'artículos seleccionados',
    emptyCartTitle: 'Tu carrito está vacío',
    emptyCartDesc: 'Explora las secciones del mercado y añade ingredientes frescos.',
    startShopping: 'Comenzar compras',
    freeDeliveryUnlocked: '¡Envío express gratis desbloqueado!',
    addMoreForFreeDelivery: 'Añade',
    forFreeDelivery: 'más para envío gratis',
    couponPlaceholder: 'Código de Descuento',
    apply: 'Aplicar',
    subtotal: 'Subtotal',
    discount: 'Descuento',
    delivery: 'Envío',
    free: 'Gratis',
    estimatedTax: 'Impuestos estimados',
    total: 'Total',
    checkout: 'Tramitar Pedido',
    sslSecure: 'Pago Seguro SSL',

    sections: {
      'legumes-frais': {
        title: 'Verduras y Productos Frescos',
        subtitle: 'Tomates de huerto, cebollas rojas, pimientos y hojas verdes',
      },
      'epices-condiments': {
        title: 'Especias y Condimentos',
        subtitle: 'Chiles picantes, ajo, jengibre, mezclas de curry y sal marina',
      },
      'tubercules-grains': {
        title: 'Tubérculos y Granos',
        subtitle: 'Ñames blancos firmes, plátanos maduros, arroz y legumbres',
      },
      'huiles-essentiels': {
        title: 'Aceites y Básicos de Cocina',
        subtitle: 'Aceite vegetal puro, aceite de oliva virgen y aceite de palma',
      },
    },

    footerTagline: 'Tus compras del mercado entregadas frescas en tu puerta.',
    freshProducts: 'Productos 100% Frescos',
    fastDelivery: 'Entrega Rápida',
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('goods_mart_lang') || 'fr';
    } catch {
      return 'fr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('goods_mart_lang', lang);
    } catch (e) {
      console.error(e);
    }
  }, [lang]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, supportedLanguages: SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
