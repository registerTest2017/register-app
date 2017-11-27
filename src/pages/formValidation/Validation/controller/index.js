import { MandatoryValidator } from './MandatoryValidator';
import { MinValidator } from './MinValidator';

export const ValidateAllTypes = {
    Mandatory: 'Mandatory',
    Min: 'Min'
};

export const ValidateAllTypesFun = {
    'Mandatory': MandatoryValidator,
    'Min': MinValidator
};
