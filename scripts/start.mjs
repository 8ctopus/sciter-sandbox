import os from "node:os";
import {spawn} from "node:child_process";
import process from "node:process";
import {basename} from "node:path";
import fkill from "fkill";
import {commands} from "./commands.mjs";

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
const ide = process.argv[2] ?? "scapp64";

console.log("arg:", ide);

try {
    // start inspector as detached process
    console.log("start inspector...");

    const inspector = ide.endsWith("64") ? "inspector64" : "inspector";

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

    const args = ide.startsWith("scapp") ? [
            "main.htm",
            "--debug",
        ] : [
            "-o",
            "main.htm",
    ];

    console.log(args);

    spawn(commands[ide][platform], args, {
        detached: true,
    });
}
catch (error) {
    console.error(error);
}

// exit
process.exit(0);
