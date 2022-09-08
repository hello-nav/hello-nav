set -e

npm run build

cd dist

git init
git add -A
git commit -m "自动部署"
git push -f git@github.com:wangguanl/nav.git master:gh-pages

cd -
rm -rf dist

