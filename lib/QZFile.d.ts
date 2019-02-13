import { IBlock, IQZFile } from "./interface";
export default class QZFile implements IQZFile {
    file: File;
    batch: string;
    blockSize: number;
    blocks: IBlock[];
    name: string;
    lastModified: number;
    ext: string;
    size: number;
    type: string;
    constructor({ file, blockSize, batch, }: {
        file?: any;
        blockSize?: number;
        batch?: string;
    });
    slice(start: number, end: number): Blob;
    getBlocks(): IBlock[];
    getBlockByIndex(index: number): IBlock;
}
