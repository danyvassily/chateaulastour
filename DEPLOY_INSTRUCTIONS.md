# Instructions de Déploiement Vercel

## Problèmes d'Images Résolus

Les corrections suivantes ont été apportées pour résoudre les problèmes d'affichage des images sur Vercel :

### 1. Configuration Next.js (`next.config.mjs`)
- ✅ Suppression de `output: "standalone"` qui causait des problèmes avec les assets statiques
- ✅ Ajout de `unoptimized: false` pour optimiser les images
- ✅ Configuration des domaines autorisés pour les images

### 2. Configuration Vercel (`vercel.json`)
- ✅ Ajout d'en-têtes de cache pour tous les dossiers d'images (`/photos/`, `/Page/`, `/images/`)
- ✅ Configuration des types MIME pour les images
- ✅ Spécification du répertoire de sortie `.next`

### 3. Fichiers de Configuration Ajoutés
- ✅ `.vercelignore` - S'assure que les assets statiques ne sont pas ignorés
- ✅ Scripts de vérification des images

### 4. Structure des Images Vérifiée
Toutes les images référencées dans le code existent dans le dossier `public/` :
- `/Page/_common/histoire-hero.jpg` ✅
- `/photos/007.jpg` ✅
- `/photos/gégé neg allée platanes.jpg` ✅
- `/photos/lastours017.jpg` ✅
- `/photos/gégé neg 6.jpg` ✅

## Déploiement

1. **Build local réussi** ✅
   ```bash
   pnpm vercel-build
   ```

2. **Pour déployer sur Vercel :**
   - Pousser les modifications sur Git
   - Vercel redéploiera automatiquement
   - Les images devraient maintenant s'afficher correctement

## Vérification Post-Déploiement

Après le déploiement, vérifier que ces URLs fonctionnent :
- https://chateaulastour-h6rt.vercel.app/Page/_common/histoire-hero.jpg
- https://chateaulastour-h6rt.vercel.app/photos/007.jpg
- https://chateaulastour-h6rt.vercel.app/photos/lastours017.jpg

## En Cas de Problème Persistant

Si les images ne s'affichent toujours pas :
1. Vérifier les logs de déploiement Vercel
2. Tester avec un hard refresh (Ctrl+F5)
3. Vérifier que les fichiers sont bien présents dans le dossier `public/`