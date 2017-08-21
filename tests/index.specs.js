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

        it('should throw for stupid param', function () {
            try {
                expect(testedThing.calculate());
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculate(null));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculate(''));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculate('abcd'));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculate(20));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculate(20, null));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculate(20, ''));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculate(20, 'abcd'));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
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
            try {
                expect(testedThing.calculateFromMonths());
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculateFromMonths(null));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculateFromMonths(''));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
            try {
                expect(testedThing.calculateFromMonths('abcd'));
                expect(true).toBe(false);
            } catch (eX) {
                expect(true).toBe(true);
            }
        });
    });
});
