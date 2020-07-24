import QZFile from "../src/file";
import QETagNormal from "../src/normal";

const file = new QZFile({
    file: new File(["1"], "", {type: "text/html"}),
});

jest.setTimeout(10000);

const qetag = new QETagNormal(file);

it("QETagNormal", (done) => {
    qetag.get()
        .then((hash) => {
            expect(hash).toBe("FjVqGSt5E7BMVFdNGMKNRuY5VCir");
            done();
        });
});

it("QETagNormal, cacled", (done) => {
    qetag.get()
        .then((hash) => {
            expect(hash).toBe("FjVqGSt5E7BMVFdNGMKNRuY5VCir");
            done();
        });
});

it("QETagNormal, cacled", (done) => {
    const file1 = new QZFile({
        file: new File([new ArrayBuffer(4 * 1024 * 1024 * 4)], "", {type: "text/html"}),
    });
    const qetag1 = new QETagNormal(file1, 2);
    qetag1.get()
        .then((hash) => {
            expect(hash).toBe("lmJbxJndAg_pUzKSz0BqeL9_RFus");
            done();
        });
});
