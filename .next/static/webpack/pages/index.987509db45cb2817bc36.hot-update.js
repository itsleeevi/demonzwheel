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

/***/ "./pages/placeBet.js":
/*!***************************!*\
  !*** ./pages/placeBet.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PlaceBet; }\n/* harmony export */ });\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wheelComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wheelComponent */ \"./pages/wheelComponent.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/levi/wheel_latest/client/pages/placeBet.js\";\n\n\n\n\n\nfunction PlaceBet(props) {\n  var suggestionsBet = [\"1k $LLTH\", \"10k $LLTH\", \"100k $LLTH\"];\n\n  var onSuggestionSelectBet = function onSuggestionSelectBet(event) {\n    switch (event.suggestion) {\n      case \"1k $LLTH\":\n        props.setValueBet(1000);\n        break;\n\n      case \"10k $LLTH\":\n        props.setValueBet(10000);\n        break;\n\n      case \"100k $LLTH\":\n        props.setValueBet(100000);\n        break;\n\n      default:\n        props.setValueBet(\"\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    direction: \"column\",\n    animation: {\n      type: \"zoomIn\",\n      duration: 500,\n      size: \"xlarge\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n      name: \"betAmount\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n        required: true,\n        suggestions: suggestionsBet,\n        onSuggestionSelect: onSuggestionSelectBet,\n        size: \"small\",\n        name: \"betAmount\",\n        placeholder: \"Bet Amount\",\n        value: props.valueBet,\n        onChange: function onChange(event) {\n          return props.setValueBet(event.target.value);\n        },\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Text, {\n          color: \"#9933FF\",\n          size: \"medium\",\n          children: \"$LLTH\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, this),\n        reverse: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n      name: \"autoCashOut\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.RangeInput, {\n        min: \"2\",\n        max: \"13\",\n        value: props.multiplier,\n        onChange: function onChange(value) {\n          props.setMultiplier(value.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n        color: \"#fff\",\n        textAlign: \"center\",\n        children: props.multiplier + \"x\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Button, {\n      alignSelf: \"center\",\n      secondary: true,\n      type: \"submit\",\n      label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Text, {\n        align: \"center\",\n        size: \"xlarge\",\n        color: \"#fff\",\n        children: \"PLACE BET\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }, this),\n      color: \"#9933FF\",\n      onClick: function onClick() {\n        return props.placeBet();\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n_c = PlaceBet;\n\nvar _c;\n\n$RefreshReg$(_c, \"PlaceBet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FUUjtBQVVFLGFBQU8sRUFBRTtBQUFBLGVBQU1aLEtBQUssQ0FBQ2MsUUFBTixFQUFOO0FBQUE7QUFWWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUREO0tBdEV1QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxhY2VCZXQuanM/NTFhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIFJhbmdlSW5wdXQsXG4gIEJ1dHRvbixcbiAgVGV4dElucHV0LFxuICBGb3JtRmllbGQsXG4gIFRleHQsXG4gIEhlYWRpbmcsXG59IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFdoZWVsQ29tcG9uZW50IGZyb20gXCIuL3doZWVsQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYWNlQmV0KHByb3BzKSB7XG4gIGNvbnN0IHN1Z2dlc3Rpb25zQmV0ID0gW1wiMWsgJExMVEhcIiwgXCIxMGsgJExMVEhcIiwgXCIxMDBrICRMTFRIXCJdO1xuXG4gIGNvbnN0IG9uU3VnZ2VzdGlvblNlbGVjdEJldCA9IChldmVudCkgPT4ge1xuICAgIHN3aXRjaCAoZXZlbnQuc3VnZ2VzdGlvbikge1xuICAgICAgY2FzZSBcIjFrICRMTFRIXCI6XG4gICAgICAgIHByb3BzLnNldFZhbHVlQmV0KDEwMDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIxMGsgJExMVEhcIjpcbiAgICAgICAgcHJvcHMuc2V0VmFsdWVCZXQoMTAwMDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIxMDBrICRMTFRIXCI6XG4gICAgICAgIHByb3BzLnNldFZhbHVlQmV0KDEwMDAwMCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcHJvcHMuc2V0VmFsdWVCZXQoXCJcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgIGFuaW1hdGlvbj17eyB0eXBlOiBcInpvb21JblwiLCBkdXJhdGlvbjogNTAwLCBzaXplOiBcInhsYXJnZVwiIH19XG4gICAgPlxuICAgICAgPEZvcm1GaWVsZCBuYW1lPVwiYmV0QW1vdW50XCI+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICBzdWdnZXN0aW9ucz17c3VnZ2VzdGlvbnNCZXR9XG4gICAgICAgICAgb25TdWdnZXN0aW9uU2VsZWN0PXtvblN1Z2dlc3Rpb25TZWxlY3RCZXR9XG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBuYW1lPVwiYmV0QW1vdW50XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJldCBBbW91bnRcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZUJldH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBwcm9wcy5zZXRWYWx1ZUJldChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgPFRleHQgY29sb3I9XCIjOTkzM0ZGXCIgc2l6ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAkTExUSFxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIH1cbiAgICAgICAgICByZXZlcnNlXG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICAgIDxGb3JtRmllbGQgbmFtZT1cImF1dG9DYXNoT3V0XCI+XG4gICAgICAgIDxSYW5nZUlucHV0XG4gICAgICAgICAgbWluPVwiMlwiXG4gICAgICAgICAgbWF4PVwiMTNcIlxuICAgICAgICAgIHZhbHVlPXtwcm9wcy5tdWx0aXBsaWVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHByb3BzLnNldE11bHRpcGxpZXIodmFsdWUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8SGVhZGluZyBjb2xvcj1cIiNmZmZcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICB7cHJvcHMubXVsdGlwbGllciArIFwieFwifVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICA8L0Zvcm1GaWVsZD5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICBhbGlnblNlbGY9XCJjZW50ZXJcIlxuICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGxhYmVsPXtcbiAgICAgICAgICA8VGV4dCBhbGlnbj1cImNlbnRlclwiIHNpemU9XCJ4bGFyZ2VcIiBjb2xvcj1cIiNmZmZcIj5cbiAgICAgICAgICAgIFBMQUNFIEJFVFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgfVxuICAgICAgICBjb2xvcj1cIiM5OTMzRkZcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5wbGFjZUJldCgpfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJSYW5nZUlucHV0IiwiQnV0dG9uIiwiVGV4dElucHV0IiwiRm9ybUZpZWxkIiwiVGV4dCIsIkhlYWRpbmciLCJSZWFjdCIsIldoZWVsQ29tcG9uZW50IiwiUGxhY2VCZXQiLCJwcm9wcyIsInN1Z2dlc3Rpb25zQmV0Iiwib25TdWdnZXN0aW9uU2VsZWN0QmV0IiwiZXZlbnQiLCJzdWdnZXN0aW9uIiwic2V0VmFsdWVCZXQiLCJ0eXBlIiwiZHVyYXRpb24iLCJzaXplIiwidmFsdWVCZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm11bHRpcGxpZXIiLCJzZXRNdWx0aXBsaWVyIiwicGxhY2VCZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/placeBet.js\n");

/***/ })

});