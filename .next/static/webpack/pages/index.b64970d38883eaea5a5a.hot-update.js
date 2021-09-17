"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/wheelComponent.js":
/*!*********************************!*\
  !*** ./pages/wheelComponent.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_assets_wheel_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/assets/wheel.png */ \"./styles/assets/wheel.png\");\n/* harmony import */ var _styles_assets_marker_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/assets/marker.png */ \"./styles/assets/marker.png\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.esm.js\");\n/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-ease */ \"./node_modules/d3-ease/src/index.js\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http */ \"./node_modules/stream-http/index.js\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/levi/wheel_latest/client/pages/wheelComponent.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction WheelComponent() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var animations = (0,react_spring__WEBPACK_IMPORTED_MODULE_5__.useSpring)(show ? {\n    from: {\n      rotateZ: 0\n    },\n    to: {\n      rotateZ: 3500\n    },\n    config: {\n      duration: 10000,\n      easing: d3_ease__WEBPACK_IMPORTED_MODULE_8__.easeQuadOut\n    }\n  } : {});\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Box, {\n      direction: \"column\",\n      gap: \"medium\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Box, {\n        height: \"medium\",\n        width: \"medium\",\n        margin: \"0px\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Stack, {\n          anchor: \"top\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_5__.animated.div, {\n            style: _objectSpread({\n              width: 470,\n              height: 470,\n              backgroundColor: \"#46e891\",\n              borderRadius: 16\n            }, animations),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              className: \"wheel\",\n              height: \"470px\",\n              width: \"470px\",\n              src: _styles_assets_wheel_png__WEBPACK_IMPORTED_MODULE_2__.default\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Box, {\n            height: \"100px\",\n            width: \"40px\",\n            margin: {\n              top: \"-20px\"\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              className: \"marker\",\n              fit: \"cover\",\n              src: _styles_assets_marker_png__WEBPACK_IMPORTED_MODULE_3__.default\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Button, {\n        alignSelf: \"center\",\n        secondary: true,\n        type: \"submit\",\n        label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_9__.Text, {\n          align: \"center\",\n          size: \"xlarge\",\n          color: \"#fff\",\n          children: \"Spin!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, this),\n        color: \"#9933FF\",\n        onClick: function onClick() {\n          setShow(function (show) {\n            return !show;\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(WheelComponent, \"YuqFlJcPzS8H4zEIjY18LfysiiI=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_5__.useSpring];\n});\n\n_c = WheelComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"WheelComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2hlZWxDb21wb25lbnQuanM/Y2UwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2hlZWxJbWcgZnJvbSBcIi4uL3N0eWxlcy9hc3NldHMvd2hlZWwucG5nXCI7XG5pbXBvcnQgbWFya2VySW1nIGZyb20gXCIuLi9zdHlsZXMvYXNzZXRzL21hcmtlci5wbmdcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBTdGFjayB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQsIENvbnRyb2xsZXIgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgKiBhcyBlYXNpbmdzIGZyb20gXCJkMy1lYXNlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2xpZW50UmVxdWVzdCB9IGZyb20gXCJodHRwXCI7XG5cbmZ1bmN0aW9uIFdoZWVsQ29tcG9uZW50KCkge1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGFuaW1hdGlvbnMgPSB1c2VTcHJpbmcoXG4gICAgc2hvd1xuICAgICAgPyB7XG4gICAgICAgICAgZnJvbTogeyByb3RhdGVaOiAwIH0sXG4gICAgICAgICAgdG86IHsgcm90YXRlWjogMzUwMCB9LFxuICAgICAgICAgIGNvbmZpZzogeyBkdXJhdGlvbjogMTAwMDAsIGVhc2luZzogZWFzaW5ncy5lYXNlUXVhZE91dCB9LFxuICAgICAgICB9XG4gICAgICA6IHt9XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBkaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJtZWRpdW1cIj5cbiAgICAgICAgPEJveCBoZWlnaHQ9XCJtZWRpdW1cIiB3aWR0aD1cIm1lZGl1bVwiIG1hcmdpbj1cIjBweFwiPlxuICAgICAgICAgIDxTdGFjayBhbmNob3I9XCJ0b3BcIj5cbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDcwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDcwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNDZlODkxXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgICAgICAgICAuLi5hbmltYXRpb25zLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aGVlbFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDcwcHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNDcwcHhcIlxuICAgICAgICAgICAgICAgIHNyYz17d2hlZWxJbWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cblxuICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIxMDBweFwiIHdpZHRoPVwiNDBweFwiIG1hcmdpbj17eyB0b3A6IFwiLTIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cIm1hcmtlclwiIGZpdD1cImNvdmVyXCIgc3JjPXttYXJrZXJJbWd9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiXG4gICAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgPFRleHQgYWxpZ249XCJjZW50ZXJcIiBzaXplPVwieGxhcmdlXCIgY29sb3I9XCIjZmZmXCI+XG4gICAgICAgICAgICAgIFNwaW4hXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbG9yPVwiIzk5MzNGRlwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvdygoc2hvdykgPT4gIXNob3cpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2hlZWxDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ3aGVlbEltZyIsIm1hcmtlckltZyIsIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJTdGFjayIsIkltYWdlIiwidXNlU3ByaW5nIiwiYW5pbWF0ZWQiLCJDb250cm9sbGVyIiwiZWFzaW5ncyIsInVzZVN0YXRlIiwiQ2xpZW50UmVxdWVzdCIsIldoZWVsQ29tcG9uZW50Iiwic2hvdyIsInNldFNob3ciLCJhbmltYXRpb25zIiwiZnJvbSIsInJvdGF0ZVoiLCJ0byIsImNvbmZpZyIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZWFzZVF1YWRPdXQiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/wheelComponent.js\n");

/***/ })

});