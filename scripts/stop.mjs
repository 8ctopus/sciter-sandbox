import os from "node:os";
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

// close existing scapp
try {
    await fkill(basename(commands["scapp"][platform]));
}
catch (error) {
    //console.error(error);
}

// close existing usciter
try {
    await fkill(basename(commands["usciter"][platform]));
}
catch (error) {
    //console.error(error);
}
