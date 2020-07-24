import * as Interface from "./interface";
export default class QETagBase implements Interface.QETagBase {
    public file: Interface.QZFile;
    public hash: string;
    public constructor(file: Interface.QZFile) {
        this.file = file;
        this.hash = "";
    }

    public set(hash: string): void {
        this.hash = hash;
    }

    public get(): Promise<string> {
        return Promise.resolve(this.hash);
    }

    public getSync(): string {
        return this.hash;
    }
}
