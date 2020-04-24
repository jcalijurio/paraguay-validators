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
        for (let index = identityDigitsLength, multiplier = 2; index >= 0; index -= 1, multiplier += 1) {
            valueSum += Number(adjustedRuc[index]) * multiplier;
        }

        const mod = valueSum % this._baseMod;
        const verifyDigit = mod > 1 ? this._baseMod - mod : 0;

        return adjustedRuc[identityDigitsLength + 1] === verifyDigit.toString();
    }

    validateIndividualRUC = (ruc: string | null) =>
        ruc && ruc.replace(this._regexAdjust, '').length === 8 && this.validateRUC(ruc)

    validateCompanyRUC = (ruc: string | null) =>
        ruc && ruc.replace(this._regexAdjust, '').length === 9 && this.validateRUC(ruc)

}
