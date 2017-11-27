import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Input, Checkbox } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';
import YesNoButton from '../../../../../../../shared/components/templates/yesNoButton';

import cardJPG from '../../../../../../../images/card.jpg';

import ProvincesAndCities from './atoms/provincesAndCities';
import ApplyCardCurrency from './atoms/applyCardCurrency';
import PhoneVerificationCode from './atoms/phoneVerificationCode';

import styles from './style.scss';
/* eslint-disable no-console */
class BasicInfoCom extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange (key, value) {
        const params = {};
        params[key] = value;
        this.props.basicInfoActions && this.props.basicInfoActions(params);
    }

    render () {
        const {
            firstName,
            lastName,
            firstNameCN,
            lastNameCN,
            otherNameRadio,
            otherName,
            pagersNum,
            genderRadio,
            dateOfBirth,
            pagersUseLife,
            applyCardRadio,
            imageVerificationCode,
            phoneNumber,
            agreementCheckbox,
            intl
        } = this.props;
        const messages = intl.messages;
        const getMessage = (keys) => {
            const type = Object.prototype.toString.call(keys);
            const tmpKey = type === '[object Array]' ? keys.join('.') : keys;
            return messages[`register.basicInfo.${tmpKey}`];
        };
        return (
            <div className={classNames(styles.BasicInfoContainer, styles.RegisterInfoContainer)}>
                <ul>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.TwoCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="firstName">
                                        {getMessage('firstName')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        theme={styles}
                                        value={firstName}
                                        onInput={(event) => {
                                            this.handleValueChange('firstName', event.target.value);
                                        }}
                                    />
                                    <div className={styles.inlineBlock}>&nbsp;</div>
                                    <label htmlFor="lastName" className={styles.label}>
                                        {getMessage('lastName')}<i>*</i>
                                    </label>
                                    <div className={styles.inlineBlock}>&nbsp;</div>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        theme={styles}
                                        value={lastName}
                                        onInput={(event) => {
                                            this.handleValueChange('lastName', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.errorTips}>
                            <p>errortips,dfd dfdlsdfsdfdf error!</p>
                        </div>
                    </li>

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.TwoCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="firstNameCN">
                                        {getMessage('firstNameCN')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="firstNameCN"
                                        name="firstNameCN"
                                        value={firstNameCN}
                                        theme={styles}
                                        onInput={(event) => {
                                            this.handleValueChange('firstNameCN', event.target.value);
                                        }}
                                    />
                                    <label htmlFor="lastNameCN" className={styles.label}>
                                        &nbsp;
                                    </label>
                                    <Input
                                        id="lastNameCN"
                                        name="lastNameCN"
                                        value={lastNameCN}
                                        theme={styles}
                                        onInput={(event) => {
                                            this.handleValueChange('lastNameCN', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.errorTips}>
                            <p>errortips,dfd dfdlsdfsdfdf error!</p>
                        </div>
                    </li>

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="otherNameRadio">
                                        {getMessage('otherNameRadio')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <YesNoButton
                                        name="otherNameRadio"
                                        defaultYesNo={otherNameRadio}
                                        labels={[getMessage('isradioTrue'), getMessage('isradioFalse')]}
                                        onChange={(value) => {
                                            this.handleValueChange('otherNameRadio', value);
                                        }}
                                        theme={styles}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    { otherNameRadio && <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="otherName">
                                        {getMessage('otherName')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="otherName"
                                        name="otherName"
                                        theme={styles}
                                        value={otherName}
                                        onInput={(event) => {
                                            this.handleValueChange('otherName', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li> }

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="pagersNum">
                                        {getMessage('pagersNum')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="pagersNum"
                                        name="pagersNum"
                                        theme={styles}
                                        value={pagersNum}
                                        onInput={(event) => {
                                            this.handleValueChange('pagersNum', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="genderRadio">
                                        {getMessage('genderRadio')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <YesNoButton
                                        name="genderRadio"
                                        defaultYesNo={genderRadio}
                                        labels={[getMessage('genderRadioMan'), getMessage('genderRadioFelMan')]}
                                        onChange={(value) => {
                                            this.handleValueChange('genderRadio', value);
                                        }}
                                        theme={styles}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="dateOfBirth">
                                        {getMessage('dateOfBirth')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        value={dateOfBirth}
                                        theme={styles}
                                        onInput={(event) => {
                                            this.handleValueChange('dateOfBirth', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="pagersUseLife">
                                        {getMessage('pagersUseLife')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="pagersUseLife"
                                        name="pagersUseLife"
                                        value={pagersUseLife}
                                        theme={styles}
                                        onInput={(event) => {
                                            this.handleValueChange('pagersUseLife', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.errorTips}>
                            <p>errortips,dfd dfdlsdfsdfdf error!</p>
                        </div>
                    </li>

                    <ProvincesAndCities {...this.props} />

                    <ApplyCardCurrency {...this.props} />

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="applyCardRadio">
                                        {getMessage('applyCardRadio')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <YesNoButton
                                        name="applyCardRadio"
                                        value={applyCardRadio}
                                        defaultYesNo={applyCardRadio}
                                        labels={[getMessage('isradioTrue'), getMessage('isradioFalse')]}
                                        onChange={(value) => {
                                            this.handleValueChange('applyCardRadio', value);
                                        }}
                                        theme={styles}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="imageVerificationCode">
                                        {getMessage('imageVerificationCode')}<i>*</i>
                                    </label>
                                </div>
                                <div className={classNames(styles.columnsRight, styles.minInput)}>
                                    <Input
                                        id="imageVerificationCode"
                                        name="imageVerificationCode"
                                        value={imageVerificationCode}
                                        theme={styles}
                                        onInput={(event) => {
                                            this.handleValueChange('imageVerificationCode', event.target.value);
                                        }}
                                    />
                                    <div className={styles.getPicCode}>
                                        <img src={cardJPG} alt="picCode" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="phoneNumber">
                                        {getMessage('phoneNumber')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        theme={styles}
                                        onInput={(event) => {
                                            this.handleValueChange('phoneNumber', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.errorTips}>
                            <p>errortips,dfd dfdlsdfsdfdf error!</p>
                        </div>
                    </li>

                    <PhoneVerificationCode {...this.props} />

                </ul>

                <div className={styles.subscribeConfirm}>
                    <label htmlFor="agreementCheckbox" className={styles.checkboxLabel}>
                        <Checkbox
                            theme={styles}
                            name="agreementCheckbox"
                            id="agreementCheckbox"
                            isChecked={agreementCheckbox}
                            onChange={(event) => {
                                this.handleValueChange('agreementCheckbox', event.target.checked);
                            }}
                        />
                        <p className={styles.labelText}>
                            {getMessage('agreementCheckbox')}
                        </p>
                    </label>
                </div>

            </div>
        );
    }
}

BasicInfoCom.propTypes = {
    basicInfoActions: PropTypes.func.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    firstNameCN: PropTypes.string.isRequired,
    imageVerificationCode: PropTypes.string.isRequired,
    intl: PropTypes.object.isRequired,
    lastName: PropTypes.string.isRequired,
    lastNameCN: PropTypes.string.isRequired,
    otherName: PropTypes.string.isRequired,
    pagersNum: PropTypes.string.isRequired,
    pagersUseLife: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    agreementCheckbox: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    applyCardRadio: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    genderRadio: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    otherNameRadio: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

export default injectIntl(BasicInfoCom);

