import { ParaguayRUCValidator } from '../../src/RUC/paraguay-ruc-validator';
import { expect } from 'chai';

describe('Exclusive Individual RUC validation', () => {

    let validator: ParaguayRUCValidator;

    beforeEach(() => {
        validator = new ParaguayRUCValidator();
    });

    it('Must be a valid RUC when the value is OK', () => {
        // Arrange
        const rucList = ['54932874', '5493287-4', '5.493.287-4', '99887762',
            '9988776-2', '9.988.776-2'];

        // Act
        const results = rucList.map(ruc => validator.validateIndividualRUC(ruc));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const rucList = [null, ''];

        // Act
        const results = rucList.map(ruc => validator.validateIndividualRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value length is not equal to 8', () => {
        // Arrange
        const rucList = ['123456789', '876543212'];

        // Act
        const results = rucList.map(ruc => validator.validateIndividualRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the digit is invalid', () => {
        // Arrange
        const rucList = ['12345678', '87654321'];

        // Act
        const results = rucList.map(ruc => validator.validateIndividualRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });
});