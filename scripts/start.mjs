import fs from "node:fs";
import os from "node:os";
import {spawn} from "node:child_process";
import process from "node:process";
import util from "node:util";
import {fileURLToPath} from "node:url";
import {dirname, sep as separator} from "node:path";
import {commands, killInspector, killScapp, killUsciter} from "./commands.mjs";

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
let entry;

try {
    // read package json
    const packageText = await fs.promises.readFile("package.json");

    // convert to json
    const packageJson = JSON.parse(packageText);

    if (packageJson.main) {
        // test if entry file exists
        await fs.promises.stat(`./${packageJson.main}`);

        entry = packageJson.main;
    }
} catch {
    console.error("\u001B[31mInvalid main file in package.json.\u001B[0m");
}

const entries = [
    "main.htm",
    "main.html",
    "index.htm",
    "index.html",
];

if (!entry) {
    console.log("Search for main file...");

    for (const item of entries) {
        try {
            await fs.promises.stat(`./${item}`);
            entry = item;
            break;
        } catch {}
    }
}

if (entry === undefined) {
    console.error("\u001B[31mNo main file neither in package json nor in standard entries.\u001B[0m Options are:", entries);
    process.exit(1);
}

try {
    // start inspector as detached process
    //console.log("start inspector...");

    const inspector = ide.endsWith("32") ? "inspector32" : "inspector";

    spawn(commands[inspector][platform], [], {
        detached: true,
    });
} catch (error) {
    console.error(`\u001B[31m${error}\u001B[0m`);
}

// wait for inspector to be fully started so our app connects immediately
Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1500);

try {
    // start ide as detached process
    //console.log(`start ${ide}...`);

    // get current script path
    const dir = dirname(fileURLToPath(import.meta.url)) + separator;

    //console.debug("dir", dir);

    const arguments_ = ide.startsWith("scapp") ? [
        dir + "watch.htm",
        "--debug",
        entry,
    ] : [
        "-o",
        dir + "watch.htm",
        entry,
    ];

    //console.log(commands[ide][platform], arguments_);

    spawn(commands[ide][platform], arguments_, {
        detached: true,
    });
} catch (error) {
    console.error(`\u001B[31m${error}\u001B[0m`);
}

// do not wait for child processes
process.exit(0);
