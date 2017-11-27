import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Dropdown, DropdownItem } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';

import styles from '../../style.scss';
/* eslint-disable no-console */
class ApplyCardCurrency extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    handleDropdown (value, displayValue) {
        const params = {
            applyCardCurrency: {
                key: value,
                value: displayValue
            }
        };
        this.props.basicInfoActions && this.props.basicInfoActions(params);
    }

    render () {
        const {
            applyCardCurrency,
            intl
        } = this.props;
        const messages = intl.messages;
        const getMessage = (keys) => {
            const type = Object.prototype.toString.call(keys);
            const tmpKey = type === '[object Array]' ? keys.join('.') : keys;
            return messages[`register.basicInfo.${tmpKey}`];
        };
        const applyCardCurrencyKey = applyCardCurrency.key;
        const applyCardCurrencyValue = applyCardCurrency.value || getMessage('pleaseSlect');
        return (
            <li style={{ zIndex: 2 }}>
                <div className={styles.Rows}>
                    <div className={classNames(styles.columns, styles.oneCols)}>
                        <div className={styles.columnsLeft}>
                            <label htmlFor="applyCardCurrency">
                                {getMessage('applyCardCurrency')}
                            </label>
                        </div>
                        <div className={styles.columnsRight}>
                            <Dropdown
                                name="applyCardCurrency"
                                id="applyCardCurrency"
                                initialDisplayValue={applyCardCurrencyValue}
                                initialValue={applyCardCurrencyKey}
                                value={applyCardCurrencyKey}
                                onChange={(value, displayValue) => { this.handleDropdown(value, displayValue); }}
                                theme={styles}
                            >
                                <DropdownItem value="1" displayValue="港币" theme={styles} />
                                <DropdownItem value="2" displayValue="人民币" theme={styles} />
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

ApplyCardCurrency.propTypes = {
    applyCardCurrency: PropTypes.object.isRequired,
    basicInfoActions: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired
};

export default injectIntl(ApplyCardCurrency);

