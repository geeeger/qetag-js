import Base64 = require("crypto-js/enc-base64");
import WordArray = require("crypto-js/lib-typedarrays");
import SHA1 = require("crypto-js/sha1");

const postMessageFunction = self.postMessage;

export function sha1(payload, channel, postMessage) {
    const fr = new FileReader();
    fr.onload = () => {
        if (fr.result) {
            const wordarray = WordArray.create(fr.result);
            const sha1hash = SHA1(wordarray).toString(Base64);
            postMessage({
                channel,
                payload: {
                    data: sha1hash,
                    index: payload.index,
                },
            });
        }
    };
    fr.onerror = () => {
        postMessage({
            channel,
            error: "error",
            payload: "Read file error",
        });
    };
    fr.onloadend = () => {
        fr.onloadend = fr.onload = fr.onerror = null;
    };
    fr.readAsArrayBuffer(payload.blob);
}

export function handler(data: any, postMessage) {
    const { payload, channel } = data;

    if (typeof FileReader === "undefined") {
        postMessage({
            channel,
            error: "error",
            payload: "FileReaderAPI not support",
        });
        return;
    }

    sha1(payload, channel, postMessage);
}

self.onmessage = (event: MessageEvent) => {
    handler(event.data, postMessageFunction);
};
