import * as Interface from "./interface";
export default class QETagBase implements Interface.QETagBase {
    static Promise: PromiseConstructor & PromiseConstructorLike;
    file: Interface.QZFile;
    hash: string;
    constructor(file: Interface.QZFile);
    set(hash: string): void;
    getSync(): string;
}
