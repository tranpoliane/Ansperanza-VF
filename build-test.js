#!/usr/bin/env node

/**
 * Script de test de build pour vérifier que tout est OK avant déploiement
 */

import { exec } from 'child_process';
import { existsSync } from 'fs';
import { promisify } from 'util';

const execAsync = promisify(exec);

console.log('🔍 Vérification des fichiers essentiels...\n');

const requiredFiles = [
  'index.html',
  'main.tsx',
  'App.tsx',
  'package.json',
  'vite.config.ts',
  'tsconfig.json',
  'vercel.json',
  'styles/globals.css',
];

let allFilesPresent = true;

requiredFiles.forEach(file => {
  if (existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MANQUANT !`);
    allFilesPresent = false;
  }
});

if (!allFilesPresent) {
  console.log('\n⚠️  Certains fichiers essentiels sont manquants !');
  console.log('Le déploiement risque d\'échouer.\n');
  process.exit(1);
}

console.log('\n✅ Tous les fichiers essentiels sont présents !\n');

console.log('🔨 Test de build local...\n');

try {
  await execAsync('npm run build');
  
  console.log('\n✅ Build réussi !\n');
  
  if (existsSync('dist/index.html')) {
    console.log('✅ dist/index.html existe');
  } else {
    console.log('❌ dist/index.html n\'existe pas !');
    process.exit(1);
  }
  
  console.log('\n🎉 Votre application est prête pour le déploiement sur Vercel !\n');
  console.log('Prochaines étapes :');
  console.log('1. Poussez votre code sur GitHub');
  console.log('2. Importez le projet sur Vercel');
  console.log('3. Déployez !\n');
  
} catch (error) {
  console.error('\n❌ Erreur pendant le build :');
  console.error(error.message);
  console.log('\nVérifiez les erreurs ci-dessus et corrigez-les avant de déployer.\n');
  process.exit(1);
}
