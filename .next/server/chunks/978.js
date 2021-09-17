"use strict";
exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_assets_wheel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _styles_assets_marker_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(675);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(821);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(640);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(876);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([d3_ease__WEBPACK_IMPORTED_MODULE_6__]);
d3_ease__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function WheelComponent() {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const animations = (0,react_spring__WEBPACK_IMPORTED_MODULE_5__.useSpring)(show ? {
    from: {
      rotateZ: 0
    },
    to: {
      rotateZ: 3500
    },
    config: {
      duration: 10000,
      easing: d3_ease__WEBPACK_IMPORTED_MODULE_6__.easeQuadOut
    }
  } : {});
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {
      direction: "column",
      gap: "medium",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {
        height: "medium",
        width: "medium",
        margin: "0px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_3__.Stack, {
          anchor: "top",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_spring__WEBPACK_IMPORTED_MODULE_5__.animated.div, {
            style: _objectSpread({
              width: 390,
              height: 390,
              borderRadius: 16
            }, animations),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__.default, {
              className: "wheel",
              height: "470px",
              width: "470px",
              src: _styles_assets_wheel_png__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {
            height: "100px",
            width: "40px",
            margin: {
              top: "-20px"
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__.default, {
              className: "marker",
              fit: "cover",
              src: _styles_assets_marker_png__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(grommet__WEBPACK_IMPORTED_MODULE_3__.Button, {
        alignSelf: "center",
        secondary: true,
        type: "submit",
        label: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(grommet__WEBPACK_IMPORTED_MODULE_3__.Text, {
          align: "center",
          size: "xlarge",
          color: "#fff",
          children: "Spin!"
        }),
        color: "#9933FF",
        onClick: () => {
          setShow(show => !show);
        }
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WheelComponent);
});

/***/ }),

/***/ 781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/styles/assets/marker.ca1d2f4b724a74b0c5313516cac06dfc.png","height":147,"width":75,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAXElEQVR4nDWNwQmAQAwE985CLEFE7ELQCqxLf5Yg2oX4sKLorHCBhcwENmntQsxMMtnS0kXN8pCcpMZiB0ZAr3RYDMAJW0yl4wYqDm0RPQLWZeH2QNhkC9b/pSc+uVMceJWyODAAAAAASUVORK5CYII="});

/***/ }),

/***/ 74:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/styles/assets/wheel.35e04b25a8fe99ca261a1c8d73730afb.png","height":462,"width":467,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVR42mOAAun2lg7Tif2T9KZOnmZQVlhmABSTYYACif1795uuW7NeLjMlSyQ1IU149sw5UuvWrtcFyTF0tXebrVqxSgHIEWJgYJKHYAbhxtpGifrqemOGjRs2GW/euFkUKCiuJ20YoSOhHwnSOW/OfKF5c+ZpMyxZtERv+pTpgiAFupL6kUAF0SAFUyZOEQSKazFM7JtovmbVGkWIFQzyUCzSXN8iUZBTqM8ABFJ7d+81XbpoqXRlaZVoQ02jWFN9s9jC+Qs1QL5jgAKp0sIyw0lAb/Z09upWlFQagsQYGBgYAIpkR+X45x5vAAAAAElFTkSuQmCC"});

/***/ })

};
;