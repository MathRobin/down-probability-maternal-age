/*globals module, require */

module.exports = (function () {
    'use strict';

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function calculate(years, months) {
        if (!isNumber(years) || !isNumber(months)) {
            throw new Error('Bad arguments');
        }

        const
            monthsRounded = (+years + (+months / 12)),
            monthsRoundedPow2 = Math.pow(monthsRounded, 2),
            monthsRoundedPow3 = Math.pow(monthsRounded, 3),
            probability = Math.round(1 / (0.0005907 + Math.pow(2.71828182845905, (-5.182617 - monthsRounded * 0.6321469 + monthsRoundedPow2 * 0.0252150 - monthsRoundedPow3 * 0.0002285)))),
            result = {
                decimal: 1 / +probability,
                perBirth: '1/' + probability.toString()
            };

        result.percent = result.decimal * 100;

        return result;
    }

    function calculateFromMonths(months) {
        if (!isNumber(months)) {
            throw new Error('Bad arguments');
        }

        return calculate(Math.round(months / 12), months % 12);
    }

    return {
        calculateFromMonths: calculateFromMonths,
        calculate: calculate
    };
}());
