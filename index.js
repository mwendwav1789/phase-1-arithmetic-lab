// 1) Multiply two numbers whose result will equal 62
function multiply() {
  const num1 = 31;
  const num2 = 2;
  const result = num1 * num2;
  if (result !== 62) {
    throw new Error(
      `Multiplication Error: Expected 31 * 2 to equal 62, but got ${result}`
    );
  }
  return result;
}

// 2) Generate a random integer greater than 0
function random() {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // Random integer between 1 and 100

  if (randomNumber <= 0) {
    throw new Error(
      `Random Number Error: Expected random number greater than 0, but got ${randomNumber}`
    );
  }
  return randomNumber;
}

// 3) Calculate a remainder that is equal to 4
function mod() {
  const num1 = 16;
  const num2 = 6;
  const remainder = num1 % num2;

  if (remainder !== 4) {
    throw new Error(
      `Modulus Error: Expected 16 % 6 to equal 4, but got ${remainder}`
    );
  }
  return remainder;
}

// 4) Return 20 as the highest number in the set
function max() {
  const numbers = [5, 10, 20, 15];
  const maxNumber = Math.max(...numbers);

  if (maxNumber !== 20) {
    throw new Error(
      `Max Number Error: Expected the maximum number in the set [5, 10, 20, 15] to be 20, but got ${maxNumber}`
    );
  }
  return maxNumber;
}

// Test the functions
console.log(multiply()); // Should output 62
console.log(random()); // Should output a random number greater than 0
console.log(mod()); // Should output 4
console.log(max()); // Should output 20
