import {killInspector, killScapp, killUsciter} from "./commands.mjs";

console.log("\u001B[32mStop sciter.js sandbox...\u001B[0m\n");

killInspector();
killScapp();
killUsciter();
