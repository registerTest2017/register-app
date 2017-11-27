/* eslint-disable no-console */
export class Validator {
    constructor (config) {
        this.onError = this.onError.bind(this);
        const myConfig = {
            id: '',
            tag: '',
            onError: () => {}
        };
        this.extend(myConfig, config);
        this.id = myConfig.id;
        this.tag = myConfig.tag;
    }
    validate () {
        throw new Error('Override & Implementation of "validate" method is required.');
    }
    onError () {
        console.log('onError');
    }
    extend (des, src) {
        for (const key in src) {
            des[key] = src[key];
        }
    }
    getType (value) {
        return Object.prototype.toString.call(value);
    }
    isString (value) {
        return this.getType(value) === '[object String]';
    }
    isNumber (value) {
        return this.getType(value) === '[object Number]';
    }
    isNull (value) {
        return value === undefined || value === null;
    }
}

export default {};
