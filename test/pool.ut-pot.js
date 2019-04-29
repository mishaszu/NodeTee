const { Pot } = require('../src');
const ExpectTee = require('../src/expect/expect.pot');


const myPot = Pot.new('Unit tests pool');
myPot.register([ExpectTee]);

module.exports = myPot;
