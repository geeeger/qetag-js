import { WorkersProvider } from "worker-provider/lib/interface";
import QETagBase from "./base";
import * as Interface from "./interface";
export default class QETagWorker extends QETagBase implements Interface.QETagWorker {
    workers: WorkersProvider;
    channel: string;
    constructor(file: Interface.QZFile, workers: WorkersProvider);
    get(): PromiseLike<string>;
}
