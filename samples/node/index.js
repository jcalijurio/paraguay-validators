const { ParaguayValidators } = require('../../dist/paraguay-validators');

const validator = new ParaguayValidators();

const rucIsValid = validator.RUC.validateRUC('564823570'); // For Companies and Natural Persons
const companyRucIsValid = validator.RUC.validateCompanyRUC('564823570'); // Only for Companies
const personRucIsValid = validator.RUC.validateIndividualRUC('64823571'); // Only for Natural Persons

const plateIsValid = validator.Plate.validate('ABC123'); // For old and new formats
const oldPlateIsValid = validator.Plate.validateOldPlate('ABC123'); // Only old format.
const carPlateIsValid = validator.Plate.validateCarPlate('ABCD123'); // Only new Car Mercosul format of Paraguay.
const motoPlateValid = validator.Plate.validateMotorcyclePlate('123ABCD'); // Only new Motorcyle Mercosul format of Paraguay.


console.log('General RUC: ', rucIsValid);
console.log('Company RUC: ', companyRucIsValid);
console.log('Person RUC:', personRucIsValid);

console.log('General Plate: ', plateIsValid);
console.log('Old Plate: ', oldPlateIsValid);
console.log('Car Plate:', carPlateIsValid);
console.log('Motorcycle Plate: ', motoPlateValid);