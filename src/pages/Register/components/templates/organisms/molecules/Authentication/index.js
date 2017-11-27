import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { RegisterInput } from '../../../atoms';
import styles from '../../../../styles/Register.scss';

/* eslint-disable no-console */
class Authentication extends Component {
    constructor (props) {
        super(props);
        const messages = props.intl.messages;
        this.volidateSelect = [
            { title: messages['register.authentication.selectYes'], value: 'Yes' },
            { title: messages['register.authentication.selectNo'], value: 'No' }
        ];
        this.state = {
            isPhoneVolidate: this.props.isPhoneVolidate
        };
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.getDefaultSelectValue = this.getDefaultSelectValue.bind(this);
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.isPhoneVolidate !== this.state.isPhoneVolidate) {
            this.setState({
                isPhoneVolidate: nextProps.isPhoneVolidate
            });
        }
    }
    getDefaultSelectValue (SelectData, checkValue) {
        let result = null;
        if (checkValue === undefined || checkValue === null || checkValue === '') {
            result = SelectData[0];
        } else {
            SelectData.map((item) => {
                if (item.value === checkValue) {
                    result = item;
                }
            });
        }
        return result;
    }
    handleOnInputChange (value) {
        this.props.AuthenticationUpdateInput && this.props.AuthenticationUpdateInput(value);
    }
    render () {
        const { intl } = this.props;
        const { messages } = intl;
        const volidateSelect = this.getDefaultSelectValue(this.volidateSelect, this.state.isPhoneVolidate);
        // const isVolidateDisplay = this.state.isPhoneVolidate === 'yes' || this.state.isPhoneVolidate === null ? '是' : '否';
        return (
            <div className={classNames(styles.RegisterInfoContainer, styles.PersonalInfoContainer)}>
                <ul>
                    <li>
                        <RegisterInput name="idCard" title={messages['register.authentication.idCard']} isMustInput
                            value={this.props.idCard}
                            onChange={(value) => {
                                this.handleOnInputChange({
                                    idCard: value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <RegisterInput name="cusName" title={messages['register.authentication.cusName']} isMustInput
                            value={this.props.cusName}
                            onChange={(value) => {
                                this.handleOnInputChange({
                                    cusName: value
                                });
                            }}
                        />
                    </li>

                    { false &&
                        <li>
                            <RegisterInput name="bankCard" title={messages['register.authentication.bankCard']} isMustInput
                                value={this.props.bankCard}
                                onChange={(value) => {
                                    this.handleOnInputChange({
                                        bankCard: value
                                    });
                                }}
                            />
                        </li>
                    }

                    <li>
                        <RegisterInput name="phoneVolidate" title={messages['register.authentication.phoneVolidate']} type="select" data={this.volidateSelect} isMustInput
                            initialDisplayValue={volidateSelect.title}
                            initialValue={volidateSelect.value}
                            onChange={(value) => {
                                this.handleOnInputChange({
                                    isPhoneVolidate: value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <RegisterInput name="phoneNumber" title={messages['register.authentication.phoneNumber']} isMustInput
                            value={this.props.phoneNumber}
                            onChange={(value) => {
                                this.handleOnInputChange({
                                    phoneNumber: value
                                });
                            }}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

Authentication.propTypes = {
    AuthenticationUpdateInput: PropTypes.func.isRequired,
    bankCard: PropTypes.string.isRequired,
    cusName: PropTypes.string.isRequired,
    idCard: PropTypes.string.isRequired,
    intl: PropTypes.object.isRequired,
    isPhoneVolidate: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired
};

export default injectIntl(Authentication);
