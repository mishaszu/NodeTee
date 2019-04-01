const { Tee, Pot } = require('../src');
const assert = require('assert');

console.log(Tee);
console.log(Pot);

const myTee = Tee.new('Controller X');
myTee.case('x should pass', () => {
  assert(true);
});
myTee.case('x shoul fail', () => {
  assert(true === false, 'there is wrong comparison');
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
  e(true).toBe(false);
});

const myPot = Pot.new('My App');
myPot.register([myTee, myCoffe, myCompot]);
try {
  myPot.run();
} catch (e) {
  console.log(e);
  if (e.message === 'Not all tests passed') {
    console.log('All good');
  }
}
