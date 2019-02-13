import { IBlock, IQZFile } from "./interface";
export default class Block implements IBlock {
    startByte: number;
    endByte: number;
    file: IQZFile;
    constructor(file: IQZFile, startByte: number, endByte: number);
    readonly size: number;
    readonly index: number;
    readonly blob: Blob;
}
