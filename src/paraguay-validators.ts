import { ParaguayPlateValidator } from './Plate/paraguay-plate-validator';
import { ParaguayRUCValidator } from './RUC/paraguay-ruc-validator';

export class ParaguayValidators {

    RUC: ParaguayRUCValidator = new ParaguayRUCValidator();
    Plate: ParaguayPlateValidator = new ParaguayPlateValidator();

}