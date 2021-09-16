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

/***/ "./pages/ControlComponent.js":
/*!***********************************!*\
  !*** ./pages/ControlComponent.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet/themes */ \"./node_modules/grommet/themes/index.js\");\n/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet/utils */ \"./node_modules/grommet/utils/index.js\");\n/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grommet_utils__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ConnectMetaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectMetaMask */ \"./pages/ConnectMetaMask.js\");\n/* harmony import */ var _PlaceBet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceBet */ \"./pages/PlaceBet.js\");\n/* harmony import */ var _Const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Const */ \"./pages/Const.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/levi/wheel_latest/client/pages/ControlComponent.js\";\n\n\n\n\n\n\n\n\n\n\n\n\nfunction ControlComponent(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Grommet, {\n    theme: (0,grommet_utils__WEBPACK_IMPORTED_MODULE_6__.deepMerge)(grommet_themes__WEBPACK_IMPORTED_MODULE_7__.grommet, _Const__WEBPACK_IMPORTED_MODULE_3__.customTheme),\n    style: {\n      backgroundColor: \"#140A1F\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Form, {\n      onSubmit: function onSubmit() {\n        props.setValueBet(undefined);\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        direction: \"column\",\n        gap: \"xxsmall\",\n        pad: \"medium\",\n        animation: {\n          type: \"fadeIn\",\n          duration: 390\n        },\n        children: props.connected === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n          children: [props.state === _Const__WEBPACK_IMPORTED_MODULE_3__.State.NOTSTARTED && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            width: \"300px\",\n            height: \"300px\",\n            align: \"center\",\n            justify: \"center\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n              textAlign: \"center\",\n              children: \"Wait until the next round!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 19\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 17\n          }, this), props.state === _Const__WEBPACK_IMPORTED_MODULE_3__.State.BETTING && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_PlaceBet__WEBPACK_IMPORTED_MODULE_2__.default, {\n            valueBet: props.valueBet,\n            setValueBet: props.setValueBet,\n            multiplier: props.multiplier,\n            setMultiplier: props.setMultiplier,\n            connected: props.connected,\n            setConnected: props.setConnected,\n            placeBet: props.placeBet\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 17\n          }, this), props.state === _Const__WEBPACK_IMPORTED_MODULE_3__.State.SPINNING && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            width: \"300px\",\n            height: \"300px\",\n            align: \"center\",\n            justify: \"center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n              children: \"Spinning...\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 19\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n              size: \"xlarge\",\n              color: \"#9832FE\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 19\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 17\n          }, this), props.state === _Const__WEBPACK_IMPORTED_MODULE_3__.State.COMPLETED && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            width: \"300px\",\n            height: \"300px\",\n            align: \"center\",\n            justify: \"center\",\n            children: [props.placedBet === true && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n              children: [props.multiplier === props.winningMultiplier && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                  children: \"You Won!\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 27\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                  size: \"medium\",\n                  children: [\"Your Multiplier: \", props.multiplier]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 27\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                  size: \"medium\",\n                  children: [\" \", \"Winning Multiplier: \", props.winningMultiplier]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 27\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                  size: \"small\",\n                  children: [\" \", \"You'll receive your prize within a few seconds.\"]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 27\n                }, this)]\n              }, void 0, true), props.multiplier !== props.winningMultiplier && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                  children: \"You Lost!\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 27\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                  size: \"medium\",\n                  children: [\"Your Multiplier: \", props.multiplier]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 94,\n                  columnNumber: 27\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                  size: \"medium\",\n                  children: [\"Winning Multiplier: \", props.winningMultiplier]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 27\n                }, this)]\n              }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                gap: \"small\",\n                animation: [{\n                  type: \"zoomOut\"\n                }],\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Button, {\n                  secondary: true,\n                  fill: true,\n                  type: \"submit\",\n                  label: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    align: \"center\",\n                    size: \"xlarge\",\n                    color: \"#fff\",\n                    children: \"SPIN!\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 108,\n                    columnNumber: 29\n                  }, this),\n                  color: \"#9933FF\",\n                  onClick: function onClick() {\n                    return props.placeBet();\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 103,\n                  columnNumber: 25\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 23\n              }, this)]\n            }, void 0, true), props.placedBet === false && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                children: \"You haven't placed bet!\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 120,\n                columnNumber: 23\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                size: \"medium\",\n                children: [\"Winning Multiplier: \", props.winningMultiplier]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 23\n              }, this)]\n            }, void 0, true)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ConnectMetaMask__WEBPACK_IMPORTED_MODULE_1__.default, {\n          connect: props.connect\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_c = ControlComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ControlComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"ControlComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEo7QUFTRSx1QkFBSyxFQUFDLFNBVFI7QUFVRSx5QkFBTyxFQUFFO0FBQUEsMkJBQU1KLEtBQUssQ0FBQ2MsUUFBTixFQUFOO0FBQUE7QUFWWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1QkY7QUFBQSw0QkFQSixFQW1ER2QsS0FBSyxDQUFDaUIsU0FBTixLQUFvQixLQUFwQixpQkFDQztBQUFBLHNDQUNFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUUsOERBQUMseUNBQUQ7QUFBTSxvQkFBSSxFQUFDLFFBQVg7QUFBQSxtREFDdUJqQixLQUFLLENBQUNrQixpQkFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUEsNEJBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQ0o7QUFBQSx3QkFERCxnQkFvR0MsOERBQUMscURBQUQ7QUFBaUIsaUJBQU8sRUFBRWxCLEtBQUssQ0FBQ21CO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExR0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0SEQ7O0tBN0hRcEI7QUErSFQsK0RBQWVBLGdCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbnRyb2xDb21wb25lbnQuanM/ODE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZvcm0sIFRleHQsIEhlYWRpbmcsIFNwaW5uZXIgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyb21tZXQgfSBmcm9tIFwiZ3JvbW1ldFwiO1xuaW1wb3J0IHsgZ3JvbW1ldCB9IGZyb20gXCJncm9tbWV0L3RoZW1lc1wiO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSBcImdyb21tZXQvdXRpbHNcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDb25uZWN0TWV0YU1hc2sgZnJvbSBcIi4vQ29ubmVjdE1ldGFNYXNrXCI7XG5pbXBvcnQgUGxhY2VCZXQgZnJvbSBcIi4vUGxhY2VCZXRcIjtcbmltcG9ydCB7IGN1c3RvbVRoZW1lLCBTdGF0ZSB9IGZyb20gXCIuL0NvbnN0XCI7XG5cbmZ1bmN0aW9uIENvbnRyb2xDb21wb25lbnQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8R3JvbW1ldFxuICAgICAgdGhlbWU9e2RlZXBNZXJnZShncm9tbWV0LCBjdXN0b21UaGVtZSl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE0MEExRlwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17KCkgPT4ge1xuICAgICAgICAgIHByb3BzLnNldFZhbHVlQmV0KHVuZGVmaW5lZCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGdhcD1cInh4c21hbGxcIlxuICAgICAgICAgIHBhZD1cIm1lZGl1bVwiXG4gICAgICAgICAgYW5pbWF0aW9uPXt7IHR5cGU6IFwiZmFkZUluXCIsIGR1cmF0aW9uOiAzOTAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5jb25uZWN0ZWQgPT09IHRydWUgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7cHJvcHMuc3RhdGUgPT09IFN0YXRlLk5PVFNUQVJURUQgJiYgKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFdhaXQgdW50aWwgdGhlIG5leHQgcm91bmQhXG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtwcm9wcy5zdGF0ZSA9PT0gU3RhdGUuQkVUVElORyAmJiAoXG4gICAgICAgICAgICAgICAgPFBsYWNlQmV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZUJldD17cHJvcHMudmFsdWVCZXR9XG4gICAgICAgICAgICAgICAgICBzZXRWYWx1ZUJldD17cHJvcHMuc2V0VmFsdWVCZXR9XG4gICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyPXtwcm9wcy5tdWx0aXBsaWVyfVxuICAgICAgICAgICAgICAgICAgc2V0TXVsdGlwbGllcj17cHJvcHMuc2V0TXVsdGlwbGllcn1cbiAgICAgICAgICAgICAgICAgIGNvbm5lY3RlZD17cHJvcHMuY29ubmVjdGVkfVxuICAgICAgICAgICAgICAgICAgc2V0Q29ubmVjdGVkPXtwcm9wcy5zZXRDb25uZWN0ZWR9XG4gICAgICAgICAgICAgICAgICBwbGFjZUJldD17cHJvcHMucGxhY2VCZXR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge3Byb3BzLnN0YXRlID09PSBTdGF0ZS5TUElOTklORyAmJiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZz5TcGlubmluZy4uLjwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJ4bGFyZ2VcIiBjb2xvcj1cIiM5ODMyRkVcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cHJvcHMuc3RhdGUgPT09IFN0YXRlLkNPTVBMRVRFRCAmJiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMucGxhY2VkQmV0ID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubXVsdGlwbGllciA9PT0gcHJvcHMud2lubmluZ011bHRpcGxpZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmc+WW91IFdvbiE8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHNpemU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIE11bHRpcGxpZXI6IHtwcm9wcy5tdWx0aXBsaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHNpemU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2lubmluZyBNdWx0aXBsaWVyOiB7cHJvcHMud2lubmluZ011bHRpcGxpZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSdsbCByZWNlaXZlIHlvdXIgcHJpemUgd2l0aGluIGEgZmV3IHNlY29uZHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAge3Byb3BzLm11bHRpcGxpZXIgIT09IHByb3BzLndpbm5pbmdNdWx0aXBsaWVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nPllvdSBMb3N0ITwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc2l6ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgTXVsdGlwbGllcjoge3Byb3BzLm11bHRpcGxpZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc2l6ZT1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpbm5pbmcgTXVsdGlwbGllcjoge3Byb3BzLndpbm5pbmdNdWx0aXBsaWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggZ2FwPVwic21hbGxcIiBhbmltYXRpb249e1t7IHR5cGU6IFwiem9vbU91dFwiIH1dfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYWxpZ249XCJjZW50ZXJcIiBzaXplPVwieGxhcmdlXCIgY29sb3I9XCIjZmZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTUElOIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiM5OTMzRkZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5wbGFjZUJldCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3Byb3BzLnBsYWNlZEJldCA9PT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nPllvdSBoYXZlbid0IHBsYWNlZCBiZXQhPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHNpemU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdpbm5pbmcgTXVsdGlwbGllcjoge3Byb3BzLndpbm5pbmdNdWx0aXBsaWVyfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxDb25uZWN0TWV0YU1hc2sgY29ubmVjdD17cHJvcHMuY29ubmVjdH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0dyb21tZXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiQm94IiwiRm9ybSIsIlRleHQiLCJIZWFkaW5nIiwiU3Bpbm5lciIsIlJlYWN0IiwiR3JvbW1ldCIsImdyb21tZXQiLCJkZWVwTWVyZ2UiLCJDb25uZWN0TWV0YU1hc2siLCJQbGFjZUJldCIsImN1c3RvbVRoZW1lIiwiU3RhdGUiLCJDb250cm9sQ29tcG9uZW50IiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXRWYWx1ZUJldCIsInVuZGVmaW5lZCIsInR5cGUiLCJkdXJhdGlvbiIsImNvbm5lY3RlZCIsInN0YXRlIiwiTk9UU1RBUlRFRCIsIkJFVFRJTkciLCJ2YWx1ZUJldCIsIm11bHRpcGxpZXIiLCJzZXRNdWx0aXBsaWVyIiwic2V0Q29ubmVjdGVkIiwicGxhY2VCZXQiLCJTUElOTklORyIsIkNPTVBMRVRFRCIsInBsYWNlZEJldCIsIndpbm5pbmdNdWx0aXBsaWVyIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ControlComponent.js\n");

/***/ })

});