import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import styles from './../../../style.scss';
/* eslint-disable no-console */
class TabContentOne extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
        this.getContentTitle = this.getContentTitle.bind(this);
    }

    getContentTitle (childKey, messages) {
        // min Title -> content
        const displayField = {
            basicCustomerInfo: {
                familyName: messages['register.basicInfo.firstName'],
                givenName: messages['register.basicInfo.lastName'],
                credentialNo: messages['register.basicInfo.pagersNum'],
                expDate: messages['register.basicInfo.pagersUseLife'],
                cellPhoneNumber: messages['register.basicInfo.phoneNumber'],
                gender: messages['register.basicInfo.genderRadio'],
                dateOfBirth: messages['register.basicInfo.dateOfBirth']
            },
            personalInfo: {
                permanentCity: messages['register.PersonalInfo.city'],
                permanentCountry: messages['register.PersonalInfo.permanmentContry'],
                maritalStatus: messages['register.PersonalInfo.maritalStatus'],
                numberOfChild: messages['register.PersonalInfo.childrenCount']
            },
            workSpecification: {
                jobTitle: messages['register.ProfessionalInfo.unitName'],
                department: messages['register.ProfessionalInfo.department'],
                companyWorkAge: messages['register.ProfessionalInfo.currentWorkingAge'],
                socialWorkAge: messages['register.ProfessionalInfo.totalWorkingage']
            },
            contacts: {
                firstContactor: messages['register.contactInfo.contactOneName'],
                fcRelationShip: messages['register.contactInfo.contactrelation'],
                fcPhoneNumber: messages['register.contactInfo.contactPhone']
            }
        };
        let showTitleContent;
        Object.keys(displayField).map((displayFieldKey) => {
            Object.keys(displayField[displayFieldKey]).map((showKey) => {
                if (showKey === childKey) {
                    showTitleContent = displayField[displayFieldKey][showKey];
                }
            });
        });
        return showTitleContent;
    }

    render () {
        const { intl, detailResult } = this.props;
        const messages = intl.messages;

        const customerInfoParent = detailResult.customerInfo;

        // max Title -> content
        const tableTitle = {
            'basicCustomerInfo': messages['register.pageSteps.basicInfo'],
            'personalInfo': messages['register.pageSteps.personalInfo'],
            'workSpecification': messages['register.pageSteps.professionalInfo'],
            'contacts': messages['register.pageSteps.contactInfo']
            // 'serviceFunction': messages['register.pageSteps.serviceFunction'],
            // 'authentication': messages['register.pageSteps.authentication']
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
                        customerInfoParent && Object.keys(customerInfoParent).map((parentKey) => {
                            const customerInfoChild = customerInfoParent[parentKey];
                            return (
                                <div className={styles.tabPagesItem} key={parentKey}>
                                    <div className={styles.tabPagesItemContent}>
                                        <div className={styles.mTitle}>
                                            <h3><span>{tableTitle[parentKey] ? tableTitle[parentKey] : parentKey}</span></h3>
                                            <p><span>&nbsp;</span></p>
                                        </div>
                                        <div className={styles.mContent}>
                                            <ul>
                                                {
                                                    customerInfoChild && Object.keys(customerInfoChild).map((childKey) => {
                                                        if (this.getContentTitle(childKey, messages)) {
                                                            return (
                                                                <li key={childKey}>
                                                                    <div className={styles.liL}>
                                                                        {this.getContentTitle(childKey, messages)}
                                                                    </div>
                                                                    <div className={styles.liR}>{customerInfoChild[childKey]}</div>
                                                                </li>
                                                            );
                                                        }
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {
                                        false &&
                                        <div className={styles.tabPagesItemBtns}>
                                            <button className={styles.buttonOutline}><span>Reassign</span></button>
                                            <button className={styles.buttonDefault}><span>Resume</span></button>
                                        </div>
                                    }
                                </div>
                            );
                        })
                    }

                    {
                        false && <div className={styles.tabPagesItemLoadding}>
                            <button>Loadding more...</button>
                        </div>
                    }

                </div>
            </div>
        );
    }
}

TabContentOne.propTypes = {
    detailResult: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired
};

export default injectIntl(TabContentOne);
