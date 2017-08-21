/*globals jest, require, expect, describe, it */

jest.autoMockOff();

const
    testedThing = require('../index');

describe('calculateDownProbability', function () {
    'use strict';

    it('to be described correctly', function () {
        expect(typeof testedThing.calculate).toBe('function');
        expect(typeof testedThing.calculateFromMonths).toBe('function');
    });

    describe('calculate', function () {
        it('should calculate from months only', function () {
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

        it('should throw for stupid param in first position', function () {
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

        it('should throw for stupid param in second position', function () {
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

    describe('calculateFromMonths', function () {
        it('should calculate from years and months', function () {
            expect(testedThing.calculateFromMonths(243)).toEqual({
                percent: 0.06626905235255136,
                decimal: 0.0006626905235255136,
                perBirth: '1/1509'
            });
            expect(testedThing.calculateFromMonths(526)).toEqual({
                percent: 3.3333333333333335,
                decimal: 0.03333333333333333,
                perBirth: '1/30'
            });
        });

        it('should throw for stupid param', function () {
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
