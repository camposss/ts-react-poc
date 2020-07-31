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
  return jsx("div", {
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
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hb29kYnllLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIiLCJmaWxlIjoiLi4vLi4vc3JjL0dvb2RieWUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjeCwgY3NzIH0gZnJvbSBcImVtb3Rpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBHb29kYnllUHJvcHMge1xuICBncmVldGluZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdvb2RieWUocHJvcHM6IEdvb2RieWVQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnksIGFueT4gfCBudWxsIHtcbiAgY29uc3QgeyBncmVldGluZyB9ID0gcHJvcHM7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goXCJnb29kYnllLWNvbnRhaW5lclwiLCBzdHlsZXMuZ29vZGJ5ZUNvbnRhaW5lcil9PntncmVldGluZ308L2Rpdj47XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ29vZGJ5ZUNvbnRhaW5lcjogY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBtYWdlbnRhO1xuICBgLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR29vZGJ5ZTtcbiJdfQ== */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  })
};
var _default = Goodbye;
exports.default = _default;