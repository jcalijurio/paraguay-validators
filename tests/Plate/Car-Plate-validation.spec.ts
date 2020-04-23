import { ParaguayPlateValidator } from '../../src/Plate/paraguay-plate-validator';
import { expect } from 'chai';

describe('New Car Plate Format validation', () => {

    let validator: ParaguayPlateValidator;

    beforeEach(() => {
        validator = new ParaguayPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['AAAA999', 'AAAA-999', 'ABCD123', 'ABCD-123', 'abcd123', 'abcd-123',
            'zyxv987', 'zyxv-987'];

        // Act
        const results = plates.map(plate => validator.validateCarPlate(plate));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const plates = ['', null];

        // Act
        const results = plates.map(plate => validator.validateCarPlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value has non digit, letter or digit', () => {
        // Arrange
        const plates = ['@929-Z.29', '9.D.A.', 'DDD.9999', 'AAAA@ZZZ', 'ABC_-123'];

        // Act
        const results = plates.map(plate => validator.validateCarPlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the adjusted value size is different from 7', () => {
        // Arrange
        const plates = ['AAA99999', 'AAAAA-999', 'ABC123', 'ABC-123'];

        // Act
        const results = plates.map(plate => validator.validateCarPlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value format is invalid', () => {
        // Arrange
        const plates = ['A9A9A9A', '999AAAA', 'AB12CD3', '12AB345'];

        // Act
        const results = plates.map(plate => validator.validateCarPlate(plate));

        // Assert
        expect(results).not.contains(true);
    });
});