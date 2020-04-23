import { ParaguayRUCValidator } from '../../src/RUC/paraguay-ruc-validator';
import { expect } from 'chai';

describe('RUC Individual and Company validation', () => {

    let validator: ParaguayRUCValidator;

    beforeEach(() => {
        validator = new ParaguayRUCValidator();
    });

    it('Must be a valid RUC when the value is OK', () => {
        // Arrange
        const rucList = ['801077290', '80107729-0', '80.107.729-0', '223344559',
            '23344555', '2334455-5', '2.334.455-5', '74389157'];

        // Act
        const results = rucList.map(ruc => validator.validateRUC(ruc));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value ís empty or null', () => {
        // Arrange
        const rucList = ['', null];

        // Act
        const results = rucList.map(ruc => validator.validateRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value contains non digit, dash or dot', () => {
        // Arrange
        const rucList = ['80@10-77.29A0', '2.2Z334J45-59', '23@344555', '74U38T915X7'];

        // Act
        const results = rucList.map(ruc => validator.validateRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the length is not between 8 and 9 digits', () => {
        // Arrange
        const rucList = ['123', '8010772901', '3344555', '7438915700'];

        // Act
        const results = rucList.map(ruc => validator.validateRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the digit is invalid', () => {
        // Arrange
        const rucList = ['801077291', '223344550', '23344552', '74389158'];

        // Act
        const results = rucList.map(ruc => validator.validateRUC(ruc));

        // Assert
        expect(results).not.contains(true);
    });
});