import { WorkersProvider } from "worker-provider/lib/interface";
export interface QZFile {
    file: File;
    batch: string;
    blockSize: number;
    blocks: Block[];
    name: string;
    lastModified: number;
    ext: string;
    size: number;
    type: string;
    slice(start: number, end: number): Blob;
    getBlocks(): Block[];
    getBlockByIndex(index: number): Block;
}
export interface Block {
    startByte: number;
    endByte: number;
    file: QZFile;
    index?: number;
    size?: number;
    blob?: Blob;
}
export interface QETagBase {
    file: QZFile;
    hash: string;
    get?(): PromiseLike<string>;
    set(hash: string): void;
    getSync(): string;
}
export interface QETagNormal extends QETagBase {
    concurrency: number;
}
export interface QETagWorker extends QETagBase {
    channel: string;
    workers: WorkersProvider;
}
