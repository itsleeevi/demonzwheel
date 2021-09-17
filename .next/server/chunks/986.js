"use strict";
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function ConnectMetaMask(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
    gap: "small",
    animation: [{
      type: "zoomOut"
    }],
    width: "300px",
    height: "250px",
    justify: "center",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
      alignSelf: "center",
      justify: "center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Button, {
        secondary: true,
        fill: true,
        type: "submit",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
          size: "xlarge",
          color: "#fff",
          children: "CONNECT"
        }),
        onClick: () => props.connect(),
        color: "#9933FF"
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectMetaMask);

/***/ }),

/***/ 986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);
/* harmony import */ var grommet_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(153);
/* harmony import */ var grommet_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ConnectMetaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(773);
/* harmony import */ var _PlaceBet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(937);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);











const State = {
  NOTSTARTED: 0,
  BETTING: 1,
  WAITING: 2,
  SPINNING: 3,
  COMPLETED: 4
};
const customTheme = {
  rangeInput: {
    thumb: {
      color: "#29112c"
    },
    track: {
      color: "#fff"
    }
  },
  button: {
    border: {
      radius: "4px"
    },
    hover: {
      color: "#81FCED"
    }
  },
  global: {
    font: {
      family: "Silkscreen"
    },
    colors: {
      border: "#29112C",
      placeholder: "#fff",
      text: "#fff"
    },
    focus: {
      shadow: {
        color: "#33FFFF"
      },
      border: {
        color: "#9933FF"
      }
    },
    elevation: {
      light: {
        large: "#9933FF"
      },
      dark: {
        large: "#9933FF"
      }
    },
    drop: {
      background: "#29112C",
      elevation: "large",
      extend: `
       
            font-size: 14px;
            border-bottom-left-radius: 1px;
            border-bottom-right-radius: 1px;
            li {
              border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            }
            overflow: hidden;
          `
    }
  }
};

function ControlComponent(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Grommet, {
    theme: (0,grommet_utils__WEBPACK_IMPORTED_MODULE_3__.deepMerge)(grommet_themes__WEBPACK_IMPORTED_MODULE_2__.grommet, customTheme),
    style: {
      backgroundColor: "#140A1F"
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Form, {
      onSubmit: () => {
        props.setValueBet(undefined);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
        direction: "column",
        gap: "xxsmall",
        pad: "medium",
        animation: {
          type: "fadeIn",
          duration: 390
        },
        children: props.connected === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [props.state === State.NOTSTARTED && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
            width: "300px",
            height: "300px",
            align: "center",
            justify: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Heading, {
              textAlign: "center",
              children: "Wait until the next round!"
            })
          }), props.state === State.BETTING && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_PlaceBet__WEBPACK_IMPORTED_MODULE_5__.default, {
            valueBet: props.valueBet,
            setValueBet: props.setValueBet,
            multiplier: props.multiplier,
            setMultiplier: props.setMultiplier,
            connected: props.connected,
            setConnected: props.setConnected,
            placeBet: props.placeBet
          }), props.state === State.WAITING && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
            width: "300px",
            height: "300px",
            align: "center",
            justify: "center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
              size: "large",
              textAlign: "center",
              children: "Waiting For Transaction..."
            })
          }), props.state === State.SPINNING && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
            width: "300px",
            height: "300px",
            align: "center",
            justify: "center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Heading, {
              children: "Spinning..."
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Spinner, {
              size: "xlarge",
              color: "#9832FE"
            })]
          }), props.state === State.COMPLETED && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
            width: "300px",
            height: "300px",
            align: "center",
            justify: "center",
            children: [props.placedBet === true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [props.multiplier.toString() === props.winningMultiplier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Heading, {
                  children: "You Won!"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  size: "medium",
                  children: ["Your Multiplier: ", props.multiplier]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  size: "medium",
                  children: [" ", "Winning Multiplier: ", props.winningMultiplier]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  size: "small",
                  textAlign: "center",
                  children: [" ", "You will receive your prize within a few seconds."]
                })]
              }), props.multiplier.toString() !== props.winningMultiplier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Heading, {
                  textAlign: "center",
                  children: "You Lost!"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  size: "medium",
                  children: ["Your Multiplier: ", props.multiplier]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
                  size: "medium",
                  children: ["Winning Multiplier: ", props.winningMultiplier]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
                gap: "small",
                animation: [{
                  type: "zoomOut"
                }],
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Button, {
                  secondary: true,
                  fill: true,
                  type: "submit",
                  label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
                    align: "center",
                    size: "xlarge",
                    color: "#fff",
                    children: "New Game"
                  }),
                  color: "#9933FF",
                  onClick: () => props.setState(State.BETTING)
                })
              })]
            }), props.placedBet === false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Heading, {
                children: "You have not placed bet!"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
                size: "medium",
                children: ["Winning Multiplier: ", props.winningMultiplier]
              })]
            })]
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ConnectMetaMask__WEBPACK_IMPORTED_MODULE_4__.default, {
          connect: props.connect
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlComponent);

/***/ })

};
;