import {
    IQETagBase, IQZFile,
} from "./interface";

export default class QETagBase implements IQETagBase {

    public static Promise: any | PromiseConstructor | PromiseConstructorLike = Promise;
    public file: IQZFile;
    public hash: string;
    constructor(file: IQZFile) {
        this.file = file;
        this.hash = "";
    }

    public set(hash: string) {
        this.hash = hash;
    }

    public getSync() {
        return this.hash;
    }
}
