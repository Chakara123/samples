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
    backgroundImage: `url(${"/static"}/banner/images/${imgPath})`,
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
  element ||= new HTMLElement();
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
  type ||= 'null';
  let attribute = element.getAttribute(`data-${propName}`);
  if (type === 'string') {
    attribute ||= '';
    return attribute;
  }
  if (type === 'number') {
    attribute ||= '0';
    return attribute.includes('.') ? parseFloat(attribute) : parseInt(attribute, 10);
  }
  if (type === 'null') {
    return null;
  }
  if (type === 'boolean') {
    attribute ||= '0';
    // The CMS encodes booleans as '0' and '1'.
    return attribute !== '0';
  }
  attribute ||= 'null';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlLEdBQUc7RUFDcEI7RUFDQSxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDN0UsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQzdFLE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFDekIsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUN6QixNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUNuRCxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUNuRCxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUNuRCxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUNuRCxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQ3pCLE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUM3RSxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDN0UsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDbkQsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDbkQsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQ3RDLE1BQU0sRUFBRSxJQUFJO0VBQUUsTUFBTSxFQUFFLElBQUk7RUFDMUIsTUFBTSxFQUFFLElBQUk7RUFBRSxNQUFNLEVBQUUsSUFBSTtFQUMxQixNQUFNLEVBQUUsSUFBSTtFQUNaO0VBQ0EsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzFFLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDMUUsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMxRSxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzFFLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFDN0IsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDMUUsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMxRSxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDM0QsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDekYsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQ3pGLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFDN0IsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUs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Q0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsQ0FBQzs7V0FFRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUV4REE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9zcmMvYXBwcy9iYW5uZXIvQmFubmVyQ2FyZHMud2lkZ2V0LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9zcmMvYXBwcy9iYW5uZXIvY29tcG9uZW50cy9CYW5uZXJDYXJkcy50c3giLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3NyYy9hcHBzL2Jhbm5lci9pbmRleC50c3giLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3NyYy9jb21tb24vbG9jYWxlL2ZldGNoVHJhbnNsYXRpb25NZXNzYWdlcy50cyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvc3JjL2NvbW1vbi9ub3JtYWxpemVXaWRnZXRJbnB1dC50cyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvc3JjL3R5cGVzL2xvY2FsZS50cyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL0BwbW1td2gvcmVhY3QtcmVmcmVzaC13ZWJwYWNrLXBsdWdpbi9saWIvcnVudGltZS9SZWZyZXNoVXRpbHMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9sb2Rhc2guY2FtZWxjYXNlL2luZGV4LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmVzaC9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvcmVhY3QtcmVmcmVzaC9ydW50aW1lLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RET01cIiIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RJbnRsXCIiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9AcG1tbXdoL3JlYWN0LXJlZnJlc2gtd2VicGFjay1wbHVnaW4vY2xpZW50L1JlYWN0UmVmcmVzaEVudHJ5LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2FjdHVhbC9nbG9iYWwtdGhpcy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9nbG9iYWwtdGhpcy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mZWF0dXJlcy9nbG9iYWwtdGhpcy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9mdWxsL2dsb2JhbC10aGlzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hbi1vYmplY3QuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZG9jdW1lbnQtYWxsLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9leHBvcnQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2ZhaWxzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi1hcHBseS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dldC1tZXRob2QuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1wdXJlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1zeW1ib2wuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3BhdGguanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1vYmplY3QuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90cnktdG8tc3RyaW5nLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy91aWQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5nbG9iYWwtdGhpcy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzbmV4dC5nbG9iYWwtdGhpcy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvZ2xvYmFsLXRoaXMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svYm9vdHN0cmFwIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0IiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL3J1bnRpbWUvcmVhY3QgcmVmcmVzaCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9zdGFydHVwIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5OiAnLi9zcmMvYXBwcy9iYW5uZXIvaW5kZXgudHN4JyxcbiAgc2hvcnRjb2RlOiAnYmFubmVyJyxcbiAgdGl0bGU6ICdCYW5uZXIgQ2FyZHMnLFxuICBzdGF0dXM6ICdzdGFibGUnLFxuICBkZXNjcmlwdGlvbjogJ0luY3JlZGlibGUgYmFubmVyIHRyYWRpbmcgY2FyZHMnLFxuICBwcmV2aWV3OiB7XG4gICAgdXJsOiBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9pZnJhbWUuaHRtbD9pZD13aWRnZXRzLWJhbm5lci1jYXJkcy1jb21wb25lbnRzJnZpZXdNb2RlPXN0b3J5YCxcbiAgfSxcbiAgdXNlRXh0ZXJuYWxQZWVyRGVwZW5kZW5jaWVzOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC1pbnRsJ10sXG5cbiAgYWRkaXRpb25hbEN1c3RvbVByb3BlcnRpZXM6IHtcbiAgICBhdmFpbGFibGVUcmFuc2xhdGlvbnM6IFtcbiAgICAgICdhcicsXG4gICAgICAnZGUnLFxuICAgICAgJ2VuJyxcbiAgICAgICdlcycsXG4gICAgICAnZnInLFxuICAgICAgJ2l0JyxcbiAgICAgICdqYScsXG4gICAgICAna28nLFxuICAgICAgJ3BsJyxcbiAgICAgICdwdCcsXG4gICAgICAncnUnLFxuICAgICAgJ3RyJyxcbiAgICAgICd6aCcsXG4gICAgXSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ1NTUHJvcGVydGllcywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIGltZ1BhdGg6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdGV4dENvbG9yOiBzdHJpbmc7XG59XG5jb25zdCBzdHlsZXM6IFJlY29yZDxzdHJpbmcsIENTU1Byb3BlcnRpZXM+ID0ge1xuICBjYXJkOiB7XG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwLjVyZW0nLFxuICAgIGJveFNoYWRvdzogJzAuMTI1cmVtIDAuMTI1cmVtIDAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSknLFxuICAgIGZvbnRGYW1pbHk6ICdoZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBtYXhXaWR0aDogJzYzcmVtJyxcbiAgICBoZWlnaHQ6ICcyNnJlbScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICB9LFxuICBjYXJkQ29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgZm9udFNpemU6ICc4cmVtJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbGluZUhlaWdodDogJzEwMCUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBwYWRkaW5nOiAnMXJlbScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgY2FyZEluZm86IHtcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjAxKScsXG4gICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNiknLFxuICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgfSxcbiAgY2FyZE5hbWU6IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6ICcycmVtJyxcbiAgfSxcbiAgY2FyZERlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6ICcxLjI1cmVtJyxcbiAgICBwYWRkaW5nOiAnMXJlbSAwJyxcbiAgfSxcbiAgY2FyZENhdGVnb3J5OiB7XG4gICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgIGZvbnRTaXplOiAnMC44NXJlbScsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICB9LFxufTtcblxuY29uc3QgQmFubmVyQ2FyZHMgPSAoe1xuICBoZWFkaW5nLFxuICB0aXRsZSxcbiAgdGV4dENvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3IsXG4gIGltZ1BhdGgsXG59OiBDYXJkUHJvcHMpOiBSZWFjdEVsZW1lbnQgPT4gKFxuICA8ZGl2XG4gICAgc3R5bGU9e3tcbiAgICAgIC4uLnN0eWxlcy5jYXJkLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvY2Vzcy5lbnYuUFVCTElDX0FTU0VUU19VUkx9L2Jhbm5lci9pbWFnZXMvJHtpbWdQYXRofSlgLFxuICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgIH19XG4gID5cbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY2FyZEluZm99PlxuICAgICAgPGgxIHN0eWxlPXt7IC4uLnN0eWxlcy5jYXJkTmFtZSwgY29sb3I6IHRleHRDb2xvciB9fT57aGVhZGluZ308L2gxPlxuICAgICAgPHAgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmREZXNjcmlwdGlvbiwgY29sb3I6IHRleHRDb2xvciB9fT57dGl0bGV9PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lckNhcmRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgbm9ybWFsaXplV2lkZ2V0SW5wdXQgZnJvbSAnLi4vLi4vY29tbW9uL25vcm1hbGl6ZVdpZGdldElucHV0JztcbmltcG9ydCBCYW5uZXJDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvQmFubmVyQ2FyZHMnO1xuaW1wb3J0IHdpZGdldERlZmluaXRpb24gZnJvbSAnLi9CYW5uZXJDYXJkcy53aWRnZXQnO1xuXG5pbXBvcnQgeyBSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3R5cGVzL3dpZGdldHMnO1xuXG5jb25zdCByZW5kZXI6IFJlbmRlckZuID0gYXN5bmMgZnVuY3Rpb24gKGluc3RhbmNlSWQsIGxhbmdDb2RlLCBvcmlnaW4sIGNiKSB7XG4gIGNvbnN0IHsgZWxlbWVudCwgbG9jYWxlLCBtZXNzYWdlcyB9ID0gYXdhaXQgbm9ybWFsaXplV2lkZ2V0SW5wdXQoXG4gICAgaW5zdGFuY2VJZCxcbiAgICBsYW5nQ29kZSxcbiAgICB3aWRnZXREZWZpbml0aW9uLFxuICApO1xuICBpZiAoIWVsZW1lbnQgfHwgIWxvY2FsZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEludGxQcm92aWRlciBsb2NhbGU9e2xvY2FsZX0gbWVzc2FnZXM9e21lc3NhZ2VzfT5cbiAgICAgIDxCYW5uZXJDYXJkcyAvPlxuICAgIDwvSW50bFByb3ZpZGVyPixcbiAgICBlbGVtZW50LFxuICAgICgpID0+IGNiKGVsZW1lbnQpLFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vLi4vdHlwZXMvbG9jYWxlJztcbmltcG9ydCB7IFJlc29sdmVkSW50bENvbmZpZyB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5jb25zdCBmZXRjaFRyYW5zbGF0aW9uTWVzc2FnZXMgPSBhc3luYyAoXG4gIHdpZGdldElkOiBzdHJpbmcsXG4gIGxhbmdDb2RlOiBzdHJpbmcsXG4pOiBQcm9taXNlPFJlc29sdmVkSW50bENvbmZpZ1snbWVzc2FnZXMnXT4gPT4ge1xuICBjb25zdCBsb2NhbGUgPSBsYW5nQ29kZSBhcyBMb2NhbGU7XG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gZG8gdGhlIGV4dHJhIGZldGNoaW5nIGZvciBFbmdsaXNoIHNpbmNlIGl0J3MgdGhlIGRlZmF1bHQuXG4gIGlmIChsb2NhbGUgPT09IExvY2FsZS5FTikge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB0cnkge1xuICAgIC8vIFRoaXMgcmVsaWVzIG9uIHRoZSBDUkEgY29udmVudGlvbiBmb3IgUFVCTElDX1VSTC5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaChcbiAgICAgIGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L3RyYW5zbGF0aW9ucy8ke3dpZGdldElkfS8ke2xvY2FsZX0uanNvbmAsXG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSWYgc29tZXRoaW5nIHdlbnQgd3JvbmcgZG8gbm90IGZhaWwgdGhlIHdpZGdldCwgdXNlIHRoZSBkZWZhdWx0IGxhbmd1YWdlLlxuICAgIHJldHVybiB7fTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzO1xuIiwiaW1wb3J0IGNhbWVsaXplIGZyb20gJ2xvZGFzaC5jYW1lbGNhc2UnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vdHlwZXMvbG9jYWxlJztcbmltcG9ydCBmZXRjaFRyYW5zbGF0aW9uTWVzc2FnZXMgZnJvbSAnLi9sb2NhbGUvZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzJztcbmltcG9ydCB7IFJlc29sdmVkSW50bENvbmZpZyB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgVGhlbWVzIH0gZnJvbSAnLi4vdHlwZXMvZGlzcGxheXMnO1xuaW1wb3J0IHsgU2NoZW1hTGl0ZSwgV2lkZ2V0RGVmaW5pdGlvbiB9IGZyb20gJy4uL3R5cGVzL3dpZGdldHMnO1xuXG5leHBvcnQgdHlwZSBOb3JtYWxpemVkV2lkZ2V0SW5wdXQ8VD4gPSBQYXJ0aWFsPHtcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGxvY2FsZTogTG9jYWxlO1xuICBtZXNzYWdlczogUmVzb2x2ZWRJbnRsQ29uZmlnWydtZXNzYWdlcyddO1xuICBwYWxldHRlOiBUaGVtZXM7XG59PiAmIHsgcGFyYW1zOiBUIH07XG5cbmFzeW5jIGZ1bmN0aW9uIG5vcm1hbGl6ZVdpZGdldElucHV0PFQ+KFxuICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gIGxhbmdDb2RlOiBzdHJpbmcsXG4gIHdpZGdldERlZmluaXRpb246IFdpZGdldERlZmluaXRpb24sXG4gIHJlZmluZUlucHV0VHlwZXM/OiAoaW5wdXQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiBULFxuKTogUHJvbWlzZTxOb3JtYWxpemVkV2lkZ2V0SW5wdXQ8VD4+IHtcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnN0YW5jZUlkKTtcbiAgZWxlbWVudCB8fD0gbmV3IEhUTUxFbGVtZW50KCk7XG4gIGNvbnN0IHdpZGdldElkID0gd2lkZ2V0RGVmaW5pdGlvbi5zaG9ydGNvZGU7XG4gIGNvbnN0IHBhbGV0dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wYWxldHRlJykgYXMgVGhlbWVzO1xuICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IGZldGNoVHJhbnNsYXRpb25NZXNzYWdlcyh3aWRnZXRJZCwgbGFuZ0NvZGUpO1xuICBjb25zdCByYXdQYXJhbXMgPSBwYXJzZVVzZXJJbnB1dCh3aWRnZXREZWZpbml0aW9uLCBlbGVtZW50KTtcbiAgLy8gSWYgdGhlcmUgaXMgbm8gcmVmaW5lbWVudCBuZWVkZWQgaXQgbWF5IG1lYW4gdGhhdCB0aGUgcmF3IHBhcmFtcyBwYXJzZVxuICAvLyBkaXJlY3RseSBpbnRvIFQsIG9yIHRoYXQgdGhlcmUgYXJlIG5vIHBhcmFtcy5cbiAgY29uc3QgcGFyYW1zID0gcmVmaW5lSW5wdXRUeXBlc1xuICAgID8gcmVmaW5lSW5wdXRUeXBlcyhyYXdQYXJhbXMpXG4gICAgOiAocmF3UGFyYW1zIGFzIFQpO1xuICByZXR1cm4geyBlbGVtZW50LCBsb2NhbGU6IGxhbmdDb2RlIGFzIExvY2FsZSwgcGFsZXR0ZSwgbWVzc2FnZXMsIHBhcmFtcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVc2VySW5wdXQoXG4gIHdpZGdldERlZmluaXRpb246IFdpZGdldERlZmluaXRpb24sXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAvLyBGaXJzdCB3ZSBuZWVkIHRvIGtub3cgd2hhdCBhcmUgdGhlIGlucHV0IG9wdGlvbnMuXG4gIGNvbnN0IHNjaGVtYVByb3BzID1cbiAgICB3aWRnZXREZWZpbml0aW9uPy5zZXR0aW5nc1NjaGVtYT8ucHJvcGVydGllcz8uZmllbGRzPy5wcm9wZXJ0aWVzIHx8IHt9O1xuICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWFQcm9wcyk7XG4gIHJldHVybiBwcm9wTmFtZXMucmVkdWNlKFxuICAgIChwYXJhbXMsIHByb3BOYW1lOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9PiAoe1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgW2NhbWVsaXplKHByb3BOYW1lKV06IHBhcnNlVmFsdWUoXG4gICAgICAgIHByb3BOYW1lLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBzY2hlbWFQcm9wcz8uW3Byb3BOYW1lXSB8fCB7IHR5cGU6ICdudWxsJyB9LFxuICAgICAgKSxcbiAgICB9KSxcbiAgICB7fSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZShcbiAgcHJvcE5hbWU6IHN0cmluZyxcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHsgdHlwZSB9OiBTY2hlbWFMaXRlLFxuKTogYW55IHtcbiAgdHlwZSB8fD0gJ251bGwnO1xuICBsZXQgYXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtJHtwcm9wTmFtZX1gKTtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYXR0cmlidXRlIHx8PSAnJztcbiAgICByZXR1cm4gYXR0cmlidXRlO1xuICB9XG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgIGF0dHJpYnV0ZSB8fD0gJzAnO1xuICAgIHJldHVybiBhdHRyaWJ1dGUuaW5jbHVkZXMoJy4nKVxuICAgICAgPyBwYXJzZUZsb2F0KGF0dHJpYnV0ZSlcbiAgICAgIDogcGFyc2VJbnQoYXR0cmlidXRlLCAxMCk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICBhdHRyaWJ1dGUgfHw9ICcwJztcbiAgICAvLyBUaGUgQ01TIGVuY29kZXMgYm9vbGVhbnMgYXMgJzAnIGFuZCAnMScuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZSAhPT0gJzAnO1xuICB9XG4gIGF0dHJpYnV0ZSB8fD0gJ251bGwnO1xuICByZXR1cm4gSlNPTi5wYXJzZShhdHRyaWJ1dGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBub3JtYWxpemVXaWRnZXRJbnB1dDtcbiIsImV4cG9ydCBlbnVtIExvY2FsZSB7XG4gIEFSID0gJ2FyJyxcbiAgREUgPSAnZGUnLFxuICBFTiA9ICdlbicsXG4gIEVTID0gJ2VzJyxcbiAgRlIgPSAnZnInLFxuICBJVCA9ICdpdCcsXG4gIEpBID0gJ2phJyxcbiAgS08gPSAna28nLFxuICBQTCA9ICdwbCcsXG4gIFBUID0gJ3B0JyxcbiAgUlUgPSAncnUnLFxuICBUUiA9ICd0cicsXG4gIFpIID0gJ3poJyxcbn1cblxuY29uc3QgYXZhaWxhYmxlTGFuZ2NvZGVzOiBMb2NhbGVbXSA9IFtcbiAgTG9jYWxlLkFSLFxuICBMb2NhbGUuREUsXG4gIExvY2FsZS5FTixcbiAgTG9jYWxlLkVTLFxuICBMb2NhbGUuRlIsXG4gIExvY2FsZS5JVCxcbiAgTG9jYWxlLkpBLFxuICBMb2NhbGUuS08sXG4gIExvY2FsZS5QTCxcbiAgTG9jYWxlLlBULFxuICBMb2NhbGUuUlUsXG4gIExvY2FsZS5UUixcbiAgTG9jYWxlLlpILFxuXTtcbiIsIi8qIGdsb2JhbCBfX3dlYnBhY2tfcmVxdWlyZV9fICovXG52YXIgUmVmcmVzaCA9IHJlcXVpcmUoJ3JlYWN0LXJlZnJlc2gvcnVudGltZScpO1xuXG4vKipcbiAqIEV4dHJhY3RzIGV4cG9ydHMgZnJvbSBhIHdlYnBhY2sgbW9kdWxlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVJZCBBIFdlYnBhY2sgbW9kdWxlIElELlxuICogQHJldHVybnMgeyp9IEFuIGV4cG9ydHMgb2JqZWN0IGZyb20gdGhlIG1vZHVsZS5cbiAqL1xuZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cyhtb2R1bGVJZCkge1xuICBpZiAodHlwZW9mIG1vZHVsZUlkID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGBtb2R1bGVJZGAgaXMgdW5hdmFpbGFibGUsIHdoaWNoIGluZGljYXRlcyB0aGF0IHRoaXMgbW9kdWxlIGlzIG5vdCBpbiB0aGUgY2FjaGUsXG4gICAgLy8gd2hpY2ggbWVhbnMgd2Ugd29uJ3QgYmUgYWJsZSB0byBjYXB0dXJlIGFueSBleHBvcnRzLFxuICAgIC8vIGFuZCB0aHVzIHRoZXkgY2Fubm90IGJlIHJlZnJlc2hlZCBzYWZlbHkuXG4gICAgLy8gVGhlc2UgYXJlIGxpa2VseSBydW50aW1lIG9yIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBtb2R1bGVzLlxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBtYXliZU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG4gIGlmICh0eXBlb2YgbWF5YmVNb2R1bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gYG1vZHVsZUlkYCBpcyBhdmFpbGFibGUgYnV0IHRoZSBtb2R1bGUgaW4gY2FjaGUgaXMgdW5hdmFpbGFibGUsXG4gICAgLy8gd2hpY2ggaW5kaWNhdGVzIHRoZSBtb2R1bGUgaXMgc29tZWhvdyBjb3JydXB0ZWQgKGUuZy4gYnJva2VuIFdlYnBhY2FrIGBtb2R1bGVgIGdsb2JhbHMpLlxuICAgIC8vIFdlIHdpbGwgd2FybiB0aGUgdXNlciAoYXMgdGhpcyBpcyBsaWtlbHkgYSBtaXN0YWtlKSBhbmQgYXNzdW1lIHRoZXkgY2Fubm90IGJlIHJlZnJlc2hlZC5cbiAgICBjb25zb2xlLndhcm4oJ1tSZWFjdCBSZWZyZXNoXSBGYWlsZWQgdG8gZ2V0IGV4cG9ydHMgZm9yIG1vZHVsZTogJyArIG1vZHVsZUlkICsgJy4nKTtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICB2YXIgZXhwb3J0c09yUHJvbWlzZSA9IG1heWJlTW9kdWxlLmV4cG9ydHM7XG4gIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZXhwb3J0c09yUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICByZXR1cm4gZXhwb3J0c09yUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cztcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZXhwb3J0c09yUHJvbWlzZTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzaWduYXR1cmUgb2YgYSBSZWFjdCByZWZyZXNoIGJvdW5kYXJ5LlxuICogSWYgdGhpcyBzaWduYXR1cmUgY2hhbmdlcywgaXQncyB1bnNhZmUgdG8gYWNjZXB0IHRoZSBib3VuZGFyeS5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBvbmUgaW4gW01ldHJvXShodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svbWV0cm8vYmxvYi85MDdkNmFmMjJhYzZlYmU1ODU3MmJlNDE4ZTkyNTNhOTA2NjVlY2JkL3BhY2thZ2VzL21ldHJvL3NyYy9saWIvcG9seWZpbGxzL3JlcXVpcmUuanMjTDc5NS1MODE2KS5cbiAqIEBwYXJhbSB7Kn0gbW9kdWxlRXhwb3J0cyBBIFdlYnBhY2sgbW9kdWxlIGV4cG9ydHMgb2JqZWN0LlxuICogQHJldHVybnMge3N0cmluZ1tdfSBBIFJlYWN0IHJlZnJlc2ggYm91bmRhcnkgc2lnbmF0dXJlIGFycmF5LlxuICovXG5mdW5jdGlvbiBnZXRSZWFjdFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShtb2R1bGVFeHBvcnRzKSB7XG4gIHZhciBzaWduYXR1cmUgPSBbXTtcbiAgc2lnbmF0dXJlLnB1c2goUmVmcmVzaC5nZXRGYW1pbHlCeVR5cGUobW9kdWxlRXhwb3J0cykpO1xuXG4gIGlmIChtb2R1bGVFeHBvcnRzID09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICBpZiAoa2V5ID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHNpZ25hdHVyZS5wdXNoKGtleSk7XG4gICAgc2lnbmF0dXJlLnB1c2goUmVmcmVzaC5nZXRGYW1pbHlCeVR5cGUobW9kdWxlRXhwb3J0c1trZXldKSk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBkYXRhIG9iamVjdCB0byBiZSByZXRhaW5lZCBhY3Jvc3MgcmVmcmVzaGVzLlxuICogVGhpcyBvYmplY3Qgc2hvdWxkIG5vdCB0cmFuc3RpdmVseSByZWZlcmVuY2UgcHJldmlvdXMgZXhwb3J0cyxcbiAqIHdoaWNoIGNhbiBmb3JtIGluZmluaXRlIGNoYWluIG9mIG9iamVjdHMgYWNyb3NzIHJlZnJlc2hlcywgd2hpY2ggY2FuIHByZXNzdXJlIFJBTS5cbiAqXG4gKiBAcGFyYW0geyp9IG1vZHVsZUV4cG9ydHMgQSBXZWJwYWNrIG1vZHVsZSBleHBvcnRzIG9iamVjdC5cbiAqIEByZXR1cm5zIHsqfSBBIFJlYWN0IHJlZnJlc2ggYm91bmRhcnkgc2lnbmF0dXJlIGFycmF5LlxuICovXG5mdW5jdGlvbiBnZXRXZWJwYWNrSG90RGF0YShtb2R1bGVFeHBvcnRzKSB7XG4gIHJldHVybiB7XG4gICAgc2lnbmF0dXJlOiBnZXRSZWFjdFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShtb2R1bGVFeHBvcnRzKSxcbiAgICBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5OiBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5KG1vZHVsZUV4cG9ydHMpLFxuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBoZWxwZXIgdGhhdCBwZXJmb3JtcyBhIGRlbGF5ZWQgUmVhY3QgcmVmcmVzaC5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbihmdW5jdGlvbigpOiB2b2lkKTogdm9pZH0gQSBkZWJvdW5jZWQgUmVhY3QgcmVmcmVzaCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRGVib3VuY2VVcGRhdGUoKSB7XG4gIC8qKlxuICAgKiBBIGNhY2hlZCBzZXRUaW1lb3V0IGhhbmRsZXIuXG4gICAqIEB0eXBlIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqL1xuICB2YXIgcmVmcmVzaFRpbWVvdXQ7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIHJlYWN0IHJlZnJlc2ggb24gYSBkZWxheSBhbmQgY2xlYXJzIHRoZSBlcnJvciBvdmVybGF5LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IHZvaWR9IGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gZW5xdWV1ZVVwZGF0ZShjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgcmVmcmVzaFRpbWVvdXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZWZyZXNoVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZWZyZXNoVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgUmVmcmVzaC5wZXJmb3JtUmVhY3RSZWZyZXNoKCk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9LCAzMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVucXVldWVVcGRhdGU7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFsbCBleHBvcnRzIGFyZSBsaWtlbHkgYSBSZWFjdCBjb21wb25lbnQuXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiB0aGUgb25lIGluIFtNZXRyb10oaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL21ldHJvL2Jsb2IvZmViZGJhMjM4MzExM2M4ODI5NmM2MWUyOGU0ZWY2YTdmNDkzOWZkYS9wYWNrYWdlcy9tZXRyby9zcmMvbGliL3BvbHlmaWxscy9yZXF1aXJlLmpzI0w3NDgtTDc3NCkuXG4gKiBAcGFyYW0geyp9IG1vZHVsZUV4cG9ydHMgQSBXZWJwYWNrIG1vZHVsZSBleHBvcnRzIG9iamVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBleHBvcnRzIGFyZSBSZWFjdCBjb21wb25lbnQgbGlrZS5cbiAqL1xuZnVuY3Rpb24gaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShtb2R1bGVFeHBvcnRzKSB7XG4gIGlmIChSZWZyZXNoLmlzTGlrZWx5Q29tcG9uZW50VHlwZShtb2R1bGVFeHBvcnRzKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChtb2R1bGVFeHBvcnRzID09PSB1bmRlZmluZWQgfHwgbW9kdWxlRXhwb3J0cyA9PT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBoYXNFeHBvcnRzID0gZmFsc2U7XG4gIHZhciBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyA9IHRydWU7XG4gIGZvciAodmFyIGtleSBpbiBtb2R1bGVFeHBvcnRzKSB7XG4gICAgaGFzRXhwb3J0cyA9IHRydWU7XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBFUyBNb2R1bGUgaW5kaWNhdG9yIGZsYWdcbiAgICBpZiAoa2V5ID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIFdlIGNhbiAoYW5kIGhhdmUgdG8pIHNhZmVseSBleGVjdXRlIGdldHRlcnMgaGVyZSxcbiAgICAvLyBhcyBXZWJwYWNrIG1hbnVhbGx5IGFzc2lnbnMgaGFybW9ueSBleHBvcnRzIHRvIGdldHRlcnMsXG4gICAgLy8gd2l0aG91dCBhbnkgc2lkZS1lZmZlY3RzIGF0dGFjaGVkLlxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iL2I5MzA0ODY0M2ZlNzRkZTJhNjkzMTc1NTkxMWRhMTIxMmRmNTU4OTcvbGliL01haW5UZW1wbGF0ZS5qcyNMMjgxXG4gICAgdmFyIGV4cG9ydFZhbHVlID0gbW9kdWxlRXhwb3J0c1trZXldO1xuICAgIGlmICghUmVmcmVzaC5pc0xpa2VseUNvbXBvbmVudFR5cGUoZXhwb3J0VmFsdWUpKSB7XG4gICAgICBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoYXNFeHBvcnRzICYmIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBleHBvcnRzIGFyZSBsaWtlbHkgYSBSZWFjdCBjb21wb25lbnQgYW5kIHJlZ2lzdGVycyB0aGVtLlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIG9uZSBpbiBbTWV0cm9dKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9tZXRyby9ibG9iL2ZlYmRiYTIzODMxMTNjODgyOTZjNjFlMjhlNGVmNmE3ZjQ5MzlmZGEvcGFja2FnZXMvbWV0cm8vc3JjL2xpYi9wb2x5ZmlsbHMvcmVxdWlyZS5qcyNMODE4LUw4MzUpLlxuICogQHBhcmFtIHsqfSBtb2R1bGVFeHBvcnRzIEEgV2VicGFjayBtb2R1bGUgZXhwb3J0cyBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kdWxlSWQgQSBXZWJwYWNrIG1vZHVsZSBJRC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gobW9kdWxlRXhwb3J0cywgbW9kdWxlSWQpIHtcbiAgaWYgKFJlZnJlc2guaXNMaWtlbHlDb21wb25lbnRUeXBlKG1vZHVsZUV4cG9ydHMpKSB7XG4gICAgLy8gUmVnaXN0ZXIgbW9kdWxlLmV4cG9ydHMgaWYgaXQgaXMgbGlrZWx5IGEgY29tcG9uZW50XG4gICAgUmVmcmVzaC5yZWdpc3Rlcihtb2R1bGVFeHBvcnRzLCBtb2R1bGVJZCArICcgJWV4cG9ydHMlJyk7XG4gIH1cblxuICBpZiAobW9kdWxlRXhwb3J0cyA9PT0gdW5kZWZpbmVkIHx8IG1vZHVsZUV4cG9ydHMgPT09IG51bGwgfHwgdHlwZW9mIG1vZHVsZUV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgdGhlIGV4cG9ydHMuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICAvLyBTa2lwIHJlZ2lzdGVyaW5nIHRoZSBFUyBNb2R1bGUgaW5kaWNhdG9yXG4gICAgaWYgKGtleSA9PT0gJ19fZXNNb2R1bGUnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgaWYgKFJlZnJlc2guaXNMaWtlbHlDb21wb25lbnRUeXBlKGV4cG9ydFZhbHVlKSkge1xuICAgICAgdmFyIHR5cGVJRCA9IG1vZHVsZUlkICsgJyAlZXhwb3J0cyUgJyArIGtleTtcbiAgICAgIFJlZnJlc2gucmVnaXN0ZXIoZXhwb3J0VmFsdWUsIHR5cGVJRCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGFyZXMgcHJldmlvdXMgYW5kIG5leHQgbW9kdWxlIG9iamVjdHMgdG8gY2hlY2sgZm9yIG11dGF0ZWQgYm91bmRhcmllcy5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBvbmUgaW4gW01ldHJvXShodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svbWV0cm8vYmxvYi85MDdkNmFmMjJhYzZlYmU1ODU3MmJlNDE4ZTkyNTNhOTA2NjVlY2JkL3BhY2thZ2VzL21ldHJvL3NyYy9saWIvcG9seWZpbGxzL3JlcXVpcmUuanMjTDc3Ni1MNzkyKS5cbiAqIEBwYXJhbSB7Kn0gcHJldlNpZ25hdHVyZSBUaGUgc2lnbmF0dXJlIG9mIHRoZSBjdXJyZW50IFdlYnBhY2sgbW9kdWxlIGV4cG9ydHMgb2JqZWN0LlxuICogQHBhcmFtIHsqfSBuZXh0U2lnbmF0dXJlIFRoZSBzaWduYXR1cmUgb2YgdGhlIG5leHQgV2VicGFjayBtb2R1bGUgZXhwb3J0cyBvYmplY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB0aGUgUmVhY3QgcmVmcmVzaCBib3VuZGFyeSBzaG91bGQgYmUgaW52YWxpZGF0ZWQuXG4gKi9cbmZ1bmN0aW9uIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShwcmV2U2lnbmF0dXJlLCBuZXh0U2lnbmF0dXJlKSB7XG4gIGlmIChwcmV2U2lnbmF0dXJlLmxlbmd0aCAhPT0gbmV4dFNpZ25hdHVyZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV4dFNpZ25hdHVyZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChwcmV2U2lnbmF0dXJlW2ldICE9PSBuZXh0U2lnbmF0dXJlW2ldKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBlbnF1ZXVlVXBkYXRlID0gY3JlYXRlRGVib3VuY2VVcGRhdGUoKTtcbmZ1bmN0aW9uIGV4ZWN1dGVSdW50aW1lKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlkLCB3ZWJwYWNrSG90LCByZWZyZXNoT3ZlcmxheSwgaXNUZXN0KSB7XG4gIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChtb2R1bGVFeHBvcnRzLCBtb2R1bGVJZCk7XG5cbiAgaWYgKHdlYnBhY2tIb3QpIHtcbiAgICB2YXIgaXNIb3RVcGRhdGUgPSAhIXdlYnBhY2tIb3QuZGF0YTtcbiAgICB2YXIgcHJldkRhdGE7XG4gICAgaWYgKGlzSG90VXBkYXRlKSB7XG4gICAgICBwcmV2RGF0YSA9IHdlYnBhY2tIb3QuZGF0YS5wcmV2RGF0YTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShtb2R1bGVFeHBvcnRzKSkge1xuICAgICAgd2VicGFja0hvdC5kaXNwb3NlKFxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayB0byBwZXJmb3JtcyBhIGZ1bGwgcmVmcmVzaCBpZiBSZWFjdCBoYXMgdW5yZWNvdmVyYWJsZSBlcnJvcnMsXG4gICAgICAgICAqIGFuZCBhbHNvIGNhY2hlcyB0aGUgdG8tYmUtZGlzcG9zZWQgbW9kdWxlLlxuICAgICAgICAgKiBAcGFyYW0geyp9IGRhdGEgQSBob3QgbW9kdWxlIGRhdGEgb2JqZWN0IGZyb20gV2VicGFjayBITVIuXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gaG90RGlzcG9zZUNhbGxiYWNrKGRhdGEpIHtcbiAgICAgICAgICAvLyBXZSBoYXZlIHRvIG11dGF0ZSB0aGUgZGF0YSBvYmplY3QgdG8gZ2V0IGRhdGEgcmVnaXN0ZXJlZCBhbmQgY2FjaGVkXG4gICAgICAgICAgZGF0YS5wcmV2RGF0YSA9IGdldFdlYnBhY2tIb3REYXRhKG1vZHVsZUV4cG9ydHMpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgd2VicGFja0hvdC5hY2NlcHQoXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBlcnJvciBoYW5kbGVyIHRvIGFsbG93IHNlbGYtcmVjb3ZlcmluZyBiZWhhdmlvdXJzLlxuICAgICAgICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgZXZhbHVhdGlvbiBvZiBhIG1vZHVsZS5cbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBob3RFcnJvckhhbmRsZXIoZXJyb3IpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlZnJlc2hPdmVybGF5ICE9PSAndW5kZWZpbmVkJyAmJiByZWZyZXNoT3ZlcmxheSkge1xuICAgICAgICAgICAgcmVmcmVzaE92ZXJsYXkuaGFuZGxlUnVudGltZUVycm9yKGVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGlzVGVzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNUZXN0KSB7XG4gICAgICAgICAgICBpZiAod2luZG93Lm9uSG90QWNjZXB0RXJyb3IpIHtcbiAgICAgICAgICAgICAgd2luZG93Lm9uSG90QWNjZXB0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXS5ob3QuYWNjZXB0KGhvdEVycm9ySGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGlmIChpc0hvdFVwZGF0ZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJldkRhdGEgJiZcbiAgICAgICAgICBwcmV2RGF0YS5pc1JlYWN0UmVmcmVzaEJvdW5kYXJ5ICYmXG4gICAgICAgICAgc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5KFxuICAgICAgICAgICAgcHJldkRhdGEuc2lnbmF0dXJlLFxuICAgICAgICAgICAgZ2V0UmVhY3RSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUobW9kdWxlRXhwb3J0cylcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHdlYnBhY2tIb3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVucXVldWVVcGRhdGUoXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgZnVuY3Rpb24gdG8gZGlzbWlzcyB0aGUgZXJyb3Igb3ZlcmxheSBhZnRlciBwZXJmb3JtaW5nIFJlYWN0IHJlZnJlc2guXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmcmVzaE92ZXJsYXkgIT09ICd1bmRlZmluZWQnICYmIHJlZnJlc2hPdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgcmVmcmVzaE92ZXJsYXkuY2xlYXJSdW50aW1lRXJyb3JzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0hvdFVwZGF0ZSAmJiB0eXBlb2YgcHJldkRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdlYnBhY2tIb3QuaW52YWxpZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUoe1xuICBlbnF1ZXVlVXBkYXRlOiBlbnF1ZXVlVXBkYXRlLFxuICBleGVjdXRlUnVudGltZTogZXhlY3V0ZVJ1bnRpbWUsXG4gIGdldE1vZHVsZUV4cG9ydHM6IGdldE1vZHVsZUV4cG9ydHMsXG4gIGlzUmVhY3RSZWZyZXNoQm91bmRhcnk6IGlzUmVhY3RSZWZyZXNoQm91bmRhcnksXG4gIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaDogcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoLFxufSk7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCB3b3JkcyBjb21wb3NlZCBvZiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycy4gKi9cbnZhciByZUFzY2lpV29yZCA9IC9bXlxceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceDdmXSsvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggTGF0aW4gVW5pY29kZSBsZXR0ZXJzIChleGNsdWRpbmcgbWF0aGVtYXRpY2FsIG9wZXJhdG9ycykuICovXG52YXIgcmVMYXRpbiA9IC9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxceGZmXFx1MDEwMC1cXHUwMTdmXS9nO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyMycsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGYwJyxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNQdW5jdHVhdGlvblJhbmdlID0gJ1xcXFx1MjAwMC1cXFxcdTIwNmYnLFxuICAgIHJzU3BhY2VSYW5nZSA9ICcgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMCcsXG4gICAgcnNVcHBlclJhbmdlID0gJ0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZScsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnLFxuICAgIHJzQnJlYWtSYW5nZSA9IHJzTWF0aE9wUmFuZ2UgKyByc05vbkNoYXJSYW5nZSArIHJzUHVuY3R1YXRpb25SYW5nZSArIHJzU3BhY2VSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiLFxuICAgIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0JyZWFrID0gJ1snICsgcnNCcmVha1JhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyAnXScsXG4gICAgcnNEaWdpdHMgPSAnXFxcXGQrJyxcbiAgICByc0RpbmdiYXQgPSAnWycgKyByc0RpbmdiYXRSYW5nZSArICddJyxcbiAgICByc0xvd2VyID0gJ1snICsgcnNMb3dlclJhbmdlICsgJ10nLFxuICAgIHJzTWlzYyA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgcnNCcmVha1JhbmdlICsgcnNEaWdpdHMgKyByc0RpbmdiYXRSYW5nZSArIHJzTG93ZXJSYW5nZSArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNVcHBlciA9ICdbJyArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByc0xvd2VyTWlzYyA9ICcoPzonICsgcnNMb3dlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc1VwcGVyTWlzYyA9ICcoPzonICsgcnNVcHBlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc09wdExvd2VyQ29udHIgPSAnKD86JyArIHJzQXBvcyArICcoPzpkfGxsfG18cmV8c3x0fHZlKSk/JyxcbiAgICByc09wdFVwcGVyQ29udHIgPSAnKD86JyArIHJzQXBvcyArICcoPzpEfExMfE18UkV8U3xUfFZFKSk/JyxcbiAgICByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc0Vtb2ppID0gJyg/OicgKyBbcnNEaW5nYmF0LCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc1NlcSxcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYXBvc3Ryb3BoZXMuICovXG52YXIgcmVBcG9zID0gUmVnRXhwKHJzQXBvcywgJ2cnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykgYW5kXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGZvciBzeW1ib2xzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3NfZm9yX1N5bWJvbHMpLlxuICovXG52YXIgcmVDb21ib01hcmsgPSBSZWdFeHAocnNDb21ibywgJ2cnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggY29tcGxleCBvciBjb21wb3VuZCB3b3Jkcy4gKi9cbnZhciByZVVuaWNvZGVXb3JkID0gUmVnRXhwKFtcbiAgcnNVcHBlciArICc/JyArIHJzTG93ZXIgKyAnKycgKyByc09wdExvd2VyQ29udHIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlck1pc2MgKyAnKycgKyByc09wdFVwcGVyQ29udHIgKyAnKD89JyArIFtyc0JyZWFrLCByc1VwcGVyICsgcnNMb3dlck1pc2MsICckJ10uam9pbignfCcpICsgJyknLFxuICByc1VwcGVyICsgJz8nICsgcnNMb3dlck1pc2MgKyAnKycgKyByc09wdExvd2VyQ29udHIsXG4gIHJzVXBwZXIgKyAnKycgKyByc09wdFVwcGVyQ29udHIsXG4gIHJzRGlnaXRzLFxuICByc0Vtb2ppXG5dLmpvaW4oJ3wnKSwgJ2cnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3MgdGhhdCBuZWVkIGEgbW9yZSByb2J1c3QgcmVnZXhwIHRvIG1hdGNoIHdvcmRzLiAqL1xudmFyIHJlSGFzVW5pY29kZVdvcmQgPSAvW2Etel1bQS1aXXxbQS1aXXsyLH1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS87XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAnc3MnXG59O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gQVNDSUkgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJyk7XG59XG5cbi8qKlxuICogU3BsaXRzIGFuIEFTQ0lJIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gYXNjaWlXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZUFzY2lpV29yZCkgfHwgW107XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlPZmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5T2Yob2JqZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlYnVycmAgdG8gY29udmVydCBMYXRpbi0xIFN1cHBsZW1lbnQgYW5kIExhdGluIEV4dGVuZGVkLUFcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGxldHRlciBUaGUgbWF0Y2hlZCBsZXR0ZXIgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgbGV0dGVyLlxuICovXG52YXIgZGVidXJyTGV0dGVyID0gYmFzZVByb3BlcnR5T2YoZGVidXJyZWRMZXR0ZXJzKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgYSB3b3JkIGNvbXBvc2VkIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSB3b3JkIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGVXb3JkKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlV29yZC50ZXN0KHN0cmluZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVUb0FycmF5KHN0cmluZylcbiAgICA6IGFzY2lpVG9BcnJheShzdHJpbmcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgVW5pY29kZSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlKSB8fCBbXTtcbn1cblxuLyoqXG4gKiBTcGxpdHMgYSBVbmljb2RlIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqL1xuZnVuY3Rpb24gdW5pY29kZVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZVdvcmQpIHx8IFtdO1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSBlbmQgPiBsZW5ndGggPyBsZW5ndGggOiBlbmQ7XG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlbmd0aDtcbiAgfVxuICBsZW5ndGggPSBzdGFydCA+IGVuZCA/IDAgOiAoKGVuZCAtIHN0YXJ0KSA+Pj4gMCk7XG4gIHN0YXJ0ID4+Pj0gMDtcblxuICB2YXIgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2FzdHMgYGFycmF5YCB0byBhIHNsaWNlIGlmIGl0J3MgbmVlZGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3Qgc2xpY2UuXG4gKi9cbmZ1bmN0aW9uIGNhc3RTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZDtcbiAgcmV0dXJuICghc3RhcnQgJiYgZW5kID49IGxlbmd0aCkgPyBhcnJheSA6IGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8ubG93ZXJGaXJzdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIFRoZSBuYW1lIG9mIHRoZSBgU3RyaW5nYCBjYXNlIG1ldGhvZCB0byB1c2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDYXNlRmlyc3QobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgIHZhciBzdHJTeW1ib2xzID0gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgICA/IHN0cmluZ1RvQXJyYXkoc3RyaW5nKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICB2YXIgY2hyID0gc3RyU3ltYm9sc1xuICAgICAgPyBzdHJTeW1ib2xzWzBdXG4gICAgICA6IHN0cmluZy5jaGFyQXQoMCk7XG5cbiAgICB2YXIgdHJhaWxpbmcgPSBzdHJTeW1ib2xzXG4gICAgICA/IGNhc3RTbGljZShzdHJTeW1ib2xzLCAxKS5qb2luKCcnKVxuICAgICAgOiBzdHJpbmcuc2xpY2UoMSk7XG5cbiAgICByZXR1cm4gY2hyW21ldGhvZE5hbWVdKCkgKyB0cmFpbGluZztcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5jYW1lbENhc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY29tYmluZSBlYWNoIHdvcmQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjb21wb3VuZGVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb3VuZGVyKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2Uod29yZHMoZGVidXJyKHN0cmluZykucmVwbGFjZShyZUFwb3MsICcnKSksIGNhbGxiYWNrLCAnJyk7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBbY2FtZWwgY2FzZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2FtZWxDYXNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FtZWwgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhbWVsQ2FzZSgnRm9vIEJhcicpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqXG4gKiBfLmNhbWVsQ2FzZSgnLS1mb28tYmFyLS0nKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKlxuICogXy5jYW1lbENhc2UoJ19fRk9PX0JBUl9fJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICovXG52YXIgY2FtZWxDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHdvcmQgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyBjYXBpdGFsaXplKHdvcmQpIDogd29yZCk7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UgYW5kIHRoZSByZW1haW5pbmdcbiAqIHRvIGxvd2VyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY2FwaXRhbGl6ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNhcGl0YWxpemVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jYXBpdGFsaXplKCdGUkVEJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqL1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHVwcGVyRmlyc3QodG9TdHJpbmcoc3RyaW5nKS50b0xvd2VyQ2FzZSgpKTtcbn1cblxuLyoqXG4gKiBEZWJ1cnJzIGBzdHJpbmdgIGJ5IGNvbnZlcnRpbmdcbiAqIFtMYXRpbi0xIFN1cHBsZW1lbnRdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluLTFfU3VwcGxlbWVudF8oVW5pY29kZV9ibG9jaykjQ2hhcmFjdGVyX3RhYmxlKVxuICogYW5kIFtMYXRpbiBFeHRlbmRlZC1BXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbl9FeHRlbmRlZC1BKVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzIGFuZCByZW1vdmluZ1xuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVidXJyKCdkw6lqw6AgdnUnKTtcbiAqIC8vID0+ICdkZWphIHZ1J1xuICovXG5mdW5jdGlvbiBkZWJ1cnIoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nLnJlcGxhY2UocmVMYXRpbiwgZGVidXJyTGV0dGVyKS5yZXBsYWNlKHJlQ29tYm9NYXJrLCAnJyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYCB0byB1cHBlciBjYXNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVwcGVyRmlyc3QoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICpcbiAqIF8udXBwZXJGaXJzdCgnRlJFRCcpO1xuICogLy8gPT4gJ0ZSRUQnXG4gKi9cbnZhciB1cHBlckZpcnN0ID0gY3JlYXRlQ2FzZUZpcnN0KCd0b1VwcGVyQ2FzZScpO1xuXG4vKipcbiAqIFNwbGl0cyBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfSBbcGF0dGVybl0gVGhlIHBhdHRlcm4gdG8gbWF0Y2ggd29yZHMuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcyddXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnLCAvW14sIF0rL2cpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICcmJywgJ3BlYmJsZXMnXVxuICovXG5mdW5jdGlvbiB3b3JkcyhzdHJpbmcsIHBhdHRlcm4sIGd1YXJkKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHBhdHRlcm4gPSBndWFyZCA/IHVuZGVmaW5lZCA6IHBhdHRlcm47XG5cbiAgaWYgKHBhdHRlcm4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNVbmljb2RlV29yZChzdHJpbmcpID8gdW5pY29kZVdvcmRzKHN0cmluZykgOiBhc2NpaVdvcmRzKHN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5tYXRjaChwYXR0ZXJuKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbENhc2U7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdnVuZGVmaW5lZFxuICogcmVhY3QtcmVmcmVzaC1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG52YXIgUkVBQ1RfQ0FDSEVfVFlQRSA9IDB4ZWFlNDtcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG4gIFJFQUNUX0NBQ0hFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNhY2hlJyk7XG59XG5cbnZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7IC8vIFdlIG5ldmVyIHJlbW92ZSB0aGVzZSBhc3NvY2lhdGlvbnMuXG4vLyBJdCdzIE9LIHRvIHJlZmVyZW5jZSBmYW1pbGllcywgYnV0IHVzZSBXZWFrTWFwL1NldCBmb3IgdHlwZXMuXG5cbnZhciBhbGxGYW1pbGllc0J5SUQgPSBuZXcgTWFwKCk7XG52YXIgYWxsRmFtaWxpZXNCeVR5cGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG52YXIgYWxsU2lnbmF0dXJlc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTsgLy8gVGhpcyBXZWFrTWFwIGlzIHJlYWQgYnkgUmVhY3QsIHNvIHdlIG9ubHkgcHV0IGZhbWlsaWVzXG4vLyB0aGF0IGhhdmUgYWN0dWFsbHkgYmVlbiBlZGl0ZWQgaGVyZS4gVGhpcyBrZWVwcyBjaGVja3MgZmFzdC5cbi8vICRGbG93SXNzdWVcblxudmFyIHVwZGF0ZWRGYW1pbGllc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTsgLy8gVGhpcyBpcyBjbGVhcmVkIG9uIGV2ZXJ5IHBlcmZvcm1SZWFjdFJlZnJlc2goKSBjYWxsLlxuLy8gSXQgaXMgYW4gYXJyYXkgb2YgW0ZhbWlseSwgTmV4dFR5cGVdIHR1cGxlcy5cblxudmFyIHBlbmRpbmdVcGRhdGVzID0gW107IC8vIFRoaXMgaXMgaW5qZWN0ZWQgYnkgdGhlIHJlbmRlcmVyIHZpYSBEZXZUb29scyBnbG9iYWwgaG9vay5cblxudmFyIGhlbHBlcnNCeVJlbmRlcmVySUQgPSBuZXcgTWFwKCk7XG52YXIgaGVscGVyc0J5Um9vdCA9IG5ldyBNYXAoKTsgLy8gV2Uga2VlcCB0cmFjayBvZiBtb3VudGVkIHJvb3RzIHNvIHdlIGNhbiBzY2hlZHVsZSB1cGRhdGVzLlxuXG52YXIgbW91bnRlZFJvb3RzID0gbmV3IFNldCgpOyAvLyBJZiBhIHJvb3QgY2FwdHVyZXMgYW4gZXJyb3IsIHdlIHJlbWVtYmVyIGl0IHNvIHdlIGNhbiByZXRyeSBvbiBlZGl0LlxuXG52YXIgZmFpbGVkUm9vdHMgPSBuZXcgU2V0KCk7IC8vIEluIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgV2Vha01hcCwgd2UgYWxzbyByZW1lbWJlciB0aGUgbGFzdCBlbGVtZW50IGZvciBldmVyeSByb290LlxuLy8gSXQgbmVlZHMgdG8gYmUgd2VhayBiZWNhdXNlIHdlIGRvIHRoaXMgZXZlbiBmb3Igcm9vdHMgdGhhdCBmYWlsZWQgdG8gbW91bnQuXG4vLyBJZiB0aGVyZSBpcyBubyBXZWFrTWFwLCB3ZSB3b24ndCBhdHRlbXB0IHRvIGRvIHJldHJ5aW5nLlxuLy8gJEZsb3dJc3N1ZVxuXG52YXIgcm9vdEVsZW1lbnRzID0gLy8gJEZsb3dJc3N1ZVxudHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBuZXcgV2Vha01hcCgpIDogbnVsbDtcbnZhciBpc1BlcmZvcm1pbmdSZWZyZXNoID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNvbXB1dGVGdWxsS2V5KHNpZ25hdHVyZSkge1xuICBpZiAoc2lnbmF0dXJlLmZ1bGxLZXkgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2lnbmF0dXJlLmZ1bGxLZXk7XG4gIH1cblxuICB2YXIgZnVsbEtleSA9IHNpZ25hdHVyZS5vd25LZXk7XG4gIHZhciBob29rcztcblxuICB0cnkge1xuICAgIGhvb2tzID0gc2lnbmF0dXJlLmdldEN1c3RvbUhvb2tzKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBhbiBlZGdlIGNhc2UsIGUuZy4gaWYgZXhwcmVzc2lvbiBsaWtlIEZvby51c2VTb21ldGhpbmdcbiAgICAvLyBkZXBlbmRzIG9uIEZvbyB3aGljaCBpcyBsYXppbHkgaW5pdGlhbGl6ZWQgZHVyaW5nIHJlbmRlcmluZy5cbiAgICAvLyBJbiB0aGF0IGNhc2UganVzdCBhc3N1bWUgd2UnbGwgaGF2ZSB0byByZW1vdW50LlxuICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcbiAgICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gICAgcmV0dXJuIGZ1bGxLZXk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGhvb2sgPSBob29rc1tpXTtcblxuICAgIGlmICh0eXBlb2YgaG9vayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gU29tZXRoaW5nJ3Mgd3JvbmcuIEFzc3VtZSB3ZSBuZWVkIHRvIHJlbW91bnQuXG4gICAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gICAgICByZXR1cm4gZnVsbEtleTtcbiAgICB9XG5cbiAgICB2YXIgbmVzdGVkSG9va1NpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KGhvb2spO1xuXG4gICAgaWYgKG5lc3RlZEhvb2tTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTm8gc2lnbmF0dXJlIG1lYW5zIEhvb2sgd2Fzbid0IGluIHRoZSBzb3VyY2UgY29kZSwgZS5nLiBpbiBhIGxpYnJhcnkuXG4gICAgICAvLyBXZSdsbCBza2lwIGl0IGJlY2F1c2Ugd2UgY2FuIGFzc3VtZSBpdCB3b24ndCBjaGFuZ2UgZHVyaW5nIHRoaXMgc2Vzc2lvbi5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBuZXN0ZWRIb29rS2V5ID0gY29tcHV0ZUZ1bGxLZXkobmVzdGVkSG9va1NpZ25hdHVyZSk7XG5cbiAgICBpZiAobmVzdGVkSG9va1NpZ25hdHVyZS5mb3JjZVJlc2V0KSB7XG4gICAgICBzaWduYXR1cmUuZm9yY2VSZXNldCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVsbEtleSArPSAnXFxuLS0tXFxuJyArIG5lc3RlZEhvb2tLZXk7XG4gIH1cblxuICBzaWduYXR1cmUuZnVsbEtleSA9IGZ1bGxLZXk7XG4gIHJldHVybiBmdWxsS2V5O1xufVxuXG5mdW5jdGlvbiBoYXZlRXF1YWxTaWduYXR1cmVzKHByZXZUeXBlLCBuZXh0VHlwZSkge1xuICB2YXIgcHJldlNpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KHByZXZUeXBlKTtcbiAgdmFyIG5leHRTaWduYXR1cmUgPSBhbGxTaWduYXR1cmVzQnlUeXBlLmdldChuZXh0VHlwZSk7XG5cbiAgaWYgKHByZXZTaWduYXR1cmUgPT09IHVuZGVmaW5lZCAmJiBuZXh0U2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwcmV2U2lnbmF0dXJlID09PSB1bmRlZmluZWQgfHwgbmV4dFNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVGdWxsS2V5KHByZXZTaWduYXR1cmUpICE9PSBjb21wdXRlRnVsbEtleShuZXh0U2lnbmF0dXJlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuZXh0U2lnbmF0dXJlLmZvcmNlUmVzZXQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNSZWFjdENsYXNzKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUucHJvdG90eXBlICYmIHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGNhblByZXNlcnZlU3RhdGVCZXR3ZWVuKHByZXZUeXBlLCBuZXh0VHlwZSkge1xuICBpZiAoaXNSZWFjdENsYXNzKHByZXZUeXBlKSB8fCBpc1JlYWN0Q2xhc3MobmV4dFR5cGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGhhdmVFcXVhbFNpZ25hdHVyZXMocHJldlR5cGUsIG5leHRUeXBlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRmFtaWx5KHR5cGUpIHtcbiAgLy8gT25seSBjaGVjayB1cGRhdGVkIHR5cGVzIHRvIGtlZXAgbG9va3VwcyBmYXN0LlxuICByZXR1cm4gdXBkYXRlZEZhbWlsaWVzQnlUeXBlLmdldCh0eXBlKTtcbn0gLy8gSWYgd2UgZGlkbid0IGNhcmUgYWJvdXQgSUUxMSwgd2UgY291bGQgdXNlIG5ldyBNYXAvU2V0KGl0ZXJhYmxlKS5cblxuXG5mdW5jdGlvbiBjbG9uZU1hcChtYXApIHtcbiAgdmFyIGNsb25lID0gbmV3IE1hcCgpO1xuICBtYXAuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIGNsb25lLnNldChrZXksIHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gY2xvbmVTZXQoc2V0KSB7XG4gIHZhciBjbG9uZSA9IG5ldyBTZXQoKTtcbiAgc2V0LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY2xvbmUuYWRkKHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBjbG9uZTtcbn0gLy8gVGhpcyBpcyBhIHNhZmV0eSBtZWNoYW5pc20gdG8gcHJvdGVjdCBhZ2FpbnN0IHJvZ3VlIGdldHRlcnMgYW5kIFByb3hpZXMuXG5cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB0cnkge1xuICAgIHJldHVybiBvYmplY3RbcHJvcGVydHldO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJbnRlbnRpb25hbGx5IGlnbm9yZS5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm1SZWFjdFJlZnJlc2goKSB7XG5cbiAgaWYgKHBlbmRpbmdVcGRhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSB0cnVlO1xuXG4gIHRyeSB7XG4gICAgdmFyIHN0YWxlRmFtaWxpZXMgPSBuZXcgU2V0KCk7XG4gICAgdmFyIHVwZGF0ZWRGYW1pbGllcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgdXBkYXRlcyA9IHBlbmRpbmdVcGRhdGVzO1xuICAgIHBlbmRpbmdVcGRhdGVzID0gW107XG4gICAgdXBkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZmFtaWx5ID0gX3JlZlswXSxcbiAgICAgICAgICBuZXh0VHlwZSA9IF9yZWZbMV07XG4gICAgICAvLyBOb3cgdGhhdCB3ZSBnb3QgYSByZWFsIGVkaXQsIHdlIGNhbiBjcmVhdGUgYXNzb2NpYXRpb25zXG4gICAgICAvLyB0aGF0IHdpbGwgYmUgcmVhZCBieSB0aGUgUmVhY3QgcmVjb25jaWxlci5cbiAgICAgIHZhciBwcmV2VHlwZSA9IGZhbWlseS5jdXJyZW50O1xuICAgICAgdXBkYXRlZEZhbWlsaWVzQnlUeXBlLnNldChwcmV2VHlwZSwgZmFtaWx5KTtcbiAgICAgIHVwZGF0ZWRGYW1pbGllc0J5VHlwZS5zZXQobmV4dFR5cGUsIGZhbWlseSk7XG4gICAgICBmYW1pbHkuY3VycmVudCA9IG5leHRUeXBlOyAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGlzIHNob3VsZCBiZSBhIHJlLXJlbmRlciBvciBhIHJlLW1vdW50LlxuXG4gICAgICBpZiAoY2FuUHJlc2VydmVTdGF0ZUJldHdlZW4ocHJldlR5cGUsIG5leHRUeXBlKSkge1xuICAgICAgICB1cGRhdGVkRmFtaWxpZXMuYWRkKGZhbWlseSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFsZUZhbWlsaWVzLmFkZChmYW1pbHkpO1xuICAgICAgfVxuICAgIH0pOyAvLyBUT0RPOiByZW5hbWUgdGhlc2UgZmllbGRzIHRvIHNvbWV0aGluZyBtb3JlIG1lYW5pbmdmdWwuXG5cbiAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgdXBkYXRlZEZhbWlsaWVzOiB1cGRhdGVkRmFtaWxpZXMsXG4gICAgICAvLyBGYW1pbGllcyB0aGF0IHdpbGwgcmUtcmVuZGVyIHByZXNlcnZpbmcgc3RhdGVcbiAgICAgIHN0YWxlRmFtaWxpZXM6IHN0YWxlRmFtaWxpZXMgLy8gRmFtaWxpZXMgdGhhdCB3aWxsIGJlIHJlbW91bnRlZFxuXG4gICAgfTtcbiAgICBoZWxwZXJzQnlSZW5kZXJlcklELmZvckVhY2goZnVuY3Rpb24gKGhlbHBlcnMpIHtcbiAgICAgIC8vIEV2ZW4gaWYgdGhlcmUgYXJlIG5vIHJvb3RzLCBzZXQgdGhlIGhhbmRsZXIgb24gZmlyc3QgdXBkYXRlLlxuICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgaWYgKm5ldyogcm9vdHMgYXJlIG1vdW50ZWQsIHRoZXknbGwgdXNlIHRoZSByZXNvbHZlIGhhbmRsZXIuXG4gICAgICBoZWxwZXJzLnNldFJlZnJlc2hIYW5kbGVyKHJlc29sdmVGYW1pbHkpO1xuICAgIH0pO1xuICAgIHZhciBkaWRFcnJvciA9IGZhbHNlO1xuICAgIHZhciBmaXJzdEVycm9yID0gbnVsbDsgLy8gV2Ugc25hcHNob3QgbWFwcyBhbmQgc2V0cyB0aGF0IGFyZSBtdXRhdGVkIGR1cmluZyBjb21taXRzLlxuICAgIC8vIElmIHdlIGRvbid0IGRvIHRoaXMsIHRoZXJlIGlzIGEgcmlzayB0aGV5IHdpbGwgYmUgbXV0YXRlZCB3aGlsZVxuICAgIC8vIHdlIGl0ZXJhdGUgb3ZlciB0aGVtLiBGb3IgZXhhbXBsZSwgdHJ5aW5nIHRvIHJlY292ZXIgYSBmYWlsZWQgcm9vdFxuICAgIC8vIG1heSBjYXVzZSBhbm90aGVyIHJvb3QgdG8gYmUgYWRkZWQgdG8gdGhlIGZhaWxlZCBsaXN0IC0tIGFuIGluZmluaXRlIGxvb3AuXG5cbiAgICB2YXIgZmFpbGVkUm9vdHNTbmFwc2hvdCA9IGNsb25lU2V0KGZhaWxlZFJvb3RzKTtcbiAgICB2YXIgbW91bnRlZFJvb3RzU25hcHNob3QgPSBjbG9uZVNldChtb3VudGVkUm9vdHMpO1xuICAgIHZhciBoZWxwZXJzQnlSb290U25hcHNob3QgPSBjbG9uZU1hcChoZWxwZXJzQnlSb290KTtcbiAgICBmYWlsZWRSb290c1NuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZhaWxlZFJvb3RzLmhhcyhyb290KSkgey8vIE5vIGxvbmdlciBmYWlsZWQuXG4gICAgICB9XG5cbiAgICAgIGlmIChyb290RWxlbWVudHMgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJvb3RFbGVtZW50cy5oYXMocm9vdCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudCA9IHJvb3RFbGVtZW50cy5nZXQocm9vdCk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGhlbHBlcnMuc2NoZWR1bGVSb290KHJvb3QsIGVsZW1lbnQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghZGlkRXJyb3IpIHtcbiAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgZmlyc3RFcnJvciA9IGVycjtcbiAgICAgICAgfSAvLyBLZWVwIHRyeWluZyBvdGhlciByb290cy5cblxuICAgICAgfVxuICAgIH0pO1xuICAgIG1vdW50ZWRSb290c1NuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdFNuYXBzaG90LmdldChyb290KTtcblxuICAgICAgaWYgKGhlbHBlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1vdW50ZWRSb290cy5oYXMocm9vdCkpIHsvLyBObyBsb25nZXIgbW91bnRlZC5cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaGVscGVycy5zY2hlZHVsZVJlZnJlc2gocm9vdCwgdXBkYXRlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoIWRpZEVycm9yKSB7XG4gICAgICAgICAgZGlkRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIGZpcnN0RXJyb3IgPSBlcnI7XG4gICAgICAgIH0gLy8gS2VlcCB0cnlpbmcgb3RoZXIgcm9vdHMuXG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgdGhyb3cgZmlyc3RFcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdXBkYXRlO1xuICB9IGZpbmFsbHkge1xuICAgIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gcmVnaXN0ZXIodHlwZSwgaWQpIHtcbiAge1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gVGhpcyBjYW4gaGFwcGVuIGluIGFuIGVkZ2UgY2FzZSwgZS5nLiBpZiB3ZSByZWdpc3RlclxuICAgIC8vIHJldHVybiB2YWx1ZSBvZiBhIEhPQyBidXQgaXQgcmV0dXJucyBhIGNhY2hlZCBjb21wb25lbnQuXG4gICAgLy8gSWdub3JlIGFueXRoaW5nIGJ1dCB0aGUgZmlyc3QgcmVnaXN0cmF0aW9uIGZvciBlYWNoIHR5cGUuXG5cblxuICAgIGlmIChhbGxGYW1pbGllc0J5VHlwZS5oYXModHlwZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIENyZWF0ZSBmYW1pbHkgb3IgcmVtZW1iZXIgdG8gdXBkYXRlIGl0LlxuICAgIC8vIE5vbmUgb2YgdGhpcyBib29ra2VlcGluZyBhZmZlY3RzIHJlY29uY2lsaWF0aW9uXG4gICAgLy8gdW50aWwgdGhlIGZpcnN0IHBlcmZvcm1SZWFjdFJlZnJlc2goKSBjYWxsIGFib3ZlLlxuXG5cbiAgICB2YXIgZmFtaWx5ID0gYWxsRmFtaWxpZXNCeUlELmdldChpZCk7XG5cbiAgICBpZiAoZmFtaWx5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZhbWlseSA9IHtcbiAgICAgICAgY3VycmVudDogdHlwZVxuICAgICAgfTtcbiAgICAgIGFsbEZhbWlsaWVzQnlJRC5zZXQoaWQsIGZhbWlseSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdVcGRhdGVzLnB1c2goW2ZhbWlseSwgdHlwZV0pO1xuICAgIH1cblxuICAgIGFsbEZhbWlsaWVzQnlUeXBlLnNldCh0eXBlLCBmYW1pbHkpOyAvLyBWaXNpdCBpbm5lciB0eXBlcyBiZWNhdXNlIHdlIG1pZ2h0IG5vdCBoYXZlIHJlZ2lzdGVyZWQgdGhlbS5cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChnZXRQcm9wZXJ0eSh0eXBlLCAnJCR0eXBlb2YnKSkge1xuICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgcmVnaXN0ZXIodHlwZS5yZW5kZXIsIGlkICsgJyRyZW5kZXInKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICByZWdpc3Rlcih0eXBlLnR5cGUsIGlkICsgJyR0eXBlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBzZXRTaWduYXR1cmUodHlwZSwga2V5KSB7XG4gIHZhciBmb3JjZVJlc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcbiAgdmFyIGdldEN1c3RvbUhvb2tzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XG5cbiAge1xuICAgIGlmICghYWxsU2lnbmF0dXJlc0J5VHlwZS5oYXModHlwZSkpIHtcbiAgICAgIGFsbFNpZ25hdHVyZXNCeVR5cGUuc2V0KHR5cGUsIHtcbiAgICAgICAgZm9yY2VSZXNldDogZm9yY2VSZXNldCxcbiAgICAgICAgb3duS2V5OiBrZXksXG4gICAgICAgIGZ1bGxLZXk6IG51bGwsXG4gICAgICAgIGdldEN1c3RvbUhvb2tzOiBnZXRDdXN0b21Ib29rcyB8fCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIFZpc2l0IGlubmVyIHR5cGVzIGJlY2F1c2Ugd2UgbWlnaHQgbm90IGhhdmUgc2lnbmVkIHRoZW0uXG5cblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgICAgc3dpdGNoIChnZXRQcm9wZXJ0eSh0eXBlLCAnJCR0eXBlb2YnKSkge1xuICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgc2V0U2lnbmF0dXJlKHR5cGUucmVuZGVyLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICBzZXRTaWduYXR1cmUodHlwZS50eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gLy8gVGhpcyBpcyBsYXppbHkgY2FsbGVkIGR1cmluZyBmaXJzdCByZW5kZXIgZm9yIGEgdHlwZS5cbi8vIEl0IGNhcHR1cmVzIEhvb2sgbGlzdCBhdCB0aGF0IHRpbWUgc28gaW5saW5lIHJlcXVpcmVzIGRvbid0IGJyZWFrIGNvbXBhcmlzb25zLlxuXG5mdW5jdGlvbiBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUodHlwZSkge1xuICB7XG4gICAgdmFyIHNpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KHR5cGUpO1xuXG4gICAgaWYgKHNpZ25hdHVyZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb21wdXRlRnVsbEtleShzaWduYXR1cmUpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2V0RmFtaWx5QnlJRChpZCkge1xuICB7XG4gICAgcmV0dXJuIGFsbEZhbWlsaWVzQnlJRC5nZXQoaWQpO1xuICB9XG59XG5mdW5jdGlvbiBnZXRGYW1pbHlCeVR5cGUodHlwZSkge1xuICB7XG4gICAgcmV0dXJuIGFsbEZhbWlsaWVzQnlUeXBlLmdldCh0eXBlKTtcbiAgfVxufVxuZnVuY3Rpb24gZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcyhmYW1pbGllcykge1xuICB7XG4gICAgdmFyIGFmZmVjdGVkSW5zdGFuY2VzID0gbmV3IFNldCgpO1xuICAgIG1vdW50ZWRSb290cy5mb3JFYWNoKGZ1bmN0aW9uIChyb290KSB7XG4gICAgICB2YXIgaGVscGVycyA9IGhlbHBlcnNCeVJvb3QuZ2V0KHJvb3QpO1xuXG4gICAgICBpZiAoaGVscGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnN0YW5jZXNGb3JSb290ID0gaGVscGVycy5maW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2gocm9vdCwgZmFtaWxpZXMpO1xuICAgICAgaW5zdGFuY2VzRm9yUm9vdC5mb3JFYWNoKGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgICAgIGFmZmVjdGVkSW5zdGFuY2VzLmFkZChpbnN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBhZmZlY3RlZEluc3RhbmNlcztcbiAgfVxufVxuZnVuY3Rpb24gaW5qZWN0SW50b0dsb2JhbEhvb2soZ2xvYmFsT2JqZWN0KSB7XG4gIHtcbiAgICAvLyBGb3IgUmVhY3QgTmF0aXZlLCB0aGUgZ2xvYmFsIGhvb2sgd2lsbCBiZSBzZXQgdXAgYnkgcmVxdWlyZSgncmVhY3QtZGV2dG9vbHMtY29yZScpLlxuICAgIC8vIFRoYXQgY29kZSB3aWxsIHJ1biBiZWZvcmUgdXMuIFNvIHdlIG5lZWQgdG8gbW9ua2V5cGF0Y2ggZnVuY3Rpb25zIG9uIGV4aXN0aW5nIGhvb2suXG4gICAgLy8gRm9yIFJlYWN0IFdlYiwgdGhlIGdsb2JhbCBob29rIHdpbGwgYmUgc2V0IHVwIGJ5IHRoZSBleHRlbnNpb24uXG4gICAgLy8gVGhpcyB3aWxsIGFsc28gcnVuIGJlZm9yZSB1cy5cbiAgICB2YXIgaG9vayA9IGdsb2JhbE9iamVjdC5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187XG5cbiAgICBpZiAoaG9vayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBIb3dldmVyLCBpZiB0aGVyZSBpcyBubyBEZXZUb29scyBleHRlbnNpb24sIHdlJ2xsIG5lZWQgdG8gc2V0IHVwIHRoZSBnbG9iYWwgaG9vayBvdXJzZWx2ZXMuXG4gICAgICAvLyBOb3RlIHRoYXQgaW4gdGhpcyBjYXNlIGl0J3MgaW1wb3J0YW50IHRoYXQgcmVuZGVyZXIgY29kZSBydW5zICphZnRlciogdGhpcyBtZXRob2QgY2FsbC5cbiAgICAgIC8vIE90aGVyd2lzZSwgdGhlIHJlbmRlcmVyIHdpbGwgdGhpbmsgdGhhdCB0aGVyZSBpcyBubyBnbG9iYWwgaG9vaywgYW5kIHdvbid0IGRvIHRoZSBpbmplY3Rpb24uXG4gICAgICB2YXIgbmV4dElEID0gMDtcbiAgICAgIGdsb2JhbE9iamVjdC5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPSBob29rID0ge1xuICAgICAgICByZW5kZXJlcnM6IG5ldyBNYXAoKSxcbiAgICAgICAgc3VwcG9ydHNGaWJlcjogdHJ1ZSxcbiAgICAgICAgaW5qZWN0OiBmdW5jdGlvbiAoaW5qZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dElEKys7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2NoZWR1bGVGaWJlclJvb3Q6IGZ1bmN0aW9uIChpZCwgcm9vdCwgY2hpbGRyZW4pIHt9LFxuICAgICAgICBvbkNvbW1pdEZpYmVyUm9vdDogZnVuY3Rpb24gKGlkLCByb290LCBtYXliZVByaW9yaXR5TGV2ZWwsIGRpZEVycm9yKSB7fSxcbiAgICAgICAgb25Db21taXRGaWJlclVubW91bnQ6IGZ1bmN0aW9uICgpIHt9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChob29rLmlzRGlzYWJsZWQpIHtcbiAgICAgIC8vIFRoaXMgaXNuJ3QgYSByZWFsIHByb3BlcnR5IG9uIHRoZSBob29rLCBidXQgaXQgY2FuIGJlIHNldCB0byBvcHQgb3V0XG4gICAgICAvLyBvZiBEZXZUb29scyBpbnRlZ3JhdGlvbiBhbmQgYXNzb2NpYXRlZCB3YXJuaW5ncyBhbmQgbG9ncy5cbiAgICAgIC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1NvbWV0aGluZyBoYXMgc2hpbW1lZCB0aGUgUmVhY3QgRGV2VG9vbHMgZ2xvYmFsIGhvb2sgKF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykuICcgKyAnRmFzdCBSZWZyZXNoIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhpcyBzaGltIGFuZCB3aWxsIGJlIGRpc2FibGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSGVyZSwgd2UganVzdCB3YW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byBzY2hlZHVsZVJlZnJlc2guXG5cblxuICAgIHZhciBvbGRJbmplY3QgPSBob29rLmluamVjdDtcblxuICAgIGhvb2suaW5qZWN0ID0gZnVuY3Rpb24gKGluamVjdGVkKSB7XG4gICAgICB2YXIgaWQgPSBvbGRJbmplY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHR5cGVvZiBpbmplY3RlZC5zY2hlZHVsZVJlZnJlc2ggPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGluamVjdGVkLnNldFJlZnJlc2hIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFRoaXMgdmVyc2lvbiBzdXBwb3J0cyBSZWFjdCBSZWZyZXNoLlxuICAgICAgICBoZWxwZXJzQnlSZW5kZXJlcklELnNldChpZCwgaW5qZWN0ZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTsgLy8gRG8gdGhlIHNhbWUgZm9yIGFueSBhbHJlYWR5IGluamVjdGVkIHJvb3RzLlxuICAgIC8vIFRoaXMgaXMgdXNlZnVsIGlmIFJlYWN0RE9NIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNzYyNlxuXG5cbiAgICBob29rLnJlbmRlcmVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbmplY3RlZCwgaWQpIHtcbiAgICAgIGlmICh0eXBlb2YgaW5qZWN0ZWQuc2NoZWR1bGVSZWZyZXNoID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBpbmplY3RlZC5zZXRSZWZyZXNoSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBUaGlzIHZlcnNpb24gc3VwcG9ydHMgUmVhY3QgUmVmcmVzaC5cbiAgICAgICAgaGVscGVyc0J5UmVuZGVyZXJJRC5zZXQoaWQsIGluamVjdGVkKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gV2UgYWxzbyB3YW50IHRvIHRyYWNrIGN1cnJlbnRseSBtb3VudGVkIHJvb3RzLlxuXG4gICAgdmFyIG9sZE9uQ29tbWl0RmliZXJSb290ID0gaG9vay5vbkNvbW1pdEZpYmVyUm9vdDtcblxuICAgIHZhciBvbGRPblNjaGVkdWxlRmliZXJSb290ID0gaG9vay5vblNjaGVkdWxlRmliZXJSb290IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgaG9vay5vblNjaGVkdWxlRmliZXJSb290ID0gZnVuY3Rpb24gKGlkLCByb290LCBjaGlsZHJlbikge1xuICAgICAgaWYgKCFpc1BlcmZvcm1pbmdSZWZyZXNoKSB7XG4gICAgICAgIC8vIElmIGl0IHdhcyBpbnRlbnRpb25hbGx5IHNjaGVkdWxlZCwgZG9uJ3QgYXR0ZW1wdCB0byByZXN0b3JlLlxuICAgICAgICAvLyBUaGlzIGluY2x1ZGVzIGludGVudGlvbmFsbHkgc2NoZWR1bGVkIHVubW91bnRzLlxuICAgICAgICBmYWlsZWRSb290cy5kZWxldGUocm9vdCk7XG5cbiAgICAgICAgaWYgKHJvb3RFbGVtZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgIHJvb3RFbGVtZW50cy5zZXQocm9vdCwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvbGRPblNjaGVkdWxlRmliZXJSb290LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGhvb2sub25Db21taXRGaWJlclJvb3QgPSBmdW5jdGlvbiAoaWQsIHJvb3QsIG1heWJlUHJpb3JpdHlMZXZlbCwgZGlkRXJyb3IpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5UmVuZGVyZXJJRC5nZXQoaWQpO1xuXG4gICAgICBpZiAoaGVscGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGhlbHBlcnNCeVJvb3Quc2V0KHJvb3QsIGhlbHBlcnMpO1xuICAgICAgICB2YXIgY3VycmVudCA9IHJvb3QuY3VycmVudDtcbiAgICAgICAgdmFyIGFsdGVybmF0ZSA9IGN1cnJlbnQuYWx0ZXJuYXRlOyAvLyBXZSBuZWVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoaXMgcm9vdCBoYXMganVzdCAodW4pbW91bnRlZC5cbiAgICAgICAgLy8gVGhpcyBsb2dpYyBpcyBjb3B5LXBhc3RlZCBmcm9tIHNpbWlsYXIgbG9naWMgaW4gdGhlIERldlRvb2xzIGJhY2tlbmQuXG4gICAgICAgIC8vIElmIHRoaXMgYnJlYWtzIHdpdGggc29tZSByZWZhY3RvcmluZywgeW91J2xsIHdhbnQgdG8gdXBkYXRlIERldlRvb2xzIHRvby5cblxuICAgICAgICBpZiAoYWx0ZXJuYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIHdhc01vdW50ZWQgPSBhbHRlcm5hdGUubWVtb2l6ZWRTdGF0ZSAhPSBudWxsICYmIGFsdGVybmF0ZS5tZW1vaXplZFN0YXRlLmVsZW1lbnQgIT0gbnVsbDtcbiAgICAgICAgICB2YXIgaXNNb3VudGVkID0gY3VycmVudC5tZW1vaXplZFN0YXRlICE9IG51bGwgJiYgY3VycmVudC5tZW1vaXplZFN0YXRlLmVsZW1lbnQgIT0gbnVsbDtcblxuICAgICAgICAgIGlmICghd2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIHtcbiAgICAgICAgICAgIC8vIE1vdW50IGEgbmV3IHJvb3QuXG4gICAgICAgICAgICBtb3VudGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgICAgZmFpbGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2FzTW91bnRlZCAmJiBpc01vdW50ZWQpIDsgZWxzZSBpZiAod2FzTW91bnRlZCAmJiAhaXNNb3VudGVkKSB7XG4gICAgICAgICAgICAvLyBVbm1vdW50IGFuIGV4aXN0aW5nIHJvb3QuXG4gICAgICAgICAgICBtb3VudGVkUm9vdHMuZGVsZXRlKHJvb3QpO1xuXG4gICAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgICAgLy8gV2UnbGwgcmVtb3VudCBpdCBvbiBmdXR1cmUgZWRpdHMuXG4gICAgICAgICAgICAgIGZhaWxlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhlbHBlcnNCeVJvb3QuZGVsZXRlKHJvb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoIXdhc01vdW50ZWQgJiYgIWlzTW91bnRlZCkge1xuICAgICAgICAgICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICAgICAgICAgIC8vIFdlJ2xsIHJlbW91bnQgaXQgb24gZnV0dXJlIGVkaXRzLlxuICAgICAgICAgICAgICBmYWlsZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1vdW50IGEgbmV3IHJvb3QuXG4gICAgICAgICAgbW91bnRlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBBbHdheXMgY2FsbCB0aGUgZGVjb3JhdGVkIERldlRvb2xzIGhvb2suXG5cblxuICAgICAgcmV0dXJuIG9sZE9uQ29tbWl0RmliZXJSb290LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gaGFzVW5yZWNvdmVyYWJsZUVycm9ycygpIHtcbiAgLy8gVE9ETzogZGVsZXRlIHRoaXMgYWZ0ZXIgcmVtb3ZpbmcgZGVwZW5kZW5jeSBpbiBSTi5cbiAgcmV0dXJuIGZhbHNlO1xufSAvLyBFeHBvc2VkIGZvciB0ZXN0aW5nLlxuXG5mdW5jdGlvbiBfZ2V0TW91bnRlZFJvb3RDb3VudCgpIHtcbiAge1xuICAgIHJldHVybiBtb3VudGVkUm9vdHMuc2l6ZTtcbiAgfVxufSAvLyBUaGlzIGlzIGEgd3JhcHBlciBvdmVyIG1vcmUgcHJpbWl0aXZlIGZ1bmN0aW9ucyBmb3Igc2V0dGluZyBzaWduYXR1cmUuXG4vLyBTaWduYXR1cmVzIGxldCB1cyBkZWNpZGUgd2hldGhlciB0aGUgSG9vayBvcmRlciBoYXMgY2hhbmdlZCBvbiByZWZyZXNoLlxuLy9cbi8vIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHRyYW5zZm9ybSB0YXJnZXQsIGUuZy46XG4vLyB2YXIgX3MgPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpXG4vL1xuLy8gZnVuY3Rpb24gSGVsbG8oKSB7XG4vLyAgIGNvbnN0IFtmb28sIHNldEZvb10gPSB1c2VTdGF0ZSgwKTtcbi8vICAgY29uc3QgdmFsdWUgPSB1c2VDdXN0b21Ib29rKCk7XG4vLyAgIF9zKCk7IC8qIENhbGwgd2l0aG91dCBhcmd1bWVudHMgdHJpZ2dlcnMgY29sbGVjdGluZyB0aGUgY3VzdG9tIEhvb2sgbGlzdC5cbi8vICAgICAgICAgICogVGhpcyBkb2Vzbid0IGhhcHBlbiBkdXJpbmcgdGhlIG1vZHVsZSBldmFsdWF0aW9uIGJlY2F1c2Ugd2Vcbi8vICAgICAgICAgICogZG9uJ3Qgd2FudCB0byBjaGFuZ2UgdGhlIG1vZHVsZSBvcmRlciB3aXRoIGlubGluZSByZXF1aXJlcy5cbi8vICAgICAgICAgICogTmV4dCBjYWxscyBhcmUgbm9vcHMuICovXG4vLyAgIHJldHVybiA8aDE+SGk8L2gxPjtcbi8vIH1cbi8vXG4vLyAvKiBDYWxsIHdpdGggYXJndW1lbnRzIGF0dGFjaGVzIHRoZSBzaWduYXR1cmUgdG8gdGhlIHR5cGU6ICovXG4vLyBfcyhcbi8vICAgSGVsbG8sXG4vLyAgICd1c2VTdGF0ZXtbZm9vLCBzZXRGb29dfSgwKScsXG4vLyAgICgpID0+IFt1c2VDdXN0b21Ib29rXSwgLyogTGF6eSB0byBhdm9pZCB0cmlnZ2VyaW5nIGlubGluZSByZXF1aXJlcyAqL1xuLy8gKTtcblxuZnVuY3Rpb24gY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0oKSB7XG4gIHtcbiAgICB2YXIgc2F2ZWRUeXBlO1xuICAgIHZhciBoYXNDdXN0b21Ib29rcztcbiAgICB2YXIgZGlkQ29sbGVjdEhvb2tzID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKSB7XG4gICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gdGhlIGluaXRpYWwgcGhhc2UgdGhhdCBhc3NvY2lhdGVzIHNpZ25hdHVyZXNcbiAgICAgICAgLy8gd2l0aCB0aGUgZnVuY3Rpb25zLiBOb3RlIHRoaXMgbWF5IGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lc1xuICAgICAgICAvLyBpbiBIT0MgY2hhaW5zIGxpa2UgX3MoaG9jMShfcyhob2MyKF9zKGFjdHVhbEZ1bmN0aW9uKSkpKSkuXG4gICAgICAgIGlmICghc2F2ZWRUeXBlKSB7XG4gICAgICAgICAgLy8gV2UncmUgaW4gdGhlIGlubmVybW9zdCBjYWxsLCBzbyB0aGlzIGlzIHRoZSBhY3R1YWwgdHlwZS5cbiAgICAgICAgICBzYXZlZFR5cGUgPSB0eXBlO1xuICAgICAgICAgIGhhc0N1c3RvbUhvb2tzID0gdHlwZW9mIGdldEN1c3RvbUhvb2tzID09PSAnZnVuY3Rpb24nO1xuICAgICAgICB9IC8vIFNldCB0aGUgc2lnbmF0dXJlIGZvciBhbGwgdHlwZXMgKGV2ZW4gd3JhcHBlcnMhKSBpbiBjYXNlXG4gICAgICAgIC8vIHRoZXkgaGF2ZSBubyBzaWduYXR1cmVzIG9mIHRoZWlyIG93bi4gVGhpcyBpcyB0byBwcmV2ZW50XG4gICAgICAgIC8vIHByb2JsZW1zIGxpa2UgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDQxNy5cblxuXG4gICAgICAgIGlmICh0eXBlICE9IG51bGwgJiYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JykpIHtcbiAgICAgICAgICBzZXRTaWduYXR1cmUodHlwZSwga2V5LCBmb3JjZVJlc2V0LCBnZXRDdXN0b21Ib29rcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHRoZSBfcygpIGNhbGwgd2l0aG91dCBhcmd1bWVudHMsIHdoaWNoIG1lYW5zXG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHRpbWUgdG8gY29sbGVjdCBjdXN0b20gSG9vayBzaWduYXR1cmVzLlxuICAgICAgICAvLyBPbmx5IGRvIHRoaXMgb25jZS4gVGhpcyBwYXRoIGlzIGhvdCBhbmQgcnVucyAqaW5zaWRlKiBldmVyeSByZW5kZXIhXG4gICAgICAgIGlmICghZGlkQ29sbGVjdEhvb2tzICYmIGhhc0N1c3RvbUhvb2tzKSB7XG4gICAgICAgICAgZGlkQ29sbGVjdEhvb2tzID0gdHJ1ZTtcbiAgICAgICAgICBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUoc2F2ZWRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGlzTGlrZWx5Q29tcG9uZW50VHlwZSh0eXBlKSB7XG4gIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiB0eXBlKSB7XG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBGaXJzdCwgZGVhbCB3aXRoIGNsYXNzZXMuXG4gICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICAgIC8vIFJlYWN0IGNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG93bk5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModHlwZS5wcm90b3R5cGUpO1xuXG4gICAgICAgICAgICBpZiAob3duTmFtZXMubGVuZ3RoID4gMSB8fCBvd25OYW1lc1swXSAhPT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICAgICAgICAvLyBUaGlzIGxvb2tzIGxpa2UgYSBjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG9cblxuXG4gICAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUuX19wcm90b19fICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgIC8vIEl0IGhhcyBhIHN1cGVyY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gLy8gUGFzcyB0aHJvdWdoLlxuICAgICAgICAgICAgLy8gVGhpcyBsb29rcyBsaWtlIGEgcmVndWxhciBmdW5jdGlvbiB3aXRoIGVtcHR5IHByb3RvdHlwZS5cblxuICAgICAgICAgIH0gLy8gRm9yIHBsYWluIGZ1bmN0aW9ucyBhbmQgYXJyb3dzLCB1c2UgbmFtZSBhcyBhIGhldXJpc3RpYy5cblxuXG4gICAgICAgICAgdmFyIG5hbWUgPSB0eXBlLm5hbWUgfHwgdHlwZS5kaXNwbGF5TmFtZTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIC9eW0EtWl0vLnRlc3QobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmICh0eXBlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UHJvcGVydHkodHlwZSwgJyQkdHlwZW9mJykpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgICAvLyBEZWZpbml0ZWx5IFJlYWN0IGNvbXBvbmVudHMuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5fZ2V0TW91bnRlZFJvb3RDb3VudCA9IF9nZXRNb3VudGVkUm9vdENvdW50O1xuZXhwb3J0cy5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmUgPSBjb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU7XG5leHBvcnRzLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtID0gY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm07XG5leHBvcnRzLmZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMgPSBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzO1xuZXhwb3J0cy5nZXRGYW1pbHlCeUlEID0gZ2V0RmFtaWx5QnlJRDtcbmV4cG9ydHMuZ2V0RmFtaWx5QnlUeXBlID0gZ2V0RmFtaWx5QnlUeXBlO1xuZXhwb3J0cy5oYXNVbnJlY292ZXJhYmxlRXJyb3JzID0gaGFzVW5yZWNvdmVyYWJsZUVycm9ycztcbmV4cG9ydHMuaW5qZWN0SW50b0dsb2JhbEhvb2sgPSBpbmplY3RJbnRvR2xvYmFsSG9vaztcbmV4cG9ydHMuaXNMaWtlbHlDb21wb25lbnRUeXBlID0gaXNMaWtlbHlDb21wb25lbnRUeXBlO1xuZXhwb3J0cy5wZXJmb3JtUmVhY3RSZWZyZXNoID0gcGVyZm9ybVJlYWN0UmVmcmVzaDtcbmV4cG9ydHMucmVnaXN0ZXIgPSByZWdpc3RlcjtcbmV4cG9ydHMuc2V0U2lnbmF0dXJlID0gc2V0U2lnbmF0dXJlO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRTtcblxue1xuICBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFID0gU3ltYm9sLmZvcigncmVhY3QubW9kdWxlLnJlZmVyZW5jZScpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgZW5hYmxlRGVidWdUcmFjaW5nICB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IGVuYWJsZUxlZ2FjeUhpZGRlbiAgfHwgdHlwZSA9PT0gUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgIHx8IGVuYWJsZUNhY2hlRWxlbWVudCAgfHwgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIFRoaXMgbmVlZHMgdG8gaW5jbHVkZSBhbGwgcG9zc2libGUgbW9kdWxlIHJlZmVyZW5jZSBvYmplY3RcbiAgICAvLyB0eXBlcyBzdXBwb3J0ZWQgYnkgYW55IEZsaWdodCBjb25maWd1cmF0aW9uIGFueXdoZXJlIHNpbmNlXG4gICAgLy8gd2UgZG9uJ3Qga25vdyB3aGljaCBGbGlnaHQgYnVpbGQgdGhpcyB3aWxsIGVuZCB1cCBiZWluZyB1c2VkXG4gICAgLy8gd2l0aC5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIHx8IHR5cGUuZ2V0TW9kdWxlSWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICggIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9wcm9kLWVycm9yLWNvZGVzXG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihtYXliZUtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdERPTVwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0SW50bFwiXTsiLCIvKiBnbG9iYWwgX19yZWFjdF9yZWZyZXNoX2xpYnJhcnlfXyAqL1xuXG5jb25zdCBzYWZlVGhpcyA9IHJlcXVpcmUoJ2NvcmUtanMtcHVyZS9mZWF0dXJlcy9nbG9iYWwtdGhpcycpO1xuY29uc3QgUmVmcmVzaFJ1bnRpbWUgPSByZXF1aXJlKCdyZWFjdC1yZWZyZXNoL3J1bnRpbWUnKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgaWYgKHR5cGVvZiBzYWZlVGhpcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgJFJlZnJlc2hJbmplY3RlZCQgPSAnX19yZWFjdFJlZnJlc2hJbmplY3RlZCc7XG4gICAgLy8gTmFtZXNwYWNlIHRoZSBpbmplY3RlZCBmbGFnIChpZiBuZWNlc3NhcnkpIGZvciBtb25vcmVwbyBjb21wYXRpYmlsaXR5XG4gICAgaWYgKHR5cGVvZiBfX3JlYWN0X3JlZnJlc2hfbGlicmFyeV9fICE9PSAndW5kZWZpbmVkJyAmJiBfX3JlYWN0X3JlZnJlc2hfbGlicmFyeV9fKSB7XG4gICAgICAkUmVmcmVzaEluamVjdGVkJCArPSAnXycgKyBfX3JlYWN0X3JlZnJlc2hfbGlicmFyeV9fO1xuICAgIH1cblxuICAgIC8vIE9ubHkgaW5qZWN0IHRoZSBydW50aW1lIGlmIGl0IGhhc24ndCBiZWVuIGluamVjdGVkXG4gICAgaWYgKCFzYWZlVGhpc1skUmVmcmVzaEluamVjdGVkJF0pIHtcbiAgICAgIC8vIEluamVjdCByZWZyZXNoIHJ1bnRpbWUgaW50byBnbG9iYWwgc2NvcGVcbiAgICAgIFJlZnJlc2hSdW50aW1lLmluamVjdEludG9HbG9iYWxIb29rKHNhZmVUaGlzKTtcblxuICAgICAgLy8gTWFyayB0aGUgcnVudGltZSBhcyBpbmplY3RlZCB0byBwcmV2ZW50IGRvdWJsZS1pbmplY3Rpb25cbiAgICAgIHNhZmVUaGlzWyRSZWZyZXNoSW5qZWN0ZWQkXSA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vc3RhYmxlL2dsb2JhbC10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5nbG9iYWwtdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vZnVsbC9nbG9iYWwtdGhpcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogcmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXNuZXh0Lmdsb2JhbC10aGlzJyk7XG5cbnZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi9hY3R1YWwvZ2xvYmFsLXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xudmFyIElTX0hUTUxEREEgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFsbDogZG9jdW1lbnRBbGwsXG4gIElTX0hUTUxEREE6IElTX0hUTUxEREFcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIG5hdmlnYXRvciAhPSAndW5kZWZpbmVkJyAmJiBTdHJpbmcobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgJyc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgd3JhcENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKE5hdGl2ZUNvbnN0cnVjdG9yKSB7XG4gIHZhciBXcmFwcGVyID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIFdyYXBwZXIpIHtcbiAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKTtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEpO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSwgYik7XG4gICAgICB9IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSwgYiwgYyk7XG4gICAgfSByZXR1cm4gYXBwbHkoTmF0aXZlQ29uc3RydWN0b3IsIHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICByZXR1cm4gV3JhcHBlcjtcbn07XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBQUk9UTyA9IG9wdGlvbnMucHJvdG87XG5cbiAgdmFyIG5hdGl2ZVNvdXJjZSA9IEdMT0JBTCA/IGdsb2JhbCA6IFNUQVRJQyA/IGdsb2JhbFtUQVJHRVRdIDogKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG5cbiAgdmFyIHRhcmdldCA9IEdMT0JBTCA/IHBhdGggOiBwYXRoW1RBUkdFVF0gfHwgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHBhdGgsIFRBUkdFVCwge30pW1RBUkdFVF07XG4gIHZhciB0YXJnZXRQcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuXG4gIHZhciBGT1JDRUQsIFVTRV9OQVRJVkUsIFZJUlRVQUxfUFJPVE9UWVBFO1xuICB2YXIga2V5LCBzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHksIG5hdGl2ZVByb3BlcnR5LCByZXN1bHRQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcblxuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIFVTRV9OQVRJVkUgPSAhRk9SQ0VEICYmIG5hdGl2ZVNvdXJjZSAmJiBoYXNPd24obmF0aXZlU291cmNlLCBrZXkpO1xuXG4gICAgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuICAgIGlmIChVU0VfTkFUSVZFKSBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihuYXRpdmVTb3VyY2UsIGtleSk7XG4gICAgICBuYXRpdmVQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgbmF0aXZlUHJvcGVydHkgPSBuYXRpdmVTb3VyY2Vba2V5XTtcblxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgaW1wbGVtZW50YXRpb25cbiAgICBzb3VyY2VQcm9wZXJ0eSA9IChVU0VfTkFUSVZFICYmIG5hdGl2ZVByb3BlcnR5KSA/IG5hdGl2ZVByb3BlcnR5IDogc291cmNlW2tleV07XG5cbiAgICBpZiAoVVNFX05BVElWRSAmJiB0eXBlb2YgdGFyZ2V0UHJvcGVydHkgPT0gdHlwZW9mIHNvdXJjZVByb3BlcnR5KSBjb250aW51ZTtcblxuICAgIC8vIGJpbmQgbWV0aG9kcyB0byBnbG9iYWwgZm9yIGNhbGxpbmcgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGlmIChvcHRpb25zLmJpbmQgJiYgVVNFX05BVElWRSkgcmVzdWx0UHJvcGVydHkgPSBiaW5kKHNvdXJjZVByb3BlcnR5LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2VzIGluIHRoaXMgdmVyc2lvblxuICAgIGVsc2UgaWYgKG9wdGlvbnMud3JhcCAmJiBVU0VfTkFUSVZFKSByZXN1bHRQcm9wZXJ0eSA9IHdyYXBDb25zdHJ1Y3Rvcihzb3VyY2VQcm9wZXJ0eSk7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgZWxzZSBpZiAoUFJPVE8gJiYgaXNDYWxsYWJsZShzb3VyY2VQcm9wZXJ0eSkpIHJlc3VsdFByb3BlcnR5ID0gdW5jdXJyeVRoaXMoc291cmNlUHJvcGVydHkpO1xuICAgIC8vIGRlZmF1bHQgY2FzZVxuICAgIGVsc2UgcmVzdWx0UHJvcGVydHkgPSBzb3VyY2VQcm9wZXJ0eTtcblxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8IChzb3VyY2VQcm9wZXJ0eSAmJiBzb3VyY2VQcm9wZXJ0eS5zaGFtKSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShyZXN1bHRQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0LCBrZXksIHJlc3VsdFByb3BlcnR5KTtcblxuICAgIGlmIChQUk9UTykge1xuICAgICAgVklSVFVBTF9QUk9UT1RZUEUgPSBUQVJHRVQgKyAnUHJvdG90eXBlJztcbiAgICAgIGlmICghaGFzT3duKHBhdGgsIFZJUlRVQUxfUFJPVE9UWVBFKSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocGF0aCwgVklSVFVBTF9QUk9UT1RZUEUsIHt9KTtcbiAgICAgIH1cbiAgICAgIC8vIGV4cG9ydCB2aXJ0dWFsIHByb3RvdHlwZSBtZXRob2RzXG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocGF0aFtWSVJUVUFMX1BST1RPVFlQRV0sIGtleSwgc291cmNlUHJvcGVydHkpO1xuICAgICAgLy8gZXhwb3J0IHJlYWwgcHJvdG90eXBlIG1ldGhvZHNcbiAgICAgIGlmIChvcHRpb25zLnJlYWwgJiYgdGFyZ2V0UHJvdG90eXBlICYmIChGT1JDRUQgfHwgIXRhcmdldFByb3RvdHlwZVtrZXldKSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodGFyZ2V0UHJvdG90eXBlLCBrZXksIHNvdXJjZVByb3BlcnR5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBhcHBseSA9IEZ1bmN0aW9uUHJvdG90eXBlLmFwcGx5O1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tcmVmbGVjdCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBSZWZsZWN0ID09ICdvYmplY3QnICYmIFJlZmxlY3QuYXBwbHkgfHwgKE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGFwcGx5KSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoYXBwbHksIGFyZ3VtZW50cyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgYmluZCA9IHVuY3VycnlUaGlzKHVuY3VycnlUaGlzLmJpbmQpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0KSB7XG4gIGFDYWxsYWJsZShmbik7XG4gIHJldHVybiB0aGF0ID09PSB1bmRlZmluZWQgPyBmbiA6IE5BVElWRV9CSU5EID8gYmluZChmbiwgdGhhdCkgOiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gIC8vIE5hc2hvcm4gYnVnOlxuICAvLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xMTI4XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMzBcbiAgaWYgKGNsYXNzb2ZSYXcoZm4pID09PSAnRnVuY3Rpb24nKSByZXR1cm4gdW5jdXJyeVRoaXMoZm4pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh2YXJpYWJsZSkgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSlcbiAgICA6IHBhdGhbbmFtZXNwYWNlXSAmJiBwYXRoW25hbWVzcGFjZV1bbWV0aG9kXSB8fCBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IHRoaXMgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZG9jdW1lbnRBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtYWxsJyk7XG5cbnZhciBkb2N1bWVudEFsbCA9ICRkb2N1bWVudEFsbC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxubW9kdWxlLmV4cG9ydHMgPSAkZG9jdW1lbnRBbGwuSVNfSFRNTEREQSA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciAkZG9jdW1lbnRBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtYWxsJyk7XG5cbnZhciBkb2N1bWVudEFsbCA9ICRkb2N1bWVudEFsbC5hbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gJGRvY3VtZW50QWxsLklTX0hUTUxEREEgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCkgfHwgaXQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjMzLjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyMyBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjMzLjEvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGBnbG9iYWxUaGlzYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2xvYmFsdGhpc1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuZ2xvYmFsVGhpcyAhPT0gZ2xvYmFsIH0sIHtcbiAgZ2xvYmFsVGhpczogZ2xvYmFsXG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmdsb2JhbC10aGlzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vZXMvZ2xvYmFsLXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5pLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikgeyBoYW5kbGVyKGV4ZWNPcHRpb25zKTsgfSk7XG5cdG1vZHVsZSA9IGV4ZWNPcHRpb25zLm1vZHVsZTtcblx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goKG9wdGlvbnMpID0+IHtcblx0Y29uc3Qgb3JpZ2luYWxGYWN0b3J5ID0gb3B0aW9ucy5mYWN0b3J5O1xuXHRvcHRpb25zLmZhY3RvcnkgPSBmdW5jdGlvbiAobW9kdWxlT2JqZWN0LCBtb2R1bGVFeHBvcnRzLCB3ZWJwYWNrUmVxdWlyZSkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnNldHVwKG9wdGlvbnMuaWQpO1xuXHRcdHRyeSB7XG5cdFx0XHRvcmlnaW5hbEZhY3RvcnkuY2FsbCh0aGlzLCBtb2R1bGVPYmplY3QsIG1vZHVsZUV4cG9ydHMsIHdlYnBhY2tSZXF1aXJlKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0aWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGVPYmplY3QuZXhwb3J0cyBpbnN0YW5jZW9mIFByb21pc2UpIHtcblx0XHRcdFx0b3B0aW9ucy5tb2R1bGUuZXhwb3J0cyA9IG9wdGlvbnMubW9kdWxlLmV4cG9ydHMudGhlbihcblx0XHRcdFx0XHQocmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5jbGVhbnVwKG9wdGlvbnMuaWQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChyZWFzb24pID0+IHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXAob3B0aW9ucy5pZCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5jbGVhbnVwKG9wdGlvbnMuaWQpXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufSlcblxuX193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQgPSB7XG5cdHJlZ2lzdGVyOiAoKSA9PiAodW5kZWZpbmVkKSxcblx0c2lnbmF0dXJlOiAoKSA9PiAoKHR5cGUpID0+ICh0eXBlKSksXG5cdHJ1bnRpbWU6IHtcblx0XHRjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybTogKCkgPT4gKCh0eXBlKSA9PiAodHlwZSkpLFxuXHRcdHJlZ2lzdGVyOiAoKSA9PiAodW5kZWZpbmVkKVxuXHR9LFxuXHRzZXR1cDogKGN1cnJlbnRNb2R1bGVJZCkgPT4ge1xuXHRcdGNvbnN0IHByZXZNb2R1bGVJZCA9IF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLm1vZHVsZUlkO1xuXHRcdGNvbnN0IHByZXZSZWdpc3RlciA9IF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnJlZ2lzdGVyO1xuXHRcdGNvbnN0IHByZXZTaWduYXR1cmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5zaWduYXR1cmU7XG5cdFx0Y29uc3QgcHJldkNsZWFudXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5jbGVhbnVwO1xuXG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQubW9kdWxlSWQgPSBjdXJyZW50TW9kdWxlSWQ7XG5cblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5yZWdpc3RlciA9ICh0eXBlLCBpZCkgPT4ge1xuXHRcdFx0Y29uc3QgdHlwZUlkID0gY3VycmVudE1vZHVsZUlkICsgXCIgXCIgKyBpZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnJ1bnRpbWUucmVnaXN0ZXIodHlwZSwgdHlwZUlkKTtcblx0XHR9XG5cblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5zaWduYXR1cmUgPSAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQucnVudGltZS5jcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpKTtcblxuXHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXAgPSAoY2xlYW51cE1vZHVsZUlkKSA9PiB7XG5cdFx0XHRpZiAoY3VycmVudE1vZHVsZUlkID09PSBjbGVhbnVwTW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQubW9kdWxlSWQgPSBwcmV2TW9kdWxlSWQ7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnJlZ2lzdGVyID0gcHJldlJlZ2lzdGVyO1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5zaWduYXR1cmUgPSBwcmV2U2lnbmF0dXJlO1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5jbGVhbnVwID0gcHJldkNsZWFudXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvQHBtbW13aC9yZWFjdC1yZWZyZXNoLXdlYnBhY2stcGx1Z2luL2NsaWVudC9SZWFjdFJlZnJlc2hFbnRyeS5qc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcHMvYmFubmVyL2luZGV4LnRzeFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW50cnkiLCJzaG9ydGNvZGUiLCJ0aXRsZSIsInN0YXR1cyIsImRlc2NyaXB0aW9uIiwicHJldmlldyIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJQVUJMSUNfVVJMIiwidXNlRXh0ZXJuYWxQZWVyRGVwZW5kZW5jaWVzIiwiYWRkaXRpb25hbEN1c3RvbVByb3BlcnRpZXMiLCJhdmFpbGFibGVUcmFuc2xhdGlvbnMiLCJSZWFjdCIsImpzeERFViIsIl9qc3hERVYiLCJzdHlsZXMiLCJjYXJkIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImZvbnRGYW1pbHkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJ3b3JkV3JhcCIsImNhcmRDb250YWluZXIiLCJmb250U2l6ZSIsImp1c3RpZnlDb250ZW50IiwibGluZUhlaWdodCIsInBhZGRpbmciLCJ3aWR0aCIsImNhcmRJbmZvIiwiY29sb3IiLCJjYXJkTmFtZSIsImZvbnRXZWlnaHQiLCJjYXJkRGVzY3JpcHRpb24iLCJjYXJkQ2F0ZWdvcnkiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dEFsaWduIiwiQmFubmVyQ2FyZHMiLCJoZWFkaW5nIiwidGV4dENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiaW1nUGF0aCIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiUFVCTElDX0FTU0VUU19VUkwiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9jIiwiJFJlZnJlc2hSZWckIiwiUmVhY3RET00iLCJJbnRsUHJvdmlkZXIiLCJub3JtYWxpemVXaWRnZXRJbnB1dCIsIndpZGdldERlZmluaXRpb24iLCJyZW5kZXIiLCJpbnN0YW5jZUlkIiwibGFuZ0NvZGUiLCJvcmlnaW4iLCJjYiIsImVsZW1lbnQiLCJsb2NhbGUiLCJtZXNzYWdlcyIsIkxvY2FsZSIsImZldGNoVHJhbnNsYXRpb25NZXNzYWdlcyIsIndpZGdldElkIiwiRU4iLCJyZXNwb25zZSIsIndpbmRvdyIsImZldGNoIiwianNvbiIsImUiLCJjYW1lbGl6ZSIsInJlZmluZUlucHV0VHlwZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiSFRNTEVsZW1lbnQiLCJwYWxldHRlIiwiZ2V0QXR0cmlidXRlIiwicmF3UGFyYW1zIiwicGFyc2VVc2VySW5wdXQiLCJwYXJhbXMiLCJfd2lkZ2V0RGVmaW5pdGlvbiRzZXQiLCJfd2lkZ2V0RGVmaW5pdGlvbiRzZXQyIiwiX3dpZGdldERlZmluaXRpb24kc2V0MyIsInNjaGVtYVByb3BzIiwic2V0dGluZ3NTY2hlbWEiLCJwcm9wZXJ0aWVzIiwiZmllbGRzIiwicHJvcE5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsInByb3BOYW1lIiwicGFyc2VWYWx1ZSIsInR5cGUiLCJhdHRyaWJ1dGUiLCJpbmNsdWRlcyIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsIkpTT04iLCJwYXJzZSIsImF2YWlsYWJsZUxhbmdjb2RlcyIsIkFSIiwiREUiLCJFUyIsIkZSIiwiSVQiLCJKQSIsIktPIiwiUEwiLCJQVCIsIlJVIiwiVFIiLCJaSCIsIlJlZnJlc2giLCJyZXF1aXJlIiwiZ2V0TW9kdWxlRXhwb3J0cyIsIm1vZHVsZUlkIiwibWF5YmVNb2R1bGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiYyIsImNvbnNvbGUiLCJ3YXJuIiwiZXhwb3J0c09yUHJvbWlzZSIsIlByb21pc2UiLCJ0aGVuIiwiZ2V0UmVhY3RSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUiLCJtb2R1bGVFeHBvcnRzIiwic2lnbmF0dXJlIiwicHVzaCIsImdldEZhbWlseUJ5VHlwZSIsImtleSIsImdldFdlYnBhY2tIb3REYXRhIiwiaXNSZWFjdFJlZnJlc2hCb3VuZGFyeSIsImNyZWF0ZURlYm91bmNlVXBkYXRlIiwicmVmcmVzaFRpbWVvdXQiLCJlbnF1ZXVlVXBkYXRlIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwidW5kZWZpbmVkIiwicGVyZm9ybVJlYWN0UmVmcmVzaCIsImlzTGlrZWx5Q29tcG9uZW50VHlwZSIsImhhc0V4cG9ydHMiLCJhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyIsImV4cG9ydFZhbHVlIiwicmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoIiwicmVnaXN0ZXIiLCJ0eXBlSUQiLCJzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnkiLCJwcmV2U2lnbmF0dXJlIiwibmV4dFNpZ25hdHVyZSIsImxlbmd0aCIsImkiLCJleGVjdXRlUnVudGltZSIsIndlYnBhY2tIb3QiLCJyZWZyZXNoT3ZlcmxheSIsImlzVGVzdCIsImlzSG90VXBkYXRlIiwiZGF0YSIsInByZXZEYXRhIiwiZGlzcG9zZSIsImhvdERpc3Bvc2VDYWxsYmFjayIsImFjY2VwdCIsImhvdEVycm9ySGFuZGxlciIsImVycm9yIiwiaGFuZGxlUnVudGltZUVycm9yIiwib25Ib3RBY2NlcHRFcnJvciIsIm1lc3NhZ2UiLCJob3QiLCJpbnZhbGlkYXRlIiwidXBkYXRlQ2FsbGJhY2siLCJjbGVhclJ1bnRpbWVFcnJvcnMiLCJmcmVlemUiLCJJTkZJTklUWSIsInN5bWJvbFRhZyIsInJlQXNjaWlXb3JkIiwicmVMYXRpbiIsInJzQXN0cmFsUmFuZ2UiLCJyc0NvbWJvTWFya3NSYW5nZSIsInJzQ29tYm9TeW1ib2xzUmFuZ2UiLCJyc0RpbmdiYXRSYW5nZSIsInJzTG93ZXJSYW5nZSIsInJzTWF0aE9wUmFuZ2UiLCJyc05vbkNoYXJSYW5nZSIsInJzUHVuY3R1YXRpb25SYW5nZSIsInJzU3BhY2VSYW5nZSIsInJzVXBwZXJSYW5nZSIsInJzVmFyUmFuZ2UiLCJyc0JyZWFrUmFuZ2UiLCJyc0Fwb3MiLCJyc0FzdHJhbCIsInJzQnJlYWsiLCJyc0NvbWJvIiwicnNEaWdpdHMiLCJyc0RpbmdiYXQiLCJyc0xvd2VyIiwicnNNaXNjIiwicnNGaXR6IiwicnNNb2RpZmllciIsInJzTm9uQXN0cmFsIiwicnNSZWdpb25hbCIsInJzU3VyclBhaXIiLCJyc1VwcGVyIiwicnNaV0oiLCJyc0xvd2VyTWlzYyIsInJzVXBwZXJNaXNjIiwicnNPcHRMb3dlckNvbnRyIiwicnNPcHRVcHBlckNvbnRyIiwicmVPcHRNb2QiLCJyc09wdFZhciIsInJzT3B0Sm9pbiIsImpvaW4iLCJyc1NlcSIsInJzRW1vamkiLCJyc1N5bWJvbCIsInJlQXBvcyIsIlJlZ0V4cCIsInJlQ29tYm9NYXJrIiwicmVVbmljb2RlIiwicmVVbmljb2RlV29yZCIsInJlSGFzVW5pY29kZSIsInJlSGFzVW5pY29kZVdvcmQiLCJkZWJ1cnJlZExldHRlcnMiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwiZnJlZVNlbGYiLCJzZWxmIiwicm9vdCIsIkZ1bmN0aW9uIiwiYXJyYXlSZWR1Y2UiLCJhcnJheSIsIml0ZXJhdGVlIiwiYWNjdW11bGF0b3IiLCJpbml0QWNjdW0iLCJpbmRleCIsImFzY2lpVG9BcnJheSIsInN0cmluZyIsInNwbGl0IiwiYXNjaWlXb3JkcyIsIm1hdGNoIiwiYmFzZVByb3BlcnR5T2YiLCJvYmplY3QiLCJkZWJ1cnJMZXR0ZXIiLCJoYXNVbmljb2RlIiwidGVzdCIsImhhc1VuaWNvZGVXb3JkIiwic3RyaW5nVG9BcnJheSIsInVuaWNvZGVUb0FycmF5IiwidW5pY29kZVdvcmRzIiwib2JqZWN0UHJvdG8iLCJwcm90b3R5cGUiLCJvYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwiU3ltYm9sIiwic3ltYm9sUHJvdG8iLCJzeW1ib2xUb1N0cmluZyIsImJhc2VTbGljZSIsInN0YXJ0IiwiZW5kIiwicmVzdWx0IiwiQXJyYXkiLCJiYXNlVG9TdHJpbmciLCJ2YWx1ZSIsImlzU3ltYm9sIiwiY2FsbCIsImNhc3RTbGljZSIsImNyZWF0ZUNhc2VGaXJzdCIsIm1ldGhvZE5hbWUiLCJzdHJTeW1ib2xzIiwiY2hyIiwiY2hhckF0IiwidHJhaWxpbmciLCJzbGljZSIsImNyZWF0ZUNvbXBvdW5kZXIiLCJ3b3JkcyIsImRlYnVyciIsInJlcGxhY2UiLCJpc09iamVjdExpa2UiLCJjYW1lbENhc2UiLCJ3b3JkIiwidG9Mb3dlckNhc2UiLCJjYXBpdGFsaXplIiwidXBwZXJGaXJzdCIsInBhdHRlcm4iLCJndWFyZCIsIk5PREVfRU5WIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiUkVBQ1RfU1RSSUNUX01PREVfVFlQRSIsIlJFQUNUX1BST0ZJTEVSX1RZUEUiLCJSRUFDVF9QUk9WSURFUl9UWVBFIiwiUkVBQ1RfQ09OVEVYVF9UWVBFIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJSRUFDVF9TQ09QRV9UWVBFIiwiUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUiLCJSRUFDVF9PRkZTQ1JFRU5fVFlQRSIsIlJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSIsIlJFQUNUX0NBQ0hFX1RZUEUiLCJmb3IiLCJzeW1ib2xGb3IiLCJQb3NzaWJseVdlYWtNYXAiLCJXZWFrTWFwIiwiTWFwIiwiYWxsRmFtaWxpZXNCeUlEIiwiYWxsRmFtaWxpZXNCeVR5cGUiLCJhbGxTaWduYXR1cmVzQnlUeXBlIiwidXBkYXRlZEZhbWlsaWVzQnlUeXBlIiwicGVuZGluZ1VwZGF0ZXMiLCJoZWxwZXJzQnlSZW5kZXJlcklEIiwiaGVscGVyc0J5Um9vdCIsIm1vdW50ZWRSb290cyIsIlNldCIsImZhaWxlZFJvb3RzIiwicm9vdEVsZW1lbnRzIiwiaXNQZXJmb3JtaW5nUmVmcmVzaCIsImNvbXB1dGVGdWxsS2V5IiwiZnVsbEtleSIsIm93bktleSIsImhvb2tzIiwiZ2V0Q3VzdG9tSG9va3MiLCJlcnIiLCJmb3JjZVJlc2V0IiwiaG9vayIsIm5lc3RlZEhvb2tTaWduYXR1cmUiLCJnZXQiLCJuZXN0ZWRIb29rS2V5IiwiaGF2ZUVxdWFsU2lnbmF0dXJlcyIsInByZXZUeXBlIiwibmV4dFR5cGUiLCJpc1JlYWN0Q2xhc3MiLCJpc1JlYWN0Q29tcG9uZW50IiwiY2FuUHJlc2VydmVTdGF0ZUJldHdlZW4iLCJyZXNvbHZlRmFtaWx5IiwiY2xvbmVNYXAiLCJtYXAiLCJjbG9uZSIsImZvckVhY2giLCJzZXQiLCJjbG9uZVNldCIsImFkZCIsImdldFByb3BlcnR5IiwicHJvcGVydHkiLCJzdGFsZUZhbWlsaWVzIiwidXBkYXRlZEZhbWlsaWVzIiwidXBkYXRlcyIsIl9yZWYiLCJmYW1pbHkiLCJjdXJyZW50IiwidXBkYXRlIiwiaGVscGVycyIsInNldFJlZnJlc2hIYW5kbGVyIiwiZGlkRXJyb3IiLCJmaXJzdEVycm9yIiwiZmFpbGVkUm9vdHNTbmFwc2hvdCIsIm1vdW50ZWRSb290c1NuYXBzaG90IiwiaGVscGVyc0J5Um9vdFNuYXBzaG90IiwiRXJyb3IiLCJoYXMiLCJzY2hlZHVsZVJvb3QiLCJzY2hlZHVsZVJlZnJlc2giLCJpZCIsInNldFNpZ25hdHVyZSIsImFyZ3VtZW50cyIsImNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSIsImdldEZhbWlseUJ5SUQiLCJmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzIiwiZmFtaWxpZXMiLCJhZmZlY3RlZEluc3RhbmNlcyIsImluc3RhbmNlc0ZvclJvb3QiLCJmaW5kSG9zdEluc3RhbmNlc0ZvclJlZnJlc2giLCJpbnN0IiwiaW5qZWN0SW50b0dsb2JhbEhvb2siLCJnbG9iYWxPYmplY3QiLCJfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18iLCJuZXh0SUQiLCJyZW5kZXJlcnMiLCJzdXBwb3J0c0ZpYmVyIiwiaW5qZWN0IiwiaW5qZWN0ZWQiLCJvblNjaGVkdWxlRmliZXJSb290Iiwib25Db21taXRGaWJlclJvb3QiLCJtYXliZVByaW9yaXR5TGV2ZWwiLCJvbkNvbW1pdEZpYmVyVW5tb3VudCIsImlzRGlzYWJsZWQiLCJvbGRJbmplY3QiLCJhcHBseSIsIm9sZE9uQ29tbWl0RmliZXJSb290Iiwib2xkT25TY2hlZHVsZUZpYmVyUm9vdCIsImRlbGV0ZSIsImFsdGVybmF0ZSIsIndhc01vdW50ZWQiLCJtZW1vaXplZFN0YXRlIiwiaXNNb3VudGVkIiwiaGFzVW5yZWNvdmVyYWJsZUVycm9ycyIsIl9nZXRNb3VudGVkUm9vdENvdW50Iiwic2l6ZSIsImNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtIiwic2F2ZWRUeXBlIiwiaGFzQ3VzdG9tSG9va3MiLCJkaWRDb2xsZWN0SG9va3MiLCJvd25OYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJfX3Byb3RvX18iLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJNQVlCRV9JVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJtYXliZUl0ZXJhdG9yIiwiUmVhY3RTaGFyZWRJbnRlcm5hbHMiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImZvcm1hdCIsIl9sZW4yIiwiYXJncyIsIl9rZXkyIiwicHJpbnRXYXJuaW5nIiwibGV2ZWwiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwic3RhY2siLCJnZXRTdGFja0FkZGVuZHVtIiwiY29uY2F0IiwiYXJnc1dpdGhGb3JtYXQiLCJpdGVtIiwiU3RyaW5nIiwidW5zaGlmdCIsImVuYWJsZVNjb3BlQVBJIiwiZW5hYmxlQ2FjaGVFbGVtZW50IiwiZW5hYmxlVHJhbnNpdGlvblRyYWNpbmciLCJlbmFibGVMZWdhY3lIaWRkZW4iLCJlbmFibGVEZWJ1Z1RyYWNpbmciLCJSRUFDVF9NT0RVTEVfUkVGRVJFTkNFIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiJCR0eXBlb2YiLCJnZXRNb2R1bGVJZCIsImdldFdyYXBwZWROYW1lIiwib3V0ZXJUeXBlIiwiaW5uZXJUeXBlIiwid3JhcHBlck5hbWUiLCJmdW5jdGlvbk5hbWUiLCJnZXRDb250ZXh0TmFtZSIsImdldENvbXBvbmVudE5hbWVGcm9tVHlwZSIsInRhZyIsImNvbnRleHQiLCJwcm92aWRlciIsIl9jb250ZXh0Iiwib3V0ZXJOYW1lIiwibGF6eUNvbXBvbmVudCIsInBheWxvYWQiLCJfcGF5bG9hZCIsImluaXQiLCJfaW5pdCIsIngiLCJhc3NpZ24iLCJkaXNhYmxlZERlcHRoIiwicHJldkxvZyIsInByZXZJbmZvIiwicHJldldhcm4iLCJwcmV2RXJyb3IiLCJwcmV2R3JvdXAiLCJwcmV2R3JvdXBDb2xsYXBzZWQiLCJwcmV2R3JvdXBFbmQiLCJkaXNhYmxlZExvZyIsIl9fcmVhY3REaXNhYmxlZExvZyIsImRpc2FibGVMb2dzIiwibG9nIiwiaW5mbyIsImdyb3VwIiwiZ3JvdXBDb2xsYXBzZWQiLCJncm91cEVuZCIsInByb3BzIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydGllcyIsInJlZW5hYmxlTG9ncyIsIlJlYWN0Q3VycmVudERpc3BhdGNoZXIiLCJwcmVmaXgiLCJkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSIsInNvdXJjZSIsIm93bmVyRm4iLCJ0cmltIiwicmVlbnRyeSIsImNvbXBvbmVudEZyYW1lQ2FjaGUiLCJkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lIiwiZm4iLCJjb25zdHJ1Y3QiLCJmcmFtZSIsImNvbnRyb2wiLCJwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlIiwicHJlcGFyZVN0YWNrVHJhY2UiLCJwcmV2aW91c0Rpc3BhdGNoZXIiLCJGYWtlIiwiZGVmaW5lUHJvcGVydHkiLCJSZWZsZWN0Iiwic2FtcGxlIiwic2FtcGxlTGluZXMiLCJjb250cm9sTGluZXMiLCJzIiwiX2ZyYW1lIiwic3ludGhldGljRnJhbWUiLCJkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUiLCJzaG91bGRDb25zdHJ1Y3QiLCJDb21wb25lbnQiLCJkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYiLCJoYXNPd25Qcm9wZXJ0eSIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsInNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Iiwib3duZXIiLCJfb3duZXIiLCJfc291cmNlIiwic2V0RXh0cmFTdGFja0ZyYW1lIiwiY2hlY2tQcm9wVHlwZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsImNvbXBvbmVudE5hbWUiLCJiaW5kIiwidHlwZVNwZWNOYW1lIiwiZXJyb3IkMSIsImV4IiwiaXNBcnJheUltcGwiLCJpc0FycmF5IiwiYSIsInR5cGVOYW1lIiwiaGFzVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImNvbnN0cnVjdG9yIiwid2lsbENvZXJjaW9uVGhyb3ciLCJ0ZXN0U3RyaW5nQ29lcmNpb24iLCJjaGVja0tleVN0cmluZ0NvZXJjaW9uIiwiUmVhY3RDdXJyZW50T3duZXIiLCJSRVNFUlZFRF9QUk9QUyIsInJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImRpZFdhcm5BYm91dFN0cmluZ1JlZnMiLCJoYXNWYWxpZFJlZiIsImNvbmZpZyIsImdldHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImlzUmVhY3RXYXJuaW5nIiwiaGFzVmFsaWRLZXkiLCJ3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQiLCJzdGF0ZU5vZGUiLCJkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlciIsIndhcm5BYm91dEFjY2Vzc2luZ0tleSIsImRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nUmVmIiwiUmVhY3RFbGVtZW50IiwiX3N0b3JlIiwibWF5YmVLZXkiLCJkZWZhdWx0UHJvcHMiLCJSZWFjdEN1cnJlbnRPd25lciQxIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMSIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiaXNWYWxpZEVsZW1lbnQiLCJnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0iLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bSIsIm93bmVySGFzS2V5VXNlV2FybmluZyIsImdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJwYXJlbnRUeXBlIiwicGFyZW50TmFtZSIsInZhbGlkYXRlRXhwbGljaXRLZXkiLCJ2YWxpZGF0ZWQiLCJjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwiY2hpbGRPd25lciIsInZhbGlkYXRlQ2hpbGRLZXlzIiwibm9kZSIsImNoaWxkIiwiaXRlcmF0b3JGbiIsImVudHJpZXMiLCJzdGVwIiwibmV4dCIsImRvbmUiLCJ2YWxpZGF0ZVByb3BUeXBlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIl9uYW1lIiwiZ2V0RGVmYXVsdFByb3BzIiwiaXNSZWFjdENsYXNzQXBwcm92ZWQiLCJ2YWxpZGF0ZUZyYWdtZW50UHJvcHMiLCJmcmFnbWVudCIsImpzeFdpdGhWYWxpZGF0aW9uIiwiaXNTdGF0aWNDaGlsZHJlbiIsInZhbGlkVHlwZSIsInNvdXJjZUluZm8iLCJ0eXBlU3RyaW5nIiwianN4REVWJDEiLCJGcmFnbWVudCIsInNhZmVUaGlzIiwiUmVmcmVzaFJ1bnRpbWUiLCIkUmVmcmVzaEluamVjdGVkJCIsIl9fcmVhY3RfcmVmcmVzaF9saWJyYXJ5X18iLCJwYXJlbnQiLCJpc0NhbGxhYmxlIiwidHJ5VG9TdHJpbmciLCIkVHlwZUVycm9yIiwiVHlwZUVycm9yIiwiYXJndW1lbnQiLCJpc09iamVjdCIsIiRTdHJpbmciLCJ1bmN1cnJ5VGhpcyIsInN0cmluZ1NsaWNlIiwiaXQiLCJERVNDUklQVE9SUyIsImRlZmluZVByb3BlcnR5TW9kdWxlIiwiY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yIiwiZiIsImJpdG1hcCIsImZhaWxzIiwiZG9jdW1lbnRBbGwiLCJhbGwiLCJJU19IVE1MRERBIiwiRVhJU1RTIiwiY3JlYXRlRWxlbWVudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIkRlbm8iLCJ2ZXJzaW9ucyIsInZlcnNpb24iLCJ2OCIsImlzRm9yY2VkIiwicGF0aCIsImNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSIsImhhc093biIsIndyYXBDb25zdHJ1Y3RvciIsIk5hdGl2ZUNvbnN0cnVjdG9yIiwiV3JhcHBlciIsImIiLCJvcHRpb25zIiwiVEFSR0VUIiwidGFyZ2V0IiwiR0xPQkFMIiwiU1RBVElDIiwic3RhdCIsIlBST1RPIiwicHJvdG8iLCJuYXRpdmVTb3VyY2UiLCJ0YXJnZXRQcm90b3R5cGUiLCJGT1JDRUQiLCJVU0VfTkFUSVZFIiwiVklSVFVBTF9QUk9UT1RZUEUiLCJzb3VyY2VQcm9wZXJ0eSIsInRhcmdldFByb3BlcnR5IiwibmF0aXZlUHJvcGVydHkiLCJyZXN1bHRQcm9wZXJ0eSIsImRlc2NyaXB0b3IiLCJmb3JjZWQiLCJkb250Q2FsbEdldFNldCIsIndyYXAiLCJzaGFtIiwicmVhbCIsImV4ZWMiLCJOQVRJVkVfQklORCIsIkZ1bmN0aW9uUHJvdG90eXBlIiwiYUNhbGxhYmxlIiwidGhhdCIsImNsYXNzb2ZSYXciLCJ1bmN1cnJ5VGhpc1dpdGhCaW5kIiwiYUZ1bmN0aW9uIiwidmFyaWFibGUiLCJuYW1lc3BhY2UiLCJtZXRob2QiLCJpc051bGxPclVuZGVmaW5lZCIsIlYiLCJQIiwiZnVuYyIsImNoZWNrIiwiTWF0aCIsImdsb2JhbFRoaXMiLCJ0b09iamVjdCIsImNsYXNzb2YiLCIkT2JqZWN0IiwicHJvcGVydHlJc0VudW1lcmFibGUiLCIkZG9jdW1lbnRBbGwiLCJyZXBsYWNlbWVudCIsImZlYXR1cmUiLCJkZXRlY3Rpb24iLCJub3JtYWxpemUiLCJQT0xZRklMTCIsIk5BVElWRSIsImdldEJ1aWx0SW4iLCJpc1Byb3RvdHlwZU9mIiwiVVNFX1NZTUJPTF9BU19VSUQiLCIkU3ltYm9sIiwiSUU4X0RPTV9ERUZJTkUiLCJWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyIsImFuT2JqZWN0IiwidG9Qcm9wZXJ0eUtleSIsIiRkZWZpbmVQcm9wZXJ0eSIsIiRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJFTlVNRVJBQkxFIiwiQ09ORklHVVJBQkxFIiwiV1JJVEFCTEUiLCJPIiwiQXR0cmlidXRlcyIsInByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlIiwidG9JbmRleGVkT2JqZWN0IiwiJHByb3BlcnR5SXNFbnVtZXJhYmxlIiwiTkFTSE9STl9CVUciLCJpbnB1dCIsInByZWYiLCJ2YWwiLCJ2YWx1ZU9mIiwiZGVmaW5lR2xvYmFsUHJvcGVydHkiLCJTSEFSRUQiLCJzdG9yZSIsIklTX1BVUkUiLCJtb2RlIiwiY29weXJpZ2h0IiwibGljZW5zZSIsIlY4X1ZFUlNJT04iLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW1ib2wiLCJJbmRleGVkT2JqZWN0IiwicmVxdWlyZU9iamVjdENvZXJjaWJsZSIsImdldE1ldGhvZCIsIm9yZGluYXJ5VG9QcmltaXRpdmUiLCJ3ZWxsS25vd25TeW1ib2wiLCJUT19QUklNSVRJVkUiLCJleG90aWNUb1ByaW0iLCJ0b1ByaW1pdGl2ZSIsInBvc3RmaXgiLCJyYW5kb20iLCJOQVRJVkVfU1lNQk9MIiwic2hhcmVkIiwidWlkIiwiV2VsbEtub3duU3ltYm9sc1N0b3JlIiwiY3JlYXRlV2VsbEtub3duU3ltYm9sIiwid2l0aG91dFNldHRlciIsIiQiXSwic291cmNlUm9vdCI6IiJ9