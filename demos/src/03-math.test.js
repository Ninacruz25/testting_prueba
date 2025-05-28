const {rest, isEven, max} = require('./03-math.js');

// ejericio 1 examen unit 1
test("Rest of 10 - 3 should be 7", () => {
  const result = rest(10, 3);
  expect(result).toBe(7);
});

// ejericio 1 examen unit 1
test("Rest of 3 - 10 should be -7", () => {
  const result = rest(-10, -3);
  expect(result).toBe(-7);
});

// ejercicio 2 examen unit 1
test("Is 4 even?", () => {
  const result = isEven(10);
  expect(result).toBe(true);
});

test("Is 3 even?", () => {
  const result = isEven(3);
  expect(result).toBe(false);
});

test ("Is 0 even?", () => {
  const result = isEven(0);
  expect(result).toBe(true);
});

// ejercicio 3 examen unit 1
test("Max of [4, 8, 1] should be 8", () => {
  const result = max([4, 8, 1]);
  expect(result).toBe(8);
});

test("Mas of [] should be undefined", () => {
  const result = max([]);
  expect(result).toBeUndefined();
});

