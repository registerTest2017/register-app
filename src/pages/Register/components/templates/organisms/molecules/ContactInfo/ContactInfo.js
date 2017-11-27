import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Input, Checkbox } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';

import RelationOne from './atoms/relationOne';
import RelationTwo from './atoms/relationTwo';

import styles from './style.scss';
/* eslint-disable no-console */
class ContactInfoCom extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange (key, value) {
        const params = {};
        params[key] = value;
        this.props.contactInfoActions && this.props.contactInfoActions(params);
    }

    render () {
        const {
            contactOneName,
            contactOnePhone,
            contactTwoName,
            contactTwoPhone,
            agreementCheckbox,
            intl
        } = this.props;
        const messages = intl.messages;
        const getMessage = (keys) => {
            const type = Object.prototype.toString.call(keys);
            const tmpKey = type === '[object Array]' ? keys.join('.') : keys;
            return messages[`register.contactInfo.${tmpKey}`];
        };
        return (
            <div className={classNames(styles.ContactInfoContainer, styles.RegisterInfoContainer)}>
                <ul>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="contactOneName">
                                        {getMessage('contactOneName')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="contactOneName"
                                        name="contactOneName"
                                        theme={styles}
                                        value={contactOneName}
                                        onInput={(event) => {
                                            this.handleValueChange('contactOneName', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <RelationOne {...this.props} />

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="contactOnePhone">
                                        {getMessage('contactPhone')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="contactOnePhone"
                                        name="contactOnePhone"
                                        theme={styles}
                                        value={contactOnePhone}
                                        onInput={(event) => {
                                            this.handleValueChange('contactOnePhone', event.target.value);
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
                                    <label htmlFor="contactTwoName">
                                        {getMessage('contactTwoName')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="contactTwoName"
                                        name="contactTwoName"
                                        theme={styles}
                                        value={contactTwoName}
                                        onInput={(event) => {
                                            this.handleValueChange('contactTwoName', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <RelationTwo {...this.props} />

                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="contactTwoPhone">
                                        {getMessage('contactPhone')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="contactTwoPhone"
                                        name="contactTwoPhone"
                                        theme={styles}
                                        value={contactTwoPhone}
                                        onInput={(event) => {
                                            this.handleValueChange('contactTwoPhone', event.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
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

ContactInfoCom.propTypes = {
    contactInfoActions: PropTypes.func.isRequired,
    contactOneName: PropTypes.string.isRequired,
    contactOnePhone: PropTypes.string.isRequired,
    contactTwoName: PropTypes.string.isRequired,
    contactTwoPhone: PropTypes.string.isRequired,
    intl: PropTypes.object.isRequired,
    agreementCheckbox: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

export default injectIntl(ContactInfoCom);

