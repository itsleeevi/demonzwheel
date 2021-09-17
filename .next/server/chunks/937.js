"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlaceBet)
/* harmony export */ });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function PlaceBet(props) {
  const suggestionsBet = ["1k $LLTH", "10k $LLTH", "100k $LLTH"];

  const onSuggestionSelectBet = event => {
    switch (event.suggestion) {
      case "1k $LLTH":
        props.setValueBet(1000);
        break;

      case "10k $LLTH":
        props.setValueBet(10000);
        break;

      case "100k $LLTH":
        props.setValueBet(100000);
        break;

      default:
        props.setValueBet("");
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
    width: "300px",
    height: "300px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
      required: true,
      name: "betAmount",
      htmlFor: "textinput-id",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.TextInput, {
        suggestions: suggestionsBet,
        onSuggestionSelect: onSuggestionSelectBet,
        size: "small",
        name: "betAmount",
        placeholder: "Bet Amount",
        value: props.valueBet,
        onChange: event => props.setValueBet(event.target.value),
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
          color: "#fff",
          weight: "bold",
          size: "medium",
          children: "$LLTH"
        }),
        reverse: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
      name: "autoCashOut",
      htmlFor: "textinput-id",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.RangeInput, {
        min: "2",
        max: "25",
        value: props.multiplier,
        onChange: value => {
          props.setMultiplier(value.target.value);
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        color: "#fff",
        textAlign: "center",
        children: props.multiplier + "x"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
      gap: "small",
      animation: [{
        type: "zoomOut"
      }],
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Button, {
        secondary: true,
        fill: true,
        type: "submit",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
          align: "center",
          size: "xlarge",
          color: "#fff",
          children: "SPIN!"
        }),
        color: "#9933FF",
        onClick: () => props.placeBet()
      })
    })]
  });
}

/***/ })

};
;