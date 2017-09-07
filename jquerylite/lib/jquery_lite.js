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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

window.$l = function(arg){
  let nodeList;
  if (arg instanceof HTMLElement) {
    nodeList = [arg];
  } else {
    nodeList = Array.from(document.querySelectorAll(arg));
  }
  return new DOMNodeCollection(nodeList);
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(array) {
    this.elements = array;
  }

  html(setter) {
    if (setter !== undefined) {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML = setter;
      }
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty(){
    this.html("");
  }

  append(arg){
    if(arg instanceof DOMNodeCollection){
      for(let i = 0; i < arg.elements.length; ++i){
        this.append(arg.elements[i]);
      }
    } else if (arg instanceof HTMLElement) {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].appendChild(arg);
      }
    } else {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML += arg;
      }
    }
  }

  attr(name, val){
    if(arguments.length === 1){
      this.elements[0].getAttribute(name);
    }
    else{
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].setAttribute(name, val);
      }
    }
  }

  removeClass(className){
    const classNames = className.split(" ");
    for (var i = 0; i < this.elements.length; i++) {
      for (var j = 0; j < classNames.length; j++) {
        this.elements[i].classList.remove(classNames[j]);
      }
    }
  }

  addClass(className){
    const classNames = className.split(" ");
    for (var i = 0; i < this.elements.length; i++) {
      for (var j = 0; j < classNames.length; j++) {
        this.elements[i].classList.add(classNames[j]);
      }
    }
  }

  children() {
    const arr = [];
    for (var i = 0; i < this.elements.length; i++) {
      for (var j = 0; j < this.elements[i].children.length; j++) {
        arr.push(this.elements[i].children[j]);
      }
    }
    return new DOMNodeCollection(arr);
  }

  parent() {
    const arr = [];
    for (var i = 0; i < this.elements.length; i++) {
      const parent = this.elements[i].parentElement;
      if (!arr.includes(parent)) {
        arr.push(parent);
      }
    }

    return new DOMNodeCollection(arr);
  }

  find(query) {
    query = query || "*";
    const arr = [];
    for (var i = 0; i < this.elements.length; i++) {
      const descendantsCol = this.elements[i].querySelectorAll(query);
      for (var j = 0; j < descendantsCol.length; j++) {
        arr.push(descendantsCol[j]);
      }
    }
    return new DOMNodeCollection(arr);
  }
  remove(selector){
    const matchedElements = Array.from(document.querySelectorAll(selector));
    const removeIndices = [];
    for (let i = 0; i < this.elements.length; i++) {
      if (selector === undefined ||
        matchedElements.includes(this.elements[i])) {

        this.elements[i].outerHTML = "";
        removeIndices.push(i);

      }
    }
    this.elements = this.elements.filter( (e, i) => {
      return !removeIndices.includes(i);
    });
  }
}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);