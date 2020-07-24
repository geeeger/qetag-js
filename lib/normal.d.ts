import { WordArray } from "crypto-js";
import QETagBase from "./base";
import * as Interface from "./interface";
export default class QETagNormal extends QETagBase implements Interface.QETagNormal {
    concurrency: number;
    constructor(file: Interface.QZFile, concurrency?: number);
    loadNext(block: Interface.Block): Promise<WordArray>;
    get(): Promise<string>;
}
