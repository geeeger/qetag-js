import { IQETagBase, IQZFile } from "./interface";
export default class QETagBase implements IQETagBase {
    static Promise: any | PromiseConstructor | PromiseConstructorLike;
    file: IQZFile;
    hash: string;
    constructor(file: IQZFile);
    set(hash: string): void;
    getSync(): string;
}
