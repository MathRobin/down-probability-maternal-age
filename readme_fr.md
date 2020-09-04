# down-probability-maternal-age 
[![Build Status](https://travis-ci.org/MathRobin/down-probability-maternal-age.svg)](https://travis-ci.org/MathRobin/down-probability-maternal-age)

Calcule la probabilité qu'une mère engendre un enfant atteint de trisomie 21 (syndrome de Dawn).
En fonction de l'âge de la mère.

Attention, ce n'est plus du tout la meilleure façon de calculer la probabilité de ce syndrome. Consultez un spécialiste.

English version here : [Readme EN](https://github.com/MathRobin/down-probability-maternal-age/blob/master/readme.md)

## Installation

```shell
npm i -S down-probability-maternal-age
```
ou yarn
```shell
yarn add down-probability-maternal-age
```

## calculate

```javascript
var downProbabilityMaternalAge = require('down-probability-maternal-age');

downProbabilityMaternalAge.calculate(20, 3);
 // {percent: 0.06626905235255136, decimal: 0.0006626905235255136, perBirth: '1/1509'}
```

### Paramètres

 - Années : nombre d'années de vie de la mère ;
 - Mois : nombre de mois dans l'année en cours.

Dans l'exemple ci-dessus, la mère aurait 20 ans et 3 mois.

### Retour

Un objet contenant :
 - La probabilité en pourcentage ;
 - La probabilité en valeur décimale ;
 - Fréquence d'apparition du syndrome.

La fréquence d'apparition dans l'exemple ci-dessus correspond à un cas toutes les 1509 naissances, en moyenne.


## calculateFromMonths

```javascript
var downProbabilityMaternalAge = require('down-probability-maternal-age');

downProbabilityMaternalAge.calculateFromMonths(526);
 // {percent: 3.3333333333333335, decimal: 0.03333333333333333, perBirth: '1/30'}
```

### Paramètre

Ici l'âge de la mère est exprimé uniquement en nombre de mois.

Dans l'exemple ci-dessus, la mère aurait 526 mois, soit 43 ans et 10 mois.

### Retour

*Cette fonction n'est qu'un proxy à la méthode calculate présentée plus tôt. Le retour est donc le même.*

La fréquence d'apparition dans l'exemple ci-dessus correspond à un cas toutes les 30 naissances, en moyenne.

## License

WTFPL
