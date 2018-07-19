module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./elements/Container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_breakpoints__ = __webpack_require__("./utils/breakpoints.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "Container",
  componentId: "s7hrber-0"
})(["max-width:32rem;margin:0 auto;flex:1;min-height:100vh;display:flex;justify-content:center;flex-direction:column;", ""], __WEBPACK_IMPORTED_MODULE_1__utils_breakpoints__["a" /* media */].mobile(_templateObject));
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./elements/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_breakpoints__ = __webpack_require__("./utils/breakpoints.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  text-align: unset;\n  /* padding: 1rem 0; */\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Footer = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.footer.withConfig({
  displayName: "Footer",
  componentId: "s9di5y0-0"
})(["font-size:80%;text-align:left;padding:1rem 0;", ""], __WEBPACK_IMPORTED_MODULE_1__utils_breakpoints__["a" /* media */].mobile(_templateObject));
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./elements/H1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var H1 = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.h1.withConfig({
  displayName: "H1",
  componentId: "s5qxo0z-0"
})(["font-size:1.25rem;line-height:1.5;text-align:left;position:relative;&:after{content:'';position:absolute;bottom:-1.5rem;left:0;right:0;width:25%;height:1px;background:rgba(255,255,255,.2);}"]);
/* harmony default export */ __webpack_exports__["a"] = (H1);

/***/ }),

/***/ "./elements/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var Header = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.header.withConfig({
  displayName: "Header",
  componentId: "t9fp7m-0"
})(["margin-bottom:1rem;"]);
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./elements/Image.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var Image = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: "Image",
  componentId: "s140cfhr-0"
})(["display:flex;width:100%;height:auto;margin:2rem 0;flex:0;"]);
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "./elements/Item.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_breakpoints__ = __webpack_require__("./utils/breakpoints.js");
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: block;\n  "]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Item = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.span.withConfig({
  displayName: "Item",
  componentId: "s1726pyt-0"
})(["", ""], __WEBPACK_IMPORTED_MODULE_1__utils_breakpoints__["a" /* media */].mobile(_templateObject));
/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),

/***/ "./elements/Link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_is__ = __webpack_require__("styled-is");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_is___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_is__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: block;\n  width: 4rem;\n  height: 4rem;\n  margin: 2.5rem auto;\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Link = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.a.withConfig({
  displayName: "Link",
  componentId: "etsl5a-0"
})(["color:var(--green);text-decoration:none;transition:150 ms color;&:hover{color:var(--green);}", ""], __WEBPACK_IMPORTED_MODULE_1_styled_is___default()('logoLink')(_templateObject));
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ "./elements/Main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var Main = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.main.withConfig({
  displayName: "Main",
  componentId: "y2f9py-0"
})(["position:relative;"]);
/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ "./elements/SVG/Logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/eugeneross/Sites/join-dev-design-er/elements/SVG/Logo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Logo =
/*#__PURE__*/
function (_Component) {
  _inherits(Logo, _Component);

  function Logo(props) {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).call(this, props));
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
        width: 112,
        height: 112,
        fill: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Path, {
        d: "M53.831 4.337H4.337v49.494h49.494V4.337z",
        fill: "#F35325",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Path, {
        d: "M107.663 4.337H58.169v49.494h49.494V4.337z",
        fill: "#81BC06",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Path, {
        d: "M53.831 58.169H4.337v49.494h49.494V58.169z",
        fill: "#05A6F0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Path, {
        d: "M107.663 58.169H58.169v49.494h49.494V58.169z",
        fill: "#FFBA08",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }));
    }
  }]);

  return Logo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
var pushPull1 = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(["0%{transform:translate(-.25rem,-.25rem);}50%{transform:translate(0,0);}100%{transform:translate(-.25rem,-.25rem);}"]);
var pushPull2 = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(["0%{transform:translate(.25rem,-.25rem);}50%{transform:translate(0,0);}100%{transform:translate(.25rem,-.25rem);}"]);
var pushPull3 = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(["0%{transform:translate(-.25rem,.25rem);}50%{transform:translate(0,0);}100%{transform:translate(-.25rem,.25rem);}"]);
var pushPull4 = Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"])(["0%{transform:translate(.25rem,.25rem);}50%{transform:translate(0,0);}100%{transform:translate(.25rem,.25rem);}"]);
var Path = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.path.withConfig({
  displayName: "Logo__Path",
  componentId: "s1yqoifs-0"
})(["&:first-child{animation:", " 3s cubic-bezier(0.25,0.46,0.45,0.94) infinite;animation-delay:.1s;}&:nth-child(2){animation:", " 3s cubic-bezier(0.25,0.46,0.45,0.94) infinite;animation-delay:.3s;}&:nth-child(3){animation:", " 3s cubic-bezier(0.25,0.46,0.45,0.94) infinite;animation-delay:.7s;}&:last-child{animation:", " 3s cubic-bezier(0.25,0.46,0.45,0.94) infinite;animation-delay:.5s;}"], pushPull1, pushPull2, pushPull3, pushPull4);

/***/ }),

/***/ "./elements/Text.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

var Text = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.p.withConfig({
  displayName: "Text",
  componentId: "s4yk9uk-0"
})([""]);
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),

/***/ "./elements/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container__ = __webpack_require__("./elements/Container.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Footer__ = __webpack_require__("./elements/Footer.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Footer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header__ = __webpack_require__("./elements/Header.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__Header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Image__ = __webpack_require__("./elements/Image.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Item__ = __webpack_require__("./elements/Item.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__Item__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__("./elements/Link.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Text__ = __webpack_require__("./elements/Text.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__Text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Main__ = __webpack_require__("./elements/Main.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__Main__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__H1__ = __webpack_require__("./elements/H1.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__H1__["a"]; });










/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elements__ = __webpack_require__("./elements/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_SVG_Logo__ = __webpack_require__("./elements/SVG/Logo.js");
var _jsxFileName = "/Users/eugeneross/Sites/join-dev-design-er/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Libraries




var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["a" /* Container */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["d" /* Header */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["e" /* Image */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["g" /* Link */], {
        href: "https://microsoft.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__elements_SVG_Logo__["a" /* Logo */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["c" /* H1 */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Microsoft is looking for designers who code to help create the most compelling developer tools & services on the planet.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["h" /* Main */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["i" /* Text */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "We have open positions for technical product designers & design leaders in San Francisco, Seattle, and elsewhere."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["i" /* Text */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "We use PCs, Macs, Figma, Sketch, GitHub, JavaScript, ZEIT, and other modern tools to design, prototype, and build the future of software development."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["i" /* Text */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "We believe in diversity, openness, and building delightful tools that empower every person and organization to achieve more."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["i" /* Text */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Interested? Send a PR with any improvement to ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["g" /* Link */], {
        href: "https://github.com/Microsoft/join-dev-design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "microsoft/join-dev-design"), " or ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["g" /* Link */], {
        href: "mailto:dasiege@microsoft.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "email us"), ".")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["b" /* Footer */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["f" /* Item */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Designed in ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["g" /* Link */], {
        href: "https://figma.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, "Figma"), ". "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["f" /* Item */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Built in ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["g" /* Link */], {
        href: "https://code.visualstudio.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Code"), ". "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["f" /* Item */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Open source on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__elements__["g" /* Link */], {
        href: "https://github.com/Microsoft/join-dev-design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "GitHub"), ".")));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./utils/breakpoints.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return media; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styled_media_queries__ = __webpack_require__("./utils/styled-media-queries.js");

var breakpoint = {
  mobile: 40
};
var media = {
  mobile: Object(__WEBPACK_IMPORTED_MODULE_0__styled_media_queries__["a" /* mediaQuery */])("(max-width: ".concat(breakpoint.mobile, "em)"))
};

/***/ }),

/***/ "./utils/styled-media-queries.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mediaQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);

/**
 * For the specified media query, returns a tag function that can be used to
 * automatically wrap the tagged template literal in its media query.
 *
 * @param {string} query The string or template literal containing the media
 *   query features.
 */

var mediaQuery = function mediaQuery() {
  for (var _len = arguments.length, query = new Array(_len), _key = 0; _key < _len; _key++) {
    query[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, rules = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      rules[_key2] = arguments[_key2];
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(["@media ", "{", ";}"], Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(["", ""], query), Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(["", ""], rules));
  };
};



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-is":
/***/ (function(module, exports) {

module.exports = require("styled-is");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map