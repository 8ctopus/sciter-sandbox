import fs from "node:fs";
import util from "node:util";

const text = await util.promisify(fs.readFile)("bin/version.json");

const data = JSON.parse(text);

if (data.version)
    console.log(`\u001B[32msciter.js SDK ${data.version}\u001B[0m\n`);
else
    console.error(`\u001B[31mUnknown sciter.js SDK version ${data.version}\u001B[0m`);
