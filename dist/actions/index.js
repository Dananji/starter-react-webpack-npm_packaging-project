"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleAction = void 0;

var types = _interopRequireWildcard(require("./types"));

var sampleAction = function sampleAction() {
  return {
    type: types.ACTION1,
    value: 'abc'
  };
};

exports.sampleAction = sampleAction;