# sciter sandbox

This is a [sciter.js](https://sciter.com/) development sandbox.

![sciter sandbox screenshot](screenshot.png)

## features

- works on Windows, Mac and Linux
- automatically install and configure sciter sdk
- start scapp and inspector
- easily test your changes (F5)
- logger

## requirements

- Node.js `node` (16 LTS) and its package manager `npm`.
    - On Windows [download](https://nodejs.dev/download/) and run the installer
    - On Linux check the [installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-%E2%80%94-installing-node-js-with-apt-using-a-nodesource-ppa).

## start sandbox

- git clone the repository
- install packages `npm install`
- install sciter sdk `npm run install-sdk`
- start sandbox, choose your flavor: `npm run scapp` or `npm run usciter`

## commands

```sh
# install sciter js sdk
npm run install-sdk

# start scapp
npm run scapp

# start scapp x64
npm run scapp64

# start usciter
npm run usciter

# start usciter x64
npm run usciter64

npx eslint (--fix) main.htm
```

Javascript code linting uses [eslint](https://github.com/eslint/eslint).

## known issues

- none

## todo

- improve install script (check if dir exists)
- `npm run eslint`
