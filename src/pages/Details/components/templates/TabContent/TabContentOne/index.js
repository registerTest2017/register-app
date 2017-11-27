import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Popup from 'group-digital-wealth-common-ui/lib/web/components/widgets/popup';
import { Transition } from 'group-digital-wealth-router';
import DetailInput from '../../atoms/DetailInput';
// import UploadFile from '../../UploadFile';
import PapersPhoto from '../../PapersPhoto';
import {
    DETAIL_UPLOAD_FILE,
    DETAIL_UPDATE_MODIFY
} from '../../../../containers/state/actions';

import SurveyInfo from './SurveyInfo';
import styles from './../../../style.scss';
/* eslint-disable no-console */
class TabContentOne extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isPopupShown: false,
            updateResult: this.props.updateResult
        };
        this.detailResult = this.props.detailResult;
        this.getData = this.getData.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnInputChange = this.handleOnInputChange.bind(this);
        this.genderSelect = [
            { title: '男', value: '男' },
            { title: '女', value: '女' }
        ];
        this.permanentCountrySelect = [
            { title: '中国', value: 'China' },
            { title: '伊朗', value: 'Iran' },
            { title: '美国', value: 'USA' },
            { title: '香港', value: 'HK' },
            { title: '其他', value: 'other' }
        ];
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.updateResult.state !== this.state.updateResult.state) {
            this.setState({
                updateResult: nextProps.updateResult,
                isPopupShown: nextProps.updateResult.state === 2
            });
        }
    }
    handleOnInputChange (value) {
        this.props.detailUpdateList && this.props.detailUpdateList(value);
    }
    getData () {
        this.props.detailUpdateAct && this.props.detailUpdateAct({
            state: 1
        });
        this.props.emit(DETAIL_UPDATE_MODIFY, this.props.detailResult.customerInfo);
        // this.setState({ isPopupShown: true });
    }
    closePopup () {
        this.props.detailUpdateAct && this.props.detailUpdateAct({
            state: 0
        });
        this.setState({ isPopupShown: false });
    }
    getDefaultSelectValue (SelectData, checkValue) {
        let result = {
            title: '请选择', value: ''
        };
        if (checkValue) {
            SelectData.map((item) => {
                if (item.value === checkValue) {
                    result = item;
                }
            });
        }
        return result;
    }

    handleOnChange (data) {
        this.props.emit(DETAIL_UPLOAD_FILE, data);
    }
    render () {
        const { intl, detailResult } = this.props;
        const { updateResult } = this.state;
        const messages = intl.messages;
        const customerInfoParent = detailResult.customerInfo || '';
        const { basicCustomerInfo, personalInfo, workSpecification, contacts } = customerInfoParent;
        const gender = customerInfoParent && this.getDefaultSelectValue(this.genderSelect, basicCustomerInfo.gender);
        const permanentCountry = customerInfoParent && this.getDefaultSelectValue(this.permanentCountrySelect, personalInfo.permanentCountry);

        return (
            <div>
                <div className={styles.tabPagesDescription}>
                    {
                        false && <span>Below are your most recent renewal applications. To find a specific application, please use the search tab. </span>
                    }
                </div>
                {customerInfoParent &&
                    <div className={styles.tabPagesContent}>
                        <div className={styles.tabPagesItem}>
                            <div className={styles.tabPagesItemContent}>
                                <div className={styles.mTitle}>
                                    <h3><span>{messages['register.pageSteps.basicInfo']}</span></h3>
                                    <p><span>&nbsp;</span></p>
                                </div>
                                <div className={styles.mContent}>
                                    <ul>
                                        <li>
                                            <DetailInput title={messages['register.basicInfo.firstName']}
                                                name="familyName"
                                                value={basicCustomerInfo.familyName}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        basicCustomerInfo: {
                                                            familyName: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.basicInfo.lastName']}
                                                name="givenName"
                                                value={basicCustomerInfo.givenName}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        basicCustomerInfo: {
                                                            givenName: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.basicInfo.pagersNum']}
                                                name="credentialNo"
                                                value={basicCustomerInfo.credentialNo}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        basicCustomerInfo: {
                                                            credentialNo: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.basicInfo.pagersUseLife']}
                                                name="expDate"
                                                value={basicCustomerInfo.expDate}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        basicCustomerInfo: {
                                                            expDate: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.basicInfo.phoneNumber']}
                                                name="cellPhoneNumber"
                                                value={basicCustomerInfo.cellPhoneNumber}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        basicCustomerInfo: {
                                                            cellPhoneNumber: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.basicInfo.genderRadio']}
                                                name="gender"
                                                type="select"
                                                initialDisplayValue={gender.title}
                                                initialValue={gender.value}
                                                data={this.genderSelect}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        basicCustomerInfo: {
                                                            gender: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.basicInfo.dateOfBirth']}
                                                name="dateOfBirth"
                                                value={basicCustomerInfo.dateOfBirth}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        basicCustomerInfo: {
                                                            dateOfBirth: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tabPagesItem}>
                            <div className={styles.tabPagesItemContent}>
                                <div className={styles.mTitle}>
                                    <h3><span>{messages['register.pageSteps.personalInfo']}</span></h3>
                                    <p><span>&nbsp;</span></p>
                                </div>
                                <div className={styles.mContent}>
                                    <ul>
                                        <li>
                                            <DetailInput title={messages['register.PersonalInfo.city']}
                                                name="permanentCity"
                                                value={personalInfo.permanentCity}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        personalInfo: {
                                                            permanentCity: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.PersonalInfo.permanmentContry']}
                                                name="permanentCountry"
                                                type="select"
                                                initialDisplayValue={permanentCountry.title}
                                                initialValue={permanentCountry.value}
                                                data={this.permanentCountrySelect}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        personalInfo: {
                                                            permanentCountry: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.PersonalInfo.maritalStatus']}
                                                name="maritalStatus"
                                                value={personalInfo.maritalStatus}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        personalInfo: {
                                                            maritalStatus: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.PersonalInfo.childrenCount']}
                                                name="numberOfChild"
                                                value={personalInfo.numberOfChild}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        personalInfo: {
                                                            numberOfChild: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tabPagesItem}>
                            <div className={styles.tabPagesItemContent}>
                                <div className={styles.mTitle}>
                                    <h3><span>{messages['register.pageSteps.professionalInfo']}</span></h3>
                                    <p><span>&nbsp;</span></p>
                                </div>
                                <div className={styles.mContent}>
                                    <ul>
                                        <li>
                                            <DetailInput title={messages['register.ProfessionalInfo.unitName']}
                                                name="jobTitle"
                                                value={workSpecification.jobTitle}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        workSpecification: {
                                                            jobTitle: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.ProfessionalInfo.department']}
                                                name="department"
                                                value={workSpecification.department}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        workSpecification: {
                                                            department: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.ProfessionalInfo.currentWorkingAge']}
                                                name="companyWorkAge"
                                                value={workSpecification.companyWorkAge}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        workSpecification: {
                                                            companyWorkAge: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.ProfessionalInfo.totalWorkingage']}
                                                name="socialWorkAge"
                                                value={workSpecification.socialWorkAge}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        workSpecification: {
                                                            socialWorkAge: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.tabPagesItem}>
                            <div className={styles.tabPagesItemContent}>
                                <div className={styles.mTitle}>
                                    <h3><span>{messages['register.pageSteps.contactInfo']}</span></h3>
                                    <p><span>&nbsp;</span></p>
                                </div>
                                <div className={styles.mContent}>
                                    <ul>
                                        <li>
                                            <DetailInput title={messages['register.contactInfo.contactOneName']}
                                                name="firstContactor"
                                                value={contacts.firstContactor}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        contacts: {
                                                            firstContactor: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.contactInfo.contactrelation']}
                                                name="fcRelationShip"
                                                value={contacts.fcRelationShip}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        contacts: {
                                                            fcRelationShip: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                        <li>
                                            <DetailInput title={messages['register.contactInfo.contactPhone']}
                                                name="fcPhoneNumber"
                                                value={contacts.fcPhoneNumber}
                                                onChange={(value) => {
                                                    this.handleOnInputChange({
                                                        contacts: {
                                                            fcPhoneNumber: value
                                                        }
                                                    });
                                                }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <SurveyInfo {...this.props} />
                        <div className={styles.tabPagesItem}>
                            <div className={styles.tabPagesItemContent}>
                                <div className={styles.mTitle}>
                                    <h3><span>获取资料</span></h3>
                                </div>
                                <div className={styles.mContent}>
                                    <ul>
                                        <li className={styles.uploadFile}>
                                            <div className={styles.liL}>获取客户相关的证件信息资料</div>
                                            <div className={styles.liR}>
                                                {/* <UploadFile onChange={this.handleOnChange} /> */}
                                                <PapersPhoto {...this.props} />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.success}>
                            <Popup hideOnOverlayClick theme={styles} show={this.state.isPopupShown} onHide={this.closePopup}>
                                {updateResult.resultState}
                            </Popup>
                        </div>
                        <div className={styles.submit}>
                            <button className={styles.button} onClick={this.getData}>更改</button>
                        </div>
                    </div>
                }
                {
                    updateResult.state === 1 && <Transition caption="loading" />
                }
            </div>
        );
    }
}

TabContentOne.propTypes = {
    detailResult: PropTypes.object.isRequired,
    detailUpdateAct: PropTypes.func.isRequired,
    detailUpdateList: PropTypes.func.isRequired,
    emit: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    updateResult: PropTypes.object.isRequired
};

export default injectIntl(TabContentOne);
