import https from "https";
import fs from "fs";
import {exec} from "child_process";
import os from "os";

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
        "cd bin\\win-x32 & curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/scapp.exe",
        "cd bin\\win-x32 & curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/inspector.exe",
        "cd bin\\win-x32 & curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/sciter.dll",
    ],
    "linux": [
    "mkdir -p bin/linux",
    "cd bin/linux",
        "curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/scapp.exe",
        "curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/inspector.exe",
        "curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/sciter.dll",
        "chmod +x scapp inspector libsciter-gtk.so",
    ],
    "darwin": [
        "mkdir -p bin/win-x32",
        "cd bin/win-x32",
        "curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/scapp.exe",
        "curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/inspector.exe",
        "curl -LO https://github.com/c-smile/sciter-js-sdk/raw/${sciterSDK}/bin/windows/x32/sciter.dll",
        "chmod +x scapp inspector.app libsciter.dylib",
    ]
};

// get operating system
const platform = os.platform();

for (const command of commands[platform]) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        else
        if (stdout)
            console.log(stdout);
        else
        if (stderr)
            console.error(stderr);
    });
}

console.log("SDK installed");
