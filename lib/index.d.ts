import ws from "worker-provider";
import * as utilsMethod from "./utils";
export { default as Base } from "./base";
export { default as Block } from "./block";
export { default as File } from "./file";
export { default as Normal } from "./normal";
export { default as Worker } from "./worker";
export declare const WorkerProvider: typeof ws;
export declare const utils: typeof utilsMethod;
