class Sdk {
    /**
     * Get sdk version commit
     * @param {string} sdkVersion
     * @returns {string|undefined}
     */
    static getCommit(sdkVersion) {
        if (this.#gitlab.hasOwnProperty(sdkVersion))
            return this.#gitlab[sdkVersion];
        else if (this.#github.hasOwnProperty(sdkVersion))
            return this.#github[sdkVersion];
        else
            return undefined;
    }

    /**
     * Get download url for sdk version
     * @param {string} sdkVersion
     * @returns {string|undefined}
     */
    static getUrl(sdkVersion) {
        if (this.#gitlab.hasOwnProperty(sdkVersion)) {
            const sdkCommitId = this.#gitlab[sdkVersion];
            return `https://gitlab.com/sciter-engine/sciter-js-sdk/-/archive/${sdkCommitId}/sciter-js-sdk-${sdkCommitId}.zip`;
        } else if (this.#github.hasOwnProperty(sdkVersion)) {
            const sdkCommitId = this.#github[sdkVersion];
            return `https://github.com/c-smile/sciter-js-sdk/archive/${sdkCommitId}.zip`;
        } else
            return undefined;
    }

    static #gitlab = {
        // Feb 24, 2024
        "6.0.0.6": "98b4b861d814d4e2580ab0809d9a55bd0ee1f034",
        // Feb 15, 2025
        "6.0.0.5": "17d61aad76ebd2a5b156852ac0abfb204cfbe3f4",
        // Feb 11, 2025
        "6.0.0.4": "52bb1ac76bb8f9665797373fb3b50788adcd8303",
        // Feb 2, 2025
        "6.0.0.3": "a2c41f23f923c42e256f0a325618a481bb40348a",
        // Jan 24, 2025
        "6.0.0.2": "eddb16cb39e3e1037da0c161ddc0899cced90bf5",
        // Jan 19, 2025
        "6.0.0.1": "55d2903aa5a6a3d91725c3da799e7215656937c4",
        // Jan 18, 2025
        "6.0.0.0": "4ab588d6525867515ea54065aafd7a39cca7ef98",
        // Dec 31, 2024
        "5.0.3.21": "d604bcc0d09aebc822a5d45b5f950d4ab05ca53c",
        // Dec 25, 2024
        "5.0.3.20": "1ad17dbf197b4dfd4fd04dca8829929765cff365",
        // Dec 23, 2024
        "5.0.3.19": "94ae7695b98ab525cdc9c78e6f44e6b1bee037bf",
        // Dec 8, 2024
        "5.0.3.18": "191ceb7a01b669034323603f0acce314403988df",
        // Nov 22, 2024
        "5.0.3.17": "27a668f8f1516599e06bef6b201330d8ea21e1a5",
        // Oct 5, 2024
        "5.0.3.16": "17f001904148b93923fda500c0e1c91b5adb059d",
        // Aug 31, 2024
        "5.0.3.15": "7762ea70b75622af763ba832a552524ce7a49636",
        // Jul 3, 2024
        "5.0.3.14": "4adfde891e20cf33d73429b6922c9785f78522aa",
        // Jun 24, 2024
        "5.0.3.13": "4ac9102f2ec4ddbb1d283d46aab57c1e2f9311f8",
        // May 26, 2024
        "5.0.3.12": "417d17c4ee681187975cfe2002f60f813be102a7",
        // Apr 17, 2024
        "5.0.3.11": "bdec0a2e760aab04a114b1a249acf5005d201c9e",
        // Mar 17, 2024
        "5.0.3.10": "3bc63c49ac7d09fb36b0d29154914eee3f396918",
        // Feb 15, 2024
        "5.0.3.9": "a1f9a990233cd4105114c72e67d4218b8cc10e1c",
        // Jan 28, 2024
        "5.0.3.8": "f5456328b53046e72f2d3a47a2f68fec4a2f07e0",
        // Jan 21, 2024
        "5.0.3.7": "1d9e5fa01cf42842e256910e972edbda886df7e3",
        // Jan 15, 2024
        "5.0.3.6": "57507d2188135c2cbb6f9230e4718414e19db263",
        // Dec 21, 2023
        "5.0.3.5": "cd8b7518a150c06cf4589c77d9559caca72f372b",
        // Dec 17, 2023
        "5.0.3.4": "cbf0ae4839d48fe40fa876d66ad40fc2095ba0a1",
        // Dec 3, 2023 - bis version
        "5.0.3.3": "e5d191ce38106549af2124f9e607e69c728a645b",
        // Nov 28, 2023
        "5.0.3.2": "18aac44539c994f10538f3d99e747644d145ee52",
        // Nov 11, 2023
        "5.0.3.1": "e42a945ed490cd4db4a3e5ce905ffba37cd39bfa",
        // Nov 4, 2023
        "5.0.3.0": "6f18e8725a8d14b8ba44b2c0d00ca126f119ed21",
        // Oct 13, 2023
        "5.0.2.26": "ea573f13174328a662d0c4189b0e3e5d59834540",
        // missing versions
        // Sep 21, 2023
        "5.0.2.22": "1b8e3db8d893afed926b6c589eda8c1ab29c6af4",
        // missing versions
        // Aug 27, 2023
        "5.0.2.19": "c8c688afbc65e3d2a118151ef495c5f1b56f55a1",
        // missing versions
        // May 28, 2023
        "5.0.2.16": "46070027ea2c0abe85981b2b00c6d6ea258e0bc9",
        // missing versions
        // Apr 9, 2023
        "5.0.2.13": "385656156fa56b6edf66dd984594acfd459526c0",
        // missing versions
        // Mar 22, 2023
        "5.0.2.9": "07efa4b251f61c39f913da8a8af5433577d3c78c",
        // missing versions
        // Feb 26, 2023
        "5.0.2.6": "029520f20ee6c256789cfee45bed21f5251bc6a3",
        // missing versions
        // Feb 3, 2023
        "5.0.2.3": "d5e102ff3d0a886141cb1deb3b7c6c160533911c",
        // missing versions
        // Jan 16, 2023
        "5.0.2.0": "7a67f257a89a11ea95318d2c4f4791c3c66820f6",
        // Jan 6, 2023
        "5.0.1.9": "803c2b9e34516647d313d533927bcf86a956c913",
        // Dec 11, 2022
        "5.0.1.8": "e99066b1fcf56e4cd2bd64d47656c7375ff50607",
        // Nov 16, 2022
        "5.0.1.7": "3095475492fab47df7d08584dfa8e4fdf0753ae7",
        // Nov 12, 2022
        "5.0.1.6": "ec71d77c3fec79e7223bc10493dd8e6aafb5f7c8",
        // Nov 10, 2022
        "5.0.1.5": "341578dd5a967574e34084b19de95e7355e66d27",
        // Nov 6, 2022
        "5.0.1.4": "3660934f607d00fe15aa5995ef0e5eb0aeb591a5",
        // Nov 2, 2022
        "5.0.1.3": "9bec3f55f9a7470bff112322990aa07669fb7c40",
        // Oct 30, 2022
        "5.0.1.2": "a4fcb660f1b6cbfc1358f49814ec4ecf6ca735dd",
        // Oct 28, 2022
        "5.0.1.1": "9e683ee3320e84bae865702767d0bd95cd59b120",
        // Oct 26, 2022
        "5.0.1.0": "a5f3daab5c6f4f7f8de9c199043f2e42294bfb45",
        // Oct 4, 2022
        "5.0.0.9": "7e79b6b70f32a278123b9ca5c22717d22b8fa3d8",
        // Oct 3, 2022
        "5.0.0.8": "04411180c1b445ad22b1015693e26c3c2e4ce2c8",
        // Oct 1, 2022
        "5.0.0.7": "256a5c38cddff29f1d810630c3642afa742734fd",
        // Sep 22, 2022
        "5.0.0.6": "f15b35687776bf91ee03579ac86e11ba4b396f04",
        // Aug 27, 2022
        "5.0.0.5": "aecac7103af62c577cfbac28d7e1b90060a62983",
        // Aug 8, 2022
        "5.0.0.4": "a2fda48fadb8a29c966e3bccb99a3162719a8efe",
        // Aug 7, 2022
        "5.0.0.3": "caafaa9a1c63a9846042fc5d1ebdeb4b8cf55ff5",
        // Jul 17, 2022
        "5.0.0.2": "daa15780b95fbf6bea59adad3a0199af0b9c4a07",
        // Jul 10, 2022
        "5.0.0.1": "088f9b761a386a29a30b47649c95673e1cfad496",
        // Jun 19, 2022
        "4.4.9.3": "5caf429a1578d541f6dadc787f8014d1c2ebe71a",
        // Jun 10, 2022
        "4.4.9.2": "032958a27026d1be68c297ba534bbe1d1fe47f4c",
        // Jun 9, 2022
        "4.4.9.1": "d14609ca3698fb0f772a867fd0178bbca5eb37cc",
        // Jun 6, 2022
        "4.4.9.0": "52f178b09cfec745c11d1f209572df682dd3f2e4",
        // May 8, 2022
        "4.4.8.37": "fba5281131d7bbac2b15bfd2112f6ef20f32f46e",
        // Apr 30, 2022
        "4.4.8.36": "b8ce2b3ec9cd97b38f04336ff0dc1996d608f730",
        // Apr 19, 2022
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
}

export default Sdk;
