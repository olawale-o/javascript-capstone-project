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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 10px;\\n}\\n\\nbody {\\n  font-size: 62.5%;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  object-fit: cover;\\n}\\n\\ni {\\n  cursor: pointer;\\n}\\n\\n.btn {\\n  outline: none;\\n  border: none;\\n  display: block;\\n  padding: 1rem 2rem;\\n  cursor: pointer;\\n  color: #fff;\\n  font-size: 2rem;\\n}\\n\\n.btn:hover {\\n  font-weight: 400;\\n}\\n\\n.btn-comment {\\n  width: 100%;\\n  margin-bottom: 2.5rem;\\n  background: #c10623;\\n}\\n\\n.btn-reserve {\\n  width: 100%;\\n  background: #13df75;\\n}\\n\\n.btn-submit {\\n  background: #0256aa;\\n}\\n\\n.root {\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\nmain {\\n  position: relative;\\n}\\n\\n.header {\\n  margin-bottom: 3rem;\\n}\\n\\n.nav {\\n  width: 90%;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 2rem;\\n}\\n\\n.nav-list {\\n  display: flex;\\n  width: 60%;\\n  justify-content: space-between;\\n  margin-left: auto;\\n}\\n\\n.nav-link {\\n  font-size: 1.5rem;\\n}\\n\\n.main-content {\\n  margin-bottom: 3rem;\\n  border-bottom: 2px solid #000;\\n}\\n\\n.meals-container {\\n  width: 90%;\\n  margin: 0 auto 4rem;\\n  padding: 2rem;\\n}\\n\\n.meal-list {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap: 2rem;\\n}\\n\\n.meal-img {\\n  margin-bottom: 1rem;\\n}\\n\\n.meal-name-likes {\\n  font-size: 2rem;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  margin-bottom: 1rem;\\n}\\n\\n.footer p {\\n  padding-left: 3rem;\\n  padding-bottom: 3rem;\\n  font-size: 2.5rem;\\n}\\n\\nmain.open-modal .root {\\n  filter: blur(4px);\\n  overflow: hidden;\\n}\\n\\n.modal-overlay {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  padding: 50px;\\n  box-sizing: border-box;\\n  margin: 0;\\n  overflow: auto;\\n  display: none;\\n  visibility: hidden;\\n}\\n\\n.modal {\\n  margin: 0;\\n  height: auto;\\n  padding: 20px;\\n  width: 100%;\\n}\\n\\n.modal-content {\\n  width: 50%;\\n  margin: 0 auto;\\n  padding: 5rem;\\n  background: #fff;\\n}\\n\\nmain.open-modal .modal-overlay {\\n  display: block;\\n  visibility: visible;\\n}\\n\\n.modal-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  position: relative;\\n  margin-bottom: 1rem;\\n}\\n\\n.modal-img {\\n  width: 90%;\\n  height: 200px;\\n}\\n\\n.close-icon {\\n  font-size: 5rem;\\n  align-self: flex-start;\\n}\\n\\n.brief-details {\\n  margin-bottom: 2.5rem;\\n}\\n\\n.brief-details h3 {\\n  font-size: 3rem;\\n  text-align: center;\\n}\\n\\n.list-details {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n}\\n\\n.tag {\\n  font-size: 1.5rem;\\n}\\n\\n.comments h4 {\\n  text-align: center;\\n  font-size: 2.5rem;\\n  margin-bottom: 1.5rem;\\n}\\n\\n.comment-list {\\n  width: 70%;\\n  margin: 0 auto;\\n  text-align: left;\\n}\\n\\n.comment {\\n  font-size: 1.5rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.comment-form h6 {\\n  text-align: center;\\n  font-size: 2rem;\\n  margin-bottom: 2rem;\\n}\\n\\n.comment-form form {\\n  margin: 0 auto;\\n}\\n\\n.field {\\n  margin-bottom: 1rem;\\n}\\n\\n.input,\\n.textarea {\\n  outline: none;\\n  border: 1px solid #000;\\n  padding: 1rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-starter/./src/stylesheets/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-starter/./src/stylesheets/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d243edf052a9de2a6d2.png\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/logo.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/style.css */ \"./src/stylesheets/style.css\");\n/* harmony import */ var _js_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modal.js */ \"./src/js/modal.js\");\n/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/utils.js */ \"./src/js/utils.js\");\n/* harmony import */ var _js_storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/storage.js */ \"./src/js/storage.js\");\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', async () => {\n  const root = document.querySelector('#root');\n  const { meals } = await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.fectchMeals)();\n  const sixMeals = meals.slice(0, 6);\n  root.innerHTML = (0,_js_dom_js__WEBPACK_IMPORTED_MODULE_1__.baseView)(sixMeals.length);\n  const modal = document.querySelector('#modal-overlay');\n  const mealList = document.querySelector('#meal-list');\n\n  let appId = '';\n  let mealLikes = [];\n  if (!(0,_js_storage_js__WEBPACK_IMPORTED_MODULE_4__.getStorage)()) {\n    appId = await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.createApp)();\n    (0,_js_storage_js__WEBPACK_IMPORTED_MODULE_4__.setStorage)(appId);\n  } else {\n    appId = (0,_js_storage_js__WEBPACK_IMPORTED_MODULE_4__.getStorage)();\n    mealLikes = await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.fetchMealLikes)(appId);\n  }\n\n  const handleLike = async (id) => {\n    await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.likeMeal)(id, appId);\n    const results = await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.fetchMealLikes)(appId);\n    const { likes } = results.find((meal) => id === meal.item_id);\n    return likes;\n  };\n\n  const createMealElement = ({ idMeal, strMeal, strMealThumb }) => {\n    const li = document.createElement('li');\n    li.setAttribute('class', 'meal-item');\n    li.setAttribute('id', `meal-item-${idMeal}`);\n    const div = document.createElement('div');\n    div.setAttribute('class', 'meal-item__container');\n    const imgDiv = document.createElement('div');\n    imgDiv.setAttribute('class', 'meal-img');\n    const img = document.createElement('img');\n    img.setAttribute('src', strMealThumb);\n    img.setAttribute('alt', 'alt');\n    const nameLikeDiv = document.createElement('div');\n    nameLikeDiv.setAttribute('class', 'meal-name-likes');\n    const spanName = document.createElement('span');\n    spanName.setAttribute('class', 'meal-name');\n    spanName.textContent = strMeal;\n    const likeDiv = document.createElement('div');\n    likeDiv.setAttribute('class', 'likes');\n    const likeSpan = document.createElement('span');\n    likeSpan.setAttribute('class', 'meal-likes');\n    likeSpan.setAttribute('id', `like-${idMeal}`);\n    likeSpan.textContent = '0';\n    const heartIcon = document.createElement('i');\n    heartIcon.setAttribute('class', 'bx bx-heart');\n    heartIcon.addEventListener('click', async () => {\n      const currentMealLikes = await handleLike(idMeal);\n      likeSpan.textContent = currentMealLikes;\n    });\n\n    likeDiv.append(likeSpan, heartIcon);\n    const commentBtn = document.createElement('button');\n    commentBtn.setAttribute('class', 'btn btn-comment');\n    commentBtn.textContent = 'Comment';\n    const reservationBtn = document.createElement('button');\n    reservationBtn.setAttribute('class', 'btn btn-reserve');\n    reservationBtn.textContent = 'Reservations';\n\n    commentBtn.addEventListener('click', async () => {\n      const { meals } = await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.fetchSingleMeal)(idMeal);\n      const comments = await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.fetchMealSingleComment)(appId, idMeal);\n      (0,_js_dom_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();\n      modal.appendChild(\n        (0,_js_modal_js__WEBPACK_IMPORTED_MODULE_2__.createCommentModal)({\n          meals,\n          appId,\n          toggle: _js_dom_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal,\n          comments,\n        }),\n      );\n    });\n    reservationBtn.addEventListener('click', async () => {\n      const { meals } = await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.fetchSingleMeal)(idMeal);\n      const reservations = await (0,_js_utils_js__WEBPACK_IMPORTED_MODULE_3__.fetchMealSingleReservation)(appId, idMeal);\n      (0,_js_dom_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal)();\n      modal.appendChild(\n        (0,_js_modal_js__WEBPACK_IMPORTED_MODULE_2__.createReservationModal)({\n          meals,\n          appId,\n          toggle: _js_dom_js__WEBPACK_IMPORTED_MODULE_1__.toggleModal,\n          reservations,\n        }),\n      );\n    });\n\n    imgDiv.appendChild(img);\n    nameLikeDiv.append(spanName, likeDiv);\n    div.append(imgDiv, nameLikeDiv, commentBtn, reservationBtn);\n    li.append(div);\n    return li;\n  };\n\n  sixMeals.forEach((meal) => {\n    mealList.appendChild(createMealElement(meal));\n  });\n\n  mealLikes.forEach((mealLike) => {\n    const selectedMeal = document.querySelector(`#meal-item-${mealLike.item_id}`);\n    const likeSpan = selectedMeal.querySelector(`#like-${mealLike.item_id}`);\n    likeSpan.textContent = mealLike.likes;\n  });\n});\n\n\n//# sourceURL=webpack://webpack-starter/./src/index.js?");

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"post\": () => (/* binding */ post),\n/* harmony export */   \"get\": () => (/* binding */ get)\n/* harmony export */ });\nconst post = async (URI, data = {}) => {\n  const response = await fetch(URI, {\n    mode: 'cors',\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-type': 'application/json; Charset=UTF-8',\n    },\n  });\n  return response;\n};\n\nconst get = async (URI) => {\n  const response = await fetch(URI);\n  return response;\n};\n\n//# sourceURL=webpack://webpack-starter/./src/js/api.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleModal\": () => (/* binding */ toggleModal),\n/* harmony export */   \"baseView\": () => (/* binding */ baseView)\n/* harmony export */ });\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.png */ \"./src/assets/logo.png\");\n\n\nconst modal = document.querySelector('#modal-overlay');\nconst body = document.querySelector('body');\nconst main = document.querySelector('main');\n\nconst toggleModal = async () => {\n  if (body.style.overflow === '') {\n    body.style.overflow = 'hidden';\n  } else {\n    body.style.overflow = '';\n    modal.innerHTML = '';\n  }\n  main.classList.toggle('open-modal');\n};\n\nconst baseView = (totalItems) => `<header class=\"header\">\n  <div class=\"container\">\n    <nav class=\"nav\">\n      <div class=\"logo\">\n        <img src=\"${_assets_logo_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"logo\" />\n      </div>\n      <ul class=\"nav-list\">\n        <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\">Meal (${totalItems})<span></span></a>\n        </li>\n        <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\">Categories</a>\n        </li>\n        <li class=\"nav-item\">\n            <a href=\"#\" class=\"nav-link\">Areas</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n<div class=\"main-content\">\n  <div class=\"container\">\n      <div class=\"meals-container\">\n          <ul class=\"meal-list\" id=\"meal-list\"></ul>\n      </div>\n  </div>\n</div>\n<div class=\"footer\">\n    <p>Created by Microverse under CC License</p>\n</div>\n`;\n\n//# sourceURL=webpack://webpack-starter/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/dom.utils.js":
/*!*****************************!*\
  !*** ./src/js/dom.utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"createComment\": () => (/* binding */ createComment),\n/* harmony export */   \"createReservation\": () => (/* binding */ createReservation)\n/* harmony export */ });\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./src/js/helper.js\");\n\n\nconst createElement = (ele, attributes = {}) => {\n  const element = document.createElement(ele);\n  Object.keys(attributes).forEach((key) => {\n    element.setAttribute(key, attributes[key]);\n  });\n\n  return element;\n};\n\nconst createComment = (comment) => {\n  const li = createElement('li', { class: 'comment' });\n  li.innerHTML = `<span>${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.parseDate)(comment.creation_date)}\n  ${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.capitalizeStr)(comment.username)}:</span> <span>${comment.comment}</span>`;\n  return li;\n};\n\nconst createReservation = (reservation) => {\n  const li = createElement('li', { class: 'comment' });\n  li.innerHTML = `<span>${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.parseDate)(reservation.date_start)} -\n  ${(0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.parseDate)(reservation.date_end)}  by  </span> <span>${reservation.username}</span>`;\n  return li;\n};\n\n\n//# sourceURL=webpack://webpack-starter/./src/js/dom.utils.js?");

/***/ }),

/***/ "./src/js/helper.js":
/*!**************************!*\
  !*** ./src/js/helper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseDate\": () => (/* binding */ parseDate),\n/* harmony export */   \"capitalizeStr\": () => (/* binding */ capitalizeStr)\n/* harmony export */ });\nconst parseDate = (date) => {\n  const formatDate = date.split('-');\n  return `${formatDate[2]}/${formatDate[1]}/${formatDate[0]}`;\n};\n\nconst capitalizeStr = (text) => {\n  const newText = text[0].toUpperCase() + text.substring(1);\n  return newText;\n};\n\n\n//# sourceURL=webpack://webpack-starter/./src/js/helper.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCommentModal\": () => (/* binding */ createCommentModal),\n/* harmony export */   \"createReservationModal\": () => (/* binding */ createReservationModal)\n/* harmony export */ });\n/* harmony import */ var _dom_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.utils.js */ \"./src/js/dom.utils.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./src/js/helper.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/js/utils.js\");\n\n\n\n\nconst baseModal = (args) => {\n  const {\n    meals, toggle, content, formContent,\n  } = args;\n  const {\n    strMeal, strMealThumb, strCategory, strArea,\n  } = meals[0];\n  const modal = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'modal' });\n  const modalContent = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'modal-content' });\n  const modalHeader = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'modal-header' });\n  const img = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', { class: 'modal-img', src: strMealThumb, alt: strMealThumb });\n  const closeIcon = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('i', { class: 'bx bx-x close-icon', id: 'closeModal' });\n  closeIcon.addEventListener('click', () => {\n    toggle();\n  });\n  modalHeader.append(img, closeIcon);\n\n  const modalBody = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'modal-body' });\n  const briefDetails = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'brief-details' });\n  const h3 = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');\n  h3.textContent = strMeal;\n  const listDetails = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', { class: 'list-details' });\n  const mealCategory = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', { class: 'tag' });\n  mealCategory.textContent = `Category: ${strCategory}`;\n\n  const mealArea = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', { class: 'tag' });\n  mealArea.textContent = `Area: ${strArea}`;\n  listDetails.append(mealCategory, mealArea);\n  briefDetails.append(h3, listDetails);\n\n  modalBody.append(briefDetails, content);\n  modalContent.append(modalHeader, modalBody, formContent);\n  modal.append(modalContent);\n\n  return modal;\n};\n\nconst createCommentModal = (args) => {\n  const {\n    meals, toggle, comments, appId,\n  } = args;\n  const { idMeal } = meals[0];\n  const content = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'comments' });\n  const h4 = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h4');\n  const counter = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', { class: 'counter' });\n  h4.innerHTML = 'Comments ';\n  counter.textContent = ` (${comments.length || 0})`;\n  h4.appendChild(counter);\n  const commentList = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', { class: 'comments-list' });\n  if (comments.length > 0) {\n    comments.forEach((comment) => {\n      commentList.append((0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(comment));\n    });\n  }\n\n  const formContent = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'comment-form' });\n\n  const h6 = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h6');\n  h6.textContent = 'Add comment';\n\n  const form = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form');\n  const nameField = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'field' });\n  const nameInput = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {\n    class: 'input', type: 'text', id: 'name', name: 'name', placeholder: 'Your name', required: 'required',\n  });\n  nameField.append(nameInput);\n\n  const messageField = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'field' });\n  const messageArea = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('textarea', {\n    class: 'textarea', cols: 30, rows: 10, id: 'message', name: 'message', placeholder: 'Your insights', required: 'required',\n  });\n  messageField.appendChild(messageArea);\n\n  const submitField = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'field' });\n  const submitBtn = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', { class: 'btn btn-submit' });\n  submitBtn.textContent = 'Submit';\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const data = {\n      item_id: idMeal,\n      username: nameInput.value.trim(),\n      comment: messageArea.value.trim(),\n    };\n    await (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.postMealComment)(appId, data);\n    const comments = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.fetchMealSingleComment)(appId, idMeal);\n    counter.textContent = ` (${comments.length})`;\n    h4.appendChild(counter);\n    const lastComment = comments.pop();\n    const li = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', { class: 'comment' });\n    li.innerHTML = `<span>${(0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.parseDate)(lastComment.creation_date)} \n    ${(0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.capitalizeStr)(lastComment.username)}:</span> <span>${lastComment.comment}</span>`;\n    commentList.appendChild(li);\n\n    nameInput.value = '';\n    messageArea.value = '';\n  });\n\n  content.append(h4, commentList);\n  submitField.append(submitBtn);\n\n  form.append(nameField, messageField, submitField);\n  formContent.append(h6, form);\n\n  return baseModal({\n    meals,\n    toggle,\n    content,\n    formContent,\n  });\n};\n\nconst createReservationModal = (args) => {\n  const {\n    meals, toggle, reservations, appId,\n  } = args;\n  const { idMeal } = meals[0];\n  const content = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'comments' });\n  const h4 = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h4');\n  const counter = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', { class: 'counter' });\n  h4.innerHTML = 'Reservations ';\n  counter.textContent = ` (${reservations.length || 0})`;\n  h4.appendChild(counter);\n  const commentList = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', { class: 'comments-list' });\n  if (reservations.length > 0) {\n    reservations.forEach((reservation) => {\n      commentList.append((0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createReservation)(reservation));\n    });\n  }\n\n  const formContent = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'comment-form' });\n\n  const h6 = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('h6');\n  h6.textContent = 'Add a reservation';\n\n  const form = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('form');\n  const nameField = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'field' });\n  const nameInput = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {\n    class: 'input', type: 'text', id: 'name', name: 'name', placeholder: 'Your name', required: 'required',\n  });\n  nameField.append(nameInput);\n\n  const startDateField = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'field' });\n  const startDateInput = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {\n    class: 'input', type: 'text', id: 'start-date', name: 'start-date', placeholder: 'Start date', required: 'required',\n  });\n  startDateField.append(startDateInput);\n\n  const endDateField = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'field' });\n  const endDateInput = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {\n    class: 'input', type: 'text', id: 'end-date', name: 'end-date', placeholder: 'End date', required: 'required',\n  });\n  endDateField.append(endDateInput);\n\n  const submitField = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', { class: 'field' });\n  const submitBtn = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', { class: 'btn btn-submit' });\n  submitBtn.textContent = 'Submit';\n  form.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const data = {\n      item_id: idMeal,\n      username: nameInput.value.trim(),\n      date_start: startDateInput.value.trim(),\n      date_end: endDateInput.value.trim(),\n    };\n    await (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.postMealReservation)(appId, data);\n    const reservations = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.fetchMealSingleReservation)(appId, idMeal);\n    counter.textContent = ` (${reservations.length})`;\n    h4.appendChild(counter);\n    const lastReservation = reservations.pop();\n    const li = (0,_dom_utils_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', { class: 'comment' });\n    li.innerHTML = `<span>${(0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.parseDate)(lastReservation.date_start)} -\n    ${(0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.parseDate)(lastReservation.date_end)}  by  </span> <span>${lastReservation.username}</span>`;\n    commentList.appendChild(li);\n\n    nameInput.value = '';\n    startDateInput.value = '';\n    endDateInput.value = '';\n  });\n\n  content.append(h4, commentList);\n  submitField.append(submitBtn);\n\n  form.append(nameField, startDateField, endDateField, submitField);\n  formContent.append(h6, form);\n\n  return baseModal({\n    meals,\n    toggle,\n    content,\n    formContent,\n  });\n};\n\n\n//# sourceURL=webpack://webpack-starter/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage),\n/* harmony export */   \"setStorage\": () => (/* binding */ setStorage)\n/* harmony export */ });\nconst APP_KEY = 'INVOLVEMENT_API';\n\nconst getStorage = (key = APP_KEY) => localStorage.getItem(key);\nconst setStorage = (data, key = APP_KEY) => localStorage.setItem(key, data);\n\n//# sourceURL=webpack://webpack-starter/./src/js/storage.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fectchMeals\": () => (/* binding */ fectchMeals),\n/* harmony export */   \"fetchSingleMeal\": () => (/* binding */ fetchSingleMeal),\n/* harmony export */   \"createApp\": () => (/* binding */ createApp),\n/* harmony export */   \"fetchMealLikes\": () => (/* binding */ fetchMealLikes),\n/* harmony export */   \"fetchMealSingleComment\": () => (/* binding */ fetchMealSingleComment),\n/* harmony export */   \"likeMeal\": () => (/* binding */ likeMeal),\n/* harmony export */   \"postMealComment\": () => (/* binding */ postMealComment),\n/* harmony export */   \"fetchMealSingleReservation\": () => (/* binding */ fetchMealSingleReservation),\n/* harmony export */   \"postMealReservation\": () => (/* binding */ postMealReservation)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n\n\nconst BASE_URI = 'https://www.themealdb.com/api/json/v1/1/';\nconst INVOLVEMENT_URI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';\n\nconst fectchMeals = async () => {\n  const END_POINT = 'search.php';\n  const PARAMS = '?f=p';\n  const URI = `${BASE_URI}${END_POINT}${PARAMS}`;\n  const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)(URI);\n  return response.json();\n};\n\nconst fetchSingleMeal = async (id) => {\n  const END_POINT = 'lookup.php?i=';\n  const PARAMS = id;\n  const URI = `${BASE_URI}${END_POINT}${PARAMS}`;\n  const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)(URI);\n  return response.json();\n};\n\nconst createApp = async () => {\n  const END_POINT = 'apps/';\n  const URI = `${INVOLVEMENT_URI}${END_POINT}`;\n  const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.post)(URI);\n  return response.text();\n};\n\nconst fetchMealLikes = async (appId) => {\n  const END_POINT = `apps/${appId}/likes`;\n  const URI = `${INVOLVEMENT_URI}${END_POINT}`;\n  const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)(URI);\n  return response.json();\n};\n\nconst fetchMealSingleComment = async (appId, id) => {\n  const END_POINT = `apps/${appId}/comments?item_id=${id}`;\n  const URI = `${INVOLVEMENT_URI}${END_POINT}`;\n  const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)(URI);\n  return response.json();\n};\n\nconst likeMeal = async (id, appId) => {\n  const END_POINT = `apps/${appId}/likes/`;\n  const URI = `${INVOLVEMENT_URI}${END_POINT}`;\n  await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.post)(URI, { item_id: id });\n};\n\nconst postMealComment = async (appId, data) => {\n  const END_POINT = `apps/${appId}/comments/`;\n  const URI = `${INVOLVEMENT_URI}${END_POINT}`;\n  await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.post)(URI, data);\n};\n\nconst fetchMealSingleReservation = async (appId, id) => {\n  const END_POINT = `apps/${appId}/reservations?item_id=${id}`;\n  const URI = `${INVOLVEMENT_URI}${END_POINT}`;\n  const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.get)(URI);\n  return response.json();\n};\n\nconst postMealReservation = async (appId, data) => {\n  const END_POINT = `apps/${appId}/reservations/`;\n  const URI = `${INVOLVEMENT_URI}${END_POINT}`;\n  await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.post)(URI, data);\n};\n\n//# sourceURL=webpack://webpack-starter/./src/js/utils.js?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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