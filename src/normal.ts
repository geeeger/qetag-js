import { WordArray } from "crypto-js";
import Base64 = require("crypto-js/enc-base64");
import LibWordArray = require("crypto-js/lib-typedarrays");
import SHA1 = require("crypto-js/sha1");
import log2 from "math-log2";
import throat from "throat";
import QETagBase from "./base";
import {
    IBlock,
    IQETagNormal,
    IQZFile,
} from "./interface";

export default class QETagNormal extends QETagBase implements IQETagNormal {
    public concurrency: number;

    constructor(file: IQZFile, concurrency: number = 1) {
        super(file);
        this.concurrency = concurrency;
    }

    public loadNext(block: IBlock): PromiseLike<WordArray> {
        const Promise = QETagNormal.Promise;
        return new Promise((resolve, reject) => {
            const fr = new FileReader();
            fr.onload = () => {
                if (fr.result) {
                    const wordarray = LibWordArray.create(fr.result);
                    const sha1 = SHA1(wordarray);
                    resolve(sha1);
                } else {
                    reject(new Error("Read file error!"));
                }
            };
            fr.onloadend = () => {
                fr.onloadend = fr.onload = fr.onerror = null;
            };
            fr.onerror = () => {
                reject(new Error("Read file error!"));
            };
            fr.readAsArrayBuffer(block.blob);
        });
    }

    public get(): PromiseLike<string> {
        const Promise = QETagNormal.Promise;
        if (this.hash) {
            return Promise.resolve(this.hash);
        }
        return Promise.all(
            this.file
                .getBlocks()
                .map(throat(Promise).apply(this, [this.concurrency, (block: IBlock) => this.loadNext(block)])),
        )
            .then((hashs: any[]) => {
                let perfex = log2(this.file.blockSize);
                const isSmallFile = hashs.length === 1;
                let hash = null;
                if (isSmallFile) {
                    hash = hashs[0];
                } else {
                    perfex = 0x80 | perfex;
                    hash = hashs.reduce((a, b) => a.concat(b));
                    hash = SHA1(hash);
                }
                const byte = new ArrayBuffer(1);
                const dv = new DataView(byte);
                dv.setUint8(0, perfex);
                hash = LibWordArray.create(byte).concat(hash);
                hash = hash
                    .toString(Base64)
                    .replace(/\//g, "_")
                    .replace(/\+/g, "-");

                this.hash = hash;
                return hash;
            });
    }
}
