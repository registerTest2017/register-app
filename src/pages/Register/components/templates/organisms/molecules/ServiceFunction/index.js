import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { FormattedHTMLMessage, injectIntl } from 'react-intl';
import { RegisterInput } from '../../../atoms';
import styles from '../../../../styles/Register.scss';

/* eslint-disable no-console */
class ServiceFunction extends Component {
    constructor (props) {
        super(props);
        const messages = props.intl.messages;
        this.yesNoSelect = [
            { title: messages['register.serviceFunction.selectYes'], value: 'yes' },
            { title: messages['register.serviceFunction.selectNo'], value: 'no' }
        ];
        this.rmbTypeSelect = [
            { title: messages['register.serviceFunction.rmbTypeSelectYes'], value: 'yes' },
            { title: messages['register.serviceFunction.rmbTypeSelectNo'], value: 'no' }
        ];
        this.dollarTypeSelect = [
            { title: messages['register.serviceFunction.dollarTypeSelectRmb'], value: 'rmb' },
            { title: messages['register.serviceFunction.dollarTypeSelectDollar'], value: 'dollar' },
            { title: messages['register.serviceFunction.dollarTypeSelectRmbn'], value: 'rmbn' }
        ];
        this.getDefaultSelectValue = this.getDefaultSelectValue.bind(this);
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
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
        this.props.serviceFunctionInput && this.props.serviceFunctionInput(value);
    }
    render () {
        const { intl, isBankCustom, rmbType, dollarType } = this.props;
        const { messages } = intl;
        const initIsBankCus = this.getDefaultSelectValue(this.yesNoSelect, isBankCustom);
        const initRmbType = this.getDefaultSelectValue(this.rmbTypeSelect, rmbType);
        const initDollarType = this.getDefaultSelectValue(this.dollarTypeSelect, dollarType);
        return (
            <div className={classNames(styles.ServiceFunctionContainer, styles.RegisterInfoContainer)}>
                <ul>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft} />
                                <div className={styles.columnsRight}>
                                    <div className={styles.rightErrorTips} style={{ display: 'block' }}>
                                        <p>
                                            <FormattedHTMLMessage id="register.serviceFunction.serviceTips" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <RegisterInput title={messages['register.serviceFunction.emailTitle']} isMustInput
                            name="email"
                            value={this.props.email}
                            onChange={(value) => {
                                this.handleOnInputChange({
                                    email: value
                                });
                            }}
                        >
                            <div className={classNames([styles.rightErrorTips, styles.emailTips])}>
                                <p>
                                    <FormattedHTMLMessage id="register.serviceFunction.emailTips" />
                                </p>
                            </div>
                        </RegisterInput>
                    </li>

                    { false &&
                        <li style={{ zIndex: 3 }}>
                            <RegisterInput title={messages['register.serviceFunction.isBankCustom']} isMustInput
                                name="isBankCustom"
                                type="select"
                                initialDisplayValue={initIsBankCus.title}
                                initialValue={initIsBankCus.value}
                                data={this.yesNoSelect}
                                onChange={(value) => {
                                    this.handleOnInputChange({
                                        isBankCustom: value
                                    });
                                }}
                            />
                        </li>
                    }

                    { false &&
                        <li>
                            <RegisterInput title={messages['register.serviceFunction.curCardNo']}
                                name="curCardNo"
                                value={this.props.curCardNo}
                                onChange={(value) => {
                                    this.handleOnInputChange({
                                        curCardNo: value
                                    });
                                }}
                            />
                        </li>
                    }

                    <li style={{ zIndex: 2 }}>
                        <RegisterInput title={messages['register.serviceFunction.rmbType']}
                            name="rmbType"
                            type="select"
                            initialDisplayValue={initRmbType.title}
                            initialValue={initRmbType.value}
                            data={this.rmbTypeSelect}
                            onChange={(value) => {
                                this.handleOnInputChange({
                                    rmbType: value
                                });
                            }}
                        />
                    </li>
                    <li style={{ zIndex: 1 }}>
                        <RegisterInput title={messages['register.serviceFunction.dollarType']} isMustInput
                            name="dollarType"
                            type="select"
                            initialDisplayValue={initDollarType.title}
                            initialValue={initDollarType.value}
                            data={this.dollarTypeSelect}
                            onChange={(value) => {
                                this.handleOnInputChange({
                                    dollarType: value
                                });
                            }}
                        />
                    </li>
                </ul>
                <div className={styles.serviceFunctionNote}>
                    <h5>{messages['register.serviceFunction.noteTitle']}</h5>
                    <div>
                        <FormattedHTMLMessage id="register.serviceFunction.noteContext" />
                    </div>
                </div>
            </div>
        );
    }
}

ServiceFunction.propTypes = {
    curCardNo: PropTypes.string.isRequired,
    dollarType: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    intl: PropTypes.object.isRequired,
    isBankCustom: PropTypes.string.isRequired,
    rmbType: PropTypes.string.isRequired,
    serviceFunctionInput: PropTypes.func.isRequired
};

export default injectIntl(ServiceFunction);
