# sciter sandbox

This is a [sciter.js](https://sciter.com/) development sandbox.

![sciter sandbox screenshot](screenshot.png)

## features

- works on Windows, Mac and Linux
- automatically install and configure sciter sdk
- start scapp in debug mode with inspector
- easily test your changes (F5)
- logger

## requirements

- Node.js `node` (16 LTS) and its package manager `npm`.
    - On Windows [download](https://nodejs.dev/download/) and run the installer
    - On Linux check the [installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-%E2%80%94-installing-node-js-with-apt-using-a-nodesource-ppa).

## start sandbox

- git clone the repository
- install packages `npm install`
- install latest sciter sdk `npm run install-sdk`
- start sandbox `npm run scapp`

## commands

### install sciter js sdk
```sh
npm run install-sdk [version]

# example
npm run install-sdk 4.4.8.22-bis
```

### start scapp / usciter

```sh
npm run [scapp|scapp64]

npm run [usciter|usciter64]
```

### lint code

Javascript code linting uses [eslint](https://github.com/eslint/eslint).

```sh
npx eslint (--fix) main.htm
```

## known issues

- none

## todo

- improve install script (check if dir exists)
- `npm run eslint`
