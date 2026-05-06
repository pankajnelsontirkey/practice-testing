// Lesson: Writing your first tests
export function max(a, b) {
  // if (a > b) return a;
  // else if (b > a) return b;
  // return a;

  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers) {
  if (!numbers.length) {
    return NaN;
  }

  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

export function factorial(n) {
  if (n < 0) return undefined;

  if (n === 0 || n === 1) return 1;

  // return n * factorial(n - 1);

  let i = 1,
    result = 1;

  while (i <= n) {
    result *= i;
    i++;
  }

  return result;
}
