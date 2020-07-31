"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Goodbye = Goodbye;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Goodbye(props) {
  var greeting = props.greeting;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "goodbye-container"
  }, greeting);
}

var _default = Goodbye;
exports.default = _default;