import { ParaguayPlateValidator } from './Plate/paraguay-plate-validator';
import { ParaguayRUCValidator } from './RUC/paraguay-ruc-validator';
import { ParaguayValidators } from './paraguay-validators';

declare global {
    interface Window {
        ParaguayValidators: any;
        ParaguayRUCValidator: any;
        ParaguayPlateValidator: any;
    }
}

declare interface MyProps {
    ParaguayValidators: any;
    ParaguayRUCValidator: any;
    ParaguayPlateValidator: any;
}

(window as MyProps).ParaguayValidators = ParaguayValidators;
(window as MyProps).ParaguayRUCValidator = ParaguayRUCValidator;
(window as MyProps).ParaguayPlateValidator = ParaguayPlateValidator;