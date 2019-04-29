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
  };
};

module.exports = expect;
