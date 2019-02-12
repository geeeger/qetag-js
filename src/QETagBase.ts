import {
    IQZFile, IQETagBase,
} from './interface';

export default class QETagBase implements IQETagBase {
    file: IQZFile;
    hash: string;

    static Promise:any | PromiseConstructor | PromiseConstructorLike = Promise;
    constructor(file: IQZFile) {
        this.file = file;
        this.hash = '';
    }

    set(hash: string) {
        this.hash = hash;
    }

    getSync() {
        return this.hash;
    }
}