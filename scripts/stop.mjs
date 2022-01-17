import os from "node:os";
import {basename} from "node:path";
import fkill from "fkill";
import {commands} from "./commands.mjs";

// get operating system
const platform = os.platform();

console.log("\u001B[32mStop sciter.js sandbox...\u001B[0m\n");

// close existing inspector
try {
    await fkill(basename(commands["inspector"][platform]));
}
catch {
    //console.error(error);
}

// close existing scapp
try {
    await fkill(basename(commands["scapp"][platform]));
}
catch {
    //console.error(error);
}

// close existing usciter
try {
    await fkill(basename(commands["usciter"][platform]));
}
catch {
    //console.error(error);
}
