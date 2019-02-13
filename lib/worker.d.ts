import { IWorkersProvider } from "worker-provider/lib/interface";
import QETagBase from "./base";
import { IQETagWorker, IQZFile } from "./interface";
export default class QETagWorker extends QETagBase implements IQETagWorker {
    workers: IWorkersProvider;
    channel: string;
    constructor(file: IQZFile, workers: IWorkersProvider);
    get(): PromiseLike<string>;
}
