"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Goodbye = Goodbye;
exports.default = void 0;

var _emotion = require("emotion");

var _core = require("@emotion/core");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function Goodbye(props) {
  var greeting = props.greeting;
  return (0, _core.jsx)("div", {
    className: (0, _emotion.cx)("goodbye-container", styles.goodbyeContainer)
  }, greeting);
}

var styles = {
  goodbyeContainer: /*#__PURE__*/(0, _emotion.css)(process.env.NODE_ENV === "production" ? {
    name: "168mjbr-goodbyeContainer",
    styles: "width:100%;height:100%;border:1px solid magenta;;label:goodbyeContainer;"
  } : {
    name: "168mjbr-goodbyeContainer",
    styles: "width:100%;height:100%;border:1px solid magenta;;label:goodbyeContainer;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hb29kYnllLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFldUIiLCJmaWxlIjoiLi4vLi4vc3JjL0dvb2RieWUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjeCwgY3NzIH0gZnJvbSBcImVtb3Rpb25cIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZGJ5ZVByb3BzIHtcbiAgZ3JlZXRpbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBHb29kYnllKHByb3BzOiBHb29kYnllUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55LCBhbnk+IHwgbnVsbCB7XG4gIGNvbnN0IHsgZ3JlZXRpbmcgfSA9IHByb3BzO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KFwiZ29vZGJ5ZS1jb250YWluZXJcIiwgc3R5bGVzLmdvb2RieWVDb250YWluZXIpfT57Z3JlZXRpbmd9PC9kaXY+O1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdvb2RieWVDb250YWluZXI6IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbWFnZW50YTtcbiAgYCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2RieWU7XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  })
};
var _default = Goodbye;
exports.default = _default;