jest.autoMockOff();

const testedThing = require('./index');

describe('calculateDownProbability', () => {
  it('to be described correctly', () => {
    expect(typeof testedThing.calculate).toBe('function');
    expect(typeof testedThing.calculateFromMonths).toBe('function');
  });

  describe('calculate', () => {
    it('should calculate from months only', () => {
      expect(testedThing.calculate(20, 3)).toEqual({
        percent: 0.06626905235255136,
        decimal: 0.0006626905235255136,
        perBirth: '1/1509'
      });
      expect(testedThing.calculate(44, 10)).toEqual({
        percent: 3.3333333333333335,
        decimal: 0.03333333333333333,
        perBirth: '1/30'
      });
    });

    it('should throw for stupid param in first position', () => {
      expect(() => {
        testedThing.calculate();
      }).toThrow();
      expect(() => {
        testedThing.calculate(null);
      }).toThrow();
      expect(() => {
        testedThing.calculate('');
      }).toThrow();
      expect(() => {
        testedThing.calculate('abcd');
      }).toThrow();
    });

    it('should throw for stupid param in second position', () => {
      expect(() => {
        testedThing.calculate(20);
      }).toThrow();
      expect(() => {
        testedThing.calculate(20, null);
      }).toThrow();
      expect(() => {
        testedThing.calculate(20, '');
      }).toThrow();
      expect(() => {
        testedThing.calculate(20, 'abcd');
      }).toThrow();
    });
  });

  describe('calculateFromMonths', () => {
    it('should calculate from years and months', () => {
      expect(testedThing.calculateFromMonths(185)).toEqual({
        percent: 0.06476683937823835,
        decimal: 0.0006476683937823834,
        perBirth: '1/1544'
      });
      expect(testedThing.calculateFromMonths(784)).toEqual({
        percent: 7.6923076923076925,
        decimal: 0.07692307692307693,
        perBirth: '1/13'
      });
    });

    it('should throw for stupid param', () => {
      expect(() => {
        testedThing.calculateFromMonths();
      }).toThrow();
      expect(() => {
        testedThing.calculateFromMonths(null);
      }).toThrow();
      expect(() => {
        testedThing.calculateFromMonths('');
      }).toThrow();
      expect(() => {
        testedThing.calculateFromMonths('abcd');
      }).toThrow();
    });
  });
});
