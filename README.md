# sciter sandbox

This is a [sciter.js](https://sciter.com/) development sandbox.

![sciter sandbox screenshot](https://github.com/8ctopus/sciter-sandbox/raw/master/screenshot.png)

## features

- works on Windows, Mac and Linux
- automatically install and configure sciter sdk
- easily switch between sdk versions
- start either scapp or usciter with inspector
- easily test your changes with F5 reload
- check your code for issues using the linter

## requirements

- A recent version of Node.js `node` (tested with 16 LTS) and its package manager `npm`.
    - On Windows [download](https://nodejs.dev/download/) and run the installer
    - On Linux check the [installation guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-%E2%80%94-installing-node-js-with-apt-using-a-nodesource-ppa)

## start sandbox

- git clone the repository and checkout the latest release tag `git checkout 1.1.x`
- install packages `npm install`
- install latest sciter sdk `npm run install-sdk`
- start the sandbox `npm run scapp`

You can also use the sandbox in your own projects:

- inside your project root dir `npm install --save-dev sciter-sandbox`
- add the following scripts inside `package.json`

```json
  "scripts": {
    "install-sdk": "node ./node_modules/sciter-sandbox/scripts/install.mjs",
    "scapp": "node ./node_modules/sciter-sandbox/scripts/start.mjs scapp",
    "usciter": "node ./node_modules/sciter-sandbox/scripts/start.mjs usciter",
    "scapp32": "node ./node_modules/sciter-sandbox/scripts/start.mjs scapp32",
    "usciter32": "node ./node_modules/sciter-sandbox/scripts/start.mjs usciter32",
    "stop": "node ./node_modules/sciter-sandbox/scripts/stop.mjs"
  },
```

## commands

### install sciter js sdk

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

### lint code

Javascript code linting uses [eslint](https://github.com/eslint/eslint).

```sh
npx eslint (--fix) main.htm
```

## known issues

- all OSes: usciter does not load file [usciter bug](https://sciter.com/forums/topic/usciter-4-4-8-23-bis-command-line-load-file-bug/)
- Linux: inspector communication issue (probably on my side)

## todo

- improve install script (check if dir exists)
- `npm run eslint`
