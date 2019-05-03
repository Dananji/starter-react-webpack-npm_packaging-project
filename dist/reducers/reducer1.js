"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var initialState = {};

var reducer1 = function reducer1() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case types.ACTION1:
      return Object.assign({}, state, {
        someStoreValue: action.value
      });

    default:
      return state;
  }
};

var _default = reducer1;
exports["default"] = _default;