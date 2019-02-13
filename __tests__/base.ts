import Base from "../src/base";
import QZFile from "../src/file";

it('QETagBase', () => {
    const file = new QZFile({
        file: new File(['1'], '', {type: 'text/html'})
    });

    const qetag = new Base(file);
    qetag.set('1234');
    expect(qetag.getSync()).toBe('1234');
});