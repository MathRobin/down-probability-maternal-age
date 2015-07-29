# down-probability-maternal-age

Calculate probability of Down syndrom from maternal age.

*Français : Calcule la probabilité qu'une mère engendre un enfant atteint de trisomie 21 (syndrome de Dawn). En fonction de l'âge de la mère. *

## Setup

```shell
npm i -S down-probability-maternal-age
```

## Usage

Get gestational age in days.

```javascript
var downProbabilityMaternalAge = require('down-probability-maternal-age');

downProbabilityMaternalAge.calculate(20, 3) // {percent: 0.06626905235255136, decimal: 0.0006626905235255136, perBirth: '1/1509'}
downProbabilityMaternalAge.calculateFromMonths(526) // {percent: 3.3333333333333335, decimal: 0.03333333333333333, perBirth: '1/30'}
```

## License

MIT