import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Input, Dropdown, DropdownItem } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';
import styles from '../../../styles/Register.scss';
/* eslint-disable no-console */
class RegisterInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
            initialValue: this.props.initialValue,
            initialDisplayValue: this.props.initialDisplayValue
        };
        this.renderInputContainer = this.renderInputContainer.bind(this);
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.handleOnSelectChange = this.handleOnSelectChange.bind(this);
    }
    componentWillReceiveProps (nextProps) {
        if (this.props.type === 'select') {
            if (nextProps.initialValue !== this.state.initialValue) {
                this.setState({
                    initialValue: nextProps.initialValue,
                    initialDisplayValue: nextProps.initialDisplayValue
                });
            }
        }
    }
    handleOnInputChange (event) {
        this.props.onChange && this.props.onChange(event.target.value);
    }
    handleOnSelectChange (value) {
        this.props.onChange && this.props.onChange(value);
    }
    renderInputContainer () {
        let result = '';
        const { type, data } = this.props;
        if (type === 'select') {
            result = (
                <Dropdown onChange={this.handleOnSelectChange}
                    initialDisplayValue={this.state.initialDisplayValue}
                    initialValue={this.state.initialValue}
                    value={this.state.initialValue}
                    id={this.props.name}
                    name={this.props.name}
                    theme={styles}
                >
                    {
                        data && data.map && data.map((item, key) => {
                            const value = item.value || '';
                            const title = item.title || '';
                            return (
                                <DropdownItem key={key} value={value} displayValue={title} theme={styles} />
                            );
                        })
                    }
                </Dropdown>
            );
        } else {
            result = (
                <Input
                    id={this.props.name}
                    name={this.props.name}
                    theme={styles}
                    value={this.props.value}
                    onChange={this.handleOnInputChange}
                />
            );
        }
        return result;
    }
    render () {
        return (
            <div className={styles.Rows}>
                <div className={classNames(styles.columns, styles.oneCols)}>
                    <div className={styles.columnsLeft}>
                        <label htmlFor={this.props.name}>
                            {this.props.title}
                            {
                                this.props.isMustInput &&
                                <i>*</i>
                            }
                        </label>
                    </div>
                    <div className={styles.columnsRight}>
                        {this.renderInputContainer()}
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

RegisterInput.propTypes = {
    isMustInput: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ]),
    data: PropTypes.array,
    initialDisplayValue: PropTypes.string,
    initialValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    onChange: PropTypes.func
};

RegisterInput.defaultProps = {
    isMustInput: false,
    title: '',
    type: 'input',
    data: []
};

export default RegisterInput;
