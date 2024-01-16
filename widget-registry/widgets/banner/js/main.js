/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apps/banner/BannerCards.widget.js":
/*!***********************************************!*\
  !*** ./src/apps/banner/BannerCards.widget.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

module.exports = {
  entry: './src/apps/banner/index.tsx',
  shortcode: 'banner',
  title: 'Banner Cards',
  status: 'stable',
  description: 'Incredible banner trading cards',
  preview: {
    url: `${"/samples"}/iframe.html?id=widgets-banner-cards-components&viewMode=story`
  },
  useExternalPeerDependencies: ['react', 'react-dom', 'react-intl'],
  additionalCustomProperties: {
    availableTranslations: ['ar', 'de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'pt', 'ru', 'tr', 'zh']
  }
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/apps/banner/components/BannerCards.tsx":
/*!****************************************************!*\
  !*** ./src/apps/banner/components/BannerCards.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/273481/Desktop/project/chakara/src/apps/banner/components/BannerCards.tsx";


const styles = {
  card: {
    background: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.1)',
    fontFamily: 'helvetica, sans-serif',
    overflow: 'hidden',
    maxWidth: '63rem',
    height: '26rem',
    position: 'relative',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    wordWrap: 'break-word'
  },
  cardContainer: {
    background: 'rgba(0, 0, 0, 0.1)',
    fontSize: '8rem',
    justifyContent: 'center',
    lineHeight: '100%',
    overflow: 'hidden',
    position: 'absolute',
    padding: '1rem',
    width: '100%',
    height: '100%'
  },
  cardInfo: {
    background: 'rgba(0, 0, 0, 0.01)',
    color: 'rgba(0, 0, 0, 0.6)',
    padding: '1rem'
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: '2rem'
  },
  cardDescription: {
    fontSize: '1.25rem',
    padding: '1rem 0'
  },
  cardCategory: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    textAlign: 'right'
  }
};
const BannerCards = ({
  heading,
  title,
  textColor,
  backgroundColor,
  imgPath
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
  style: {
    ...styles.card,
    backgroundImage: `url(${"https://chakara123.github.io/samples"}/banner/images/${imgPath})`,
    backgroundColor
  },
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    style: styles.cardInfo,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      style: {
        ...styles.cardName,
        color: textColor
      },
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      style: {
        ...styles.cardDescription,
        color: textColor
      },
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 62,
  columnNumber: 3
}, undefined);
_c = BannerCards;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerCards);
var _c;
__webpack_require__.$Refresh$.register(_c, "BannerCards");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/apps/banner/index.tsx":
/*!***********************************!*\
  !*** ./src/apps/banner/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_normalizeWidgetInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/normalizeWidgetInput */ "./src/common/normalizeWidgetInput.ts");
/* harmony import */ var _components_BannerCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BannerCards */ "./src/apps/banner/components/BannerCards.tsx");
/* harmony import */ var _BannerCards_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BannerCards.widget */ "./src/apps/banner/BannerCards.widget.js");
/* harmony import */ var _BannerCards_widget__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_BannerCards_widget__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/273481/Desktop/project/chakara/src/apps/banner/index.tsx";







const render = async function (instanceId, langCode, origin, cb) {
  const {
    element,
    locale,
    messages
  } = await (0,_common_normalizeWidgetInput__WEBPACK_IMPORTED_MODULE_3__["default"])(instanceId, langCode, (_BannerCards_widget__WEBPACK_IMPORTED_MODULE_5___default()));
  if (!element || !locale) {
    return;
  }
  react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_intl__WEBPACK_IMPORTED_MODULE_2__.IntlProvider, {
    locale: locale,
    messages: messages,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_BannerCards__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this), element, () => cb(element));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/common/locale/fetchTranslationMessages.ts":
/*!*******************************************************!*\
  !*** ./src/common/locale/fetchTranslationMessages.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types/locale */ "./src/types/locale.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const fetchTranslationMessages = async (widgetId, langCode) => {
  const locale = langCode;
  // We don't want to do the extra fetching for English since it's the default.
  if (locale === _types_locale__WEBPACK_IMPORTED_MODULE_0__.Locale.EN) {
    return {};
  }
  try {
    // This relies on the CRA convention for PUBLIC_URL.
    const response = await window.fetch(`${"/samples"}/translations/${widgetId}/${locale}.json`);
    return response.json();
  } catch (e) {
    // If something went wrong do not fail the widget, use the default language.
    return {};
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchTranslationMessages);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/common/normalizeWidgetInput.ts":
/*!********************************************!*\
  !*** ./src/common/normalizeWidgetInput.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   parseUserInput: () => (/* binding */ parseUserInput)
/* harmony export */ });
/* harmony import */ var lodash_camelcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.camelcase */ "./node_modules/lodash.camelcase/index.js");
/* harmony import */ var lodash_camelcase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelcase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_fetchTranslationMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale/fetchTranslationMessages */ "./src/common/locale/fetchTranslationMessages.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



async function normalizeWidgetInput(instanceId, langCode, widgetDefinition, refineInputTypes) {
  let element = document.getElementById(instanceId);
  element = new HTMLElement();
  const widgetId = widgetDefinition.shortcode;
  const palette = element.getAttribute('data-palette');
  const messages = await (0,_locale_fetchTranslationMessages__WEBPACK_IMPORTED_MODULE_1__["default"])(widgetId, langCode);
  const rawParams = parseUserInput(widgetDefinition, element);
  // If there is no refinement needed it may mean that the raw params parse
  // directly into T, or that there are no params.
  const params = refineInputTypes ? refineInputTypes(rawParams) : rawParams;
  return {
    element,
    locale: langCode,
    palette,
    messages,
    params
  };
}
function parseUserInput(widgetDefinition, element) {
  var _widgetDefinition$set, _widgetDefinition$set2, _widgetDefinition$set3;
  // First we need to know what are the input options.
  const schemaProps = (widgetDefinition === null || widgetDefinition === void 0 ? void 0 : (_widgetDefinition$set = widgetDefinition.settingsSchema) === null || _widgetDefinition$set === void 0 ? void 0 : (_widgetDefinition$set2 = _widgetDefinition$set.properties) === null || _widgetDefinition$set2 === void 0 ? void 0 : (_widgetDefinition$set3 = _widgetDefinition$set2.fields) === null || _widgetDefinition$set3 === void 0 ? void 0 : _widgetDefinition$set3.properties) || {};
  const propNames = Object.keys(schemaProps);
  return propNames.reduce((params, propName) => ({
    ...params,
    [lodash_camelcase__WEBPACK_IMPORTED_MODULE_0___default()(propName)]: parseValue(propName, element, (schemaProps === null || schemaProps === void 0 ? void 0 : schemaProps[propName]) || {
      type: 'null'
    })
  }), {});
}
function parseValue(propName, element, {
  type
}) {
  type = 'null';
  let attribute = element.getAttribute(`data-${propName}`);
  if (type === 'string') {
    attribute = '';
    return attribute;
  }
  if (type === 'number') {
    attribute = '0';
    return attribute.includes('.') ? parseFloat(attribute) : parseInt(attribute, 10);
  }
  if (type === 'null') {
    return null;
  }
  if (type === 'boolean') {
    attribute = '0';
    // The CMS encodes booleans as '0' and '1'.
    return attribute !== '0';
  }
  attribute = 'null';
  return JSON.parse(attribute);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (normalizeWidgetInput);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/types/locale.ts":
/*!*****************************!*\
  !*** ./src/types/locale.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Locale: () => (/* binding */ Locale)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

let Locale = /*#__PURE__*/function (Locale) {
  Locale["AR"] = "ar";
  Locale["DE"] = "de";
  Locale["EN"] = "en";
  Locale["ES"] = "es";
  Locale["FR"] = "fr";
  Locale["IT"] = "it";
  Locale["JA"] = "ja";
  Locale["KO"] = "ko";
  Locale["PL"] = "pl";
  Locale["PT"] = "pt";
  Locale["RU"] = "ru";
  Locale["TR"] = "tr";
  Locale["ZH"] = "zh";
  return Locale;
}({});
const availableLangcodes = [Locale.AR, Locale.DE, Locale.EN, Locale.ES, Locale.FR, Locale.IT, Locale.JA, Locale.KO, Locale.PL, Locale.PT, Locale.RU, Locale.TR, Locale.ZH];

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global __webpack_require__ */
var Refresh = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");

/**
 * Extracts exports from a webpack module object.
 * @param {string} moduleId A Webpack module ID.
 * @returns {*} An exports object from the module.
 */
function getModuleExports(moduleId) {
  if (typeof moduleId === 'undefined') {
    // `moduleId` is unavailable, which indicates that this module is not in the cache,
    // which means we won't be able to capture any exports,
    // and thus they cannot be refreshed safely.
    // These are likely runtime or dynamically generated modules.
    return {};
  }
  var maybeModule = __webpack_require__.c[moduleId];
  if (typeof maybeModule === 'undefined') {
    // `moduleId` is available but the module in cache is unavailable,
    // which indicates the module is somehow corrupted (e.g. broken Webpacak `module` globals).
    // We will warn the user (as this is likely a mistake) and assume they cannot be refreshed.
    console.warn('[React Refresh] Failed to get exports for module: ' + moduleId + '.');
    return {};
  }
  var exportsOrPromise = maybeModule.exports;
  if (typeof Promise !== 'undefined' && exportsOrPromise instanceof Promise) {
    return exportsOrPromise.then(function (exports) {
      return exports;
    });
  }
  return exportsOrPromise;
}

/**
 * Calculates the signature of a React refresh boundary.
 * If this signature changes, it's unsafe to accept the boundary.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L795-L816).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {string[]} A React refresh boundary signature array.
 */
function getReactRefreshBoundarySignature(moduleExports) {
  var signature = [];
  signature.push(Refresh.getFamilyByType(moduleExports));
  if (moduleExports == null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return signature;
  }
  for (var key in moduleExports) {
    if (key === '__esModule') {
      continue;
    }
    signature.push(key);
    signature.push(Refresh.getFamilyByType(moduleExports[key]));
  }
  return signature;
}

/**
 * Creates a data object to be retained across refreshes.
 * This object should not transtively reference previous exports,
 * which can form infinite chain of objects across refreshes, which can pressure RAM.
 *
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {*} A React refresh boundary signature array.
 */
function getWebpackHotData(moduleExports) {
  return {
    signature: getReactRefreshBoundarySignature(moduleExports),
    isReactRefreshBoundary: isReactRefreshBoundary(moduleExports)
  };
}

/**
 * Creates a helper that performs a delayed React refresh.
 * @returns {function(function(): void): void} A debounced React refresh function.
 */
function createDebounceUpdate() {
  /**
   * A cached setTimeout handler.
   * @type {number | undefined}
   */
  var refreshTimeout;

  /**
   * Performs react refresh on a delay and clears the error overlay.
   * @param {function(): void} callback
   * @returns {void}
   */
  function enqueueUpdate(callback) {
    if (typeof refreshTimeout === 'undefined') {
      refreshTimeout = setTimeout(function () {
        refreshTimeout = undefined;
        Refresh.performReactRefresh();
        callback();
      }, 30);
    }
  }
  return enqueueUpdate;
}

/**
 * Checks if all exports are likely a React component.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L748-L774).
 * @param {*} moduleExports A Webpack module exports object.
 * @returns {boolean} Whether the exports are React component like.
 */
function isReactRefreshBoundary(moduleExports) {
  if (Refresh.isLikelyComponentType(moduleExports)) {
    return true;
  }
  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over exports.
    return false;
  }
  var hasExports = false;
  var areAllExportsComponents = true;
  for (var key in moduleExports) {
    hasExports = true;

    // This is the ES Module indicator flag
    if (key === '__esModule') {
      continue;
    }

    // We can (and have to) safely execute getters here,
    // as Webpack manually assigns harmony exports to getters,
    // without any side-effects attached.
    // Ref: https://github.com/webpack/webpack/blob/b93048643fe74de2a6931755911da1212df55897/lib/MainTemplate.js#L281
    var exportValue = moduleExports[key];
    if (!Refresh.isLikelyComponentType(exportValue)) {
      areAllExportsComponents = false;
    }
  }
  return hasExports && areAllExportsComponents;
}

/**
 * Checks if exports are likely a React component and registers them.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/febdba2383113c88296c61e28e4ef6a7f4939fda/packages/metro/src/lib/polyfills/require.js#L818-L835).
 * @param {*} moduleExports A Webpack module exports object.
 * @param {string} moduleId A Webpack module ID.
 * @returns {void}
 */
function registerExportsForReactRefresh(moduleExports, moduleId) {
  if (Refresh.isLikelyComponentType(moduleExports)) {
    // Register module.exports if it is likely a component
    Refresh.register(moduleExports, moduleId + ' %exports%');
  }
  if (moduleExports === undefined || moduleExports === null || typeof moduleExports !== 'object') {
    // Exit if we can't iterate over the exports.
    return;
  }
  for (var key in moduleExports) {
    // Skip registering the ES Module indicator
    if (key === '__esModule') {
      continue;
    }
    var exportValue = moduleExports[key];
    if (Refresh.isLikelyComponentType(exportValue)) {
      var typeID = moduleId + ' %exports% ' + key;
      Refresh.register(exportValue, typeID);
    }
  }
}

/**
 * Compares previous and next module objects to check for mutated boundaries.
 *
 * This implementation is based on the one in [Metro](https://github.com/facebook/metro/blob/907d6af22ac6ebe58572be418e9253a90665ecbd/packages/metro/src/lib/polyfills/require.js#L776-L792).
 * @param {*} prevSignature The signature of the current Webpack module exports object.
 * @param {*} nextSignature The signature of the next Webpack module exports object.
 * @returns {boolean} Whether the React refresh boundary should be invalidated.
 */
function shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {
  if (prevSignature.length !== nextSignature.length) {
    return true;
  }
  for (var i = 0; i < nextSignature.length; i += 1) {
    if (prevSignature[i] !== nextSignature[i]) {
      return true;
    }
  }
  return false;
}
var enqueueUpdate = createDebounceUpdate();
function executeRuntime(moduleExports, moduleId, webpackHot, refreshOverlay, isTest) {
  registerExportsForReactRefresh(moduleExports, moduleId);
  if (webpackHot) {
    var isHotUpdate = !!webpackHot.data;
    var prevData;
    if (isHotUpdate) {
      prevData = webpackHot.data.prevData;
    }
    if (isReactRefreshBoundary(moduleExports)) {
      webpackHot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevData = getWebpackHotData(moduleExports);
      });
      webpackHot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {
          refreshOverlay.handleRuntimeError(error);
        }
        if (typeof isTest !== 'undefined' && isTest) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }
        __webpack_require__.c[moduleId].hot.accept(hotErrorHandler);
      });
      if (isHotUpdate) {
        if (prevData && prevData.isReactRefreshBoundary && shouldInvalidateReactRefreshBoundary(prevData.signature, getReactRefreshBoundarySignature(moduleExports))) {
          webpackHot.invalidate();
        } else {
          enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (typeof refreshOverlay !== 'undefined' && refreshOverlay) {
              refreshOverlay.clearRuntimeErrors();
            }
          });
        }
      }
    } else {
      if (isHotUpdate && typeof prevData !== 'undefined') {
        webpackHot.invalidate();
      }
    }
  }
}
module.exports = Object.freeze({
  enqueueUpdate: enqueueUpdate,
  executeRuntime: executeRuntime,
  getModuleExports: getModuleExports,
  isReactRefreshBoundary: isReactRefreshBoundary,
  registerExportsForReactRefresh: registerExportsForReactRefresh
});

/***/ }),

/***/ "./node_modules/lodash.camelcase/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.camelcase/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
  rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
  rsComboSymbolsRange = '\\u20d0-\\u20f0',
  rsDingbatRange = '\\u2700-\\u27bf',
  rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
  rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
  rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
  rsPunctuationRange = '\\u2000-\\u206f',
  rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
  rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
  rsVarRange = '\\ufe0e\\ufe0f',
  rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
  rsAstral = '[' + rsAstralRange + ']',
  rsBreak = '[' + rsBreakRange + ']',
  rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
  rsDigits = '\\d+',
  rsDingbat = '[' + rsDingbatRange + ']',
  rsLower = '[' + rsLowerRange + ']',
  rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
  rsFitz = '\\ud83c[\\udffb-\\udfff]',
  rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
  rsNonAstral = '[^' + rsAstralRange + ']',
  rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  rsUpper = '[' + rsUpperRange + ']',
  rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
  rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
  rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
  rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
  reOptMod = rsModifier + '?',
  rsOptVar = '[' + rsVarRange + ']?',
  rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
  rsSeq = rsOptVar + reOptMod + rsOptJoin,
  rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
  rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')', rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')', rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr, rsUpper + '+' + rsOptUpperContr, rsDigits, rsEmoji].join('|'), 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',
  '\xc1': 'A',
  '\xc2': 'A',
  '\xc3': 'A',
  '\xc4': 'A',
  '\xc5': 'A',
  '\xe0': 'a',
  '\xe1': 'a',
  '\xe2': 'a',
  '\xe3': 'a',
  '\xe4': 'a',
  '\xe5': 'a',
  '\xc7': 'C',
  '\xe7': 'c',
  '\xd0': 'D',
  '\xf0': 'd',
  '\xc8': 'E',
  '\xc9': 'E',
  '\xca': 'E',
  '\xcb': 'E',
  '\xe8': 'e',
  '\xe9': 'e',
  '\xea': 'e',
  '\xeb': 'e',
  '\xcc': 'I',
  '\xcd': 'I',
  '\xce': 'I',
  '\xcf': 'I',
  '\xec': 'i',
  '\xed': 'i',
  '\xee': 'i',
  '\xef': 'i',
  '\xd1': 'N',
  '\xf1': 'n',
  '\xd2': 'O',
  '\xd3': 'O',
  '\xd4': 'O',
  '\xd5': 'O',
  '\xd6': 'O',
  '\xd8': 'O',
  '\xf2': 'o',
  '\xf3': 'o',
  '\xf4': 'o',
  '\xf5': 'o',
  '\xf6': 'o',
  '\xf8': 'o',
  '\xd9': 'U',
  '\xda': 'U',
  '\xdb': 'U',
  '\xdc': 'U',
  '\xf9': 'u',
  '\xfa': 'u',
  '\xfb': 'u',
  '\xfc': 'u',
  '\xdd': 'Y',
  '\xfd': 'y',
  '\xff': 'y',
  '\xc6': 'Ae',
  '\xe6': 'ae',
  '\xde': 'Th',
  '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',
  '\u0102': 'A',
  '\u0104': 'A',
  '\u0101': 'a',
  '\u0103': 'a',
  '\u0105': 'a',
  '\u0106': 'C',
  '\u0108': 'C',
  '\u010a': 'C',
  '\u010c': 'C',
  '\u0107': 'c',
  '\u0109': 'c',
  '\u010b': 'c',
  '\u010d': 'c',
  '\u010e': 'D',
  '\u0110': 'D',
  '\u010f': 'd',
  '\u0111': 'd',
  '\u0112': 'E',
  '\u0114': 'E',
  '\u0116': 'E',
  '\u0118': 'E',
  '\u011a': 'E',
  '\u0113': 'e',
  '\u0115': 'e',
  '\u0117': 'e',
  '\u0119': 'e',
  '\u011b': 'e',
  '\u011c': 'G',
  '\u011e': 'G',
  '\u0120': 'G',
  '\u0122': 'G',
  '\u011d': 'g',
  '\u011f': 'g',
  '\u0121': 'g',
  '\u0123': 'g',
  '\u0124': 'H',
  '\u0126': 'H',
  '\u0125': 'h',
  '\u0127': 'h',
  '\u0128': 'I',
  '\u012a': 'I',
  '\u012c': 'I',
  '\u012e': 'I',
  '\u0130': 'I',
  '\u0129': 'i',
  '\u012b': 'i',
  '\u012d': 'i',
  '\u012f': 'i',
  '\u0131': 'i',
  '\u0134': 'J',
  '\u0135': 'j',
  '\u0136': 'K',
  '\u0137': 'k',
  '\u0138': 'k',
  '\u0139': 'L',
  '\u013b': 'L',
  '\u013d': 'L',
  '\u013f': 'L',
  '\u0141': 'L',
  '\u013a': 'l',
  '\u013c': 'l',
  '\u013e': 'l',
  '\u0140': 'l',
  '\u0142': 'l',
  '\u0143': 'N',
  '\u0145': 'N',
  '\u0147': 'N',
  '\u014a': 'N',
  '\u0144': 'n',
  '\u0146': 'n',
  '\u0148': 'n',
  '\u014b': 'n',
  '\u014c': 'O',
  '\u014e': 'O',
  '\u0150': 'O',
  '\u014d': 'o',
  '\u014f': 'o',
  '\u0151': 'o',
  '\u0154': 'R',
  '\u0156': 'R',
  '\u0158': 'R',
  '\u0155': 'r',
  '\u0157': 'r',
  '\u0159': 'r',
  '\u015a': 'S',
  '\u015c': 'S',
  '\u015e': 'S',
  '\u0160': 'S',
  '\u015b': 's',
  '\u015d': 's',
  '\u015f': 's',
  '\u0161': 's',
  '\u0162': 'T',
  '\u0164': 'T',
  '\u0166': 'T',
  '\u0163': 't',
  '\u0165': 't',
  '\u0167': 't',
  '\u0168': 'U',
  '\u016a': 'U',
  '\u016c': 'U',
  '\u016e': 'U',
  '\u0170': 'U',
  '\u0172': 'U',
  '\u0169': 'u',
  '\u016b': 'u',
  '\u016d': 'u',
  '\u016f': 'u',
  '\u0171': 'u',
  '\u0173': 'u',
  '\u0174': 'W',
  '\u0175': 'w',
  '\u0176': 'Y',
  '\u0177': 'y',
  '\u0178': 'Y',
  '\u0179': 'Z',
  '\u017b': 'Z',
  '\u017d': 'Z',
  '\u017a': 'z',
  '\u017c': 'z',
  '\u017e': 'z',
  '\u0132': 'IJ',
  '\u0133': 'ij',
  '\u0152': 'Oe',
  '\u0153': 'oe',
  '\u0149': "'n",
  '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
    length = array ? array.length : 0;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
    length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function (string) {
    string = toString(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
    return chr[methodName]() + trailing;
  };
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function (string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function (result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;
  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
module.exports = camelCase;

/***/ }),

/***/ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-refresh/cjs/react-refresh-runtime.development.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React vundefined
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function () {
    'use strict';

    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    var REACT_CACHE_TYPE = 0xeae4;
    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_SCOPE_TYPE = symbolFor('react.scope');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
      REACT_CACHE_TYPE = symbolFor('react.cache');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.

    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue

    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.

    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.

    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.

    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.

    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue

    var rootElements =
    // $FlowIssue
    typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
      if (signature.fullKey !== null) {
        return signature.fullKey;
      }
      var fullKey = signature.ownKey;
      var hooks;
      try {
        hooks = signature.getCustomHooks();
      } catch (err) {
        // This can happen in an edge case, e.g. if expression like Foo.useSomething
        // depends on Foo which is lazily initialized during rendering.
        // In that case just assume we'll have to remount.
        signature.forceReset = true;
        signature.fullKey = fullKey;
        return fullKey;
      }
      for (var i = 0; i < hooks.length; i++) {
        var hook = hooks[i];
        if (typeof hook !== 'function') {
          // Something's wrong. Assume we need to remount.
          signature.forceReset = true;
          signature.fullKey = fullKey;
          return fullKey;
        }
        var nestedHookSignature = allSignaturesByType.get(hook);
        if (nestedHookSignature === undefined) {
          // No signature means Hook wasn't in the source code, e.g. in a library.
          // We'll skip it because we can assume it won't change during this session.
          continue;
        }
        var nestedHookKey = computeFullKey(nestedHookSignature);
        if (nestedHookSignature.forceReset) {
          signature.forceReset = true;
        }
        fullKey += '\n---\n' + nestedHookKey;
      }
      signature.fullKey = fullKey;
      return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
      var prevSignature = allSignaturesByType.get(prevType);
      var nextSignature = allSignaturesByType.get(nextType);
      if (prevSignature === undefined && nextSignature === undefined) {
        return true;
      }
      if (prevSignature === undefined || nextSignature === undefined) {
        return false;
      }
      if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
        return false;
      }
      if (nextSignature.forceReset) {
        return false;
      }
      return true;
    }
    function isReactClass(type) {
      return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
      if (isReactClass(prevType) || isReactClass(nextType)) {
        return false;
      }
      if (haveEqualSignatures(prevType, nextType)) {
        return true;
      }
      return false;
    }
    function resolveFamily(type) {
      // Only check updated types to keep lookups fast.
      return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).

    function cloneMap(map) {
      var clone = new Map();
      map.forEach(function (value, key) {
        clone.set(key, value);
      });
      return clone;
    }
    function cloneSet(set) {
      var clone = new Set();
      set.forEach(function (value) {
        clone.add(value);
      });
      return clone;
    } // This is a safety mechanism to protect against rogue getters and Proxies.

    function getProperty(object, property) {
      try {
        return object[property];
      } catch (err) {
        // Intentionally ignore.
        return undefined;
      }
    }
    function performReactRefresh() {
      if (pendingUpdates.length === 0) {
        return null;
      }
      if (isPerformingRefresh) {
        return null;
      }
      isPerformingRefresh = true;
      try {
        var staleFamilies = new Set();
        var updatedFamilies = new Set();
        var updates = pendingUpdates;
        pendingUpdates = [];
        updates.forEach(function (_ref) {
          var family = _ref[0],
            nextType = _ref[1];
          // Now that we got a real edit, we can create associations
          // that will be read by the React reconciler.
          var prevType = family.current;
          updatedFamiliesByType.set(prevType, family);
          updatedFamiliesByType.set(nextType, family);
          family.current = nextType; // Determine whether this should be a re-render or a re-mount.

          if (canPreserveStateBetween(prevType, nextType)) {
            updatedFamilies.add(family);
          } else {
            staleFamilies.add(family);
          }
        }); // TODO: rename these fields to something more meaningful.

        var update = {
          updatedFamilies: updatedFamilies,
          // Families that will re-render preserving state
          staleFamilies: staleFamilies // Families that will be remounted
        };

        helpersByRendererID.forEach(function (helpers) {
          // Even if there are no roots, set the handler on first update.
          // This ensures that if *new* roots are mounted, they'll use the resolve handler.
          helpers.setRefreshHandler(resolveFamily);
        });
        var didError = false;
        var firstError = null; // We snapshot maps and sets that are mutated during commits.
        // If we don't do this, there is a risk they will be mutated while
        // we iterate over them. For example, trying to recover a failed root
        // may cause another root to be added to the failed list -- an infinite loop.

        var failedRootsSnapshot = cloneSet(failedRoots);
        var mountedRootsSnapshot = cloneSet(mountedRoots);
        var helpersByRootSnapshot = cloneMap(helpersByRoot);
        failedRootsSnapshot.forEach(function (root) {
          var helpers = helpersByRootSnapshot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          if (!failedRoots.has(root)) {// No longer failed.
          }
          if (rootElements === null) {
            return;
          }
          if (!rootElements.has(root)) {
            return;
          }
          var element = rootElements.get(root);
          try {
            helpers.scheduleRoot(root, element);
          } catch (err) {
            if (!didError) {
              didError = true;
              firstError = err;
            } // Keep trying other roots.
          }
        });

        mountedRootsSnapshot.forEach(function (root) {
          var helpers = helpersByRootSnapshot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          if (!mountedRoots.has(root)) {// No longer mounted.
          }
          try {
            helpers.scheduleRefresh(root, update);
          } catch (err) {
            if (!didError) {
              didError = true;
              firstError = err;
            } // Keep trying other roots.
          }
        });

        if (didError) {
          throw firstError;
        }
        return update;
      } finally {
        isPerformingRefresh = false;
      }
    }
    function register(type, id) {
      {
        if (type === null) {
          return;
        }
        if (typeof type !== 'function' && typeof type !== 'object') {
          return;
        } // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.

        if (allFamiliesByType.has(type)) {
          return;
        } // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.

        var family = allFamiliesByID.get(id);
        if (family === undefined) {
          family = {
            current: type
          };
          allFamiliesByID.set(id, family);
        } else {
          pendingUpdates.push([family, type]);
        }
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.

        if (typeof type === 'object' && type !== null) {
          switch (getProperty(type, '$$typeof')) {
            case REACT_FORWARD_REF_TYPE:
              register(type.render, id + '$render');
              break;
            case REACT_MEMO_TYPE:
              register(type.type, id + '$type');
              break;
          }
        }
      }
    }
    function setSignature(type, key) {
      var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
      {
        if (!allSignaturesByType.has(type)) {
          allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function () {
              return [];
            }
          });
        } // Visit inner types because we might not have signed them.

        if (typeof type === 'object' && type !== null) {
          switch (getProperty(type, '$$typeof')) {
            case REACT_FORWARD_REF_TYPE:
              setSignature(type.render, key, forceReset, getCustomHooks);
              break;
            case REACT_MEMO_TYPE:
              setSignature(type.type, key, forceReset, getCustomHooks);
              break;
          }
        }
      }
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.

    function collectCustomHooksForSignature(type) {
      {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) {
          computeFullKey(signature);
        }
      }
    }
    function getFamilyByID(id) {
      {
        return allFamiliesByID.get(id);
      }
    }
    function getFamilyByType(type) {
      {
        return allFamiliesByType.get(type);
      }
    }
    function findAffectedHostInstances(families) {
      {
        var affectedInstances = new Set();
        mountedRoots.forEach(function (root) {
          var helpers = helpersByRoot.get(root);
          if (helpers === undefined) {
            throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
          }
          var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
          instancesForRoot.forEach(function (inst) {
            affectedInstances.add(inst);
          });
        });
        return affectedInstances;
      }
    }
    function injectIntoGlobalHook(globalObject) {
      {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
          // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
          // Note that in this case it's important that renderer code runs *after* this method call.
          // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
          var nextID = 0;
          globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
            renderers: new Map(),
            supportsFiber: true,
            inject: function (injected) {
              return nextID++;
            },
            onScheduleFiberRoot: function (id, root, children) {},
            onCommitFiberRoot: function (id, root, maybePriorityLevel, didError) {},
            onCommitFiberUnmount: function () {}
          };
        }
        if (hook.isDisabled) {
          // This isn't a real property on the hook, but it can be set to opt out
          // of DevTools integration and associated warnings and logs.
          // Using console['warn'] to evade Babel and ESLint
          console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');
          return;
        } // Here, we just want to get a reference to scheduleRefresh.

        var oldInject = hook.inject;
        hook.inject = function (injected) {
          var id = oldInject.apply(this, arguments);
          if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
            // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
          }
          return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626

        hook.renderers.forEach(function (injected, id) {
          if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
            // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
          }
        }); // We also want to track currently mounted roots.

        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function () {};
        hook.onScheduleFiberRoot = function (id, root, children) {
          if (!isPerformingRefresh) {
            // If it was intentionally scheduled, don't attempt to restore.
            // This includes intentionally scheduled unmounts.
            failedRoots.delete(root);
            if (rootElements !== null) {
              rootElements.set(root, children);
            }
          }
          return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function (id, root, maybePriorityLevel, didError) {
          var helpers = helpersByRendererID.get(id);
          if (helpers !== undefined) {
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.

            if (alternate !== null) {
              var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
              var isMounted = current.memoizedState != null && current.memoizedState.element != null;
              if (!wasMounted && isMounted) {
                // Mount a new root.
                mountedRoots.add(root);
                failedRoots.delete(root);
              } else if (wasMounted && isMounted) ;else if (wasMounted && !isMounted) {
                // Unmount an existing root.
                mountedRoots.delete(root);
                if (didError) {
                  // We'll remount it on future edits.
                  failedRoots.add(root);
                } else {
                  helpersByRoot.delete(root);
                }
              } else if (!wasMounted && !isMounted) {
                if (didError) {
                  // We'll remount it on future edits.
                  failedRoots.add(root);
                }
              }
            } else {
              // Mount a new root.
              mountedRoots.add(root);
            }
          } // Always call the decorated DevTools hook.

          return oldOnCommitFiberRoot.apply(this, arguments);
        };
      }
    }
    function hasUnrecoverableErrors() {
      // TODO: delete this after removing dependency in RN.
      return false;
    } // Exposed for testing.

    function _getMountedRootCount() {
      {
        return mountedRoots.size;
      }
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Call without arguments triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* Call with arguments attaches the signature to the type: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );

    function createSignatureFunctionForTransform() {
      {
        var savedType;
        var hasCustomHooks;
        var didCollectHooks = false;
        return function (type, key, forceReset, getCustomHooks) {
          if (typeof key === 'string') {
            // We're in the initial phase that associates signatures
            // with the functions. Note this may be called multiple times
            // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).
            if (!savedType) {
              // We're in the innermost call, so this is the actual type.
              savedType = type;
              hasCustomHooks = typeof getCustomHooks === 'function';
            } // Set the signature for all types (even wrappers!) in case
            // they have no signatures of their own. This is to prevent
            // problems like https://github.com/facebook/react/issues/20417.

            if (type != null && (typeof type === 'function' || typeof type === 'object')) {
              setSignature(type, key, forceReset, getCustomHooks);
            }
            return type;
          } else {
            // We're in the _s() call without arguments, which means
            // this is the time to collect custom Hook signatures.
            // Only do this once. This path is hot and runs *inside* every render!
            if (!didCollectHooks && hasCustomHooks) {
              didCollectHooks = true;
              collectCustomHooksForSignature(savedType);
            }
          }
        };
      }
    }
    function isLikelyComponentType(type) {
      {
        switch (typeof type) {
          case 'function':
            {
              // First, deal with classes.
              if (type.prototype != null) {
                if (type.prototype.isReactComponent) {
                  // React class.
                  return true;
                }
                var ownNames = Object.getOwnPropertyNames(type.prototype);
                if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
                  // This looks like a class.
                  return false;
                } // eslint-disable-next-line no-proto

                if (type.prototype.__proto__ !== Object.prototype) {
                  // It has a superclass.
                  return false;
                } // Pass through.
                // This looks like a regular function with empty prototype.
              } // For plain functions and arrows, use name as a heuristic.

              var name = type.name || type.displayName;
              return typeof name === 'string' && /^[A-Z]/.test(name);
            }
          case 'object':
            {
              if (type != null) {
                switch (getProperty(type, '$$typeof')) {
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_MEMO_TYPE:
                    // Definitely React components.
                    return true;
                  default:
                    return false;
                }
              }
              return false;
            }
          default:
            {
              return false;
            }
        }
      }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
  })();
}

/***/ }),

/***/ "./node_modules/react-refresh/runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react-refresh/runtime.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-refresh-runtime.development.js */ "./node_modules/react-refresh/cjs/react-refresh-runtime.development.js");
}

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function () {
    'use strict';

    var React = __webpack_require__(/*! react */ "react");

    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }
      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }
      return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
      {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          printWarning('error', format, args);
        }
      }
    }
    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        } // eslint-disable-next-line react-internal/safe-string-coercion

        var argsWithFormat = args.map(function (item) {
          return String(item);
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }

    // -----------------------------------------------------------------------------

    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing

    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.

    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

    var REACT_MODULE_REFERENCE;
    {
      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
    }
    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
        return true;
      }
      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
        // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
          return true;
        }
      }
      return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
      var displayName = outerType.displayName;
      if (displayName) {
        return displayName;
      }
      var functionName = innerType.displayName || innerType.name || '';
      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber

    function getContextName(type) {
      return type.displayName || 'Context';
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

    function getComponentNameFromType(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }
      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }
      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }
      if (typeof type === 'string') {
        return type;
      }
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';
        case REACT_PORTAL_TYPE:
          return 'Portal';
        case REACT_PROFILER_TYPE:
          return 'Profiler';
        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';
        case REACT_SUSPENSE_TYPE:
          return 'Suspense';
        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }
      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';
          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';
          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');
          case REACT_MEMO_TYPE:
            var outerName = type.displayName || null;
            if (outerName !== null) {
              return outerName;
            }
            return getComponentNameFromType(type.type) || 'Memo';
          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }

          // eslint-disable-next-line no-fallthrough
        }
      }

      return null;
    }
    var assign = Object.assign;

    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }
    function reenableLogs() {
      {
        disabledDepth--;
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: assign({}, props, {
              value: prevLog
            }),
            info: assign({}, props, {
              value: prevInfo
            }),
            warn: assign({}, props, {
              value: prevWarn
            }),
            error: assign({}, props, {
              value: prevError
            }),
            group: assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.

        return '\n' + prefix + name;
      }
    }
    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }
    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }
      {
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher.current = null;
        disableLogs();
      }
      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function () {
            throw Error();
          }; // $FlowFixMe

          Object.defineProperty(Fake.prototype, 'props', {
            set: function () {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });
          if (typeof Reflect === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }
            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }
            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }
          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;
          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }
          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                    // but we have a user-provided "displayName"
                    // splice it in to make the stack more readable.

                    if (fn.displayName && _frame.includes('<anonymous>')) {
                      _frame = _frame.replace('<anonymous>', fn.displayName);
                    }
                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }
              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.

      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }
    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return '';
      }
      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }
      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame('Suspense');
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }
      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);
          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }
      return '';
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame.setExtraStackFrame(null);
        }
      }
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                // eslint-disable-next-line react-internal/prod-error-codes
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }
              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
              setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error('Failed %s type: %s', location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

    function isArray(a) {
      return isArrayImpl(a);
    }

    /*
     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
     *
     * The functions in this module will throw an easier-to-understand,
     * easier-to-debug exception with a clear errors message message explaining the
     * problem. (Instead of a confusing exception thrown inside the implementation
     * of the `value` object).
     */
    // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
      {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
        return type;
      }
    } // $FlowFixMe only called in DEV, so void return is not possible.

    function willCoercionThrow(value) {
      {
        try {
          testStringCoercion(value);
          return false;
        } catch (e) {
          return true;
        }
      }
    }
    function testStringCoercion(value) {
      // If you ended up here by following an exception call stack, here's what's
      // happened: you supplied an object or symbol value to React (as a prop, key,
      // DOM attribute, CSS property, string ref, etc.) and when React tried to
      // coerce it to a string using `'' + value`, an exception was thrown.
      //
      // The most common types that will cause this exception are `Symbol` instances
      // and Temporal objects like `Temporal.Instant`. But any object that has a
      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
      // exception. (Library authors do this to prevent users from using built-in
      // numeric operators like `+` or comparison operators like `>=` because custom
      // methods are needed to perform accurate arithmetic or comparison.)
      //
      // To fix the problem, coerce this object or symbol value to a string before
      // passing it to React. The most reliable way is usually `String(value)`.
      //
      // To find which value is throwing, check the browser or debugger console.
      // Before this exception was thrown, there should be `console.error` output
      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
      // problem and how that type was used: key, atrribute, input value prop, etc.
      // In most cases, this console output also shows the component and its
      // ancestor components where the exception happened.
      //
      // eslint-disable-next-line react-internal/safe-string-coercion
      return '' + value;
    }
    function checkKeyStringCoercion(value) {
      {
        if (willCoercionThrow(value)) {
          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
      }
    }

    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }
    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }
    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    function defineKeyPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingKey = function () {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
    }
    function defineRefPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingRef = function () {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */

    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */

    function jsxDEV(type, config, maybeKey, source, self) {
      {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.

        if (maybeKey !== undefined) {
          {
            checkKeyStringCoercion(maybeKey);
          }
          key = '' + maybeKey;
        }
        if (hasValidKey(config)) {
          {
            checkKeyStringCoercion(config.key);
          }
          key = '' + config.key;
        }
        if (hasValidRef(config)) {
          ref = config.ref;
          warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        } // Resolve default props

        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }
          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }
    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */

    function isValidElement(object) {
      {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
    }
    function getDeclarationErrorAddendum() {
      {
        if (ReactCurrentOwner$1.current) {
          var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }
        return '';
      }
    }
    function getSourceInfoErrorAddendum(source) {
      {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
      }
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */

    var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
      {
        var info = getDeclarationErrorAddendum();
        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }
        return info;
      }
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */

    function validateExplicitKey(element, parentType) {
      {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
          // Give the component that originally created this child.
          childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        }
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */

    function validateChildKeys(node, parentType) {
      {
        if (typeof node !== 'object') {
          return;
        }
        if (isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */

    function validatePropTypes(element) {
      {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }
        var propTypes;
        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
        // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }
        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentNameFromType(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentNameFromType(type);
          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */

    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }
        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
          setCurrentlyValidatingElement$1(null);
        }
      }
    }
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
      {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';
          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }
          var sourceInfo = getSourceInfoErrorAddendum(source);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }
          var typeString;
          if (type === null) {
            typeString = 'null';
          } else if (isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = typeof type;
          }
          error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)

        if (validType) {
          var children = props.children;
          if (children !== undefined) {
            if (isStaticChildren) {
              if (isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  validateChildKeys(children[i], type);
                }
                if (Object.freeze) {
                  Object.freeze(children);
                }
              } else {
                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
              }
            } else {
              validateChildKeys(children, type);
            }
          }
        }
        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }
        return element;
      }
    } // These two functions exist to still get child warnings in dev

    var jsxDEV$1 = jsxWithValidation;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = jsxDEV$1;
  })();
}

/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "react-intl":
/*!****************************!*\
  !*** external "ReactIntl" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactIntl"];

/***/ }),

/***/ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* global __react_refresh_library__ */

const safeThis = __webpack_require__(/*! core-js-pure/features/global-this */ "./node_modules/core-js-pure/features/global-this.js");
const RefreshRuntime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
if (true) {
  if (typeof safeThis !== 'undefined') {
    var $RefreshInjected$ = '__reactRefreshInjected';
    // Namespace the injected flag (if necessary) for monorepo compatibility
    if (false) {}

    // Only inject the runtime if it hasn't been injected
    if (!safeThis[$RefreshInjected$]) {
      // Inject refresh runtime into global scope
      RefreshRuntime.injectIntoGlobalHook(safeThis);

      // Mark the runtime as injected to prevent double-injection
      safeThis[$RefreshInjected$] = true;
    }
  }
}

/***/ }),

/***/ "./node_modules/core-js-pure/actual/global-this.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/actual/global-this.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var parent = __webpack_require__(/*! ../stable/global-this */ "./node_modules/core-js-pure/stable/global-this.js");
module.exports = parent;

/***/ }),

/***/ "./node_modules/core-js-pure/es/global-this.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/es/global-this.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! ../modules/es.global-this */ "./node_modules/core-js-pure/modules/es.global-this.js");
module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

/***/ }),

/***/ "./node_modules/core-js-pure/features/global-this.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/global-this.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ../full/global-this */ "./node_modules/core-js-pure/full/global-this.js");

/***/ }),

/***/ "./node_modules/core-js-pure/full/global-this.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/full/global-this.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// TODO: remove from `core-js@4`
__webpack_require__(/*! ../modules/esnext.global-this */ "./node_modules/core-js-pure/modules/esnext.global-this.js");
var parent = __webpack_require__(/*! ../actual/global-this */ "./node_modules/core-js-pure/actual/global-this.js");
module.exports = parent;

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-callable.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-callable.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js-pure/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js-pure/internals/try-to-string.js");
var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js-pure/internals/function-uncurry-this.js");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-global-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-global-property.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function (key, value) {
  try {
    defineProperty(global, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global[key] = value;
  }
  return value;
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] !== 7;
});

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-all.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;
module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js-pure/internals/engine-user-agent.js");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
module.exports = version;

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js-pure/internals/function-apply.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js-pure/internals/function-uncurry-this-clause.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js-pure/internals/is-callable.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f);
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js-pure/internals/is-forced.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js-pure/internals/has-own-property.js");
var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0:
          return new NativeConstructor();
        case 1:
          return new NativeConstructor(a);
        case 2:
          return new NativeConstructor(a, b);
      }
      return new NativeConstructor(a, b, c);
    }
    return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;
  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;
  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind methods to global for calling from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changes in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }
    createNonEnumerableProperty(target, key, resultProperty);
    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-apply.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-apply.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js-pure/internals/function-bind-native.js");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js-pure/internals/function-uncurry-this-clause.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js-pure/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js-pure/internals/function-bind-native.js");
var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-native.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-native.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = function () {/* empty */}.bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-call.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-call.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js-pure/internals/function-bind-native.js");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this-clause.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this-clause.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js-pure/internals/function-uncurry-this.js");
module.exports = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-uncurry-this.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-uncurry-this.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js-pure/internals/function-bind-native.js");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js-pure/internals/is-callable.js");
var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};
module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-method.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-method.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js-pure/internals/a-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js-pure/internals/is-null-or-undefined.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
// eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
// eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
// eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || this || Function('return this')();

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has-own-property.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has-own-property.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js-pure/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js-pure/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a !== 7;
});

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js-pure/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");
var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-callable.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-callable.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $documentAll = __webpack_require__(/*! ../internals/document-all */ "./node_modules/core-js-pure/internals/document-all.js");
var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js-pure/internals/is-callable.js");
var replacement = /#|\.prototype\./;
var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-null-or-undefined.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-null-or-undefined.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js-pure/internals/is-callable.js");
var $documentAll = __webpack_require__(/*! ../internals/document-all */ "./node_modules/core-js-pure/internals/document-all.js");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = true;

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-symbol.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js-pure/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js-pure/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js-pure/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js-pure/internals/to-property-key.js");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js-pure/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js-pure/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js-pure/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) {/* empty */}
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-is-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-is-prototype-of.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js-pure/internals/function-uncurry-this.js");
module.exports = uncurryThis({}.isPrototypeOf);

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
  1: 2
}, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ordinary-to-primitive.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ordinary-to-primitive.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js-pure/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js-pure/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = {};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js-pure/internals/is-null-or-undefined.js");
var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js-pure/internals/define-global-property.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.33.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.33.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

/***/ }),

/***/ "./node_modules/core-js-pure/internals/symbol-constructor-detection.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/symbol-constructor-detection.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js-pure/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js-pure/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");
module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");
var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js-pure/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js-pure/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js-pure/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js-pure/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-property-key.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-property-key.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js-pure/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/try-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/try-to-string.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


var $String = String;
module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js-pure/internals/function-uncurry-this.js");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js-pure/internals/symbol-constructor-detection.js");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ "./node_modules/core-js-pure/internals/v8-prototype-define-bug.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/v8-prototype-define-bug.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {/* empty */}, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js-pure/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js-pure/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js-pure/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/symbol-constructor-detection */ "./node_modules/core-js-pure/internals/symbol-constructor-detection.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
  }
  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.global-this.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.global-this.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$({
  global: true,
  forced: global.globalThis !== global
}, {
  globalThis: global
});

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.global-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.global-this.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// TODO: Remove from `core-js@4`
__webpack_require__(/*! ../modules/es.global-this */ "./node_modules/core-js-pure/modules/es.global-this.js");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/global-this.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/global-this.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var parent = __webpack_require__(/*! ../es/global-this */ "./node_modules/core-js-pure/es/global-this.js");
module.exports = parent;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = function (moduleObject, moduleExports, webpackRequire) {
/******/ 				__webpack_require__.$Refresh$.setup(options.id);
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					if (typeof Promise !== 'undefined' && moduleObject.exports instanceof Promise) {
/******/ 						options.module.exports = options.module.exports.then(
/******/ 							(result) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return result;
/******/ 							},
/******/ 							(reason) => {
/******/ 								__webpack_require__.$Refresh$.cleanup(options.id);
/******/ 								return Promise.reject(reason);
/******/ 							}
/******/ 						);
/******/ 					} else {
/******/ 						__webpack_require__.$Refresh$.cleanup(options.id)
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		})
/******/ 		
/******/ 		__webpack_require__.$Refresh$ = {
/******/ 			register: () => (undefined),
/******/ 			signature: () => ((type) => (type)),
/******/ 			runtime: {
/******/ 				createSignatureFunctionForTransform: () => ((type) => (type)),
/******/ 				register: () => (undefined)
/******/ 			},
/******/ 			setup: (currentModuleId) => {
/******/ 				const prevModuleId = __webpack_require__.$Refresh$.moduleId;
/******/ 				const prevRegister = __webpack_require__.$Refresh$.register;
/******/ 				const prevSignature = __webpack_require__.$Refresh$.signature;
/******/ 				const prevCleanup = __webpack_require__.$Refresh$.cleanup;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.moduleId = currentModuleId;
/******/ 		
/******/ 				__webpack_require__.$Refresh$.register = (type, id) => {
/******/ 					const typeId = currentModuleId + " " + id;
/******/ 					__webpack_require__.$Refresh$.runtime.register(type, typeId);
/******/ 				}
/******/ 		
/******/ 				__webpack_require__.$Refresh$.signature = () => (__webpack_require__.$Refresh$.runtime.createSignatureFunctionForTransform());
/******/ 		
/******/ 				__webpack_require__.$Refresh$.cleanup = (cleanupModuleId) => {
/******/ 					if (currentModuleId === cleanupModuleId) {
/******/ 						__webpack_require__.$Refresh$.moduleId = prevModuleId;
/******/ 						__webpack_require__.$Refresh$.register = prevRegister;
/******/ 						__webpack_require__.$Refresh$.signature = prevSignature;
/******/ 						__webpack_require__.$Refresh$.cleanup = prevCleanup;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/apps/banner/index.tsx");
/******/ 	window.renderBanner = __webpack_exports__["default"];
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxHQUFHO0VBQ3BCO0VBQ0EsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQzdFLE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUM3RSxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQ3pCLE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFDekIsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDbkQsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDbkQsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDbkQsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDbkQsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUN6QixNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDN0UsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQzdFLE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQ25ELE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQ25ELE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUN0QyxNQUFNLEVBQUUsSUFBSTtFQUFFLE1BQU0sRUFBRSxJQUFJO0VBQzFCLE1BQU0sRUFBRSxJQUFJO0VBQUUsTUFBTSxFQUFFLElBQUk7RUFDMUIsTUFBTSxFQUFFLElBQUk7RUFDWjtFQUNBLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMxRSxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzFFLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDMUUsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMxRSxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQzdCLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzFFLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDMUUsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQ3pGLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUN6RixRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQzdCLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdB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O1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7O1dBRUQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFeERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvc3JjL2FwcHMvYmFubmVyL0Jhbm5lckNhcmRzLndpZGdldC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvc3JjL2FwcHMvYmFubmVyL2NvbXBvbmVudHMvQmFubmVyQ2FyZHMudHN4IiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9zcmMvYXBwcy9iYW5uZXIvaW5kZXgudHN4IiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9zcmMvY29tbW9uL2xvY2FsZS9mZXRjaFRyYW5zbGF0aW9uTWVzc2FnZXMudHMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3NyYy9jb21tb24vbm9ybWFsaXplV2lkZ2V0SW5wdXQudHMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3NyYy90eXBlcy9sb2NhbGUudHMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9AcG1tbXdoL3JlYWN0LXJlZnJlc2gtd2VicGFjay1wbHVnaW4vbGliL3J1bnRpbWUvUmVmcmVzaFV0aWxzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvbG9kYXNoLmNhbWVsY2FzZS9pbmRleC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL3JlYWN0LXJlZnJlc2gvcnVudGltZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0RE9NXCIiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0SW50bFwiIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvQHBtbW13aC9yZWFjdC1yZWZyZXNoLXdlYnBhY2stcGx1Z2luL2NsaWVudC9SZWFjdFJlZnJlc2hFbnRyeS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9hY3R1YWwvZ2xvYmFsLXRoaXMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvZ2xvYmFsLXRoaXMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZmVhdHVyZXMvZ2xvYmFsLXRoaXMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZnVsbC9nbG9iYWwtdGhpcy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYS1jYWxsYWJsZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RvY3VtZW50LWFsbC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZXhwb3J0LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mYWlscy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHkuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nZXQtbWV0aG9kLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nbG9iYWwuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHkuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtcHVyZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtc3ltYm9sLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9wYXRoLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2hhcmVkLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdWlkLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuZ2xvYmFsLXRoaXMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lc25leHQuZ2xvYmFsLXRoaXMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvc3RhYmxlL2dsb2JhbC10aGlzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9ydW50aW1lL3JlYWN0IHJlZnJlc2giLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svc3RhcnR1cCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBlbnRyeTogJy4vc3JjL2FwcHMvYmFubmVyL2luZGV4LnRzeCcsXG4gIHNob3J0Y29kZTogJ2Jhbm5lcicsXG4gIHRpdGxlOiAnQmFubmVyIENhcmRzJyxcbiAgc3RhdHVzOiAnc3RhYmxlJyxcbiAgZGVzY3JpcHRpb246ICdJbmNyZWRpYmxlIGJhbm5lciB0cmFkaW5nIGNhcmRzJyxcbiAgcHJldmlldzoge1xuICAgIHVybDogYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vaWZyYW1lLmh0bWw/aWQ9d2lkZ2V0cy1iYW5uZXItY2FyZHMtY29tcG9uZW50cyZ2aWV3TW9kZT1zdG9yeWAsXG4gIH0sXG4gIHVzZUV4dGVybmFsUGVlckRlcGVuZGVuY2llczogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3QtaW50bCddLFxuXG4gIGFkZGl0aW9uYWxDdXN0b21Qcm9wZXJ0aWVzOiB7XG4gICAgYXZhaWxhYmxlVHJhbnNsYXRpb25zOiBbXG4gICAgICAnYXInLFxuICAgICAgJ2RlJyxcbiAgICAgICdlbicsXG4gICAgICAnZXMnLFxuICAgICAgJ2ZyJyxcbiAgICAgICdpdCcsXG4gICAgICAnamEnLFxuICAgICAgJ2tvJyxcbiAgICAgICdwbCcsXG4gICAgICAncHQnLFxuICAgICAgJ3J1JyxcbiAgICAgICd0cicsXG4gICAgICAnemgnLFxuICAgIF0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmludGVyZmFjZSBDYXJkUHJvcHMge1xuICBoZWFkaW5nOiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBpbWdQYXRoOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHRDb2xvcjogc3RyaW5nO1xufVxuY29uc3Qgc3R5bGVzOiBSZWNvcmQ8c3RyaW5nLCBDU1NQcm9wZXJ0aWVzPiA9IHtcbiAgY2FyZDoge1xuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcbiAgICBib3hTaGFkb3c6ICcwLjEyNXJlbSAwLjEyNXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEpJyxcbiAgICBmb250RmFtaWx5OiAnaGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgbWF4V2lkdGg6ICc2M3JlbScsXG4gICAgaGVpZ2h0OiAnMjZyZW0nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGJhY2tncm91bmRTaXplOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXG4gICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAgfSxcbiAgY2FyZENvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgIGZvbnRTaXplOiAnOHJlbScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGxpbmVIZWlnaHQ6ICcxMDAlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgcGFkZGluZzogJzFyZW0nLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gIH0sXG4gIGNhcmRJbmZvOiB7XG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4wMSknLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjYpJyxcbiAgICBwYWRkaW5nOiAnMXJlbScsXG4gIH0sXG4gIGNhcmROYW1lOiB7XG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAnMnJlbScsXG4gIH0sXG4gIGNhcmREZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiAnMS4yNXJlbScsXG4gICAgcGFkZGluZzogJzFyZW0gMCcsXG4gIH0sXG4gIGNhcmRDYXRlZ29yeToge1xuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjQpJyxcbiAgICBmb250U2l6ZTogJzAuODVyZW0nLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgfSxcbn07XG5cbmNvbnN0IEJhbm5lckNhcmRzID0gKHtcbiAgaGVhZGluZyxcbiAgdGl0bGUsXG4gIHRleHRDb2xvcixcbiAgYmFja2dyb3VuZENvbG9yLFxuICBpbWdQYXRoLFxufTogQ2FyZFByb3BzKTogUmVhY3RFbGVtZW50ID0+IChcbiAgPGRpdlxuICAgIHN0eWxlPXt7XG4gICAgICAuLi5zdHlsZXMuY2FyZCxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2Nlc3MuZW52LlBVQkxJQ19BU1NFVFNfVVJMfS9iYW5uZXIvaW1hZ2VzLyR7aW1nUGF0aH0pYCxcbiAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICB9fVxuICA+XG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLmNhcmRJbmZvfT5cbiAgICAgIDxoMSBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZE5hbWUsIGNvbG9yOiB0ZXh0Q29sb3IgfX0+e2hlYWRpbmd9PC9oMT5cbiAgICAgIDxwIHN0eWxlPXt7IC4uLnN0eWxlcy5jYXJkRGVzY3JpcHRpb24sIGNvbG9yOiB0ZXh0Q29sb3IgfX0+e3RpdGxlfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJDYXJkcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IG5vcm1hbGl6ZVdpZGdldElucHV0IGZyb20gJy4uLy4uL2NvbW1vbi9ub3JtYWxpemVXaWRnZXRJbnB1dCc7XG5pbXBvcnQgQmFubmVyQ2FyZHMgZnJvbSAnLi9jb21wb25lbnRzL0Jhbm5lckNhcmRzJztcbmltcG9ydCB3aWRnZXREZWZpbml0aW9uIGZyb20gJy4vQmFubmVyQ2FyZHMud2lkZ2V0JztcblxuaW1wb3J0IHsgUmVuZGVyRm4gfSBmcm9tICcuLi8uLi90eXBlcy93aWRnZXRzJztcblxuY29uc3QgcmVuZGVyOiBSZW5kZXJGbiA9IGFzeW5jIGZ1bmN0aW9uIChpbnN0YW5jZUlkLCBsYW5nQ29kZSwgb3JpZ2luLCBjYikge1xuICBjb25zdCB7IGVsZW1lbnQsIGxvY2FsZSwgbWVzc2FnZXMgfSA9IGF3YWl0IG5vcm1hbGl6ZVdpZGdldElucHV0KFxuICAgIGluc3RhbmNlSWQsXG4gICAgbGFuZ0NvZGUsXG4gICAgd2lkZ2V0RGVmaW5pdGlvbixcbiAgKTtcbiAgaWYgKCFlbGVtZW50IHx8ICFsb2NhbGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxJbnRsUHJvdmlkZXIgbG9jYWxlPXtsb2NhbGV9IG1lc3NhZ2VzPXttZXNzYWdlc30+XG4gICAgICA8QmFubmVyQ2FyZHMgLz5cbiAgICA8L0ludGxQcm92aWRlcj4sXG4gICAgZWxlbWVudCxcbiAgICAoKSA9PiBjYihlbGVtZW50KSxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uLy4uL3R5cGVzL2xvY2FsZSc7XG5pbXBvcnQgeyBSZXNvbHZlZEludGxDb25maWcgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY29uc3QgZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzID0gYXN5bmMgKFxuICB3aWRnZXRJZDogc3RyaW5nLFxuICBsYW5nQ29kZTogc3RyaW5nLFxuKTogUHJvbWlzZTxSZXNvbHZlZEludGxDb25maWdbJ21lc3NhZ2VzJ10+ID0+IHtcbiAgY29uc3QgbG9jYWxlID0gbGFuZ0NvZGUgYXMgTG9jYWxlO1xuICAvLyBXZSBkb24ndCB3YW50IHRvIGRvIHRoZSBleHRyYSBmZXRjaGluZyBmb3IgRW5nbGlzaCBzaW5jZSBpdCdzIHRoZSBkZWZhdWx0LlxuICBpZiAobG9jYWxlID09PSBMb2NhbGUuRU4pIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHJlbGllcyBvbiB0aGUgQ1JBIGNvbnZlbnRpb24gZm9yIFBVQkxJQ19VUkwuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB3aW5kb3cuZmV0Y2goXG4gICAgICBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS90cmFuc2xhdGlvbnMvJHt3aWRnZXRJZH0vJHtsb2NhbGV9Lmpzb25gLFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElmIHNvbWV0aGluZyB3ZW50IHdyb25nIGRvIG5vdCBmYWlsIHRoZSB3aWRnZXQsIHVzZSB0aGUgZGVmYXVsdCBsYW5ndWFnZS5cbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoVHJhbnNsYXRpb25NZXNzYWdlcztcbiIsImltcG9ydCBjYW1lbGl6ZSBmcm9tICdsb2Rhc2guY2FtZWxjYXNlJztcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL3R5cGVzL2xvY2FsZSc7XG5pbXBvcnQgZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzIGZyb20gJy4vbG9jYWxlL2ZldGNoVHJhbnNsYXRpb25NZXNzYWdlcyc7XG5pbXBvcnQgeyBSZXNvbHZlZEludGxDb25maWcgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7IFRoZW1lcyB9IGZyb20gJy4uL3R5cGVzL2Rpc3BsYXlzJztcbmltcG9ydCB7IFNjaGVtYUxpdGUsIFdpZGdldERlZmluaXRpb24gfSBmcm9tICcuLi90eXBlcy93aWRnZXRzJztcblxuZXhwb3J0IHR5cGUgTm9ybWFsaXplZFdpZGdldElucHV0PFQ+ID0gUGFydGlhbDx7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBsb2NhbGU6IExvY2FsZTtcbiAgbWVzc2FnZXM6IFJlc29sdmVkSW50bENvbmZpZ1snbWVzc2FnZXMnXTtcbiAgcGFsZXR0ZTogVGhlbWVzO1xufT4gJiB7IHBhcmFtczogVCB9O1xuXG5hc3luYyBmdW5jdGlvbiBub3JtYWxpemVXaWRnZXRJbnB1dDxUPihcbiAgaW5zdGFuY2VJZDogc3RyaW5nLFxuICBsYW5nQ29kZTogc3RyaW5nLFxuICB3aWRnZXREZWZpbml0aW9uOiBXaWRnZXREZWZpbml0aW9uLFxuICByZWZpbmVJbnB1dFR5cGVzPzogKGlucHV0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4gVCxcbik6IFByb21pc2U8Tm9ybWFsaXplZFdpZGdldElucHV0PFQ+PiB7XG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5zdGFuY2VJZCk7XG4gIGVsZW1lbnQgPSBuZXcgSFRNTEVsZW1lbnQoKTtcbiAgY29uc3Qgd2lkZ2V0SWQgPSB3aWRnZXREZWZpbml0aW9uLnNob3J0Y29kZTtcbiAgY29uc3QgcGFsZXR0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBhbGV0dGUnKSBhcyBUaGVtZXM7XG4gIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzKHdpZGdldElkLCBsYW5nQ29kZSk7XG4gIGNvbnN0IHJhd1BhcmFtcyA9IHBhcnNlVXNlcklucHV0KHdpZGdldERlZmluaXRpb24sIGVsZW1lbnQpO1xuICAvLyBJZiB0aGVyZSBpcyBubyByZWZpbmVtZW50IG5lZWRlZCBpdCBtYXkgbWVhbiB0aGF0IHRoZSByYXcgcGFyYW1zIHBhcnNlXG4gIC8vIGRpcmVjdGx5IGludG8gVCwgb3IgdGhhdCB0aGVyZSBhcmUgbm8gcGFyYW1zLlxuICBjb25zdCBwYXJhbXMgPSByZWZpbmVJbnB1dFR5cGVzXG4gICAgPyByZWZpbmVJbnB1dFR5cGVzKHJhd1BhcmFtcylcbiAgICA6IChyYXdQYXJhbXMgYXMgVCk7XG4gIHJldHVybiB7IGVsZW1lbnQsIGxvY2FsZTogbGFuZ0NvZGUgYXMgTG9jYWxlLCBwYWxldHRlLCBtZXNzYWdlcywgcGFyYW1zIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVzZXJJbnB1dChcbiAgd2lkZ2V0RGVmaW5pdGlvbjogV2lkZ2V0RGVmaW5pdGlvbixcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIC8vIEZpcnN0IHdlIG5lZWQgdG8ga25vdyB3aGF0IGFyZSB0aGUgaW5wdXQgb3B0aW9ucy5cbiAgY29uc3Qgc2NoZW1hUHJvcHMgPVxuICAgIHdpZGdldERlZmluaXRpb24/LnNldHRpbmdzU2NoZW1hPy5wcm9wZXJ0aWVzPy5maWVsZHM/LnByb3BlcnRpZXMgfHwge307XG4gIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHNjaGVtYVByb3BzKTtcbiAgcmV0dXJuIHByb3BOYW1lcy5yZWR1Y2UoXG4gICAgKHBhcmFtcywgcHJvcE5hbWU6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0+ICh7XG4gICAgICAuLi5wYXJhbXMsXG4gICAgICBbY2FtZWxpemUocHJvcE5hbWUpXTogcGFyc2VWYWx1ZShcbiAgICAgICAgcHJvcE5hbWUsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHNjaGVtYVByb3BzPy5bcHJvcE5hbWVdIHx8IHsgdHlwZTogJ251bGwnIH0sXG4gICAgICApLFxuICAgIH0pLFxuICAgIHt9LFxuICApO1xufVxuXG5mdW5jdGlvbiBwYXJzZVZhbHVlKFxuICBwcm9wTmFtZTogc3RyaW5nLFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgeyB0eXBlIH06IFNjaGVtYUxpdGUsXG4pOiBhbnkge1xuICB0eXBlID0gJ251bGwnO1xuICBsZXQgYXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtwcm9wTmFtZX1gKTtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYXR0cmlidXRlID0gJyc7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZTtcbiAgfVxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICBhdHRyaWJ1dGUgPSAnMCc7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZS5pbmNsdWRlcygnLicpXG4gICAgICA/IHBhcnNlRmxvYXQoYXR0cmlidXRlKVxuICAgICAgOiBwYXJzZUludChhdHRyaWJ1dGUsIDEwKTtcbiAgfVxuICBpZiAodHlwZSA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIGF0dHJpYnV0ZSA9ICcwJztcbiAgICAvLyBUaGUgQ01TIGVuY29kZXMgYm9vbGVhbnMgYXMgJzAnIGFuZCAnMScuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZSAhPT0gJzAnO1xuICB9XG4gIGF0dHJpYnV0ZSA9ICdudWxsJztcbiAgcmV0dXJuIEpTT04ucGFyc2UoYXR0cmlidXRlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbm9ybWFsaXplV2lkZ2V0SW5wdXQ7XG4iLCJleHBvcnQgZW51bSBMb2NhbGUge1xuICBBUiA9ICdhcicsXG4gIERFID0gJ2RlJyxcbiAgRU4gPSAnZW4nLFxuICBFUyA9ICdlcycsXG4gIEZSID0gJ2ZyJyxcbiAgSVQgPSAnaXQnLFxuICBKQSA9ICdqYScsXG4gIEtPID0gJ2tvJyxcbiAgUEwgPSAncGwnLFxuICBQVCA9ICdwdCcsXG4gIFJVID0gJ3J1JyxcbiAgVFIgPSAndHInLFxuICBaSCA9ICd6aCcsXG59XG5cbmNvbnN0IGF2YWlsYWJsZUxhbmdjb2RlczogTG9jYWxlW10gPSBbXG4gIExvY2FsZS5BUixcbiAgTG9jYWxlLkRFLFxuICBMb2NhbGUuRU4sXG4gIExvY2FsZS5FUyxcbiAgTG9jYWxlLkZSLFxuICBMb2NhbGUuSVQsXG4gIExvY2FsZS5KQSxcbiAgTG9jYWxlLktPLFxuICBMb2NhbGUuUEwsXG4gIExvY2FsZS5QVCxcbiAgTG9jYWxlLlJVLFxuICBMb2NhbGUuVFIsXG4gIExvY2FsZS5aSCxcbl07XG4iLCIvKiBnbG9iYWwgX193ZWJwYWNrX3JlcXVpcmVfXyAqL1xudmFyIFJlZnJlc2ggPSByZXF1aXJlKCdyZWFjdC1yZWZyZXNoL3J1bnRpbWUnKTtcblxuLyoqXG4gKiBFeHRyYWN0cyBleHBvcnRzIGZyb20gYSB3ZWJwYWNrIG1vZHVsZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlSWQgQSBXZWJwYWNrIG1vZHVsZSBJRC5cbiAqIEByZXR1cm5zIHsqfSBBbiBleHBvcnRzIG9iamVjdCBmcm9tIHRoZSBtb2R1bGUuXG4gKi9cbmZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMobW9kdWxlSWQpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGVJZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBgbW9kdWxlSWRgIGlzIHVuYXZhaWxhYmxlLCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB0aGlzIG1vZHVsZSBpcyBub3QgaW4gdGhlIGNhY2hlLFxuICAgIC8vIHdoaWNoIG1lYW5zIHdlIHdvbid0IGJlIGFibGUgdG8gY2FwdHVyZSBhbnkgZXhwb3J0cyxcbiAgICAvLyBhbmQgdGh1cyB0aGV5IGNhbm5vdCBiZSByZWZyZXNoZWQgc2FmZWx5LlxuICAgIC8vIFRoZXNlIGFyZSBsaWtlbHkgcnVudGltZSBvciBkeW5hbWljYWxseSBnZW5lcmF0ZWQgbW9kdWxlcy5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgbWF5YmVNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuICBpZiAodHlwZW9mIG1heWJlTW9kdWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGBtb2R1bGVJZGAgaXMgYXZhaWxhYmxlIGJ1dCB0aGUgbW9kdWxlIGluIGNhY2hlIGlzIHVuYXZhaWxhYmxlLFxuICAgIC8vIHdoaWNoIGluZGljYXRlcyB0aGUgbW9kdWxlIGlzIHNvbWVob3cgY29ycnVwdGVkIChlLmcuIGJyb2tlbiBXZWJwYWNhayBgbW9kdWxlYCBnbG9iYWxzKS5cbiAgICAvLyBXZSB3aWxsIHdhcm4gdGhlIHVzZXIgKGFzIHRoaXMgaXMgbGlrZWx5IGEgbWlzdGFrZSkgYW5kIGFzc3VtZSB0aGV5IGNhbm5vdCBiZSByZWZyZXNoZWQuXG4gICAgY29uc29sZS53YXJuKCdbUmVhY3QgUmVmcmVzaF0gRmFpbGVkIHRvIGdldCBleHBvcnRzIGZvciBtb2R1bGU6ICcgKyBtb2R1bGVJZCArICcuJyk7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdmFyIGV4cG9ydHNPclByb21pc2UgPSBtYXliZU1vZHVsZS5leHBvcnRzO1xuICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIGV4cG9ydHNPclByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgcmV0dXJuIGV4cG9ydHNPclByb21pc2UudGhlbihmdW5jdGlvbiAoZXhwb3J0cykge1xuICAgICAgcmV0dXJuIGV4cG9ydHM7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGV4cG9ydHNPclByb21pc2U7XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc2lnbmF0dXJlIG9mIGEgUmVhY3QgcmVmcmVzaCBib3VuZGFyeS5cbiAqIElmIHRoaXMgc2lnbmF0dXJlIGNoYW5nZXMsIGl0J3MgdW5zYWZlIHRvIGFjY2VwdCB0aGUgYm91bmRhcnkuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiB0aGUgb25lIGluIFtNZXRyb10oaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL21ldHJvL2Jsb2IvOTA3ZDZhZjIyYWM2ZWJlNTg1NzJiZTQxOGU5MjUzYTkwNjY1ZWNiZC9wYWNrYWdlcy9tZXRyby9zcmMvbGliL3BvbHlmaWxscy9yZXF1aXJlLmpzI0w3OTUtTDgxNikuXG4gKiBAcGFyYW0geyp9IG1vZHVsZUV4cG9ydHMgQSBXZWJwYWNrIG1vZHVsZSBleHBvcnRzIG9iamVjdC5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQSBSZWFjdCByZWZyZXNoIGJvdW5kYXJ5IHNpZ25hdHVyZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gZ2V0UmVhY3RSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobW9kdWxlRXhwb3J0cykge1xuICB2YXIgc2lnbmF0dXJlID0gW107XG4gIHNpZ25hdHVyZS5wdXNoKFJlZnJlc2guZ2V0RmFtaWx5QnlUeXBlKG1vZHVsZUV4cG9ydHMpKTtcblxuICBpZiAobW9kdWxlRXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgaWYgKGtleSA9PT0gJ19fZXNNb2R1bGUnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzaWduYXR1cmUucHVzaChrZXkpO1xuICAgIHNpZ25hdHVyZS5wdXNoKFJlZnJlc2guZ2V0RmFtaWx5QnlUeXBlKG1vZHVsZUV4cG9ydHNba2V5XSkpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZGF0YSBvYmplY3QgdG8gYmUgcmV0YWluZWQgYWNyb3NzIHJlZnJlc2hlcy5cbiAqIFRoaXMgb2JqZWN0IHNob3VsZCBub3QgdHJhbnN0aXZlbHkgcmVmZXJlbmNlIHByZXZpb3VzIGV4cG9ydHMsXG4gKiB3aGljaCBjYW4gZm9ybSBpbmZpbml0ZSBjaGFpbiBvZiBvYmplY3RzIGFjcm9zcyByZWZyZXNoZXMsIHdoaWNoIGNhbiBwcmVzc3VyZSBSQU0uXG4gKlxuICogQHBhcmFtIHsqfSBtb2R1bGVFeHBvcnRzIEEgV2VicGFjayBtb2R1bGUgZXhwb3J0cyBvYmplY3QuXG4gKiBAcmV0dXJucyB7Kn0gQSBSZWFjdCByZWZyZXNoIGJvdW5kYXJ5IHNpZ25hdHVyZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gZ2V0V2VicGFja0hvdERhdGEobW9kdWxlRXhwb3J0cykge1xuICByZXR1cm4ge1xuICAgIHNpZ25hdHVyZTogZ2V0UmVhY3RSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobW9kdWxlRXhwb3J0cyksXG4gICAgaXNSZWFjdFJlZnJlc2hCb3VuZGFyeTogaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShtb2R1bGVFeHBvcnRzKSxcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgaGVscGVyIHRoYXQgcGVyZm9ybXMgYSBkZWxheWVkIFJlYWN0IHJlZnJlc2guXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oZnVuY3Rpb24oKTogdm9pZCk6IHZvaWR9IEEgZGVib3VuY2VkIFJlYWN0IHJlZnJlc2ggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlYm91bmNlVXBkYXRlKCkge1xuICAvKipcbiAgICogQSBjYWNoZWQgc2V0VGltZW91dCBoYW5kbGVyLlxuICAgKiBAdHlwZSB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgdmFyIHJlZnJlc2hUaW1lb3V0O1xuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyByZWFjdCByZWZyZXNoIG9uIGEgZGVsYXkgYW5kIGNsZWFycyB0aGUgZXJyb3Igb3ZlcmxheS5cbiAgICogQHBhcmFtIHtmdW5jdGlvbigpOiB2b2lkfSBjYWxsYmFja1xuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIGVucXVldWVVcGRhdGUoY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIHJlZnJlc2hUaW1lb3V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVmcmVzaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVmcmVzaFRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIFJlZnJlc2gucGVyZm9ybVJlYWN0UmVmcmVzaCgpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfSwgMzApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnF1ZXVlVXBkYXRlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbGwgZXhwb3J0cyBhcmUgbGlrZWx5IGEgUmVhY3QgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIG9uZSBpbiBbTWV0cm9dKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9tZXRyby9ibG9iL2ZlYmRiYTIzODMxMTNjODgyOTZjNjFlMjhlNGVmNmE3ZjQ5MzlmZGEvcGFja2FnZXMvbWV0cm8vc3JjL2xpYi9wb2x5ZmlsbHMvcmVxdWlyZS5qcyNMNzQ4LUw3NzQpLlxuICogQHBhcmFtIHsqfSBtb2R1bGVFeHBvcnRzIEEgV2VicGFjayBtb2R1bGUgZXhwb3J0cyBvYmplY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgZXhwb3J0cyBhcmUgUmVhY3QgY29tcG9uZW50IGxpa2UuXG4gKi9cbmZ1bmN0aW9uIGlzUmVhY3RSZWZyZXNoQm91bmRhcnkobW9kdWxlRXhwb3J0cykge1xuICBpZiAoUmVmcmVzaC5pc0xpa2VseUNvbXBvbmVudFR5cGUobW9kdWxlRXhwb3J0cykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAobW9kdWxlRXhwb3J0cyA9PT0gdW5kZWZpbmVkIHx8IG1vZHVsZUV4cG9ydHMgPT09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaGFzRXhwb3J0cyA9IGZhbHNlO1xuICB2YXIgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSB0cnVlO1xuICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgIGhhc0V4cG9ydHMgPSB0cnVlO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgRVMgTW9kdWxlIGluZGljYXRvciBmbGFnXG4gICAgaWYgKGtleSA9PT0gJ19fZXNNb2R1bGUnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBXZSBjYW4gKGFuZCBoYXZlIHRvKSBzYWZlbHkgZXhlY3V0ZSBnZXR0ZXJzIGhlcmUsXG4gICAgLy8gYXMgV2VicGFjayBtYW51YWxseSBhc3NpZ25zIGhhcm1vbnkgZXhwb3J0cyB0byBnZXR0ZXJzLFxuICAgIC8vIHdpdGhvdXQgYW55IHNpZGUtZWZmZWN0cyBhdHRhY2hlZC5cbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svYmxvYi9iOTMwNDg2NDNmZTc0ZGUyYTY5MzE3NTU5MTFkYTEyMTJkZjU1ODk3L2xpYi9NYWluVGVtcGxhdGUuanMjTDI4MVxuICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICBpZiAoIVJlZnJlc2guaXNMaWtlbHlDb21wb25lbnRUeXBlKGV4cG9ydFZhbHVlKSkge1xuICAgICAgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaGFzRXhwb3J0cyAmJiBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgZXhwb3J0cyBhcmUgbGlrZWx5IGEgUmVhY3QgY29tcG9uZW50IGFuZCByZWdpc3RlcnMgdGhlbS5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBvbmUgaW4gW01ldHJvXShodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svbWV0cm8vYmxvYi9mZWJkYmEyMzgzMTEzYzg4Mjk2YzYxZTI4ZTRlZjZhN2Y0OTM5ZmRhL3BhY2thZ2VzL21ldHJvL3NyYy9saWIvcG9seWZpbGxzL3JlcXVpcmUuanMjTDgxOC1MODM1KS5cbiAqIEBwYXJhbSB7Kn0gbW9kdWxlRXhwb3J0cyBBIFdlYnBhY2sgbW9kdWxlIGV4cG9ydHMgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZUlkIEEgV2VicGFjayBtb2R1bGUgSUQuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlkKSB7XG4gIGlmIChSZWZyZXNoLmlzTGlrZWx5Q29tcG9uZW50VHlwZShtb2R1bGVFeHBvcnRzKSkge1xuICAgIC8vIFJlZ2lzdGVyIG1vZHVsZS5leHBvcnRzIGlmIGl0IGlzIGxpa2VseSBhIGNvbXBvbmVudFxuICAgIFJlZnJlc2gucmVnaXN0ZXIobW9kdWxlRXhwb3J0cywgbW9kdWxlSWQgKyAnICVleHBvcnRzJScpO1xuICB9XG5cbiAgaWYgKG1vZHVsZUV4cG9ydHMgPT09IHVuZGVmaW5lZCB8fCBtb2R1bGVFeHBvcnRzID09PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIHRoZSBleHBvcnRzLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgLy8gU2tpcCByZWdpc3RlcmluZyB0aGUgRVMgTW9kdWxlIGluZGljYXRvclxuICAgIGlmIChrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgIGlmIChSZWZyZXNoLmlzTGlrZWx5Q29tcG9uZW50VHlwZShleHBvcnRWYWx1ZSkpIHtcbiAgICAgIHZhciB0eXBlSUQgPSBtb2R1bGVJZCArICcgJWV4cG9ydHMlICcgKyBrZXk7XG4gICAgICBSZWZyZXNoLnJlZ2lzdGVyKGV4cG9ydFZhbHVlLCB0eXBlSUQpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvbXBhcmVzIHByZXZpb3VzIGFuZCBuZXh0IG1vZHVsZSBvYmplY3RzIHRvIGNoZWNrIGZvciBtdXRhdGVkIGJvdW5kYXJpZXMuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiB0aGUgb25lIGluIFtNZXRyb10oaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL21ldHJvL2Jsb2IvOTA3ZDZhZjIyYWM2ZWJlNTg1NzJiZTQxOGU5MjUzYTkwNjY1ZWNiZC9wYWNrYWdlcy9tZXRyby9zcmMvbGliL3BvbHlmaWxscy9yZXF1aXJlLmpzI0w3NzYtTDc5MikuXG4gKiBAcGFyYW0geyp9IHByZXZTaWduYXR1cmUgVGhlIHNpZ25hdHVyZSBvZiB0aGUgY3VycmVudCBXZWJwYWNrIG1vZHVsZSBleHBvcnRzIG9iamVjdC5cbiAqIEBwYXJhbSB7Kn0gbmV4dFNpZ25hdHVyZSBUaGUgc2lnbmF0dXJlIG9mIHRoZSBuZXh0IFdlYnBhY2sgbW9kdWxlIGV4cG9ydHMgb2JqZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIFJlYWN0IHJlZnJlc2ggYm91bmRhcnkgc2hvdWxkIGJlIGludmFsaWRhdGVkLlxuICovXG5mdW5jdGlvbiBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnkocHJldlNpZ25hdHVyZSwgbmV4dFNpZ25hdHVyZSkge1xuICBpZiAocHJldlNpZ25hdHVyZS5sZW5ndGggIT09IG5leHRTaWduYXR1cmUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRTaWduYXR1cmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAocHJldlNpZ25hdHVyZVtpXSAhPT0gbmV4dFNpZ25hdHVyZVtpXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgZW5xdWV1ZVVwZGF0ZSA9IGNyZWF0ZURlYm91bmNlVXBkYXRlKCk7XG5mdW5jdGlvbiBleGVjdXRlUnVudGltZShtb2R1bGVFeHBvcnRzLCBtb2R1bGVJZCwgd2VicGFja0hvdCwgcmVmcmVzaE92ZXJsYXksIGlzVGVzdCkge1xuICByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gobW9kdWxlRXhwb3J0cywgbW9kdWxlSWQpO1xuXG4gIGlmICh3ZWJwYWNrSG90KSB7XG4gICAgdmFyIGlzSG90VXBkYXRlID0gISF3ZWJwYWNrSG90LmRhdGE7XG4gICAgdmFyIHByZXZEYXRhO1xuICAgIGlmIChpc0hvdFVwZGF0ZSkge1xuICAgICAgcHJldkRhdGEgPSB3ZWJwYWNrSG90LmRhdGEucHJldkRhdGE7XG4gICAgfVxuXG4gICAgaWYgKGlzUmVhY3RSZWZyZXNoQm91bmRhcnkobW9kdWxlRXhwb3J0cykpIHtcbiAgICAgIHdlYnBhY2tIb3QuZGlzcG9zZShcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgdG8gcGVyZm9ybXMgYSBmdWxsIHJlZnJlc2ggaWYgUmVhY3QgaGFzIHVucmVjb3ZlcmFibGUgZXJyb3JzLFxuICAgICAgICAgKiBhbmQgYWxzbyBjYWNoZXMgdGhlIHRvLWJlLWRpc3Bvc2VkIG1vZHVsZS5cbiAgICAgICAgICogQHBhcmFtIHsqfSBkYXRhIEEgaG90IG1vZHVsZSBkYXRhIG9iamVjdCBmcm9tIFdlYnBhY2sgSE1SLlxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhvdERpc3Bvc2VDYWxsYmFjayhkYXRhKSB7XG4gICAgICAgICAgLy8gV2UgaGF2ZSB0byBtdXRhdGUgdGhlIGRhdGEgb2JqZWN0IHRvIGdldCBkYXRhIHJlZ2lzdGVyZWQgYW5kIGNhY2hlZFxuICAgICAgICAgIGRhdGEucHJldkRhdGEgPSBnZXRXZWJwYWNrSG90RGF0YShtb2R1bGVFeHBvcnRzKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHdlYnBhY2tIb3QuYWNjZXB0KFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gZXJyb3IgaGFuZGxlciB0byBhbGxvdyBzZWxmLXJlY292ZXJpbmcgYmVoYXZpb3Vycy5cbiAgICAgICAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGV2YWx1YXRpb24gb2YgYSBtb2R1bGUuXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaG90RXJyb3JIYW5kbGVyKGVycm9yKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZWZyZXNoT3ZlcmxheSAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVmcmVzaE92ZXJsYXkpIHtcbiAgICAgICAgICAgIHJlZnJlc2hPdmVybGF5LmhhbmRsZVJ1bnRpbWVFcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBpc1Rlc3QgIT09ICd1bmRlZmluZWQnICYmIGlzVGVzdCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5vbkhvdEFjY2VwdEVycm9yKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5vbkhvdEFjY2VwdEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF0uaG90LmFjY2VwdChob3RFcnJvckhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAoaXNIb3RVcGRhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXZEYXRhICYmXG4gICAgICAgICAgcHJldkRhdGEuaXNSZWFjdFJlZnJlc2hCb3VuZGFyeSAmJlxuICAgICAgICAgIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShcbiAgICAgICAgICAgIHByZXZEYXRhLnNpZ25hdHVyZSxcbiAgICAgICAgICAgIGdldFJlYWN0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKG1vZHVsZUV4cG9ydHMpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB3ZWJwYWNrSG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnF1ZXVlVXBkYXRlKFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGZ1bmN0aW9uIHRvIGRpc21pc3MgdGhlIGVycm9yIG92ZXJsYXkgYWZ0ZXIgcGVyZm9ybWluZyBSZWFjdCByZWZyZXNoLlxuICAgICAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNhbGxiYWNrKCkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlZnJlc2hPdmVybGF5ICE9PSAndW5kZWZpbmVkJyAmJiByZWZyZXNoT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIHJlZnJlc2hPdmVybGF5LmNsZWFyUnVudGltZUVycm9ycygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNIb3RVcGRhdGUgJiYgdHlwZW9mIHByZXZEYXRhICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3ZWJwYWNrSG90LmludmFsaWRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZnJlZXplKHtcbiAgZW5xdWV1ZVVwZGF0ZTogZW5xdWV1ZVVwZGF0ZSxcbiAgZXhlY3V0ZVJ1bnRpbWU6IGV4ZWN1dGVSdW50aW1lLFxuICBnZXRNb2R1bGVFeHBvcnRzOiBnZXRNb2R1bGVFeHBvcnRzLFxuICBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5OiBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5LFxuICByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2g6IHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaCxcbn0pO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggd29yZHMgY29tcG9zZWQgb2YgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMuICovXG52YXIgcmVBc2NpaVdvcmQgPSAvW15cXHgwMC1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3Zl0rL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjMnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmMCcsXG4gICAgcnNEaW5nYmF0UmFuZ2UgPSAnXFxcXHUyNzAwLVxcXFx1MjdiZicsXG4gICAgcnNMb3dlclJhbmdlID0gJ2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZicsXG4gICAgcnNNYXRoT3BSYW5nZSA9ICdcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3JyxcbiAgICByc05vbkNoYXJSYW5nZSA9ICdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmYnLFxuICAgIHJzUHVuY3R1YXRpb25SYW5nZSA9ICdcXFxcdTIwMDAtXFxcXHUyMDZmJyxcbiAgICByc1NwYWNlUmFuZ2UgPSAnIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDAnLFxuICAgIHJzVXBwZXJSYW5nZSA9ICdBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGUnLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJyxcbiAgICByc0JyZWFrUmFuZ2UgPSByc01hdGhPcFJhbmdlICsgcnNOb25DaGFyUmFuZ2UgKyByc1B1bmN0dWF0aW9uUmFuZ2UgKyByc1NwYWNlUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIixcbiAgICByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNCcmVhayA9ICdbJyArIHJzQnJlYWtSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib01hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlICsgJ10nLFxuICAgIHJzRGlnaXRzID0gJ1xcXFxkKycsXG4gICAgcnNEaW5nYmF0ID0gJ1snICsgcnNEaW5nYmF0UmFuZ2UgKyAnXScsXG4gICAgcnNMb3dlciA9ICdbJyArIHJzTG93ZXJSYW5nZSArICddJyxcbiAgICByc01pc2MgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArIHJzQnJlYWtSYW5nZSArIHJzRGlnaXRzICsgcnNEaW5nYmF0UmFuZ2UgKyByc0xvd2VyUmFuZ2UgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzVXBwZXIgPSAnWycgKyByc1VwcGVyUmFuZ2UgKyAnXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcnNMb3dlck1pc2MgPSAnKD86JyArIHJzTG93ZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNVcHBlck1pc2MgPSAnKD86JyArIHJzVXBwZXIgKyAnfCcgKyByc01pc2MgKyAnKScsXG4gICAgcnNPcHRMb3dlckNvbnRyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86ZHxsbHxtfHJlfHN8dHx2ZSkpPycsXG4gICAgcnNPcHRVcHBlckNvbnRyID0gJyg/OicgKyByc0Fwb3MgKyAnKD86RHxMTHxNfFJFfFN8VHxWRSkpPycsXG4gICAgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXEsXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRMb3dlckNvbnRyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXJNaXNjICsgJysnICsgcnNPcHRVcHBlckNvbnRyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTG93ZXJNaXNjLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTG93ZXJNaXNjICsgJysnICsgcnNPcHRMb3dlckNvbnRyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRVcHBlckNvbnRyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHdpdGggW3plcm8td2lkdGggam9pbmVycyBvciBjb2RlIHBvaW50cyBmcm9tIHRoZSBhc3RyYWwgcGxhbmVzXShodHRwOi8vZWV2LmVlL2Jsb2cvMjAxNS8wOS8xMi9kYXJrLWNvcm5lcnMtb2YtdW5pY29kZS8pLiAqL1xudmFyIHJlSGFzVW5pY29kZSA9IFJlZ0V4cCgnWycgKyByc1pXSiArIHJzQXN0cmFsUmFuZ2UgICsgcnNDb21ib01hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlICsgcnNWYXJSYW5nZSArICddJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHRoYXQgbmVlZCBhIG1vcmUgcm9idXN0IHJlZ2V4cCB0byBtYXRjaCB3b3Jkcy4gKi9cbnZhciByZUhhc1VuaWNvZGVXb3JkID0gL1thLXpdW0EtWl18W0EtWl17Mix9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKiogVXNlZCB0byBtYXAgTGF0aW4gVW5pY29kZSBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuICovXG52YXIgZGVidXJyZWRMZXR0ZXJzID0ge1xuICAvLyBMYXRpbi0xIFN1cHBsZW1lbnQgYmxvY2suXG4gICdcXHhjMCc6ICdBJywgICdcXHhjMSc6ICdBJywgJ1xceGMyJzogJ0EnLCAnXFx4YzMnOiAnQScsICdcXHhjNCc6ICdBJywgJ1xceGM1JzogJ0EnLFxuICAnXFx4ZTAnOiAnYScsICAnXFx4ZTEnOiAnYScsICdcXHhlMic6ICdhJywgJ1xceGUzJzogJ2EnLCAnXFx4ZTQnOiAnYScsICdcXHhlNSc6ICdhJyxcbiAgJ1xceGM3JzogJ0MnLCAgJ1xceGU3JzogJ2MnLFxuICAnXFx4ZDAnOiAnRCcsICAnXFx4ZjAnOiAnZCcsXG4gICdcXHhjOCc6ICdFJywgICdcXHhjOSc6ICdFJywgJ1xceGNhJzogJ0UnLCAnXFx4Y2InOiAnRScsXG4gICdcXHhlOCc6ICdlJywgICdcXHhlOSc6ICdlJywgJ1xceGVhJzogJ2UnLCAnXFx4ZWInOiAnZScsXG4gICdcXHhjYyc6ICdJJywgICdcXHhjZCc6ICdJJywgJ1xceGNlJzogJ0knLCAnXFx4Y2YnOiAnSScsXG4gICdcXHhlYyc6ICdpJywgICdcXHhlZCc6ICdpJywgJ1xceGVlJzogJ2knLCAnXFx4ZWYnOiAnaScsXG4gICdcXHhkMSc6ICdOJywgICdcXHhmMSc6ICduJyxcbiAgJ1xceGQyJzogJ08nLCAgJ1xceGQzJzogJ08nLCAnXFx4ZDQnOiAnTycsICdcXHhkNSc6ICdPJywgJ1xceGQ2JzogJ08nLCAnXFx4ZDgnOiAnTycsXG4gICdcXHhmMic6ICdvJywgICdcXHhmMyc6ICdvJywgJ1xceGY0JzogJ28nLCAnXFx4ZjUnOiAnbycsICdcXHhmNic6ICdvJywgJ1xceGY4JzogJ28nLFxuICAnXFx4ZDknOiAnVScsICAnXFx4ZGEnOiAnVScsICdcXHhkYic6ICdVJywgJ1xceGRjJzogJ1UnLFxuICAnXFx4ZjknOiAndScsICAnXFx4ZmEnOiAndScsICdcXHhmYic6ICd1JywgJ1xceGZjJzogJ3UnLFxuICAnXFx4ZGQnOiAnWScsICAnXFx4ZmQnOiAneScsICdcXHhmZic6ICd5JyxcbiAgJ1xceGM2JzogJ0FlJywgJ1xceGU2JzogJ2FlJyxcbiAgJ1xceGRlJzogJ1RoJywgJ1xceGZlJzogJ3RoJyxcbiAgJ1xceGRmJzogJ3NzJyxcbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQSBibG9jay5cbiAgJ1xcdTAxMDAnOiAnQScsICAnXFx1MDEwMic6ICdBJywgJ1xcdTAxMDQnOiAnQScsXG4gICdcXHUwMTAxJzogJ2EnLCAgJ1xcdTAxMDMnOiAnYScsICdcXHUwMTA1JzogJ2EnLFxuICAnXFx1MDEwNic6ICdDJywgICdcXHUwMTA4JzogJ0MnLCAnXFx1MDEwYSc6ICdDJywgJ1xcdTAxMGMnOiAnQycsXG4gICdcXHUwMTA3JzogJ2MnLCAgJ1xcdTAxMDknOiAnYycsICdcXHUwMTBiJzogJ2MnLCAnXFx1MDEwZCc6ICdjJyxcbiAgJ1xcdTAxMGUnOiAnRCcsICAnXFx1MDExMCc6ICdEJywgJ1xcdTAxMGYnOiAnZCcsICdcXHUwMTExJzogJ2QnLFxuICAnXFx1MDExMic6ICdFJywgICdcXHUwMTE0JzogJ0UnLCAnXFx1MDExNic6ICdFJywgJ1xcdTAxMTgnOiAnRScsICdcXHUwMTFhJzogJ0UnLFxuICAnXFx1MDExMyc6ICdlJywgICdcXHUwMTE1JzogJ2UnLCAnXFx1MDExNyc6ICdlJywgJ1xcdTAxMTknOiAnZScsICdcXHUwMTFiJzogJ2UnLFxuICAnXFx1MDExYyc6ICdHJywgICdcXHUwMTFlJzogJ0cnLCAnXFx1MDEyMCc6ICdHJywgJ1xcdTAxMjInOiAnRycsXG4gICdcXHUwMTFkJzogJ2cnLCAgJ1xcdTAxMWYnOiAnZycsICdcXHUwMTIxJzogJ2cnLCAnXFx1MDEyMyc6ICdnJyxcbiAgJ1xcdTAxMjQnOiAnSCcsICAnXFx1MDEyNic6ICdIJywgJ1xcdTAxMjUnOiAnaCcsICdcXHUwMTI3JzogJ2gnLFxuICAnXFx1MDEyOCc6ICdJJywgICdcXHUwMTJhJzogJ0knLCAnXFx1MDEyYyc6ICdJJywgJ1xcdTAxMmUnOiAnSScsICdcXHUwMTMwJzogJ0knLFxuICAnXFx1MDEyOSc6ICdpJywgICdcXHUwMTJiJzogJ2knLCAnXFx1MDEyZCc6ICdpJywgJ1xcdTAxMmYnOiAnaScsICdcXHUwMTMxJzogJ2knLFxuICAnXFx1MDEzNCc6ICdKJywgICdcXHUwMTM1JzogJ2onLFxuICAnXFx1MDEzNic6ICdLJywgICdcXHUwMTM3JzogJ2snLCAnXFx1MDEzOCc6ICdrJyxcbiAgJ1xcdTAxMzknOiAnTCcsICAnXFx1MDEzYic6ICdMJywgJ1xcdTAxM2QnOiAnTCcsICdcXHUwMTNmJzogJ0wnLCAnXFx1MDE0MSc6ICdMJyxcbiAgJ1xcdTAxM2EnOiAnbCcsICAnXFx1MDEzYyc6ICdsJywgJ1xcdTAxM2UnOiAnbCcsICdcXHUwMTQwJzogJ2wnLCAnXFx1MDE0Mic6ICdsJyxcbiAgJ1xcdTAxNDMnOiAnTicsICAnXFx1MDE0NSc6ICdOJywgJ1xcdTAxNDcnOiAnTicsICdcXHUwMTRhJzogJ04nLFxuICAnXFx1MDE0NCc6ICduJywgICdcXHUwMTQ2JzogJ24nLCAnXFx1MDE0OCc6ICduJywgJ1xcdTAxNGInOiAnbicsXG4gICdcXHUwMTRjJzogJ08nLCAgJ1xcdTAxNGUnOiAnTycsICdcXHUwMTUwJzogJ08nLFxuICAnXFx1MDE0ZCc6ICdvJywgICdcXHUwMTRmJzogJ28nLCAnXFx1MDE1MSc6ICdvJyxcbiAgJ1xcdTAxNTQnOiAnUicsICAnXFx1MDE1Nic6ICdSJywgJ1xcdTAxNTgnOiAnUicsXG4gICdcXHUwMTU1JzogJ3InLCAgJ1xcdTAxNTcnOiAncicsICdcXHUwMTU5JzogJ3InLFxuICAnXFx1MDE1YSc6ICdTJywgICdcXHUwMTVjJzogJ1MnLCAnXFx1MDE1ZSc6ICdTJywgJ1xcdTAxNjAnOiAnUycsXG4gICdcXHUwMTViJzogJ3MnLCAgJ1xcdTAxNWQnOiAncycsICdcXHUwMTVmJzogJ3MnLCAnXFx1MDE2MSc6ICdzJyxcbiAgJ1xcdTAxNjInOiAnVCcsICAnXFx1MDE2NCc6ICdUJywgJ1xcdTAxNjYnOiAnVCcsXG4gICdcXHUwMTYzJzogJ3QnLCAgJ1xcdTAxNjUnOiAndCcsICdcXHUwMTY3JzogJ3QnLFxuICAnXFx1MDE2OCc6ICdVJywgICdcXHUwMTZhJzogJ1UnLCAnXFx1MDE2Yyc6ICdVJywgJ1xcdTAxNmUnOiAnVScsICdcXHUwMTcwJzogJ1UnLCAnXFx1MDE3Mic6ICdVJyxcbiAgJ1xcdTAxNjknOiAndScsICAnXFx1MDE2Yic6ICd1JywgJ1xcdTAxNmQnOiAndScsICdcXHUwMTZmJzogJ3UnLCAnXFx1MDE3MSc6ICd1JywgJ1xcdTAxNzMnOiAndScsXG4gICdcXHUwMTc0JzogJ1cnLCAgJ1xcdTAxNzUnOiAndycsXG4gICdcXHUwMTc2JzogJ1knLCAgJ1xcdTAxNzcnOiAneScsICdcXHUwMTc4JzogJ1knLFxuICAnXFx1MDE3OSc6ICdaJywgICdcXHUwMTdiJzogJ1onLCAnXFx1MDE3ZCc6ICdaJyxcbiAgJ1xcdTAxN2EnOiAneicsICAnXFx1MDE3Yyc6ICd6JywgJ1xcdTAxN2UnOiAneicsXG4gICdcXHUwMTMyJzogJ0lKJywgJ1xcdTAxMzMnOiAnaWonLFxuICAnXFx1MDE1Mic6ICdPZScsICdcXHUwMTUzJzogJ29lJyxcbiAgJ1xcdTAxNDknOiBcIiduXCIsICdcXHUwMTdmJzogJ3NzJ1xufTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eU9mKG9iamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSBzeW1ib2wgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZShzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZS50ZXN0KHN0cmluZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIGEgd29yZCBjb21wb3NlZCBvZiBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgd29yZCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlV29yZChzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZVdvcmQudGVzdChzdHJpbmcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZSkgfHwgW107XG59XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmxvd2VyRmlyc3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgYFN0cmluZ2AgY2FzZSBtZXRob2QgdG8gdXNlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FzZUZpcnN0KG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICB2YXIgc3RyU3ltYm9scyA9IGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgICAgPyBzdHJpbmdUb0FycmF5KHN0cmluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGNociA9IHN0clN5bWJvbHNcbiAgICAgID8gc3RyU3ltYm9sc1swXVxuICAgICAgOiBzdHJpbmcuY2hhckF0KDApO1xuXG4gICAgdmFyIHRyYWlsaW5nID0gc3RyU3ltYm9sc1xuICAgICAgPyBjYXN0U2xpY2Uoc3RyU3ltYm9scywgMSkuam9pbignJylcbiAgICAgIDogc3RyaW5nLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGNoclttZXRob2ROYW1lXSgpICsgdHJhaWxpbmc7XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gW2NhbWVsIGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NhbWVsQ2FzZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhbWVsIGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYW1lbENhc2UoJ0ZvbyBCYXInKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKlxuICogXy5jYW1lbENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICpcbiAqIF8uY2FtZWxDYXNlKCdfX0ZPT19CQVJfXycpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqL1xudmFyIGNhbWVsQ2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICB3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gY2FwaXRhbGl6ZSh3b3JkKSA6IHdvcmQpO1xufSk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYCB0byB1cHBlciBjYXNlIGFuZCB0aGUgcmVtYWluaW5nXG4gKiB0byBsb3dlciBjYXNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FwaXRhbGl6ZSgnRlJFRCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiB1cHBlckZpcnN0KHRvU3RyaW5nKHN0cmluZykudG9Mb3dlckNhc2UoKSk7XG59XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AgdG8gdXBwZXIgY2FzZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51cHBlckZpcnN0KCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqXG4gKiBfLnVwcGVyRmlyc3QoJ0ZSRUQnKTtcbiAqIC8vID0+ICdGUkVEJ1xuICovXG52YXIgdXBwZXJGaXJzdCA9IGNyZWF0ZUNhc2VGaXJzdCgndG9VcHBlckNhc2UnKTtcblxuLyoqXG4gKiBTcGxpdHMgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7UmVnRXhwfHN0cmluZ30gW3BhdHRlcm5dIFRoZSBwYXR0ZXJuIHRvIG1hdGNoIHdvcmRzLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnXVxuICpcbiAqIF8ud29yZHMoJ2ZyZWQsIGJhcm5leSwgJiBwZWJibGVzJywgL1teLCBdKy9nKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAnJicsICdwZWJibGVzJ11cbiAqL1xuZnVuY3Rpb24gd29yZHMoc3RyaW5nLCBwYXR0ZXJuLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBwYXR0ZXJuID0gZ3VhcmQgPyB1bmRlZmluZWQgOiBwYXR0ZXJuO1xuXG4gIGlmIChwYXR0ZXJuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSA/IHVuaWNvZGVXb3JkcyhzdHJpbmcpIDogYXNjaWlXb3JkcyhzdHJpbmcpO1xuICB9XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocGF0dGVybikgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxDYXNlO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHJlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xudmFyIFJFQUNUX0NBQ0hFX1RZUEUgPSAweGVhZTQ7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xuICBSRUFDVF9DQUNIRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jYWNoZScpO1xufVxuXG52YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwOyAvLyBXZSBuZXZlciByZW1vdmUgdGhlc2UgYXNzb2NpYXRpb25zLlxuLy8gSXQncyBPSyB0byByZWZlcmVuY2UgZmFtaWxpZXMsIGJ1dCB1c2UgV2Vha01hcC9TZXQgZm9yIHR5cGVzLlxuXG52YXIgYWxsRmFtaWxpZXNCeUlEID0gbmV3IE1hcCgpO1xudmFyIGFsbEZhbWlsaWVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xudmFyIGFsbFNpZ25hdHVyZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgV2Vha01hcCBpcyByZWFkIGJ5IFJlYWN0LCBzbyB3ZSBvbmx5IHB1dCBmYW1pbGllc1xuLy8gdGhhdCBoYXZlIGFjdHVhbGx5IGJlZW4gZWRpdGVkIGhlcmUuIFRoaXMga2VlcHMgY2hlY2tzIGZhc3QuXG4vLyAkRmxvd0lzc3VlXG5cbnZhciB1cGRhdGVkRmFtaWxpZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7IC8vIFRoaXMgaXMgY2xlYXJlZCBvbiBldmVyeSBwZXJmb3JtUmVhY3RSZWZyZXNoKCkgY2FsbC5cbi8vIEl0IGlzIGFuIGFycmF5IG9mIFtGYW1pbHksIE5leHRUeXBlXSB0dXBsZXMuXG5cbnZhciBwZW5kaW5nVXBkYXRlcyA9IFtdOyAvLyBUaGlzIGlzIGluamVjdGVkIGJ5IHRoZSByZW5kZXJlciB2aWEgRGV2VG9vbHMgZ2xvYmFsIGhvb2suXG5cbnZhciBoZWxwZXJzQnlSZW5kZXJlcklEID0gbmV3IE1hcCgpO1xudmFyIGhlbHBlcnNCeVJvb3QgPSBuZXcgTWFwKCk7IC8vIFdlIGtlZXAgdHJhY2sgb2YgbW91bnRlZCByb290cyBzbyB3ZSBjYW4gc2NoZWR1bGUgdXBkYXRlcy5cblxudmFyIG1vdW50ZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSWYgYSByb290IGNhcHR1cmVzIGFuIGVycm9yLCB3ZSByZW1lbWJlciBpdCBzbyB3ZSBjYW4gcmV0cnkgb24gZWRpdC5cblxudmFyIGZhaWxlZFJvb3RzID0gbmV3IFNldCgpOyAvLyBJbiBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IFdlYWtNYXAsIHdlIGFsc28gcmVtZW1iZXIgdGhlIGxhc3QgZWxlbWVudCBmb3IgZXZlcnkgcm9vdC5cbi8vIEl0IG5lZWRzIHRvIGJlIHdlYWsgYmVjYXVzZSB3ZSBkbyB0aGlzIGV2ZW4gZm9yIHJvb3RzIHRoYXQgZmFpbGVkIHRvIG1vdW50LlxuLy8gSWYgdGhlcmUgaXMgbm8gV2Vha01hcCwgd2Ugd29uJ3QgYXR0ZW1wdCB0byBkbyByZXRyeWluZy5cbi8vICRGbG93SXNzdWVcblxudmFyIHJvb3RFbGVtZW50cyA9IC8vICRGbG93SXNzdWVcbnR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gbmV3IFdlYWtNYXAoKSA6IG51bGw7XG52YXIgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjb21wdXRlRnVsbEtleShzaWduYXR1cmUpIHtcbiAgaWYgKHNpZ25hdHVyZS5mdWxsS2V5ICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNpZ25hdHVyZS5mdWxsS2V5O1xuICB9XG5cbiAgdmFyIGZ1bGxLZXkgPSBzaWduYXR1cmUub3duS2V5O1xuICB2YXIgaG9va3M7XG5cbiAgdHJ5IHtcbiAgICBob29rcyA9IHNpZ25hdHVyZS5nZXRDdXN0b21Ib29rcygpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIGV4cHJlc3Npb24gbGlrZSBGb28udXNlU29tZXRoaW5nXG4gICAgLy8gZGVwZW5kcyBvbiBGb28gd2hpY2ggaXMgbGF6aWx5IGluaXRpYWxpemVkIGR1cmluZyByZW5kZXJpbmcuXG4gICAgLy8gSW4gdGhhdCBjYXNlIGp1c3QgYXNzdW1lIHdlJ2xsIGhhdmUgdG8gcmVtb3VudC5cbiAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgIHJldHVybiBmdWxsS2V5O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBob29rID0gaG9va3NbaV07XG5cbiAgICBpZiAodHlwZW9mIGhvb2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFNvbWV0aGluZydzIHdyb25nLiBBc3N1bWUgd2UgbmVlZCB0byByZW1vdW50LlxuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgICAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICAgICAgcmV0dXJuIGZ1bGxLZXk7XG4gICAgfVxuXG4gICAgdmFyIG5lc3RlZEhvb2tTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChob29rKTtcblxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vIHNpZ25hdHVyZSBtZWFucyBIb29rIHdhc24ndCBpbiB0aGUgc291cmNlIGNvZGUsIGUuZy4gaW4gYSBsaWJyYXJ5LlxuICAgICAgLy8gV2UnbGwgc2tpcCBpdCBiZWNhdXNlIHdlIGNhbiBhc3N1bWUgaXQgd29uJ3QgY2hhbmdlIGR1cmluZyB0aGlzIHNlc3Npb24uXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgbmVzdGVkSG9va0tleSA9IGNvbXB1dGVGdWxsS2V5KG5lc3RlZEhvb2tTaWduYXR1cmUpO1xuXG4gICAgaWYgKG5lc3RlZEhvb2tTaWduYXR1cmUuZm9yY2VSZXNldCkge1xuICAgICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bGxLZXkgKz0gJ1xcbi0tLVxcbicgKyBuZXN0ZWRIb29rS2V5O1xuICB9XG5cbiAgc2lnbmF0dXJlLmZ1bGxLZXkgPSBmdWxsS2V5O1xuICByZXR1cm4gZnVsbEtleTtcbn1cblxuZnVuY3Rpb24gaGF2ZUVxdWFsU2lnbmF0dXJlcyhwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgdmFyIHByZXZTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChwcmV2VHlwZSk7XG4gIHZhciBuZXh0U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQobmV4dFR5cGUpO1xuXG4gIGlmIChwcmV2U2lnbmF0dXJlID09PSB1bmRlZmluZWQgJiYgbmV4dFNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjb21wdXRlRnVsbEtleShwcmV2U2lnbmF0dXJlKSAhPT0gY29tcHV0ZUZ1bGxLZXkobmV4dFNpZ25hdHVyZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmV4dFNpZ25hdHVyZS5mb3JjZVJlc2V0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDbGFzcyh0eXBlKSB7XG4gIHJldHVybiB0eXBlLnByb3RvdHlwZSAmJiB0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbihwcmV2VHlwZSwgbmV4dFR5cGUpIHtcbiAgaWYgKGlzUmVhY3RDbGFzcyhwcmV2VHlwZSkgfHwgaXNSZWFjdENsYXNzKG5leHRUeXBlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUZhbWlseSh0eXBlKSB7XG4gIC8vIE9ubHkgY2hlY2sgdXBkYXRlZCB0eXBlcyB0byBrZWVwIGxvb2t1cHMgZmFzdC5cbiAgcmV0dXJuIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG59IC8vIElmIHdlIGRpZG4ndCBjYXJlIGFib3V0IElFMTEsIHdlIGNvdWxkIHVzZSBuZXcgTWFwL1NldChpdGVyYWJsZSkuXG5cblxuZnVuY3Rpb24gY2xvbmVNYXAobWFwKSB7XG4gIHZhciBjbG9uZSA9IG5ldyBNYXAoKTtcbiAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBjbG9uZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCkge1xuICB2YXIgY2xvbmUgPSBuZXcgU2V0KCk7XG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNsb25lLmFkZCh2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59IC8vIFRoaXMgaXMgYSBzYWZldHkgbWVjaGFuaXNtIHRvIHByb3RlY3QgYWdhaW5zdCByb2d1ZSBnZXR0ZXJzIGFuZCBQcm94aWVzLlxuXG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gb2JqZWN0W3Byb3BlcnR5XTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSW50ZW50aW9uYWxseSBpZ25vcmUuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwZXJmb3JtUmVhY3RSZWZyZXNoKCkge1xuXG4gIGlmIChwZW5kaW5nVXBkYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChpc1BlcmZvcm1pbmdSZWZyZXNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpc1BlcmZvcm1pbmdSZWZyZXNoID0gdHJ1ZTtcblxuICB0cnkge1xuICAgIHZhciBzdGFsZUZhbWlsaWVzID0gbmV3IFNldCgpO1xuICAgIHZhciB1cGRhdGVkRmFtaWxpZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHVwZGF0ZXMgPSBwZW5kaW5nVXBkYXRlcztcbiAgICBwZW5kaW5nVXBkYXRlcyA9IFtdO1xuICAgIHVwZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGZhbWlseSA9IF9yZWZbMF0sXG4gICAgICAgICAgbmV4dFR5cGUgPSBfcmVmWzFdO1xuICAgICAgLy8gTm93IHRoYXQgd2UgZ290IGEgcmVhbCBlZGl0LCB3ZSBjYW4gY3JlYXRlIGFzc29jaWF0aW9uc1xuICAgICAgLy8gdGhhdCB3aWxsIGJlIHJlYWQgYnkgdGhlIFJlYWN0IHJlY29uY2lsZXIuXG4gICAgICB2YXIgcHJldlR5cGUgPSBmYW1pbHkuY3VycmVudDtcbiAgICAgIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5zZXQocHJldlR5cGUsIGZhbWlseSk7XG4gICAgICB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuc2V0KG5leHRUeXBlLCBmYW1pbHkpO1xuICAgICAgZmFtaWx5LmN1cnJlbnQgPSBuZXh0VHlwZTsgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBzaG91bGQgYmUgYSByZS1yZW5kZXIgb3IgYSByZS1tb3VudC5cblxuICAgICAgaWYgKGNhblByZXNlcnZlU3RhdGVCZXR3ZWVuKHByZXZUeXBlLCBuZXh0VHlwZSkpIHtcbiAgICAgICAgdXBkYXRlZEZhbWlsaWVzLmFkZChmYW1pbHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhbGVGYW1pbGllcy5hZGQoZmFtaWx5KTtcbiAgICAgIH1cbiAgICB9KTsgLy8gVE9ETzogcmVuYW1lIHRoZXNlIGZpZWxkcyB0byBzb21ldGhpbmcgbW9yZSBtZWFuaW5nZnVsLlxuXG4gICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgIHVwZGF0ZWRGYW1pbGllczogdXBkYXRlZEZhbWlsaWVzLFxuICAgICAgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIHJlLXJlbmRlciBwcmVzZXJ2aW5nIHN0YXRlXG4gICAgICBzdGFsZUZhbWlsaWVzOiBzdGFsZUZhbWlsaWVzIC8vIEZhbWlsaWVzIHRoYXQgd2lsbCBiZSByZW1vdW50ZWRcblxuICAgIH07XG4gICAgaGVscGVyc0J5UmVuZGVyZXJJRC5mb3JFYWNoKGZ1bmN0aW9uIChoZWxwZXJzKSB7XG4gICAgICAvLyBFdmVuIGlmIHRoZXJlIGFyZSBubyByb290cywgc2V0IHRoZSBoYW5kbGVyIG9uIGZpcnN0IHVwZGF0ZS5cbiAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGF0IGlmICpuZXcqIHJvb3RzIGFyZSBtb3VudGVkLCB0aGV5J2xsIHVzZSB0aGUgcmVzb2x2ZSBoYW5kbGVyLlxuICAgICAgaGVscGVycy5zZXRSZWZyZXNoSGFuZGxlcihyZXNvbHZlRmFtaWx5KTtcbiAgICB9KTtcbiAgICB2YXIgZGlkRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgZmlyc3RFcnJvciA9IG51bGw7IC8vIFdlIHNuYXBzaG90IG1hcHMgYW5kIHNldHMgdGhhdCBhcmUgbXV0YXRlZCBkdXJpbmcgY29tbWl0cy5cbiAgICAvLyBJZiB3ZSBkb24ndCBkbyB0aGlzLCB0aGVyZSBpcyBhIHJpc2sgdGhleSB3aWxsIGJlIG11dGF0ZWQgd2hpbGVcbiAgICAvLyB3ZSBpdGVyYXRlIG92ZXIgdGhlbS4gRm9yIGV4YW1wbGUsIHRyeWluZyB0byByZWNvdmVyIGEgZmFpbGVkIHJvb3RcbiAgICAvLyBtYXkgY2F1c2UgYW5vdGhlciByb290IHRvIGJlIGFkZGVkIHRvIHRoZSBmYWlsZWQgbGlzdCAtLSBhbiBpbmZpbml0ZSBsb29wLlxuXG4gICAgdmFyIGZhaWxlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChmYWlsZWRSb290cyk7XG4gICAgdmFyIG1vdW50ZWRSb290c1NuYXBzaG90ID0gY2xvbmVTZXQobW91bnRlZFJvb3RzKTtcbiAgICB2YXIgaGVscGVyc0J5Um9vdFNuYXBzaG90ID0gY2xvbmVNYXAoaGVscGVyc0J5Um9vdCk7XG4gICAgZmFpbGVkUm9vdHNTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJvb3RTbmFwc2hvdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmYWlsZWRSb290cy5oYXMocm9vdCkpIHsvLyBObyBsb25nZXIgZmFpbGVkLlxuICAgICAgfVxuXG4gICAgICBpZiAocm9vdEVsZW1lbnRzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb290RWxlbWVudHMuaGFzKHJvb3QpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnQgPSByb290RWxlbWVudHMuZ2V0KHJvb3QpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlUm9vdChyb290LCBlbGVtZW50KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoIWRpZEVycm9yKSB7XG4gICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGZpcnN0RXJyb3IgPSBlcnI7XG4gICAgICAgIH0gLy8gS2VlcCB0cnlpbmcgb3RoZXIgcm9vdHMuXG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb3VudGVkUm9vdHNTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJvb3RTbmFwc2hvdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtb3VudGVkUm9vdHMuaGFzKHJvb3QpKSB7Ly8gTm8gbG9uZ2VyIG1vdW50ZWQuXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGhlbHBlcnMuc2NoZWR1bGVSZWZyZXNoKHJvb3QsIHVwZGF0ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCFkaWRFcnJvcikge1xuICAgICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmaXJzdEVycm9yID0gZXJyO1xuICAgICAgICB9IC8vIEtlZXAgdHJ5aW5nIG90aGVyIHJvb3RzLlxuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgIHRocm93IGZpcnN0RXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZTtcbiAgfSBmaW5hbGx5IHtcbiAgICBpc1BlcmZvcm1pbmdSZWZyZXNoID0gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyKHR5cGUsIGlkKSB7XG4gIHtcbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBhbiBlZGdlIGNhc2UsIGUuZy4gaWYgd2UgcmVnaXN0ZXJcbiAgICAvLyByZXR1cm4gdmFsdWUgb2YgYSBIT0MgYnV0IGl0IHJldHVybnMgYSBjYWNoZWQgY29tcG9uZW50LlxuICAgIC8vIElnbm9yZSBhbnl0aGluZyBidXQgdGhlIGZpcnN0IHJlZ2lzdHJhdGlvbiBmb3IgZWFjaCB0eXBlLlxuXG5cbiAgICBpZiAoYWxsRmFtaWxpZXNCeVR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDcmVhdGUgZmFtaWx5IG9yIHJlbWVtYmVyIHRvIHVwZGF0ZSBpdC5cbiAgICAvLyBOb25lIG9mIHRoaXMgYm9va2tlZXBpbmcgYWZmZWN0cyByZWNvbmNpbGlhdGlvblxuICAgIC8vIHVudGlsIHRoZSBmaXJzdCBwZXJmb3JtUmVhY3RSZWZyZXNoKCkgY2FsbCBhYm92ZS5cblxuXG4gICAgdmFyIGZhbWlseSA9IGFsbEZhbWlsaWVzQnlJRC5nZXQoaWQpO1xuXG4gICAgaWYgKGZhbWlseSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmYW1pbHkgPSB7XG4gICAgICAgIGN1cnJlbnQ6IHR5cGVcbiAgICAgIH07XG4gICAgICBhbGxGYW1pbGllc0J5SUQuc2V0KGlkLCBmYW1pbHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nVXBkYXRlcy5wdXNoKFtmYW1pbHksIHR5cGVdKTtcbiAgICB9XG5cbiAgICBhbGxGYW1pbGllc0J5VHlwZS5zZXQodHlwZSwgZmFtaWx5KTsgLy8gVmlzaXQgaW5uZXIgdHlwZXMgYmVjYXVzZSB3ZSBtaWdodCBub3QgaGF2ZSByZWdpc3RlcmVkIHRoZW0uXG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoZ2V0UHJvcGVydHkodHlwZSwgJyQkdHlwZW9mJykpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUucmVuZGVyLCBpZCArICckcmVuZGVyJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgcmVnaXN0ZXIodHlwZS50eXBlLCBpZCArICckdHlwZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gc2V0U2lnbmF0dXJlKHR5cGUsIGtleSkge1xuICB2YXIgZm9yY2VSZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG4gIHZhciBnZXRDdXN0b21Ib29rcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdW5kZWZpbmVkO1xuXG4gIHtcbiAgICBpZiAoIWFsbFNpZ25hdHVyZXNCeVR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICBhbGxTaWduYXR1cmVzQnlUeXBlLnNldCh0eXBlLCB7XG4gICAgICAgIGZvcmNlUmVzZXQ6IGZvcmNlUmVzZXQsXG4gICAgICAgIG93bktleToga2V5LFxuICAgICAgICBmdWxsS2V5OiBudWxsLFxuICAgICAgICBnZXRDdXN0b21Ib29rczogZ2V0Q3VzdG9tSG9va3MgfHwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSAvLyBWaXNpdCBpbm5lciB0eXBlcyBiZWNhdXNlIHdlIG1pZ2h0IG5vdCBoYXZlIHNpZ25lZCB0aGVtLlxuXG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHN3aXRjaCAoZ2V0UHJvcGVydHkodHlwZSwgJyQkdHlwZW9mJykpIHtcbiAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLnJlbmRlciwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgc2V0U2lnbmF0dXJlKHR5cGUudHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59IC8vIFRoaXMgaXMgbGF6aWx5IGNhbGxlZCBkdXJpbmcgZmlyc3QgcmVuZGVyIGZvciBhIHR5cGUuXG4vLyBJdCBjYXB0dXJlcyBIb29rIGxpc3QgYXQgdGhhdCB0aW1lIHNvIGlubGluZSByZXF1aXJlcyBkb24ndCBicmVhayBjb21wYXJpc29ucy5cblxuZnVuY3Rpb24gY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlKHR5cGUpIHtcbiAge1xuICAgIHZhciBzaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldCh0eXBlKTtcblxuICAgIGlmIChzaWduYXR1cmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29tcHV0ZUZ1bGxLZXkoc2lnbmF0dXJlKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEZhbWlseUJ5SUQoaWQpIHtcbiAge1xuICAgIHJldHVybiBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0RmFtaWx5QnlUeXBlKHR5cGUpIHtcbiAge1xuICAgIHJldHVybiBhbGxGYW1pbGllc0J5VHlwZS5nZXQodHlwZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMoZmFtaWxpZXMpIHtcbiAge1xuICAgIHZhciBhZmZlY3RlZEluc3RhbmNlcyA9IG5ldyBTZXQoKTtcbiAgICBtb3VudGVkUm9vdHMuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zdGFuY2VzRm9yUm9vdCA9IGhlbHBlcnMuZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoKHJvb3QsIGZhbWlsaWVzKTtcbiAgICAgIGluc3RhbmNlc0ZvclJvb3QuZm9yRWFjaChmdW5jdGlvbiAoaW5zdCkge1xuICAgICAgICBhZmZlY3RlZEluc3RhbmNlcy5hZGQoaW5zdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWZmZWN0ZWRJbnN0YW5jZXM7XG4gIH1cbn1cbmZ1bmN0aW9uIGluamVjdEludG9HbG9iYWxIb29rKGdsb2JhbE9iamVjdCkge1xuICB7XG4gICAgLy8gRm9yIFJlYWN0IE5hdGl2ZSwgdGhlIGdsb2JhbCBob29rIHdpbGwgYmUgc2V0IHVwIGJ5IHJlcXVpcmUoJ3JlYWN0LWRldnRvb2xzLWNvcmUnKS5cbiAgICAvLyBUaGF0IGNvZGUgd2lsbCBydW4gYmVmb3JlIHVzLiBTbyB3ZSBuZWVkIHRvIG1vbmtleXBhdGNoIGZ1bmN0aW9ucyBvbiBleGlzdGluZyBob29rLlxuICAgIC8vIEZvciBSZWFjdCBXZWIsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSB0aGUgZXh0ZW5zaW9uLlxuICAgIC8vIFRoaXMgd2lsbCBhbHNvIHJ1biBiZWZvcmUgdXMuXG4gICAgdmFyIGhvb2sgPSBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4gICAgaWYgKGhvb2sgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSG93ZXZlciwgaWYgdGhlcmUgaXMgbm8gRGV2VG9vbHMgZXh0ZW5zaW9uLCB3ZSdsbCBuZWVkIHRvIHNldCB1cCB0aGUgZ2xvYmFsIGhvb2sgb3Vyc2VsdmVzLlxuICAgICAgLy8gTm90ZSB0aGF0IGluIHRoaXMgY2FzZSBpdCdzIGltcG9ydGFudCB0aGF0IHJlbmRlcmVyIGNvZGUgcnVucyAqYWZ0ZXIqIHRoaXMgbWV0aG9kIGNhbGwuXG4gICAgICAvLyBPdGhlcndpc2UsIHRoZSByZW5kZXJlciB3aWxsIHRoaW5rIHRoYXQgdGhlcmUgaXMgbm8gZ2xvYmFsIGhvb2ssIGFuZCB3b24ndCBkbyB0aGUgaW5qZWN0aW9uLlxuICAgICAgdmFyIG5leHRJRCA9IDA7XG4gICAgICBnbG9iYWxPYmplY3QuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID0gaG9vayA9IHtcbiAgICAgICAgcmVuZGVyZXJzOiBuZXcgTWFwKCksXG4gICAgICAgIHN1cHBvcnRzRmliZXI6IHRydWUsXG4gICAgICAgIGluamVjdDogZnVuY3Rpb24gKGluamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIG5leHRJRCsrO1xuICAgICAgICB9LFxuICAgICAgICBvblNjaGVkdWxlRmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7fSxcbiAgICAgICAgb25Db21taXRGaWJlclJvb3Q6IGZ1bmN0aW9uIChpZCwgcm9vdCwgbWF5YmVQcmlvcml0eUxldmVsLCBkaWRFcnJvcikge30sXG4gICAgICAgIG9uQ29tbWl0RmliZXJVbm1vdW50OiBmdW5jdGlvbiAoKSB7fVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaG9vay5pc0Rpc2FibGVkKSB7XG4gICAgICAvLyBUaGlzIGlzbid0IGEgcmVhbCBwcm9wZXJ0eSBvbiB0aGUgaG9vaywgYnV0IGl0IGNhbiBiZSBzZXQgdG8gb3B0IG91dFxuICAgICAgLy8gb2YgRGV2VG9vbHMgaW50ZWdyYXRpb24gYW5kIGFzc29jaWF0ZWQgd2FybmluZ3MgYW5kIGxvZ3MuXG4gICAgICAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuICAgICAgY29uc29sZVsnd2FybiddKCdTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiAnICsgJ0Zhc3QgUmVmcmVzaCBpcyBub3QgY29tcGF0aWJsZSB3aXRoIHRoaXMgc2hpbSBhbmQgd2lsbCBiZSBkaXNhYmxlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEhlcmUsIHdlIGp1c3Qgd2FudCB0byBnZXQgYSByZWZlcmVuY2UgdG8gc2NoZWR1bGVSZWZyZXNoLlxuXG5cbiAgICB2YXIgb2xkSW5qZWN0ID0gaG9vay5pbmplY3Q7XG5cbiAgICBob29rLmluamVjdCA9IGZ1bmN0aW9uIChpbmplY3RlZCkge1xuICAgICAgdmFyIGlkID0gb2xkSW5qZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0eXBlb2YgaW5qZWN0ZWQuc2NoZWR1bGVSZWZyZXNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBpbmplY3RlZC5zZXRSZWZyZXNoSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIHZlcnNpb24gc3VwcG9ydHMgUmVhY3QgUmVmcmVzaC5cbiAgICAgICAgaGVscGVyc0J5UmVuZGVyZXJJRC5zZXQoaWQsIGluamVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlkO1xuICAgIH07IC8vIERvIHRoZSBzYW1lIGZvciBhbnkgYWxyZWFkeSBpbmplY3RlZCByb290cy5cbiAgICAvLyBUaGlzIGlzIHVzZWZ1bCBpZiBSZWFjdERPTSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTc2MjZcblxuXG4gICAgaG9vay5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbiAoaW5qZWN0ZWQsIGlkKSB7XG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIHN1cHBvcnRzIFJlYWN0IFJlZnJlc2guXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XG4gICAgICB9XG4gICAgfSk7IC8vIFdlIGFsc28gd2FudCB0byB0cmFjayBjdXJyZW50bHkgbW91bnRlZCByb290cy5cblxuICAgIHZhciBvbGRPbkNvbW1pdEZpYmVyUm9vdCA9IGhvb2sub25Db21taXRGaWJlclJvb3Q7XG5cbiAgICB2YXIgb2xkT25TY2hlZHVsZUZpYmVyUm9vdCA9IGhvb2sub25TY2hlZHVsZUZpYmVyUm9vdCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGhvb2sub25TY2hlZHVsZUZpYmVyUm9vdCA9IGZ1bmN0aW9uIChpZCwgcm9vdCwgY2hpbGRyZW4pIHtcbiAgICAgIGlmICghaXNQZXJmb3JtaW5nUmVmcmVzaCkge1xuICAgICAgICAvLyBJZiBpdCB3YXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQsIGRvbid0IGF0dGVtcHQgdG8gcmVzdG9yZS5cbiAgICAgICAgLy8gVGhpcyBpbmNsdWRlcyBpbnRlbnRpb25hbGx5IHNjaGVkdWxlZCB1bm1vdW50cy5cbiAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuXG4gICAgICAgIGlmIChyb290RWxlbWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICByb290RWxlbWVudHMuc2V0KHJvb3QsIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkT25TY2hlZHVsZUZpYmVyUm9vdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBob29rLm9uQ29tbWl0RmliZXJSb290ID0gZnVuY3Rpb24gKGlkLCByb290LCBtYXliZVByaW9yaXR5TGV2ZWwsIGRpZEVycm9yKSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJlbmRlcmVySUQuZ2V0KGlkKTtcblxuICAgICAgaWYgKGhlbHBlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoZWxwZXJzQnlSb290LnNldChyb290LCBoZWxwZXJzKTtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSByb290LmN1cnJlbnQ7XG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSBjdXJyZW50LmFsdGVybmF0ZTsgLy8gV2UgbmVlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGlzIHJvb3QgaGFzIGp1c3QgKHVuKW1vdW50ZWQuXG4gICAgICAgIC8vIFRoaXMgbG9naWMgaXMgY29weS1wYXN0ZWQgZnJvbSBzaW1pbGFyIGxvZ2ljIGluIHRoZSBEZXZUb29scyBiYWNrZW5kLlxuICAgICAgICAvLyBJZiB0aGlzIGJyZWFrcyB3aXRoIHNvbWUgcmVmYWN0b3JpbmcsIHlvdSdsbCB3YW50IHRvIHVwZGF0ZSBEZXZUb29scyB0b28uXG5cbiAgICAgICAgaWYgKGFsdGVybmF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhciB3YXNNb3VudGVkID0gYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XG4gICAgICAgICAgdmFyIGlzTW91bnRlZCA9IGN1cnJlbnQubWVtb2l6ZWRTdGF0ZSAhPSBudWxsICYmIGN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5lbGVtZW50ICE9IG51bGw7XG5cbiAgICAgICAgICBpZiAoIXdhc01vdW50ZWQgJiYgaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAvLyBNb3VudCBhIG5ldyByb290LlxuICAgICAgICAgICAgbW91bnRlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICAgIGZhaWxlZFJvb3RzLmRlbGV0ZShyb290KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdhc01vdW50ZWQgJiYgaXNNb3VudGVkKSA7IGVsc2UgaWYgKHdhc01vdW50ZWQgJiYgIWlzTW91bnRlZCkge1xuICAgICAgICAgICAgLy8gVW5tb3VudCBhbiBleGlzdGluZyByb290LlxuICAgICAgICAgICAgbW91bnRlZFJvb3RzLmRlbGV0ZShyb290KTtcblxuICAgICAgICAgICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ2xsIHJlbW91bnQgaXQgb24gZnV0dXJlIGVkaXRzLlxuICAgICAgICAgICAgICBmYWlsZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBoZWxwZXJzQnlSb290LmRlbGV0ZShyb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCF3YXNNb3VudGVkICYmICFpc01vdW50ZWQpIHtcbiAgICAgICAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAgICAgICAvLyBXZSdsbCByZW1vdW50IGl0IG9uIGZ1dHVyZSBlZGl0cy5cbiAgICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNb3VudCBhIG5ldyByb290LlxuICAgICAgICAgIG1vdW50ZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQWx3YXlzIGNhbGwgdGhlIGRlY29yYXRlZCBEZXZUb29scyBob29rLlxuXG5cbiAgICAgIHJldHVybiBvbGRPbkNvbW1pdEZpYmVyUm9vdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGhhc1VucmVjb3ZlcmFibGVFcnJvcnMoKSB7XG4gIC8vIFRPRE86IGRlbGV0ZSB0aGlzIGFmdGVyIHJlbW92aW5nIGRlcGVuZGVuY3kgaW4gUk4uXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gRXhwb3NlZCBmb3IgdGVzdGluZy5cblxuZnVuY3Rpb24gX2dldE1vdW50ZWRSb290Q291bnQoKSB7XG4gIHtcbiAgICByZXR1cm4gbW91bnRlZFJvb3RzLnNpemU7XG4gIH1cbn0gLy8gVGhpcyBpcyBhIHdyYXBwZXIgb3ZlciBtb3JlIHByaW1pdGl2ZSBmdW5jdGlvbnMgZm9yIHNldHRpbmcgc2lnbmF0dXJlLlxuLy8gU2lnbmF0dXJlcyBsZXQgdXMgZGVjaWRlIHdoZXRoZXIgdGhlIEhvb2sgb3JkZXIgaGFzIGNoYW5nZWQgb24gcmVmcmVzaC5cbi8vXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgYXMgYSB0cmFuc2Zvcm0gdGFyZ2V0LCBlLmcuOlxuLy8gdmFyIF9zID0gY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0oKVxuLy9cbi8vIGZ1bmN0aW9uIEhlbGxvKCkge1xuLy8gICBjb25zdCBbZm9vLCBzZXRGb29dID0gdXNlU3RhdGUoMCk7XG4vLyAgIGNvbnN0IHZhbHVlID0gdXNlQ3VzdG9tSG9vaygpO1xuLy8gICBfcygpOyAvKiBDYWxsIHdpdGhvdXQgYXJndW1lbnRzIHRyaWdnZXJzIGNvbGxlY3RpbmcgdGhlIGN1c3RvbSBIb29rIGxpc3QuXG4vLyAgICAgICAgICAqIFRoaXMgZG9lc24ndCBoYXBwZW4gZHVyaW5nIHRoZSBtb2R1bGUgZXZhbHVhdGlvbiBiZWNhdXNlIHdlXG4vLyAgICAgICAgICAqIGRvbid0IHdhbnQgdG8gY2hhbmdlIHRoZSBtb2R1bGUgb3JkZXIgd2l0aCBpbmxpbmUgcmVxdWlyZXMuXG4vLyAgICAgICAgICAqIE5leHQgY2FsbHMgYXJlIG5vb3BzLiAqL1xuLy8gICByZXR1cm4gPGgxPkhpPC9oMT47XG4vLyB9XG4vL1xuLy8gLyogQ2FsbCB3aXRoIGFyZ3VtZW50cyBhdHRhY2hlcyB0aGUgc2lnbmF0dXJlIHRvIHRoZSB0eXBlOiAqL1xuLy8gX3MoXG4vLyAgIEhlbGxvLFxuLy8gICAndXNlU3RhdGV7W2Zvbywgc2V0Rm9vXX0oMCknLFxuLy8gICAoKSA9PiBbdXNlQ3VzdG9tSG9va10sIC8qIExhenkgdG8gYXZvaWQgdHJpZ2dlcmluZyBpbmxpbmUgcmVxdWlyZXMgKi9cbi8vICk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKCkge1xuICB7XG4gICAgdmFyIHNhdmVkVHlwZTtcbiAgICB2YXIgaGFzQ3VzdG9tSG9va3M7XG4gICAgdmFyIGRpZENvbGxlY3RIb29rcyA9IGZhbHNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcykge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHRoZSBpbml0aWFsIHBoYXNlIHRoYXQgYXNzb2NpYXRlcyBzaWduYXR1cmVzXG4gICAgICAgIC8vIHdpdGggdGhlIGZ1bmN0aW9ucy4gTm90ZSB0aGlzIG1heSBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgLy8gaW4gSE9DIGNoYWlucyBsaWtlIF9zKGhvYzEoX3MoaG9jMihfcyhhY3R1YWxGdW5jdGlvbikpKSkpLlxuICAgICAgICBpZiAoIXNhdmVkVHlwZSkge1xuICAgICAgICAgIC8vIFdlJ3JlIGluIHRoZSBpbm5lcm1vc3QgY2FsbCwgc28gdGhpcyBpcyB0aGUgYWN0dWFsIHR5cGUuXG4gICAgICAgICAgc2F2ZWRUeXBlID0gdHlwZTtcbiAgICAgICAgICBoYXNDdXN0b21Ib29rcyA9IHR5cGVvZiBnZXRDdXN0b21Ib29rcyA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgfSAvLyBTZXQgdGhlIHNpZ25hdHVyZSBmb3IgYWxsIHR5cGVzIChldmVuIHdyYXBwZXJzISkgaW4gY2FzZVxuICAgICAgICAvLyB0aGV5IGhhdmUgbm8gc2lnbmF0dXJlcyBvZiB0aGVpciBvd24uIFRoaXMgaXMgdG8gcHJldmVudFxuICAgICAgICAvLyBwcm9ibGVtcyBsaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjA0MTcuXG5cblxuICAgICAgICBpZiAodHlwZSAhPSBudWxsICYmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgICAgc2V0U2lnbmF0dXJlKHR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXZSdyZSBpbiB0aGUgX3MoKSBjYWxsIHdpdGhvdXQgYXJndW1lbnRzLCB3aGljaCBtZWFuc1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSB0aW1lIHRvIGNvbGxlY3QgY3VzdG9tIEhvb2sgc2lnbmF0dXJlcy5cbiAgICAgICAgLy8gT25seSBkbyB0aGlzIG9uY2UuIFRoaXMgcGF0aCBpcyBob3QgYW5kIHJ1bnMgKmluc2lkZSogZXZlcnkgcmVuZGVyIVxuICAgICAgICBpZiAoIWRpZENvbGxlY3RIb29rcyAmJiBoYXNDdXN0b21Ib29rcykge1xuICAgICAgICAgIGRpZENvbGxlY3RIb29rcyA9IHRydWU7XG4gICAgICAgICAgY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlKHNhdmVkVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBpc0xpa2VseUNvbXBvbmVudFR5cGUodHlwZSkge1xuICB7XG4gICAgc3dpdGNoICh0eXBlb2YgdHlwZSkge1xuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICB7XG4gICAgICAgICAgLy8gRmlyc3QsIGRlYWwgd2l0aCBjbGFzc2VzLlxuICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAvLyBSZWFjdCBjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBvd25OYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHR5cGUucHJvdG90eXBlKTtcblxuICAgICAgICAgICAgaWYgKG93bk5hbWVzLmxlbmd0aCA+IDEgfHwgb3duTmFtZXNbMF0gIT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBsb29rcyBsaWtlIGEgY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvXG5cblxuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gT2JqZWN0LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAvLyBJdCBoYXMgYSBzdXBlcmNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIFBhc3MgdGhyb3VnaC5cbiAgICAgICAgICAgIC8vIFRoaXMgbG9va3MgbGlrZSBhIHJlZ3VsYXIgZnVuY3Rpb24gd2l0aCBlbXB0eSBwcm90b3R5cGUuXG5cbiAgICAgICAgICB9IC8vIEZvciBwbGFpbiBmdW5jdGlvbnMgYW5kIGFycm93cywgdXNlIG5hbWUgYXMgYSBoZXVyaXN0aWMuXG5cblxuICAgICAgICAgIHZhciBuYW1lID0gdHlwZS5uYW1lIHx8IHR5cGUuZGlzcGxheU5hbWU7XG4gICAgICAgICAgcmV0dXJuIHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiAvXltBLVpdLy50ZXN0KG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAodHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGdldFByb3BlcnR5KHR5cGUsICckJHR5cGVvZicpKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgICAgLy8gRGVmaW5pdGVseSBSZWFjdCBjb21wb25lbnRzLlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuX2dldE1vdW50ZWRSb290Q291bnQgPSBfZ2V0TW91bnRlZFJvb3RDb3VudDtcbmV4cG9ydHMuY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlID0gY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlO1xuZXhwb3J0cy5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSA9IGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtO1xuZXhwb3J0cy5maW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzID0gZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcztcbmV4cG9ydHMuZ2V0RmFtaWx5QnlJRCA9IGdldEZhbWlseUJ5SUQ7XG5leHBvcnRzLmdldEZhbWlseUJ5VHlwZSA9IGdldEZhbWlseUJ5VHlwZTtcbmV4cG9ydHMuaGFzVW5yZWNvdmVyYWJsZUVycm9ycyA9IGhhc1VucmVjb3ZlcmFibGVFcnJvcnM7XG5leHBvcnRzLmluamVjdEludG9HbG9iYWxIb29rID0gaW5qZWN0SW50b0dsb2JhbEhvb2s7XG5leHBvcnRzLmlzTGlrZWx5Q29tcG9uZW50VHlwZSA9IGlzTGlrZWx5Q29tcG9uZW50VHlwZTtcbmV4cG9ydHMucGVyZm9ybVJlYWN0UmVmcmVzaCA9IHBlcmZvcm1SZWFjdFJlZnJlc2g7XG5leHBvcnRzLnJlZ2lzdGVyID0gcmVnaXN0ZXI7XG5leHBvcnRzLnNldFNpZ25hdHVyZSA9IHNldFNpZ25hdHVyZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWF5YmVLZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RET01cIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdEludGxcIl07IiwiLyogZ2xvYmFsIF9fcmVhY3RfcmVmcmVzaF9saWJyYXJ5X18gKi9cblxuY29uc3Qgc2FmZVRoaXMgPSByZXF1aXJlKCdjb3JlLWpzLXB1cmUvZmVhdHVyZXMvZ2xvYmFsLXRoaXMnKTtcbmNvbnN0IFJlZnJlc2hSdW50aW1lID0gcmVxdWlyZSgncmVhY3QtcmVmcmVzaC9ydW50aW1lJyk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGlmICh0eXBlb2Ygc2FmZVRoaXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyICRSZWZyZXNoSW5qZWN0ZWQkID0gJ19fcmVhY3RSZWZyZXNoSW5qZWN0ZWQnO1xuICAgIC8vIE5hbWVzcGFjZSB0aGUgaW5qZWN0ZWQgZmxhZyAoaWYgbmVjZXNzYXJ5KSBmb3IgbW9ub3JlcG8gY29tcGF0aWJpbGl0eVxuICAgIGlmICh0eXBlb2YgX19yZWFjdF9yZWZyZXNoX2xpYnJhcnlfXyAhPT0gJ3VuZGVmaW5lZCcgJiYgX19yZWFjdF9yZWZyZXNoX2xpYnJhcnlfXykge1xuICAgICAgJFJlZnJlc2hJbmplY3RlZCQgKz0gJ18nICsgX19yZWFjdF9yZWZyZXNoX2xpYnJhcnlfXztcbiAgICB9XG5cbiAgICAvLyBPbmx5IGluamVjdCB0aGUgcnVudGltZSBpZiBpdCBoYXNuJ3QgYmVlbiBpbmplY3RlZFxuICAgIGlmICghc2FmZVRoaXNbJFJlZnJlc2hJbmplY3RlZCRdKSB7XG4gICAgICAvLyBJbmplY3QgcmVmcmVzaCBydW50aW1lIGludG8gZ2xvYmFsIHNjb3BlXG4gICAgICBSZWZyZXNoUnVudGltZS5pbmplY3RJbnRvR2xvYmFsSG9vayhzYWZlVGhpcyk7XG5cbiAgICAgIC8vIE1hcmsgdGhlIHJ1bnRpbWUgYXMgaW5qZWN0ZWQgdG8gcHJldmVudCBkb3VibGUtaW5qZWN0aW9uXG4gICAgICBzYWZlVGhpc1skUmVmcmVzaEluamVjdGVkJF0gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uL3N0YWJsZS9nbG9iYWwtdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuZ2xvYmFsLXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Z1bGwvZ2xvYmFsLXRoaXMnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IHJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzbmV4dC5nbG9iYWwtdGhpcycpO1xuXG52YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vYWN0dWFsL2dsb2JhbC10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWwsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3Rcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbnZhciBJU19IVE1MRERBID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbGw6IGRvY3VtZW50QWxsLFxuICBJU19IVE1MRERBOiBJU19IVE1MRERBXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIHdyYXBDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChOYXRpdmVDb25zdHJ1Y3Rvcikge1xuICB2YXIgV3JhcHBlciA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBXcmFwcGVyKSB7XG4gICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEsIGIpO1xuICAgICAgfSByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEsIGIsIGMpO1xuICAgIH0gcmV0dXJuIGFwcGx5KE5hdGl2ZUNvbnN0cnVjdG9yLCB0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICBXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgcmV0dXJuIFdyYXBwZXI7XG59O1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgUFJPVE8gPSBvcHRpb25zLnByb3RvO1xuXG4gIHZhciBuYXRpdmVTb3VyY2UgPSBHTE9CQUwgPyBnbG9iYWwgOiBTVEFUSUMgPyBnbG9iYWxbVEFSR0VUXSA6IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuXG4gIHZhciB0YXJnZXQgPSBHTE9CQUwgPyBwYXRoIDogcGF0aFtUQVJHRVRdIHx8IGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShwYXRoLCBUQVJHRVQsIHt9KVtUQVJHRVRdO1xuICB2YXIgdGFyZ2V0UHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcblxuICB2YXIgRk9SQ0VELCBVU0VfTkFUSVZFLCBWSVJUVUFMX1BST1RPVFlQRTtcbiAgdmFyIGtleSwgc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5LCBuYXRpdmVQcm9wZXJ0eSwgcmVzdWx0UHJvcGVydHksIGRlc2NyaXB0b3I7XG5cbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBVU0VfTkFUSVZFID0gIUZPUkNFRCAmJiBuYXRpdmVTb3VyY2UgJiYgaGFzT3duKG5hdGl2ZVNvdXJjZSwga2V5KTtcblxuICAgIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG5cbiAgICBpZiAoVVNFX05BVElWRSkgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmF0aXZlU291cmNlLCBrZXkpO1xuICAgICAgbmF0aXZlUHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIG5hdGl2ZVByb3BlcnR5ID0gbmF0aXZlU291cmNlW2tleV07XG5cbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIGltcGxlbWVudGF0aW9uXG4gICAgc291cmNlUHJvcGVydHkgPSAoVVNFX05BVElWRSAmJiBuYXRpdmVQcm9wZXJ0eSkgPyBuYXRpdmVQcm9wZXJ0eSA6IHNvdXJjZVtrZXldO1xuXG4gICAgaWYgKFVTRV9OQVRJVkUgJiYgdHlwZW9mIHRhcmdldFByb3BlcnR5ID09IHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSkgY29udGludWU7XG5cbiAgICAvLyBiaW5kIG1ldGhvZHMgdG8gZ2xvYmFsIGZvciBjYWxsaW5nIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBpZiAob3B0aW9ucy5iaW5kICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gYmluZChzb3VyY2VQcm9wZXJ0eSwgZ2xvYmFsKTtcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlcyBpbiB0aGlzIHZlcnNpb25cbiAgICBlbHNlIGlmIChvcHRpb25zLndyYXAgJiYgVVNFX05BVElWRSkgcmVzdWx0UHJvcGVydHkgPSB3cmFwQ29uc3RydWN0b3Ioc291cmNlUHJvcGVydHkpO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIGVsc2UgaWYgKFBST1RPICYmIGlzQ2FsbGFibGUoc291cmNlUHJvcGVydHkpKSByZXN1bHRQcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBkZWZhdWx0IGNhc2VcbiAgICBlbHNlIHJlc3VsdFByb3BlcnR5ID0gc291cmNlUHJvcGVydHk7XG5cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAoc291cmNlUHJvcGVydHkgJiYgc291cmNlUHJvcGVydHkuc2hhbSkgfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocmVzdWx0UHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRhcmdldCwga2V5LCByZXN1bHRQcm9wZXJ0eSk7XG5cbiAgICBpZiAoUFJPVE8pIHtcbiAgICAgIFZJUlRVQUxfUFJPVE9UWVBFID0gVEFSR0VUICsgJ1Byb3RvdHlwZSc7XG4gICAgICBpZiAoIWhhc093bihwYXRoLCBWSVJUVUFMX1BST1RPVFlQRSkpIHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGgsIFZJUlRVQUxfUFJPVE9UWVBFLCB7fSk7XG4gICAgICB9XG4gICAgICAvLyBleHBvcnQgdmlydHVhbCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGhbVklSVFVBTF9QUk9UT1RZUEVdLCBrZXksIHNvdXJjZVByb3BlcnR5KTtcbiAgICAgIC8vIGV4cG9ydCByZWFsIHByb3RvdHlwZSBtZXRob2RzXG4gICAgICBpZiAob3B0aW9ucy5yZWFsICYmIHRhcmdldFByb3RvdHlwZSAmJiAoRk9SQ0VEIHx8ICF0YXJnZXRQcm90b3R5cGVba2V5XSkpIHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHRhcmdldFByb3RvdHlwZSwga2V5LCBzb3VyY2VQcm9wZXJ0eSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXJlZmxlY3QgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgUmVmbGVjdCA9PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmFwcGx5IHx8IChOQVRJVkVfQklORCA/IGNhbGwuYmluZChhcHBseSkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGFwcGx5LCBhcmd1bWVudHMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGJpbmQgPSB1bmN1cnJ5VGhpcyh1bmN1cnJ5VGhpcy5iaW5kKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCkge1xuICBhQ2FsbGFibGUoZm4pO1xuICByZXR1cm4gdGhhdCA9PT0gdW5kZWZpbmVkID8gZm4gOiBOQVRJVkVfQklORCA/IGJpbmQoZm4sIHRoYXQpIDogZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICAvLyBOYXNob3JuIGJ1ZzpcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEyOFxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTMwXG4gIGlmIChjbGFzc29mUmF3KGZuKSA9PT0gJ0Z1bmN0aW9uJykgcmV0dXJuIHVuY3VycnlUaGlzKGZuKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodmFyaWFibGUpID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCB0aGlzIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGRvY3VtZW50QWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWFsbCcpO1xuXG52YXIgZG9jdW1lbnRBbGwgPSAkZG9jdW1lbnRBbGwuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbm1vZHVsZS5leHBvcnRzID0gJGRvY3VtZW50QWxsLklTX0hUTUxEREEgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgJGRvY3VtZW50QWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWFsbCcpO1xuXG52YXIgZG9jdW1lbnRBbGwgPSAkZG9jdW1lbnRBbGwuYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRkb2N1bWVudEFsbC5JU19IVE1MRERBID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpIHx8IGl0ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4zMy4xJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjMgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My4zMy4xL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBgZ2xvYmFsVGhpc2Agb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdsb2JhbHRoaXNcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogZ2xvYmFsLmdsb2JhbFRoaXMgIT09IGdsb2JhbCB9LCB7XG4gIGdsb2JhbFRoaXM6IGdsb2JhbFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5nbG9iYWwtdGhpcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uL2VzL2dsb2JhbC10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBleGVjdXRpb24gaW50ZXJjZXB0b3Jcbl9fd2VicGFja19yZXF1aXJlX18uaSA9IFtdO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaS5wdXNoKChvcHRpb25zKSA9PiB7XG5cdGNvbnN0IG9yaWdpbmFsRmFjdG9yeSA9IG9wdGlvbnMuZmFjdG9yeTtcblx0b3B0aW9ucy5mYWN0b3J5ID0gZnVuY3Rpb24gKG1vZHVsZU9iamVjdCwgbW9kdWxlRXhwb3J0cywgd2VicGFja1JlcXVpcmUpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5zZXR1cChvcHRpb25zLmlkKTtcblx0XHR0cnkge1xuXHRcdFx0b3JpZ2luYWxGYWN0b3J5LmNhbGwodGhpcywgbW9kdWxlT2JqZWN0LCBtb2R1bGVFeHBvcnRzLCB3ZWJwYWNrUmVxdWlyZSk7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlT2JqZWN0LmV4cG9ydHMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRcdG9wdGlvbnMubW9kdWxlLmV4cG9ydHMgPSBvcHRpb25zLm1vZHVsZS5leHBvcnRzLnRoZW4oXG5cdFx0XHRcdFx0KHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuY2xlYW51cChvcHRpb25zLmlkKTtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQocmVhc29uKSA9PiB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5jbGVhbnVwKG9wdGlvbnMuaWQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuY2xlYW51cChvcHRpb25zLmlkKVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn0pXG5cbl9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkID0ge1xuXHRyZWdpc3RlcjogKCkgPT4gKHVuZGVmaW5lZCksXG5cdHNpZ25hdHVyZTogKCkgPT4gKCh0eXBlKSA9PiAodHlwZSkpLFxuXHRydW50aW1lOiB7XG5cdFx0Y3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm06ICgpID0+ICgodHlwZSkgPT4gKHR5cGUpKSxcblx0XHRyZWdpc3RlcjogKCkgPT4gKHVuZGVmaW5lZClcblx0fSxcblx0c2V0dXA6IChjdXJyZW50TW9kdWxlSWQpID0+IHtcblx0XHRjb25zdCBwcmV2TW9kdWxlSWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5tb2R1bGVJZDtcblx0XHRjb25zdCBwcmV2UmVnaXN0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5yZWdpc3Rlcjtcblx0XHRjb25zdCBwcmV2U2lnbmF0dXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuc2lnbmF0dXJlO1xuXHRcdGNvbnN0IHByZXZDbGVhbnVwID0gX193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuY2xlYW51cDtcblxuXHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLm1vZHVsZUlkID0gY3VycmVudE1vZHVsZUlkO1xuXG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQucmVnaXN0ZXIgPSAodHlwZSwgaWQpID0+IHtcblx0XHRcdGNvbnN0IHR5cGVJZCA9IGN1cnJlbnRNb2R1bGVJZCArIFwiIFwiICsgaWQ7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5ydW50aW1lLnJlZ2lzdGVyKHR5cGUsIHR5cGVJZCk7XG5cdFx0fVxuXG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuc2lnbmF0dXJlID0gKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnJ1bnRpbWUuY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0oKSk7XG5cblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5jbGVhbnVwID0gKGNsZWFudXBNb2R1bGVJZCkgPT4ge1xuXHRcdFx0aWYgKGN1cnJlbnRNb2R1bGVJZCA9PT0gY2xlYW51cE1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLm1vZHVsZUlkID0gcHJldk1vZHVsZUlkO1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5yZWdpc3RlciA9IHByZXZSZWdpc3Rlcjtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuc2lnbmF0dXJlID0gcHJldlNpZ25hdHVyZTtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuY2xlYW51cCA9IHByZXZDbGVhbnVwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL0BwbW1td2gvcmVhY3QtcmVmcmVzaC13ZWJwYWNrLXBsdWdpbi9jbGllbnQvUmVhY3RSZWZyZXNoRW50cnkuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHBzL2Jhbm5lci9pbmRleC50c3hcIik7XG4iLCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImVudHJ5Iiwic2hvcnRjb2RlIiwidGl0bGUiLCJzdGF0dXMiLCJkZXNjcmlwdGlvbiIsInByZXZpZXciLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsInVzZUV4dGVybmFsUGVlckRlcGVuZGVuY2llcyIsImFkZGl0aW9uYWxDdXN0b21Qcm9wZXJ0aWVzIiwiYXZhaWxhYmxlVHJhbnNsYXRpb25zIiwiUmVhY3QiLCJqc3hERVYiLCJfanN4REVWIiwic3R5bGVzIiwiY2FyZCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJmb250RmFtaWx5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0Iiwid29yZFdyYXAiLCJjYXJkQ29udGFpbmVyIiwiZm9udFNpemUiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwid2lkdGgiLCJjYXJkSW5mbyIsImNvbG9yIiwiY2FyZE5hbWUiLCJmb250V2VpZ2h0IiwiY2FyZERlc2NyaXB0aW9uIiwiY2FyZENhdGVnb3J5IiwidGV4dFRyYW5zZm9ybSIsInRleHRBbGlnbiIsIkJhbm5lckNhcmRzIiwiaGVhZGluZyIsInRleHRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImltZ1BhdGgiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIlBVQkxJQ19BU1NFVFNfVVJMIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfYyIsIiRSZWZyZXNoUmVnJCIsIlJlYWN0RE9NIiwiSW50bFByb3ZpZGVyIiwibm9ybWFsaXplV2lkZ2V0SW5wdXQiLCJ3aWRnZXREZWZpbml0aW9uIiwicmVuZGVyIiwiaW5zdGFuY2VJZCIsImxhbmdDb2RlIiwib3JpZ2luIiwiY2IiLCJlbGVtZW50IiwibG9jYWxlIiwibWVzc2FnZXMiLCJMb2NhbGUiLCJmZXRjaFRyYW5zbGF0aW9uTWVzc2FnZXMiLCJ3aWRnZXRJZCIsIkVOIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJmZXRjaCIsImpzb24iLCJlIiwiY2FtZWxpemUiLCJyZWZpbmVJbnB1dFR5cGVzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkhUTUxFbGVtZW50IiwicGFsZXR0ZSIsImdldEF0dHJpYnV0ZSIsInJhd1BhcmFtcyIsInBhcnNlVXNlcklucHV0IiwicGFyYW1zIiwiX3dpZGdldERlZmluaXRpb24kc2V0IiwiX3dpZGdldERlZmluaXRpb24kc2V0MiIsIl93aWRnZXREZWZpbml0aW9uJHNldDMiLCJzY2hlbWFQcm9wcyIsInNldHRpbmdzU2NoZW1hIiwicHJvcGVydGllcyIsImZpZWxkcyIsInByb3BOYW1lcyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJwcm9wTmFtZSIsInBhcnNlVmFsdWUiLCJ0eXBlIiwiYXR0cmlidXRlIiwiaW5jbHVkZXMiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJhdmFpbGFibGVMYW5nY29kZXMiLCJBUiIsIkRFIiwiRVMiLCJGUiIsIklUIiwiSkEiLCJLTyIsIlBMIiwiUFQiLCJSVSIsIlRSIiwiWkgiLCJSZWZyZXNoIiwicmVxdWlyZSIsImdldE1vZHVsZUV4cG9ydHMiLCJtb2R1bGVJZCIsIm1heWJlTW9kdWxlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImMiLCJjb25zb2xlIiwid2FybiIsImV4cG9ydHNPclByb21pc2UiLCJQcm9taXNlIiwidGhlbiIsImdldFJlYWN0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlIiwibW9kdWxlRXhwb3J0cyIsInNpZ25hdHVyZSIsInB1c2giLCJnZXRGYW1pbHlCeVR5cGUiLCJrZXkiLCJnZXRXZWJwYWNrSG90RGF0YSIsImlzUmVhY3RSZWZyZXNoQm91bmRhcnkiLCJjcmVhdGVEZWJvdW5jZVVwZGF0ZSIsInJlZnJlc2hUaW1lb3V0IiwiZW5xdWV1ZVVwZGF0ZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsInBlcmZvcm1SZWFjdFJlZnJlc2giLCJpc0xpa2VseUNvbXBvbmVudFR5cGUiLCJoYXNFeHBvcnRzIiwiYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMiLCJleHBvcnRWYWx1ZSIsInJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaCIsInJlZ2lzdGVyIiwidHlwZUlEIiwic2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5IiwicHJldlNpZ25hdHVyZSIsIm5leHRTaWduYXR1cmUiLCJsZW5ndGgiLCJpIiwiZXhlY3V0ZVJ1bnRpbWUiLCJ3ZWJwYWNrSG90IiwicmVmcmVzaE92ZXJsYXkiLCJpc1Rlc3QiLCJpc0hvdFVwZGF0ZSIsImRhdGEiLCJwcmV2RGF0YSIsImRpc3Bvc2UiLCJob3REaXNwb3NlQ2FsbGJhY2siLCJhY2NlcHQiLCJob3RFcnJvckhhbmRsZXIiLCJlcnJvciIsImhhbmRsZVJ1bnRpbWVFcnJvciIsIm9uSG90QWNjZXB0RXJyb3IiLCJtZXNzYWdlIiwiaG90IiwiaW52YWxpZGF0ZSIsInVwZGF0ZUNhbGxiYWNrIiwiY2xlYXJSdW50aW1lRXJyb3JzIiwiZnJlZXplIiwiSU5GSU5JVFkiLCJzeW1ib2xUYWciLCJyZUFzY2lpV29yZCIsInJlTGF0aW4iLCJyc0FzdHJhbFJhbmdlIiwicnNDb21ib01hcmtzUmFuZ2UiLCJyc0NvbWJvU3ltYm9sc1JhbmdlIiwicnNEaW5nYmF0UmFuZ2UiLCJyc0xvd2VyUmFuZ2UiLCJyc01hdGhPcFJhbmdlIiwicnNOb25DaGFyUmFuZ2UiLCJyc1B1bmN0dWF0aW9uUmFuZ2UiLCJyc1NwYWNlUmFuZ2UiLCJyc1VwcGVyUmFuZ2UiLCJyc1ZhclJhbmdlIiwicnNCcmVha1JhbmdlIiwicnNBcG9zIiwicnNBc3RyYWwiLCJyc0JyZWFrIiwicnNDb21ibyIsInJzRGlnaXRzIiwicnNEaW5nYmF0IiwicnNMb3dlciIsInJzTWlzYyIsInJzRml0eiIsInJzTW9kaWZpZXIiLCJyc05vbkFzdHJhbCIsInJzUmVnaW9uYWwiLCJyc1N1cnJQYWlyIiwicnNVcHBlciIsInJzWldKIiwicnNMb3dlck1pc2MiLCJyc1VwcGVyTWlzYyIsInJzT3B0TG93ZXJDb250ciIsInJzT3B0VXBwZXJDb250ciIsInJlT3B0TW9kIiwicnNPcHRWYXIiLCJyc09wdEpvaW4iLCJqb2luIiwicnNTZXEiLCJyc0Vtb2ppIiwicnNTeW1ib2wiLCJyZUFwb3MiLCJSZWdFeHAiLCJyZUNvbWJvTWFyayIsInJlVW5pY29kZSIsInJlVW5pY29kZVdvcmQiLCJyZUhhc1VuaWNvZGUiLCJyZUhhc1VuaWNvZGVXb3JkIiwiZGVidXJyZWRMZXR0ZXJzIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsImZyZWVTZWxmIiwic2VsZiIsInJvb3QiLCJGdW5jdGlvbiIsImFycmF5UmVkdWNlIiwiYXJyYXkiLCJpdGVyYXRlZSIsImFjY3VtdWxhdG9yIiwiaW5pdEFjY3VtIiwiaW5kZXgiLCJhc2NpaVRvQXJyYXkiLCJzdHJpbmciLCJzcGxpdCIsImFzY2lpV29yZHMiLCJtYXRjaCIsImJhc2VQcm9wZXJ0eU9mIiwib2JqZWN0IiwiZGVidXJyTGV0dGVyIiwiaGFzVW5pY29kZSIsInRlc3QiLCJoYXNVbmljb2RlV29yZCIsInN0cmluZ1RvQXJyYXkiLCJ1bmljb2RlVG9BcnJheSIsInVuaWNvZGVXb3JkcyIsIm9iamVjdFByb3RvIiwicHJvdG90eXBlIiwib2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsIlN5bWJvbCIsInN5bWJvbFByb3RvIiwic3ltYm9sVG9TdHJpbmciLCJiYXNlU2xpY2UiLCJzdGFydCIsImVuZCIsInJlc3VsdCIsIkFycmF5IiwiYmFzZVRvU3RyaW5nIiwidmFsdWUiLCJpc1N5bWJvbCIsImNhbGwiLCJjYXN0U2xpY2UiLCJjcmVhdGVDYXNlRmlyc3QiLCJtZXRob2ROYW1lIiwic3RyU3ltYm9scyIsImNociIsImNoYXJBdCIsInRyYWlsaW5nIiwic2xpY2UiLCJjcmVhdGVDb21wb3VuZGVyIiwid29yZHMiLCJkZWJ1cnIiLCJyZXBsYWNlIiwiaXNPYmplY3RMaWtlIiwiY2FtZWxDYXNlIiwid29yZCIsInRvTG93ZXJDYXNlIiwiY2FwaXRhbGl6ZSIsInVwcGVyRmlyc3QiLCJwYXR0ZXJuIiwiZ3VhcmQiLCJOT0RFX0VOViIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiUkVBQ1RfU0NPUEVfVFlQRSIsIlJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIiwiUkVBQ1RfT0ZGU0NSRUVOX1RZUEUiLCJSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUiLCJSRUFDVF9DQUNIRV9UWVBFIiwiZm9yIiwic3ltYm9sRm9yIiwiUG9zc2libHlXZWFrTWFwIiwiV2Vha01hcCIsIk1hcCIsImFsbEZhbWlsaWVzQnlJRCIsImFsbEZhbWlsaWVzQnlUeXBlIiwiYWxsU2lnbmF0dXJlc0J5VHlwZSIsInVwZGF0ZWRGYW1pbGllc0J5VHlwZSIsInBlbmRpbmdVcGRhdGVzIiwiaGVscGVyc0J5UmVuZGVyZXJJRCIsImhlbHBlcnNCeVJvb3QiLCJtb3VudGVkUm9vdHMiLCJTZXQiLCJmYWlsZWRSb290cyIsInJvb3RFbGVtZW50cyIsImlzUGVyZm9ybWluZ1JlZnJlc2giLCJjb21wdXRlRnVsbEtleSIsImZ1bGxLZXkiLCJvd25LZXkiLCJob29rcyIsImdldEN1c3RvbUhvb2tzIiwiZXJyIiwiZm9yY2VSZXNldCIsImhvb2siLCJuZXN0ZWRIb29rU2lnbmF0dXJlIiwiZ2V0IiwibmVzdGVkSG9va0tleSIsImhhdmVFcXVhbFNpZ25hdHVyZXMiLCJwcmV2VHlwZSIsIm5leHRUeXBlIiwiaXNSZWFjdENsYXNzIiwiaXNSZWFjdENvbXBvbmVudCIsImNhblByZXNlcnZlU3RhdGVCZXR3ZWVuIiwicmVzb2x2ZUZhbWlseSIsImNsb25lTWFwIiwibWFwIiwiY2xvbmUiLCJmb3JFYWNoIiwic2V0IiwiY2xvbmVTZXQiLCJhZGQiLCJnZXRQcm9wZXJ0eSIsInByb3BlcnR5Iiwic3RhbGVGYW1pbGllcyIsInVwZGF0ZWRGYW1pbGllcyIsInVwZGF0ZXMiLCJfcmVmIiwiZmFtaWx5IiwiY3VycmVudCIsInVwZGF0ZSIsImhlbHBlcnMiLCJzZXRSZWZyZXNoSGFuZGxlciIsImRpZEVycm9yIiwiZmlyc3RFcnJvciIsImZhaWxlZFJvb3RzU25hcHNob3QiLCJtb3VudGVkUm9vdHNTbmFwc2hvdCIsImhlbHBlcnNCeVJvb3RTbmFwc2hvdCIsIkVycm9yIiwiaGFzIiwic2NoZWR1bGVSb290Iiwic2NoZWR1bGVSZWZyZXNoIiwiaWQiLCJzZXRTaWduYXR1cmUiLCJhcmd1bWVudHMiLCJjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUiLCJnZXRGYW1pbHlCeUlEIiwiZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcyIsImZhbWlsaWVzIiwiYWZmZWN0ZWRJbnN0YW5jZXMiLCJpbnN0YW5jZXNGb3JSb290IiwiZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoIiwiaW5zdCIsImluamVjdEludG9HbG9iYWxIb29rIiwiZ2xvYmFsT2JqZWN0IiwiX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwibmV4dElEIiwicmVuZGVyZXJzIiwic3VwcG9ydHNGaWJlciIsImluamVjdCIsImluamVjdGVkIiwib25TY2hlZHVsZUZpYmVyUm9vdCIsIm9uQ29tbWl0RmliZXJSb290IiwibWF5YmVQcmlvcml0eUxldmVsIiwib25Db21taXRGaWJlclVubW91bnQiLCJpc0Rpc2FibGVkIiwib2xkSW5qZWN0IiwiYXBwbHkiLCJvbGRPbkNvbW1pdEZpYmVyUm9vdCIsIm9sZE9uU2NoZWR1bGVGaWJlclJvb3QiLCJkZWxldGUiLCJhbHRlcm5hdGUiLCJ3YXNNb3VudGVkIiwibWVtb2l6ZWRTdGF0ZSIsImlzTW91bnRlZCIsImhhc1VucmVjb3ZlcmFibGVFcnJvcnMiLCJfZ2V0TW91bnRlZFJvb3RDb3VudCIsInNpemUiLCJjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSIsInNhdmVkVHlwZSIsImhhc0N1c3RvbUhvb2tzIiwiZGlkQ29sbGVjdEhvb2tzIiwib3duTmFtZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiX19wcm90b19fIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiTUFZQkVfSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwibWF5YmVJdGVyYXRvciIsIlJlYWN0U2hhcmVkSW50ZXJuYWxzIiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJmb3JtYXQiLCJfbGVuMiIsImFyZ3MiLCJfa2V5MiIsInByaW50V2FybmluZyIsImxldmVsIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsInN0YWNrIiwiZ2V0U3RhY2tBZGRlbmR1bSIsImNvbmNhdCIsImFyZ3NXaXRoRm9ybWF0IiwiaXRlbSIsIlN0cmluZyIsInVuc2hpZnQiLCJlbmFibGVTY29wZUFQSSIsImVuYWJsZUNhY2hlRWxlbWVudCIsImVuYWJsZVRyYW5zaXRpb25UcmFjaW5nIiwiZW5hYmxlTGVnYWN5SGlkZGVuIiwiZW5hYmxlRGVidWdUcmFjaW5nIiwiUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsIiQkdHlwZW9mIiwiZ2V0TW9kdWxlSWQiLCJnZXRXcmFwcGVkTmFtZSIsIm91dGVyVHlwZSIsImlubmVyVHlwZSIsIndyYXBwZXJOYW1lIiwiZnVuY3Rpb25OYW1lIiwiZ2V0Q29udGV4dE5hbWUiLCJnZXRDb21wb25lbnROYW1lRnJvbVR5cGUiLCJ0YWciLCJjb250ZXh0IiwicHJvdmlkZXIiLCJfY29udGV4dCIsIm91dGVyTmFtZSIsImxhenlDb21wb25lbnQiLCJwYXlsb2FkIiwiX3BheWxvYWQiLCJpbml0IiwiX2luaXQiLCJ4IiwiYXNzaWduIiwiZGlzYWJsZWREZXB0aCIsInByZXZMb2ciLCJwcmV2SW5mbyIsInByZXZXYXJuIiwicHJldkVycm9yIiwicHJldkdyb3VwIiwicHJldkdyb3VwQ29sbGFwc2VkIiwicHJldkdyb3VwRW5kIiwiZGlzYWJsZWRMb2ciLCJfX3JlYWN0RGlzYWJsZWRMb2ciLCJkaXNhYmxlTG9ncyIsImxvZyIsImluZm8iLCJncm91cCIsImdyb3VwQ29sbGFwc2VkIiwiZ3JvdXBFbmQiLCJwcm9wcyIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnRpZXMiLCJyZWVuYWJsZUxvZ3MiLCJSZWFjdEN1cnJlbnREaXNwYXRjaGVyIiwicHJlZml4IiwiZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUiLCJzb3VyY2UiLCJvd25lckZuIiwidHJpbSIsInJlZW50cnkiLCJjb21wb25lbnRGcmFtZUNhY2hlIiwiZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSIsImZuIiwiY29uc3RydWN0IiwiZnJhbWUiLCJjb250cm9sIiwicHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSIsInByZXBhcmVTdGFja1RyYWNlIiwicHJldmlvdXNEaXNwYXRjaGVyIiwiRmFrZSIsImRlZmluZVByb3BlcnR5IiwiUmVmbGVjdCIsInNhbXBsZSIsInNhbXBsZUxpbmVzIiwiY29udHJvbExpbmVzIiwicyIsIl9mcmFtZSIsInN5bnRoZXRpY0ZyYW1lIiwiZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lIiwic2hvdWxkQ29uc3RydWN0IiwiQ29tcG9uZW50IiwiZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWIiwiaGFzT3duUHJvcGVydHkiLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCIsIm93bmVyIiwiX293bmVyIiwiX3NvdXJjZSIsInNldEV4dHJhU3RhY2tGcmFtZSIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiYmluZCIsInR5cGVTcGVjTmFtZSIsImVycm9yJDEiLCJleCIsImlzQXJyYXlJbXBsIiwiaXNBcnJheSIsImEiLCJ0eXBlTmFtZSIsImhhc1RvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJjb25zdHJ1Y3RvciIsIndpbGxDb2VyY2lvblRocm93IiwidGVzdFN0cmluZ0NvZXJjaW9uIiwiY2hlY2tLZXlTdHJpbmdDb2VyY2lvbiIsIlJlYWN0Q3VycmVudE93bmVyIiwiUkVTRVJWRURfUFJPUFMiLCJyZWYiLCJfX3NlbGYiLCJfX3NvdXJjZSIsInNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duIiwic3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24iLCJkaWRXYXJuQWJvdXRTdHJpbmdSZWZzIiwiaGFzVmFsaWRSZWYiLCJjb25maWciLCJnZXR0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJpc1JlYWN0V2FybmluZyIsImhhc1ZhbGlkS2V5Iiwid2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkIiwic3RhdGVOb2RlIiwiZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdLZXkiLCJkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlciIsIndhcm5BYm91dEFjY2Vzc2luZ1JlZiIsIlJlYWN0RWxlbWVudCIsIl9zdG9yZSIsIm1heWJlS2V5IiwiZGVmYXVsdFByb3BzIiwiUmVhY3RDdXJyZW50T3duZXIkMSIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSIsInNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEiLCJwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biIsImlzVmFsaWRFbGVtZW50IiwiZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtIiwiZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0iLCJvd25lckhhc0tleVVzZVdhcm5pbmciLCJnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwicGFyZW50VHlwZSIsInBhcmVudE5hbWUiLCJ2YWxpZGF0ZUV4cGxpY2l0S2V5IiwidmFsaWRhdGVkIiwiY3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsImNoaWxkT3duZXIiLCJ2YWxpZGF0ZUNoaWxkS2V5cyIsIm5vZGUiLCJjaGlsZCIsIml0ZXJhdG9yRm4iLCJlbnRyaWVzIiwic3RlcCIsIm5leHQiLCJkb25lIiwidmFsaWRhdGVQcm9wVHlwZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJfbmFtZSIsImdldERlZmF1bHRQcm9wcyIsImlzUmVhY3RDbGFzc0FwcHJvdmVkIiwidmFsaWRhdGVGcmFnbWVudFByb3BzIiwiZnJhZ21lbnQiLCJqc3hXaXRoVmFsaWRhdGlvbiIsImlzU3RhdGljQ2hpbGRyZW4iLCJ2YWxpZFR5cGUiLCJzb3VyY2VJbmZvIiwidHlwZVN0cmluZyIsImpzeERFViQxIiwiRnJhZ21lbnQiLCJzYWZlVGhpcyIsIlJlZnJlc2hSdW50aW1lIiwiJFJlZnJlc2hJbmplY3RlZCQiLCJfX3JlYWN0X3JlZnJlc2hfbGlicmFyeV9fIiwicGFyZW50IiwiaXNDYWxsYWJsZSIsInRyeVRvU3RyaW5nIiwiJFR5cGVFcnJvciIsIlR5cGVFcnJvciIsImFyZ3VtZW50IiwiaXNPYmplY3QiLCIkU3RyaW5nIiwidW5jdXJyeVRoaXMiLCJzdHJpbmdTbGljZSIsIml0IiwiREVTQ1JJUFRPUlMiLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsImNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciIsImYiLCJiaXRtYXAiLCJmYWlscyIsImRvY3VtZW50QWxsIiwiYWxsIiwiSVNfSFRNTEREQSIsIkVYSVNUUyIsImNyZWF0ZUVsZW1lbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJEZW5vIiwidmVyc2lvbnMiLCJ2ZXJzaW9uIiwidjgiLCJpc0ZvcmNlZCIsInBhdGgiLCJjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkiLCJoYXNPd24iLCJ3cmFwQ29uc3RydWN0b3IiLCJOYXRpdmVDb25zdHJ1Y3RvciIsIldyYXBwZXIiLCJiIiwib3B0aW9ucyIsIlRBUkdFVCIsInRhcmdldCIsIkdMT0JBTCIsIlNUQVRJQyIsInN0YXQiLCJQUk9UTyIsInByb3RvIiwibmF0aXZlU291cmNlIiwidGFyZ2V0UHJvdG90eXBlIiwiRk9SQ0VEIiwiVVNFX05BVElWRSIsIlZJUlRVQUxfUFJPVE9UWVBFIiwic291cmNlUHJvcGVydHkiLCJ0YXJnZXRQcm9wZXJ0eSIsIm5hdGl2ZVByb3BlcnR5IiwicmVzdWx0UHJvcGVydHkiLCJkZXNjcmlwdG9yIiwiZm9yY2VkIiwiZG9udENhbGxHZXRTZXQiLCJ3cmFwIiwic2hhbSIsInJlYWwiLCJleGVjIiwiTkFUSVZFX0JJTkQiLCJGdW5jdGlvblByb3RvdHlwZSIsImFDYWxsYWJsZSIsInRoYXQiLCJjbGFzc29mUmF3IiwidW5jdXJyeVRoaXNXaXRoQmluZCIsImFGdW5jdGlvbiIsInZhcmlhYmxlIiwibmFtZXNwYWNlIiwibWV0aG9kIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJWIiwiUCIsImZ1bmMiLCJjaGVjayIsIk1hdGgiLCJnbG9iYWxUaGlzIiwidG9PYmplY3QiLCJjbGFzc29mIiwiJE9iamVjdCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiJGRvY3VtZW50QWxsIiwicmVwbGFjZW1lbnQiLCJmZWF0dXJlIiwiZGV0ZWN0aW9uIiwibm9ybWFsaXplIiwiUE9MWUZJTEwiLCJOQVRJVkUiLCJnZXRCdWlsdEluIiwiaXNQcm90b3R5cGVPZiIsIlVTRV9TWU1CT0xfQVNfVUlEIiwiJFN5bWJvbCIsIklFOF9ET01fREVGSU5FIiwiVjhfUFJPVE9UWVBFX0RFRklORV9CVUciLCJhbk9iamVjdCIsInRvUHJvcGVydHlLZXkiLCIkZGVmaW5lUHJvcGVydHkiLCIkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiRU5VTUVSQUJMRSIsIkNPTkZJR1VSQUJMRSIsIldSSVRBQkxFIiwiTyIsIkF0dHJpYnV0ZXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSIsInRvSW5kZXhlZE9iamVjdCIsIiRwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIk5BU0hPUk5fQlVHIiwiaW5wdXQiLCJwcmVmIiwidmFsIiwidmFsdWVPZiIsImRlZmluZUdsb2JhbFByb3BlcnR5IiwiU0hBUkVEIiwic3RvcmUiLCJJU19QVVJFIiwibW9kZSIsImNvcHlyaWdodCIsImxpY2Vuc2UiLCJWOF9WRVJTSU9OIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9sIiwiSW5kZXhlZE9iamVjdCIsInJlcXVpcmVPYmplY3RDb2VyY2libGUiLCJnZXRNZXRob2QiLCJvcmRpbmFyeVRvUHJpbWl0aXZlIiwid2VsbEtub3duU3ltYm9sIiwiVE9fUFJJTUlUSVZFIiwiZXhvdGljVG9QcmltIiwidG9QcmltaXRpdmUiLCJwb3N0Zml4IiwicmFuZG9tIiwiTkFUSVZFX1NZTUJPTCIsInNoYXJlZCIsInVpZCIsIldlbGxLbm93blN5bWJvbHNTdG9yZSIsImNyZWF0ZVdlbGxLbm93blN5bWJvbCIsIndpdGhvdXRTZXR0ZXIiLCIkIl0sInNvdXJjZVJvb3QiOiIifQ==