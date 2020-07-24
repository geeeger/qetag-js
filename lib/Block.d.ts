import * as Interface from "./interface";
export default class Block implements Interface.Block {
    startByte: number;
    endByte: number;
    file: Interface.QZFile;
    constructor(file: Interface.QZFile, startByte: number, endByte: number);
    get size(): number;
    get index(): number;
    get blob(): Blob;
}
