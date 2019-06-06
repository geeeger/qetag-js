import * as Interface from "./interface";

export default class Block implements Interface.Block {
    public startByte: number;
    public endByte: number;
    public file: Interface.QZFile;
    public constructor(file: Interface.QZFile, startByte: number, endByte: number) {
        this.file = file;
        this.startByte = startByte;
        this.endByte = endByte;
    }

    get size(): number {
        return this.endByte - this.startByte;
    }

    get index(): number {
        return this.startByte / this.file.blockSize;
    }

    get blob(): Blob {
        return this.file.slice(this.startByte, this.endByte);
    }
}
