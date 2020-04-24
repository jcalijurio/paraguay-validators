paraguay-validators
==============
[![npm version](https://img.shields.io/npm/v/paraguay-validators.svg)](https://www.npmjs.com/package/paraguay-validators)
[![Build Status](https://travis-ci.org/jcalijurio/paraguay-validators.svg)](https://travis-ci.org/jcalijurio/paraguay-validators)

Paraguay RUC number and Car Plate validators / Validaciones de numero RUC y Placa de vehículo.

## Instalation ##

### With npm

```bash
npm i paraguay-validators
```

### Running tests ###

```bash
npm run test
```

## Validations ##

### RUC ###

Generic RUC validator for Individual Person and Company.

```javascript
const { ParaguayValidators } = require('paraguay-validators');
const validator = new ParaguayValidators();

const isValid = validator.RUC.validateRUC('564823570'); // For Companies and Natural Persons
const companyIsValid = validator.RUC.validateCompanyRUC('564823570'); // Only for Companies
const personIsValid = validator.RUC.validateIndividualRUC('64823571'); // Only for Natural Persons
```

### Car Plates ###

Vehicle Plate validator for new Mercosul Plates of Paraguay and old car plates format of Paraguay.

```javascript
const { ParaguayValidators } = require('paraguay-validators');
const validator = new ParaguayValidators();

const isValid = validator.Plate.validate('ABC123'); // For old and new formats
const oldIsValid = validator.Plate.validateOldPlate('ABC123'); // Only old format.
const carIsValid = validator.Plate.validateCarPlate('ABCD123'); // Only new Car Mercosul format of Paraguay.
const motoValid = validator.Plate.validateMotorcyclePlate('123ABCD'); // Only new Motorcyle Mercosul format of Paraguay.
```

### ROADMAP ###

New validators to be implemented.

  - Phone
  - Postal Code