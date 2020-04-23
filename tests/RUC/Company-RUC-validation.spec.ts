import { ParaguayRUCValidator } from '../../src/RUC/paraguay-ruc-validator';
import { expect } from 'chai';

describe('Exclusive Company RUC validation', () => {

    let validator: ParaguayRUCValidator;

    beforeEach(() => {
        validator = new ParaguayRUCValidator();
    });

    it('Must be a valid RUC when the value is OK', () => {
        // Arrange
        const rucList = ['223344559', '22334455-9', '22.334.455-9', '564823570',
            '56482357-0', '56.482.357-0'];

        // Act
        const results = rucList.map(ruc => validator.validateCompanyRUC(ruc));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const rucList = [null, ''];

        // Act
        const results = rucList.map(ruc => validator.validateCompanyRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value length is not equal to 9', () => {
        // Arrange
        const rucList = ['1234567890', '87654321', '54932874'];

        // Act
        const results = rucList.map(ruc => validator.validateCompanyRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the digit is invalid', () => {
        // Arrange
        const rucList = ['987654321', '998877665'];

        // Act
        const results = rucList.map(ruc => validator.validateCompanyRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });
});