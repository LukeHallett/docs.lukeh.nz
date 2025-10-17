---
title: Laravel
description: A collection of useful commands and knowledge for Laravel projects.
---
A collection of useful commands and knowledge for Laravel projects.

## Deployment
First, install composer packages:
```bash
composer install --optimize-autoloader --no-dev
```

Or, if updating a previous project:
```bash
composer update --optimize-autoloader
```

Now, cache all that can be:
```bash
php artisan config:cache && php artisan event:cache && php artisan route:cache && php artisan view:cache
```

Next, optimise Laravel:
```bash
php artisan optimize
```

Finally, build Vite assets:
```bash
npm run build
```