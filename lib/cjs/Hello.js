"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _core = require("@emotion/core");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

function Hello(props) {
  var greeting = props.greeting;
  return jsx("div", {
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
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXFCIiwiZmlsZSI6Ii4uLy4uL3NyYy9IZWxsby50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY3gsIGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsbG9Qcm9wcyB7XG4gIGdyZWV0aW5nPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBIZWxsbyhwcm9wczogSGVsbG9Qcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnksIGFueT4gfCBudWxsIHtcbiAgY29uc3QgeyBncmVldGluZyB9ID0gcHJvcHM7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3goXCJoZWxsby1jb250YWluZXJcIiwgc3R5bGVzLmhlbGxvQ29udGFpbmVyKX0+e2dyZWV0aW5nfTwvZGl2Pjtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWxsb0NvbnRhaW5lcjogY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBtYWdlbnRhO1xuICBgLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVsbG87XG4iXX0= */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  })
};
var _default = Hello;
exports.default = _default;