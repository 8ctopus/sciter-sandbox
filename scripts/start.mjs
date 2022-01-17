import os from "node:os";
import {spawn} from "node:child_process";
import process from "node:process";
import {basename} from "node:path";
import fkill from "fkill";
import {commands, killInspector, killScapp, killUsciter} from "./commands.mjs";

// get operating system
const platform = os.platform();

// close existing inspector
killInspector();

// scapp or usciter
const ide = process.argv[2] ?? "scapp";

//console.log("arg:", ide);

try {
    // start inspector as detached process
    //console.log("start inspector...");

    const inspector = ide.endsWith("32") ? "inspector32" : "inspector";

    spawn(commands[inspector][platform], [], {
        detached: true,
    });
}
catch (error) {
    console.error(error);
}

killScapp();
killUsciter();

try {
    // start ide as detached process
    //console.log(`start ${ide}...`);

    const arguments_ = ide.startsWith("scapp") ? [
        "main.htm",
        "--debug",
    ] : [
// usciter bug with open files
// https://sciter.com/forums/topic/usciter-4-4-8-23-bis-command-line-load-file-bug/
//        "-o",
//        "main.htm",
    ];

    //console.log(arguments_);

    spawn(commands[ide][platform], arguments_, {
        detached: true,
    });
}
catch (error) {
    console.error(error);
}

// exit
process.exit(0);
