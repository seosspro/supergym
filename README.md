# Проект "Supergym"

---
### Краткая инструкция по развертыванию проекта
#### Установите:
* [Node.js](https://nodejs.org/ru/) - последнюю версию LTS
* NPM - установка включена в установку Node.js
    * Проверьте корректность установки Node и NPM:
        * `node --version`
        * `npm --version`
* Установите Gulp-cli - v4.x: `npm install --global gulp-cli`
    * Проверьте корректность установки Gulp: `gulp --version`
#### Порядок работы с проектом:
* Запустите терминал из корневой директории проекта
* Установите npm-пакеты плагинов сборки и тестирования (devDependencies из файла package.json) - `npm i`
* Протестируйте код на соответствия style-guides - `npm test`
* Соберите проект без запуска локального сервера - `npm run build`
* Запустите локальный сервер - `npm start`
---
