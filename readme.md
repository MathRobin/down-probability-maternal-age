# down-probability-maternal-age [![Build Status](https://travis-ci.org/MathRobin/down-probability-maternal-age.svg)](https://travis-ci.org/MathRobin/down-probability-maternal-age)

Calculate probability of Down syndrom from maternal age.

French version here : [Readme FR](https://github.com/MathRobin/down-probability-maternal-age/blob/master/readme_fr.md)

## Setup

```shell
npm i -S down-probability-maternal-age
```

## calculate

```javascript
var downProbabilityMaternalAge = require('down-probability-maternal-age');

downProbabilityMaternalAge.calculate(20, 3);
 // {percent: 0.06626905235255136, decimal: 0.0006626905235255136, perBirth: '1/1509'}
```

### Arguments

 - Years : number of years of live,
 - Months : number of month of live in current year.

In the example above, mother has 20 years and 3 months.

### Returns

An object containing :
 - Probability in percent,
 - Probability in float,
 - Syndrome's frequency.

In this sample, frequency is about one case for each 1509 births.


## calculateFromMonths

```javascript
var downProbabilityMaternalAge = require('down-probability-maternal-age');

downProbabilityMaternalAge.calculateFromMonths(526);
 // {percent: 3.3333333333333335, decimal: 0.03333333333333333, perBirth: '1/30'}
```

### Argument

Here, age of mother is only in months.

So in this sample, mother has 526 months, corresponding to 43 yeas and 10 months.

### Returns

*This function is a proxy of function calculate. So the return is exactly the same.*

For the example above, frequency is about 1 case for each 30 births.

## License

WTFPL
