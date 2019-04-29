const Tee = require('../tee');

const myTee = Tee.new('Tee module');

myTee.case('Should produce new Tee', expect => {
  const myTeeTest = Tee.new('MyTee');
  expect(myTeeTest.name).toBe('MyTee');
  expect(myTeeTest.run).toBeTruthy();
  expect(myTeeTest.case).toBeTruthy();
});

myTee.case('Should register new case', expect => {
  const myTeeTest = Tee.new('MyTee');
  myTeeTest.case('test', ()=>{});
  expect(myTeeTest.cases).toNotBeEmpty();
});

module.exports = myTee;
