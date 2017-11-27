import { Validator } from '../Validator';

export class MandatoryValidator extends Validator {
    validate (value, options) {
        const config = {
            errMsg: 'Please input the value'
        };
        this.extend(config, options);
        if (value === undefined || value === null) {
            this.onError('requireError', config.errMsg);
            return false;
        } else if (this.isString(value) & value.length <= 0) {
            return false;
        } else {
            return true;
        }
    }
}

export default {};
