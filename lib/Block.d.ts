import * as Interface from "./interface";
export default class Block implements Interface.Block {
    startByte: number;
    endByte: number;
    file: Interface.QZFile;
    constructor(file: Interface.QZFile, startByte: number, endByte: number);
    readonly size: number;
    readonly index: number;
    readonly blob: Blob;
}
