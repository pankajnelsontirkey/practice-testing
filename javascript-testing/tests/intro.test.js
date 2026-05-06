import { describe, expect, it } from 'vitest';

import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';

// test suite
describe('max', () => {
  // test
  it('should return the first argument if it is greater', () => {
    /// AAA - Arrange -> Act -> Assert

    /* 
    // Arrange
    const a = 5;
    const b = 2;
    // Act
    const result = max(a, b);
    // Assert
    expect(result).toBe(5); 
    */
    expect(max(5, 3)).toBe(5);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(3, 5)).toBe(5);
  });

  it('should return the first argument if arguments are equal', () => {
    expect(max(3, 3)).toBe(3);
  });
});

describe('fizzBuzz', () => {
  it('should return FizzBuzz if divisible by 3 AND 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return Fizz if divisible by 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('should return Buzz if divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('should return the number if not divisible', () => {
    expect(fizzBuzz(4)).toBe('4');
  });
});

describe('calculate average of array', () => {
  it('should return NaN if array is empty', () => {
    expect(calculateAverage([])).toBeNaN();
  });

  it('should return the first element of array with a single element', () => {
    expect(calculateAverage([3])).toBe(3);
  });

  it('should return average of elements for array with two elements ', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it('should return average of elements for array with three elements ', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
  it('should return 0 for input argument is 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 for input argument is 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should return 2 for input argument is 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it('should return 6 for input argument is 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it('should return 24 of input argument 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it('should return undefined for input argument a negative number ', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
