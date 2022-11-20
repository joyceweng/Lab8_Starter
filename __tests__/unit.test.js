// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('isPhoneNumber a vaild', () => {
    expect(functions.isPhoneNumber("a")).toBe(false);
});
test('isPhoneNumber 123 valid', () => {
    expect(functions.isPhoneNumber("123")).toBe(false);
});
test('isPhoneNumber 123-456-7890 valid', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('isPhoneNumber (123)456-7890 valid', () => {
    expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
});


test('isEmail 1234567890 valid', () => {
    expect(functions.isEmail("1234567890")).toBe(false);
});
test('isEmail abcd valid', () => {
    expect(functions.isEmail("abcd")).toBe(false);
});
test('isEmail abcd@gmail.com valid', () => {
    expect(functions.isEmail("abcd@gmail.com")).toBe(true);
});
test('isEmail abcd@ymail.com valid', () => {
    expect(functions.isEmail("abcd@ymail.com")).toBe(true);
});


test('isStrongPassword abcdefg12345678901234567890', () => {
    expect(functions.isStrongPassword("abcdefg12345678901234567890")).toBe(false);
});
test('isStrongPassword ab1', () => {
    expect(functions.isStrongPassword("ab1")).toBe(false);
});
test('isStrongPassword abcde2486', () => {
    expect(functions.isStrongPassword("abcde2486")).toBe(true);
});
test('isStrongPassword aaaabbbb123', () => {
    expect(functions.isStrongPassword("aaaabbbb123")).toBe(true);
});


test('isDate 22222', () => {
    expect(functions.isDate("2222")).toBe(false);
});
test('isDate 12/12/22', () => {
    expect(functions.isDate("12/12/22")).toBe(false);
});
test('isDate 12/12/2022', () => {
    expect(functions.isDate("12/12/2022")).toBe(true);
});
test('isDate 2/2/2022', () => {
    expect(functions.isDate("2/2/2022")).toBe(true);
});

test('isHexColor 2/2/2022', () => {
    expect(functions.isHexColor("2/2/2022")).toBe(false);
});
test('isHexColor idk', () => {
    expect(functions.isHexColor("idk")).toBe(false);
});
test('isHexColor #32a852', () => {
    expect(functions.isHexColor("#32a852")).toBe(true);
});
test('isHexColor #0000ff', () => {
    expect(functions.isHexColor("#0000ff")).toBe(true);
});