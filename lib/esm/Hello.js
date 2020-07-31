"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./greeting.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hello(props) {
  var greeting = props.greeting;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hello-container"
  }, greeting);
}

var _default = Hello;
exports.default = _default;