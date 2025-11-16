# 🚀 Guide de Déploiement Ansperanza sur Vercel

Ce guide vous explique **étape par étape** comment déployer votre application Ansperanza sur Vercel.

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :
- ✅ Un compte GitHub (gratuit) → [Créer un compte](https://github.com/signup)
- ✅ Un compte Vercel (gratuit) → [Créer un compte](https://vercel.com/signup)
- ✅ Git installé sur votre ordinateur

---

## 🎯 Méthode 1 : Déploiement via GitHub (RECOMMANDÉ)

Cette méthode est la plus simple et permet des mises à jour automatiques.

### Étape 1️⃣ : Préparer votre projet

1. **Téléchargez tous les fichiers de votre projet Figma Make**
   - Cliquez sur le bouton "Export" ou "Download" dans Figma Make
   - Sauvegardez tous les fichiers dans un dossier sur votre ordinateur
   - Nommez le dossier `ansperanza`

2. **Vérifiez que vous avez ces fichiers essentiels :**
   ```
   ansperanza/
   ├── index.html          ✅
   ├── main.tsx            ✅
   ├── App.tsx             ✅
   ├── package.json        ✅
   ├── vite.config.ts      ✅
   ├── vercel.json         ✅
   ├── tsconfig.json       ✅
   ├── components/         ✅
   └── styles/             ✅
   ```

### Étape 2️⃣ : Créer un dépôt GitHub

1. **Allez sur GitHub** → [https://github.com](https://github.com)

2. **Créez un nouveau dépôt :**
   - Cliquez sur le bouton vert **"New"** (en haut à gauche)
   - Nom du dépôt : `ansperanza`
   - Description : `Application de bien-être - De la ansiedad a la esperanza`
   - Visibilité : **Public** ou **Private** (votre choix)
   - ⚠️ **NE COCHEZ PAS** "Initialize this repository with a README"
   - Cliquez sur **"Create repository"**

3. **Notez l'URL de votre dépôt :**
   - Elle ressemble à : `https://github.com/VOTRE_NOM/ansperanza.git`

### Étape 3️⃣ : Pousser votre code sur GitHub

1. **Ouvrez un terminal/invite de commandes**
   - Windows : Appuyez sur `Win + R`, tapez `cmd`, appuyez sur Entrée
   - Mac : Appuyez sur `Cmd + Espace`, tapez `Terminal`, appuyez sur Entrée
   - Linux : `Ctrl + Alt + T`

2. **Naviguez vers votre dossier projet :**
   ```bash
   cd chemin/vers/ansperanza
   ```
   Exemple :
   ```bash
   cd Desktop/ansperanza
   ```

3. **Initialisez Git :**
   ```bash
   git init
   ```

4. **Ajoutez tous les fichiers :**
   ```bash
   git add .
   ```

5. **Créez votre premier commit :**
   ```bash
   git commit -m "Initial commit - Ansperanza app"
   ```

6. **Liez votre dépôt GitHub :**
   ```bash
   git remote add origin https://github.com/VOTRE_NOM/ansperanza.git
   ```
   ⚠️ Remplacez `VOTRE_NOM` par votre nom d'utilisateur GitHub

7. **Poussez votre code :**
   ```bash
   git branch -M main
   git push -u origin main
   ```

8. **Si on vous demande vos identifiants :**
   - Entrez votre nom d'utilisateur GitHub
   - Mot de passe : utilisez un **Personal Access Token** (pas votre mot de passe)
   - [Créer un token](https://github.com/settings/tokens)

### Étape 4️⃣ : Déployer sur Vercel

1. **Allez sur Vercel** → [https://vercel.com](https://vercel.com)

2. **Connectez-vous avec GitHub :**
   - Cliquez sur **"Continue with GitHub"**
   - Autorisez Vercel à accéder à vos dépôts

3. **Importez votre projet :**
   - Cliquez sur **"Add New..."** → **"Project"**
   - Trouvez `ansperanza` dans la liste de vos dépôts
   - Cliquez sur **"Import"**

4. **Configurez le projet :**
   
   ✅ **Framework Preset** : `Vite` (devrait être détecté automatiquement)
   
   ✅ **Build and Output Settings** (cliquez sur "Override" si nécessaire) :
   - Build Command : `npm run build`
   - Output Directory : `dist`
   - Install Command : `npm install`
   
   ✅ **Root Directory** : `./` (par défaut)
   
   ✅ **Environment Variables** : Aucune nécessaire pour l'instant

5. **Lancez le déploiement :**
   - Cliquez sur **"Deploy"**
   - ⏱️ Attendez 2-3 minutes...
   - 🎉 Votre site est en ligne !

6. **Obtenez votre URL :**
   - Une fois le déploiement terminé, vous verrez une URL comme :
   - `https://ansperanza-xxxxx.vercel.app`
   - Cliquez dessus pour voir votre application !

---

## 🔧 Méthode 2 : Déploiement via Vercel CLI (Alternative)

Si vous préférez utiliser la ligne de commande :

### Étape 1️⃣ : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2️⃣ : Se connecter

```bash
vercel login
```

### Étape 3️⃣ : Déployer

1. **Naviguez vers votre projet :**
   ```bash
   cd chemin/vers/ansperanza
   ```

2. **Lancez le déploiement :**
   ```bash
   vercel
   ```

3. **Répondez aux questions :**
   - Set up and deploy? → `Y`
   - Which scope? → Sélectionnez votre compte
   - Link to existing project? → `N`
   - Project name → `ansperanza` (ou appuyez sur Entrée)
   - In which directory? → `./` (appuyez sur Entrée)
   - Override settings? → `N` (appuyez sur Entrée)

4. **Pour un déploiement en production :**
   ```bash
   vercel --prod
   ```

---

## 🔍 Vérifier que tout fonctionne

### Checklist après déploiement :

✅ **Page d'accueil se charge**
- Vous voyez le titre "Ansperanza"
- Le slogan "De la ansiedad a la esperanza" apparaît
- Le dégradé de couleurs est correct

✅ **Navigation fonctionne**
- Cliquez sur le bouton menu (hamburger en haut à gauche)
- Les différents écrans s'ouvrent sans erreur

✅ **Musique fonctionne**
- Cliquez sur l'icône de musique (en bas à droite)
- Sélectionnez un type de son
- Cliquez sur "Reproducir"
- Le son doit se lancer (assurez-vous que votre volume n'est pas à 0)

✅ **Responsive design**
- Testez sur mobile en ouvrant l'URL sur votre téléphone
- Redimensionnez la fenêtre du navigateur

---

## 🐛 Résolution de problèmes

### Problème : "Aucun répertoire de sortie nommé « dist » n'a été trouvé"

**Solution :**
1. Vérifiez que `vite.config.ts` existe avec :
   ```typescript
   build: {
     outDir: 'dist',
   }
   ```

2. Dans les paramètres Vercel :
   - Allez dans **Settings** → **General**
   - **Output Directory** : `dist`
   - Cliquez sur **Save**

3. Redéployez :
   - Allez dans **Deployments**
   - Cliquez sur les 3 points → **Redeploy**

### Problème : "Module not found" ou erreurs d'import

**Solution :**
1. Vérifiez que `package.json` contient toutes les dépendances
2. Dans Vercel, allez dans **Deployments** → Cliquez sur le dernier déploiement
3. Regardez les logs pour identifier le package manquant
4. Ajoutez-le au `package.json` et poussez les changements sur GitHub

### Problème : La musique ne se lance pas

**Raisons possibles :**
1. Le navigateur bloque l'audio (normal)
   - **Solution** : L'utilisateur doit d'abord interagir avec la page (clic)
   
2. Le volume est à 0
   - **Solution** : Vérifiez le curseur de volume dans le panneau de contrôle
   
3. Le contexte audio est suspendu
   - **Solution** : Cliquez sur "Reproducir", attendez 1 seconde, le son devrait démarrer

### Problème : Erreurs 404 sur certaines pages

**Solution :**
1. Vérifiez que `vercel.json` contient :
   ```json
   "rewrites": [
     {
       "source": "/(.*)",
       "destination": "/index.html"
     }
   ]
   ```

2. Sauvegardez et redéployez

---

## 🔄 Mises à jour futures

### Comment mettre à jour votre application déployée :

1. **Modifiez vos fichiers localement**

2. **Poussez les changements sur GitHub :**
   ```bash
   git add .
   git commit -m "Description de vos changements"
   git push
   ```

3. **Vercel redéploie automatiquement** 🎉
   - Vous recevrez un email de confirmation
   - Les changements sont en ligne en 2-3 minutes

---

## 🆘 Besoin d'aide ?

### Ressources utiles :

- 📖 [Documentation Vercel](https://vercel.com/docs)
- 📖 [Documentation Vite](https://vitejs.dev/guide/)
- 💬 [Forum Vercel](https://github.com/vercel/vercel/discussions)
- 🎥 [Tutoriel vidéo Vercel](https://www.youtube.com/results?search_query=deploy+vite+react+vercel)

### Logs de déploiement :

Pour voir ce qui se passe pendant le déploiement :
1. Dans Vercel, allez dans **Deployments**
2. Cliquez sur le déploiement en cours
3. Consultez les logs en temps réel

---

## ✅ Checklist finale

Avant de déclarer votre déploiement réussi :

- [ ] L'URL Vercel s'ouvre sans erreur
- [ ] Toutes les couleurs et polices sont correctes
- [ ] Le menu fonctionne
- [ ] Les transitions entre écrans sont fluides
- [ ] La musique se lance (après interaction utilisateur)
- [ ] Les 5 types de sons fonctionnent
- [ ] Le volume peut être ajusté
- [ ] Le localStorage sauvegarde les préférences
- [ ] L'application est responsive sur mobile
- [ ] Aucune erreur dans la console du navigateur (F12)

---

## 🎉 Félicitations !

Votre application **Ansperanza** est maintenant en ligne et accessible au monde entier ! 

Partagez votre URL avec vos utilisateurs : `https://ansperanza-xxxxx.vercel.app`

---

*Développé avec 💜 pour apporter paix et sérénité*
