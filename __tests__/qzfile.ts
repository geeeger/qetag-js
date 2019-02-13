import QZFile from "../src/file";

it("should throw error if file ref doesn't exist", () => {
    const errorthrow = () => new QZFile({});

    expect(errorthrow).toThrow(Error);
});

it("should get file property", () => {
    const file = new QZFile({
        file: new File(["1"], "", {type: "text/html"}),
    });
    expect(file.name).toBe("unknown_1");
    expect(file.ext).toBe("");
    expect(file.size).toBe(1);
    expect(typeof file.batch).toBe("string");
    expect(typeof file.lastModified).toBe("number");
    expect(file.type).toBe("text/html");
    const file1 = new QZFile({
        file: new File(["1"], ""),
    });
    expect(file1.type).toBe("application/octet-stream");
    const ab = new ArrayBuffer(8);
    const abv = new Int16Array(ab);
    const img = new QZFile({
        file: new File([abv], "", {
            type: "image/jpeg",
        }),
    });
    expect(img.ext).toBe("jpeg");
    const img1 = new QZFile({
        file: new File([abv], "test.jPeg"),
    });
    expect(img1.type).toBe("image/jpeg");
    const img2 = new QZFile({
        file: new File([abv], "test.jpg"),
    });
    expect(img2.type).toBe("image/jpeg");

    const file2 = new QZFile({
        batch: "testguid",
        blockSize: 2 * 1024 * 1024,
        file: new Blob(["1"]),
    });
    expect(file2.blockSize).toBe(2 * 1024 * 1024);
    expect(file2.batch).toBe("testguid");

});

it("constructor blocks", () => {
    const ab = new ArrayBuffer(24);
    const file1 = new QZFile({
        blockSize: 20,
        file: new File([ab], ""),
    });
    const blocks = file1.getBlocks();
    expect(blocks[0].size).toBe(20);
    expect(blocks[0].startByte).toBe(0);
    expect(blocks[0].endByte).toBe(20);
    expect(blocks[1].size).toBe(4);
    expect(blocks[1].endByte).toBe(24);
    expect(blocks[0].index).toBe(0);
    expect(blocks[0].blob instanceof Blob).toBeTruthy();
    const blocks1 = file1.getBlocks();
    expect(blocks1).toEqual(blocks);
    expect(file1.getBlockByIndex(0)).toEqual(blocks1[0]);
});
