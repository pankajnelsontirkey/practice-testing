import { describe, test, it, expect } from 'vitest';
import { fizzBuzz, max } from '../src/intro';

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
