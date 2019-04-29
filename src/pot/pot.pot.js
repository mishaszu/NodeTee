const Tee = require('../tee');
const Pot = require('./pot');

const myTee = Tee.new('Pot module');

myTee.case('Produce new pot', expect => {
  const myPot = Pot.new('MyPot');
  expect(myPot.name).toBe('MyPot');
  expect(myPot.run).toBeTruthy();
  expect(myPot.register).toBeTruthy();
});

myTee.case('Register new tee', expect => {
  const myPot = Pot.new('MyPot');
  const myTeeTest = Tee.new('MyTee');
  myPot.register([myTeeTest]);
  expect(myPot.tests).toNotBeEmpty();
});

myTee.case('Run new tee', expect => {
  const myPot = Pot.new('Pot test case');
  const myTeeTest = Tee.new('MyTee');
  myPot.register([myTeeTest]);
  expect(myPot.run()).toBeTruthy();
});

module.exports = myTee;
