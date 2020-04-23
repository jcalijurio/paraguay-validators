import { ParaguayPlateValidator } from './Plate/paraguay-plate-validator';
import { ParaguayRUCValidator } from './RUC/paraguay-ruc-validator';

export class ParaguayValidator {

    RUC: ParaguayRUCValidator = new ParaguayRUCValidator();
    Plate: ParaguayPlateValidator = new ParaguayPlateValidator();

}