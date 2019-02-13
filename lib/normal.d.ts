import { WordArray } from "crypto-js";
import QETagBase from "./base";
import { IBlock, IQETagNormal, IQZFile } from "./interface";
export default class QETagNormal extends QETagBase implements IQETagNormal {
    concurrency: number;
    constructor(file: IQZFile, concurrency?: number);
    loadNext(block: IBlock): PromiseLike<WordArray>;
    get(): PromiseLike<string>;
}
