# Dr Kalfon Ronit

Site vitrine React et Vite : accueil, services, luxopuncture, à propos,
tarifs et coordonnées. Les pages sont publiques, sans compte utilisateur,
formulaire de rendez-vous ni chat.

## Développement

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

Aucune variable d’environnement ni service d’authentification n’est nécessaire
pour afficher les pages. L’alias `@` pointe vers `src` dans la configuration Vite.

## Médias restant à rapatrier

Le SDK et le plugin Base44 ont été retirés, mais 17 images/logos sont encore
chargés depuis `media.base44.com` (25 références dans les composants et pages).
Leurs liens ont été conservés pour éviter de supprimer les photos existantes.
Le site n’est donc pas encore complètement indépendant de cet hébergement.

Pour terminer la migration, copier ces fichiers dans `public/images/`, puis
remplacer leurs URL par `/images/<nom-du-fichier>`. Leur téléchargement n’a pas
été possible dans l’environnement utilisé pour préparer cette modification.

La suppression du code ne supprime ni les données historiques ni l’application
chez l’ancien prestataire. Ces ressources externes n’ont pas été modifiées.
