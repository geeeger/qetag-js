import { WordArray } from "crypto-js";
import { IBlock, IQETagNormal, IQZFile } from "./interface";
import QETagBase from "./QETagBase";
export default class QETagNormal extends QETagBase implements IQETagNormal {
    concurrency: number;
    constructor(file: IQZFile, concurrency?: number);
    loadNext(block: IBlock): PromiseLike<WordArray>;
    get(): PromiseLike<string>;
}
