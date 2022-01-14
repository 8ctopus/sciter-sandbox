import os from "node:os";
import {spawn} from "node:child_process";
import process from "node:process";
import {basename} from "node:path";
import fkill from "fkill";

// scapp commands for all platforms
const scapp = {
    win32: "./bin/windows/x32/scapp.exe",
    linux: "./bin/linux/x64/scapp",
    darwin: "./bin/macosx/scapp",
};

// inspector commands for all platforms
const inspector = {
    win32: "./bin/windows/x32/inspector.exe",
    linux: "./bin/linux/x64/inspector",
    darwin: "./bin/macosx/inspector.app/Contents/MacOS/inspector",
};

// get operating system
const platform = os.platform();

// close existing inspector
try {
    await fkill(basename(inspector[platform]));
}
catch (error) {
    //console.error(error);
}

try {
    // start inspector detached process
    console.log("start inspector...");

    spawn(inspector[platform], [], {
        detached: true,
    });
}
catch (error) {
    console.error(error);
}

// close existing scapp
try {
    await fkill(basename(scapp[platform]));
}
catch (error) {
    //console.error(error);
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
