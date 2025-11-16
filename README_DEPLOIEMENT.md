# 🚀 Déploiement Ansperanza - Instructions Pas à Pas

## ⚡ SOLUTION RAPIDE AU PROBLÈME "dist not found"

Si vous voyez cette erreur sur Vercel, voici LA solution :

### ÉTAPE 1 : Vérifier les paramètres Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Cliquez sur votre projet **ansperanza**
3. Cliquez sur **Settings** (en haut)
4. Dans le menu de gauche, cliquez sur **General**
5. Descendez jusqu'à **Build & Development Settings**

### ÉTAPE 2 : Configurer correctement

Cliquez sur **"Override"** et remplissez :

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 20.x (ou 18.x)
```

**Cliquez sur Save**

### ÉTAPE 3 : Forcer le redéploiement

1. Cliquez sur **Deployments** (en haut)
2. Trouvez le dernier déploiement (même s'il a échoué)
3. Cliquez sur les **3 petits points** (...)
4. Sélectionnez **"Redeploy"**
5. Cliquez sur **"Redeploy"** dans la popup

⏱️ **Attendez 2-3 minutes...**

✅ **Ça devrait marcher maintenant !**

---

## 🆘 SI ÇA NE MARCHE TOUJOURS PAS

### Solution alternative : Déploiement manuel

1. **Téléchargez tous vos fichiers** depuis Figma Make
2. **Vérifiez que vous avez ces fichiers :**
   - `index.html` ✅
   - `main.tsx` ✅
   - `App.tsx` ✅
   - `package.json` ✅
   - `vite.config.ts` ✅
   - `vercel.json` ✅
   - Dossier `components/` ✅
   - Dossier `styles/` ✅

3. **Créez un nouveau projet sur Vercel :**
   - Allez sur vercel.com
   - Cliquez sur **"Add New..."** → **"Project"**
   - Sélectionnez **"Import from Git"**
   - Suivez les instructions pour pousser sur GitHub
   
4. **Ou utilisez Vercel CLI :**

   ```bash
   # Installez Vercel CLI
   npm install -g vercel
   
   # Connectez-vous
   vercel login
   
   # Dans votre dossier projet
   cd /chemin/vers/ansperanza
   
   # Déployez
   vercel --prod
   ```

---

## 📋 CHECKLIST AVANT DÉPLOIEMENT

Vérifiez que tous ces fichiers existent :

```
ansperanza/
├── index.html              ← Point d'entrée HTML
├── main.tsx                ← Point d'entrée React
├── App.tsx                 ← Composant principal
├── package.json            ← Dépendances
├── vite.config.ts          ← Config Vite
├── vercel.json             ← Config Vercel
├── tsconfig.json           ← Config TypeScript
├── .npmrc                  ← Config npm
├── components/
│   ├── MusicPlayer.tsx     ← Lecteur de musique
│   ├── AmbianceScreen.tsx
│   ├── MoodSelector.tsx
│   └── ... (autres composants)
└── styles/
    └── globals.css         ← Styles globaux
```

---

## 🎯 GUIDE COMPLET ÉTAPE PAR ÉTAPE

### 1️⃣ Préparer GitHub

**Si vous n'avez pas Git installé :**
- Windows : [Télécharger Git](https://git-scm.com/download/win)
- Mac : Déjà installé (ou installez via `brew install git`)
- Linux : `sudo apt install git`

**Créer un dépôt GitHub :**

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Nom : `ansperanza`
5. Visibilité : **Public**
6. ⚠️ **NE PAS cocher** "Add a README"
7. Cliquez sur **"Create repository"**

### 2️⃣ Pousser le code sur GitHub

**Ouvrez un terminal** dans votre dossier `ansperanza` et tapez :

```bash
# Initialisez Git
git init

# Ajoutez tous les fichiers
git add .

# Créez le premier commit
git commit -m "Initial commit - Ansperanza"

# Liez à GitHub (remplacez VOTRE_NOM)
git remote add origin https://github.com/VOTRE_NOM/ansperanza.git

# Poussez sur GitHub
git branch -M main
git push -u origin main
```

**Si Git demande vos identifiants :**
- Username : votre nom d'utilisateur GitHub
- Password : créez un **Personal Access Token** sur [github.com/settings/tokens](https://github.com/settings/tokens)

### 3️⃣ Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Continue with GitHub"**
3. Autorisez Vercel
4. Cliquez sur **"Add New..."** → **"Project"**
5. Trouvez `ansperanza` et cliquez sur **"Import"**

**Configuration automatique :**
- Vercel détectera Vite automatiquement
- Vérifiez que :
  - Build Command = `npm run build`
  - Output Directory = `dist`
  
6. Cliquez sur **"Deploy"**
7. ⏱️ Attendez 2-3 minutes
8. 🎉 **C'est en ligne !**

---

## 🔍 DÉBUGGER LES ERREURS

### Erreur : "dist not found"

**Cause :** Le build échoue ou le dossier de sortie est mal configuré

**Solution :**
1. Vérifiez `vite.config.ts` → `outDir: 'dist'`
2. Vérifiez `vercel.json` → `outputDirectory: 'dist'`
3. Dans Vercel Settings → Output Directory = `dist`
4. Redéployez

### Erreur : "Module not found"

**Cause :** Une dépendance manque dans `package.json`

**Solution :**
1. Regardez les logs de Vercel
2. Identifiez le module manquant
3. Ajoutez-le dans `package.json`
4. Poussez sur GitHub
5. Vercel redéploie automatiquement

### Erreur : "Build failed" avec erreur TypeScript

**Cause :** Erreur de syntaxe dans le code

**Solution :**
1. Regardez les logs pour identifier le fichier
2. Corrigez l'erreur localement
3. Testez avec `npm run build`
4. Poussez sur GitHub

### Erreur : "Out of memory"

**Cause :** Le projet est trop gros (rare)

**Solution :**
Dans `package.json`, ajoutez :
```json
"scripts": {
  "build": "NODE_OPTIONS='--max-old-space-size=4096' vite build"
}
```

---

## 🎵 VÉRIFIER QUE LA MUSIQUE FONCTIONNE

Une fois déployé :

1. Ouvrez votre URL Vercel
2. Sélectionnez une humeur
3. Cliquez sur l'icône de musique (en bas à droite)
4. Sélectionnez un type de son (ex: Olas)
5. Cliquez sur **"Reproducir"**
6. **Attendez 2-3 secondes** (normal pour Web Audio API)
7. Le son devrait se lancer ! 🎵

**Si pas de son :**
- Vérifiez le volume de votre système
- Vérifiez le curseur de volume dans l'app
- Essayez sur Chrome (meilleur support)
- Assurez-vous d'avoir interagi avec la page (clic)

---

## 📱 TESTER SUR MOBILE

1. Ouvrez l'URL Vercel sur votre téléphone
2. Ajoutez l'app à l'écran d'accueil :
   - **iPhone** : Safari → Partager → Sur l'écran d'accueil
   - **Android** : Chrome → Menu → Ajouter à l'écran d'accueil
3. L'app se comportera comme une vraie app mobile !

---

## 🔄 METTRE À JOUR L'APPLICATION

Après modifications :

```bash
# Ajoutez les changements
git add .

# Créez un commit
git commit -m "Mise à jour de [ce que vous avez changé]"

# Poussez sur GitHub
git push

# Vercel redéploie AUTOMATIQUEMENT ! ✨
```

Vous recevrez un email quand le déploiement est terminé (2-3 min).

---

## 📞 SUPPORT

**Documentation :**
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev)

**Communauté :**
- [Vercel Discord](https://vercel.com/discord)
- [Vercel Support](https://vercel.com/support)

**Logs de déploiement :**
Dans Vercel → Deployments → Cliquez sur le déploiement → Voir les logs détaillés

---

## ✅ C'EST DÉPLOYÉ !

Votre URL : `https://ansperanza-xxxxx.vercel.app`

Partagez-la avec le monde ! 🌍

**Prochaines étapes :**
- [ ] Tester tous les écrans
- [ ] Vérifier la musique
- [ ] Tester sur mobile
- [ ] Partager avec vos utilisateurs
- [ ] (Optionnel) Ajouter un domaine personnalisé

---

*Développé avec 💜 - Ansperanza transforme l'anxiété en espoir* 🌅
