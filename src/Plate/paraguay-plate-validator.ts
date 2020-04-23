export class ParaguayPlateValidator {
    private _regexOldPlate: RegExp = /^[a-zA-Z]{3}\d{3}$/i;
    private _regexCarPlate: RegExp = /^[a-zA-Z]{4}\d{3}$/i;
    private _regexMotorcyclePlate: RegExp = /^\d{3}[a-zA-Z]{4}$/i;

    private _regexCheckContent = /[^A-Za-z0-9\-]/;
    private _regexAdjust = /[^A-Za-z0-9]/gi;

    private _generalValidate(plate: string | null, validSize: number): boolean {
        if (!plate)
            return false;

        if (this._regexCheckContent.test(plate))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        if (adjustedPlate.length != validSize)
            return false;

        return true;
    }

    private _adjustContent = (plate: string | null) => plate ? plate.replace(this._regexAdjust, '') : '';

    validateOldPlate(plate: string | null): boolean {
        if (!this._generalValidate(plate, 6))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexOldPlate.test(adjustedPlate);
    }

    validateCarPlate(plate: string | null): boolean {
        if (!this._generalValidate(plate, 7))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        return this._regexCarPlate.test(adjustedPlate);
    }

    validateMotorcyclePlate(plate: string | null): boolean {
        if (!plate)
            return false;

        if (this._regexCheckContent.test(plate))
            return false;

        const adjustedPlate = this._adjustContent(plate);
        if (adjustedPlate.length != 7)
            return false;

        return this._regexMotorcyclePlate.test(adjustedPlate);
    }
}