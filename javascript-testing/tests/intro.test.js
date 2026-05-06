import { describe, test, it, expect } from 'vitest';
import { max } from '../src/intro';

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
