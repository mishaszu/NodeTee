const { Tee, Pot } = require('../src');
const assert = require('assert');

console.log(Tee);
console.log(Pot);

const myTee = Tee.new('Controller x');
myTee.case('x should pass', () => {
  assert(true);
});
myTee.case('x shoul fail', () => {
  try {
    assert(true === false, 'there is wrong comparison');
  } catch (e) {
    if (e.message !== 'there is wrong comparison') {
      throw Error('Wrong error');
    }
  }
});
myTee.case(
  'x should ignore',
  () => {
    assert(true === false, 'there is wrong comparison');
  },
  { ignore: true },
);

const myCoffe = Tee.new('Controller y');
myCoffe.case('y should pass', () => {
  assert(true);
});
myCoffe.case('y shoul fail', () => {
  assert(true === false, 'there is wrong comparison');
});
myCoffe.case(
  'y should ignore',
  () => {
    assert(true === false, 'there is wrong comparison');
  },
  { ignore: true },
);
myCoffe.case(
  'y should focus',
  () => {
    assert(true);
  },
  { focus: true },
);

const myCompot = Tee.new('Controller z');
myCompot.case('z shoul pass', e => {
  e(true).toBe(true);
});
myCompot.case('z should fail', e => {
  try {
    e(true).toBe(false);
  } catch (e) {
    const message = e.message.split('\n')[0];
    if (message !== 'The expression evaluated to a falsy value:') {
      throw Error('Wrong error');
    }
  }
});

const myPot = Pot.new('My App');
myPot.register([myTee, myCoffe, myCompot]);
try {
  myPot.run();
} catch (e) {
  if (e.message !== 'Not all tests passed') {
    throw Error('Wrong error when tests failed');
  }
}
