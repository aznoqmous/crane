/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/crane.js":
/*!**********************!*\
  !*** ./src/crane.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Crane; });\nclass Crane {\r\n    constructor(config){\r\n        config = Object.assign({\r\n            timeout: 500,\r\n            transition: 'ease',\r\n            spyOpacity: 0.5,\r\n            onMoveEnd: null\r\n        }, config)\r\n        for(let key in config) this[key] = config[key]\r\n    }\r\n\r\n    move(el, destination){\r\n        return new Promise((res)=>{\r\n            let styles = JSON.parse( JSON.stringify(el.style) )\r\n            let delta = this.getDelta(el, destination)\r\n\r\n            el.style.transform = 'translate(0, 0)'\r\n            el.style.transition = `all ${this.timeout}ms ${this.transition}`\r\n            el.style.zIndex = 1000\r\n            el.style.transform = `translate(${delta.x}px, ${delta.y}px)`\r\n\r\n            setTimeout(()=>{\r\n                el.style.transition = 'none'\r\n                el.style.transform = ''\r\n                el.style = styles\r\n                destination.appendChild(el)\r\n                res(el)\r\n            }, this.timeout)\r\n\r\n        })\r\n    }\r\n\r\n    getDelta(el, destination){\r\n        let a = el.getBoundingClientRect()\r\n        let b = this.getFuturePosition(el, destination)\r\n        let delta = {}\r\n        for(let key in a){\r\n            delta[key] = b[key] - a[key]\r\n        }\r\n        return delta\r\n    }\r\n\r\n    getFuturePosition(el, destination){\r\n        let spy = document.createElement(el.tagName)\r\n        spy.style = Object.assign(spy.style, {\r\n            position: 'absolute',\r\n            opacity: this.spyOpacity,\r\n            pointerEvents: 'none'\r\n        })\r\n\r\n        destination.appendChild(spy)\r\n        let res = spy.getBoundingClientRect()\r\n        destination.removeChild(spy)\r\n        return res\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/crane.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crane */ \"./src/crane.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n\r\n    let archives = [...document.querySelectorAll('.fa-archive')]\r\n    let destinations = [...document.querySelectorAll('.card')]\r\n\r\n    let crane = new _crane__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({})\r\n\r\n    run()\r\n\r\n    function run(){\r\n\r\n        return new Promise(res =>{\r\n            let rand = Math.floor( Math.random() * archives.length )\r\n            let archive = archives[rand]\r\n            let availableDestinations = destinations.filter((dest)=>{\r\n                return archive.parentElement != dest\r\n            })\r\n\r\n            rand = Math.floor( Math.random() * availableDestinations.length )\r\n            let destination = availableDestinations[[rand]]\r\n\r\n            crane.move(archive, destination)\r\n            .then(run)\r\n        })\r\n\r\n    }\r\n\r\n\r\n\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });