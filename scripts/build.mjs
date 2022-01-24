import os from "node:os";
import {spawn} from "node:child_process";
import process from "node:process";

const scapp = {
    win32: "./bin/windows/x64/scapp.exe",
    linux: "./bin/linux/x64/scapp",
    darwin: "./bin/macosx/scapp",
};

try {
    const arguments_ = [
        "build.htm",
        "--debug",
    ];

    const platform = os.platform();

    spawn(scapp[platform], arguments_, {
        detached: true,
    });
}
catch (error) {
    console.error(`\u001B[31m${error}\u001B[0m`);
}

// do not wait for child processes
process.exit(0);
