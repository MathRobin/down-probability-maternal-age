function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export function calculate(years, months) {
  if (!isNumber(years) || !isNumber(months)) {
    throw new Error('Bad arguments');
  }

  const monthsRounded = +years + +months / 12;
  const monthsRoundedPow2 = Math.pow(monthsRounded, 2);
  const monthsRoundedPow3 = Math.pow(monthsRounded, 3);
  const probability = Math.round(
    1 /
      (0.0005907 +
        Math.pow(
          2.71828182845905,
          -5.182617 -
            monthsRounded * 0.6321469 +
            monthsRoundedPow2 * 0.025215 -
            monthsRoundedPow3 * 0.0002285
        ))
  );
  const result = {
    decimal: 1 / +probability,
    perBirth: '1/' + probability.toString(),
  };

  result.percent = result.decimal * 100;

  return result;
}

export function calculateFromMonths(months) {
  if (!isNumber(months)) {
    throw new Error('Bad arguments');
  }

  return calculate(Math.round(months / 12), months % 12);
}
