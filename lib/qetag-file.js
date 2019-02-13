(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["file"] = factory();
	else
		root["QETag"] = root["QETag"] || {}, root["QETag"]["file"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/QZFile.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Block.ts":
/*!**********************!*\
  !*** ./src/Block.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Block = (function () {\n    function Block(file, startByte, endByte) {\n        this.file = file;\n        this.startByte = startByte;\n        this.endByte = endByte;\n    }\n    Object.defineProperty(Block.prototype, \"size\", {\n        get: function () {\n            return this.endByte - this.startByte;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Block.prototype, \"index\", {\n        get: function () {\n            return this.startByte / this.file.blockSize;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Block.prototype, \"blob\", {\n        get: function () {\n            return this.file.slice(this.startByte, this.endByte);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Block;\n}());\nexports.default = Block;\n\n\n//# sourceURL=webpack://QETag.%5Bname%5D/./src/Block.ts?");

/***/ }),

/***/ "./src/QZFile.ts":
/*!***********************!*\
  !*** ./src/QZFile.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Block_1 = __importDefault(__webpack_require__(/*! ./Block */ \"./src/Block.ts\"));\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\nvar rExt = /\\.([^.]+)$/;\nvar uid = 1;\nvar QZFile = (function () {\n    function QZFile(_a) {\n        var _b = _a.file, file = _b === void 0 ? null : _b, _c = _a.blockSize, blockSize = _c === void 0 ? 4 * 1024 * 1024 : _c, _d = _a.batch, batch = _d === void 0 ? utils_1.guid() : _d;\n        if (!file) {\n            throw new Error(\"QZFile: no file provided!\");\n        }\n        this.file = file;\n        this.blockSize = blockSize;\n        this.batch = batch;\n        this.size = file.size;\n        this.name = file.name || 'unknown_' + uid++;\n        this.lastModified = file.lastModified || new Date().getTime();\n        var ext = rExt.exec(file.name) ? RegExp.$1.toLowerCase() : '';\n        if (!ext && file.type) {\n            ext = /\\/(jpg|jpeg|png|gif|bmp)$/i.exec(file.type) ? RegExp.$1.toLowerCase() : '';\n            if (ext) {\n                this.name += '.' + ext;\n            }\n        }\n        this.ext = ext;\n        if (!file.type && this.ext && ~'jpg,jpeg,png,gif,bmp'.indexOf(this.ext)) {\n            this.type = 'image/' + (this.ext === 'jpg' ? 'jpeg' : this.ext);\n        }\n        else {\n            this.type = file.type || 'application/octet-stream';\n        }\n    }\n    QZFile.prototype.slice = function (start, end) {\n        var file = this.file;\n        var slice = file.slice;\n        return slice.call(file, start, end);\n    };\n    QZFile.prototype.getBlocks = function () {\n        if (this.blocks) {\n            return this.blocks;\n        }\n        var startByte = 0;\n        var blocks = [];\n        while (startByte < this.size) {\n            var endByte = startByte + this.blockSize;\n            if (endByte > this.size) {\n                endByte = this.size;\n            }\n            blocks.push(new Block_1.default(this, startByte, endByte));\n            startByte += this.blockSize;\n        }\n        this.blocks = blocks;\n        return blocks;\n    };\n    QZFile.prototype.getBlockByIndex = function (index) {\n        return this.getBlocks()[index];\n    };\n    return QZFile;\n}());\nexports.default = QZFile;\n\n\n//# sourceURL=webpack://QETag.%5Bname%5D/./src/QZFile.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction guid() {\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n        var r = (Math.random() * 16) | 0;\n        var v = c === 'x' ? r : (r & 0x3) | 0x8;\n        return v.toString(16);\n    });\n}\nexports.guid = guid;\n\n\n//# sourceURL=webpack://QETag.%5Bname%5D/./src/utils.ts?");

/***/ })

/******/ })["default"];
});