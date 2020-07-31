"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var color = "white";

function Hello(props) {
  var greeting = props.greeting;
  return (0, _core.jsx)("div", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    (0, _core.css)("padding:32px;background-color:hotpink;font-size:24px;border-radius:4px;&:hover{color:", color, ";};label:Hello;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWMiLCJmaWxlIjoiLi4vLi4vc3JjL0hlbGxvLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgY3gsIGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVsbG9Qcm9wcyB7XG4gIGdyZWV0aW5nPzogc3RyaW5nO1xufVxuXG5jb25zdCBjb2xvciA9IFwid2hpdGVcIjtcblxuZnVuY3Rpb24gSGVsbG8ocHJvcHM6IEhlbGxvUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55LCBhbnk+IHwgbnVsbCB7XG4gIGNvbnN0IHsgZ3JlZXRpbmcgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17Y3NzYFxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICB9XG4gICAgICBgfVxuICAgICAgY2xhc3NOYW1lPXtcImhlbGxvLWNvbnRhaW5lclwifVxuICAgID5cbiAgICAgIHtncmVldGluZ31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWxsb0NvbnRhaW5lcjogY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBtYWdlbnRhO1xuICBgLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVsbG87XG4iXX0= */"), ";label:Hello;"),
    className: "hello-container"
  }, greeting);
}

var styles = {
  helloContainer: process.env.NODE_ENV === "production" ? {
    name: "xqi44w-helloContainer",
    styles: "width:100%;height:100%;border:1px solid magenta;;label:helloContainer;"
  } : {
    name: "xqi44w-helloContainer",
    styles: "width:100%;height:100%;border:1px solid magenta;;label:helloContainer;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NxQiIsImZpbGUiOiIuLi8uLi9zcmMvSGVsbG8udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBjeCwgY3NzIH0gZnJvbSBcImVtb3Rpb25cIjtcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIZWxsb1Byb3BzIHtcbiAgZ3JlZXRpbmc/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvbG9yID0gXCJ3aGl0ZVwiO1xuXG5mdW5jdGlvbiBIZWxsbyhwcm9wczogSGVsbG9Qcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudDxhbnksIGFueT4gfCBudWxsIHtcbiAgY29uc3QgeyBncmVldGluZyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIHBhZGRpbmc6IDMycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICBjbGFzc05hbWU9e1wiaGVsbG8tY29udGFpbmVyXCJ9XG4gICAgPlxuICAgICAge2dyZWV0aW5nfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlbGxvQ29udGFpbmVyOiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hZ2VudGE7XG4gIGAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxsbztcbiJdfQ== */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  }
};
var _default = Hello;
exports.default = _default;