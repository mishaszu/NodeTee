[![CircleCI](https://circleci.com/gh/mishaszu/node-tee.svg?style=svg)](https://circleci.com/gh/mishaszu/node-tee)

# NodeTee
Simple test runner for javascript projects.

## Instruction

##### Define test with `Tee`
```js
const {Tee} = require('node-tee');

const myTee = Tee.new('Controller x');
myTee.case('Controller should pass', () => {
    assert(true, true);
});
module.exports = myTee;
```

##### Register `Tee` in `Pot`
```js
const {Pot} = require('node-tee');
const myTee = require('./myTee.path.js');

const myPot = Pot.new('My App');
myPot.register([myTee]);
myPot.run();
```

##### expect
`case` method callback provide expect functionality
```js
myTee('Controller', (expect) => {
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
});
```
