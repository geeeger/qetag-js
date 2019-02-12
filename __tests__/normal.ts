import QETagNormal from "../src/QETagNormal";
import QZFile from "../src/QZFile";
import * as bluebird from "bluebird";

const file = new QZFile({
    file: new File(['1'], '', {type: 'text/html'})
});

QETagNormal.Promise = bluebird.Promise;

jest.setTimeout(10000);

const qetag = new QETagNormal(file);

it('QETagNormal', (done) => {
    qetag.get()
        .then((hash) => {
            expect(hash).toBe('FjVqGSt5E7BMVFdNGMKNRuY5VCir');
            done();
        });
});

it('QETagNormal, cacled', (done) => {
    qetag.get()
        .then((hash) => {
            expect(hash).toBe('FjVqGSt5E7BMVFdNGMKNRuY5VCir');
            done();
        });
});

it('QETagNormal, cacled', (done) => {
    const file = new QZFile({
        file: new File([new ArrayBuffer(4 * 1024 * 1024 * 4)], '', {type: 'text/html'})
    });
    const qetag = new QETagNormal(file, 2);
    qetag.get()
        .then((hash) => {
            expect(hash).toBe('lmJbxJndAg_pUzKSz0BqeL9_RFus');
            done();
        });
});