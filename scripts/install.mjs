import https from "https";
import fs from "fs";
import {exec} from "child_process";
import os from "os";

// sciter 4.4.8.22-bis
const sciterSDK = "6cedc57ff09404ad17e1899abc06f843a4677b69"

function download(url, path) {
    https.get(url, (res) => {
        const writeStream = fs.createWriteStream(path);

        res.pipe(writeStream);

        writeStream.on("finish", () => {
            writeStream.close();
            console.log("Download Completed");
        });
    });
}

const commands = {
    "win32": [
        "mkdir bin\\win-x32",
        "cd bin\\win-x32",
        `cd bin\\win-x32 & curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/scapp.exe`,
        `cd bin\\win-x32 & curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/inspector.exe`,
        `cd bin\\win-x32 & curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/sciter.dll`,
    ],
    "linux": [
        "mkdir -p bin/linux",
        "cd bin/linux",
        `curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/linux/x64/scapp`,
        `curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/linux/x64/inspector`,
        `curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/linux/x64/libsciter-gtk.so`,
        "chmod +x scapp inspector libsciter-gtk.so",
    ],
    "darwin": [
        // download the whole archive because of inspector.app which is a directory
        `curl -LO https://github.com/c-smile/sciter-js-sdk/archive/${sciterSDK}.zip`,

        // unzip binaries
        `unzip ${sciterSDK}.zip sciter-js-sdk-${sciterSDK}/bin/macosx/* -d .`,

        // move binaries
        `mv sciter-js-sdk-${sciterSDK}/bin .`,

        // delete old dir
        `rmdir sciter-js-sdk-${sciterSDK}`,

        // delete zip
        `rm ${sciterSDK}.zip`,

        "cd bin/macosx",
        "chmod +x scapp inspector.app libsciter.dylib",
    ]
};

// get operating system
const platform = os.platform();

console.log(`Install sciter.js SDK ${sciterSDK} on ${platform}`);

for (const command of commands[platform]) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(error);
            return;
        }

        if (stdout)
            console.log(stdout);

        if (stderr)
            console.error(stderr);
    });
}

