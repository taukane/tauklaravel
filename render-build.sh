set -o errexit

#composer install --no-interaction --no-dev --prefer-dist
npm install
npm run build
