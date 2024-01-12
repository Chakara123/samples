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
    url: `${"/js-widgets/registry-starterkit-reac"}/iframe.html?id=widgets-banner-components`
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
    const response = await window.fetch(`${"/js-widgets/registry-starterkit-reac"}/translations/${widgetId}/${locale}.json`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyL2pzL21haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2ZDLEtBQUssRUFBRSw2QkFBNkI7RUFDcENDLFNBQVMsRUFBRSxRQUFRO0VBQ25CQyxLQUFLLEVBQUUsY0FBYztFQUNyQkMsTUFBTSxFQUFFLFFBQVE7RUFDaEJDLFdBQVcsRUFBRSxpQ0FBaUM7RUFDOUNDLE9BQU8sRUFBRTtJQUNQQyxHQUFHLEVBQUcsR0FBRUMsc0NBQXVCO0VBQ2pDLENBQUM7RUFDREcsMkJBQTJCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztFQUVqRUMsMEJBQTBCLEVBQUU7SUFDMUJDLHFCQUFxQixFQUFFLENBQ3JCLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUk7RUFFUjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjBEO0FBQUE7QUFRM0QsTUFBTUksTUFBcUMsR0FBRztFQUM1Q0MsSUFBSSxFQUFFO0lBQ0pDLFVBQVUsRUFBRSxPQUFPO0lBQ25CQyxZQUFZLEVBQUUsUUFBUTtJQUN0QkMsU0FBUyxFQUFFLDZDQUE2QztJQUN4REMsVUFBVSxFQUFFLHVCQUF1QjtJQUNuQ0MsUUFBUSxFQUFFLFFBQVE7SUFDbEJDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCQyxNQUFNLEVBQUUsT0FBTztJQUNmQyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsY0FBYyxFQUFFLE1BQU07SUFDdEJDLGdCQUFnQixFQUFFLFdBQVc7SUFDN0JDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDREMsYUFBYSxFQUFFO0lBQ2JYLFVBQVUsRUFBRSxvQkFBb0I7SUFDaENZLFFBQVEsRUFBRSxNQUFNO0lBQ2hCQyxjQUFjLEVBQUUsUUFBUTtJQUN4QkMsVUFBVSxFQUFFLE1BQU07SUFDbEJWLFFBQVEsRUFBRSxRQUFRO0lBQ2xCRyxRQUFRLEVBQUUsVUFBVTtJQUNwQlEsT0FBTyxFQUFFLE1BQU07SUFDZkMsS0FBSyxFQUFFLE1BQU07SUFDYlYsTUFBTSxFQUFFO0VBQ1YsQ0FBQztFQUNEVyxRQUFRLEVBQUU7SUFDUmpCLFVBQVUsRUFBRSxxQkFBcUI7SUFDakNrQixLQUFLLEVBQUUsb0JBQW9CO0lBQzNCSCxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RJLFFBQVEsRUFBRTtJQUNSQyxVQUFVLEVBQUUsTUFBTTtJQUNsQlIsUUFBUSxFQUFFO0VBQ1osQ0FBQztFQUNEUyxlQUFlLEVBQUU7SUFDZlQsUUFBUSxFQUFFLFNBQVM7SUFDbkJHLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDRE8sWUFBWSxFQUFFO0lBQ1pKLEtBQUssRUFBRSxvQkFBb0I7SUFDM0JOLFFBQVEsRUFBRSxTQUFTO0lBQ25CVyxhQUFhLEVBQUUsV0FBVztJQUMxQkMsU0FBUyxFQUFFO0VBQ2I7QUFDRixDQUFDO0FBRUQsTUFBTUMsV0FBVyxHQUFHQSxDQUFDO0VBQ25CQyxPQUFPO0VBQ1AxQyxLQUFLO0VBQ0wyQyxTQUFTO0VBQ1RDLGVBQWU7RUFDZkM7QUFDUyxDQUFDLGtCQUNWaEMsNkRBQUE7RUFDRWlDLEtBQUssRUFBRTtJQUNMLEdBQUdoQyxNQUFNLENBQUNDLElBQUk7SUFDZGdDLGVBQWUsRUFBRyxPQUFNMUMsU0FBOEIsa0JBQWlCd0MsT0FBUSxHQUFFO0lBQ2pGRDtFQUNGLENBQUU7RUFBQUssUUFBQSxlQUVGcEMsNkRBQUE7SUFBS2lDLEtBQUssRUFBRWhDLE1BQU0sQ0FBQ21CLFFBQVM7SUFBQWdCLFFBQUEsZ0JBQzFCcEMsNkRBQUE7TUFBSWlDLEtBQUssRUFBRTtRQUFFLEdBQUdoQyxNQUFNLENBQUNxQixRQUFRO1FBQUVELEtBQUssRUFBRVM7TUFBVSxDQUFFO01BQUFNLFFBQUEsRUFBRVA7SUFBTztNQUFBUSxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsWUFBSyxDQUFDLGVBQ25FeEMsNkRBQUE7TUFBR2lDLEtBQUssRUFBRTtRQUFFLEdBQUdoQyxNQUFNLENBQUN1QixlQUFlO1FBQUVILEtBQUssRUFBRVM7TUFBVSxDQUFFO01BQUFNLFFBQUEsRUFBRWpEO0lBQUs7TUFBQWtELFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxZQUFJLENBQUM7RUFBQTtJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDbkU7QUFBQztFQUFBSCxRQUFBLEVBQUFDLFlBQUE7RUFBQUMsVUFBQTtFQUFBQyxZQUFBO0FBQUEsWUFDSCxDQUNOO0FBQUNDLEVBQUEsR0FuQkliLFdBQVc7QUFxQmpCLGlFQUFlQSxXQUFXLEVBQUM7QUFBQSxJQUFBYSxFQUFBO0FBQUFDLHNDQUFBLENBQUFELEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFRDtBQUNPO0FBRVM7QUFDMkI7QUFDbEI7QUFDQztBQUFBO0FBSXBELE1BQU1NLE1BQWdCLEdBQUcsZUFBQUEsQ0FBZ0JDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEVBQUUsRUFBRTtFQUN6RSxNQUFNO0lBQUVDLE9BQU87SUFBRUMsTUFBTTtJQUFFQztFQUFTLENBQUMsR0FBRyxNQUFNVCx3RUFBb0IsQ0FDOURHLFVBQVUsRUFDVkMsUUFBUSxFQUNSSCw0REFDRixDQUFDO0VBQ0QsSUFBSSxDQUFDTSxPQUFPLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0lBQ3ZCO0VBQ0Y7RUFDQVYsdURBQWUsZUFDYjNDLDZEQUFBLENBQUM0QyxvREFBWTtJQUFDUyxNQUFNLEVBQUVBLE1BQU87SUFBQ0MsUUFBUSxFQUFFQSxRQUFTO0lBQUFsQixRQUFBLGVBQy9DcEMsNkRBQUEsQ0FBQzRCLCtEQUFXO01BQUFTLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0gsQ0FBQyxFQUNmWSxPQUFPLEVBQ1AsTUFBTUQsRUFBRSxDQUFDQyxPQUFPLENBQ2xCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVMLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnVCO0FBRzVDLE1BQU1TLHdCQUF3QixHQUFHLE1BQUFBLENBQy9CQyxRQUFnQixFQUNoQlIsUUFBZ0IsS0FDNEI7RUFDNUMsTUFBTUksTUFBTSxHQUFHSixRQUFrQjtFQUNqQztFQUNBLElBQUlJLE1BQU0sS0FBS0UsaURBQU0sQ0FBQ0csRUFBRSxFQUFFO0lBQ3hCLE9BQU8sQ0FBQyxDQUFDO0VBQ1g7RUFDQSxJQUFJO0lBQ0Y7SUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsTUFBTSxDQUFDQyxLQUFLLENBQ2hDLEdBQUVyRSxzQ0FBdUIsaUJBQWdCaUUsUUFBUyxJQUFHSixNQUFPLE9BQy9ELENBQUM7SUFDRCxPQUFPTSxRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBQ3hCLENBQUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7SUFDVjtJQUNBLE9BQU8sQ0FBQyxDQUFDO0VBQ1g7QUFDRixDQUFDO0FBRUQsaUVBQWVQLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQztBQUVpQztBQVl6RSxlQUFlWCxvQkFBb0JBLENBQ2pDRyxVQUFrQixFQUNsQkMsUUFBZ0IsRUFDaEJILGdCQUFrQyxFQUNsQ21CLGdCQUF3RCxFQUNyQjtFQUNuQyxJQUFJYixPQUFPLEdBQUdjLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDbkIsVUFBVSxDQUFDO0VBQ2pESSxPQUFPLEdBQUcsSUFBSWdCLFdBQVcsQ0FBQyxDQUFDO0VBQzNCLE1BQU1YLFFBQVEsR0FBR1gsZ0JBQWdCLENBQUM1RCxTQUFTO0VBQzNDLE1BQU1tRixPQUFPLEdBQUdqQixPQUFPLENBQUNrQixZQUFZLENBQUMsY0FBYyxDQUFXO0VBQzlELE1BQU1oQixRQUFRLEdBQUcsTUFBTUUsNEVBQXdCLENBQUNDLFFBQVEsRUFBRVIsUUFBUSxDQUFDO0VBQ25FLE1BQU1zQixTQUFTLEdBQUdDLGNBQWMsQ0FBQzFCLGdCQUFnQixFQUFFTSxPQUFPLENBQUM7RUFDM0Q7RUFDQTtFQUNBLE1BQU1xQixNQUFNLEdBQUdSLGdCQUFnQixHQUMzQkEsZ0JBQWdCLENBQUNNLFNBQVMsQ0FBQyxHQUMxQkEsU0FBZTtFQUNwQixPQUFPO0lBQUVuQixPQUFPO0lBQUVDLE1BQU0sRUFBRUosUUFBa0I7SUFBRW9CLE9BQU87SUFBRWYsUUFBUTtJQUFFbUI7RUFBTyxDQUFDO0FBQzNFO0FBRU8sU0FBU0QsY0FBY0EsQ0FDNUIxQixnQkFBa0MsRUFDbENNLE9BQW9CLEVBQ0s7RUFBQSxJQUFBc0IscUJBQUEsRUFBQUMsc0JBQUEsRUFBQUMsc0JBQUE7RUFDekI7RUFDQSxNQUFNQyxXQUFXLEdBQ2YsQ0FBQS9CLGdCQUFnQixhQUFoQkEsZ0JBQWdCLHdCQUFBNEIscUJBQUEsR0FBaEI1QixnQkFBZ0IsQ0FBRWdDLGNBQWMsY0FBQUoscUJBQUEsd0JBQUFDLHNCQUFBLEdBQWhDRCxxQkFBQSxDQUFrQ0ssVUFBVSxjQUFBSixzQkFBQSx3QkFBQUMsc0JBQUEsR0FBNUNELHNCQUFBLENBQThDSyxNQUFNLGNBQUFKLHNCQUFBLHVCQUFwREEsc0JBQUEsQ0FBc0RHLFVBQVUsS0FBSSxDQUFDLENBQUM7RUFDeEUsTUFBTUUsU0FBUyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ04sV0FBVyxDQUFDO0VBQzFDLE9BQU9JLFNBQVMsQ0FBQ0csTUFBTSxDQUNyQixDQUFDWCxNQUFNLEVBQUVZLFFBQWdCLE1BQStCO0lBQ3RELEdBQUdaLE1BQU07SUFDVCxDQUFDVCx1REFBUSxDQUFDcUIsUUFBUSxDQUFDLEdBQUdDLFVBQVUsQ0FDOUJELFFBQVEsRUFDUmpDLE9BQU8sRUFDUCxDQUFBeUIsV0FBVyxhQUFYQSxXQUFXLHVCQUFYQSxXQUFXLENBQUdRLFFBQVEsQ0FBQyxLQUFJO01BQUVFLElBQUksRUFBRTtJQUFPLENBQzVDO0VBQ0YsQ0FBQyxDQUFDLEVBQ0YsQ0FBQyxDQUNILENBQUM7QUFDSDtBQUVBLFNBQVNELFVBQVVBLENBQ2pCRCxRQUFnQixFQUNoQmpDLE9BQW9CLEVBQ3BCO0VBQUVtQztBQUFpQixDQUFDLEVBQ2Y7RUFDTEEsSUFBSSxHQUFHLE1BQU07RUFDYixJQUFJQyxTQUFTLEdBQUdwQyxPQUFPLENBQUNrQixZQUFZLENBQUUsUUFBT2UsUUFBUyxFQUFDLENBQUM7RUFDeEQsSUFBSUUsSUFBSSxLQUFLLFFBQVEsRUFBRTtJQUNyQkMsU0FBUyxHQUFHLEVBQUU7SUFDZCxPQUFPQSxTQUFTO0VBQ2xCO0VBQ0EsSUFBSUQsSUFBSSxLQUFLLFFBQVEsRUFBRTtJQUNyQkMsU0FBUyxHQUFHLEdBQUc7SUFDZixPQUFPQSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FDMUJDLFVBQVUsQ0FBQ0YsU0FBUyxDQUFDLEdBQ3JCRyxRQUFRLENBQUNILFNBQVMsRUFBRSxFQUFFLENBQUM7RUFDN0I7RUFDQSxJQUFJRCxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQ25CLE9BQU8sSUFBSTtFQUNiO0VBQ0EsSUFBSUEsSUFBSSxLQUFLLFNBQVMsRUFBRTtJQUN0QkMsU0FBUyxHQUFHLEdBQUc7SUFDZjtJQUNBLE9BQU9BLFNBQVMsS0FBSyxHQUFHO0VBQzFCO0VBQ0FBLFNBQVMsR0FBRyxNQUFNO0VBQ2xCLE9BQU9JLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxTQUFTLENBQUM7QUFDOUI7QUFFQSxpRUFBZTNDLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEY1QixJQUFLVSxNQUFNLDBCQUFOQSxNQUFNO0VBQU5BLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQU5BLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQU5BLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQU5BLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQU5BLE1BQU07RUFBQSxPQUFOQSxNQUFNO0FBQUE7QUFnQmxCLE1BQU11QyxrQkFBNEIsR0FBRyxDQUNuQ3ZDLE1BQU0sQ0FBQ3dDLEVBQUUsRUFDVHhDLE1BQU0sQ0FBQ3lDLEVBQUUsRUFDVHpDLE1BQU0sQ0FBQ0csRUFBRSxFQUNUSCxNQUFNLENBQUMwQyxFQUFFLEVBQ1QxQyxNQUFNLENBQUMyQyxFQUFFLEVBQ1QzQyxNQUFNLENBQUM0QyxFQUFFLEVBQ1Q1QyxNQUFNLENBQUM2QyxFQUFFLEVBQ1Q3QyxNQUFNLENBQUM4QyxFQUFFLEVBQ1Q5QyxNQUFNLENBQUMrQyxFQUFFLEVBQ1QvQyxNQUFNLENBQUNnRCxFQUFFLEVBQ1RoRCxNQUFNLENBQUNpRCxFQUFFLEVBQ1RqRCxNQUFNLENBQUNrRCxFQUFFLEVBQ1RsRCxNQUFNLENBQUNtRCxFQUFFLENBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkQ7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLG1CQUFPLENBQUMsc0VBQXVCLENBQUM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxnQkFBZ0JBLENBQUNDLFFBQVEsRUFBRTtFQUNsQyxJQUFJLE9BQU9BLFFBQVEsS0FBSyxXQUFXLEVBQUU7SUFDbkM7SUFDQTtJQUNBO0lBQ0E7SUFDQSxPQUFPLENBQUMsQ0FBQztFQUNYO0VBRUEsSUFBSUMsV0FBVyxHQUFHQyxtQkFBbUIsQ0FBQ0MsQ0FBQyxDQUFDSCxRQUFRLENBQUM7RUFDakQsSUFBSSxPQUFPQyxXQUFXLEtBQUssV0FBVyxFQUFFO0lBQ3RDO0lBQ0E7SUFDQTtJQUNBRyxPQUFPLENBQUNDLElBQUksQ0FBQyxvREFBb0QsR0FBR0wsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNuRixPQUFPLENBQUMsQ0FBQztFQUNYO0VBRUEsSUFBSU0sZ0JBQWdCLEdBQUdMLFdBQVcsQ0FBQy9ILE9BQU87RUFDMUMsSUFBSSxPQUFPcUksT0FBTyxLQUFLLFdBQVcsSUFBSUQsZ0JBQWdCLFlBQVlDLE9BQU8sRUFBRTtJQUN6RSxPQUFPRCxnQkFBZ0IsQ0FBQ0UsSUFBSSxDQUFDLFVBQVV0SSxPQUFPLEVBQUU7TUFDOUMsT0FBT0EsT0FBTztJQUNoQixDQUFDLENBQUM7RUFDSjtFQUNBLE9BQU9vSSxnQkFBZ0I7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNHLGdDQUFnQ0EsQ0FBQ0MsYUFBYSxFQUFFO0VBQ3ZELElBQUlDLFNBQVMsR0FBRyxFQUFFO0VBQ2xCQSxTQUFTLENBQUNDLElBQUksQ0FBQ2YsT0FBTyxDQUFDZ0IsZUFBZSxDQUFDSCxhQUFhLENBQUMsQ0FBQztFQUV0RCxJQUFJQSxhQUFhLElBQUksSUFBSSxJQUFJLE9BQU9BLGFBQWEsS0FBSyxRQUFRLEVBQUU7SUFDOUQ7SUFDQSxPQUFPQyxTQUFTO0VBQ2xCO0VBRUEsS0FBSyxJQUFJRyxHQUFHLElBQUlKLGFBQWEsRUFBRTtJQUM3QixJQUFJSSxHQUFHLEtBQUssWUFBWSxFQUFFO01BQ3hCO0lBQ0Y7SUFFQUgsU0FBUyxDQUFDQyxJQUFJLENBQUNFLEdBQUcsQ0FBQztJQUNuQkgsU0FBUyxDQUFDQyxJQUFJLENBQUNmLE9BQU8sQ0FBQ2dCLGVBQWUsQ0FBQ0gsYUFBYSxDQUFDSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzdEO0VBRUEsT0FBT0gsU0FBUztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0ksaUJBQWlCQSxDQUFDTCxhQUFhLEVBQUU7RUFDeEMsT0FBTztJQUNMQyxTQUFTLEVBQUVGLGdDQUFnQyxDQUFDQyxhQUFhLENBQUM7SUFDMURNLHNCQUFzQixFQUFFQSxzQkFBc0IsQ0FBQ04sYUFBYTtFQUM5RCxDQUFDO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTTyxvQkFBb0JBLENBQUEsRUFBRztFQUM5QjtBQUNGO0FBQ0E7QUFDQTtFQUNFLElBQUlDLGNBQWM7O0VBRWxCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFDRSxTQUFTQyxhQUFhQSxDQUFDQyxRQUFRLEVBQUU7SUFDL0IsSUFBSSxPQUFPRixjQUFjLEtBQUssV0FBVyxFQUFFO01BQ3pDQSxjQUFjLEdBQUdHLFVBQVUsQ0FBQyxZQUFZO1FBQ3RDSCxjQUFjLEdBQUdJLFNBQVM7UUFDMUJ6QixPQUFPLENBQUMwQixtQkFBbUIsQ0FBQyxDQUFDO1FBQzdCSCxRQUFRLENBQUMsQ0FBQztNQUNaLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDUjtFQUNGO0VBRUEsT0FBT0QsYUFBYTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNILHNCQUFzQkEsQ0FBQ04sYUFBYSxFQUFFO0VBQzdDLElBQUliLE9BQU8sQ0FBQzJCLHFCQUFxQixDQUFDZCxhQUFhLENBQUMsRUFBRTtJQUNoRCxPQUFPLElBQUk7RUFDYjtFQUNBLElBQUlBLGFBQWEsS0FBS1ksU0FBUyxJQUFJWixhQUFhLEtBQUssSUFBSSxJQUFJLE9BQU9BLGFBQWEsS0FBSyxRQUFRLEVBQUU7SUFDOUY7SUFDQSxPQUFPLEtBQUs7RUFDZDtFQUVBLElBQUllLFVBQVUsR0FBRyxLQUFLO0VBQ3RCLElBQUlDLHVCQUF1QixHQUFHLElBQUk7RUFDbEMsS0FBSyxJQUFJWixHQUFHLElBQUlKLGFBQWEsRUFBRTtJQUM3QmUsVUFBVSxHQUFHLElBQUk7O0lBRWpCO0lBQ0EsSUFBSVgsR0FBRyxLQUFLLFlBQVksRUFBRTtNQUN4QjtJQUNGOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSWEsV0FBVyxHQUFHakIsYUFBYSxDQUFDSSxHQUFHLENBQUM7SUFDcEMsSUFBSSxDQUFDakIsT0FBTyxDQUFDMkIscUJBQXFCLENBQUNHLFdBQVcsQ0FBQyxFQUFFO01BQy9DRCx1QkFBdUIsR0FBRyxLQUFLO0lBQ2pDO0VBQ0Y7RUFFQSxPQUFPRCxVQUFVLElBQUlDLHVCQUF1QjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0UsOEJBQThCQSxDQUFDbEIsYUFBYSxFQUFFVixRQUFRLEVBQUU7RUFDL0QsSUFBSUgsT0FBTyxDQUFDMkIscUJBQXFCLENBQUNkLGFBQWEsQ0FBQyxFQUFFO0lBQ2hEO0lBQ0FiLE9BQU8sQ0FBQ2dDLFFBQVEsQ0FBQ25CLGFBQWEsRUFBRVYsUUFBUSxHQUFHLFlBQVksQ0FBQztFQUMxRDtFQUVBLElBQUlVLGFBQWEsS0FBS1ksU0FBUyxJQUFJWixhQUFhLEtBQUssSUFBSSxJQUFJLE9BQU9BLGFBQWEsS0FBSyxRQUFRLEVBQUU7SUFDOUY7SUFDQTtFQUNGO0VBRUEsS0FBSyxJQUFJSSxHQUFHLElBQUlKLGFBQWEsRUFBRTtJQUM3QjtJQUNBLElBQUlJLEdBQUcsS0FBSyxZQUFZLEVBQUU7TUFDeEI7SUFDRjtJQUVBLElBQUlhLFdBQVcsR0FBR2pCLGFBQWEsQ0FBQ0ksR0FBRyxDQUFDO0lBQ3BDLElBQUlqQixPQUFPLENBQUMyQixxQkFBcUIsQ0FBQ0csV0FBVyxDQUFDLEVBQUU7TUFDOUMsSUFBSUcsTUFBTSxHQUFHOUIsUUFBUSxHQUFHLGFBQWEsR0FBR2MsR0FBRztNQUMzQ2pCLE9BQU8sQ0FBQ2dDLFFBQVEsQ0FBQ0YsV0FBVyxFQUFFRyxNQUFNLENBQUM7SUFDdkM7RUFDRjtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxvQ0FBb0NBLENBQUNDLGFBQWEsRUFBRUMsYUFBYSxFQUFFO0VBQzFFLElBQUlELGFBQWEsQ0FBQ0UsTUFBTSxLQUFLRCxhQUFhLENBQUNDLE1BQU0sRUFBRTtJQUNqRCxPQUFPLElBQUk7RUFDYjtFQUVBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixhQUFhLENBQUNDLE1BQU0sRUFBRUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNoRCxJQUFJSCxhQUFhLENBQUNHLENBQUMsQ0FBQyxLQUFLRixhQUFhLENBQUNFLENBQUMsQ0FBQyxFQUFFO01BQ3pDLE9BQU8sSUFBSTtJQUNiO0VBQ0Y7RUFFQSxPQUFPLEtBQUs7QUFDZDtBQUVBLElBQUloQixhQUFhLEdBQUdGLG9CQUFvQixDQUFDLENBQUM7QUFDMUMsU0FBU21CLGNBQWNBLENBQUMxQixhQUFhLEVBQUVWLFFBQVEsRUFBRXFDLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxNQUFNLEVBQUU7RUFDbkZYLDhCQUE4QixDQUFDbEIsYUFBYSxFQUFFVixRQUFRLENBQUM7RUFFdkQsSUFBSXFDLFVBQVUsRUFBRTtJQUNkLElBQUlHLFdBQVcsR0FBRyxDQUFDLENBQUNILFVBQVUsQ0FBQ0ksSUFBSTtJQUNuQyxJQUFJQyxRQUFRO0lBQ1osSUFBSUYsV0FBVyxFQUFFO01BQ2ZFLFFBQVEsR0FBR0wsVUFBVSxDQUFDSSxJQUFJLENBQUNDLFFBQVE7SUFDckM7SUFFQSxJQUFJMUIsc0JBQXNCLENBQUNOLGFBQWEsQ0FBQyxFQUFFO01BQ3pDMkIsVUFBVSxDQUFDTSxPQUFPO01BQ2hCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNRLFNBQVNDLGtCQUFrQkEsQ0FBQ0gsSUFBSSxFQUFFO1FBQ2hDO1FBQ0FBLElBQUksQ0FBQ0MsUUFBUSxHQUFHM0IsaUJBQWlCLENBQUNMLGFBQWEsQ0FBQztNQUNsRCxDQUNGLENBQUM7TUFDRDJCLFVBQVUsQ0FBQ1EsTUFBTTtNQUNmO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7TUFDUSxTQUFTQyxlQUFlQSxDQUFDQyxLQUFLLEVBQUU7UUFDOUIsSUFBSSxPQUFPVCxjQUFjLEtBQUssV0FBVyxJQUFJQSxjQUFjLEVBQUU7VUFDM0RBLGNBQWMsQ0FBQ1Usa0JBQWtCLENBQUNELEtBQUssQ0FBQztRQUMxQztRQUVBLElBQUksT0FBT1IsTUFBTSxLQUFLLFdBQVcsSUFBSUEsTUFBTSxFQUFFO1VBQzNDLElBQUl6RixNQUFNLENBQUNtRyxnQkFBZ0IsRUFBRTtZQUMzQm5HLE1BQU0sQ0FBQ21HLGdCQUFnQixDQUFDRixLQUFLLENBQUNHLE9BQU8sQ0FBQztVQUN4QztRQUNGO1FBRUFoRCxtQkFBbUIsQ0FBQ0MsQ0FBQyxDQUFDSCxRQUFRLENBQUMsQ0FBQ21ELEdBQUcsQ0FBQ04sTUFBTSxDQUFDQyxlQUFlLENBQUM7TUFDN0QsQ0FDRixDQUFDO01BRUQsSUFBSU4sV0FBVyxFQUFFO1FBQ2YsSUFDRUUsUUFBUSxJQUNSQSxRQUFRLENBQUMxQixzQkFBc0IsSUFDL0JlLG9DQUFvQyxDQUNsQ1csUUFBUSxDQUFDL0IsU0FBUyxFQUNsQkYsZ0NBQWdDLENBQUNDLGFBQWEsQ0FDaEQsQ0FBQyxFQUNEO1VBQ0EyQixVQUFVLENBQUNlLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsTUFBTTtVQUNMakMsYUFBYTtVQUNYO0FBQ1o7QUFDQTtBQUNBO1VBQ1ksU0FBU2tDLGNBQWNBLENBQUEsRUFBRztZQUN4QixJQUFJLE9BQU9mLGNBQWMsS0FBSyxXQUFXLElBQUlBLGNBQWMsRUFBRTtjQUMzREEsY0FBYyxDQUFDZ0Isa0JBQWtCLENBQUMsQ0FBQztZQUNyQztVQUNGLENBQ0YsQ0FBQztRQUNIO01BQ0Y7SUFDRixDQUFDLE1BQU07TUFDTCxJQUFJZCxXQUFXLElBQUksT0FBT0UsUUFBUSxLQUFLLFdBQVcsRUFBRTtRQUNsREwsVUFBVSxDQUFDZSxVQUFVLENBQUMsQ0FBQztNQUN6QjtJQUNGO0VBQ0Y7QUFDRjtBQUVBbkwsTUFBTSxDQUFDQyxPQUFPLEdBQUdrRyxNQUFNLENBQUNtRixNQUFNLENBQUM7RUFDN0JwQyxhQUFhLEVBQUVBLGFBQWE7RUFDNUJpQixjQUFjLEVBQUVBLGNBQWM7RUFDOUJyQyxnQkFBZ0IsRUFBRUEsZ0JBQWdCO0VBQ2xDaUIsc0JBQXNCLEVBQUVBLHNCQUFzQjtFQUM5Q1ksOEJBQThCLEVBQUVBO0FBQ2xDLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQzdSRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTRCLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7QUFFcEI7QUFDQSxJQUFJQyxTQUFTLEdBQUcsaUJBQWlCOztBQUVqQztBQUNBLElBQUlDLFdBQVcsR0FBRywyQ0FBMkM7O0FBRTdEO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLDZDQUE2Qzs7QUFFM0Q7QUFDQSxJQUFJQyxhQUFhLEdBQUcsaUJBQWlCO0VBQ2pDQyxpQkFBaUIsR0FBRyxnQ0FBZ0M7RUFDcERDLG1CQUFtQixHQUFHLGlCQUFpQjtFQUN2Q0MsY0FBYyxHQUFHLGlCQUFpQjtFQUNsQ0MsWUFBWSxHQUFHLDJCQUEyQjtFQUMxQ0MsYUFBYSxHQUFHLHNCQUFzQjtFQUN0Q0MsY0FBYyxHQUFHLDhDQUE4QztFQUMvREMsa0JBQWtCLEdBQUcsaUJBQWlCO0VBQ3RDQyxZQUFZLEdBQUcsOEpBQThKO0VBQzdLQyxZQUFZLEdBQUcsMkJBQTJCO0VBQzFDQyxVQUFVLEdBQUcsZ0JBQWdCO0VBQzdCQyxZQUFZLEdBQUdOLGFBQWEsR0FBR0MsY0FBYyxHQUFHQyxrQkFBa0IsR0FBR0MsWUFBWTs7QUFFckY7QUFDQSxJQUFJSSxNQUFNLEdBQUcsV0FBVztFQUNwQkMsUUFBUSxHQUFHLEdBQUcsR0FBR2IsYUFBYSxHQUFHLEdBQUc7RUFDcENjLE9BQU8sR0FBRyxHQUFHLEdBQUdILFlBQVksR0FBRyxHQUFHO0VBQ2xDSSxPQUFPLEdBQUcsR0FBRyxHQUFHZCxpQkFBaUIsR0FBR0MsbUJBQW1CLEdBQUcsR0FBRztFQUM3RGMsUUFBUSxHQUFHLE1BQU07RUFDakJDLFNBQVMsR0FBRyxHQUFHLEdBQUdkLGNBQWMsR0FBRyxHQUFHO0VBQ3RDZSxPQUFPLEdBQUcsR0FBRyxHQUFHZCxZQUFZLEdBQUcsR0FBRztFQUNsQ2UsTUFBTSxHQUFHLElBQUksR0FBR25CLGFBQWEsR0FBR1csWUFBWSxHQUFHSyxRQUFRLEdBQUdiLGNBQWMsR0FBR0MsWUFBWSxHQUFHSyxZQUFZLEdBQUcsR0FBRztFQUM1R1csTUFBTSxHQUFHLDBCQUEwQjtFQUNuQ0MsVUFBVSxHQUFHLEtBQUssR0FBR04sT0FBTyxHQUFHLEdBQUcsR0FBR0ssTUFBTSxHQUFHLEdBQUc7RUFDakRFLFdBQVcsR0FBRyxJQUFJLEdBQUd0QixhQUFhLEdBQUcsR0FBRztFQUN4Q3VCLFVBQVUsR0FBRyxpQ0FBaUM7RUFDOUNDLFVBQVUsR0FBRyxvQ0FBb0M7RUFDakRDLE9BQU8sR0FBRyxHQUFHLEdBQUdoQixZQUFZLEdBQUcsR0FBRztFQUNsQ2lCLEtBQUssR0FBRyxTQUFTOztBQUVyQjtBQUNBLElBQUlDLFdBQVcsR0FBRyxLQUFLLEdBQUdULE9BQU8sR0FBRyxHQUFHLEdBQUdDLE1BQU0sR0FBRyxHQUFHO0VBQ2xEUyxXQUFXLEdBQUcsS0FBSyxHQUFHSCxPQUFPLEdBQUcsR0FBRyxHQUFHTixNQUFNLEdBQUcsR0FBRztFQUNsRFUsZUFBZSxHQUFHLEtBQUssR0FBR2pCLE1BQU0sR0FBRyx3QkFBd0I7RUFDM0RrQixlQUFlLEdBQUcsS0FBSyxHQUFHbEIsTUFBTSxHQUFHLHdCQUF3QjtFQUMzRG1CLFFBQVEsR0FBR1YsVUFBVSxHQUFHLEdBQUc7RUFDM0JXLFFBQVEsR0FBRyxHQUFHLEdBQUd0QixVQUFVLEdBQUcsSUFBSTtFQUNsQ3VCLFNBQVMsR0FBRyxLQUFLLEdBQUdQLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQ0osV0FBVyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsQ0FBQyxDQUFDVSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHRixRQUFRLEdBQUdELFFBQVEsR0FBRyxJQUFJO0VBQ3RISSxLQUFLLEdBQUdILFFBQVEsR0FBR0QsUUFBUSxHQUFHRSxTQUFTO0VBQ3ZDRyxPQUFPLEdBQUcsS0FBSyxHQUFHLENBQUNuQixTQUFTLEVBQUVNLFVBQVUsRUFBRUMsVUFBVSxDQUFDLENBQUNVLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUdDLEtBQUs7RUFDN0VFLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQ2YsV0FBVyxHQUFHUCxPQUFPLEdBQUcsR0FBRyxFQUFFQSxPQUFPLEVBQUVRLFVBQVUsRUFBRUMsVUFBVSxFQUFFWCxRQUFRLENBQUMsQ0FBQ3FCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHOztBQUUvRztBQUNBLElBQUlJLE1BQU0sR0FBR0MsTUFBTSxDQUFDM0IsTUFBTSxFQUFFLEdBQUcsQ0FBQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJNEIsV0FBVyxHQUFHRCxNQUFNLENBQUN4QixPQUFPLEVBQUUsR0FBRyxDQUFDOztBQUV0QztBQUNBLElBQUkwQixTQUFTLEdBQUdGLE1BQU0sQ0FBQ25CLE1BQU0sR0FBRyxLQUFLLEdBQUdBLE1BQU0sR0FBRyxJQUFJLEdBQUdpQixRQUFRLEdBQUdGLEtBQUssRUFBRSxHQUFHLENBQUM7O0FBRTlFO0FBQ0EsSUFBSU8sYUFBYSxHQUFHSCxNQUFNLENBQUMsQ0FDekJkLE9BQU8sR0FBRyxHQUFHLEdBQUdQLE9BQU8sR0FBRyxHQUFHLEdBQUdXLGVBQWUsR0FBRyxLQUFLLEdBQUcsQ0FBQ2YsT0FBTyxFQUFFVyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUNTLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQ2pHTixXQUFXLEdBQUcsR0FBRyxHQUFHRSxlQUFlLEdBQUcsS0FBSyxHQUFHLENBQUNoQixPQUFPLEVBQUVXLE9BQU8sR0FBR0UsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUNuR1QsT0FBTyxHQUFHLEdBQUcsR0FBR0UsV0FBVyxHQUFHLEdBQUcsR0FBR0UsZUFBZSxFQUNuREosT0FBTyxHQUFHLEdBQUcsR0FBR0ssZUFBZSxFQUMvQmQsUUFBUSxFQUNSb0IsT0FBTyxDQUNSLENBQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7O0FBRWpCO0FBQ0EsSUFBSVMsWUFBWSxHQUFHSixNQUFNLENBQUMsR0FBRyxHQUFHYixLQUFLLEdBQUcxQixhQUFhLEdBQUlDLGlCQUFpQixHQUFHQyxtQkFBbUIsR0FBR1EsVUFBVSxHQUFHLEdBQUcsQ0FBQzs7QUFFcEg7QUFDQSxJQUFJa0MsZ0JBQWdCLEdBQUcscUVBQXFFOztBQUU1RjtBQUNBLElBQUlDLGVBQWUsR0FBRztFQUNwQjtFQUNBLE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUM3RSxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDN0UsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUN6QixNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQ3pCLE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQ25ELE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQ25ELE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQ25ELE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQ25ELE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFDekIsTUFBTSxFQUFFLEdBQUc7RUFBRyxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQzdFLE1BQU0sRUFBRSxHQUFHO0VBQUcsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUM3RSxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUNuRCxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFBRSxNQUFNLEVBQUUsR0FBRztFQUNuRCxNQUFNLEVBQUUsR0FBRztFQUFHLE1BQU0sRUFBRSxHQUFHO0VBQUUsTUFBTSxFQUFFLEdBQUc7RUFDdEMsTUFBTSxFQUFFLElBQUk7RUFBRSxNQUFNLEVBQUUsSUFBSTtFQUMxQixNQUFNLEVBQUUsSUFBSTtFQUFFLE1BQU0sRUFBRSxJQUFJO0VBQzFCLE1BQU0sRUFBRSxJQUFJO0VBQ1o7RUFDQSxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDMUUsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMxRSxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzFFLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDMUUsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUM3QixRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMxRSxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzFFLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHO0VBQUcsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUN6RixRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFBRSxRQUFRLEVBQUUsR0FBRztFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQUUsUUFBUSxFQUFFLEdBQUc7RUFDekYsUUFBUSxFQUFFLEdBQUc7RUFBRyxRQUFRLEVBQUUsR0FBRztFQUM3QixRQUFRLEVBQUUsR0FBRztFQUFHLFFBQVEsRUFBRSxH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QTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQSxDQUFDOztXQUVEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRXhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3NyYy9hcHBzL2Jhbm5lci9CYW5uZXJDYXJkcy53aWRnZXQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3NyYy9hcHBzL2Jhbm5lci9jb21wb25lbnRzL0Jhbm5lckNhcmRzLnRzeCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvc3JjL2FwcHMvYmFubmVyL2luZGV4LnRzeCIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvc3JjL2NvbW1vbi9sb2NhbGUvZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzLnRzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9zcmMvY29tbW9uL25vcm1hbGl6ZVdpZGdldElucHV0LnRzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9zcmMvdHlwZXMvbG9jYWxlLnRzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvQHBtbW13aC9yZWFjdC1yZWZyZXNoLXdlYnBhY2stcGx1Z2luL2xpYi9ydW50aW1lL1JlZnJlc2hVdGlscy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2xvZGFzaC5jYW1lbGNhc2UvaW5kZXguanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdERPTVwiIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdEludGxcIiIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL0BwbW1td2gvcmVhY3QtcmVmcmVzaC13ZWJwYWNrLXBsdWdpbi9jbGllbnQvUmVhY3RSZWZyZXNoRW50cnkuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvYWN0dWFsL2dsb2JhbC10aGlzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2dsb2JhbC10aGlzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2dsb2JhbC10aGlzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2Z1bGwvZ2xvYmFsLXRoaXMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2EtY2FsbGFibGUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHkuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kb2N1bWVudC1hbGwuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZmFpbHMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMtY2xhdXNlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5LmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLWNhbGxhYmxlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1vYmplY3QuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZi5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcGF0aC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbi5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXkuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3VpZC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmdsb2JhbC10aGlzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXNuZXh0Lmdsb2JhbC10aGlzLmpzIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL3N0YWJsZS9nbG9iYWwtdGhpcy5qcyIsIi9Vc2Vycy8yNzM0ODEvRGVza3RvcC9wcm9qZWN0L2NoYWthcmEvd2VicGFjay9ib290c3RyYXAiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0IiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svcnVudGltZS9yZWFjdCByZWZyZXNoIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwiL1VzZXJzLzI3MzQ4MS9EZXNrdG9wL3Byb2plY3QvY2hha2FyYS93ZWJwYWNrL3N0YXJ0dXAiLCIvVXNlcnMvMjczNDgxL0Rlc2t0b3AvcHJvamVjdC9jaGFrYXJhL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW50cnk6ICcuL3NyYy9hcHBzL2Jhbm5lci9pbmRleC50c3gnLFxuICBzaG9ydGNvZGU6ICdiYW5uZXInLFxuICB0aXRsZTogJ0Jhbm5lciBDYXJkcycsXG4gIHN0YXR1czogJ3N0YWJsZScsXG4gIGRlc2NyaXB0aW9uOiAnSW5jcmVkaWJsZSBiYW5uZXIgdHJhZGluZyBjYXJkcycsXG4gIHByZXZpZXc6IHtcbiAgICB1cmw6IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2lmcmFtZS5odG1sP2lkPXdpZGdldHMtYmFubmVyLWNvbXBvbmVudHNgLFxuICB9LFxuICB1c2VFeHRlcm5hbFBlZXJEZXBlbmRlbmNpZXM6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LWludGwnXSxcblxuICBhZGRpdGlvbmFsQ3VzdG9tUHJvcGVydGllczoge1xuICAgIGF2YWlsYWJsZVRyYW5zbGF0aW9uczogW1xuICAgICAgJ2FyJyxcbiAgICAgICdkZScsXG4gICAgICAnZW4nLFxuICAgICAgJ2VzJyxcbiAgICAgICdmcicsXG4gICAgICAnaXQnLFxuICAgICAgJ2phJyxcbiAgICAgICdrbycsXG4gICAgICAncGwnLFxuICAgICAgJ3B0JyxcbiAgICAgICdydScsXG4gICAgICAndHInLFxuICAgICAgJ3poJyxcbiAgICBdLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDU1NQcm9wZXJ0aWVzLCBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbnRlcmZhY2UgQ2FyZFByb3BzIHtcbiAgaGVhZGluZzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgaW1nUGF0aDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IHN0cmluZztcbn1cbmNvbnN0IHN0eWxlczogUmVjb3JkPHN0cmluZywgQ1NTUHJvcGVydGllcz4gPSB7XG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIGJvcmRlclJhZGl1czogJzAuNXJlbScsXG4gICAgYm94U2hhZG93OiAnMC4xMjVyZW0gMC4xMjVyZW0gMC41cmVtIHJnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgZm9udEZhbWlseTogJ2hlbHZldGljYSwgc2Fucy1zZXJpZicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG1heFdpZHRoOiAnNjNyZW0nLFxuICAgIGhlaWdodDogJzI2cmVtJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJzEwMCUnLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gIH0sXG4gIGNhcmRDb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjEpJyxcbiAgICBmb250U2l6ZTogJzhyZW0nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBsaW5lSGVpZ2h0OiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHBhZGRpbmc6ICcxcmVtJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBjYXJkSW5mbzoge1xuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuMDEpJyxcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG4gICAgcGFkZGluZzogJzFyZW0nLFxuICB9LFxuICBjYXJkTmFtZToge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogJzJyZW0nLFxuICB9LFxuICBjYXJkRGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICB9LFxuICBjYXJkQ2F0ZWdvcnk6IHtcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgZm9udFNpemU6ICcwLjg1cmVtJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gIH0sXG59O1xuXG5jb25zdCBCYW5uZXJDYXJkcyA9ICh7XG4gIGhlYWRpbmcsXG4gIHRpdGxlLFxuICB0ZXh0Q29sb3IsXG4gIGJhY2tncm91bmRDb2xvcixcbiAgaW1nUGF0aCxcbn06IENhcmRQcm9wcyk6IFJlYWN0RWxlbWVudCA9PiAoXG4gIDxkaXZcbiAgICBzdHlsZT17e1xuICAgICAgLi4uc3R5bGVzLmNhcmQsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwcm9jZXNzLmVudi5QVUJMSUNfQVNTRVRTX1VSTH0vYmFubmVyL2ltYWdlcy8ke2ltZ1BhdGh9KWAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgfX1cbiAgPlxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkSW5mb30+XG4gICAgICA8aDEgc3R5bGU9e3sgLi4uc3R5bGVzLmNhcmROYW1lLCBjb2xvcjogdGV4dENvbG9yIH19PntoZWFkaW5nfTwvaDE+XG4gICAgICA8cCBzdHlsZT17eyAuLi5zdHlsZXMuY2FyZERlc2NyaXB0aW9uLCBjb2xvcjogdGV4dENvbG9yIH19Pnt0aXRsZX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyQ2FyZHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgeyBJbnRsUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBub3JtYWxpemVXaWRnZXRJbnB1dCBmcm9tICcuLi8uLi9jb21tb24vbm9ybWFsaXplV2lkZ2V0SW5wdXQnO1xuaW1wb3J0IEJhbm5lckNhcmRzIGZyb20gJy4vY29tcG9uZW50cy9CYW5uZXJDYXJkcyc7XG5pbXBvcnQgd2lkZ2V0RGVmaW5pdGlvbiBmcm9tICcuL0Jhbm5lckNhcmRzLndpZGdldCc7XG5cbmltcG9ydCB7IFJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdHlwZXMvd2lkZ2V0cyc7XG5cbmNvbnN0IHJlbmRlcjogUmVuZGVyRm4gPSBhc3luYyBmdW5jdGlvbiAoaW5zdGFuY2VJZCwgbGFuZ0NvZGUsIG9yaWdpbiwgY2IpIHtcbiAgY29uc3QgeyBlbGVtZW50LCBsb2NhbGUsIG1lc3NhZ2VzIH0gPSBhd2FpdCBub3JtYWxpemVXaWRnZXRJbnB1dChcbiAgICBpbnN0YW5jZUlkLFxuICAgIGxhbmdDb2RlLFxuICAgIHdpZGdldERlZmluaXRpb24sXG4gICk7XG4gIGlmICghZWxlbWVudCB8fCAhbG9jYWxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8SW50bFByb3ZpZGVyIGxvY2FsZT17bG9jYWxlfSBtZXNzYWdlcz17bWVzc2FnZXN9PlxuICAgICAgPEJhbm5lckNhcmRzIC8+XG4gICAgPC9JbnRsUHJvdmlkZXI+LFxuICAgIGVsZW1lbnQsXG4gICAgKCkgPT4gY2IoZWxlbWVudCksXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi8uLi90eXBlcy9sb2NhbGUnO1xuaW1wb3J0IHsgUmVzb2x2ZWRJbnRsQ29uZmlnIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IGZldGNoVHJhbnNsYXRpb25NZXNzYWdlcyA9IGFzeW5jIChcbiAgd2lkZ2V0SWQ6IHN0cmluZyxcbiAgbGFuZ0NvZGU6IHN0cmluZyxcbik6IFByb21pc2U8UmVzb2x2ZWRJbnRsQ29uZmlnWydtZXNzYWdlcyddPiA9PiB7XG4gIGNvbnN0IGxvY2FsZSA9IGxhbmdDb2RlIGFzIExvY2FsZTtcbiAgLy8gV2UgZG9uJ3Qgd2FudCB0byBkbyB0aGUgZXh0cmEgZmV0Y2hpbmcgZm9yIEVuZ2xpc2ggc2luY2UgaXQncyB0aGUgZGVmYXVsdC5cbiAgaWYgKGxvY2FsZSA9PT0gTG9jYWxlLkVOKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVGhpcyByZWxpZXMgb24gdGhlIENSQSBjb252ZW50aW9uIGZvciBQVUJMSUNfVVJMLlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2luZG93LmZldGNoKFxuICAgICAgYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vdHJhbnNsYXRpb25zLyR7d2lkZ2V0SWR9LyR7bG9jYWxlfS5qc29uYCxcbiAgICApO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJZiBzb21ldGhpbmcgd2VudCB3cm9uZyBkbyBub3QgZmFpbCB0aGUgd2lkZ2V0LCB1c2UgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UuXG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFRyYW5zbGF0aW9uTWVzc2FnZXM7XG4iLCJpbXBvcnQgY2FtZWxpemUgZnJvbSAnbG9kYXNoLmNhbWVsY2FzZSc7XG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi90eXBlcy9sb2NhbGUnO1xuaW1wb3J0IGZldGNoVHJhbnNsYXRpb25NZXNzYWdlcyBmcm9tICcuL2xvY2FsZS9mZXRjaFRyYW5zbGF0aW9uTWVzc2FnZXMnO1xuaW1wb3J0IHsgUmVzb2x2ZWRJbnRsQ29uZmlnIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tICcuLi90eXBlcy9kaXNwbGF5cyc7XG5pbXBvcnQgeyBTY2hlbWFMaXRlLCBXaWRnZXREZWZpbml0aW9uIH0gZnJvbSAnLi4vdHlwZXMvd2lkZ2V0cyc7XG5cbmV4cG9ydCB0eXBlIE5vcm1hbGl6ZWRXaWRnZXRJbnB1dDxUPiA9IFBhcnRpYWw8e1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgbG9jYWxlOiBMb2NhbGU7XG4gIG1lc3NhZ2VzOiBSZXNvbHZlZEludGxDb25maWdbJ21lc3NhZ2VzJ107XG4gIHBhbGV0dGU6IFRoZW1lcztcbn0+ICYgeyBwYXJhbXM6IFQgfTtcblxuYXN5bmMgZnVuY3Rpb24gbm9ybWFsaXplV2lkZ2V0SW5wdXQ8VD4oXG4gIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgbGFuZ0NvZGU6IHN0cmluZyxcbiAgd2lkZ2V0RGVmaW5pdGlvbjogV2lkZ2V0RGVmaW5pdGlvbixcbiAgcmVmaW5lSW5wdXRUeXBlcz86IChpbnB1dDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IFQsXG4pOiBQcm9taXNlPE5vcm1hbGl6ZWRXaWRnZXRJbnB1dDxUPj4ge1xuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGluc3RhbmNlSWQpO1xuICBlbGVtZW50ID0gbmV3IEhUTUxFbGVtZW50KCk7XG4gIGNvbnN0IHdpZGdldElkID0gd2lkZ2V0RGVmaW5pdGlvbi5zaG9ydGNvZGU7XG4gIGNvbnN0IHBhbGV0dGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wYWxldHRlJykgYXMgVGhlbWVzO1xuICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IGZldGNoVHJhbnNsYXRpb25NZXNzYWdlcyh3aWRnZXRJZCwgbGFuZ0NvZGUpO1xuICBjb25zdCByYXdQYXJhbXMgPSBwYXJzZVVzZXJJbnB1dCh3aWRnZXREZWZpbml0aW9uLCBlbGVtZW50KTtcbiAgLy8gSWYgdGhlcmUgaXMgbm8gcmVmaW5lbWVudCBuZWVkZWQgaXQgbWF5IG1lYW4gdGhhdCB0aGUgcmF3IHBhcmFtcyBwYXJzZVxuICAvLyBkaXJlY3RseSBpbnRvIFQsIG9yIHRoYXQgdGhlcmUgYXJlIG5vIHBhcmFtcy5cbiAgY29uc3QgcGFyYW1zID0gcmVmaW5lSW5wdXRUeXBlc1xuICAgID8gcmVmaW5lSW5wdXRUeXBlcyhyYXdQYXJhbXMpXG4gICAgOiAocmF3UGFyYW1zIGFzIFQpO1xuICByZXR1cm4geyBlbGVtZW50LCBsb2NhbGU6IGxhbmdDb2RlIGFzIExvY2FsZSwgcGFsZXR0ZSwgbWVzc2FnZXMsIHBhcmFtcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVc2VySW5wdXQoXG4gIHdpZGdldERlZmluaXRpb246IFdpZGdldERlZmluaXRpb24sXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAvLyBGaXJzdCB3ZSBuZWVkIHRvIGtub3cgd2hhdCBhcmUgdGhlIGlucHV0IG9wdGlvbnMuXG4gIGNvbnN0IHNjaGVtYVByb3BzID1cbiAgICB3aWRnZXREZWZpbml0aW9uPy5zZXR0aW5nc1NjaGVtYT8ucHJvcGVydGllcz8uZmllbGRzPy5wcm9wZXJ0aWVzIHx8IHt9O1xuICBjb25zdCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyhzY2hlbWFQcm9wcyk7XG4gIHJldHVybiBwcm9wTmFtZXMucmVkdWNlKFxuICAgIChwYXJhbXMsIHByb3BOYW1lOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9PiAoe1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgW2NhbWVsaXplKHByb3BOYW1lKV06IHBhcnNlVmFsdWUoXG4gICAgICAgIHByb3BOYW1lLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBzY2hlbWFQcm9wcz8uW3Byb3BOYW1lXSB8fCB7IHR5cGU6ICdudWxsJyB9LFxuICAgICAgKSxcbiAgICB9KSxcbiAgICB7fSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZShcbiAgcHJvcE5hbWU6IHN0cmluZyxcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHsgdHlwZSB9OiBTY2hlbWFMaXRlLFxuKTogYW55IHtcbiAgdHlwZSA9ICdudWxsJztcbiAgbGV0IGF0dHJpYnV0ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLSR7cHJvcE5hbWV9YCk7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGF0dHJpYnV0ZSA9ICcnO1xuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgYXR0cmlidXRlID0gJzAnO1xuICAgIHJldHVybiBhdHRyaWJ1dGUuaW5jbHVkZXMoJy4nKVxuICAgICAgPyBwYXJzZUZsb2F0KGF0dHJpYnV0ZSlcbiAgICAgIDogcGFyc2VJbnQoYXR0cmlidXRlLCAxMCk7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdudWxsJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICBhdHRyaWJ1dGUgPSAnMCc7XG4gICAgLy8gVGhlIENNUyBlbmNvZGVzIGJvb2xlYW5zIGFzICcwJyBhbmQgJzEnLlxuICAgIHJldHVybiBhdHRyaWJ1dGUgIT09ICcwJztcbiAgfVxuICBhdHRyaWJ1dGUgPSAnbnVsbCc7XG4gIHJldHVybiBKU09OLnBhcnNlKGF0dHJpYnV0ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5vcm1hbGl6ZVdpZGdldElucHV0O1xuIiwiZXhwb3J0IGVudW0gTG9jYWxlIHtcbiAgQVIgPSAnYXInLFxuICBERSA9ICdkZScsXG4gIEVOID0gJ2VuJyxcbiAgRVMgPSAnZXMnLFxuICBGUiA9ICdmcicsXG4gIElUID0gJ2l0JyxcbiAgSkEgPSAnamEnLFxuICBLTyA9ICdrbycsXG4gIFBMID0gJ3BsJyxcbiAgUFQgPSAncHQnLFxuICBSVSA9ICdydScsXG4gIFRSID0gJ3RyJyxcbiAgWkggPSAnemgnLFxufVxuXG5jb25zdCBhdmFpbGFibGVMYW5nY29kZXM6IExvY2FsZVtdID0gW1xuICBMb2NhbGUuQVIsXG4gIExvY2FsZS5ERSxcbiAgTG9jYWxlLkVOLFxuICBMb2NhbGUuRVMsXG4gIExvY2FsZS5GUixcbiAgTG9jYWxlLklULFxuICBMb2NhbGUuSkEsXG4gIExvY2FsZS5LTyxcbiAgTG9jYWxlLlBMLFxuICBMb2NhbGUuUFQsXG4gIExvY2FsZS5SVSxcbiAgTG9jYWxlLlRSLFxuICBMb2NhbGUuWkgsXG5dO1xuIiwiLyogZ2xvYmFsIF9fd2VicGFja19yZXF1aXJlX18gKi9cbnZhciBSZWZyZXNoID0gcmVxdWlyZSgncmVhY3QtcmVmcmVzaC9ydW50aW1lJyk7XG5cbi8qKlxuICogRXh0cmFjdHMgZXhwb3J0cyBmcm9tIGEgd2VicGFjayBtb2R1bGUgb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZUlkIEEgV2VicGFjayBtb2R1bGUgSUQuXG4gKiBAcmV0dXJucyB7Kn0gQW4gZXhwb3J0cyBvYmplY3QgZnJvbSB0aGUgbW9kdWxlLlxuICovXG5mdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKG1vZHVsZUlkKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlSWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gYG1vZHVsZUlkYCBpcyB1bmF2YWlsYWJsZSwgd2hpY2ggaW5kaWNhdGVzIHRoYXQgdGhpcyBtb2R1bGUgaXMgbm90IGluIHRoZSBjYWNoZSxcbiAgICAvLyB3aGljaCBtZWFucyB3ZSB3b24ndCBiZSBhYmxlIHRvIGNhcHR1cmUgYW55IGV4cG9ydHMsXG4gICAgLy8gYW5kIHRodXMgdGhleSBjYW5ub3QgYmUgcmVmcmVzaGVkIHNhZmVseS5cbiAgICAvLyBUaGVzZSBhcmUgbGlrZWx5IHJ1bnRpbWUgb3IgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIG1vZHVsZXMuXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdmFyIG1heWJlTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcbiAgaWYgKHR5cGVvZiBtYXliZU1vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBgbW9kdWxlSWRgIGlzIGF2YWlsYWJsZSBidXQgdGhlIG1vZHVsZSBpbiBjYWNoZSBpcyB1bmF2YWlsYWJsZSxcbiAgICAvLyB3aGljaCBpbmRpY2F0ZXMgdGhlIG1vZHVsZSBpcyBzb21laG93IGNvcnJ1cHRlZCAoZS5nLiBicm9rZW4gV2VicGFjYWsgYG1vZHVsZWAgZ2xvYmFscykuXG4gICAgLy8gV2Ugd2lsbCB3YXJuIHRoZSB1c2VyIChhcyB0aGlzIGlzIGxpa2VseSBhIG1pc3Rha2UpIGFuZCBhc3N1bWUgdGhleSBjYW5ub3QgYmUgcmVmcmVzaGVkLlxuICAgIGNvbnNvbGUud2FybignW1JlYWN0IFJlZnJlc2hdIEZhaWxlZCB0byBnZXQgZXhwb3J0cyBmb3IgbW9kdWxlOiAnICsgbW9kdWxlSWQgKyAnLicpO1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHZhciBleHBvcnRzT3JQcm9taXNlID0gbWF5YmVNb2R1bGUuZXhwb3J0cztcbiAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBleHBvcnRzT3JQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgIHJldHVybiBleHBvcnRzT3JQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgICAgIHJldHVybiBleHBvcnRzO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBleHBvcnRzT3JQcm9taXNlO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNpZ25hdHVyZSBvZiBhIFJlYWN0IHJlZnJlc2ggYm91bmRhcnkuXG4gKiBJZiB0aGlzIHNpZ25hdHVyZSBjaGFuZ2VzLCBpdCdzIHVuc2FmZSB0byBhY2NlcHQgdGhlIGJvdW5kYXJ5LlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIG9uZSBpbiBbTWV0cm9dKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9tZXRyby9ibG9iLzkwN2Q2YWYyMmFjNmViZTU4NTcyYmU0MThlOTI1M2E5MDY2NWVjYmQvcGFja2FnZXMvbWV0cm8vc3JjL2xpYi9wb2x5ZmlsbHMvcmVxdWlyZS5qcyNMNzk1LUw4MTYpLlxuICogQHBhcmFtIHsqfSBtb2R1bGVFeHBvcnRzIEEgV2VicGFjayBtb2R1bGUgZXhwb3J0cyBvYmplY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IEEgUmVhY3QgcmVmcmVzaCBib3VuZGFyeSBzaWduYXR1cmUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGdldFJlYWN0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKG1vZHVsZUV4cG9ydHMpIHtcbiAgdmFyIHNpZ25hdHVyZSA9IFtdO1xuICBzaWduYXR1cmUucHVzaChSZWZyZXNoLmdldEZhbWlseUJ5VHlwZShtb2R1bGVFeHBvcnRzKSk7XG5cbiAgaWYgKG1vZHVsZUV4cG9ydHMgPT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgIHJldHVybiBzaWduYXR1cmU7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgIGlmIChrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc2lnbmF0dXJlLnB1c2goa2V5KTtcbiAgICBzaWduYXR1cmUucHVzaChSZWZyZXNoLmdldEZhbWlseUJ5VHlwZShtb2R1bGVFeHBvcnRzW2tleV0pKTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRhdGEgb2JqZWN0IHRvIGJlIHJldGFpbmVkIGFjcm9zcyByZWZyZXNoZXMuXG4gKiBUaGlzIG9iamVjdCBzaG91bGQgbm90IHRyYW5zdGl2ZWx5IHJlZmVyZW5jZSBwcmV2aW91cyBleHBvcnRzLFxuICogd2hpY2ggY2FuIGZvcm0gaW5maW5pdGUgY2hhaW4gb2Ygb2JqZWN0cyBhY3Jvc3MgcmVmcmVzaGVzLCB3aGljaCBjYW4gcHJlc3N1cmUgUkFNLlxuICpcbiAqIEBwYXJhbSB7Kn0gbW9kdWxlRXhwb3J0cyBBIFdlYnBhY2sgbW9kdWxlIGV4cG9ydHMgb2JqZWN0LlxuICogQHJldHVybnMgeyp9IEEgUmVhY3QgcmVmcmVzaCBib3VuZGFyeSBzaWduYXR1cmUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGdldFdlYnBhY2tIb3REYXRhKG1vZHVsZUV4cG9ydHMpIHtcbiAgcmV0dXJuIHtcbiAgICBzaWduYXR1cmU6IGdldFJlYWN0UmVmcmVzaEJvdW5kYXJ5U2lnbmF0dXJlKG1vZHVsZUV4cG9ydHMpLFxuICAgIGlzUmVhY3RSZWZyZXNoQm91bmRhcnk6IGlzUmVhY3RSZWZyZXNoQm91bmRhcnkobW9kdWxlRXhwb3J0cyksXG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhlbHBlciB0aGF0IHBlcmZvcm1zIGEgZGVsYXllZCBSZWFjdCByZWZyZXNoLlxuICogQHJldHVybnMge2Z1bmN0aW9uKGZ1bmN0aW9uKCk6IHZvaWQpOiB2b2lkfSBBIGRlYm91bmNlZCBSZWFjdCByZWZyZXNoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVEZWJvdW5jZVVwZGF0ZSgpIHtcbiAgLyoqXG4gICAqIEEgY2FjaGVkIHNldFRpbWVvdXQgaGFuZGxlci5cbiAgICogQHR5cGUge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHZhciByZWZyZXNoVGltZW91dDtcblxuICAvKipcbiAgICogUGVyZm9ybXMgcmVhY3QgcmVmcmVzaCBvbiBhIGRlbGF5IGFuZCBjbGVhcnMgdGhlIGVycm9yIG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oKTogdm9pZH0gY2FsbGJhY2tcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiBlbnF1ZXVlVXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiByZWZyZXNoVGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlZnJlc2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZnJlc2hUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICBSZWZyZXNoLnBlcmZvcm1SZWFjdFJlZnJlc2goKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH0sIDMwKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5xdWV1ZVVwZGF0ZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYWxsIGV4cG9ydHMgYXJlIGxpa2VseSBhIFJlYWN0IGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9uIHRoZSBvbmUgaW4gW01ldHJvXShodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svbWV0cm8vYmxvYi9mZWJkYmEyMzgzMTEzYzg4Mjk2YzYxZTI4ZTRlZjZhN2Y0OTM5ZmRhL3BhY2thZ2VzL21ldHJvL3NyYy9saWIvcG9seWZpbGxzL3JlcXVpcmUuanMjTDc0OC1MNzc0KS5cbiAqIEBwYXJhbSB7Kn0gbW9kdWxlRXhwb3J0cyBBIFdlYnBhY2sgbW9kdWxlIGV4cG9ydHMgb2JqZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGV4cG9ydHMgYXJlIFJlYWN0IGNvbXBvbmVudCBsaWtlLlxuICovXG5mdW5jdGlvbiBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5KG1vZHVsZUV4cG9ydHMpIHtcbiAgaWYgKFJlZnJlc2guaXNMaWtlbHlDb21wb25lbnRUeXBlKG1vZHVsZUV4cG9ydHMpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG1vZHVsZUV4cG9ydHMgPT09IHVuZGVmaW5lZCB8fCBtb2R1bGVFeHBvcnRzID09PSBudWxsIHx8IHR5cGVvZiBtb2R1bGVFeHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGhhc0V4cG9ydHMgPSBmYWxzZTtcbiAgdmFyIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzID0gdHJ1ZTtcbiAgZm9yICh2YXIga2V5IGluIG1vZHVsZUV4cG9ydHMpIHtcbiAgICBoYXNFeHBvcnRzID0gdHJ1ZTtcblxuICAgIC8vIFRoaXMgaXMgdGhlIEVTIE1vZHVsZSBpbmRpY2F0b3IgZmxhZ1xuICAgIGlmIChrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gV2UgY2FuIChhbmQgaGF2ZSB0bykgc2FmZWx5IGV4ZWN1dGUgZ2V0dGVycyBoZXJlLFxuICAgIC8vIGFzIFdlYnBhY2sgbWFudWFsbHkgYXNzaWducyBoYXJtb255IGV4cG9ydHMgdG8gZ2V0dGVycyxcbiAgICAvLyB3aXRob3V0IGFueSBzaWRlLWVmZmVjdHMgYXR0YWNoZWQuXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrL2Jsb2IvYjkzMDQ4NjQzZmU3NGRlMmE2OTMxNzU1OTExZGExMjEyZGY1NTg5Ny9saWIvTWFpblRlbXBsYXRlLmpzI0wyODFcbiAgICB2YXIgZXhwb3J0VmFsdWUgPSBtb2R1bGVFeHBvcnRzW2tleV07XG4gICAgaWYgKCFSZWZyZXNoLmlzTGlrZWx5Q29tcG9uZW50VHlwZShleHBvcnRWYWx1ZSkpIHtcbiAgICAgIGFyZUFsbEV4cG9ydHNDb21wb25lbnRzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhhc0V4cG9ydHMgJiYgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHM7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGV4cG9ydHMgYXJlIGxpa2VseSBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcmVnaXN0ZXJzIHRoZW0uXG4gKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvbiB0aGUgb25lIGluIFtNZXRyb10oaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL21ldHJvL2Jsb2IvZmViZGJhMjM4MzExM2M4ODI5NmM2MWUyOGU0ZWY2YTdmNDkzOWZkYS9wYWNrYWdlcy9tZXRyby9zcmMvbGliL3BvbHlmaWxscy9yZXF1aXJlLmpzI0w4MTgtTDgzNSkuXG4gKiBAcGFyYW0geyp9IG1vZHVsZUV4cG9ydHMgQSBXZWJwYWNrIG1vZHVsZSBleHBvcnRzIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVJZCBBIFdlYnBhY2sgbW9kdWxlIElELlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChtb2R1bGVFeHBvcnRzLCBtb2R1bGVJZCkge1xuICBpZiAoUmVmcmVzaC5pc0xpa2VseUNvbXBvbmVudFR5cGUobW9kdWxlRXhwb3J0cykpIHtcbiAgICAvLyBSZWdpc3RlciBtb2R1bGUuZXhwb3J0cyBpZiBpdCBpcyBsaWtlbHkgYSBjb21wb25lbnRcbiAgICBSZWZyZXNoLnJlZ2lzdGVyKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlkICsgJyAlZXhwb3J0cyUnKTtcbiAgfVxuXG4gIGlmIChtb2R1bGVFeHBvcnRzID09PSB1bmRlZmluZWQgfHwgbW9kdWxlRXhwb3J0cyA9PT0gbnVsbCB8fCB0eXBlb2YgbW9kdWxlRXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciB0aGUgZXhwb3J0cy5cbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gbW9kdWxlRXhwb3J0cykge1xuICAgIC8vIFNraXAgcmVnaXN0ZXJpbmcgdGhlIEVTIE1vZHVsZSBpbmRpY2F0b3JcbiAgICBpZiAoa2V5ID09PSAnX19lc01vZHVsZScpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBleHBvcnRWYWx1ZSA9IG1vZHVsZUV4cG9ydHNba2V5XTtcbiAgICBpZiAoUmVmcmVzaC5pc0xpa2VseUNvbXBvbmVudFR5cGUoZXhwb3J0VmFsdWUpKSB7XG4gICAgICB2YXIgdHlwZUlEID0gbW9kdWxlSWQgKyAnICVleHBvcnRzJSAnICsga2V5O1xuICAgICAgUmVmcmVzaC5yZWdpc3RlcihleHBvcnRWYWx1ZSwgdHlwZUlEKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wYXJlcyBwcmV2aW91cyBhbmQgbmV4dCBtb2R1bGUgb2JqZWN0cyB0byBjaGVjayBmb3IgbXV0YXRlZCBib3VuZGFyaWVzLlxuICpcbiAqIFRoaXMgaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb24gdGhlIG9uZSBpbiBbTWV0cm9dKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9tZXRyby9ibG9iLzkwN2Q2YWYyMmFjNmViZTU4NTcyYmU0MThlOTI1M2E5MDY2NWVjYmQvcGFja2FnZXMvbWV0cm8vc3JjL2xpYi9wb2x5ZmlsbHMvcmVxdWlyZS5qcyNMNzc2LUw3OTIpLlxuICogQHBhcmFtIHsqfSBwcmV2U2lnbmF0dXJlIFRoZSBzaWduYXR1cmUgb2YgdGhlIGN1cnJlbnQgV2VicGFjayBtb2R1bGUgZXhwb3J0cyBvYmplY3QuXG4gKiBAcGFyYW0geyp9IG5leHRTaWduYXR1cmUgVGhlIHNpZ25hdHVyZSBvZiB0aGUgbmV4dCBXZWJwYWNrIG1vZHVsZSBleHBvcnRzIG9iamVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRoZSBSZWFjdCByZWZyZXNoIGJvdW5kYXJ5IHNob3VsZCBiZSBpbnZhbGlkYXRlZC5cbiAqL1xuZnVuY3Rpb24gc2hvdWxkSW52YWxpZGF0ZVJlYWN0UmVmcmVzaEJvdW5kYXJ5KHByZXZTaWduYXR1cmUsIG5leHRTaWduYXR1cmUpIHtcbiAgaWYgKHByZXZTaWduYXR1cmUubGVuZ3RoICE9PSBuZXh0U2lnbmF0dXJlLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXh0U2lnbmF0dXJlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHByZXZTaWduYXR1cmVbaV0gIT09IG5leHRTaWduYXR1cmVbaV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxudmFyIGVucXVldWVVcGRhdGUgPSBjcmVhdGVEZWJvdW5jZVVwZGF0ZSgpO1xuZnVuY3Rpb24gZXhlY3V0ZVJ1bnRpbWUobW9kdWxlRXhwb3J0cywgbW9kdWxlSWQsIHdlYnBhY2tIb3QsIHJlZnJlc2hPdmVybGF5LCBpc1Rlc3QpIHtcbiAgcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoKG1vZHVsZUV4cG9ydHMsIG1vZHVsZUlkKTtcblxuICBpZiAod2VicGFja0hvdCkge1xuICAgIHZhciBpc0hvdFVwZGF0ZSA9ICEhd2VicGFja0hvdC5kYXRhO1xuICAgIHZhciBwcmV2RGF0YTtcbiAgICBpZiAoaXNIb3RVcGRhdGUpIHtcbiAgICAgIHByZXZEYXRhID0gd2VicGFja0hvdC5kYXRhLnByZXZEYXRhO1xuICAgIH1cblxuICAgIGlmIChpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5KG1vZHVsZUV4cG9ydHMpKSB7XG4gICAgICB3ZWJwYWNrSG90LmRpc3Bvc2UoXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIHRvIHBlcmZvcm1zIGEgZnVsbCByZWZyZXNoIGlmIFJlYWN0IGhhcyB1bnJlY292ZXJhYmxlIGVycm9ycyxcbiAgICAgICAgICogYW5kIGFsc28gY2FjaGVzIHRoZSB0by1iZS1kaXNwb3NlZCBtb2R1bGUuXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gZGF0YSBBIGhvdCBtb2R1bGUgZGF0YSBvYmplY3QgZnJvbSBXZWJwYWNrIEhNUi5cbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBob3REaXNwb3NlQ2FsbGJhY2soZGF0YSkge1xuICAgICAgICAgIC8vIFdlIGhhdmUgdG8gbXV0YXRlIHRoZSBkYXRhIG9iamVjdCB0byBnZXQgZGF0YSByZWdpc3RlcmVkIGFuZCBjYWNoZWRcbiAgICAgICAgICBkYXRhLnByZXZEYXRhID0gZ2V0V2VicGFja0hvdERhdGEobW9kdWxlRXhwb3J0cyk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB3ZWJwYWNrSG90LmFjY2VwdChcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGVycm9yIGhhbmRsZXIgdG8gYWxsb3cgc2VsZi1yZWNvdmVyaW5nIGJlaGF2aW91cnMuXG4gICAgICAgICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIEFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBldmFsdWF0aW9uIG9mIGEgbW9kdWxlLlxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhvdEVycm9ySGFuZGxlcihlcnJvcikge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVmcmVzaE92ZXJsYXkgIT09ICd1bmRlZmluZWQnICYmIHJlZnJlc2hPdmVybGF5KSB7XG4gICAgICAgICAgICByZWZyZXNoT3ZlcmxheS5oYW5kbGVSdW50aW1lRXJyb3IoZXJyb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0eXBlb2YgaXNUZXN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc1Rlc3QpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cub25Ib3RBY2NlcHRFcnJvcikge1xuICAgICAgICAgICAgICB3aW5kb3cub25Ib3RBY2NlcHRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdLmhvdC5hY2NlcHQoaG90RXJyb3JIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKGlzSG90VXBkYXRlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2RGF0YSAmJlxuICAgICAgICAgIHByZXZEYXRhLmlzUmVhY3RSZWZyZXNoQm91bmRhcnkgJiZcbiAgICAgICAgICBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnkoXG4gICAgICAgICAgICBwcmV2RGF0YS5zaWduYXR1cmUsXG4gICAgICAgICAgICBnZXRSZWFjdFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShtb2R1bGVFeHBvcnRzKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgd2VicGFja0hvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZW5xdWV1ZVVwZGF0ZShcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQSBmdW5jdGlvbiB0byBkaXNtaXNzIHRoZSBlcnJvciBvdmVybGF5IGFmdGVyIHBlcmZvcm1pbmcgUmVhY3QgcmVmcmVzaC5cbiAgICAgICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWZyZXNoT3ZlcmxheSAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVmcmVzaE92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICByZWZyZXNoT3ZlcmxheS5jbGVhclJ1bnRpbWVFcnJvcnMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzSG90VXBkYXRlICYmIHR5cGVvZiBwcmV2RGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2VicGFja0hvdC5pbnZhbGlkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGVucXVldWVVcGRhdGU6IGVucXVldWVVcGRhdGUsXG4gIGV4ZWN1dGVSdW50aW1lOiBleGVjdXRlUnVudGltZSxcbiAgZ2V0TW9kdWxlRXhwb3J0czogZ2V0TW9kdWxlRXhwb3J0cyxcbiAgaXNSZWFjdFJlZnJlc2hCb3VuZGFyeTogaXNSZWFjdFJlZnJlc2hCb3VuZGFyeSxcbiAgcmVnaXN0ZXJFeHBvcnRzRm9yUmVhY3RSZWZyZXNoOiByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gsXG59KTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBMYXRpbiBVbmljb2RlIGxldHRlcnMgKGV4Y2x1ZGluZyBtYXRoZW1hdGljYWwgb3BlcmF0b3JzKS4gKi9cbnZhciByZUxhdGluID0gL1tcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx4ZmZcXHUwMTAwLVxcdTAxN2ZdL2c7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZjAnLFxuICAgIHJzRGluZ2JhdFJhbmdlID0gJ1xcXFx1MjcwMC1cXFxcdTI3YmYnLFxuICAgIHJzTG93ZXJSYW5nZSA9ICdhLXpcXFxceGRmLVxcXFx4ZjZcXFxceGY4LVxcXFx4ZmYnLFxuICAgIHJzTWF0aE9wUmFuZ2UgPSAnXFxcXHhhY1xcXFx4YjFcXFxceGQ3XFxcXHhmNycsXG4gICAgcnNOb25DaGFyUmFuZ2UgPSAnXFxcXHgwMC1cXFxceDJmXFxcXHgzYS1cXFxceDQwXFxcXHg1Yi1cXFxceDYwXFxcXHg3Yi1cXFxceGJmJyxcbiAgICByc1B1bmN0dWF0aW9uUmFuZ2UgPSAnXFxcXHUyMDAwLVxcXFx1MjA2ZicsXG4gICAgcnNTcGFjZVJhbmdlID0gJyBcXFxcdFxcXFx4MGJcXFxcZlxcXFx4YTBcXFxcdWZlZmZcXFxcblxcXFxyXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUxNjgwXFxcXHUxODBlXFxcXHUyMDAwXFxcXHUyMDAxXFxcXHUyMDAyXFxcXHUyMDAzXFxcXHUyMDA0XFxcXHUyMDA1XFxcXHUyMDA2XFxcXHUyMDA3XFxcXHUyMDA4XFxcXHUyMDA5XFxcXHUyMDBhXFxcXHUyMDJmXFxcXHUyMDVmXFxcXHUzMDAwJyxcbiAgICByc1VwcGVyUmFuZ2UgPSAnQS1aXFxcXHhjMC1cXFxceGQ2XFxcXHhkOC1cXFxceGRlJyxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZicsXG4gICAgcnNCcmVha1JhbmdlID0gcnNNYXRoT3BSYW5nZSArIHJzTm9uQ2hhclJhbmdlICsgcnNQdW5jdHVhdGlvblJhbmdlICsgcnNTcGFjZVJhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCIsXG4gICAgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQnJlYWsgPSAnWycgKyByc0JyZWFrUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9NYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSArICddJyxcbiAgICByc0RpZ2l0cyA9ICdcXFxcZCsnLFxuICAgIHJzRGluZ2JhdCA9ICdbJyArIHJzRGluZ2JhdFJhbmdlICsgJ10nLFxuICAgIHJzTG93ZXIgPSAnWycgKyByc0xvd2VyUmFuZ2UgKyAnXScsXG4gICAgcnNNaXNjID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyByc0JyZWFrUmFuZ2UgKyByc0RpZ2l0cyArIHJzRGluZ2JhdFJhbmdlICsgcnNMb3dlclJhbmdlICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1VwcGVyID0gJ1snICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJzTG93ZXJNaXNjID0gJyg/OicgKyByc0xvd2VyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzVXBwZXJNaXNjID0gJyg/OicgKyByc1VwcGVyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzT3B0TG93ZXJDb250ciA9ICcoPzonICsgcnNBcG9zICsgJyg/OmR8bGx8bXxyZXxzfHR8dmUpKT8nLFxuICAgIHJzT3B0VXBwZXJDb250ciA9ICcoPzonICsgcnNBcG9zICsgJyg/OkR8TEx8TXxSRXxTfFR8VkUpKT8nLFxuICAgIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzRW1vamkgPSAnKD86JyArIFtyc0RpbmdiYXQsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzU2VxLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBhcG9zdHJvcGhlcy4gKi9cbnZhciByZUFwb3MgPSBSZWdFeHAocnNBcG9zLCAnZycpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzKSBhbmRcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3MgZm9yIHN5bWJvbHNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrc19mb3JfU3ltYm9scykuXG4gKi9cbnZhciByZUNvbWJvTWFyayA9IFJlZ0V4cChyc0NvbWJvLCAnZycpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlVW5pY29kZSA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBjb21wbGV4IG9yIGNvbXBvdW5kIHdvcmRzLiAqL1xudmFyIHJlVW5pY29kZVdvcmQgPSBSZWdFeHAoW1xuICByc1VwcGVyICsgJz8nICsgcnNMb3dlciArICcrJyArIHJzT3B0TG93ZXJDb250ciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc1VwcGVyTWlzYyArICcrJyArIHJzT3B0VXBwZXJDb250ciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIgKyByc0xvd2VyTWlzYywgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyTWlzYyArICcrJyArIHJzT3B0TG93ZXJDb250cixcbiAgcnNVcHBlciArICcrJyArIHJzT3B0VXBwZXJDb250cixcbiAgcnNEaWdpdHMsXG4gIHJzRW1vamlcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9NYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezIsfVthLXpdfFswLTldW2EtekEtWl18W2EtekEtWl1bMC05XXxbXmEtekEtWjAtOSBdLztcblxuLyoqIFVzZWQgdG8gbWFwIExhdGluIFVuaWNvZGUgbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLiAqL1xudmFyIGRlYnVycmVkTGV0dGVycyA9IHtcbiAgLy8gTGF0aW4tMSBTdXBwbGVtZW50IGJsb2NrLlxuICAnXFx4YzAnOiAnQScsICAnXFx4YzEnOiAnQScsICdcXHhjMic6ICdBJywgJ1xceGMzJzogJ0EnLCAnXFx4YzQnOiAnQScsICdcXHhjNSc6ICdBJyxcbiAgJ1xceGUwJzogJ2EnLCAgJ1xceGUxJzogJ2EnLCAnXFx4ZTInOiAnYScsICdcXHhlMyc6ICdhJywgJ1xceGU0JzogJ2EnLCAnXFx4ZTUnOiAnYScsXG4gICdcXHhjNyc6ICdDJywgICdcXHhlNyc6ICdjJyxcbiAgJ1xceGQwJzogJ0QnLCAgJ1xceGYwJzogJ2QnLFxuICAnXFx4YzgnOiAnRScsICAnXFx4YzknOiAnRScsICdcXHhjYSc6ICdFJywgJ1xceGNiJzogJ0UnLFxuICAnXFx4ZTgnOiAnZScsICAnXFx4ZTknOiAnZScsICdcXHhlYSc6ICdlJywgJ1xceGViJzogJ2UnLFxuICAnXFx4Y2MnOiAnSScsICAnXFx4Y2QnOiAnSScsICdcXHhjZSc6ICdJJywgJ1xceGNmJzogJ0knLFxuICAnXFx4ZWMnOiAnaScsICAnXFx4ZWQnOiAnaScsICdcXHhlZSc6ICdpJywgJ1xceGVmJzogJ2knLFxuICAnXFx4ZDEnOiAnTicsICAnXFx4ZjEnOiAnbicsXG4gICdcXHhkMic6ICdPJywgICdcXHhkMyc6ICdPJywgJ1xceGQ0JzogJ08nLCAnXFx4ZDUnOiAnTycsICdcXHhkNic6ICdPJywgJ1xceGQ4JzogJ08nLFxuICAnXFx4ZjInOiAnbycsICAnXFx4ZjMnOiAnbycsICdcXHhmNCc6ICdvJywgJ1xceGY1JzogJ28nLCAnXFx4ZjYnOiAnbycsICdcXHhmOCc6ICdvJyxcbiAgJ1xceGQ5JzogJ1UnLCAgJ1xceGRhJzogJ1UnLCAnXFx4ZGInOiAnVScsICdcXHhkYyc6ICdVJyxcbiAgJ1xceGY5JzogJ3UnLCAgJ1xceGZhJzogJ3UnLCAnXFx4ZmInOiAndScsICdcXHhmYyc6ICd1JyxcbiAgJ1xceGRkJzogJ1knLCAgJ1xceGZkJzogJ3knLCAnXFx4ZmYnOiAneScsXG4gICdcXHhjNic6ICdBZScsICdcXHhlNic6ICdhZScsXG4gICdcXHhkZSc6ICdUaCcsICdcXHhmZSc6ICd0aCcsXG4gICdcXHhkZic6ICdzcycsXG4gIC8vIExhdGluIEV4dGVuZGVkLUEgYmxvY2suXG4gICdcXHUwMTAwJzogJ0EnLCAgJ1xcdTAxMDInOiAnQScsICdcXHUwMTA0JzogJ0EnLFxuICAnXFx1MDEwMSc6ICdhJywgICdcXHUwMTAzJzogJ2EnLCAnXFx1MDEwNSc6ICdhJyxcbiAgJ1xcdTAxMDYnOiAnQycsICAnXFx1MDEwOCc6ICdDJywgJ1xcdTAxMGEnOiAnQycsICdcXHUwMTBjJzogJ0MnLFxuICAnXFx1MDEwNyc6ICdjJywgICdcXHUwMTA5JzogJ2MnLCAnXFx1MDEwYic6ICdjJywgJ1xcdTAxMGQnOiAnYycsXG4gICdcXHUwMTBlJzogJ0QnLCAgJ1xcdTAxMTAnOiAnRCcsICdcXHUwMTBmJzogJ2QnLCAnXFx1MDExMSc6ICdkJyxcbiAgJ1xcdTAxMTInOiAnRScsICAnXFx1MDExNCc6ICdFJywgJ1xcdTAxMTYnOiAnRScsICdcXHUwMTE4JzogJ0UnLCAnXFx1MDExYSc6ICdFJyxcbiAgJ1xcdTAxMTMnOiAnZScsICAnXFx1MDExNSc6ICdlJywgJ1xcdTAxMTcnOiAnZScsICdcXHUwMTE5JzogJ2UnLCAnXFx1MDExYic6ICdlJyxcbiAgJ1xcdTAxMWMnOiAnRycsICAnXFx1MDExZSc6ICdHJywgJ1xcdTAxMjAnOiAnRycsICdcXHUwMTIyJzogJ0cnLFxuICAnXFx1MDExZCc6ICdnJywgICdcXHUwMTFmJzogJ2cnLCAnXFx1MDEyMSc6ICdnJywgJ1xcdTAxMjMnOiAnZycsXG4gICdcXHUwMTI0JzogJ0gnLCAgJ1xcdTAxMjYnOiAnSCcsICdcXHUwMTI1JzogJ2gnLCAnXFx1MDEyNyc6ICdoJyxcbiAgJ1xcdTAxMjgnOiAnSScsICAnXFx1MDEyYSc6ICdJJywgJ1xcdTAxMmMnOiAnSScsICdcXHUwMTJlJzogJ0knLCAnXFx1MDEzMCc6ICdJJyxcbiAgJ1xcdTAxMjknOiAnaScsICAnXFx1MDEyYic6ICdpJywgJ1xcdTAxMmQnOiAnaScsICdcXHUwMTJmJzogJ2knLCAnXFx1MDEzMSc6ICdpJyxcbiAgJ1xcdTAxMzQnOiAnSicsICAnXFx1MDEzNSc6ICdqJyxcbiAgJ1xcdTAxMzYnOiAnSycsICAnXFx1MDEzNyc6ICdrJywgJ1xcdTAxMzgnOiAnaycsXG4gICdcXHUwMTM5JzogJ0wnLCAgJ1xcdTAxM2InOiAnTCcsICdcXHUwMTNkJzogJ0wnLCAnXFx1MDEzZic6ICdMJywgJ1xcdTAxNDEnOiAnTCcsXG4gICdcXHUwMTNhJzogJ2wnLCAgJ1xcdTAxM2MnOiAnbCcsICdcXHUwMTNlJzogJ2wnLCAnXFx1MDE0MCc6ICdsJywgJ1xcdTAxNDInOiAnbCcsXG4gICdcXHUwMTQzJzogJ04nLCAgJ1xcdTAxNDUnOiAnTicsICdcXHUwMTQ3JzogJ04nLCAnXFx1MDE0YSc6ICdOJyxcbiAgJ1xcdTAxNDQnOiAnbicsICAnXFx1MDE0Nic6ICduJywgJ1xcdTAxNDgnOiAnbicsICdcXHUwMTRiJzogJ24nLFxuICAnXFx1MDE0Yyc6ICdPJywgICdcXHUwMTRlJzogJ08nLCAnXFx1MDE1MCc6ICdPJyxcbiAgJ1xcdTAxNGQnOiAnbycsICAnXFx1MDE0Zic6ICdvJywgJ1xcdTAxNTEnOiAnbycsXG4gICdcXHUwMTU0JzogJ1InLCAgJ1xcdTAxNTYnOiAnUicsICdcXHUwMTU4JzogJ1InLFxuICAnXFx1MDE1NSc6ICdyJywgICdcXHUwMTU3JzogJ3InLCAnXFx1MDE1OSc6ICdyJyxcbiAgJ1xcdTAxNWEnOiAnUycsICAnXFx1MDE1Yyc6ICdTJywgJ1xcdTAxNWUnOiAnUycsICdcXHUwMTYwJzogJ1MnLFxuICAnXFx1MDE1Yic6ICdzJywgICdcXHUwMTVkJzogJ3MnLCAnXFx1MDE1Zic6ICdzJywgJ1xcdTAxNjEnOiAncycsXG4gICdcXHUwMTYyJzogJ1QnLCAgJ1xcdTAxNjQnOiAnVCcsICdcXHUwMTY2JzogJ1QnLFxuICAnXFx1MDE2Myc6ICd0JywgICdcXHUwMTY1JzogJ3QnLCAnXFx1MDE2Nyc6ICd0JyxcbiAgJ1xcdTAxNjgnOiAnVScsICAnXFx1MDE2YSc6ICdVJywgJ1xcdTAxNmMnOiAnVScsICdcXHUwMTZlJzogJ1UnLCAnXFx1MDE3MCc6ICdVJywgJ1xcdTAxNzInOiAnVScsXG4gICdcXHUwMTY5JzogJ3UnLCAgJ1xcdTAxNmInOiAndScsICdcXHUwMTZkJzogJ3UnLCAnXFx1MDE2Zic6ICd1JywgJ1xcdTAxNzEnOiAndScsICdcXHUwMTczJzogJ3UnLFxuICAnXFx1MDE3NCc6ICdXJywgICdcXHUwMTc1JzogJ3cnLFxuICAnXFx1MDE3Nic6ICdZJywgICdcXHUwMTc3JzogJ3knLCAnXFx1MDE3OCc6ICdZJyxcbiAgJ1xcdTAxNzknOiAnWicsICAnXFx1MDE3Yic6ICdaJywgJ1xcdTAxN2QnOiAnWicsXG4gICdcXHUwMTdhJzogJ3onLCAgJ1xcdTAxN2MnOiAneicsICdcXHUwMTdlJzogJ3onLFxuICAnXFx1MDEzMic6ICdJSicsICdcXHUwMTMzJzogJ2lqJyxcbiAgJ1xcdTAxNTInOiAnT2UnLCAnXFx1MDE1Myc6ICdvZScsXG4gICdcXHUwMTQ5JzogXCInblwiLCAnXFx1MDE3Zic6ICdzcydcbn07XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBBU0NJSSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXNjaWlUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKTtcbn1cblxuLyoqXG4gKiBTcGxpdHMgYW4gQVNDSUkgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiBhc2NpaVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlQXNjaWlXb3JkKSB8fCBbXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eU9mYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlPZihvYmplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVidXJyYCB0byBjb252ZXJ0IExhdGluLTEgU3VwcGxlbWVudCBhbmQgTGF0aW4gRXh0ZW5kZWQtQVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV0dGVyIFRoZSBtYXRjaGVkIGxldHRlciB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBsZXR0ZXIuXG4gKi9cbnZhciBkZWJ1cnJMZXR0ZXIgPSBiYXNlUHJvcGVydHlPZihkZWJ1cnJlZExldHRlcnMpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBhIHdvcmQgY29tcG9zZWQgb2YgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHdvcmQgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGVXb3JkLnRlc3Qoc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgID8gdW5pY29kZVRvQXJyYXkoc3RyaW5nKVxuICAgIDogYXNjaWlUb0FycmF5KHN0cmluZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG4vKipcbiAqIFNwbGl0cyBhIFVuaWNvZGUgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiB1bmljb2RlV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlV29yZCkgfHwgW107XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDYXN0cyBgYXJyYXlgIHRvIGEgc2xpY2UgaWYgaXQncyBuZWVkZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBzbGljZS5cbiAqL1xuZnVuY3Rpb24gY2FzdFNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kO1xuICByZXR1cm4gKCFzdGFydCAmJiBlbmQgPj0gbGVuZ3RoKSA/IGFycmF5IDogYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhc2VGaXJzdChtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHN0clN5bWJvbHMgPSBoYXNVbmljb2RlKHN0cmluZylcbiAgICAgID8gc3RyaW5nVG9BcnJheShzdHJpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBjaHIgPSBzdHJTeW1ib2xzXG4gICAgICA/IHN0clN5bWJvbHNbMF1cbiAgICAgIDogc3RyaW5nLmNoYXJBdCgwKTtcblxuICAgIHZhciB0cmFpbGluZyA9IHN0clN5bWJvbHNcbiAgICAgID8gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDEpLmpvaW4oJycpXG4gICAgICA6IHN0cmluZy5zbGljZSgxKTtcblxuICAgIHJldHVybiBjaHJbbWV0aG9kTmFtZV0oKSArIHRyYWlsaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmNhbWVsQ2FzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjb21iaW5lIGVhY2ggd29yZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbXBvdW5kZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvdW5kZXIoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHJldHVybiBhcnJheVJlZHVjZSh3b3JkcyhkZWJ1cnIoc3RyaW5nKS5yZXBsYWNlKHJlQXBvcywgJycpKSwgY2FsbGJhY2ssICcnKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIFtjYW1lbCBjYXNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DYW1lbENhc2UpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYW1lbCBjYXNlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FtZWxDYXNlKCdGb28gQmFyJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICpcbiAqIF8uY2FtZWxDYXNlKCctLWZvby1iYXItLScpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqXG4gKiBfLmNhbWVsQ2FzZSgnX19GT09fQkFSX18nKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKi9cbnZhciBjYW1lbENhc2UgPSBjcmVhdGVDb21wb3VuZGVyKGZ1bmN0aW9uKHJlc3VsdCwgd29yZCwgaW5kZXgpIHtcbiAgd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHJlc3VsdCArIChpbmRleCA/IGNhcGl0YWxpemUod29yZCkgOiB3b3JkKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AgdG8gdXBwZXIgY2FzZSBhbmQgdGhlIHJlbWFpbmluZ1xuICogdG8gbG93ZXIgY2FzZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjYXBpdGFsaXplLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FwaXRhbGl6ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhcGl0YWxpemUoJ0ZSRUQnKTtcbiAqIC8vID0+ICdGcmVkJ1xuICovXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICByZXR1cm4gdXBwZXJGaXJzdCh0b1N0cmluZyhzdHJpbmcpLnRvTG93ZXJDYXNlKCkpO1xufVxuXG4vKipcbiAqIERlYnVycnMgYHN0cmluZ2AgYnkgY29udmVydGluZ1xuICogW0xhdGluLTEgU3VwcGxlbWVudF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW4tMV9TdXBwbGVtZW50XyhVbmljb2RlX2Jsb2NrKSNDaGFyYWN0ZXJfdGFibGUpXG4gKiBhbmQgW0xhdGluIEV4dGVuZGVkLUFdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluX0V4dGVuZGVkLUEpXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMgYW5kIHJlbW92aW5nXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWJ1cnIoJ2TDqWrDoCB2dScpO1xuICogLy8gPT4gJ2RlamEgdnUnXG4gKi9cbmZ1bmN0aW9uIGRlYnVycihzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmcucmVwbGFjZShyZUxhdGluLCBkZWJ1cnJMZXR0ZXIpLnJlcGxhY2UocmVDb21ib01hcmssICcnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbi8qKlxuICogU3BsaXRzIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd9IFtwYXR0ZXJuXSBUaGUgcGF0dGVybiB0byBtYXRjaCB3b3Jkcy5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycsIC9bXiwgXSsvZyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybiwgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcGF0dGVybiA9IGd1YXJkID8gdW5kZWZpbmVkIDogcGF0dGVybjtcblxuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsQ2FzZTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2dW5kZWZpbmVkXG4gKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcbnZhciBSRUFDVF9DQUNIRV9UWVBFID0gMHhlYWU0O1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBSRUFDVF9GUkFHTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbiAgUkVBQ1RfQ0FDSEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY2FjaGUnKTtcbn1cblxudmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDsgLy8gV2UgbmV2ZXIgcmVtb3ZlIHRoZXNlIGFzc29jaWF0aW9ucy5cbi8vIEl0J3MgT0sgdG8gcmVmZXJlbmNlIGZhbWlsaWVzLCBidXQgdXNlIFdlYWtNYXAvU2V0IGZvciB0eXBlcy5cblxudmFyIGFsbEZhbWlsaWVzQnlJRCA9IG5ldyBNYXAoKTtcbnZhciBhbGxGYW1pbGllc0J5VHlwZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbnZhciBhbGxTaWduYXR1cmVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpOyAvLyBUaGlzIFdlYWtNYXAgaXMgcmVhZCBieSBSZWFjdCwgc28gd2Ugb25seSBwdXQgZmFtaWxpZXNcbi8vIHRoYXQgaGF2ZSBhY3R1YWxseSBiZWVuIGVkaXRlZCBoZXJlLiBUaGlzIGtlZXBzIGNoZWNrcyBmYXN0LlxuLy8gJEZsb3dJc3N1ZVxuXG52YXIgdXBkYXRlZEZhbWlsaWVzQnlUeXBlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpOyAvLyBUaGlzIGlzIGNsZWFyZWQgb24gZXZlcnkgcGVyZm9ybVJlYWN0UmVmcmVzaCgpIGNhbGwuXG4vLyBJdCBpcyBhbiBhcnJheSBvZiBbRmFtaWx5LCBOZXh0VHlwZV0gdHVwbGVzLlxuXG52YXIgcGVuZGluZ1VwZGF0ZXMgPSBbXTsgLy8gVGhpcyBpcyBpbmplY3RlZCBieSB0aGUgcmVuZGVyZXIgdmlhIERldlRvb2xzIGdsb2JhbCBob29rLlxuXG52YXIgaGVscGVyc0J5UmVuZGVyZXJJRCA9IG5ldyBNYXAoKTtcbnZhciBoZWxwZXJzQnlSb290ID0gbmV3IE1hcCgpOyAvLyBXZSBrZWVwIHRyYWNrIG9mIG1vdW50ZWQgcm9vdHMgc28gd2UgY2FuIHNjaGVkdWxlIHVwZGF0ZXMuXG5cbnZhciBtb3VudGVkUm9vdHMgPSBuZXcgU2V0KCk7IC8vIElmIGEgcm9vdCBjYXB0dXJlcyBhbiBlcnJvciwgd2UgcmVtZW1iZXIgaXQgc28gd2UgY2FuIHJldHJ5IG9uIGVkaXQuXG5cbnZhciBmYWlsZWRSb290cyA9IG5ldyBTZXQoKTsgLy8gSW4gZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBXZWFrTWFwLCB3ZSBhbHNvIHJlbWVtYmVyIHRoZSBsYXN0IGVsZW1lbnQgZm9yIGV2ZXJ5IHJvb3QuXG4vLyBJdCBuZWVkcyB0byBiZSB3ZWFrIGJlY2F1c2Ugd2UgZG8gdGhpcyBldmVuIGZvciByb290cyB0aGF0IGZhaWxlZCB0byBtb3VudC5cbi8vIElmIHRoZXJlIGlzIG5vIFdlYWtNYXAsIHdlIHdvbid0IGF0dGVtcHQgdG8gZG8gcmV0cnlpbmcuXG4vLyAkRmxvd0lzc3VlXG5cbnZhciByb290RWxlbWVudHMgPSAvLyAkRmxvd0lzc3VlXG50eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBXZWFrTWFwKCkgOiBudWxsO1xudmFyIGlzUGVyZm9ybWluZ1JlZnJlc2ggPSBmYWxzZTtcblxuZnVuY3Rpb24gY29tcHV0ZUZ1bGxLZXkoc2lnbmF0dXJlKSB7XG4gIGlmIChzaWduYXR1cmUuZnVsbEtleSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzaWduYXR1cmUuZnVsbEtleTtcbiAgfVxuXG4gIHZhciBmdWxsS2V5ID0gc2lnbmF0dXJlLm93bktleTtcbiAgdmFyIGhvb2tzO1xuXG4gIHRyeSB7XG4gICAgaG9va3MgPSBzaWduYXR1cmUuZ2V0Q3VzdG9tSG9va3MoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIGFuIGVkZ2UgY2FzZSwgZS5nLiBpZiBleHByZXNzaW9uIGxpa2UgRm9vLnVzZVNvbWV0aGluZ1xuICAgIC8vIGRlcGVuZHMgb24gRm9vIHdoaWNoIGlzIGxhemlseSBpbml0aWFsaXplZCBkdXJpbmcgcmVuZGVyaW5nLlxuICAgIC8vIEluIHRoYXQgY2FzZSBqdXN0IGFzc3VtZSB3ZSdsbCBoYXZlIHRvIHJlbW91bnQuXG4gICAgc2lnbmF0dXJlLmZvcmNlUmVzZXQgPSB0cnVlO1xuICAgIHNpZ25hdHVyZS5mdWxsS2V5ID0gZnVsbEtleTtcbiAgICByZXR1cm4gZnVsbEtleTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaG9vayA9IGhvb2tzW2ldO1xuXG4gICAgaWYgKHR5cGVvZiBob29rICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBTb21ldGhpbmcncyB3cm9uZy4gQXNzdW1lIHdlIG5lZWQgdG8gcmVtb3VudC5cbiAgICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcbiAgICAgIHNpZ25hdHVyZS5mdWxsS2V5ID0gZnVsbEtleTtcbiAgICAgIHJldHVybiBmdWxsS2V5O1xuICAgIH1cblxuICAgIHZhciBuZXN0ZWRIb29rU2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQoaG9vayk7XG5cbiAgICBpZiAobmVzdGVkSG9va1NpZ25hdHVyZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBObyBzaWduYXR1cmUgbWVhbnMgSG9vayB3YXNuJ3QgaW4gdGhlIHNvdXJjZSBjb2RlLCBlLmcuIGluIGEgbGlicmFyeS5cbiAgICAgIC8vIFdlJ2xsIHNraXAgaXQgYmVjYXVzZSB3ZSBjYW4gYXNzdW1lIGl0IHdvbid0IGNoYW5nZSBkdXJpbmcgdGhpcyBzZXNzaW9uLlxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIG5lc3RlZEhvb2tLZXkgPSBjb21wdXRlRnVsbEtleShuZXN0ZWRIb29rU2lnbmF0dXJlKTtcblxuICAgIGlmIChuZXN0ZWRIb29rU2lnbmF0dXJlLmZvcmNlUmVzZXQpIHtcbiAgICAgIHNpZ25hdHVyZS5mb3JjZVJlc2V0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdWxsS2V5ICs9ICdcXG4tLS1cXG4nICsgbmVzdGVkSG9va0tleTtcbiAgfVxuXG4gIHNpZ25hdHVyZS5mdWxsS2V5ID0gZnVsbEtleTtcbiAgcmV0dXJuIGZ1bGxLZXk7XG59XG5cbmZ1bmN0aW9uIGhhdmVFcXVhbFNpZ25hdHVyZXMocHJldlR5cGUsIG5leHRUeXBlKSB7XG4gIHZhciBwcmV2U2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQocHJldlR5cGUpO1xuICB2YXIgbmV4dFNpZ25hdHVyZSA9IGFsbFNpZ25hdHVyZXNCeVR5cGUuZ2V0KG5leHRUeXBlKTtcblxuICBpZiAocHJldlNpZ25hdHVyZSA9PT0gdW5kZWZpbmVkICYmIG5leHRTaWduYXR1cmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHByZXZTaWduYXR1cmUgPT09IHVuZGVmaW5lZCB8fCBuZXh0U2lnbmF0dXJlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoY29tcHV0ZUZ1bGxLZXkocHJldlNpZ25hdHVyZSkgIT09IGNvbXB1dGVGdWxsS2V5KG5leHRTaWduYXR1cmUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG5leHRTaWduYXR1cmUuZm9yY2VSZXNldCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1JlYWN0Q2xhc3ModHlwZSkge1xuICByZXR1cm4gdHlwZS5wcm90b3R5cGUgJiYgdHlwZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gY2FuUHJlc2VydmVTdGF0ZUJldHdlZW4ocHJldlR5cGUsIG5leHRUeXBlKSB7XG4gIGlmIChpc1JlYWN0Q2xhc3MocHJldlR5cGUpIHx8IGlzUmVhY3RDbGFzcyhuZXh0VHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaGF2ZUVxdWFsU2lnbmF0dXJlcyhwcmV2VHlwZSwgbmV4dFR5cGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVGYW1pbHkodHlwZSkge1xuICAvLyBPbmx5IGNoZWNrIHVwZGF0ZWQgdHlwZXMgdG8ga2VlcCBsb29rdXBzIGZhc3QuXG4gIHJldHVybiB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuZ2V0KHR5cGUpO1xufSAvLyBJZiB3ZSBkaWRuJ3QgY2FyZSBhYm91dCBJRTExLCB3ZSBjb3VsZCB1c2UgbmV3IE1hcC9TZXQoaXRlcmFibGUpLlxuXG5cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCkge1xuICB2YXIgY2xvbmUgPSBuZXcgTWFwKCk7XG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgY2xvbmUuc2V0KGtleSwgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiBjbG9uZVNldChzZXQpIHtcbiAgdmFyIGNsb25lID0gbmV3IFNldCgpO1xuICBzZXQuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBjbG9uZS5hZGQodmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGNsb25lO1xufSAvLyBUaGlzIGlzIGEgc2FmZXR5IG1lY2hhbmlzbSB0byBwcm90ZWN0IGFnYWluc3Qgcm9ndWUgZ2V0dGVycyBhbmQgUHJveGllcy5cblxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG9iamVjdFtwcm9wZXJ0eV07XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIEludGVudGlvbmFsbHkgaWdub3JlLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGVyZm9ybVJlYWN0UmVmcmVzaCgpIHtcblxuICBpZiAocGVuZGluZ1VwZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoaXNQZXJmb3JtaW5nUmVmcmVzaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IHRydWU7XG5cbiAgdHJ5IHtcbiAgICB2YXIgc3RhbGVGYW1pbGllcyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgdXBkYXRlZEZhbWlsaWVzID0gbmV3IFNldCgpO1xuICAgIHZhciB1cGRhdGVzID0gcGVuZGluZ1VwZGF0ZXM7XG4gICAgcGVuZGluZ1VwZGF0ZXMgPSBbXTtcbiAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBmYW1pbHkgPSBfcmVmWzBdLFxuICAgICAgICAgIG5leHRUeXBlID0gX3JlZlsxXTtcbiAgICAgIC8vIE5vdyB0aGF0IHdlIGdvdCBhIHJlYWwgZWRpdCwgd2UgY2FuIGNyZWF0ZSBhc3NvY2lhdGlvbnNcbiAgICAgIC8vIHRoYXQgd2lsbCBiZSByZWFkIGJ5IHRoZSBSZWFjdCByZWNvbmNpbGVyLlxuICAgICAgdmFyIHByZXZUeXBlID0gZmFtaWx5LmN1cnJlbnQ7XG4gICAgICB1cGRhdGVkRmFtaWxpZXNCeVR5cGUuc2V0KHByZXZUeXBlLCBmYW1pbHkpO1xuICAgICAgdXBkYXRlZEZhbWlsaWVzQnlUeXBlLnNldChuZXh0VHlwZSwgZmFtaWx5KTtcbiAgICAgIGZhbWlseS5jdXJyZW50ID0gbmV4dFR5cGU7IC8vIERldGVybWluZSB3aGV0aGVyIHRoaXMgc2hvdWxkIGJlIGEgcmUtcmVuZGVyIG9yIGEgcmUtbW91bnQuXG5cbiAgICAgIGlmIChjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbihwcmV2VHlwZSwgbmV4dFR5cGUpKSB7XG4gICAgICAgIHVwZGF0ZWRGYW1pbGllcy5hZGQoZmFtaWx5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YWxlRmFtaWxpZXMuYWRkKGZhbWlseSk7XG4gICAgICB9XG4gICAgfSk7IC8vIFRPRE86IHJlbmFtZSB0aGVzZSBmaWVsZHMgdG8gc29tZXRoaW5nIG1vcmUgbWVhbmluZ2Z1bC5cblxuICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICB1cGRhdGVkRmFtaWxpZXM6IHVwZGF0ZWRGYW1pbGllcyxcbiAgICAgIC8vIEZhbWlsaWVzIHRoYXQgd2lsbCByZS1yZW5kZXIgcHJlc2VydmluZyBzdGF0ZVxuICAgICAgc3RhbGVGYW1pbGllczogc3RhbGVGYW1pbGllcyAvLyBGYW1pbGllcyB0aGF0IHdpbGwgYmUgcmVtb3VudGVkXG5cbiAgICB9O1xuICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuZm9yRWFjaChmdW5jdGlvbiAoaGVscGVycykge1xuICAgICAgLy8gRXZlbiBpZiB0aGVyZSBhcmUgbm8gcm9vdHMsIHNldCB0aGUgaGFuZGxlciBvbiBmaXJzdCB1cGRhdGUuXG4gICAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCBpZiAqbmV3KiByb290cyBhcmUgbW91bnRlZCwgdGhleSdsbCB1c2UgdGhlIHJlc29sdmUgaGFuZGxlci5cbiAgICAgIGhlbHBlcnMuc2V0UmVmcmVzaEhhbmRsZXIocmVzb2x2ZUZhbWlseSk7XG4gICAgfSk7XG4gICAgdmFyIGRpZEVycm9yID0gZmFsc2U7XG4gICAgdmFyIGZpcnN0RXJyb3IgPSBudWxsOyAvLyBXZSBzbmFwc2hvdCBtYXBzIGFuZCBzZXRzIHRoYXQgYXJlIG11dGF0ZWQgZHVyaW5nIGNvbW1pdHMuXG4gICAgLy8gSWYgd2UgZG9uJ3QgZG8gdGhpcywgdGhlcmUgaXMgYSByaXNrIHRoZXkgd2lsbCBiZSBtdXRhdGVkIHdoaWxlXG4gICAgLy8gd2UgaXRlcmF0ZSBvdmVyIHRoZW0uIEZvciBleGFtcGxlLCB0cnlpbmcgdG8gcmVjb3ZlciBhIGZhaWxlZCByb290XG4gICAgLy8gbWF5IGNhdXNlIGFub3RoZXIgcm9vdCB0byBiZSBhZGRlZCB0byB0aGUgZmFpbGVkIGxpc3QgLS0gYW4gaW5maW5pdGUgbG9vcC5cblxuICAgIHZhciBmYWlsZWRSb290c1NuYXBzaG90ID0gY2xvbmVTZXQoZmFpbGVkUm9vdHMpO1xuICAgIHZhciBtb3VudGVkUm9vdHNTbmFwc2hvdCA9IGNsb25lU2V0KG1vdW50ZWRSb290cyk7XG4gICAgdmFyIGhlbHBlcnNCeVJvb3RTbmFwc2hvdCA9IGNsb25lTWFwKGhlbHBlcnNCeVJvb3QpO1xuICAgIGZhaWxlZFJvb3RzU25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290U25hcHNob3QuZ2V0KHJvb3QpO1xuXG4gICAgICBpZiAoaGVscGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmFpbGVkUm9vdHMuaGFzKHJvb3QpKSB7Ly8gTm8gbG9uZ2VyIGZhaWxlZC5cbiAgICAgIH1cblxuICAgICAgaWYgKHJvb3RFbGVtZW50cyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghcm9vdEVsZW1lbnRzLmhhcyhyb290KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtZW50ID0gcm9vdEVsZW1lbnRzLmdldChyb290KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaGVscGVycy5zY2hlZHVsZVJvb3Qocm9vdCwgZWxlbWVudCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKCFkaWRFcnJvcikge1xuICAgICAgICAgIGRpZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICBmaXJzdEVycm9yID0gZXJyO1xuICAgICAgICB9IC8vIEtlZXAgdHJ5aW5nIG90aGVyIHJvb3RzLlxuXG4gICAgICB9XG4gICAgfSk7XG4gICAgbW91bnRlZFJvb3RzU25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSb290U25hcHNob3QuZ2V0KHJvb3QpO1xuXG4gICAgICBpZiAoaGVscGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgaGVscGVycyBmb3IgYSByb290LiBUaGlzIGlzIGEgYnVnIGluIFJlYWN0IFJlZnJlc2guJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbW91bnRlZFJvb3RzLmhhcyhyb290KSkgey8vIE5vIGxvbmdlciBtb3VudGVkLlxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBoZWxwZXJzLnNjaGVkdWxlUmVmcmVzaChyb290LCB1cGRhdGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmICghZGlkRXJyb3IpIHtcbiAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgZmlyc3RFcnJvciA9IGVycjtcbiAgICAgICAgfSAvLyBLZWVwIHRyeWluZyBvdGhlciByb290cy5cblxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGRpZEVycm9yKSB7XG4gICAgICB0aHJvdyBmaXJzdEVycm9yO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGU7XG4gIH0gZmluYWxseSB7XG4gICAgaXNQZXJmb3JtaW5nUmVmcmVzaCA9IGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiByZWdpc3Rlcih0eXBlLCBpZCkge1xuICB7XG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBUaGlzIGNhbiBoYXBwZW4gaW4gYW4gZWRnZSBjYXNlLCBlLmcuIGlmIHdlIHJlZ2lzdGVyXG4gICAgLy8gcmV0dXJuIHZhbHVlIG9mIGEgSE9DIGJ1dCBpdCByZXR1cm5zIGEgY2FjaGVkIGNvbXBvbmVudC5cbiAgICAvLyBJZ25vcmUgYW55dGhpbmcgYnV0IHRoZSBmaXJzdCByZWdpc3RyYXRpb24gZm9yIGVhY2ggdHlwZS5cblxuXG4gICAgaWYgKGFsbEZhbWlsaWVzQnlUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ3JlYXRlIGZhbWlseSBvciByZW1lbWJlciB0byB1cGRhdGUgaXQuXG4gICAgLy8gTm9uZSBvZiB0aGlzIGJvb2trZWVwaW5nIGFmZmVjdHMgcmVjb25jaWxpYXRpb25cbiAgICAvLyB1bnRpbCB0aGUgZmlyc3QgcGVyZm9ybVJlYWN0UmVmcmVzaCgpIGNhbGwgYWJvdmUuXG5cblxuICAgIHZhciBmYW1pbHkgPSBhbGxGYW1pbGllc0J5SUQuZ2V0KGlkKTtcblxuICAgIGlmIChmYW1pbHkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZmFtaWx5ID0ge1xuICAgICAgICBjdXJyZW50OiB0eXBlXG4gICAgICB9O1xuICAgICAgYWxsRmFtaWxpZXNCeUlELnNldChpZCwgZmFtaWx5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ1VwZGF0ZXMucHVzaChbZmFtaWx5LCB0eXBlXSk7XG4gICAgfVxuXG4gICAgYWxsRmFtaWxpZXNCeVR5cGUuc2V0KHR5cGUsIGZhbWlseSk7IC8vIFZpc2l0IGlubmVyIHR5cGVzIGJlY2F1c2Ugd2UgbWlnaHQgbm90IGhhdmUgcmVnaXN0ZXJlZCB0aGVtLlxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgICBzd2l0Y2ggKGdldFByb3BlcnR5KHR5cGUsICckJHR5cGVvZicpKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICByZWdpc3Rlcih0eXBlLnJlbmRlciwgaWQgKyAnJHJlbmRlcicpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgIHJlZ2lzdGVyKHR5cGUudHlwZSwgaWQgKyAnJHR5cGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFNpZ25hdHVyZSh0eXBlLCBrZXkpIHtcbiAgdmFyIGZvcmNlUmVzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICB2YXIgZ2V0Q3VzdG9tSG9va3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcblxuICB7XG4gICAgaWYgKCFhbGxTaWduYXR1cmVzQnlUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgYWxsU2lnbmF0dXJlc0J5VHlwZS5zZXQodHlwZSwge1xuICAgICAgICBmb3JjZVJlc2V0OiBmb3JjZVJlc2V0LFxuICAgICAgICBvd25LZXk6IGtleSxcbiAgICAgICAgZnVsbEtleTogbnVsbCxcbiAgICAgICAgZ2V0Q3VzdG9tSG9va3M6IGdldEN1c3RvbUhvb2tzIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gVmlzaXQgaW5uZXIgdHlwZXMgYmVjYXVzZSB3ZSBtaWdodCBub3QgaGF2ZSBzaWduZWQgdGhlbS5cblxuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgICBzd2l0Y2ggKGdldFByb3BlcnR5KHR5cGUsICckJHR5cGVvZicpKSB7XG4gICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICBzZXRTaWduYXR1cmUodHlwZS5yZW5kZXIsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLnR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSAvLyBUaGlzIGlzIGxhemlseSBjYWxsZWQgZHVyaW5nIGZpcnN0IHJlbmRlciBmb3IgYSB0eXBlLlxuLy8gSXQgY2FwdHVyZXMgSG9vayBsaXN0IGF0IHRoYXQgdGltZSBzbyBpbmxpbmUgcmVxdWlyZXMgZG9uJ3QgYnJlYWsgY29tcGFyaXNvbnMuXG5cbmZ1bmN0aW9uIGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSh0eXBlKSB7XG4gIHtcbiAgICB2YXIgc2lnbmF0dXJlID0gYWxsU2lnbmF0dXJlc0J5VHlwZS5nZXQodHlwZSk7XG5cbiAgICBpZiAoc2lnbmF0dXJlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbXB1dGVGdWxsS2V5KHNpZ25hdHVyZSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZXRGYW1pbHlCeUlEKGlkKSB7XG4gIHtcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeUlELmdldChpZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEZhbWlseUJ5VHlwZSh0eXBlKSB7XG4gIHtcbiAgICByZXR1cm4gYWxsRmFtaWxpZXNCeVR5cGUuZ2V0KHR5cGUpO1xuICB9XG59XG5mdW5jdGlvbiBmaW5kQWZmZWN0ZWRIb3N0SW5zdGFuY2VzKGZhbWlsaWVzKSB7XG4gIHtcbiAgICB2YXIgYWZmZWN0ZWRJbnN0YW5jZXMgPSBuZXcgU2V0KCk7XG4gICAgbW91bnRlZFJvb3RzLmZvckVhY2goZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgIHZhciBoZWxwZXJzID0gaGVscGVyc0J5Um9vdC5nZXQocm9vdCk7XG5cbiAgICAgIGlmIChoZWxwZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC4nKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGluc3RhbmNlc0ZvclJvb3QgPSBoZWxwZXJzLmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChyb290LCBmYW1pbGllcyk7XG4gICAgICBpbnN0YW5jZXNGb3JSb290LmZvckVhY2goZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgICAgYWZmZWN0ZWRJbnN0YW5jZXMuYWRkKGluc3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFmZmVjdGVkSW5zdGFuY2VzO1xuICB9XG59XG5mdW5jdGlvbiBpbmplY3RJbnRvR2xvYmFsSG9vayhnbG9iYWxPYmplY3QpIHtcbiAge1xuICAgIC8vIEZvciBSZWFjdCBOYXRpdmUsIHRoZSBnbG9iYWwgaG9vayB3aWxsIGJlIHNldCB1cCBieSByZXF1aXJlKCdyZWFjdC1kZXZ0b29scy1jb3JlJykuXG4gICAgLy8gVGhhdCBjb2RlIHdpbGwgcnVuIGJlZm9yZSB1cy4gU28gd2UgbmVlZCB0byBtb25rZXlwYXRjaCBmdW5jdGlvbnMgb24gZXhpc3RpbmcgaG9vay5cbiAgICAvLyBGb3IgUmVhY3QgV2ViLCB0aGUgZ2xvYmFsIGhvb2sgd2lsbCBiZSBzZXQgdXAgYnkgdGhlIGV4dGVuc2lvbi5cbiAgICAvLyBUaGlzIHdpbGwgYWxzbyBydW4gYmVmb3JlIHVzLlxuICAgIHZhciBob29rID0gZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztcblxuICAgIGlmIChob29rID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZXJlIGlzIG5vIERldlRvb2xzIGV4dGVuc2lvbiwgd2UnbGwgbmVlZCB0byBzZXQgdXAgdGhlIGdsb2JhbCBob29rIG91cnNlbHZlcy5cbiAgICAgIC8vIE5vdGUgdGhhdCBpbiB0aGlzIGNhc2UgaXQncyBpbXBvcnRhbnQgdGhhdCByZW5kZXJlciBjb2RlIHJ1bnMgKmFmdGVyKiB0aGlzIG1ldGhvZCBjYWxsLlxuICAgICAgLy8gT3RoZXJ3aXNlLCB0aGUgcmVuZGVyZXIgd2lsbCB0aGluayB0aGF0IHRoZXJlIGlzIG5vIGdsb2JhbCBob29rLCBhbmQgd29uJ3QgZG8gdGhlIGluamVjdGlvbi5cbiAgICAgIHZhciBuZXh0SUQgPSAwO1xuICAgICAgZ2xvYmFsT2JqZWN0Ll9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9IGhvb2sgPSB7XG4gICAgICAgIHJlbmRlcmVyczogbmV3IE1hcCgpLFxuICAgICAgICBzdXBwb3J0c0ZpYmVyOiB0cnVlLFxuICAgICAgICBpbmplY3Q6IGZ1bmN0aW9uIChpbmplY3RlZCkge1xuICAgICAgICAgIHJldHVybiBuZXh0SUQrKztcbiAgICAgICAgfSxcbiAgICAgICAgb25TY2hlZHVsZUZpYmVyUm9vdDogZnVuY3Rpb24gKGlkLCByb290LCBjaGlsZHJlbikge30sXG4gICAgICAgIG9uQ29tbWl0RmliZXJSb290OiBmdW5jdGlvbiAoaWQsIHJvb3QsIG1heWJlUHJpb3JpdHlMZXZlbCwgZGlkRXJyb3IpIHt9LFxuICAgICAgICBvbkNvbW1pdEZpYmVyVW5tb3VudDogZnVuY3Rpb24gKCkge31cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGhvb2suaXNEaXNhYmxlZCkge1xuICAgICAgLy8gVGhpcyBpc24ndCBhIHJlYWwgcHJvcGVydHkgb24gdGhlIGhvb2ssIGJ1dCBpdCBjYW4gYmUgc2V0IHRvIG9wdCBvdXRcbiAgICAgIC8vIG9mIERldlRvb2xzIGludGVncmF0aW9uIGFuZCBhc3NvY2lhdGVkIHdhcm5pbmdzIGFuZCBsb2dzLlxuICAgICAgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnU29tZXRoaW5nIGhhcyBzaGltbWVkIHRoZSBSZWFjdCBEZXZUb29scyBnbG9iYWwgaG9vayAoX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKS4gJyArICdGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBIZXJlLCB3ZSBqdXN0IHdhbnQgdG8gZ2V0IGEgcmVmZXJlbmNlIHRvIHNjaGVkdWxlUmVmcmVzaC5cblxuXG4gICAgdmFyIG9sZEluamVjdCA9IGhvb2suaW5qZWN0O1xuXG4gICAgaG9vay5pbmplY3QgPSBmdW5jdGlvbiAoaW5qZWN0ZWQpIHtcbiAgICAgIHZhciBpZCA9IG9sZEluamVjdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodHlwZW9mIGluamVjdGVkLnNjaGVkdWxlUmVmcmVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgaW5qZWN0ZWQuc2V0UmVmcmVzaEhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyB2ZXJzaW9uIHN1cHBvcnRzIFJlYWN0IFJlZnJlc2guXG4gICAgICAgIGhlbHBlcnNCeVJlbmRlcmVySUQuc2V0KGlkLCBpbmplY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpZDtcbiAgICB9OyAvLyBEbyB0aGUgc2FtZSBmb3IgYW55IGFscmVhZHkgaW5qZWN0ZWQgcm9vdHMuXG4gICAgLy8gVGhpcyBpcyB1c2VmdWwgaWYgUmVhY3RET00gaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE3NjI2XG5cblxuICAgIGhvb2sucmVuZGVyZXJzLmZvckVhY2goZnVuY3Rpb24gKGluamVjdGVkLCBpZCkge1xuICAgICAgaWYgKHR5cGVvZiBpbmplY3RlZC5zY2hlZHVsZVJlZnJlc2ggPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGluamVjdGVkLnNldFJlZnJlc2hIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIFRoaXMgdmVyc2lvbiBzdXBwb3J0cyBSZWFjdCBSZWZyZXNoLlxuICAgICAgICBoZWxwZXJzQnlSZW5kZXJlcklELnNldChpZCwgaW5qZWN0ZWQpO1xuICAgICAgfVxuICAgIH0pOyAvLyBXZSBhbHNvIHdhbnQgdG8gdHJhY2sgY3VycmVudGx5IG1vdW50ZWQgcm9vdHMuXG5cbiAgICB2YXIgb2xkT25Db21taXRGaWJlclJvb3QgPSBob29rLm9uQ29tbWl0RmliZXJSb290O1xuXG4gICAgdmFyIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QgPSBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBob29rLm9uU2NoZWR1bGVGaWJlclJvb3QgPSBmdW5jdGlvbiAoaWQsIHJvb3QsIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoIWlzUGVyZm9ybWluZ1JlZnJlc2gpIHtcbiAgICAgICAgLy8gSWYgaXQgd2FzIGludGVudGlvbmFsbHkgc2NoZWR1bGVkLCBkb24ndCBhdHRlbXB0IHRvIHJlc3RvcmUuXG4gICAgICAgIC8vIFRoaXMgaW5jbHVkZXMgaW50ZW50aW9uYWxseSBzY2hlZHVsZWQgdW5tb3VudHMuXG4gICAgICAgIGZhaWxlZFJvb3RzLmRlbGV0ZShyb290KTtcblxuICAgICAgICBpZiAocm9vdEVsZW1lbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgcm9vdEVsZW1lbnRzLnNldChyb290LCBjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9sZE9uU2NoZWR1bGVGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgaG9vay5vbkNvbW1pdEZpYmVyUm9vdCA9IGZ1bmN0aW9uIChpZCwgcm9vdCwgbWF5YmVQcmlvcml0eUxldmVsLCBkaWRFcnJvcikge1xuICAgICAgdmFyIGhlbHBlcnMgPSBoZWxwZXJzQnlSZW5kZXJlcklELmdldChpZCk7XG5cbiAgICAgIGlmIChoZWxwZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaGVscGVyc0J5Um9vdC5zZXQocm9vdCwgaGVscGVycyk7XG4gICAgICAgIHZhciBjdXJyZW50ID0gcm9vdC5jdXJyZW50O1xuICAgICAgICB2YXIgYWx0ZXJuYXRlID0gY3VycmVudC5hbHRlcm5hdGU7IC8vIFdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyByb290IGhhcyBqdXN0ICh1biltb3VudGVkLlxuICAgICAgICAvLyBUaGlzIGxvZ2ljIGlzIGNvcHktcGFzdGVkIGZyb20gc2ltaWxhciBsb2dpYyBpbiB0aGUgRGV2VG9vbHMgYmFja2VuZC5cbiAgICAgICAgLy8gSWYgdGhpcyBicmVha3Mgd2l0aCBzb21lIHJlZmFjdG9yaW5nLCB5b3UnbGwgd2FudCB0byB1cGRhdGUgRGV2VG9vbHMgdG9vLlxuXG4gICAgICAgIGlmIChhbHRlcm5hdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgd2FzTW91bnRlZCA9IGFsdGVybmF0ZS5tZW1vaXplZFN0YXRlICE9IG51bGwgJiYgYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGUuZWxlbWVudCAhPSBudWxsO1xuICAgICAgICAgIHZhciBpc01vdW50ZWQgPSBjdXJyZW50Lm1lbW9pemVkU3RhdGUgIT0gbnVsbCAmJiBjdXJyZW50Lm1lbW9pemVkU3RhdGUuZWxlbWVudCAhPSBudWxsO1xuXG4gICAgICAgICAgaWYgKCF3YXNNb3VudGVkICYmIGlzTW91bnRlZCkge1xuICAgICAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cbiAgICAgICAgICAgIG1vdW50ZWRSb290cy5hZGQocm9vdCk7XG4gICAgICAgICAgICBmYWlsZWRSb290cy5kZWxldGUocm9vdCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh3YXNNb3VudGVkICYmIGlzTW91bnRlZCkgOyBlbHNlIGlmICh3YXNNb3VudGVkICYmICFpc01vdW50ZWQpIHtcbiAgICAgICAgICAgIC8vIFVubW91bnQgYW4gZXhpc3Rpbmcgcm9vdC5cbiAgICAgICAgICAgIG1vdW50ZWRSb290cy5kZWxldGUocm9vdCk7XG5cbiAgICAgICAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAgICAgICAvLyBXZSdsbCByZW1vdW50IGl0IG9uIGZ1dHVyZSBlZGl0cy5cbiAgICAgICAgICAgICAgZmFpbGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaGVscGVyc0J5Um9vdC5kZWxldGUocm9vdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghd2FzTW91bnRlZCAmJiAhaXNNb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgICAgLy8gV2UnbGwgcmVtb3VudCBpdCBvbiBmdXR1cmUgZWRpdHMuXG4gICAgICAgICAgICAgIGZhaWxlZFJvb3RzLmFkZChyb290KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTW91bnQgYSBuZXcgcm9vdC5cbiAgICAgICAgICBtb3VudGVkUm9vdHMuYWRkKHJvb3QpO1xuICAgICAgICB9XG4gICAgICB9IC8vIEFsd2F5cyBjYWxsIHRoZSBkZWNvcmF0ZWQgRGV2VG9vbHMgaG9vay5cblxuXG4gICAgICByZXR1cm4gb2xkT25Db21taXRGaWJlclJvb3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBoYXNVbnJlY292ZXJhYmxlRXJyb3JzKCkge1xuICAvLyBUT0RPOiBkZWxldGUgdGhpcyBhZnRlciByZW1vdmluZyBkZXBlbmRlbmN5IGluIFJOLlxuICByZXR1cm4gZmFsc2U7XG59IC8vIEV4cG9zZWQgZm9yIHRlc3RpbmcuXG5cbmZ1bmN0aW9uIF9nZXRNb3VudGVkUm9vdENvdW50KCkge1xuICB7XG4gICAgcmV0dXJuIG1vdW50ZWRSb290cy5zaXplO1xuICB9XG59IC8vIFRoaXMgaXMgYSB3cmFwcGVyIG92ZXIgbW9yZSBwcmltaXRpdmUgZnVuY3Rpb25zIGZvciBzZXR0aW5nIHNpZ25hdHVyZS5cbi8vIFNpZ25hdHVyZXMgbGV0IHVzIGRlY2lkZSB3aGV0aGVyIHRoZSBIb29rIG9yZGVyIGhhcyBjaGFuZ2VkIG9uIHJlZnJlc2guXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgdHJhbnNmb3JtIHRhcmdldCwgZS5nLjpcbi8vIHZhciBfcyA9IGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKClcbi8vXG4vLyBmdW5jdGlvbiBIZWxsbygpIHtcbi8vICAgY29uc3QgW2Zvbywgc2V0Rm9vXSA9IHVzZVN0YXRlKDApO1xuLy8gICBjb25zdCB2YWx1ZSA9IHVzZUN1c3RvbUhvb2soKTtcbi8vICAgX3MoKTsgLyogQ2FsbCB3aXRob3V0IGFyZ3VtZW50cyB0cmlnZ2VycyBjb2xsZWN0aW5nIHRoZSBjdXN0b20gSG9vayBsaXN0LlxuLy8gICAgICAgICAgKiBUaGlzIGRvZXNuJ3QgaGFwcGVuIGR1cmluZyB0aGUgbW9kdWxlIGV2YWx1YXRpb24gYmVjYXVzZSB3ZVxuLy8gICAgICAgICAgKiBkb24ndCB3YW50IHRvIGNoYW5nZSB0aGUgbW9kdWxlIG9yZGVyIHdpdGggaW5saW5lIHJlcXVpcmVzLlxuLy8gICAgICAgICAgKiBOZXh0IGNhbGxzIGFyZSBub29wcy4gKi9cbi8vICAgcmV0dXJuIDxoMT5IaTwvaDE+O1xuLy8gfVxuLy9cbi8vIC8qIENhbGwgd2l0aCBhcmd1bWVudHMgYXR0YWNoZXMgdGhlIHNpZ25hdHVyZSB0byB0aGUgdHlwZTogKi9cbi8vIF9zKFxuLy8gICBIZWxsbyxcbi8vICAgJ3VzZVN0YXRle1tmb28sIHNldEZvb119KDApJyxcbi8vICAgKCkgPT4gW3VzZUN1c3RvbUhvb2tdLCAvKiBMYXp5IHRvIGF2b2lkIHRyaWdnZXJpbmcgaW5saW5lIHJlcXVpcmVzICovXG4vLyApO1xuXG5mdW5jdGlvbiBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybSgpIHtcbiAge1xuICAgIHZhciBzYXZlZFR5cGU7XG4gICAgdmFyIGhhc0N1c3RvbUhvb2tzO1xuICAgIHZhciBkaWRDb2xsZWN0SG9va3MgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHR5cGUsIGtleSwgZm9yY2VSZXNldCwgZ2V0Q3VzdG9tSG9va3MpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBXZSdyZSBpbiB0aGUgaW5pdGlhbCBwaGFzZSB0aGF0IGFzc29jaWF0ZXMgc2lnbmF0dXJlc1xuICAgICAgICAvLyB3aXRoIHRoZSBmdW5jdGlvbnMuIE5vdGUgdGhpcyBtYXkgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIC8vIGluIEhPQyBjaGFpbnMgbGlrZSBfcyhob2MxKF9zKGhvYzIoX3MoYWN0dWFsRnVuY3Rpb24pKSkpKS5cbiAgICAgICAgaWYgKCFzYXZlZFR5cGUpIHtcbiAgICAgICAgICAvLyBXZSdyZSBpbiB0aGUgaW5uZXJtb3N0IGNhbGwsIHNvIHRoaXMgaXMgdGhlIGFjdHVhbCB0eXBlLlxuICAgICAgICAgIHNhdmVkVHlwZSA9IHR5cGU7XG4gICAgICAgICAgaGFzQ3VzdG9tSG9va3MgPSB0eXBlb2YgZ2V0Q3VzdG9tSG9va3MgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIH0gLy8gU2V0IHRoZSBzaWduYXR1cmUgZm9yIGFsbCB0eXBlcyAoZXZlbiB3cmFwcGVycyEpIGluIGNhc2VcbiAgICAgICAgLy8gdGhleSBoYXZlIG5vIHNpZ25hdHVyZXMgb2YgdGhlaXIgb3duLiBUaGlzIGlzIHRvIHByZXZlbnRcbiAgICAgICAgLy8gcHJvYmxlbXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzIwNDE3LlxuXG5cbiAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCAmJiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSkge1xuICAgICAgICAgIHNldFNpZ25hdHVyZSh0eXBlLCBrZXksIGZvcmNlUmVzZXQsIGdldEN1c3RvbUhvb2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gV2UncmUgaW4gdGhlIF9zKCkgY2FsbCB3aXRob3V0IGFyZ3VtZW50cywgd2hpY2ggbWVhbnNcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdGltZSB0byBjb2xsZWN0IGN1c3RvbSBIb29rIHNpZ25hdHVyZXMuXG4gICAgICAgIC8vIE9ubHkgZG8gdGhpcyBvbmNlLiBUaGlzIHBhdGggaXMgaG90IGFuZCBydW5zICppbnNpZGUqIGV2ZXJ5IHJlbmRlciFcbiAgICAgICAgaWYgKCFkaWRDb2xsZWN0SG9va3MgJiYgaGFzQ3VzdG9tSG9va3MpIHtcbiAgICAgICAgICBkaWRDb2xsZWN0SG9va3MgPSB0cnVlO1xuICAgICAgICAgIGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZShzYXZlZFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuZnVuY3Rpb24gaXNMaWtlbHlDb21wb25lbnRUeXBlKHR5cGUpIHtcbiAge1xuICAgIHN3aXRjaCAodHlwZW9mIHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAge1xuICAgICAgICAgIC8vIEZpcnN0LCBkZWFsIHdpdGggY2xhc3Nlcy5cbiAgICAgICAgICBpZiAodHlwZS5wcm90b3R5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgLy8gUmVhY3QgY2xhc3MuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgb3duTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0eXBlLnByb3RvdHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChvd25OYW1lcy5sZW5ndGggPiAxIHx8IG93bk5hbWVzWzBdICE9PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgbG9va3MgbGlrZSBhIGNsYXNzLlxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b1xuXG5cbiAgICAgICAgICAgIGlmICh0eXBlLnByb3RvdHlwZS5fX3Byb3RvX18gIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgLy8gSXQgaGFzIGEgc3VwZXJjbGFzcy5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyBQYXNzIHRocm91Z2guXG4gICAgICAgICAgICAvLyBUaGlzIGxvb2tzIGxpa2UgYSByZWd1bGFyIGZ1bmN0aW9uIHdpdGggZW1wdHkgcHJvdG90eXBlLlxuXG4gICAgICAgICAgfSAvLyBGb3IgcGxhaW4gZnVuY3Rpb25zIGFuZCBhcnJvd3MsIHVzZSBuYW1lIGFzIGEgaGV1cmlzdGljLlxuXG5cbiAgICAgICAgICB2YXIgbmFtZSA9IHR5cGUubmFtZSB8fCB0eXBlLmRpc3BsYXlOYW1lO1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycgJiYgL15bQS1aXS8udGVzdChuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHR5cGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc3dpdGNoIChnZXRQcm9wZXJ0eSh0eXBlLCAnJCR0eXBlb2YnKSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICAgIC8vIERlZmluaXRlbHkgUmVhY3QgY29tcG9uZW50cy5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLl9nZXRNb3VudGVkUm9vdENvdW50ID0gX2dldE1vdW50ZWRSb290Q291bnQ7XG5leHBvcnRzLmNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZSA9IGNvbGxlY3RDdXN0b21Ib29rc0ZvclNpZ25hdHVyZTtcbmV4cG9ydHMuY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0gPSBjcmVhdGVTaWduYXR1cmVGdW5jdGlvbkZvclRyYW5zZm9ybTtcbmV4cG9ydHMuZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcyA9IGZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXM7XG5leHBvcnRzLmdldEZhbWlseUJ5SUQgPSBnZXRGYW1pbHlCeUlEO1xuZXhwb3J0cy5nZXRGYW1pbHlCeVR5cGUgPSBnZXRGYW1pbHlCeVR5cGU7XG5leHBvcnRzLmhhc1VucmVjb3ZlcmFibGVFcnJvcnMgPSBoYXNVbnJlY292ZXJhYmxlRXJyb3JzO1xuZXhwb3J0cy5pbmplY3RJbnRvR2xvYmFsSG9vayA9IGluamVjdEludG9HbG9iYWxIb29rO1xuZXhwb3J0cy5pc0xpa2VseUNvbXBvbmVudFR5cGUgPSBpc0xpa2VseUNvbXBvbmVudFR5cGU7XG5leHBvcnRzLnBlcmZvcm1SZWFjdFJlZnJlc2ggPSBwZXJmb3JtUmVhY3RSZWZyZXNoO1xuZXhwb3J0cy5yZWdpc3RlciA9IHJlZ2lzdGVyO1xuZXhwb3J0cy5zZXRTaWduYXR1cmUgPSBzZXRTaWduYXR1cmU7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtcmVmcmVzaC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LXJlZnJlc2gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0RE9NXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RJbnRsXCJdOyIsIi8qIGdsb2JhbCBfX3JlYWN0X3JlZnJlc2hfbGlicmFyeV9fICovXG5cbmNvbnN0IHNhZmVUaGlzID0gcmVxdWlyZSgnY29yZS1qcy1wdXJlL2ZlYXR1cmVzL2dsb2JhbC10aGlzJyk7XG5jb25zdCBSZWZyZXNoUnVudGltZSA9IHJlcXVpcmUoJ3JlYWN0LXJlZnJlc2gvcnVudGltZScpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBpZiAodHlwZW9mIHNhZmVUaGlzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciAkUmVmcmVzaEluamVjdGVkJCA9ICdfX3JlYWN0UmVmcmVzaEluamVjdGVkJztcbiAgICAvLyBOYW1lc3BhY2UgdGhlIGluamVjdGVkIGZsYWcgKGlmIG5lY2Vzc2FyeSkgZm9yIG1vbm9yZXBvIGNvbXBhdGliaWxpdHlcbiAgICBpZiAodHlwZW9mIF9fcmVhY3RfcmVmcmVzaF9saWJyYXJ5X18gIT09ICd1bmRlZmluZWQnICYmIF9fcmVhY3RfcmVmcmVzaF9saWJyYXJ5X18pIHtcbiAgICAgICRSZWZyZXNoSW5qZWN0ZWQkICs9ICdfJyArIF9fcmVhY3RfcmVmcmVzaF9saWJyYXJ5X187XG4gICAgfVxuXG4gICAgLy8gT25seSBpbmplY3QgdGhlIHJ1bnRpbWUgaWYgaXQgaGFzbid0IGJlZW4gaW5qZWN0ZWRcbiAgICBpZiAoIXNhZmVUaGlzWyRSZWZyZXNoSW5qZWN0ZWQkXSkge1xuICAgICAgLy8gSW5qZWN0IHJlZnJlc2ggcnVudGltZSBpbnRvIGdsb2JhbCBzY29wZVxuICAgICAgUmVmcmVzaFJ1bnRpbWUuaW5qZWN0SW50b0dsb2JhbEhvb2soc2FmZVRoaXMpO1xuXG4gICAgICAvLyBNYXJrIHRoZSBydW50aW1lIGFzIGluamVjdGVkIHRvIHByZXZlbnQgZG91YmxlLWluamVjdGlvblxuICAgICAgc2FmZVRoaXNbJFJlZnJlc2hJbmplY3RlZCRdID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi9zdGFibGUvZ2xvYmFsLXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmdsb2JhbC10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9mdWxsL2dsb2JhbC10aGlzJyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiByZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxucmVxdWlyZSgnLi4vbW9kdWxlcy9lc25leHQuZ2xvYmFsLXRoaXMnKTtcblxudmFyIHBhcmVudCA9IHJlcXVpcmUoJy4uL2FjdHVhbC9nbG9iYWwtdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG52YXIgSVNfSFRNTEREQSA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWxsOiBkb2N1bWVudEFsbCxcbiAgSVNfSFRNTEREQTogSVNfSFRNTEREQVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciB3cmFwQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoTmF0aXZlQ29uc3RydWN0b3IpIHtcbiAgdmFyIFdyYXBwZXIgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgV3JhcHBlcikge1xuICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpO1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgTmF0aXZlQ29uc3RydWN0b3IoYSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhLCBiKTtcbiAgICAgIH0gcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhLCBiLCBjKTtcbiAgICB9IHJldHVybiBhcHBseShOYXRpdmVDb25zdHJ1Y3RvciwgdGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIHJldHVybiBXcmFwcGVyO1xufTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIFBST1RPID0gb3B0aW9ucy5wcm90bztcblxuICB2YXIgbmF0aXZlU291cmNlID0gR0xPQkFMID8gZ2xvYmFsIDogU1RBVElDID8gZ2xvYmFsW1RBUkdFVF0gOiAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcblxuICB2YXIgdGFyZ2V0ID0gR0xPQkFMID8gcGF0aCA6IHBhdGhbVEFSR0VUXSB8fCBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocGF0aCwgVEFSR0VULCB7fSlbVEFSR0VUXTtcbiAgdmFyIHRhcmdldFByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG5cbiAgdmFyIEZPUkNFRCwgVVNFX05BVElWRSwgVklSVFVBTF9QUk9UT1RZUEU7XG4gIHZhciBrZXksIHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSwgbmF0aXZlUHJvcGVydHksIHJlc3VsdFByb3BlcnR5LCBkZXNjcmlwdG9yO1xuXG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgVVNFX05BVElWRSA9ICFGT1JDRUQgJiYgbmF0aXZlU291cmNlICYmIGhhc093bihuYXRpdmVTb3VyY2UsIGtleSk7XG5cbiAgICB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuXG4gICAgaWYgKFVTRV9OQVRJVkUpIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5hdGl2ZVNvdXJjZSwga2V5KTtcbiAgICAgIG5hdGl2ZVByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSBuYXRpdmVQcm9wZXJ0eSA9IG5hdGl2ZVNvdXJjZVtrZXldO1xuXG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBpbXBsZW1lbnRhdGlvblxuICAgIHNvdXJjZVByb3BlcnR5ID0gKFVTRV9OQVRJVkUgJiYgbmF0aXZlUHJvcGVydHkpID8gbmF0aXZlUHJvcGVydHkgOiBzb3VyY2Vba2V5XTtcblxuICAgIGlmIChVU0VfTkFUSVZFICYmIHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSA9PSB0eXBlb2Ygc291cmNlUHJvcGVydHkpIGNvbnRpbnVlO1xuXG4gICAgLy8gYmluZCBtZXRob2RzIHRvIGdsb2JhbCBmb3IgY2FsbGluZyBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgaWYgKG9wdGlvbnMuYmluZCAmJiBVU0VfTkFUSVZFKSByZXN1bHRQcm9wZXJ0eSA9IGJpbmQoc291cmNlUHJvcGVydHksIGdsb2JhbCk7XG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZXMgaW4gdGhpcyB2ZXJzaW9uXG4gICAgZWxzZSBpZiAob3B0aW9ucy53cmFwICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gd3JhcENvbnN0cnVjdG9yKHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICBlbHNlIGlmIChQUk9UTyAmJiBpc0NhbGxhYmxlKHNvdXJjZVByb3BlcnR5KSkgcmVzdWx0UHJvcGVydHkgPSB1bmN1cnJ5VGhpcyhzb3VyY2VQcm9wZXJ0eSk7XG4gICAgLy8gZGVmYXVsdCBjYXNlXG4gICAgZWxzZSByZXN1bHRQcm9wZXJ0eSA9IHNvdXJjZVByb3BlcnR5O1xuXG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHNvdXJjZVByb3BlcnR5ICYmIHNvdXJjZVByb3BlcnR5LnNoYW0pIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHJlc3VsdFByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cblxuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgcmVzdWx0UHJvcGVydHkpO1xuXG4gICAgaWYgKFBST1RPKSB7XG4gICAgICBWSVJUVUFMX1BST1RPVFlQRSA9IFRBUkdFVCArICdQcm90b3R5cGUnO1xuICAgICAgaWYgKCFoYXNPd24ocGF0aCwgVklSVFVBTF9QUk9UT1RZUEUpKSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShwYXRoLCBWSVJUVUFMX1BST1RPVFlQRSwge30pO1xuICAgICAgfVxuICAgICAgLy8gZXhwb3J0IHZpcnR1YWwgcHJvdG90eXBlIG1ldGhvZHNcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShwYXRoW1ZJUlRVQUxfUFJPVE9UWVBFXSwga2V5LCBzb3VyY2VQcm9wZXJ0eSk7XG4gICAgICAvLyBleHBvcnQgcmVhbCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgaWYgKG9wdGlvbnMucmVhbCAmJiB0YXJnZXRQcm90b3R5cGUgJiYgKEZPUkNFRCB8fCAhdGFyZ2V0UHJvdG90eXBlW2tleV0pKSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0YXJnZXRQcm90b3R5cGUsIGtleSwgc291cmNlUHJvcGVydHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGFwcGx5ID0gRnVuY3Rpb25Qcm90b3R5cGUuYXBwbHk7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1yZWZsZWN0IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFJlZmxlY3QgPT0gJ29iamVjdCcgJiYgUmVmbGVjdC5hcHBseSB8fCAoTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoYXBwbHkpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShhcHBseSwgYXJndW1lbnRzKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBiaW5kID0gdW5jdXJyeVRoaXModW5jdXJyeVRoaXMuYmluZCk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQpIHtcbiAgYUNhbGxhYmxlKGZuKTtcbiAgcmV0dXJuIHRoYXQgPT09IHVuZGVmaW5lZCA/IGZuIDogTkFUSVZFX0JJTkQgPyBiaW5kKGZuLCB0aGF0KSA6IGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgLy8gTmFzaG9ybiBidWc6XG4gIC8vICAgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzExMjhcbiAgLy8gICBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTEzMFxuICBpZiAoY2xhc3NvZlJhdyhmbikgPT09ICdGdW5jdGlvbicpIHJldHVybiB1bmN1cnJ5VGhpcyhmbik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHZhcmlhYmxlKSA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgdGhpcyB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkb2N1bWVudEFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1hbGwnKTtcblxudmFyIGRvY3VtZW50QWxsID0gJGRvY3VtZW50QWxsLmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG5tb2R1bGUuZXhwb3J0cyA9ICRkb2N1bWVudEFsbC5JU19IVE1MRERBID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyICRkb2N1bWVudEFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1hbGwnKTtcblxudmFyIGRvY3VtZW50QWxsID0gJGRvY3VtZW50QWxsLmFsbDtcblxubW9kdWxlLmV4cG9ydHMgPSAkZG9jdW1lbnRBbGwuSVNfSFRNTEREQSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KSB8fCBpdCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzMuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDIzIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzMuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxuLy8gYGdsb2JhbFRoaXNgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nbG9iYWx0aGlzXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5nbG9iYWxUaGlzICE9PSBnbG9iYWwgfSwge1xuICBnbG9iYWxUaGlzOiBnbG9iYWxcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGBcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMuZ2xvYmFsLXRoaXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBwYXJlbnQgPSByZXF1aXJlKCcuLi9lcy9nbG9iYWwtdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcmVudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaCgob3B0aW9ucykgPT4ge1xuXHRjb25zdCBvcmlnaW5hbEZhY3RvcnkgPSBvcHRpb25zLmZhY3Rvcnk7XG5cdG9wdGlvbnMuZmFjdG9yeSA9IGZ1bmN0aW9uIChtb2R1bGVPYmplY3QsIG1vZHVsZUV4cG9ydHMsIHdlYnBhY2tSZXF1aXJlKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuc2V0dXAob3B0aW9ucy5pZCk7XG5cdFx0dHJ5IHtcblx0XHRcdG9yaWdpbmFsRmFjdG9yeS5jYWxsKHRoaXMsIG1vZHVsZU9iamVjdCwgbW9kdWxlRXhwb3J0cywgd2VicGFja1JlcXVpcmUpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZU9iamVjdC5leHBvcnRzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdFx0XHRvcHRpb25zLm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucy5tb2R1bGUuZXhwb3J0cy50aGVuKFxuXHRcdFx0XHRcdChyZXN1bHQpID0+IHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXAob3B0aW9ucy5pZCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KHJlYXNvbikgPT4ge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuY2xlYW51cChvcHRpb25zLmlkKTtcblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXAob3B0aW9ucy5pZClcblx0XHRcdH1cblx0XHR9XG5cdH07XG59KVxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJCA9IHtcblx0cmVnaXN0ZXI6ICgpID0+ICh1bmRlZmluZWQpLFxuXHRzaWduYXR1cmU6ICgpID0+ICgodHlwZSkgPT4gKHR5cGUpKSxcblx0cnVudGltZToge1xuXHRcdGNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtOiAoKSA9PiAoKHR5cGUpID0+ICh0eXBlKSksXG5cdFx0cmVnaXN0ZXI6ICgpID0+ICh1bmRlZmluZWQpXG5cdH0sXG5cdHNldHVwOiAoY3VycmVudE1vZHVsZUlkKSA9PiB7XG5cdFx0Y29uc3QgcHJldk1vZHVsZUlkID0gX193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQubW9kdWxlSWQ7XG5cdFx0Y29uc3QgcHJldlJlZ2lzdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQucmVnaXN0ZXI7XG5cdFx0Y29uc3QgcHJldlNpZ25hdHVyZSA9IF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnNpZ25hdHVyZTtcblx0XHRjb25zdCBwcmV2Q2xlYW51cCA9IF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXA7XG5cblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5tb2R1bGVJZCA9IGN1cnJlbnRNb2R1bGVJZDtcblxuXHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnJlZ2lzdGVyID0gKHR5cGUsIGlkKSA9PiB7XG5cdFx0XHRjb25zdCB0eXBlSWQgPSBjdXJyZW50TW9kdWxlSWQgKyBcIiBcIiArIGlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQucnVudGltZS5yZWdpc3Rlcih0eXBlLCB0eXBlSWQpO1xuXHRcdH1cblxuXHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnNpZ25hdHVyZSA9ICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5ydW50aW1lLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtKCkpO1xuXG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQuY2xlYW51cCA9IChjbGVhbnVwTW9kdWxlSWQpID0+IHtcblx0XHRcdGlmIChjdXJyZW50TW9kdWxlSWQgPT09IGNsZWFudXBNb2R1bGVJZCkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLiRSZWZyZXNoJC5tb2R1bGVJZCA9IHByZXZNb2R1bGVJZDtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy4kUmVmcmVzaCQucmVnaXN0ZXIgPSBwcmV2UmVnaXN0ZXI7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLnNpZ25hdHVyZSA9IHByZXZTaWduYXR1cmU7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uJFJlZnJlc2gkLmNsZWFudXAgPSBwcmV2Q2xlYW51cDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy9AcG1tbXdoL3JlYWN0LXJlZnJlc2gtd2VicGFjay1wbHVnaW4vY2xpZW50L1JlYWN0UmVmcmVzaEVudHJ5LmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwcy9iYW5uZXIvaW5kZXgudHN4XCIpO1xuIiwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyeSIsInNob3J0Y29kZSIsInRpdGxlIiwic3RhdHVzIiwiZGVzY3JpcHRpb24iLCJwcmV2aWV3IiwidXJsIiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJ1c2VFeHRlcm5hbFBlZXJEZXBlbmRlbmNpZXMiLCJhZGRpdGlvbmFsQ3VzdG9tUHJvcGVydGllcyIsImF2YWlsYWJsZVRyYW5zbGF0aW9ucyIsIlJlYWN0IiwianN4REVWIiwiX2pzeERFViIsInN0eWxlcyIsImNhcmQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiZm9udEZhbWlseSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsIndvcmRXcmFwIiwiY2FyZENvbnRhaW5lciIsImZvbnRTaXplIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsIndpZHRoIiwiY2FyZEluZm8iLCJjb2xvciIsImNhcmROYW1lIiwiZm9udFdlaWdodCIsImNhcmREZXNjcmlwdGlvbiIsImNhcmRDYXRlZ29yeSIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0QWxpZ24iLCJCYW5uZXJDYXJkcyIsImhlYWRpbmciLCJ0ZXh0Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbWdQYXRoIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJQVUJMSUNfQVNTRVRTX1VSTCIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX2MiLCIkUmVmcmVzaFJlZyQiLCJSZWFjdERPTSIsIkludGxQcm92aWRlciIsIm5vcm1hbGl6ZVdpZGdldElucHV0Iiwid2lkZ2V0RGVmaW5pdGlvbiIsInJlbmRlciIsImluc3RhbmNlSWQiLCJsYW5nQ29kZSIsIm9yaWdpbiIsImNiIiwiZWxlbWVudCIsImxvY2FsZSIsIm1lc3NhZ2VzIiwiTG9jYWxlIiwiZmV0Y2hUcmFuc2xhdGlvbk1lc3NhZ2VzIiwid2lkZ2V0SWQiLCJFTiIsInJlc3BvbnNlIiwid2luZG93IiwiZmV0Y2giLCJqc29uIiwiZSIsImNhbWVsaXplIiwicmVmaW5lSW5wdXRUeXBlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJIVE1MRWxlbWVudCIsInBhbGV0dGUiLCJnZXRBdHRyaWJ1dGUiLCJyYXdQYXJhbXMiLCJwYXJzZVVzZXJJbnB1dCIsInBhcmFtcyIsIl93aWRnZXREZWZpbml0aW9uJHNldCIsIl93aWRnZXREZWZpbml0aW9uJHNldDIiLCJfd2lkZ2V0RGVmaW5pdGlvbiRzZXQzIiwic2NoZW1hUHJvcHMiLCJzZXR0aW5nc1NjaGVtYSIsInByb3BlcnRpZXMiLCJmaWVsZHMiLCJwcm9wTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwicHJvcE5hbWUiLCJwYXJzZVZhbHVlIiwidHlwZSIsImF0dHJpYnV0ZSIsImluY2x1ZGVzIiwicGFyc2VGbG9hdCIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwiYXZhaWxhYmxlTGFuZ2NvZGVzIiwiQVIiLCJERSIsIkVTIiwiRlIiLCJJVCIsIkpBIiwiS08iLCJQTCIsIlBUIiwiUlUiLCJUUiIsIlpIIiwiUmVmcmVzaCIsInJlcXVpcmUiLCJnZXRNb2R1bGVFeHBvcnRzIiwibW9kdWxlSWQiLCJtYXliZU1vZHVsZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjIiwiY29uc29sZSIsIndhcm4iLCJleHBvcnRzT3JQcm9taXNlIiwiUHJvbWlzZSIsInRoZW4iLCJnZXRSZWFjdFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZSIsIm1vZHVsZUV4cG9ydHMiLCJzaWduYXR1cmUiLCJwdXNoIiwiZ2V0RmFtaWx5QnlUeXBlIiwia2V5IiwiZ2V0V2VicGFja0hvdERhdGEiLCJpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5IiwiY3JlYXRlRGVib3VuY2VVcGRhdGUiLCJyZWZyZXNoVGltZW91dCIsImVucXVldWVVcGRhdGUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJ1bmRlZmluZWQiLCJwZXJmb3JtUmVhY3RSZWZyZXNoIiwiaXNMaWtlbHlDb21wb25lbnRUeXBlIiwiaGFzRXhwb3J0cyIsImFyZUFsbEV4cG9ydHNDb21wb25lbnRzIiwiZXhwb3J0VmFsdWUiLCJyZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2giLCJyZWdpc3RlciIsInR5cGVJRCIsInNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeSIsInByZXZTaWduYXR1cmUiLCJuZXh0U2lnbmF0dXJlIiwibGVuZ3RoIiwiaSIsImV4ZWN1dGVSdW50aW1lIiwid2VicGFja0hvdCIsInJlZnJlc2hPdmVybGF5IiwiaXNUZXN0IiwiaXNIb3RVcGRhdGUiLCJkYXRhIiwicHJldkRhdGEiLCJkaXNwb3NlIiwiaG90RGlzcG9zZUNhbGxiYWNrIiwiYWNjZXB0IiwiaG90RXJyb3JIYW5kbGVyIiwiZXJyb3IiLCJoYW5kbGVSdW50aW1lRXJyb3IiLCJvbkhvdEFjY2VwdEVycm9yIiwibWVzc2FnZSIsImhvdCIsImludmFsaWRhdGUiLCJ1cGRhdGVDYWxsYmFjayIsImNsZWFyUnVudGltZUVycm9ycyIsImZyZWV6ZSIsIklORklOSVRZIiwic3ltYm9sVGFnIiwicmVBc2NpaVdvcmQiLCJyZUxhdGluIiwicnNBc3RyYWxSYW5nZSIsInJzQ29tYm9NYXJrc1JhbmdlIiwicnNDb21ib1N5bWJvbHNSYW5nZSIsInJzRGluZ2JhdFJhbmdlIiwicnNMb3dlclJhbmdlIiwicnNNYXRoT3BSYW5nZSIsInJzTm9uQ2hhclJhbmdlIiwicnNQdW5jdHVhdGlvblJhbmdlIiwicnNTcGFjZVJhbmdlIiwicnNVcHBlclJhbmdlIiwicnNWYXJSYW5nZSIsInJzQnJlYWtSYW5nZSIsInJzQXBvcyIsInJzQXN0cmFsIiwicnNCcmVhayIsInJzQ29tYm8iLCJyc0RpZ2l0cyIsInJzRGluZ2JhdCIsInJzTG93ZXIiLCJyc01pc2MiLCJyc0ZpdHoiLCJyc01vZGlmaWVyIiwicnNOb25Bc3RyYWwiLCJyc1JlZ2lvbmFsIiwicnNTdXJyUGFpciIsInJzVXBwZXIiLCJyc1pXSiIsInJzTG93ZXJNaXNjIiwicnNVcHBlck1pc2MiLCJyc09wdExvd2VyQ29udHIiLCJyc09wdFVwcGVyQ29udHIiLCJyZU9wdE1vZCIsInJzT3B0VmFyIiwicnNPcHRKb2luIiwiam9pbiIsInJzU2VxIiwicnNFbW9qaSIsInJzU3ltYm9sIiwicmVBcG9zIiwiUmVnRXhwIiwicmVDb21ib01hcmsiLCJyZVVuaWNvZGUiLCJyZVVuaWNvZGVXb3JkIiwicmVIYXNVbmljb2RlIiwicmVIYXNVbmljb2RlV29yZCIsImRlYnVycmVkTGV0dGVycyIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJmcmVlU2VsZiIsInNlbGYiLCJyb290IiwiRnVuY3Rpb24iLCJhcnJheVJlZHVjZSIsImFycmF5IiwiaXRlcmF0ZWUiLCJhY2N1bXVsYXRvciIsImluaXRBY2N1bSIsImluZGV4IiwiYXNjaWlUb0FycmF5Iiwic3RyaW5nIiwic3BsaXQiLCJhc2NpaVdvcmRzIiwibWF0Y2giLCJiYXNlUHJvcGVydHlPZiIsIm9iamVjdCIsImRlYnVyckxldHRlciIsImhhc1VuaWNvZGUiLCJ0ZXN0IiwiaGFzVW5pY29kZVdvcmQiLCJzdHJpbmdUb0FycmF5IiwidW5pY29kZVRvQXJyYXkiLCJ1bmljb2RlV29yZHMiLCJvYmplY3RQcm90byIsInByb3RvdHlwZSIsIm9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJTeW1ib2wiLCJzeW1ib2xQcm90byIsInN5bWJvbFRvU3RyaW5nIiwiYmFzZVNsaWNlIiwic3RhcnQiLCJlbmQiLCJyZXN1bHQiLCJBcnJheSIsImJhc2VUb1N0cmluZyIsInZhbHVlIiwiaXNTeW1ib2wiLCJjYWxsIiwiY2FzdFNsaWNlIiwiY3JlYXRlQ2FzZUZpcnN0IiwibWV0aG9kTmFtZSIsInN0clN5bWJvbHMiLCJjaHIiLCJjaGFyQXQiLCJ0cmFpbGluZyIsInNsaWNlIiwiY3JlYXRlQ29tcG91bmRlciIsIndvcmRzIiwiZGVidXJyIiwicmVwbGFjZSIsImlzT2JqZWN0TGlrZSIsImNhbWVsQ2FzZSIsIndvcmQiLCJ0b0xvd2VyQ2FzZSIsImNhcGl0YWxpemUiLCJ1cHBlckZpcnN0IiwicGF0dGVybiIsImd1YXJkIiwiTk9ERV9FTlYiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX0ZSQUdNRU5UX1RZUEUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSIsIlJFQUNUX01FTU9fVFlQRSIsIlJFQUNUX0xBWllfVFlQRSIsIlJFQUNUX1NDT1BFX1RZUEUiLCJSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSIsIlJFQUNUX09GRlNDUkVFTl9UWVBFIiwiUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIiwiUkVBQ1RfQ0FDSEVfVFlQRSIsImZvciIsInN5bWJvbEZvciIsIlBvc3NpYmx5V2Vha01hcCIsIldlYWtNYXAiLCJNYXAiLCJhbGxGYW1pbGllc0J5SUQiLCJhbGxGYW1pbGllc0J5VHlwZSIsImFsbFNpZ25hdHVyZXNCeVR5cGUiLCJ1cGRhdGVkRmFtaWxpZXNCeVR5cGUiLCJwZW5kaW5nVXBkYXRlcyIsImhlbHBlcnNCeVJlbmRlcmVySUQiLCJoZWxwZXJzQnlSb290IiwibW91bnRlZFJvb3RzIiwiU2V0IiwiZmFpbGVkUm9vdHMiLCJyb290RWxlbWVudHMiLCJpc1BlcmZvcm1pbmdSZWZyZXNoIiwiY29tcHV0ZUZ1bGxLZXkiLCJmdWxsS2V5Iiwib3duS2V5IiwiaG9va3MiLCJnZXRDdXN0b21Ib29rcyIsImVyciIsImZvcmNlUmVzZXQiLCJob29rIiwibmVzdGVkSG9va1NpZ25hdHVyZSIsImdldCIsIm5lc3RlZEhvb2tLZXkiLCJoYXZlRXF1YWxTaWduYXR1cmVzIiwicHJldlR5cGUiLCJuZXh0VHlwZSIsImlzUmVhY3RDbGFzcyIsImlzUmVhY3RDb21wb25lbnQiLCJjYW5QcmVzZXJ2ZVN0YXRlQmV0d2VlbiIsInJlc29sdmVGYW1pbHkiLCJjbG9uZU1hcCIsIm1hcCIsImNsb25lIiwiZm9yRWFjaCIsInNldCIsImNsb25lU2V0IiwiYWRkIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eSIsInN0YWxlRmFtaWxpZXMiLCJ1cGRhdGVkRmFtaWxpZXMiLCJ1cGRhdGVzIiwiX3JlZiIsImZhbWlseSIsImN1cnJlbnQiLCJ1cGRhdGUiLCJoZWxwZXJzIiwic2V0UmVmcmVzaEhhbmRsZXIiLCJkaWRFcnJvciIsImZpcnN0RXJyb3IiLCJmYWlsZWRSb290c1NuYXBzaG90IiwibW91bnRlZFJvb3RzU25hcHNob3QiLCJoZWxwZXJzQnlSb290U25hcHNob3QiLCJFcnJvciIsImhhcyIsInNjaGVkdWxlUm9vdCIsInNjaGVkdWxlUmVmcmVzaCIsImlkIiwic2V0U2lnbmF0dXJlIiwiYXJndW1lbnRzIiwiY29sbGVjdEN1c3RvbUhvb2tzRm9yU2lnbmF0dXJlIiwiZ2V0RmFtaWx5QnlJRCIsImZpbmRBZmZlY3RlZEhvc3RJbnN0YW5jZXMiLCJmYW1pbGllcyIsImFmZmVjdGVkSW5zdGFuY2VzIiwiaW5zdGFuY2VzRm9yUm9vdCIsImZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaCIsImluc3QiLCJpbmplY3RJbnRvR2xvYmFsSG9vayIsImdsb2JhbE9iamVjdCIsIl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsIm5leHRJRCIsInJlbmRlcmVycyIsInN1cHBvcnRzRmliZXIiLCJpbmplY3QiLCJpbmplY3RlZCIsIm9uU2NoZWR1bGVGaWJlclJvb3QiLCJvbkNvbW1pdEZpYmVyUm9vdCIsIm1heWJlUHJpb3JpdHlMZXZlbCIsIm9uQ29tbWl0RmliZXJVbm1vdW50IiwiaXNEaXNhYmxlZCIsIm9sZEluamVjdCIsImFwcGx5Iiwib2xkT25Db21taXRGaWJlclJvb3QiLCJvbGRPblNjaGVkdWxlRmliZXJSb290IiwiZGVsZXRlIiwiYWx0ZXJuYXRlIiwid2FzTW91bnRlZCIsIm1lbW9pemVkU3RhdGUiLCJpc01vdW50ZWQiLCJoYXNVbnJlY292ZXJhYmxlRXJyb3JzIiwiX2dldE1vdW50ZWRSb290Q291bnQiLCJzaXplIiwiY3JlYXRlU2lnbmF0dXJlRnVuY3Rpb25Gb3JUcmFuc2Zvcm0iLCJzYXZlZFR5cGUiLCJoYXNDdXN0b21Ib29rcyIsImRpZENvbGxlY3RIb29rcyIsIm93bk5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9fcHJvdG9fXyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIk1BWUJFX0lURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIm1heWJlSXRlcmF0b3IiLCJSZWFjdFNoYXJlZEludGVybmFscyIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiZm9ybWF0IiwiX2xlbjIiLCJhcmdzIiwiX2tleTIiLCJwcmludFdhcm5pbmciLCJsZXZlbCIsIlJlYWN0RGVidWdDdXJyZW50RnJhbWUiLCJzdGFjayIsImdldFN0YWNrQWRkZW5kdW0iLCJjb25jYXQiLCJhcmdzV2l0aEZvcm1hdCIsIml0ZW0iLCJTdHJpbmciLCJ1bnNoaWZ0IiwiZW5hYmxlU2NvcGVBUEkiLCJlbmFibGVDYWNoZUVsZW1lbnQiLCJlbmFibGVUcmFuc2l0aW9uVHJhY2luZyIsImVuYWJsZUxlZ2FjeUhpZGRlbiIsImVuYWJsZURlYnVnVHJhY2luZyIsIlJFQUNUX01PRFVMRV9SRUZFUkVOQ0UiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCIkJHR5cGVvZiIsImdldE1vZHVsZUlkIiwiZ2V0V3JhcHBlZE5hbWUiLCJvdXRlclR5cGUiLCJpbm5lclR5cGUiLCJ3cmFwcGVyTmFtZSIsImZ1bmN0aW9uTmFtZSIsImdldENvbnRleHROYW1lIiwiZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlIiwidGFnIiwiY29udGV4dCIsInByb3ZpZGVyIiwiX2NvbnRleHQiLCJvdXRlck5hbWUiLCJsYXp5Q29tcG9uZW50IiwicGF5bG9hZCIsIl9wYXlsb2FkIiwiaW5pdCIsIl9pbml0IiwieCIsImFzc2lnbiIsImRpc2FibGVkRGVwdGgiLCJwcmV2TG9nIiwicHJldkluZm8iLCJwcmV2V2FybiIsInByZXZFcnJvciIsInByZXZHcm91cCIsInByZXZHcm91cENvbGxhcHNlZCIsInByZXZHcm91cEVuZCIsImRpc2FibGVkTG9nIiwiX19yZWFjdERpc2FibGVkTG9nIiwiZGlzYWJsZUxvZ3MiLCJsb2ciLCJpbmZvIiwiZ3JvdXAiLCJncm91cENvbGxhcHNlZCIsImdyb3VwRW5kIiwicHJvcHMiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicmVlbmFibGVMb2dzIiwiUmVhY3RDdXJyZW50RGlzcGF0Y2hlciIsInByZWZpeCIsImRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lIiwic291cmNlIiwib3duZXJGbiIsInRyaW0iLCJyZWVudHJ5IiwiY29tcG9uZW50RnJhbWVDYWNoZSIsImRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUiLCJmbiIsImNvbnN0cnVjdCIsImZyYW1lIiwiY29udHJvbCIsInByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UiLCJwcmVwYXJlU3RhY2tUcmFjZSIsInByZXZpb3VzRGlzcGF0Y2hlciIsIkZha2UiLCJkZWZpbmVQcm9wZXJ0eSIsIlJlZmxlY3QiLCJzYW1wbGUiLCJzYW1wbGVMaW5lcyIsImNvbnRyb2xMaW5lcyIsInMiLCJfZnJhbWUiLCJzeW50aGV0aWNGcmFtZSIsImRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSIsInNob3VsZENvbnN0cnVjdCIsIkNvbXBvbmVudCIsImRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFViIsImhhc093blByb3BlcnR5IiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQiLCJvd25lciIsIl9vd25lciIsIl9zb3VyY2UiLCJzZXRFeHRyYVN0YWNrRnJhbWUiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiY29tcG9uZW50TmFtZSIsImJpbmQiLCJ0eXBlU3BlY05hbWUiLCJlcnJvciQxIiwiZXgiLCJpc0FycmF5SW1wbCIsImlzQXJyYXkiLCJhIiwidHlwZU5hbWUiLCJoYXNUb1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiY29uc3RydWN0b3IiLCJ3aWxsQ29lcmNpb25UaHJvdyIsInRlc3RTdHJpbmdDb2VyY2lvbiIsImNoZWNrS2V5U3RyaW5nQ29lcmNpb24iLCJSZWFjdEN1cnJlbnRPd25lciIsIlJFU0VSVkVEX1BST1BTIiwicmVmIiwiX19zZWxmIiwiX19zb3VyY2UiLCJzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biIsInNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duIiwiZGlkV2FybkFib3V0U3RyaW5nUmVmcyIsImhhc1ZhbGlkUmVmIiwiY29uZmlnIiwiZ2V0dGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNSZWFjdFdhcm5pbmciLCJoYXNWYWxpZEtleSIsIndhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZCIsInN0YXRlTm9kZSIsImRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nS2V5IiwiZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdSZWYiLCJSZWFjdEVsZW1lbnQiLCJfc3RvcmUiLCJtYXliZUtleSIsImRlZmF1bHRQcm9wcyIsIlJlYWN0Q3VycmVudE93bmVyJDEiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEiLCJzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxIiwicHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24iLCJpc1ZhbGlkRWxlbWVudCIsImdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSIsImdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtIiwib3duZXJIYXNLZXlVc2VXYXJuaW5nIiwiZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyIsInBhcmVudFR5cGUiLCJwYXJlbnROYW1lIiwidmFsaWRhdGVFeHBsaWNpdEtleSIsInZhbGlkYXRlZCIsImN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJjaGlsZE93bmVyIiwidmFsaWRhdGVDaGlsZEtleXMiLCJub2RlIiwiY2hpbGQiLCJpdGVyYXRvckZuIiwiZW50cmllcyIsInN0ZXAiLCJuZXh0IiwiZG9uZSIsInZhbGlkYXRlUHJvcFR5cGVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiX25hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJpc1JlYWN0Q2xhc3NBcHByb3ZlZCIsInZhbGlkYXRlRnJhZ21lbnRQcm9wcyIsImZyYWdtZW50IiwianN4V2l0aFZhbGlkYXRpb24iLCJpc1N0YXRpY0NoaWxkcmVuIiwidmFsaWRUeXBlIiwic291cmNlSW5mbyIsInR5cGVTdHJpbmciLCJqc3hERVYkMSIsIkZyYWdtZW50Iiwic2FmZVRoaXMiLCJSZWZyZXNoUnVudGltZSIsIiRSZWZyZXNoSW5qZWN0ZWQkIiwiX19yZWFjdF9yZWZyZXNoX2xpYnJhcnlfXyIsInBhcmVudCIsImlzQ2FsbGFibGUiLCJ0cnlUb1N0cmluZyIsIiRUeXBlRXJyb3IiLCJUeXBlRXJyb3IiLCJhcmd1bWVudCIsImlzT2JqZWN0IiwiJFN0cmluZyIsInVuY3VycnlUaGlzIiwic3RyaW5nU2xpY2UiLCJpdCIsIkRFU0NSSVBUT1JTIiwiZGVmaW5lUHJvcGVydHlNb2R1bGUiLCJjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IiLCJmIiwiYml0bWFwIiwiZmFpbHMiLCJkb2N1bWVudEFsbCIsImFsbCIsIklTX0hUTUxEREEiLCJFWElTVFMiLCJjcmVhdGVFbGVtZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiRGVubyIsInZlcnNpb25zIiwidmVyc2lvbiIsInY4IiwiaXNGb3JjZWQiLCJwYXRoIiwiY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5IiwiaGFzT3duIiwid3JhcENvbnN0cnVjdG9yIiwiTmF0aXZlQ29uc3RydWN0b3IiLCJXcmFwcGVyIiwiYiIsIm9wdGlvbnMiLCJUQVJHRVQiLCJ0YXJnZXQiLCJHTE9CQUwiLCJTVEFUSUMiLCJzdGF0IiwiUFJPVE8iLCJwcm90byIsIm5hdGl2ZVNvdXJjZSIsInRhcmdldFByb3RvdHlwZSIsIkZPUkNFRCIsIlVTRV9OQVRJVkUiLCJWSVJUVUFMX1BST1RPVFlQRSIsInNvdXJjZVByb3BlcnR5IiwidGFyZ2V0UHJvcGVydHkiLCJuYXRpdmVQcm9wZXJ0eSIsInJlc3VsdFByb3BlcnR5IiwiZGVzY3JpcHRvciIsImZvcmNlZCIsImRvbnRDYWxsR2V0U2V0Iiwid3JhcCIsInNoYW0iLCJyZWFsIiwiZXhlYyIsIk5BVElWRV9CSU5EIiwiRnVuY3Rpb25Qcm90b3R5cGUiLCJhQ2FsbGFibGUiLCJ0aGF0IiwiY2xhc3NvZlJhdyIsInVuY3VycnlUaGlzV2l0aEJpbmQiLCJhRnVuY3Rpb24iLCJ2YXJpYWJsZSIsIm5hbWVzcGFjZSIsIm1ldGhvZCIsImlzTnVsbE9yVW5kZWZpbmVkIiwiViIsIlAiLCJmdW5jIiwiY2hlY2siLCJNYXRoIiwiZ2xvYmFsVGhpcyIsInRvT2JqZWN0IiwiY2xhc3NvZiIsIiRPYmplY3QiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIiRkb2N1bWVudEFsbCIsInJlcGxhY2VtZW50IiwiZmVhdHVyZSIsImRldGVjdGlvbiIsIm5vcm1hbGl6ZSIsIlBPTFlGSUxMIiwiTkFUSVZFIiwiZ2V0QnVpbHRJbiIsImlzUHJvdG90eXBlT2YiLCJVU0VfU1lNQk9MX0FTX1VJRCIsIiRTeW1ib2wiLCJJRThfRE9NX0RFRklORSIsIlY4X1BST1RPVFlQRV9ERUZJTkVfQlVHIiwiYW5PYmplY3QiLCJ0b1Byb3BlcnR5S2V5IiwiJGRlZmluZVByb3BlcnR5IiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIkVOVU1FUkFCTEUiLCJDT05GSUdVUkFCTEUiLCJXUklUQUJMRSIsIk8iLCJBdHRyaWJ1dGVzIiwicHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUiLCJ0b0luZGV4ZWRPYmplY3QiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJOQVNIT1JOX0JVRyIsImlucHV0IiwicHJlZiIsInZhbCIsInZhbHVlT2YiLCJkZWZpbmVHbG9iYWxQcm9wZXJ0eSIsIlNIQVJFRCIsInN0b3JlIiwiSVNfUFVSRSIsIm1vZGUiLCJjb3B5cmlnaHQiLCJsaWNlbnNlIiwiVjhfVkVSU0lPTiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbCIsIkluZGV4ZWRPYmplY3QiLCJyZXF1aXJlT2JqZWN0Q29lcmNpYmxlIiwiZ2V0TWV0aG9kIiwib3JkaW5hcnlUb1ByaW1pdGl2ZSIsIndlbGxLbm93blN5bWJvbCIsIlRPX1BSSU1JVElWRSIsImV4b3RpY1RvUHJpbSIsInRvUHJpbWl0aXZlIiwicG9zdGZpeCIsInJhbmRvbSIsIk5BVElWRV9TWU1CT0wiLCJzaGFyZWQiLCJ1aWQiLCJXZWxsS25vd25TeW1ib2xzU3RvcmUiLCJjcmVhdGVXZWxsS25vd25TeW1ib2wiLCJ3aXRob3V0U2V0dGVyIiwiJCJdLCJzb3VyY2VSb290IjoiIn0=