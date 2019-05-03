"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var ImageComponent = function ImageComponent(props) {
  return _react["default"].createElement("div", null, _react["default"].createElement("img", {
    src: props.src
  }));
};

var _default = ImageComponent;
exports["default"] = _default;