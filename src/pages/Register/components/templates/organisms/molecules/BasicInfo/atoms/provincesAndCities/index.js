import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Dropdown, DropdownItem } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';

import styles from '../../style.scss';
/* eslint-disable no-console */
class ProvincesAndCities extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.handleProvinceDropdown = this.handleProvinceDropdown.bind(this);
        this.handleCityDropdown = this.handleCityDropdown.bind(this);
    }

    handleProvinceDropdown (value, displayValue) {
        const params = {
            provinceDropdown: {
                key: value,
                value: displayValue
            }
        };
        this.props.basicInfoActions && this.props.basicInfoActions(params);
    }

    handleCityDropdown (value, displayValue) {
        const params = {
            cityDropdown: {
                key: value,
                value: displayValue
            }
        };
        this.props.basicInfoActions && this.props.basicInfoActions(params);
    }

    render () {
        const {
            provinceDropdown,
            cityDropdown,
            intl,
            provinceData,
            cityData
        } = this.props;
        const messages = intl.messages;
        const getMessage = (keys) => {
            const type = Object.prototype.toString.call(keys);
            const tmpKey = type === '[object Array]' ? keys.join('.') : keys;
            return messages[`register.basicInfo.${tmpKey}`];
        };
        const provinceDropdownKey = provinceDropdown.key;
        const provinceDropdownValue = provinceDropdown.value || getMessage('pleaseSlect');
        const cityDropdownKey = cityDropdown.key;
        const cityDropdownValue = cityDropdown.value || getMessage('pleaseSlect');

        return (
            <li style={{ zIndex: 3 }}>
                <div className={styles.Rows}>
                    <div className={classNames(styles.columns, styles.TwoCols)}>
                        <div className={styles.columnsLeft}>
                            <label htmlFor="provinceDropdown">
                                {getMessage('provincesAndCities')}<i>*</i>
                            </label>
                        </div>
                        <div className={styles.columnsRight}>
                            <div className={styles.twoDropdown}>
                                <Dropdown
                                    name="provinceDropdown"
                                    id="provinceDropdown"
                                    initialDisplayValue={provinceDropdownValue}
                                    initialValue={provinceDropdownKey}
                                    value={provinceDropdownKey}
                                    onChange={(value, displayValue) => { this.handleProvinceDropdown(value, displayValue); }}
                                    theme={styles}
                                >
                                    {
                                        provinceData.map((item) => {
                                            return (
                                                <DropdownItem value={item.id} displayValue={item.name} theme={styles} key={item.id} />
                                            );
                                        })
                                    }
                                </Dropdown>
                            </div>
                            <div className={styles.twoDropdown}>
                                <Dropdown
                                    name="cityDropdown"
                                    id="cityDropdown"
                                    initialDisplayValue={cityDropdownValue}
                                    initialValue={cityDropdownKey}
                                    value={cityDropdownKey}
                                    onChange={(value, displayValue) => { this.handleCityDropdown(value, displayValue); }}
                                    theme={styles}
                                >
                                    {
                                        cityData.map((item) => {
                                            return (
                                                <DropdownItem value={item.id} displayValue={item.name} theme={styles} key={item.id} />
                                            );
                                        })
                                    }
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

ProvincesAndCities.propTypes = {
    basicInfoActions: PropTypes.func.isRequired,
    cityDropdown: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    provinceDropdown: PropTypes.object.isRequired,
    cityData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    provinceData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default injectIntl(ProvincesAndCities);

