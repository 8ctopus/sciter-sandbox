class Sdk {
    static #gitlab = {
        "4.4.8.35": "2b43f97dbbaeb19bc0bc27e3f6457a3cf8dcad38",
    };

    static #github = {
        // Mar 28, 2022
        "4.4.8.34": "72712b5d79d16a64c19c0370134208966a3621d8",
        // Mar 14, 2022
        "4.4.8.33": "7d38fea47784ace4d439a66755d290efe4dc970c",
        // Mar 7, 2022
        "4.4.8.32": "49f6684313d383268efaae94a44eed3878d17bbd",
        // Feb 23, 2022
        "4.4.8.31": "6fcd0f45410cccb907211b974b130d34d6066438",
        // Feb 21, 2022
        "4.4.8.30": "2be879c8e61841daebd1ab4f85d4fa2f13847ea9",
        // Feb 14, 2022
        "4.4.8.29": "f0b4b18422675696ece2e15bbd98f0c2b95fa88a",
        // Feb 8, 2022
        "4.4.8.28": "fb4ac245165790d9de4c30bd2ee58ca7bdcc432f",
        // Feb 7, 2022
        "4.4.8.27-bis": "360e8c0d09dc47a89ab9b550b16dfcfd783cb0ff",
        // Feb 6, 2022
        "4.4.8.27": "fa1a257485de6582055b01ee1a40c9660eb95d08",
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

    /**
     * Get sdk version commit
     * @param  {string} sdkVersion
     * @return {string|undefined}
     */
    static getCommit(sdkVersion) {
        if (this.#gitlab.hasOwnProperty(sdkVersion)) {
            return this.#gitlab[sdkVersion];
        } else if (this.#github.hasOwnProperty(sdkVersion)) {
            return this.#github[sdkVersion];
        } else {
            return undefined;
        }
    }

    /**
     * Get download url for sdk version
     * @param  {string} sdkVersion
     * @return {string|undefined}
     */
    static getUrl(sdkVersion) {
        if (this.#gitlab.hasOwnProperty(sdkVersion)) {
            const sdkCommitId = this.#gitlab[sdkVersion];
            return `https://gitlab.com/sciter-engine/sciter-js-sdk/-/archive/${sdkCommitId}/sciter-js-sdk-${sdkCommitId}.zip`;;
        } else if (this.#github.hasOwnProperty(sdkVersion)) {
            const sdkCommitId = this.#github[sdkVersion];
            return `https://github.com/c-smile/sciter-js-sdk/archive/${sdkCommitId}.zip`;
        } else {
            return undefined;
        }
    }

}

export default Sdk;
