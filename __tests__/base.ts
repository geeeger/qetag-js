import Base from "../src/QETagBase";
import QZFile from "../src/QZFile";

it('QETagBase', () => {
    const file = new QZFile({
        file: new File(['1'], '', {type: 'text/html'})
    });

    const qetag = new Base(file);
    qetag.set('1234');
    expect(qetag.getSync()).toBe('1234');
});