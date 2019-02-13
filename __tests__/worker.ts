import QETagWorker from "../src/worker";
import QZFile from "../src/file";
import WorkerProvider from 'worker-provider';
import {handler} from '../src/workerscript';

class Worker {
    public path: string;
    constructor(path) {
        this.path = path;
    }

    public onmessage(e) {
        // rewrite
    }

    public postMessage(message) {
        handler(message, (data) => {
            setTimeout(() => {
                this.onmessage({
                    data,
                    target: this,
                });
            }, 500);
        });
    }

    public terminate() {
        // todo
    }
}

interface IWindow {
    [key: string]: any;
}

declare var window: IWindow;

window.Worker = Worker;

const fakepath = '';

jest.setTimeout(10000);

const workers = new WorkerProvider(fakepath);

it('QETagWorker', (done) => {

    const file = new QZFile({
        file: new File(['1'], '', {type: 'text/html'})
    });

    const qetag = new QETagWorker(file, workers);
    qetag.get()
        .then((hash) => {
            expect(hash).toBe('FjVqGSt5E7BMVFdNGMKNRuY5VCir');
            done();
        });
});

it('QETagWorker 1', (done) => {

    const file = new QZFile({
        file: new File([new ArrayBuffer(4 * 1024 * 1024 * 4)], '', {type: 'text/html'})
    });
    const qetag = new QETagWorker(file, workers);
    qetag.get()
        .then((hash) => {
            expect(hash).toBe('lmJbxJndAg_pUzKSz0BqeL9_RFus');
            done();
        });
});
