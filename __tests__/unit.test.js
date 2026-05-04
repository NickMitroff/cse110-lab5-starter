// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('phone number test 1', () => {
    expect(isPhoneNumber('925-822-7067')).toBe(true);
});
test('phone number test 2', () => {
    expect(isPhoneNumber('+1 (925) 822-7067')).toBe(true);
});
test('phone number test 3', () => {
    expect(isPhoneNumber('2319847608219734576891234765')).toBe(false);
});
test('phone number test 4', () => {
    expect(isPhoneNumber('92 58 22 70 67')).toBe(false);
});

test('email test 1', () => {
    expect(isEmail('kderr@auhsdschools.org')).toBe(true);
});
test('email test 2', () => {
    expect(isEmail('nmitroff@ucsd.edu')).toBe(true);
});
test('email test 3', () => {
    expect(isEmail('nmitroff@@@@@ucsd.edu')).toBe(false);
});
test('email test 4', () => {
    expect(isEmail('nmitroff@')).toBe(false);
});

test('password test 1', () => {
    expect(isStrongPassword('password')).toBe(true);
});
test('password test 2', () => {
    expect(isStrongPassword('pa55woRD')).toBe(true);
});
test('password test 3', () => {
    expect(isStrongPassword('oidfgsuvbhoisadufhasdjkhfoijsadfhgoaiusdfgh')).toBe(false);
});
test('password test 4', () => {
    expect(isStrongPassword('4password')).toBe(false);
});

test('date test 1', () => {
    expect(isDate('1/22/2026')).toBe(true);
});
test('date test 2', () => {
    expect(isDate('55/5/5555')).toBe(true);
});
test('date test 3', () => {
    expect(isDate('2026/11/22')).toBe(false);
});
test('date test 4', () => {
    expect(isDate('11 22 2026')).toBe(false);
});

test('hex test 1', () => {
    expect(isHexColor('FFF33F')).toBe(true);
});
test('hex test 2', () => {
    expect(isHexColor('#FFFFAA')).toBe(true);
});
test('hex test 3', () => {
    expect(isHexColor('FFFFFG')).toBe(false);
});
test('hextest 4', () => {
    expect(isHexColor('1234567')).toBe(false);
});
