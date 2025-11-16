# 🚀 GUIDE ULTRA-SIMPLE : Déployer Ansperanza sur Vercel

## ✅ CE QU'IL FAUT SAVOIR

Votre application est **100% prête** à être déployée. Tous les fichiers de configuration sont en place.

---

## 🎯 MÉTHODE LA PLUS SIMPLE (5 minutes)

### ÉTAPE 1 : Télécharger votre projet

1. Dans Figma Make, cliquez sur **"Export"** ou **"Download"**
2. Téléchargez **TOUS** les fichiers dans un dossier
3. Nommez ce dossier `ansperanza` sur votre ordinateur

### ÉTAPE 2 : Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Créez un compte GitHub si vous n'en avez pas (gratuit)
5. Autorisez Vercel à accéder à GitHub

### ÉTAPE 3 : Créer un dépôt GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le **"+"** en haut à droite → **"New repository"**
3. Nom : `ansperanza`
4. Visibilité : **Public** (ou Private si vous préférez)
5. ⚠️ **NE PAS** cocher "Add a README file"
6. Cliquez sur **"Create repository"**

### ÉTAPE 4 : Téléverser vos fichiers sur GitHub

**Option A : Via l'interface web GitHub (FACILE)**

1. Sur la page de votre nouveau dépôt, cliquez sur **"uploading an existing file"**
2. **Glissez-déposez** TOUS les fichiers de votre dossier `ansperanza`
3. En bas, écrivez : `Initial commit`
4. Cliquez sur **"Commit changes"**

**Option B : Via Git (pour utilisateurs avancés)**

```bash
# Ouvrez un terminal dans votre dossier ansperanza
cd /chemin/vers/ansperanza

# Initialisez Git
git init

# Ajoutez tous les fichiers
git add .

# Créez le commit
git commit -m "Initial commit"

# Liez à GitHub (remplacez VOTRE_NOM par votre nom d'utilisateur)
git remote add origin https://github.com/VOTRE_NOM/ansperanza.git

# Envoyez sur GitHub
git branch -M main
git push -u origin main
```

### ÉTAPE 5 : Déployer sur Vercel

1. Retournez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Add New..."** → **"Project"**
3. Trouvez votre dépôt **"ansperanza"** dans la liste
4. Cliquez sur **"Import"**

**Configuration :**

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

5. Cliquez sur **"Deploy"** 🚀
6. ⏱️ Attendez 2-3 minutes...
7. 🎉 **C'EST FAIT !**

### ÉTAPE 6 : Tester votre application

Vous recevrez une URL comme : `https://ansperanza-xxxxx.vercel.app`

**Testez :**
- ✅ La page s'ouvre
- ✅ Le menu fonctionne
- ✅ Cliquez sur l'icône de musique en bas à droite
- ✅ Sélectionnez un son
- ✅ Cliquez sur "Reproducir"
- ✅ **Le son devrait se lancer !** 🎵

---

## 🐛 SI ÇA NE MARCHE PAS

### Problème : "Build failed" ou "dist not found"

**Solution rapide :**

1. Dans Vercel, allez dans **Settings** (de votre projet)
2. Cliquez sur **General** dans le menu de gauche
3. Trouvez **Build & Development Settings**
4. Vérifiez que :
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```
5. Cliquez sur **Save**
6. Allez dans **Deployments**
7. Cliquez sur **"..."** du dernier déploiement → **"Redeploy"**

### Problème : La musique ne se lance pas

**C'est normal !** Les navigateurs bloquent l'audio par défaut.

**Solution :**
1. Cliquez n'importe où sur la page d'abord
2. Ensuite cliquez sur l'icône de musique
3. Choisissez un son
4. Cliquez sur "Reproducir"
5. Le son devrait se lancer après 1-2 secondes

**Si toujours pas de son :**
- Vérifiez que le volume de votre ordinateur n'est pas à 0
- Vérifiez le curseur de volume dans l'application (devrait être au milieu)
- Essayez sur Chrome ou Firefox (meilleur support Web Audio API)

### Problème : Erreurs dans les logs de build

1. Dans Vercel, cliquez sur le déploiement qui a échoué
2. Regardez les **logs** (le texte qui défile)
3. Cherchez les lignes en **rouge** avec "ERROR"
4. Si vous voyez :
   - `Cannot find module` → Il manque une dépendance dans package.json
   - `Failed to parse` → Il y a une erreur de syntaxe dans un fichier
   - `Out of memory` → Le projet est trop gros (peu probable)

**Contactez-moi avec le message d'erreur exact pour que je vous aide !**

---

## 🔄 METTRE À JOUR VOTRE APPLICATION

### Méthode simple (via GitHub web) :

1. Allez sur votre dépôt GitHub : `github.com/VOTRE_NOM/ansperanza`
2. Naviguez vers le fichier que vous voulez modifier
3. Cliquez sur l'icône **"crayon"** (Edit)
4. Faites vos modifications
5. En bas : "Commit changes" → **"Commit directly to main branch"**
6. Cliquez sur **"Commit changes"**
7. **Vercel redéploie automatiquement** en 2-3 minutes ! 🎉

### Méthode Git (pour utilisateurs avancés) :

```bash
# Faites vos modifications dans vos fichiers

# Ajoutez les fichiers modifiés
git add .

# Créez un commit
git commit -m "Description de vos changements"

# Envoyez sur GitHub
git push

# Vercel redéploie automatiquement !
```

---

## 📊 VÉRIFIER LES LOGS DE DÉPLOIEMENT

Pour voir ce qui se passe pendant le déploiement :

1. Dans Vercel, allez dans **Deployments**
2. Cliquez sur le déploiement en cours (celui avec l'icône qui tourne)
3. Vous verrez les logs en temps réel :
   ```
   Installing dependencies...
   Building application...
   Uploading build...
   Deployment ready!
   ```

---

## ✅ CHECKLIST DE VÉRIFICATION

Avant de dire "C'est déployé !" :

- [ ] L'URL Vercel s'ouvre (exemple : `ansperanza-xxxxx.vercel.app`)
- [ ] Le titre "Ansperanza" apparaît
- [ ] Le slogan "De la ansiedad a la esperanza" est visible
- [ ] Les couleurs du dégradé sont correctes (bleu → lavande → rose)
- [ ] Le bouton menu (en haut à gauche) fonctionne
- [ ] Le bouton de progression (en haut à droite) fonctionne
- [ ] L'icône de musique (en bas à droite) apparaît
- [ ] Le panneau de musique s'ouvre quand on clique dessus
- [ ] On peut sélectionner différents sons (Armonía, Olas, Lluvia, Bosque, Viento)
- [ ] Le bouton "Reproducir" lance le son (après quelques secondes)
- [ ] Le volume peut être ajusté
- [ ] Testé sur mobile (ouvrir l'URL sur votre téléphone)

---

## 🎁 BONUS : Domaine personnalisé (optionnel)

Si vous voulez une URL comme `ansperanza.com` au lieu de `ansperanza-xxxxx.vercel.app` :

1. Achetez un domaine sur [Namecheap](https://www.namecheap.com) ou [Google Domains](https://domains.google)
2. Dans Vercel, allez dans **Settings** → **Domains**
3. Ajoutez votre domaine
4. Suivez les instructions pour configurer les DNS
5. Attendez 24-48h pour la propagation DNS
6. Votre site sera accessible sur votre domaine personnalisé !

---

## 📞 BESOIN D'AIDE ?

### Ressources :
- [Documentation Vercel](https://vercel.com/docs)
- [Support Vercel](https://vercel.com/support)
- [Tutoriel vidéo](https://www.youtube.com/results?search_query=deploy+react+vite+vercel)

### Si vous êtes bloqué :
1. Prenez une capture d'écran de l'erreur
2. Copiez le message d'erreur exact
3. Vérifiez les logs de déploiement dans Vercel
4. Contactez le support Vercel (très réactif !)

---

## 🎉 FÉLICITATIONS !

Votre application **Ansperanza** est maintenant en ligne ! 

Partagez l'URL avec vos utilisateurs et commencez à apporter paix et sérénité au monde ! 🌅

---

**URL de votre application :** `https://ansperanza-xxxxx.vercel.app`

*Développé avec 💜 pour transformer l'anxiété en espoir*
