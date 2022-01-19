import fs from "node:fs";
import os from "node:os";
import {spawn} from "node:child_process";
import process from "node:process";
import {commands, killInspector, killScapp, killUsciter} from "./commands.mjs";
import Sleep from "sleep";

// get operating system
const platform = os.platform();

// close all open apps
await killInspector();
await killScapp();
await killUsciter();

// scapp or usciter
const ide = process.argv[2] ?? "scapp";

//console.log("arg:", ide);

// look for code entry file
const entries = [
    "main.htm",
    "main.html",
    "index.htm",
    "index.html",
];

let entry;

for (const item of entries) {
    try {
        await fs.promises.stat(`./${item}`);
        entry = item;
        break;
    }
    catch {}
}

if (entry === undefined) {
    console.error("\u001B[31mNo code entry file.\u001B[0m Options are:", entries);
    process.exit(1);
}

try {
    // start inspector as detached process
    //console.log("start inspector...");

    const inspector = ide.endsWith("32") ? "inspector32" : "inspector";

    spawn(commands[inspector][platform], [], {
        detached: true,
    });
}
catch (error) {
    console.error(`\u001B[31m${error}\u001B[0m`);
}

// wait for inspector to be fully started so our app connects immediately
Sleep.msleep(1500);

try {
    // start ide as detached process
    //console.log(`start ${ide}...`);

    const arguments_ = ide.startsWith("scapp") ? [
        entry,
        "--debug",
    ] : [
// usciter bug with open files
// https://sciter.com/forums/topic/usciter-4-4-8-23-bis-command-line-load-file-bug/
//        "-o",
//        entry,
    ];

    //console.log(arguments_);

    spawn(commands[ide][platform], arguments_, {
        detached: true,
    });
}
catch (error) {
    console.error(`\u001B[31m${error}\u001B[0m`);
}

// do not wait for child processes
process.exit(0);
