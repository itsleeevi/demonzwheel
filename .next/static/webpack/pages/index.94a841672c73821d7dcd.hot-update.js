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

/***/ "./pages/resultModal.js":
/*!******************************!*\
  !*** ./pages/resultModal.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_assets_demonzface_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/assets/demonzface.png */ \"./styles/assets/demonzface.png\");\n/* harmony import */ var _styles_assets_demonzface_b_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/assets/demonzface_b.png */ \"./styles/assets/demonzface_b.png\");\n/* harmony import */ var _styles_assets_won_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/assets/won.png */ \"./styles/assets/won.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/levi/wheel_latest/client/pages/resultModal.js\",\n    _templateObject;\n\n\n\n\n\n\n\n\n\n\nvar ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject || (_templateObject = (0,_home_levi_wheel_latest_client_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([\"\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  backdrop-filter: blur(5px);\\n\"])));\n_c = ModalContainer;\n\nfunction ResultModal(props) {\n  var newGame = function newGame() {\n    props.setValueBet(undefined);\n    props.setMultiplier(2);\n    props.setWinningMultiplier(undefined);\n    props.setPlacedBet(false);\n    props.setTxStarted(false);\n    props.setIsEnded(false);\n    props.setWon(false);\n    props.setReset(!props.reset);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ModalContainer, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Box, {\n      height: \"medium\",\n      width: \"medium\",\n      pad: \"medium\",\n      background: \"#000\",\n      justify: \"center\",\n      animation: {\n        type: \"fadeIn\",\n        duration: 750,\n        size: \"xlarge\"\n      },\n      children: !props.won ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        direction: \"column\",\n        gap: \"medium\",\n        align: \"center\",\n        animation: {\n          type: \"zoomIn\",\n          duration: 500,\n          size: \"xlarge\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Text, {\n          textAlign: \"center\",\n          size: \"xxlarge\",\n          children: \"YOU LOST!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: \"wheel\",\n          height: \"100px\",\n          width: \"100px\",\n          src: _styles_assets_demonzface_b_png__WEBPACK_IMPORTED_MODULE_3__.default\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Text, {\n          textAlign: \"center\",\n          size: \"medium\",\n          children: \"TRY AGAIN!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Button, {\n          alignSelf: \"center\",\n          secondary: true,\n          type: \"submit\",\n          label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Text, {\n            align: \"center\",\n            size: \"large\",\n            color: \"#fff\",\n            children: \"NEW GAME\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 17\n          }, this),\n          color: \"#9933FF\",\n          onClick: function onClick() {\n            return newGame();\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        direction: \"column\",\n        gap: \"medium\",\n        align: \"center\",\n        animation: {\n          type: \"zoomIn\",\n          duration: 500,\n          size: \"xlarge\"\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Text, {\n          textAlign: \"center\",\n          size: \"xxlarge\",\n          children: \"YOU WON!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n          className: \"wheel\",\n          height: \"100px\",\n          width: \"100px\",\n          src: _styles_assets_won_png__WEBPACK_IMPORTED_MODULE_4__.default\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Text, {\n          size: \"large\",\n          children: [props.valueBet * props.winningMultiplier, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Text, {\n            color: \"#9933FF\",\n            size: \"large\",\n            children: \"$LLTH\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Text, {\n          textAlign: \"center\",\n          size: \"small\",\n          children: \"YOU WILL RECEIVE YOUR PRIZE WITHIN A FEW SECONDS.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 13\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Button, {\n          alignSelf: \"center\",\n          secondary: true,\n          type: \"submit\",\n          label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_8__.Text, {\n            align: \"center\",\n            size: \"large\",\n            color: \"#fff\",\n            children: \"NEW GAME\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 17\n          }, this),\n          color: \"#9933FF\",\n          onClick: function onClick() {\n            return newGame();\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n\n_c2 = ResultModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultModal);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ModalContainer\");\n$RefreshReg$(_c2, \"ResultModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBVFI7QUFVRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1mLE9BQU8sRUFBYjtBQUFBO0FBVlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQ7O01BL0ZRRjtBQWlHVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXN1bHRNb2RhbC5qcz82NzcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkZW1vbnpmYWNlIGZyb20gXCIuLi9zdHlsZXMvYXNzZXRzL2RlbW9uemZhY2UucG5nXCI7XG5pbXBvcnQgZGVtb256ZmFjZV9iIGZyb20gXCIuLi9zdHlsZXMvYXNzZXRzL2RlbW9uemZhY2VfYi5wbmdcIjtcbmltcG9ydCB3b24gZnJvbSBcIi4uL3N0eWxlcy9hc3NldHMvd29uLnBuZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBNb2RhbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuYDtcblxuZnVuY3Rpb24gUmVzdWx0TW9kYWwocHJvcHMpIHtcbiAgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICBwcm9wcy5zZXRWYWx1ZUJldCh1bmRlZmluZWQpO1xuICAgIHByb3BzLnNldE11bHRpcGxpZXIoMik7XG4gICAgcHJvcHMuc2V0V2lubmluZ011bHRpcGxpZXIodW5kZWZpbmVkKTtcbiAgICBwcm9wcy5zZXRQbGFjZWRCZXQoZmFsc2UpO1xuICAgIHByb3BzLnNldFR4U3RhcnRlZChmYWxzZSk7XG4gICAgcHJvcHMuc2V0SXNFbmRlZChmYWxzZSk7XG4gICAgcHJvcHMuc2V0V29uKGZhbHNlKTtcbiAgICBwcm9wcy5zZXRSZXNldCghcHJvcHMucmVzZXQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsQ29udGFpbmVyPlxuICAgICAgPEJveFxuICAgICAgICBoZWlnaHQ9XCJtZWRpdW1cIlxuICAgICAgICB3aWR0aD1cIm1lZGl1bVwiXG4gICAgICAgIHBhZD1cIm1lZGl1bVwiXG4gICAgICAgIGJhY2tncm91bmQ9XCIjMDAwXCJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgIGFuaW1hdGlvbj17eyB0eXBlOiBcImZhZGVJblwiLCBkdXJhdGlvbjogNzUwLCBzaXplOiBcInhsYXJnZVwiIH19XG4gICAgICA+XG4gICAgICAgIHshcHJvcHMud29uID8gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICBnYXA9XCJtZWRpdW1cIlxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgYW5pbWF0aW9uPXt7IHR5cGU6IFwiem9vbUluXCIsIGR1cmF0aW9uOiA1MDAsIHNpemU6IFwieGxhcmdlXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBzaXplPVwieHhsYXJnZVwiPlxuICAgICAgICAgICAgICBZT1UgTE9TVCFcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aGVlbFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDBweFwiXG4gICAgICAgICAgICAgIHNyYz17ZGVtb256ZmFjZV9ifVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCIgc2l6ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICBUUlkgQUdBSU4hXG4gICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgYWxpZ25TZWxmPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgPFRleHQgYWxpZ249XCJjZW50ZXJcIiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cIiNmZmZcIj5cbiAgICAgICAgICAgICAgICAgIE5FVyBHQU1FXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbG9yPVwiIzk5MzNGRlwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5ld0dhbWUoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGdhcD1cIm1lZGl1bVwiXG4gICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBhbmltYXRpb249e3sgdHlwZTogXCJ6b29tSW5cIiwgZHVyYXRpb246IDUwMCwgc2l6ZTogXCJ4bGFyZ2VcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiIHNpemU9XCJ4eGxhcmdlXCI+XG4gICAgICAgICAgICAgIFlPVSBXT04hXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwid2hlZWxcIiBoZWlnaHQ9XCIxMDBweFwiIHdpZHRoPVwiMTAwcHhcIiBzcmM9e3dvbn0gLz5cblxuICAgICAgICAgICAgPFRleHQgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgIHtwcm9wcy52YWx1ZUJldCAqIHByb3BzLndpbm5pbmdNdWx0aXBsaWVyfXtcIiBcIn1cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCIjOTkzM0ZGXCIgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgICAgICAgICAgJExMVEhcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCIgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgIFlPVSBXSUxMIFJFQ0VJVkUgWU9VUiBQUklaRSBXSVRISU4gQSBGRVcgU0VDT05EUy5cbiAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBhbGlnblNlbGY9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICA8VGV4dCBhbGlnbj1cImNlbnRlclwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPVwiI2ZmZlwiPlxuICAgICAgICAgICAgICAgICAgTkVXIEdBTUVcbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29sb3I9XCIjOTkzM0ZGXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmV3R2FtZSgpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvTW9kYWxDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdE1vZGFsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiZGVtb256ZmFjZSIsImRlbW9uemZhY2VfYiIsIndvbiIsIkltYWdlIiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsInN0eWxlZCIsImNzcyIsIk1vZGFsQ29udGFpbmVyIiwiZGl2IiwiUmVzdWx0TW9kYWwiLCJwcm9wcyIsIm5ld0dhbWUiLCJzZXRWYWx1ZUJldCIsInVuZGVmaW5lZCIsInNldE11bHRpcGxpZXIiLCJzZXRXaW5uaW5nTXVsdGlwbGllciIsInNldFBsYWNlZEJldCIsInNldFR4U3RhcnRlZCIsInNldElzRW5kZWQiLCJzZXRXb24iLCJzZXRSZXNldCIsInJlc2V0IiwidHlwZSIsImR1cmF0aW9uIiwic2l6ZSIsInZhbHVlQmV0Iiwid2lubmluZ011bHRpcGxpZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/resultModal.js\n");

/***/ })

});