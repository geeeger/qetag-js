import * as Interface from "./interface";
export default class QETagBase implements Interface.QETagBase {
    file: Interface.QZFile;
    hash: string;
    constructor(file: Interface.QZFile);
    set(hash: string): void;
    get(): Promise<string>;
    getSync(): string;
}
