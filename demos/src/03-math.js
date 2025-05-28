module.exports = {rest, isEven, max};

// ejercicios examen unit 1
function rest(a, b) {
  return a - b;
}

function isEven(n) {
  return n % 2 === 0;
}

function max(values) {
  if (values.length === 0) {
    return undefined;
  }
  let maxValue = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] > maxValue) {
      maxValue = values[i];
    }
  }
  return maxValue;
}