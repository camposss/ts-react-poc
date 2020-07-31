"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

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
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWxsby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3FCIiwiZmlsZSI6Ii4uLy4uL3NyYy9IZWxsby50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGN4LCBjc3MgfSBmcm9tIFwiZW1vdGlvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlbGxvUHJvcHMge1xuICBncmVldGluZz86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gSGVsbG8ocHJvcHM6IEhlbGxvUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55LCBhbnk+IHwgbnVsbCB7XG4gIGNvbnN0IHsgZ3JlZXRpbmcgfSA9IHByb3BzO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2N4KFwiaGVsbG8tY29udGFpbmVyXCIsIHN0eWxlcy5oZWxsb0NvbnRhaW5lcil9PntncmVldGluZ308L2Rpdj47XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVsbG9Db250YWluZXI6IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbWFnZW50YTtcbiAgYCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvO1xuIl19 */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  })
};
var _default = Hello;
exports.default = _default;