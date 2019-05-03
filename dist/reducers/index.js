"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("./reducer1"));

var types = _interopRequireWildcard(require("../actions/types"));

var appReducer = (0, _redux.combineReducers)({
  reducer1: _reducer["default"]
});

var rootReducer = function rootReducer(state, action) {
  return appReducer(state, action);
};

var _default = rootReducer;
exports["default"] = _default;