import { calculate, calculateFromMonths } from './index.js';

describe('calculateDownProbability', () => {
  describe('calculate', () => {
    it('should calculate from months only', () => {
      expect(calculate(20, 3)).toEqual({
        percent: 0.06626905235255136,
        decimal: 0.0006626905235255136,
        perBirth: '1/1509',
      });
      expect(calculate(44, 10)).toEqual({
        percent: 3.3333333333333335,
        decimal: 0.03333333333333333,
        perBirth: '1/30',
      });
    });

    it('should throw for stupid param in first position', () => {
      expect(() => {
        calculate();
      }).toThrow();
      expect(() => {
        calculate(null);
      }).toThrow();
      expect(() => {
        calculate('');
      }).toThrow();
      expect(() => {
        calculate('abcd');
      }).toThrow();
    });

    it('should throw for stupid param in second position', () => {
      expect(() => {
        calculate(20);
      }).toThrow();
      expect(() => {
        calculate(20, null);
      }).toThrow();
      expect(() => {
        calculate(20, '');
      }).toThrow();
      expect(() => {
        calculate(20, 'abcd');
      }).toThrow();
    });
  });

  describe('calculateFromMonths', () => {
    it('should calculate from years and months', () => {
      expect(calculateFromMonths(185)).toEqual({
        percent: 0.06476683937823835,
        decimal: 0.0006476683937823834,
        perBirth: '1/1544',
      });
      expect(calculateFromMonths(784)).toEqual({
        percent: 7.6923076923076925,
        decimal: 0.07692307692307693,
        perBirth: '1/13',
      });
    });

    it('should throw for stupid param', () => {
      expect(() => {
        calculateFromMonths();
      }).toThrow();
      expect(() => {
        calculateFromMonths(null);
      }).toThrow();
      expect(() => {
        calculateFromMonths('');
      }).toThrow();
      expect(() => {
        calculateFromMonths('abcd');
      }).toThrow();
    });
  });
});
