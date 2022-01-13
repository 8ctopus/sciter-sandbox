import os from "os";
import {spawn} from "child_process";
import process from "process";
import fkill from "fkill";
import {basename} from "path";

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
catch (e) {}

// start inspector detached process
const process1 = spawn(inspector[platform], ["", ""], {
    detached: true,
});

// close existing process
try {
    await fkill(basename(scapp[platform]));
}
catch (e) {}

// start scapp detached process
const process2 = spawn(scapp[platform], [
    "main.htm",
    "--debug",
], {
    detached: true,
});

// exit
process.exit(0);
