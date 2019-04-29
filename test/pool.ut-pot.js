const { Pot } = require('../src');
const ExpectTee = require('../src/expect/expect.pot');
const PotTee = require('../src/pot/pot.pot');
const TeeTee = require('../src/tee/tee.pot');


const myPot = Pot.new('Unit tests pool');
myPot.register([ExpectTee, PotTee, TeeTee]);

module.exports = myPot;
