"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _core = require("@emotion/core");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

_core.jsx;

function Hello(props) {
  var greeting = props.greeting;
  return (0, _core.jsx)("div", {
    className: (0, _emotion.cx)("hello-container", styles.helloContainer)
  }, greeting);
}

var styles = {
  helloContainer: /*#__PURE__*/(0, _emotion.css)(process.env.NODE_ENV === "production" ? {
    name: "xqi44w-helloContainer",
    styles: "width:100%;height:100%;border:1px solid magenta;;label:helloContainer;"
  } : {
    name: "xqi44w-helloContainer",
    styles: "width:100%;height:100%;border:1px solid magenta;;label:helloContainer;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJxQiIsImZpbGUiOiIuLi8uLi9zcmMvSGVsbG8udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjeCwgY3NzIH0gZnJvbSBcImVtb3Rpb25cIjtcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmpzeDtcblxuZXhwb3J0IGludGVyZmFjZSBIZWxsb1Byb3BzIHtcbiAgZ3JlZXRpbmc/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIEhlbGxvKHByb3BzOiBIZWxsb1Byb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PGFueSwgYW55PiB8IG51bGwge1xuICBjb25zdCB7IGdyZWV0aW5nIH0gPSBwcm9wcztcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeChcImhlbGxvLWNvbnRhaW5lclwiLCBzdHlsZXMuaGVsbG9Db250YWluZXIpfT57Z3JlZXRpbmd9PC9kaXY+O1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlbGxvQ29udGFpbmVyOiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hZ2VudGE7XG4gIGAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxsbztcbiJdfQ== */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  })
};
var _default = Hello;
exports.default = _default;