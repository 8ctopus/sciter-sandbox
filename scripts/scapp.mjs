import os from "node:os";
import {spawn} from "node:child_process";
import process from "node:process";
import {basename} from "node:path";
import fkill from "fkill";

// scapp commands for all platforms
const scapp = {
    win32: "./bin/win-x32/scapp.exe",
    linux: "./bin/linux/scapp",
    darwin: "./bin/linux/scapp",
};

// inspector commands for all platforms
const inspector = {
    win32: "./bin/win-x32/inspector.exe",
    linux: "./bin/linux/inspector",
    darwin: "./bin/linux/inspector",
};

// get operating system
const platform = os.platform();

// close existing process
try {
    await fkill(basename(inspector[platform]));
}
catch (error) {
    console.error(error);
}

// start inspector detached process
console.log("start inspector...");

spawn(inspector[platform], [], {
    detached: true,
});

// close existing process
try {
    await fkill(basename(scapp[platform]));
}
catch (error) {
    console.error(error);
}

// start scapp detached process
console.log("start scapp...");

spawn(scapp[platform], [
    "main.htm",
    "--debug",
], {
    detached: true,
});

// exit
process.exit(0);
