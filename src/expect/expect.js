const assert = require('assert');

const expect = value1 => {
  return {
    toBe(value2) {
      assert(value1 === value2);
    },
    toBeTruthy() {
      assert(!!value1 === true);
    },
    toBeFalsy() {
      assert(!!value1 === false);
    },
    toNotBeEmpty() {
      assert(value1.length && value1.length > 0);
    },
    toBeEmpty() {
      assert(value1.length !== undefined && value1.length === 0);
    },
  };
};

module.exports = expect;
