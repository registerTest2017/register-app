import React, { Component, PropTypes } from 'react';
import { ValidateAllTypes } from './controller/index';
/* eslint-disable no-console */
export class Validated extends Component {
    constructor (props, context) {
        super(props, context);
        console.log(context, 'context');
        this.state = {
            value: this.props.value,
            tipElement: null
        };
        this.provider = context.validation;
        this.validator = this.provider.register(this.props.id, ValidateAllTypes[this.props.type], {
            tag: props.tag || '',
            ...(this.props.errorMsg || {}),
            onError: props.onError
        });
        this.validate = this.validate.bind(this);
        this.setConfig = this.setConfig.bind(this);
        this.setConfig(props);
    }
    setConfig (props) {
        const nProps = {
            ...props,
            handleOnError: (element) => {
                this.setState({
                    tipElement: element
                });
            }
        };
        console.log(this.validator, 'validator validated');
        if (this.validator) {
            Object.assign(this.validator, nProps);
        }
        console.log(this.validator, 'validator validated after');
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps, 'nextProps');
        if (nextProps.value !== this.state.value) {
            this.validate(nextProps);
            this.setState({
                value: nextProps.value
            });
        }
    }
    validate (nextProps) {
        const { value } = nextProps;
        const { id } = this.props;
        const result = this.provider.validate(id, value, nextProps);
        console.log(result, 'result');
        if (!result) {
            this.setState({
                tipElement: nextProps.onError('errorCode', 'please input the error')
            });
        }
    }
    render () {
        const { tipElement } = this.state;
        return (
            <div>
                {this.props.children}
                { tipElement && tipElement }
            </div>
        );
    }
}

Validated.contextTypes = {
    validation: PropTypes.object,
    store: PropTypes.object
};

Validated.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ]),
    errorMsg: PropTypes.object,
    tag: PropTypes.string,
    onError: PropTypes.func
};
export default Validated;
