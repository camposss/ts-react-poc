"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Goodbye = Goodbye;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _emotion = require("emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    border: 1px solid magenta;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Goodbye(props) {
  var greeting = props.greeting;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)("goodbye-container", styles.goodbyeContainer)
  }, greeting);
}

var styles = {
  goodbyeContainer: (0, _emotion.css)(_templateObject())
};
var _default = Goodbye;
exports.default = _default;