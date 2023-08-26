/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* COLORS */
  --main-font-color: white;
  --main-bg-color: rgb(69, 69, 69);
  --main-shadow-color: rgba(0, 0, 0, 0.5);
  --banner-bg-color: rgb(26, 26, 26);
  --accent-color: dodgerblue;
  --bg-click-color: brightness(0.7);

  /* DIMENSIONS */
  --main-margin: 20px;
  --main-padding: 10px;
  --main-border-radius: 10px;
  --banner-height: 40px;

  /* PROPERTIES */
  --main-shadow: 8px 8px 16px var(--main-shadow-color);

  /* DURATIONS */
  --main-transition-duration: 0.2s;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  color: var(--main-font-color);
  background-color: var(--main-bg-color);
}

.content-container > * {
  width: 100dvw;
}

.content-container {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

header,
footer {
  min-height: var(--banner-height);

  padding: var(--main-padding);

  background-color: var(--banner-bg-color);
}

header *,
footer * {
  background-color: var(--banner-bg-color);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: xx-large;
  font-weight: bolder;
}

#page-menu {
  width: 20%;

  display: flex;
  justify-content: right;
  align-items: center;
  gap: 20px;

  margin-right: 2rem;
}

#page-menu > button {
  all: unset;
  font-size: medium;
  padding: var(--main-padding);

  background-color: var(--accent-color);

  border: solid 2px var(--main-font-color);
  border-radius: var(--main-border-radius);

  transition-duration: var(--main-transition-duration);
}

#page-menu > button:hover {
  cursor: pointer;
  scale: 1.1;
}

#page-menu > button:active {
  scale: 1;
  filter: var(--bg-click-color);
}

main {
  max-width: 800px;

  flex: 1;

  padding: var(--main-padding);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
}

main img {
  max-width: 400px;
  height: auto;

  border-radius: var(--main-border-radius);
  box-shadow: var(--main-shadow);
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,wBAAwB;EACxB,gCAAgC;EAChC,uCAAuC;EACvC,kCAAkC;EAClC,0BAA0B;EAC1B,iCAAiC;;EAEjC,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,qBAAqB;;EAErB,eAAe;EACf,oDAAoD;;EAEpD,cAAc;EACd,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;;EAET,6BAA6B;EAC7B,sCAAsC;AACxC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;wEACsE;;EAEtE,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;;EAEE,gCAAgC;;EAEhC,4BAA4B;;EAE5B,wCAAwC;AAC1C;;AAEA;;EAEE,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;;EAEnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,UAAU;;EAEV,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,4BAA4B;;EAE5B,qCAAqC;;EAErC,wCAAwC;EACxC,wCAAwC;;EAExC,oDAAoD;AACtD;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,QAAQ;EACR,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;;EAEhB,OAAO;;EAEP,4BAA4B;;EAE5B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,YAAY;;EAEZ,wCAAwC;EACxC,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":[":root {\n  /* COLORS */\n  --main-font-color: white;\n  --main-bg-color: rgb(69, 69, 69);\n  --main-shadow-color: rgba(0, 0, 0, 0.5);\n  --banner-bg-color: rgb(26, 26, 26);\n  --accent-color: dodgerblue;\n  --bg-click-color: brightness(0.7);\n\n  /* DIMENSIONS */\n  --main-margin: 20px;\n  --main-padding: 10px;\n  --main-border-radius: 10px;\n  --banner-height: 40px;\n\n  /* PROPERTIES */\n  --main-shadow: 8px 8px 16px var(--main-shadow-color);\n\n  /* DURATIONS */\n  --main-transition-duration: 0.2s;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n\n  color: var(--main-font-color);\n  background-color: var(--main-bg-color);\n}\n\n.content-container > * {\n  width: 100dvw;\n}\n\n.content-container {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n\n  min-height: 100dvh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\nheader,\nfooter {\n  min-height: var(--banner-height);\n\n  padding: var(--main-padding);\n\n  background-color: var(--banner-bg-color);\n}\n\nheader *,\nfooter * {\n  background-color: var(--banner-bg-color);\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n#page-menu {\n  width: 20%;\n\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  gap: 20px;\n\n  margin-right: 2rem;\n}\n\n#page-menu > button {\n  all: unset;\n  font-size: medium;\n  padding: var(--main-padding);\n\n  background-color: var(--accent-color);\n\n  border: solid 2px var(--main-font-color);\n  border-radius: var(--main-border-radius);\n\n  transition-duration: var(--main-transition-duration);\n}\n\n#page-menu > button:hover {\n  cursor: pointer;\n  scale: 1.1;\n}\n\n#page-menu > button:active {\n  scale: 1;\n  filter: var(--bg-click-color);\n}\n\nmain {\n  max-width: 800px;\n\n  flex: 1;\n\n  padding: var(--main-padding);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  gap: 20px;\n}\n\nmain img {\n  max-width: 400px;\n  height: auto;\n\n  border-radius: var(--main-border-radius);\n  box-shadow: var(--main-shadow);\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/initPage.js":
/*!*************************!*\
  !*** ./src/initPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHomePage */ "./src/loadHomePage.js");


function initPage() {
  let contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  let pageContents = {
    header: initHeader,
    homePage: initMain,
    footer: initFooter,
  };

  Object.keys(pageContents).forEach(key => {
    contentContainer.appendChild(pageContents[key]);
  });

  return document.body.appendChild(contentContainer);
}

const initHeader = (() => {
  let headerWrapper = document.createElement('header');

  let headerContent = {
    title: document.createElement('span'),
    menu: createPageMenu(),
  }

  headerContent.title.textContent = 'Project: Restaurant Page';

  Object.keys(headerContent).forEach(key => {
    headerWrapper.appendChild(headerContent[key]);
  });

  function createPageMenu() {
    let pageMenu = document.createElement('div');
    pageMenu.id = 'page-menu';

    let buttons = {
      home: document.createElement('button'),
      menu: document.createElement('button'),
      findUs: document.createElement('button'),
    }

    buttons.home.id = 'home-btn';
    buttons.menu.id = 'menu-btn';
    buttons.findUs.id = 'find-us-btn';

    buttons.home.textContent = 'Home';
    buttons.menu.textContent = 'Menu';
    buttons.findUs.textContent = 'Find Us';

    Object.keys(buttons).forEach(key => {
      pageMenu.appendChild(buttons[key]);
    });

    return pageMenu;
  };

  return headerWrapper;
})();

const initMain = (() => {
  let mainWrapper = document.createElement('main');
  (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_0__["default"])(mainWrapper);

  return mainWrapper;
})();

const initFooter = (() => {
  let footerWrapper = document.createElement('footer');

  let footerContent = {
    title: document.createElement('span'),
  }

  footerContent.title.innerHTML = `<span>
    ©
    <a href="https://github.com/brzostovski" target="_blank">brzostovski</a>
    2023
  </span>`;

  Object.keys(footerContent).forEach(key => {
    footerWrapper.appendChild(footerContent[key]);
  });

  return footerWrapper;
})();

/***/ }),

/***/ "./src/loadFindUsPage.js":
/*!*******************************!*\
  !*** ./src/loadFindUsPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFindUsPage)
/* harmony export */ });
function loadFindUsPage(mainWrapper = document.querySelector('main')) {
  if (mainWrapper.id === 'find-us-page') return 0;

  mainWrapper.innerHTML = '';
  mainWrapper.id = 'find-us-page';

  let findUsPageContent = {
    title: document.createElement('h1'),
  }

  findUsPageContent.title.textContent = 'This is Find Us';
  
  Object.keys(findUsPageContent).forEach(key => {
    mainWrapper.appendChild(findUsPageContent[key]);
  });

  return {mainWrapper};
}

/***/ }),

/***/ "./src/loadHomePage.js":
/*!*****************************!*\
  !*** ./src/loadHomePage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomePage)
/* harmony export */ });
/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.jpg */ "./src/pizza.jpg");


function loadHomePage(mainWrapper = document.querySelector('main')) {
  if (mainWrapper.id === 'home-page') return 0;

  mainWrapper.innerHTML = '';
  mainWrapper.id = 'home-page';

  let homePageContent = {
    title: document.createElement('h1'),
    image: document.createElement('img'),
    mainPara: document.createElement('p'),
  }

  homePageContent.title.textContent = 'Piazza Nuova';
  homePageContent.image.src = _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
  homePageContent.mainPara.textContent = `Nostrud cillum officia culpa elit ipsum ut amet eiusmod officia aliquip elit. Ex voluptate reprehenderit amet incididunt aliquip cupidatat incididunt quis proident ipsum. Dolor adipisicing id ea qui irure anim. Consectetur ipsum nulla laboris do adipisicing anim. Commodo laborum labore labore duis adipisicing esse qui proident sit. Esse culpa excepteur exercitation culpa nostrud amet ut.

  Proident officia nostrud cillum aute tempor sint. Ex do ut reprehenderit ipsum proident in proident pariatur minim nisi ex mollit officia veniam. Est nulla magna dolor nulla cupidatat enim veniam aliqua id nostrud. Veniam pariatur minim nostrud ut est sit et.

  Consequat amet do reprehenderit deserunt minim velit irure anim magna dolore ipsum minim deserunt ex. Do sint ut ullamco excepteur. Exercitation culpa quis minim ea adipisicing irure dolore nostrud. Tempor occaecat veniam id enim eu duis sint aliquip velit velit aliqua fugiat. Nulla sit aute magna nostrud ea laboris fugiat sit anim consequat aliquip.`;

  Object.keys(homePageContent).forEach(key => {
    mainWrapper.appendChild(homePageContent[key]);
  });

  return {mainWrapper};
}

/***/ }),

/***/ "./src/loadMenuPage.js":
/*!*****************************!*\
  !*** ./src/loadMenuPage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenuPage)
/* harmony export */ });
function loadMenuPage(mainWrapper = document.querySelector('main')) {
  if (mainWrapper.id === 'menu-page') return 0;

  mainWrapper.innerHTML = '';
  mainWrapper.id = 'menu-page';

  let menuPageContent = {
    title: document.createElement('h1'),
  }

  menuPageContent.title.textContent = 'This is Menu page';
  
  Object.keys(menuPageContent).forEach(key => {
    mainWrapper.appendChild(menuPageContent[key]);
  });

  return {mainWrapper};
}

/***/ }),

/***/ "./src/pizza.jpg":
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c424983ea6d69223b86d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _initPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initPage */ "./src/initPage.js");
/* harmony import */ var _loadHomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadHomePage */ "./src/loadHomePage.js");
/* harmony import */ var _loadMenuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadMenuPage */ "./src/loadMenuPage.js");
/* harmony import */ var _loadFindUsPage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadFindUsPage.js */ "./src/loadFindUsPage.js");






const page = (() => {
  (0,_initPage__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const menuButtons = {
    home: document.getElementById('home-btn'),
    menu: document.getElementById('menu-btn'),
    findUs: document.getElementById('find-us-btn'),
  };

  menuButtons.home.addEventListener('click', () => (0,_loadHomePage__WEBPACK_IMPORTED_MODULE_2__["default"])());
  menuButtons.menu.addEventListener('click', () => (0,_loadMenuPage__WEBPACK_IMPORTED_MODULE_3__["default"])());
  menuButtons.findUs.addEventListener('click', () => (0,_loadFindUsPage_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxRCw4REFBYztBQUNuRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZEZpbmRVc1BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvYWRIb21lUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZE1lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogQ09MT1JTICovXG4gIC0tbWFpbi1mb250LWNvbG9yOiB3aGl0ZTtcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XG4gIC0tbWFpbi1zaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLS1iYW5uZXItYmctY29sb3I6IHJnYigyNiwgMjYsIDI2KTtcbiAgLS1hY2NlbnQtY29sb3I6IGRvZGdlcmJsdWU7XG4gIC0tYmctY2xpY2stY29sb3I6IGJyaWdodG5lc3MoMC43KTtcblxuICAvKiBESU1FTlNJT05TICovXG4gIC0tbWFpbi1tYXJnaW46IDIwcHg7XG4gIC0tbWFpbi1wYWRkaW5nOiAxMHB4O1xuICAtLW1haW4tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1iYW5uZXItaGVpZ2h0OiA0MHB4O1xuXG4gIC8qIFBST1BFUlRJRVMgKi9cbiAgLS1tYWluLXNoYWRvdzogOHB4IDhweCAxNnB4IHZhcigtLW1haW4tc2hhZG93LWNvbG9yKTtcblxuICAvKiBEVVJBVElPTlMgKi9cbiAgLS1tYWluLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xufVxuXG4uY29udGVudC1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMGR2dztcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiAgbWluLWhlaWdodDogMTAwZHZoO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgbWluLWhlaWdodDogdmFyKC0tYmFubmVyLWhlaWdodCk7XG5cbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYW5uZXItYmctY29sb3IpO1xufVxuXG5oZWFkZXIgKixcbmZvb3RlciAqIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFubmVyLWJnLWNvbG9yKTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbiNwYWdlLW1lbnUge1xuICB3aWR0aDogMjAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcblxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbiNwYWdlLW1lbnUgPiBidXR0b24ge1xuICBhbGw6IHVuc2V0O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLW1haW4tZm9udC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XG5cbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tbWFpbi10cmFuc2l0aW9uLWR1cmF0aW9uKTtcbn1cblxuI3BhZ2UtbWVudSA+IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgc2NhbGU6IDEuMTtcbn1cblxuI3BhZ2UtbWVudSA+IGJ1dHRvbjphY3RpdmUge1xuICBzY2FsZTogMTtcbiAgZmlsdGVyOiB2YXIoLS1iZy1jbGljay1jb2xvcik7XG59XG5cbm1haW4ge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuXG4gIGZsZXg6IDE7XG5cbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBnYXA6IDIwcHg7XG59XG5cbm1haW4gaW1nIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1haW4tYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tc2hhZG93KTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsdUNBQXVDO0VBQ3ZDLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsaUNBQWlDOztFQUVqQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIscUJBQXFCOztFQUVyQixlQUFlO0VBQ2Ysb0RBQW9EOztFQUVwRCxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTOztFQUVULDZCQUE2QjtFQUM3QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTt3RUFDc0U7O0VBRXRFLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGdDQUFnQzs7RUFFaEMsNEJBQTRCOztFQUU1Qix3Q0FBd0M7QUFDMUM7O0FBRUE7O0VBRUUsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7O0VBRW5CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVOztFQUVWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQiw0QkFBNEI7O0VBRTVCLHFDQUFxQzs7RUFFckMsd0NBQXdDO0VBQ3hDLHdDQUF3Qzs7RUFFeEMsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7RUFDUiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7O0VBRWhCLE9BQU87O0VBRVAsNEJBQTRCOztFQUU1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7O0VBRVosd0NBQXdDO0VBQ3hDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIENPTE9SUyAqL1xcbiAgLS1tYWluLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgLS1tYWluLWJnLWNvbG9yOiByZ2IoNjksIDY5LCA2OSk7XFxuICAtLW1haW4tc2hhZG93LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtLWJhbm5lci1iZy1jb2xvcjogcmdiKDI2LCAyNiwgMjYpO1xcbiAgLS1hY2NlbnQtY29sb3I6IGRvZGdlcmJsdWU7XFxuICAtLWJnLWNsaWNrLWNvbG9yOiBicmlnaHRuZXNzKDAuNyk7XFxuXFxuICAvKiBESU1FTlNJT05TICovXFxuICAtLW1haW4tbWFyZ2luOiAyMHB4O1xcbiAgLS1tYWluLXBhZGRpbmc6IDEwcHg7XFxuICAtLW1haW4tYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC0tYmFubmVyLWhlaWdodDogNDBweDtcXG5cXG4gIC8qIFBST1BFUlRJRVMgKi9cXG4gIC0tbWFpbi1zaGFkb3c6IDhweCA4cHggMTZweCB2YXIoLS1tYWluLXNoYWRvdy1jb2xvcik7XFxuXFxuICAvKiBEVVJBVElPTlMgKi9cXG4gIC0tbWFpbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyID4gKiB7XFxuICB3aWR0aDogMTAwZHZ3O1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcblxcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIG1pbi1oZWlnaHQ6IHZhcigtLWJhbm5lci1oZWlnaHQpO1xcblxcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XFxufVxcblxcbmhlYWRlciAqLFxcbmZvb3RlciAqIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhbm5lci1iZy1jb2xvcik7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4jcGFnZS1tZW51IHtcXG4gIHdpZHRoOiAyMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbiNwYWdlLW1lbnUgPiBidXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgcGFkZGluZzogdmFyKC0tbWFpbi1wYWRkaW5nKTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuXFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcXG5cXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLW1haW4tdHJhbnNpdGlvbi1kdXJhdGlvbik7XFxufVxcblxcbiNwYWdlLW1lbnUgPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuXFxuI3BhZ2UtbWVudSA+IGJ1dHRvbjphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxuICBmaWx0ZXI6IHZhcigtLWJnLWNsaWNrLWNvbG9yKTtcXG59XFxuXFxubWFpbiB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcblxcbiAgZmxleDogMTtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLW1haW4tcGFkZGluZyk7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5tYWluIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcblxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWFpbi1ib3JkZXItcmFkaXVzKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLW1haW4tc2hhZG93KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gJy4vbG9hZEhvbWVQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jb250YWluZXInKTtcblxuICBsZXQgcGFnZUNvbnRlbnRzID0ge1xuICAgIGhlYWRlcjogaW5pdEhlYWRlcixcbiAgICBob21lUGFnZTogaW5pdE1haW4sXG4gICAgZm9vdGVyOiBpbml0Rm9vdGVyLFxuICB9O1xuXG4gIE9iamVjdC5rZXlzKHBhZ2VDb250ZW50cykuZm9yRWFjaChrZXkgPT4ge1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnRzW2tleV0pO1xuICB9KTtcblxuICByZXR1cm4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbn1cblxuY29uc3QgaW5pdEhlYWRlciA9ICgoKSA9PiB7XG4gIGxldCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgbGV0IGhlYWRlckNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSxcbiAgICBtZW51OiBjcmVhdGVQYWdlTWVudSgpLFxuICB9XG5cbiAgaGVhZGVyQ29udGVudC50aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0OiBSZXN0YXVyYW50IFBhZ2UnO1xuXG4gIE9iamVjdC5rZXlzKGhlYWRlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBoZWFkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2VNZW51KCkge1xuICAgIGxldCBwYWdlTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VNZW51LmlkID0gJ3BhZ2UtbWVudSc7XG5cbiAgICBsZXQgYnV0dG9ucyA9IHtcbiAgICAgIGhvbWU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICAgICAgbWVudTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXG4gICAgICBmaW5kVXM6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpLFxuICAgIH1cblxuICAgIGJ1dHRvbnMuaG9tZS5pZCA9ICdob21lLWJ0bic7XG4gICAgYnV0dG9ucy5tZW51LmlkID0gJ21lbnUtYnRuJztcbiAgICBidXR0b25zLmZpbmRVcy5pZCA9ICdmaW5kLXVzLWJ0bic7XG5cbiAgICBidXR0b25zLmhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgYnV0dG9ucy5tZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIGJ1dHRvbnMuZmluZFVzLnRleHRDb250ZW50ID0gJ0ZpbmQgVXMnO1xuXG4gICAgT2JqZWN0LmtleXMoYnV0dG9ucykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgcGFnZU1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYWdlTWVudTtcbiAgfTtcblxuICByZXR1cm4gaGVhZGVyV3JhcHBlcjtcbn0pKCk7XG5cbmNvbnN0IGluaXRNYWluID0gKCgpID0+IHtcbiAgbGV0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBsb2FkSG9tZVBhZ2UobWFpbldyYXBwZXIpO1xuXG4gIHJldHVybiBtYWluV3JhcHBlcjtcbn0pKCk7XG5cbmNvbnN0IGluaXRGb290ZXIgPSAoKCkgPT4ge1xuICBsZXQgZm9vdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXG4gIGxldCBmb290ZXJDb250ZW50ID0ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG4gIH1cblxuICBmb290ZXJDb250ZW50LnRpdGxlLmlubmVySFRNTCA9IGA8c3Bhbj5cbiAgICDCqVxuICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnJ6b3N0b3Zza2lcIiB0YXJnZXQ9XCJfYmxhbmtcIj5icnpvc3RvdnNraTwvYT5cbiAgICAyMDIzXG4gIDwvc3Bhbj5gO1xuXG4gIE9iamVjdC5rZXlzKGZvb3RlckNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBmb290ZXJXcmFwcGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiBmb290ZXJXcmFwcGVyO1xufSkoKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkRmluZFVzUGFnZShtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSkge1xuICBpZiAobWFpbldyYXBwZXIuaWQgPT09ICdmaW5kLXVzLXBhZ2UnKSByZXR1cm4gMDtcblxuICBtYWluV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgbWFpbldyYXBwZXIuaWQgPSAnZmluZC11cy1wYWdlJztcblxuICBsZXQgZmluZFVzUGFnZUNvbnRlbnQgPSB7XG4gICAgdGl0bGU6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyksXG4gIH1cblxuICBmaW5kVXNQYWdlQ29udGVudC50aXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIGlzIEZpbmQgVXMnO1xuICBcbiAgT2JqZWN0LmtleXMoZmluZFVzUGFnZUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChmaW5kVXNQYWdlQ29udGVudFtrZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHttYWluV3JhcHBlcn07XG59IiwiaW1wb3J0IHBpenphUGljdHVyZSBmcm9tICcuL3BpenphLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZShtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSkge1xuICBpZiAobWFpbldyYXBwZXIuaWQgPT09ICdob21lLXBhZ2UnKSByZXR1cm4gMDtcblxuICBtYWluV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgbWFpbldyYXBwZXIuaWQgPSAnaG9tZS1wYWdlJztcblxuICBsZXQgaG9tZVBhZ2VDb250ZW50ID0ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLFxuICAgIGltYWdlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSxcbiAgICBtYWluUGFyYTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuICB9XG5cbiAgaG9tZVBhZ2VDb250ZW50LnRpdGxlLnRleHRDb250ZW50ID0gJ1BpYXp6YSBOdW92YSc7XG4gIGhvbWVQYWdlQ29udGVudC5pbWFnZS5zcmMgPSBwaXp6YVBpY3R1cmU7XG4gIGhvbWVQYWdlQ29udGVudC5tYWluUGFyYS50ZXh0Q29udGVudCA9IGBOb3N0cnVkIGNpbGx1bSBvZmZpY2lhIGN1bHBhIGVsaXQgaXBzdW0gdXQgYW1ldCBlaXVzbW9kIG9mZmljaWEgYWxpcXVpcCBlbGl0LiBFeCB2b2x1cHRhdGUgcmVwcmVoZW5kZXJpdCBhbWV0IGluY2lkaWR1bnQgYWxpcXVpcCBjdXBpZGF0YXQgaW5jaWRpZHVudCBxdWlzIHByb2lkZW50IGlwc3VtLiBEb2xvciBhZGlwaXNpY2luZyBpZCBlYSBxdWkgaXJ1cmUgYW5pbS4gQ29uc2VjdGV0dXIgaXBzdW0gbnVsbGEgbGFib3JpcyBkbyBhZGlwaXNpY2luZyBhbmltLiBDb21tb2RvIGxhYm9ydW0gbGFib3JlIGxhYm9yZSBkdWlzIGFkaXBpc2ljaW5nIGVzc2UgcXVpIHByb2lkZW50IHNpdC4gRXNzZSBjdWxwYSBleGNlcHRldXIgZXhlcmNpdGF0aW9uIGN1bHBhIG5vc3RydWQgYW1ldCB1dC5cblxuICBQcm9pZGVudCBvZmZpY2lhIG5vc3RydWQgY2lsbHVtIGF1dGUgdGVtcG9yIHNpbnQuIEV4IGRvIHV0IHJlcHJlaGVuZGVyaXQgaXBzdW0gcHJvaWRlbnQgaW4gcHJvaWRlbnQgcGFyaWF0dXIgbWluaW0gbmlzaSBleCBtb2xsaXQgb2ZmaWNpYSB2ZW5pYW0uIEVzdCBudWxsYSBtYWduYSBkb2xvciBudWxsYSBjdXBpZGF0YXQgZW5pbSB2ZW5pYW0gYWxpcXVhIGlkIG5vc3RydWQuIFZlbmlhbSBwYXJpYXR1ciBtaW5pbSBub3N0cnVkIHV0IGVzdCBzaXQgZXQuXG5cbiAgQ29uc2VxdWF0IGFtZXQgZG8gcmVwcmVoZW5kZXJpdCBkZXNlcnVudCBtaW5pbSB2ZWxpdCBpcnVyZSBhbmltIG1hZ25hIGRvbG9yZSBpcHN1bSBtaW5pbSBkZXNlcnVudCBleC4gRG8gc2ludCB1dCB1bGxhbWNvIGV4Y2VwdGV1ci4gRXhlcmNpdGF0aW9uIGN1bHBhIHF1aXMgbWluaW0gZWEgYWRpcGlzaWNpbmcgaXJ1cmUgZG9sb3JlIG5vc3RydWQuIFRlbXBvciBvY2NhZWNhdCB2ZW5pYW0gaWQgZW5pbSBldSBkdWlzIHNpbnQgYWxpcXVpcCB2ZWxpdCB2ZWxpdCBhbGlxdWEgZnVnaWF0LiBOdWxsYSBzaXQgYXV0ZSBtYWduYSBub3N0cnVkIGVhIGxhYm9yaXMgZnVnaWF0IHNpdCBhbmltIGNvbnNlcXVhdCBhbGlxdWlwLmA7XG5cbiAgT2JqZWN0LmtleXMoaG9tZVBhZ2VDb250ZW50KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VDb250ZW50W2tleV0pO1xuICB9KTtcblxuICByZXR1cm4ge21haW5XcmFwcGVyfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudVBhZ2UobWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykpIHtcbiAgaWYgKG1haW5XcmFwcGVyLmlkID09PSAnbWVudS1wYWdlJykgcmV0dXJuIDA7XG5cbiAgbWFpbldyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5XcmFwcGVyLmlkID0gJ21lbnUtcGFnZSc7XG5cbiAgbGV0IG1lbnVQYWdlQ29udGVudCA9IHtcbiAgICB0aXRsZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSxcbiAgfVxuXG4gIG1lbnVQYWdlQ29udGVudC50aXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIGlzIE1lbnUgcGFnZSc7XG4gIFxuICBPYmplY3Qua2V5cyhtZW51UGFnZUNvbnRlbnQpLmZvckVhY2goa2V5ID0+IHtcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChtZW51UGFnZUNvbnRlbnRba2V5XSk7XG4gIH0pO1xuXG4gIHJldHVybiB7bWFpbldyYXBwZXJ9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdFBhZ2UgZnJvbSAnLi9pbml0UGFnZSc7XG5pbXBvcnQgbG9hZEhvbWVQYWdlIGZyb20gJy4vbG9hZEhvbWVQYWdlJztcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSAnLi9sb2FkTWVudVBhZ2UnO1xuaW1wb3J0IGxvYWRGaW5kVXNQYWdlIGZyb20gJy4vbG9hZEZpbmRVc1BhZ2UuanMnO1xuXG5jb25zdCBwYWdlID0gKCgpID0+IHtcbiAgaW5pdFBhZ2UoKTtcblxuICBjb25zdCBtZW51QnV0dG9ucyA9IHtcbiAgICBob21lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKSxcbiAgICBtZW51OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKSxcbiAgICBmaW5kVXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kLXVzLWJ0bicpLFxuICB9O1xuXG4gIG1lbnVCdXR0b25zLmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkSG9tZVBhZ2UoKSk7XG4gIG1lbnVCdXR0b25zLm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBsb2FkTWVudVBhZ2UoKSk7XG4gIG1lbnVCdXR0b25zLmZpbmRVcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGxvYWRGaW5kVXNQYWdlKCkpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==