# sciter sandbox

This is a [sciter.js](https://sciter.com/) development sandbox.

![sciter sandbox screenshot](screenshot.png)

## features

- start scapp and inspector
- automatically install sciter sdk
- F5 reload
- logger

## requirements

- Node.js
- curl in path

## start sandbox

- git clone the repository
- install packages `npm install`
- install sciter sdk `npm run install-sdk`
- start sandbox `npm run scapp`

## code linting

Javascript code linting uses [eslint](https://github.com/eslint/eslint).

```sh
npx eslint (--fix) main.htm
```

## known issues

- not tested on mac and linux

## todo

- improve install script (check if dir exists)
- test on mac and linux
- `npm run eslint`
- `npm run usciter`
