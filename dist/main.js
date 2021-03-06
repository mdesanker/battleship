/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* style.css */\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\nhtml {\\n  font-family: \\\"Roboto Mono\\\", sans-serif;\\n  font-size: 18px;\\n  background-color: lightgray;\\n}\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n}\\nheader {\\n  font-size: 2rem;\\n  text-align: center;\\n  margin: 40px auto 60px;\\n}\\nmain {\\n  display: flex;\\n  min-height: 700px;\\n  width: 100%;\\n  max-width: 1000px;\\n}\\n/* TItle Page CSS */\\n.title-page {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 500;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n\\n  color: white;\\n  background-color: rgb(52, 52, 52);\\n}\\n.title-h1 {\\n  font-size: 4rem;\\n  letter-spacing: 0.2rem;\\n  margin: 3rem;\\n}\\n.name-field {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-size: 1.5rem;\\n  gap: 20px;\\n}\\n.name-field input[type=\\\"text\\\"] {\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n  padding: 0.5rem;\\n  text-align: center;\\n}\\n.name-field input[type=\\\"text\\\"]:focus {\\n  outline: none;\\n}\\n.start-game {\\n  margin: 30px;\\n}\\n/* Game Over Modal CSS */\\n.ship-placer,\\n.game-over {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n.modal-container {\\n  position: relative;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 2rem;\\n  background-color: white;\\n  padding: 30px 20px;\\n  max-width: 30rem;\\n\\n  z-index: 100;\\n}\\n.btn {\\n  font-size: 1rem;\\n  text-transform: uppercase;\\n  padding: 10px 20px;\\n}\\n.ship-overlay,\\n.end-overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  backdrop-filter: blur(4px);\\n  z-index: 10;\\n}\\n/* Ship Placing Modal CSS */\\n.direction-header {\\n  font-size: 1.5rem;\\n  margin-bottom: 20px;\\n}\\n.ship-container {\\n  position: relative;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n\\n  padding: 50px;\\n  max-width: 80%;\\n  background-color: white;\\n  z-index: 100;\\n}\\n.placement-container {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n.direction-container {\\n  font-size: 1.3rem;\\n  padding: 20px 0;\\n}\\n.direction-container input[type=\\\"checkbox\\\"] {\\n  transform: scale(2);\\n  border-radius: 0;\\n}\\n.placement-btns {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-evenly;\\n  padding-top: 40px;\\n}\\n/* Gameboards CSS */\\n.player-container,\\n.comp-container {\\n  height: 100%;\\n  width: 100%;\\n  flex-grow: 1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.player-board,\\n.computer-board {\\n  width: 400px;\\n  height: 400px;\\n  background-color: gray;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.row {\\n  display: flex;\\n}\\n.col {\\n  border: 1px solid black;\\n  background-color: white;\\n  height: 40px;\\n  width: 40px;\\n}\\nfooter {\\n  position: relative;\\n  bottom: 0;\\n  padding: 10px;\\n}\\n/* Visibility */\\n.hide {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/display/ui.js":
/*!***************************!*\
  !*** ./src/display/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPlayerShips\": () => (/* binding */ displayPlayerShips),\n/* harmony export */   \"displayCompShips\": () => (/* binding */ displayCompShips),\n/* harmony export */   \"updatePlayerBoard\": () => (/* binding */ updatePlayerBoard),\n/* harmony export */   \"updateComputerBoard\": () => (/* binding */ updateComputerBoard)\n/* harmony export */ });\n\n\n// Elements\nconst playerBoardDisplay = document.querySelector(\".player-board\");\nconst compBoardDisplay = document.querySelector(\".comp-board\");\nconst placementBoardDisplay = document.querySelector(\".placement-board\");\n\n// Functions\nconst displayPlayerShips = (player) => {\n  player.getShips().forEach((ship) => {\n    ship.getPosition().forEach((coord) => {\n      const playerBoard = playerBoardDisplay.querySelector(\n        `div[data-row=\"${coord[1]}\"][data-col=\"${coord[0]}\"]`\n      );\n      const placementBoard = placementBoardDisplay.querySelector(\n        `div[data-row=\"${coord[1]}\"][data-col=\"${coord[0]}\"]`\n      );\n      playerBoard.style.backgroundColor = \"gray\";\n      placementBoard.style.backgroundColor = \"gray\";\n    });\n  });\n};\n\nconst displayCompShips = (computer) => {\n  computer.getShips().forEach((ship) => {\n    ship.getPosition().forEach((coord) => {\n      const grid = compBoardDisplay.querySelector(\n        `div[data-row=\"${coord[1]}\"][data-col=\"${coord[0]}\"]`\n      );\n      // Make comp ships visible for development\n      // grid.style.backgroundColor = \"lightblue\";\n    });\n  });\n};\n\nconst updatePlayerBoard = (board) => {\n  const hitCoords = board.getHits();\n  const missCoords = board.getMisses();\n\n  hitCoords.forEach((coord) => {\n    const grid = playerBoardDisplay.querySelector(\n      `div[data-row=\"${coord[1]}\"][data-col=\"${coord[0]}\"]`\n    );\n    grid.style.backgroundColor = \"crimson\";\n  });\n\n  missCoords.forEach((coord) => {\n    const grid = playerBoardDisplay.querySelector(\n      `div[data-row=\"${coord[1]}\"][data-col=\"${coord[0]}\"]`\n    );\n    grid.style.backgroundColor = \"darkturquoise\";\n  });\n};\n\nconst updateComputerBoard = (board) => {\n  const hitCoords = board.getHits();\n  const missCoords = board.getMisses();\n\n  hitCoords.forEach((coord) => {\n    const grid = compBoardDisplay.querySelector(\n      `div[data-row=\"${coord[1]}\"][data-col=\"${coord[0]}\"]`\n    );\n    grid.style.backgroundColor = \"crimson\";\n  });\n\n  missCoords.forEach((coord) => {\n    const grid = compBoardDisplay.querySelector(\n      `div[data-row=\"${coord[1]}\"][data-col=\"${coord[0]}\"]`\n    );\n    grid.style.backgroundColor = \"darkturquoise\";\n  });\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/display/ui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.js\");\n/* harmony import */ var _display_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display/ui */ \"./src/display/ui.js\");\n\n\n\n\n\n\n\nconst DisplayController = (() => {\n  // Title Page\n  // Elements\n  const titlePage = document.querySelector(\".title-page\");\n  const nameInput = document.querySelector(\"#name\");\n  const startBtn = document.querySelector(\".start-game\");\n\n  startBtn.addEventListener(\"click\", () => {\n    if (!nameInput.value) return;\n    // player.setName(nameInput.value);\n    titlePage.classList.add(\"hide\");\n  });\n\n  // Create player objects\n  const player = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__.Player)(\"Player 1\");\n  const computer = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__.Player)(\"Computer\");\n\n  // Create board objects\n  const playerBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\n  const computerBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();\n\n  // Place ships randomly on both boards\n  computerBoard.placeShipsRandom(computer.getShips());\n\n  // Place player ships manually\n  // Elements\n  const placementModal = document.querySelector(\".ship-placer\");\n  const placementBoard = document.querySelector(\".placement-board\");\n  const shipDetails = document.querySelector(\".ship-details\");\n  const dirToggle = document.querySelector(\"#direction\");\n  const randomBtn = document.querySelector(\".random\");\n  const finishBtn = document.querySelector(\".finished\");\n\n  // Functions\n  const togglePlacementModal = () => {\n    placementModal.classList.toggle(\"hide\");\n  };\n\n  // Ship placement counter\n  let i = 0;\n  shipDetails.textContent = `Click to place ${player\n    .getShips()\n    [i].getName()} [${player.getShips()[i].getLength()}]`;\n\n  // Event Listeners\n  finishBtn.addEventListener(\"click\", () => {\n    if (playerBoard.shipsOnBoard() === 5) {\n      togglePlacementModal();\n      i = 0;\n      shipDetails.textContent = `Click to place ${player\n        .getShips()\n        [i].getName()} [${player.getShips()[i].getLength()}]`;\n    }\n  });\n\n  randomBtn.addEventListener(\"click\", () => {\n    // Clear current ships\n    player.resetShips();\n    playerBoard.resetPlayerBoard();\n    (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.displayPlayerShips)(player);\n    i = 0;\n    shipDetails.textContent = `Click to place ${player\n      .getShips()\n      [i].getName()} [${player.getShips()[i].getLength()}]`;\n\n    // Place player ships randomly\n    playerBoard.placeShipsRandom(player.getShips());\n    (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.displayPlayerShips)(player);\n    shipDetails.textContent = \"Ships placed randomly\";\n  });\n\n  placementBoard.addEventListener(\"click\", (e) => {\n    const clicked = [\n      Number.parseInt(e.target.dataset.col),\n      Number.parseInt(e.target.dataset.row),\n    ];\n    if (i < player.getShips().length) {\n      // Place next ship in list on player board\n      playerBoard.placeShip(\n        player.getShips()[i],\n        dirToggle.checked ? \"v\" : \"h\",\n        clicked\n      );\n      (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.displayPlayerShips)(player);\n      // Verify ship successfully placed on board\n      if (playerBoard.shipsOnBoard() === i + 1 && i < 4) {\n        i++;\n        shipDetails.textContent = `Click to place ${player\n          .getShips()\n          [i].getName()} [${player.getShips()[i].getLength()}]`;\n      } else if (i === 4) {\n        shipDetails.textContent = \"All ships placed\";\n      }\n    }\n  });\n\n  // Play the game\n  // Elements\n  const playerBoardDisplay = document.querySelector(\".player-board\");\n  const compBoardDisplay = document.querySelector(\".comp-board\");\n  const gameOverModal = document.querySelector(\".game-over\");\n  const restartBtn = document.querySelector(\".again\");\n  const winner = document.querySelector(\".winner\");\n\n  // Functions\n  const toggleGameOverModal = () => {\n    gameOverModal.classList.toggle(\"hide\");\n  };\n\n  (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.displayPlayerShips)(player);\n  (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.displayCompShips)(computer);\n\n  let gameIsOver = false;\n\n  // Add event listener to computer board\n  compBoardDisplay.addEventListener(\"click\", (e) => {\n    const attack = [\n      Number.parseInt(e.target.dataset.col),\n      Number.parseInt(e.target.dataset.row),\n    ];\n\n    if (!gameIsOver) {\n      computerBoard.receiveAttack(attack);\n      (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.updateComputerBoard)(computerBoard);\n      if (computerBoard.checkAllShipsSunk()) {\n        gameIsOver = true;\n        // Declare player winner\n        winner.textContent = `${player.getName()}`;\n        toggleGameOverModal();\n      }\n    }\n\n    if (!gameIsOver) {\n      setTimeout(function () {\n        playerBoard.computerAttack();\n        (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.updatePlayerBoard)(playerBoard);\n        if (playerBoard.checkAllShipsSunk()) {\n          // Declare computer winner\n          winner.textContent = `${computer.getName()}`;\n          toggleGameOverModal();\n        }\n      }, 500);\n    }\n  });\n\n  restartBtn.addEventListener(\"click\", () => {\n    player.resetShips();\n    computer.resetShips();\n    playerBoard.resetPlayerBoard();\n    computerBoard.resetComputerBoard();\n    computerBoard.placeShipsRandom(computer.getShips());\n    (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.displayPlayerShips)(player);\n    (0,_display_ui__WEBPACK_IMPORTED_MODULE_3__.displayCompShips)(computer);\n\n    toggleGameOverModal();\n    togglePlacementModal();\n\n    gameIsOver = false;\n  });\n})();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n\n\n// Gameboard factory\nconst Gameboard = () => {\n  let ships = [];\n  let misses = [];\n  let hits = [];\n\n  const getRandomCoord = () => {\n    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];\n  };\n\n  const getRandomDir = () => {\n    return Math.floor(Math.random() * 2) === 1 ? \"h\" : \"v\";\n  };\n\n  const placeShip = (ship, dir, coords) => {\n    // Determine coords of new ship with dir and length\n    const newShipCoords = [];\n    for (let i = 0; i < ship.getLength(); i++) {\n      newShipCoords.push(\n        dir === \"h\" ? [coords[0] + i, coords[1]] : [coords[0], coords[1] + i]\n      );\n    }\n\n    // Check for overlap with edge of board\n    for (let coord of newShipCoords) {\n      if (coord.some((el) => el < 0 || el > 9)) return;\n    }\n\n    // Check for overlap with placed ships\n    const currentCoords = JSON.stringify(\n      ships.flatMap((ship) => ship.getPosition())\n    );\n    if (\n      newShipCoords.filter((coord) =>\n        currentCoords.includes(JSON.stringify(coord))\n      ).length > 0\n    )\n      return;\n\n    // Set position of ship\n    ship.setPosition(newShipCoords);\n    ships.push(ship);\n  };\n\n  const placeShipsRandom = (shipArr) => {\n    shipArr.forEach((ship) => {\n      let shipPlaced = false;\n      while (!shipPlaced) {\n        const dir = getRandomDir();\n        const coords = getRandomCoord();\n        placeShip(ship, dir, coords);\n        if (ships.includes(ship)) {\n          /// Confirm ship placement successful\n          shipPlaced = true;\n        }\n      }\n    });\n  };\n\n  const receiveAttack = (coords) => {\n    const attacks = misses.concat(hits);\n    if (JSON.stringify(attacks).includes(JSON.stringify(coords))) return;\n    const currentCoords = JSON.stringify(\n      ships.flatMap((ship) => ship.getPosition())\n    );\n    if (currentCoords.includes(JSON.stringify(coords))) {\n      ships.forEach((ship) => {\n        const shipCoords = JSON.stringify(ship.getPosition());\n        if (shipCoords.includes(JSON.stringify(coords))) {\n          ship.hit(coords);\n          hits.push(coords);\n        }\n      });\n    } else {\n      misses.push(coords);\n    }\n  };\n\n  const computerAttack = () => {\n    let coordIsNew = false;\n    const attacks = misses.concat(hits);\n    while (!coordIsNew) {\n      const randCoord = [\n        Math.floor(Math.random() * 10),\n        Math.floor(Math.random() * 10),\n      ];\n      if (!JSON.stringify(attacks).includes(JSON.stringify(randCoord))) {\n        receiveAttack(randCoord);\n        coordIsNew = true;\n      }\n    }\n  };\n\n  const checkAllShipsSunk = () => {\n    // Check num sunken ships === num ships\n    return (\n      ships.filter((ship) => ship.isSunk() === true).length === ships.length\n    );\n  };\n\n  const getHits = () => {\n    return hits;\n  };\n\n  const getMisses = () => {\n    return misses;\n  };\n\n  const shipsOnBoard = () => {\n    return ships.length;\n  };\n\n  const resetPlayerBoard = () => {\n    // Clear player board\n    document.querySelectorAll(\".player-board .col\").forEach((el) => {\n      el.style.backgroundColor = \"white\";\n    });\n    // Clear placement board\n    document.querySelectorAll(\".placement-board .col\").forEach((el) => {\n      el.style.backgroundColor = \"white\";\n    });\n    ships = [];\n    misses = [];\n    hits = [];\n  };\n\n  const resetComputerBoard = () => {\n    document.querySelectorAll(\".comp-board .col\").forEach((el) => {\n      el.style.backgroundColor = \"white\";\n    });\n    ships = [];\n    misses = [];\n    hits = [];\n  };\n\n  return {\n    placeShip,\n    receiveAttack,\n    computerAttack,\n    checkAllShipsSunk,\n    placeShipsRandom,\n    getHits,\n    getMisses,\n    resetPlayerBoard,\n    resetComputerBoard,\n    shipsOnBoard,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\n\n\n\nconst Player = (name) => {\n  let userName = name;\n\n  const getName = () => {\n    return userName;\n  };\n\n  const setName = (newName) => {\n    userName = newName;\n  };\n\n  // Create player ships\n  const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(5, \"carrier\");\n  const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, \"battleship\");\n  const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, \"destroyer\");\n  const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, \"submarine\");\n  const patrol = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, \"patrol\");\n\n  const ships = [carrier, battleship, destroyer, submarine, patrol];\n\n  const getShips = () => {\n    return ships;\n  };\n\n  const getShip = (ship) => {\n    return ships.find((item) => item.getName() === ship);\n  };\n\n  const resetShips = () => {\n    ships.forEach((ship) => ship.reset());\n  };\n\n  return { getName, setName, getShips, getShip, resetShips };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\n\n\n// Create ship factory function\nconst Ship = (length, name) => {\n  let hits = [];\n  let position = [];\n\n  const getLength = () => length;\n  const getName = () => name;\n\n  const setPosition = (coords) => {\n    position = coords;\n  };\n\n  const getPosition = () => {\n    return position;\n  };\n\n  const hit = (pos) => {\n    hits.push(pos);\n  };\n\n  const getHits = () => {\n    return hits;\n  };\n\n  const isSunk = () => {\n    return position.length === hits.length;\n  };\n\n  const reset = () => {\n    hits = [];\n    position = [];\n  };\n\n  return {\n    getLength,\n    getName,\n    hit,\n    getHits,\n    isSunk,\n    setPosition,\n    getPosition,\n    reset,\n  };\n};\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;