import { IWorkersProvider } from "worker-provider/lib/interface";
import { IQETagWorker, IQZFile } from "./interface";
import QETagBase from "./QETagBase";
export default class QETagWorker extends QETagBase implements IQETagWorker {
    workers: IWorkersProvider;
    channel: string;
    constructor(file: IQZFile, workers: IWorkersProvider);
    get(): PromiseLike<string>;
}
