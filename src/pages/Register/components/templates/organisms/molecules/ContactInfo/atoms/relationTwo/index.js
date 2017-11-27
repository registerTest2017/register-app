import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Dropdown, DropdownItem } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';

import styles from '../../style.scss';
/* eslint-disable no-console */
class RelationTwo extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    handleDropdown (value, displayValue) {
        const params = {
            relationTwo: {
                key: value,
                value: displayValue
            }
        };
        this.props.contactInfoActions && this.props.contactInfoActions(params);
    }

    render () {
        const {
            relationTwo,
            intl
        } = this.props;
        const messages = intl.messages;
        const getMessage = (keys) => {
            const type = Object.prototype.toString.call(keys);
            const tmpKey = type === '[object Array]' ? keys.join('.') : keys;
            return messages[`register.contactInfo.${tmpKey}`];
        };
        const relationTwoKey = relationTwo.key;
        const relationTwoValue = relationTwo.value || getMessage('pleaseSlect');
        return (
            <li style={{ zIndex: 2 }}>
                <div className={styles.Rows}>
                    <div className={classNames(styles.columns, styles.oneCols)}>
                        <div className={styles.columnsLeft}>
                            <label htmlFor="applyCardCurrency">
                                {getMessage('contactrelation')}<i>*</i>
                            </label>
                        </div>
                        <div className={styles.columnsRight}>
                            <Dropdown
                                name="relationTwo"
                                id="relationTwo"
                                initialDisplayValue={relationTwoValue}
                                initialValue={relationTwoKey}
                                value={relationTwoKey}
                                onChange={(value, displayValue) => { this.handleDropdown(value, displayValue); }}
                                theme={styles}
                            >
                                <DropdownItem value="1" displayValue="父子" theme={styles} />
                                <DropdownItem value="2" displayValue="母子" theme={styles} />
                                <DropdownItem value="3" displayValue="兄弟" theme={styles} />
                                <DropdownItem value="4" displayValue="姐妹" theme={styles} />
                                <DropdownItem value="5" displayValue="配偶" theme={styles} />
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

RelationTwo.propTypes = {
    contactInfoActions: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    relationTwo: PropTypes.object.isRequired
};

export default injectIntl(RelationTwo);

