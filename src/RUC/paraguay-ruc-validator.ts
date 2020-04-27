export class ParaguayRUCValidator {
    private _regexFormat: RegExp = /^(\d|\.|\-)+$/;
    private _regexAdjust: RegExp = /\D/gi;
    private _baseMod = 11;

    // Validate both RUC types. Fisical and Legal Person.
    validateRUC(ruc: string | null): boolean {
        if (!ruc)
            return false;

        if (!this._regexFormat.test(ruc))
            return false;

        const adjustedRuc = ruc.replace(this._regexAdjust, '');
        if (![8, 9].includes(adjustedRuc.length))
            return false;

        const identityDigitsLength: number = adjustedRuc.length - 2;
        let valueSum = 0;
        let increasingSequenceQtd = 0;
        let decreasingSequenceQtd = 0;
        let equalsDigitQtd = 0;
        for (let index = identityDigitsLength, multiplier = 2; index >= 0; index -= 1, multiplier += 1) {
            valueSum += Number(adjustedRuc[index]) * multiplier;

            if (index > 0) {
                const previousDigit = Number(adjustedRuc[index - 1]);
                const currentDigit = Number(adjustedRuc[index]);
                if (previousDigit === currentDigit)
                    equalsDigitQtd += 1;

                if (currentDigit > previousDigit)
                    increasingSequenceQtd += 1;

                if (previousDigit > currentDigit)
                    decreasingSequenceQtd += 1;
            }
        }

        if (increasingSequenceQtd >= 6 || decreasingSequenceQtd >= 6 || equalsDigitQtd >= 6)
            return false;

        const mod = valueSum % this._baseMod;
        const verifyDigit = mod > 1 ? this._baseMod - mod : 0;

        return adjustedRuc[identityDigitsLength + 1] === verifyDigit.toString();
    }

    validateIndividualRUC = (ruc: string | null) =>
        ruc && ruc.replace(this._regexAdjust, '').length === 8 && this.validateRUC(ruc)

    validateCompanyRUC = (ruc: string | null) =>
        ruc && ruc.replace(this._regexAdjust, '').length === 9 && this.validateRUC(ruc)

}
