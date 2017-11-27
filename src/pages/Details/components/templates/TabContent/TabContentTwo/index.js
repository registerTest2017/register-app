import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl, FormattedMessage } from 'react-intl';
import FontIcon from 'group-digital-wealth-common-ui/lib/web/components/ui/fontIcon';

import styles from './../../../style.scss';
/* eslint-disable no-console */
class TabContentTwo extends Component {
    constructor (props) {
        super(props);
        this.sanctionCheckDetails = this.sanctionCheckDetails.bind(this);
        this.pepItemCheckDetails = this.pepItemCheckDetails.bind(this);
    }

    sanctionCheckDetails () {
        const { detailResult, intl } = this.props;
        const messages = intl.messages;
        const sanctionItem = detailResult.checkDetail.sanctionItem;
        return (
            <div className={styles.tableContainer}>
                <table className={classNames(styles.detailsTable, styles.dTop)} style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <td width="40%"><span className={styles.fixLineHeight}>{messages['details.CheckResult.SCANNEDNAME']}</span></td>
                            <td width="60%"><span className={styles.fixLineHeight}>{messages['details.CheckResult.NUMBEROFMATCHES']}</span></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span className={styles.fixLineHeight}>{detailResult.customerInfo.personalInfo.permanentCountry}</span></td>
                            <td><span className={styles.fixLineHeight}>{detailResult.checkDetail.sanctionItem.length}</span></td>
                        </tr>
                    </tbody>
                </table>
                {
                    sanctionItem.map((item, index) => {
                        return (
                            <table key={index} className={styles.detailsTable} style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <td width="25%"><span className={styles.fixLineHeight}>Match {index + 1} of {sanctionItem.length}</span></td>
                                        <td width="75%"><span className={styles.fixLineHeight}>{item.countryCode}</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.Name']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.sanctionCountryCode}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.UpdateAt']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.updateAt}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.comments']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.comments}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        );
                    })
                }
            </div>
        );
    }

    pepItemCheckDetails () {
        const { detailResult, intl } = this.props;
        const pepItem = detailResult.checkDetail.pepItem;
        const messages = intl.messages;
        return (
            <div className={styles.tableContainer}>
                <table className={classNames(styles.detailsTable, styles.dTop)} style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <td width="40%"><span className={styles.fixLineHeight}>{messages['details.CheckResult.SCANNEDNAME']}</span></td>
                            <td width="60%"><span className={styles.fixLineHeight}>{messages['details.CheckResult.NUMBEROFMATCHES']}</span></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <span className={styles.fixLineHeight}>
                                    {detailResult.customerInfo.basicCustomerInfo.familyName}
                                    {detailResult.customerInfo.basicCustomerInfo.givenName}
                                </span>
                            </td>
                            <td><span className={styles.fixLineHeight}>{detailResult.checkDetail.pepItem.length}</span></td>
                        </tr>
                    </tbody>
                </table>
                {
                    pepItem.map((item, index) => {
                        return (
                            <table key={index} className={styles.detailsTable} style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <td width="25%">
                                            <span className={styles.fixLineHeight}>
                                                <FormattedMessage id="details.CheckResult.numIndex"
                                                    defaultMessage={intl.messages['details.CheckResult.numIndex']}
                                                    values={{
                                                        Num: index + 1,
                                                        totalNum: pepItem.length
                                                    }}
                                                />
                                            </span>
                                        </td>
                                        <td width="75%"><span className={styles.fixLineHeight}>&nbsp;</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.Name']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.name}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.LastName']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.lastName}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.Roles']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.roles}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.Countries']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.countryCode}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.DateOfBirth']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.dateOfBirth}</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.Images']}:</span></td>
                                        <td><span className={styles.fixLineHeight}>{item.images && <img alt="card" src={item.images} />}</span></td>
                                    </tr>
                                    {/*
                                        <tr>
                                            <td><span className={styles.fixLineHeight}>{messages['details.CheckResult.Links']}:</span></td>
                                            <td><span className={styles.fixLineHeight}>{item.links && item.links}</span></td>
                                        </tr>
                                    */}
                                </tbody>
                            </table>
                        );
                    })
                }
            </div>
        );
    }

    render () {
        const { intl, detailResult } = this.props;
        const messages = intl.messages;
        const validationR = detailResult.validationResult;
        const checkTitle = {
            existCustomerCheckStatus: messages['details.CheckResult.ExitingCheck'],
            blacklistUserCheckStatus: messages['details.CheckResult.BlackListCheck'],
            sanctionCheckStatus: messages['details.CheckResult.SanctionCheck'],
            pepcheckStatus: messages['details.CheckResult.PEPCheck']
        };
        return (
            <div>
                <div className={styles.tabPagesDescription}>
                    {
                        false && <span>Below are your most recent renewal applications. To find a specific application, please use the search tab. </span>
                    }
                </div>
                <div className={styles.tabPagesContent}>
                    {/* item=== */}
                    {
                        validationR && Object.keys(validationR).map((item, index) => {
                            let icon = 'clock';
                            let styleIcon = styles.clock;
                            if (checkTitle[item]) {
                                if (validationR[item] === '2') {
                                    icon = 'delete';
                                    styleIcon = styles.delete;
                                } else if (validationR[item] === '1') {
                                    icon = 'agree';
                                    styleIcon = styles.agree;
                                }
                                return (
                                    <div key={index} className={styles.tabPagesItem}>
                                        <div className={styles.tabPagesItemContent}>
                                            <div className={styles.mTitle}>
                                                <h3><span>{checkTitle[item]}</span></h3>
                                            </div>
                                            <div className={styles.mContent}>
                                                <ul>
                                                    <li>
                                                        <div className={styles.liL}>{messages['details.CheckResult.ApplicationStatus']}</div>
                                                        <div className={styles.liR}><div className={classNames(styles.fontIcon, styleIcon)}><FontIcon icon={icon} theme={styles} /></div></div>
                                                    </li>
                                                </ul>
                                                {
                                                    (item === 'sanctionCheckStatus') && detailResult.checkDetail.sanctionItem && detailResult.checkDetail.sanctionItem.length > 0 && this.sanctionCheckDetails()
                                                }
                                                {
                                                    (item === 'pepcheckStatus') && detailResult.checkDetail.pepItem && detailResult.checkDetail.pepItem.length > 0 && this.pepItemCheckDetails()
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}

TabContentTwo.propTypes = {
    detailResult: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired
};

export default injectIntl(TabContentTwo);
