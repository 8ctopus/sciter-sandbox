// scapp commands for all platforms
const scapp = {
    win32: "./bin/win-x32/scapp.exe",
    darwin: "./bin/linux/scapp",
    linux: "./bin/linux/scapp",
};

// inspector commands for all platforms
const inspector = {
    win32: "./bin/win-x32/inspector.exe",
    darwin: "./bin/linux/inspector",
    linux: "./bin/linux/inspector",
};

// get operating system
const os = require('os');
const platform = os.platform();

const exec = require('child_process').spawn;

// start inspector detached process
exec(inspector[platform], [], {
    detached: true,
});

// start scapp detached process
exec(scapp[platform], [
    "main.htm",
    "--debug",
], {
    detached: true,
});

// exit
const process = require('process');
process.exit(0);
