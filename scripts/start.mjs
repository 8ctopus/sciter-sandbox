import os from "node:os";
import {spawn} from "node:child_process";
import process from "node:process";
import {basename} from "node:path";
import fkill from "fkill";

// commands for all platforms
const commands = {
    inspector: {
        win32: "./bin/windows/x32/inspector.exe",
        linux: "./bin/linux/x64/inspector",
        darwin: "./bin/macosx/inspector.app/Contents/MacOS/inspector",
    },

    inspector64: {
        win32: "./bin/windows/x64/inspector.exe",
        linux: "./bin/linux/x64/inspector",
        darwin: "./bin/macosx/inspector.app/Contents/MacOS/inspector",
    },

    scapp: {
        win32: "./bin/windows/x32/scapp.exe",
        linux: "./bin/linux/x64/scapp",
        darwin: "./bin/macosx/scapp",
    },

    scapp64: {
        win32: "./bin/windows/x64/scapp.exe",
        linux: "./bin/linux/x64/scapp",
        darwin: "./bin/macosx/scapp",
    },

    usciter: {
        win32: "./bin/windows/x32/usciter.exe",
        linux: "./bin/linux/x64/usciter",
        darwin: "./bin/macosx/usciter.app/Contents/MacOS/usciter",
    },

    usciter64: {
        win32: "./bin/windows/x64/usciter.exe",
        linux: "./bin/linux/x64/usciter",
        darwin: "./bin/macosx/usciter.app/Contents/MacOS/usciter",
    },
};

// get operating system
const platform = os.platform();

// close existing inspector
try {
    await fkill(basename(commands["inspector"][platform]));
}
catch (error) {
    //console.error(error);
}

// scapp or usciter
const ide = process.argv.slice(2);

try {
    // start inspector as detached process
    console.log("start inspector...");

    const inspector = ide.indexOf("64") ? "inspector64" : "inspector";

    spawn(commands[inspector][platform], [], {
        detached: true,
    });
}
catch (error) {
    console.error(error);
}

// close existing ide
try {
    await fkill(basename(commands[ide][platform]));
}
catch (error) {
    //console.error(error);
}

try {
    // start ide as detached process
    console.log(`start ${ide}...`);

    spawn(commands[ide][platform], [
        "main.htm",
        "--debug",
    ], {
        detached: true,
    });
}
catch (error) {
    console.error(error);
}

// exit
process.exit(0);
