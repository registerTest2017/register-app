import React, { Component, PropTypes } from 'react';
import { ValidateAllTypesFun } from './controller/index';

/* eslint-disable no-console */
class ValidationProvider extends Component {
    constructor (props, context) {
        super(props, context);
        this.store = context.store;
        this.validateState = {
            register: this.register,
            validate: this.validate,
            validators: [],
            validatorController: ValidateAllTypesFun
        };
        this.validators = {};
    }
    getChildContext () {
        return {
            validation: {
                ...this.validateState
            },
            store: this.store
        };
    }
    register (id, type, options) {
        console.log(id, type, options, 'provider register');
        const config = {
            tag: '',
            onError: () => {}
        };
        console.log(this, 'this');
        const { validatorController } = this;
        if (validatorController[type]) {
            const ValidatorType = validatorController[type];
            console.log(ValidatorType, 'ValidatorType');
            const validate = new ValidatorType({
                id,
                ...config
            });
            console.log(validate, 'validate existsController');
            console.log(this.validators, 'this.validators before');
            this.validators.push(validate);
            console.log(this.validators, 'validators register');
            return validate;
        } else {
            throw new Error('Canot find the Validate Type');
        }
    }
    validate (id, value, props) {
        console.log(props, 'props provider');
        const { validators } = this;
        let result = false;
        if (validators && validators.length > 0) {
            let validateObject = null;
            Object.keys(validators).map((key) => {
                const curValidator = validators[key];
                console.log(curValidator, 'curValidator');
                if (curValidator.id === id) {
                    validateObject = curValidator;
                }
            });
            if (validateObject !== null) {
                const properties = props || validateObject.properties;
                console.log(validateObject, 'validateObject');
                console.log(properties, 'properties');
                result = validateObject.validate(value, properties);
            }
        }
        return result;
    }
    render () {
        console.log(this.validateState, 'validateState');
        return (
            <div>
                <div>1233</div>
                {this.props.children}
            </div>
        );
    }
}
ValidationProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
        PropTypes.number
    ])
};
ValidationProvider.contextTypes = {
    store: PropTypes.object.isRequired
};
ValidationProvider.childContextTypes = {
    validation: PropTypes.object,
    store: PropTypes.object
};

export default ValidationProvider;
