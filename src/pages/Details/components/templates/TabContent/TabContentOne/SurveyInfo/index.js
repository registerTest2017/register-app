import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { Dropdown, DropdownItem } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';
import styles from './../../../../style.scss';
/* eslint-disable no-console */
class SurveyInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.handleDropdown = this.handleDropdown.bind(this);
    }

    handleDropdown (value, displayValue, tags) {
        const { detailSurveyInfo } = this.props;
        const data = {};
        data[tags] = {
            key: value,
            value: displayValue
        };
        detailSurveyInfo(data);
    }

    render () {
        const { intl, surveyInfo } = this.props;
        const messages = intl.messages;
        const getMessage = (keys) => {
            const type = Object.prototype.toString.call(keys);
            const tmpKey = type === '[object Array]' ? keys.join('.') : keys;
            return messages[`details.PersionalInfo.SurveyInfo.${tmpKey}`];
        };
        return (
            <div className={classNames(styles.tabPagesItem, styles.surveyItem)}>
                <div className={styles.tabPagesItemContent}>
                    <div className={styles.mTitle}>
                        <h3><span>{getMessage('title')}</span></h3>
                    </div>
                    <div className={styles.mContent}>
                        <ul>
                            <li style={{ zIndex: 7 }}>
                                <div className={styles.liL}>{getMessage('title_customerType')}</div>
                                <div className={styles.liR}>
                                    <Dropdown
                                        name="customerType"
                                        id="customerType"
                                        initialDisplayValue={surveyInfo.customerType.key ? surveyInfo.customerType.value : getMessage('select')}
                                        initialValue={surveyInfo.customerType.key}
                                        value={surveyInfo.customerType.key}
                                        onChange={(value, displayValue) => { this.handleDropdown(value, displayValue, 'customerType'); }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue={getMessage('customerType_1')} theme={styles} />
                                        <DropdownItem value="2" displayValue={getMessage('customerType_2')} theme={styles} />
                                    </Dropdown>
                                </div>
                            </li>

                            <li style={{ zIndex: 6 }}>
                                <div className={styles.liL}>{getMessage('title_isHaveLowRiskProducts')}</div>
                                <div className={styles.liR}>
                                    <Dropdown
                                        name="isHaveLowRiskProducts"
                                        id="isHaveLowRiskProducts"
                                        initialDisplayValue={surveyInfo.isHaveLowRiskProducts.key ? surveyInfo.isHaveLowRiskProducts.value : getMessage('select')}
                                        initialValue={surveyInfo.isHaveLowRiskProducts.key}
                                        value={surveyInfo.isHaveLowRiskProducts.key}
                                        onChange={(value, displayValue) => { this.handleDropdown(value, displayValue, 'isHaveLowRiskProducts'); }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue={getMessage('yes')} theme={styles} />
                                        <DropdownItem value="2" displayValue={getMessage('no')} theme={styles} />
                                    </Dropdown>
                                </div>
                            </li>

                            <li style={{ zIndex: 5 }}>
                                <div className={styles.liL}>{getMessage('title_isHaveCreditCardProducts')}</div>
                                <div className={styles.liR}>
                                    <Dropdown
                                        name="isHaveCreditCardProducts"
                                        id="isHaveCreditCardProducts"
                                        initialDisplayValue={surveyInfo.isHaveCreditCardProducts.key ? surveyInfo.isHaveCreditCardProducts.value : getMessage('select')}
                                        initialValue={surveyInfo.isHaveCreditCardProducts.key}
                                        value={surveyInfo.isHaveCreditCardProducts.key}
                                        onChange={(value, displayValue) => { this.handleDropdown(value, displayValue, 'isHaveCreditCardProducts'); }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue={getMessage('yes')} theme={styles} />
                                        <DropdownItem value="2" displayValue={getMessage('no')} theme={styles} />
                                    </Dropdown>
                                </div>
                            </li>

                            <li style={{ zIndex: 4 }}>
                                <div className={styles.liL}>{getMessage('title_isHaveContactHSBC')}</div>
                                <div className={styles.liR}>
                                    <Dropdown
                                        name="isHaveContactHSBC"
                                        id="isHaveContactHSBC"
                                        initialDisplayValue={surveyInfo.isHaveContactHSBC.key ? surveyInfo.isHaveContactHSBC.value : getMessage('select')}
                                        initialValue={surveyInfo.isHaveContactHSBC.key}
                                        value={surveyInfo.isHaveContactHSBC.key}
                                        onChange={(value, displayValue) => { this.handleDropdown(value, displayValue, 'isHaveContactHSBC'); }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue={getMessage('yes')} theme={styles} />
                                        <DropdownItem value="2" displayValue={getMessage('no')} theme={styles} />
                                    </Dropdown>
                                </div>
                            </li>

                            <li style={{ zIndex: 3 }}>
                                <div className={styles.liL}>{getMessage('title_isTopFinancialClients')}</div>
                                <div className={styles.liR}>
                                    <Dropdown
                                        name="isTopFinancialClients"
                                        id="isTopFinancialClients"
                                        initialDisplayValue={surveyInfo.isTopFinancialClients.key ? surveyInfo.isTopFinancialClients.value : getMessage('select')}
                                        initialValue={surveyInfo.isTopFinancialClients.key}
                                        value={surveyInfo.isTopFinancialClients.key}
                                        onChange={(value, displayValue) => { this.handleDropdown(value, displayValue, 'isTopFinancialClients'); }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue={getMessage('yes')} theme={styles} />
                                        <DropdownItem value="2" displayValue={getMessage('no')} theme={styles} />
                                    </Dropdown>
                                </div>
                            </li>

                            <li style={{ zIndex: 2 }}>
                                <div className={styles.liL}>{getMessage('title_isSaveInitialCapital')}</div>
                                <div className={styles.liR}>
                                    <Dropdown
                                        name="isSaveInitialCapital"
                                        id="isSaveInitialCapital"
                                        initialDisplayValue={surveyInfo.isSaveInitialCapital.key ? surveyInfo.isSaveInitialCapital.value : getMessage('select')}
                                        initialValue={surveyInfo.isSaveInitialCapital.key}
                                        value={surveyInfo.isSaveInitialCapital.key}
                                        onChange={(value, displayValue) => { this.handleDropdown(value, displayValue, 'isSaveInitialCapital'); }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue={getMessage('yes')} theme={styles} />
                                        <DropdownItem value="2" displayValue={getMessage('no')} theme={styles} />
                                    </Dropdown>
                                </div>
                            </li>

                            <li style={{ zIndex: 1 }}>
                                <div className={styles.liL}>{getMessage('title_modeToAccount')}</div>
                                <div className={styles.liR}>
                                    <Dropdown
                                        name="modeToAccount"
                                        id="modeToAccount"
                                        initialDisplayValue={surveyInfo.modeToAccount.key ? surveyInfo.modeToAccount.value : getMessage('select')}
                                        initialValue={surveyInfo.modeToAccount.key}
                                        value={surveyInfo.modeToAccount.key}
                                        onChange={(value, displayValue) => { this.handleDropdown(value, displayValue, 'modeToAccount'); }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue={getMessage('modeToAccount_1')} theme={styles} />
                                        <DropdownItem value="2" displayValue={getMessage('modeToAccount_2')} theme={styles} />
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

SurveyInfo.propTypes = {
    detailSurveyInfo: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    surveyInfo: PropTypes.object.isRequired
};

export default injectIntl(SurveyInfo);
