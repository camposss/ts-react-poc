"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Goodbye = Goodbye;
exports.default = void 0;

var _emotion = require("emotion");

var _react = _interopRequireDefault(require("react"));

var _core = require("@emotion/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hb29kYnllLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjdUIiLCJmaWxlIjoiLi4vLi4vc3JjL0dvb2RieWUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3gsIGNzcyB9IGZyb20gXCJlbW90aW9uXCI7XG4vLyBpbXBvcnQgeyBqc3ggfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2RieWVQcm9wcyB7XG4gIGdyZWV0aW5nPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR29vZGJ5ZShwcm9wczogR29vZGJ5ZVByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50PGFueSwgYW55PiB8IG51bGwge1xuICBjb25zdCB7IGdyZWV0aW5nIH0gPSBwcm9wcztcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjeChcImdvb2RieWUtY29udGFpbmVyXCIsIHN0eWxlcy5nb29kYnllQ29udGFpbmVyKX0+e2dyZWV0aW5nfTwvZGl2Pjtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBnb29kYnllQ29udGFpbmVyOiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hZ2VudGE7XG4gIGAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29kYnllO1xuIl19 */",
    toString: _EMOTION_STRINGIFIED_CSS_ERROR__
  })
};
var _default = Goodbye;
exports.default = _default;