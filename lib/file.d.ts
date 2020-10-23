import * as Interface from "./interface";
declare type Props = {
    file?: File;
    blockSize?: number;
    batch?: string;
};
export default class QZFile implements Interface.QZFile {
    file: File;
    batch: string;
    blockSize: number;
    blocks: Interface.Block[];
    name: string;
    lastModified: number;
    ext: string;
    size: number;
    type: string;
    constructor({ file, blockSize, batch, }: Props);
    slice(start: number, end: number): Blob;
    getBlocks(): Interface.Block[];
    getBlockByIndex(index: number): Interface.Block;
}
export {};
