import fs from "node:fs";
import {exec} from "node:child_process";
import os from "node:os";
import {sep as separator} from "node:path";
import process from "node:process";
import util from "node:util";
import download from "download";
import {killInspector, killScapp, killUsciter} from "./commands.mjs";

const sdkCommitIds = {
    // Jan 24, 2022
    "4.4.8.26": "cf11889eb4c597d815aaa15175acf08790784e16",
    // Jan 19, 2022
    "4.4.8.25": "5cdcabafbc1ff718052d5b0b2183c3806e62230a",
    // Jan 17, 2022
    "4.4.8.24": "865b2e909f014d6640241dc51afee3711896930f",
    // Jan 1, 2022
    "4.4.8.23-bis": "e28811887e0d94a531b9eef2ac4e2b31768565d8",
    "4.4.8.23": "de0f6c2490275074742dfed7a1f80e85885fedc6",
    // Dec 29, 2021
    "4.4.8.22-bis": "6cedc57ff09404ad17e1899abc06f843a4677b69",
    "4.4.8.22": "edaeb0146f0c910e0ff75bbb0fc85dfa108c4034",
    "4.4.8.21": "a52e657f93d2294a915dd6d911e3b6768be9387c",
    "4.4.8.20": "103bcc180d1551e393efaede39987bf9e7a292fc",
    "4.4.8.19": "439804af72371a3997685884463cd344c69cad9d",
    "4.4.8.18": "da424552e56c0779515c8cdef25dc40d08b35ae4",
    "4.4.8.17-bis": "be2be52df10ebe501f75901df8ef2467ed710d00",
    "4.4.8.17": "7fe8ef76de2a1aca48de4f312b0ff2c707ca56b5",
    "4.4.8.16": "d5a13ff197fed3af46d4bc931c158828eb61e357",
    // Oct 30, 2021
    "4.4.8.15": "faeba319c38bac2e833cbf0fe5a6be60cf87a24e",
    // Oct 10, 2021
    "4.4.8.14": "b5c4d4efe4ed48fc96c7900c8e89e18c3c1c6397",
    // Oct 3, 2021
    "4.4.8.13": "f810da6a1887220e5d7e9d5a9ec6176508967f0d",
    // Sep 28, 2021
    "4.4.8.12": "b73c9cb6b6501908a1ed2f46e333b86a1cae9482",
    // Sep 26, 2021
    "4.4.8.11-bis": "f78a7294196ea386fce956976f11e268173b479b",
    "4.4.8.11": "1513385803c0334df17114a07df7be4b4e6f3bb7",
    // Sep 12, 2021
    "4.4.8.10": "cb9daceb84f6e49e56dee816b4de7d5ddb2829e1",
    // Sep 4, 2021
    "4.4.8.9": "a973aafdf6ebe1704d7a9322184d6c9116423861",
};

// get arguments
const arguments_ = process.argv.slice(2, process.argv.length);

let cleanup = false;
let sdkVersion = "4.4.8.25";

for (const argument of arguments_) {
    if (argument === "cleanup")
        cleanup = true;
    else
        sdkVersion = argument;
}

// get sdk commit id
const sdkCommitId = sdkCommitIds[sdkVersion];

if (sdkCommitId === undefined) {
    console.error(`\u001B[31mUnknown sciter.js SDK version ${sdkVersion}\u001B[0m`);
    process.exit(1);
}

// close all open apps so they don't block installation
await killInspector();
await killScapp();
await killUsciter();

// get tmp dir and zip file
const tmpDir = os.tmpdir() + separator;
const zipFile = tmpDir + `${sdkCommitId}.zip`;

const commands = {
    linux: [
        // unzip archive
        `unzip ${zipFile} -d ${tmpDir}`,

        // move binaries
        `cp -r ${tmpDir}sciter-js-sdk-${sdkCommitId}/bin .`,

        // delete temp dir
        `rm -rf ${tmpDir}sciter-js-sdk-${sdkCommitId}`,

        // delete zip
        //`rm ${zipFile}`,

        "cd bin/macosx; chmod +x scapp inspector.app/Contents/MacOS/inspector usciterjs.app/Contents/MacOS/usciterjs libsciter.dylib",
        "cd bin/linux/arm32; chmod +x scapp inspector usciter libsciter-gtk.so",
        "cd bin/linux/x64; chmod +x scapp inspector usciter libsciter-gtk.so",
        "cd bin/linux/x32; chmod +x scapp",
    ],
    win32: [
        // unzip archive
        `C:\\Windows\\System32\\tar.exe -xf ${zipFile} -C ${tmpDir}`,

        // move binaries
        `xcopy ${tmpDir}sciter-js-sdk-${sdkCommitId}\\bin bin\\ /S /Y /Q`,

        // delete old dir
        `rmdir /s /q ${tmpDir}sciter-js-sdk-${sdkCommitId}`,

        // delete zip
        //`del ${zipFile}`,
    ],
};

try {
    // check if sdk was already downloaded
    await fs.promises.stat(zipFile);

    console.log(`\u001B[32mUse sciter.js SDK from cache ${sdkVersion}...\u001B[0m\n`);
}
catch {
    console.log(`\u001B[32mDownload sciter.js SDK ${sdkVersion}...\u001B[0m\n`);

    let downloaded = 0;

    fs.writeFileSync(zipFile, await download(`https://github.com/c-smile/sciter-js-sdk/archive/${sdkCommitId}.zip`)
        .on("response", res => {
            //console.log(res.headers);
            // clear screen
            //console.log("\x1b[2J");
        })
        .on("response", res => {
            res.on("data", data => {
                downloaded += data.length;

                // show download progress
                console.log(`\u001B[ADownloaded ${(downloaded / (1024 * 1024)).toFixed(1)} Mb...                                              \u001B[0m`);
            });
        }),
    );
}

console.log(`\u001B[32mInstall sciter.js SDK ${sdkVersion}...\u001B[0m`);

const platform = (os.platform() === "win32") ? "win32" : "linux";

// promisify exec
const execPromise = util.promisify(exec);

// execute commands synchronously
for (const command of commands[platform]) {
    console.log(command);

    try {
        const {stdout, stderr} = await execPromise(command);

        if (stdout)
            console.log(stdout);

        if (stderr)
            console.error(`\u001B[31m${stderr}\u001B[0m`);
    }
    catch (error) {
        console.error(`\u001B[31m${error}\u001B[0m`);
        process.exit(1);
    }
}

// cleanup not needed platforms?
if (cleanup) {
    console.log("\u001B[32mCleanup platforms...\u001B[0m");

    const platforms = {
        win32: "windows",
        linux: "linux",
        darwin: "macosx",
        android: "android",
    };

    // list directories in bin
    const directories = await fs.promises.readdir("bin");

    //console.log(dirs);

    // delete all not required directories
    for (const dir of directories) {
        if (dir !== platforms[os.platform()]) {
            fs.promises.rm(`bin/${dir}`, {
                recursive: true,
            });
        }
    }
}

console.log("\u001B[32mInstall complete.\u001B[0m");

// write sdk version to file
const version = {
    version: sdkVersion,
};

util.promisify(fs.writeFile)("bin/version.json", JSON.stringify(version));
