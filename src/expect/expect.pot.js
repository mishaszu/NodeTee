const Tee = require('../tee');
const Expect = require('./expect');

const myTee = Tee.new('Expect functionality');

myTee.case('Should create carried function', expect => {
  const test = Expect(1);
  expect(test.toBe).toBeTruthy();
});

myTee.case('Should pass equality test', expect => {
  const test = Expect(1);
  try {
    test.toBe(1);
    expect(true).toBeTruthy();
  } catch (e) {
    expect(false).toBeTruthy();
  }
});

myTee.case('Should fail equality test', expect => {
  const test = Expect(1);
  let testValue;
  try {
    test.toBe(2);
    testValue = false;
  } catch (e) {
    testValue = true;
  }
  if (testValue) {
    expect(true).toBeTruthy();
  } else {
    expect(false).toBeTruthy();
  }
});

myTee.case('Should pass truthy test', expect => {
  const test1 = Expect(1);
  const test2 = Expect(true);
  const test3 = Expect('text');
  try {
    test1.toBeTruthy();
    test2.toBeTruthy();
    test3.toBeTruthy();
  } catch (e) {
    expect(false).toBeTruthy();
  }
});

myTee.case('Should fail truthy test', expect => {
  const test1 = Expect(0);
  const test2 = Expect(false);
  const test3 = Expect('');
  let testValue = 0;
  try {
    test1.toBeTruthy();
  } catch (e) {
    testValue++;
  }
  try {
    test2.toBeTruthy();
  } catch (e) {
    testValue++;
  }
  try {
    test3.toBeTruthy();
  } catch (e) {
    testValue++;
  }
  if (testValue === 3) {
    expect(true).toBeTruthy();
  } else {
    expect(false).toBeTruthy();
  }
});

myTee.case('Should pass falsy test', expect => {
  const test1 = Expect(0);
  const test2 = Expect(false);
  const test3 = Expect('');
  try {
    test1.toBeFalsy();
    test2.toBeFalsy();
    test3.toBeFalsy();
  } catch (e) {
    expect(false).toBeTruthy();
  }
});

myTee.case('Should fail falsy test', expect => {
  const test1 = Expect(1);
  const test2 = Expect('some text');
  const test3 = Expect(true);
  let testValue = 0;
  try {
    test1.toBeFalsy();
  } catch (e) {
    testValue++;
  }
  try {
    test2.toBeFalsy();
  } catch (e) {
    testValue++;
  }
  try {
    test3.toBeFalsy();
  } catch (e) {
    testValue++;
  }
  if (testValue === 3) {
    expect(true).toBeTruthy();
  } else {
    expect(false).toBeTruthy();
  }
});

module.exports = myTee;
