import { ParaguayPlateValidator } from '../../src/Plate/paraguay-plate-validator';
import { expect } from 'chai';

describe('Plate Format validation', () => {

    let validator: ParaguayPlateValidator;

    beforeEach(() => {
        validator = new ParaguayPlateValidator();
    });

    it('Must be valid when the value is OK', () => {
        // Arrange
        const plates = ['AAA999', 'AAA-999', 'ABC123', 'ABC-123', 'abc123', 'abc-123',
            'zyx987', 'zyx-987', '999AAAA', '999-AAAA', '123-ABCD', '123-ABCD', '123abcd', '123-abcd',
            '987zyxv', '987-zyxv', 'AAAA999', 'AAAA-999', 'ABCD123', 'ABCD-123', 'abcd123', 'abcd-123',
            'zyxv987', 'zyxv-987'];

        // Act
        const results = plates.map(plate => validator.validate(plate));

        // Assert
        expect(results).not.contains(false);
    });
});