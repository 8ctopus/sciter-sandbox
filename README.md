# sciter sandbox

This is a [sciter.js](https://sciter.com/) development sandbox.

## features

- TODO

## requirements

- Node.js
- curl in path

## start sandbox

- git clone the repository
- install packages `npm install`
- install sciter sdk `npm run install-sdk`
- start sandbox `npm run scapp`

## code linting

Javascript code linting uses [eslint](https://github.com/eslint/eslint). HTML code linting uses [HTMLLint](https://htmlhint.com/).

```sh
npm install

# lint javascript
npx eslint main.htm src/*.js

# lint html
npx htmlhint main.htm
```

## known issues

- sdk installation on windows doesn't work yet

## potential improvements

- `npm run eslint`
- `npm run usciter`
