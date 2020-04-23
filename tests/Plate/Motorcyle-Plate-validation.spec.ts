import { ParaguayPlateValidator } from '../../src/Plate/paraguay-plate-validator';
import { expect } from 'chai';

describe('New Motorcyle Plate Format validation', () => {

    let validator: ParaguayPlateValidator;

    beforeEach(() => {
        validator = new ParaguayPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['999AAAA', '999-AAAA', '123-ABCD', '123-ABCD', '123abcd', '123-abcd',
            '987zyxv', '987-zyxv'];

        // Act
        const results = plates.map(plate => validator.validateMotorcyclePlate(plate));

        // Assert
        expect(results).not.contains(false);
    });

    it('Must be invalid when the value is null or empty', () => {
        // Arrange
        const plates = ['', null];

        // Act
        const results = plates.map(plate => validator.validateMotorcyclePlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value has non digit, letter or digit', () => {
        // Arrange
        const plates = ['@929-Z.29', '9.D.A.', '9999.DDD', 'AAAA@ZZZ', '123-ABC_'];

        // Act
        const results = plates.map(plate => validator.validateMotorcyclePlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the adjusted value size is different from 7', () => {
        // Arrange
        const plates = ['99999AAA', '999-AAAAA', '123ABC', '123-ABC'];

        // Act
        const results = plates.map(plate => validator.validateMotorcyclePlate(plate));

        // Assert
        expect(results).not.contains(true);
    });

    it('Must be invalid when the value format is invalid', () => {
        // Arrange
        const plates = ['A9A9A9A', 'AAAA999', 'AB12CD3', '12AB345'];

        // Act
        const results = plates.map(plate => validator.validateMotorcyclePlate(plate));

        // Assert
        expect(results).not.contains(true);
    });
});