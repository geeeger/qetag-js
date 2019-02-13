import ws from "worker-provider";
import * as utilsMethod from "./utils";

export { default as Base } from "./base";

export { default as Block } from "./block";

export { default as File } from "./file";

export { default as Normal } from "./normal";

export { default as Worker } from "./worker";

export const WorkerProvider = ws;

export const utils = utilsMethod;
