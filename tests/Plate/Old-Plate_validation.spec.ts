import { ParaguayPlateValidator } from '../../src/Plate/paraguay-plate-validator';
import { expect } from 'chai';

describe('OLD Plate Format validation', () => {

    let validator: ParaguayPlateValidator;

    beforeEach(() => {
        validator = new ParaguayPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['AAA999', 'AAA-999', 'ABC123', 'ABC-123', 'abc123', 'abc-123',
            'zyx987', 'zyx-987'];

        // Act
        const results = plates.map(plate => validator.validateOldPlate(plate));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const plates = ['', null];

        // Act
        const results = plates.map(plate => validator.validateOldPlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value has non digit, letter or digit', () => {
        // Arrange
        const plates = ['@929-Z.29', '9.D.A.', 'DDD.999', 'AAA@ZZZ'];

        // Act
        const results = plates.map(plate => validator.validateOldPlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the adjusted value size is different from 6', () => {
        // Arrange
        const plates = ['AAA9999', 'AAAA-999', 'ABCD1234', 'ABCD-1234'];

        // Act
        const results = plates.map(plate => validator.validateOldPlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value format is invalid', () => {
        // Arrange
        const plates = ['A9A9A9', '999AAA', 'AB12CD', '12AB34', 'AB_123'];

        // Act
        const results = plates.map(plate => validator.validateOldPlate(plate));

        // Assert
        expect(results).not.contains(true);
    });
});