/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const { incrementQty, decrementQty, recalculate } = require("../helpers.js");

test("incrementQty harus ditambah 1", () => {
  const actual = incrementQty(1);
  const expected = 2;
  expect(actual).toBe(expected);
});

test("pengecekan fungsi incrementQty ketika diisi string", () => {
  const actual = incrementQty("2");
  const expected = 3;
  expect(actual).toBe(expected);
});

test("fungsi decrementQty harus dapat mengurangi", () => {
  const actual = decrementQty(2);
  const expected = 1;
  expect(actual).toBe(expected);
});

test("decrementQty tidak boleh kurg dari 1", () => {
  const actual = decrementQty(1);
  const expected = 1;
  expect(actual).toBe(expected);
});

test("recalculate subtotal", () => {
  const actual = recalculate(25000, 3);
  const expected = 75000;
  expect(actual).toBe(expected);
});

test("recalculate subtotal dengan string input", () => {
  const actual = recalculate("25000", 3);
  const expected = 75000;
  expect(actual).toBe(expected);
});

test("recalculate dengan diskon", () => {
  const actual = recalculate(25000, 3, 27);
  const expected = 54750;
  expect(actual).toBe(expected);
});
