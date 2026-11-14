# Goods Mart — Marché & Ingrédients Frais (Design Blanc & Multilingue)

Application web e-commerce réactive conçue avec **React 19**, **Vite**, **Tailwind CSS** et **Lucide Icons**, inspirée des interfaces mobiles de livraison haut de gamme (**Bolt Food** & **Uber**).

---

## 🌟 Nouvelles Fonctionnalités Implémentées

1. **Splash Screen Épuré sur Fond Blanc (`bg-white`)** :
   - Fond **100% blanc**, lumineux, flottant et moderne, sans aucune boîte de contour rigide.
   - Logo imposant **Goods Mart** en Bleu Marine (`marine-900`) et Island Green (`emerald-500`) qui s'engouffre avec fluidité dans le panier d'achat flottant.
   - Transition de glissement vers le haut (*slide-up*) découvrant le marché.

2. **Sélecteur de Langues Interactif & Traduction Dynamique** :
   - Menu déroulant interactif dans le Burger Menu avec 5 langues supportées :
     - 🇫🇷 **Français** (`fr`)
     - 🇬🇧 **English** (`en`)
     - 🇨🇳 **中文 (Chinois)** (`zh`)
     - 🇯🇵 **日本語 (Japonais)** (`ja`)
     - 🇪🇸 **Español** (`es`)
   - La sélection d'une langue actualise instantanément tous les textes du site (Header, Panier, Recherche, Rayons, Boutons, Pied de page).

3. **Palette Island Green & Marine Blue Sans Bordures en Pixels** :
   - Suppression des bordures 1px lourdes (`border-gray-200`) au profit d'ombres douces (`shadow-xs`, `shadow-sm`, `shadow-md`), de surfaces blanches épurées et d'arrondis fluides (`rounded-2xl`, `rounded-3xl`).

4. **Header Épuré & Barre de Recherche Dédiée** :
   - **Header principal** :
     - À gauche : **Menu Burger** cliquable + Logo **Goods Mart**.
     - À droite : **Icône de Profil Compte** + Bouton **Panier** avec compteur en temps réel.
   - **Sous-barre de recherche** : Placée sous le header principal avec anneau de focus Island Green et bouton de réinitialisation.

5. **Rayons par Catégories & Défilement Horizontal (Swipe à droite)** :
   - Rayons organisés : *Légumes & Frais*, *Épices & Condiments*, *Tubercules & Grains*, *Huiles & Essentiels*.
   - Défilement tactile fluide vers la droite sur mobile (`snap-x scrollbar-none touch-pan-x`).
   - Mode recherche avec grille responsive d'au moins **2 colonnes sur mobile** et hauteur de cellules normalisée sans glitch.

---

## 🛠️ Commandes

```bash
# Démarrer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```
