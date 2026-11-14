export const SECTIONS = [
  {
    id: 'legumes-frais',
    title: 'Légumes & Frais',
    subtitle: 'Tomates du jardin, oignons rouges, poivrons et légumes feuilles',
  },
  {
    id: 'epices-condiments',
    title: 'Épices & Condiments',
    subtitle: 'Piments forts, ail, gingembre, mélanges de curry et aromates',
  },
  {
    id: 'tubercules-grains',
    title: 'Tubercules & Grains',
    subtitle: 'Ignames blanches fermes, plantains mûrs, riz et légumineuses',
  },
  {
    id: 'huiles-essentiels',
    title: 'Huiles & Essentiels',
    subtitle: 'Huiles végétales pures, huile d\'olive vierge et assaisonnements',
  },
];

export const PRODUCTS = [
  // Section: Légumes & Frais
  {
    id: 'groc-1',
    sectionId: 'legumes-frais',
    name: 'Tomates Fraîches de Marché (1 Panier)',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1546470427-227c7369a9b7?auto=format&fit=crop&w=800&q=80',
    unit: '1 Panier'
  },
  {
    id: 'groc-2',
    sectionId: 'legumes-frais',
    name: 'Oignons Rouges Fermes (Sac 3 kg)',
    price: 6.20,
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
    unit: 'Sac 3 kg'
  },
  {
    id: 'groc-9',
    sectionId: 'legumes-frais',
    name: 'Trio de Poivrons Doux (Lot de 3)',
    price: 4.80,
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
    unit: 'Lot de 3'
  },
  {
    id: 'groc-13',
    sectionId: 'legumes-frais',
    name: 'Épinards & Feuilles Vertes du Jour',
    price: 3.90,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    unit: 'Grande botte'
  },

  // Section: Épices & Condiments
  {
    id: 'groc-6',
    sectionId: 'epices-condiments',
    name: 'Piments Habanero & Scotch Bonnet (500g)',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    unit: 'Barquette 500g'
  },
  {
    id: 'groc-7',
    sectionId: 'epices-condiments',
    name: 'Gingembre & Ail Frais (Lot 750g)',
    price: 5.40,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    unit: '750g'
  },
  {
    id: 'groc-10',
    sectionId: 'epices-condiments',
    name: 'Curry, Thym & Mélange d\'Épices Cuisinées',
    price: 6.90,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    unit: '3 Pots'
  },
  {
    id: 'groc-14',
    sectionId: 'epices-condiments',
    name: 'Écrevisses et Crevettes Séchées Moulues (400g)',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80',
    unit: 'Pot 400g'
  },
  {
    id: 'groc-16',
    sectionId: 'epices-condiments',
    name: 'Cristaux de Sel Marin Naturel (1 kg)',
    price: 3.20,
    image: 'https://images.unsplash.com/photo-1518110903477-0a3d4ebca7dd?auto=format&fit=crop&w=800&q=80',
    unit: 'Sachet 1 kg'
  },

  // Section: Tubercules & Grains
  {
    id: 'groc-5',
    sectionId: 'tubercules-grains',
    name: 'Ignames Blanches Fermes (2 Grosses Pièces)',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    unit: '2 Grosses pièces'
  },
  {
    id: 'groc-4',
    sectionId: 'tubercules-grains',
    name: 'Bananes Plantains Mûres (Régime de 6)',
    price: 5.80,
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
    unit: 'Régime de 6'
  },
  {
    id: 'groc-8',
    sectionId: 'tubercules-grains',
    name: 'Riz Long Grain Parfumé Étuve (Sac 5 kg)',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    unit: 'Sac 5 kg'
  },
  {
    id: 'groc-11',
    sectionId: 'tubercules-grains',
    name: 'Haricots Bruns Doux Sélection (Sac 2.5 kg)',
    price: 9.75,
    image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=800&q=80',
    unit: 'Sac 2.5 kg'
  },

  // Section: Huiles & Essentiels
  {
    id: 'groc-3',
    sectionId: 'huiles-essentiels',
    name: 'Huile Végétale Pure de Cuisson (2 Litres)',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    unit: 'Bouteille 2L'
  },
  {
    id: 'groc-12',
    sectionId: 'huiles-essentiels',
    name: 'Huile d\'Olive Vierge Extra Pressée à Froid (1L)',
    price: 16.50,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    unit: 'Bouteille 1L'
  },
  {
    id: 'groc-15',
    sectionId: 'huiles-essentiels',
    name: 'Huile de Palme Rouge Traditionnelle (1.5L)',
    price: 11.20,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    unit: 'Bouteille 1.5L'
  }
];

export const PROMO_CODES = {
  'MARCHE15': { discountPercent: 15, description: '15% de réduction sur tout le panier' },
  'GOODS10': { discountAmount: 10, description: '10$ de réduction dès 50$ d\'achats', minOrder: 50 },
};
