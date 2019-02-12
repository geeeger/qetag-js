import { WordArray } from 'crypto-js';
import { IWorkersProvider } from 'worker-provider/lib/interface';

export interface IQZFile {
    file: File;
    batch: string;
    blockSize: number;
    blocks: IBlock[];
    name: string;
    lastModified: number;
    ext: string;
    size: number;
    type: string;
    slice(start: number, end: number): Blob;
    getBlocks(): IBlock[];
    getBlockByIndex(index: number): IBlock;
}

export interface IBlock {
    startByte: number;
    endByte: number;
    file: IQZFile;
    index?: number;
    size?: number;
    blob?: Blob;
}

export interface IQETagBase {
    file: IQZFile;
    hash: string;
    get?(): PromiseLike<string>;
    set(hash: string): void;
    getSync(): string;
}

export interface IQETagNormal extends IQETagBase {
    concurrency: number;
}

export interface IQETagWorker extends IQETagBase {
    channel: string;
    workers: IWorkersProvider;
}
