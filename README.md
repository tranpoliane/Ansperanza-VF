# Ansperanza 🌅

**De la ansiedad a la esperanza**

Application mobile de bien-être conçue pour transformer l'anxiété en espoir et apporter de la sérénité aux utilisateurs.

## 🎨 Caractéristiques

- **Sélection d'humeur** : L'application s'adapte à votre état émotionnel
- **Respiration guidée** : Exercices de respiration avec animations apaisantes
- **Musique relaxante** : 5 ambiances sonores génératives (Armonía, Olas, Lluvia, Bosque, Viento)
- **Espace créatif** : Écriture libre et dessin pour l'expression personnelle
- **Jeux de pleine conscience** : Activités interactives pour la détente
- **Suivi de progression** : Graphiques hebdomadaires de votre parcours
- **Personnalisation** : Thèmes et sons personnalisables
- **Accessibilité** : Options de police dyslexique et grande police

## 🎵 Système de musique

L'application intègre un lecteur de musique génératif utilisant la Web Audio API :

- **Armonía** : Harmonies musicales adaptées à votre humeur
- **Olas** : Sons de vagues océaniques
- **Lluvia** : Pluie apaisante
- **Bosque** : Ambiance de forêt avec chants d'oiseaux
- **Viento** : Brises douces

Le volume est automatiquement sauvegardé et les transitions entre humeurs utilisent des fondus.

## 🎨 Palette de couleurs

- Dégradé principal : Turquoise (#AEE3E9) → Lavande (#C9D9F0) → Rose poudré (#FBD5D9)
- Éléments naturels : Vert menthe (#BCE0C3), Vert sauge (#86BCA1)
- Textes : Lavande clair (#D4B3D0)

## 🚀 Déploiement

### Déployer sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Installez Vercel CLI :
   ```bash
   npm install -g vercel
   ```
3. Dans le répertoire du projet, exécutez :
   ```bash
   vercel
   ```
4. Suivez les instructions pour lier votre projet
5. Pour déployer en production :
   ```bash
   vercel --prod
   ```

### Configuration alternative

Vous pouvez aussi :
- Connecter votre dépôt GitHub à Vercel
- Importer le projet directement depuis l'interface Vercel
- Les déploiements automatiques se feront à chaque push

## 💻 Développement local

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📱 Technologies

- **React 18** avec TypeScript
- **Motion (Framer Motion)** pour les animations
- **Tailwind CSS v4** pour le styling
- **Recharts** pour les graphiques
- **Web Audio API** pour la génération de sons
- **Vite** comme bundler
- **Lucide React** pour les icônes

## 🌐 Navigateurs supportés

L'application fonctionne mieux sur les navigateurs modernes qui supportent :
- Web Audio API
- CSS Grid & Flexbox
- ES2020+

Recommandé : Chrome, Firefox, Safari, Edge (versions récentes)

## 📄 Licence

© 2024 Ansperanza. Tous droits réservés.

---

*Développé avec amour pour apporter paix et sérénité* 🕊️
