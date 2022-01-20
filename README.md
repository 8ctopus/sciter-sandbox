# sciter sandbox

This is a [sciter.js](https://sciter.com/) development sandbox.

![sciter sandbox screenshot](https://github.com/8ctopus/sciter-sandbox/raw/master/screenshot.png)

## features

- works on Windows, Mac and Linux
- automatically install and configure sciter SDK
- easily switch between SDK versions
- start either scapp or usciter with inspector
- easily test changes with F5 reload
- lint javascript code (check for issues and format it)

## requirements

- A recent version of Node.js `node` (tested with 16 LTS) and its package manager `npm`
    - On Windows and Mac download and run [the installer](https://nodejs.dev/download/)
    - On Linux check the [installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-%E2%80%94-installing-node-js-with-apt-using-a-nodesource-ppa)

## start sandbox

- git clone the repository and checkout the latest release tag `git checkout 1.2.x`
- install packages `npm install`
- install latest sciter sdk `npm run install-sdk`
- start the sandbox `npm run scapp`

## commands

### install sciter.js SDK

```sh
npm run install-sdk [version]

# example
npm run install-sdk 4.4.8.24
```

### start scapp / usciter

```sh
npm run [scapp|scapp32]

npm run [usciter|usciter32]
```

### close scapp, usciter and inspector

```sh
npm run stop
```

### check sciter.js SDK version

```sh
npm run sdk-version
```

### lint code

Javascript code linting uses [eslint](https://github.com/eslint/eslint).

```sh
npx eslint (--fix) main.htm
```

## add sandbox to your project

You can also use the sandbox in your own projects:

- inside your project root dir `npm install --save-dev sciter-sandbox`
- add the following scripts inside `package.json`

```json
  "scripts": {
    "install-sdk": "node ./node_modules/sciter-sandbox/scripts/install.mjs",
    "sdk-version": "node ./node_modules/sciter-sandbox/scripts/version.mjs",
    "scapp": "node ./node_modules/sciter-sandbox/scripts/start.mjs scapp",
    "usciter": "node ./node_modules/sciter-sandbox/scripts/start.mjs usciter",
    "stop": "node ./node_modules/sciter-sandbox/scripts/stop.mjs",
    "scapp32": "node ./node_modules/sciter-sandbox/scripts/start.mjs scapp32",
    "usciter32": "node ./node_modules/sciter-sandbox/scripts/start.mjs usciter32"
  },
```

## known issues

- Well tested on Windows, Linux and Mac require more testing
- all OSes: usciter does not load file [usciter bug](https://sciter.com/forums/topic/usciter-4-4-8-23-bis-command-line-load-file-bug/)
- Linux: inspector has issues communicating (I don't know why)

## todo

- improve install script (check if dir exists)
- `npm run eslint`
