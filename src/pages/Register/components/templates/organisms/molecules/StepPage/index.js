import React, { PropTypes } from 'react';
import NavigationFooter from '../NavigationFooter';
import BasicInfo from '../BasicInfo';
import PersonalInfo from '../PersonalInfo';
import ProfessionalInfo from '../ProfessionalInfo';
import ContactInfo from '../ContactInfo';
import Authentication from '../Authentication';
import ServiceFunction from '../ServiceFunction';
import { REGISTER_SUBMIT_DATA } from '../../../../../containers/state/actions';
/* eslint-disable no-console */
class StepPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            nextButtonTitle: '下一步'
        };
        this.stepForm = this.props.stepForm;
        this.prevPage = this.props.prevPage;
        this.nextPage = this.props.nextPage;
        this.isPrevVisible = true;// this.props.prevPage && this.props.prevPage !== '/' && this.props.prevPage.length > 0;
        this.changeStepForm = this.changeStepForm.bind(this);
        this.handleOnChangeStepForm = this.handleOnChangeStepForm.bind(this);
        this.handleOnSumit = this.handleOnSumit.bind(this);
    }

    componentWillMount () {
        this.changeStepForm(this.props);
    }

    componentWillReceiveProps (nextProps) {
        this.stepForm = nextProps.stepForm;
        this.prevPage = nextProps.prevPage;
        this.nextPage = nextProps.nextPage;
        this.changeStepForm(nextProps);
    }

    changeStepForm (nextProps) {
        switch (this.stepForm) {
            case ('basicInfo'): {
                this.StepComponent = (
                    <BasicInfo
                        params={nextProps.params}
                        {...nextProps.basicInfo}
                        basicInfoActions={nextProps.basicInfoActions}
                    />
                );
                break;
            }
            case ('personalInfo'): {
                this.StepComponent = (
                    <PersonalInfo
                        params={nextProps.params}
                        {...nextProps.personalInfo}
                        personalInfoActions={nextProps.personalInfoActions}
                    />
                );
                break;
            }
            case ('professionalInfo'): {
                this.StepComponent = (
                    <ProfessionalInfo
                        params={nextProps.params}
                        {...nextProps.professionalInfo}
                        professionalInfoActions={nextProps.professionalInfoActions}
                    />
                );
                break;
            }
            case ('contactInfo'): {
                this.StepComponent = (
                    <ContactInfo
                        {...nextProps.contactInfo}
                        contactInfoActions={nextProps.contactInfoActions}
                    />
                );
                break;
            }
            case ('serviceFunction'): {
                this.StepComponent = (
                    <ServiceFunction
                        {...nextProps.serviceFunction}
                        {...nextProps.serviceFunctionActions}
                    />
                );
                break;
            }
            case ('authentication'): {
                this.StepComponent = (
                    <Authentication
                        {...nextProps.authenticationActions}
                        {...nextProps.authentication}
                    />
                );
                this.setState({
                    nextButtonTitle: '立即注册'
                });
                break;
            }
            default:
                this.StepComponent = (
                    <BasicInfo
                        params={nextProps.params}
                        {...nextProps.basicInfo}
                        basicInfoActions={nextProps.basicInfoActions}
                    />
                );
        }
        this.props.onStepFormChange && this.props.onStepFormChange(nextProps.currentStep);
    }
    handleOnChangeStepForm (status) {
        const { params } = this.props;
        const { nextPage, prevPage } = this;
        const nextPageURL = `/${params.locale}${nextPage}`;
        const prevPageURL = `/${params.locale}${prevPage}`;
        this.isSubmit = !nextPage || nextPage === '/' || nextPage === '';
        // this.isPrevVisible = prevPage && prevPage !== '/' && prevPage.length > 0;
        if (status === 'next') {
            if (!this.isSubmit) {
                this.props.history.push(nextPageURL);
            } else {
                this.handleOnSumit();
            }
        } else {
            this.props.history.push(prevPageURL);
        }
    }
    handleOnSumit () {
        const curProps = this.props;
        const {
            basicInfo,
            personalInfo,
            professionalInfo,
            contactInfo
        } = curProps;
        const submitData = {
            basicCustomerInfo: {
                cellPhoneNumber: basicInfo.phoneNumber,
                city: basicInfo.cityDropdown.value,
                credentialNo: basicInfo.pagersNum,
                currency: basicInfo.applyCardCurrency.value,
                customerID: '',
                dateOfBirth: basicInfo.dateOfBirth,
                expDate: basicInfo.pagersUseLife,
                familyName: basicInfo.firstName,
                familyNameABC: basicInfo.firstNameCN,
                formerName: basicInfo.otherName,
                formerNameFlg: basicInfo.otherNameRadio ? 1 : 0,
                gender: basicInfo.genderRadio ? '男' : '女',
                givenName: basicInfo.lastName,
                givenNameABC: basicInfo.lastNameCN,
                needSubCard: basicInfo.phoneNumber,
                province: basicInfo.provinceDropdown.value,
                vilidationCode: basicInfo.phoneVerificationCode
            },
            contacts: {
                customerID: '',
                fcPhoneNumber: contactInfo.contactOnePhone,
                fcRelationShip: contactInfo.relationOne.value,
                firstContactor: contactInfo.contactOneName,
                scPhoneNumber: contactInfo.contactTwoPhone,
                scRelationShip: contactInfo.relationTwo.value,
                secondContactor: contactInfo.contactTwoName
            },
            personalInfo: {
                annualEarnings: personalInfo.annualIncome,
                customerID: '',
                educationDegree: personalInfo.educationLevel.value,
                homeTelAreaCode: personalInfo.phoneOne,
                homeTelNo: personalInfo.phoneTwo,
                isTaxAbroad: personalInfo.foreignTax ? 1 : 0,
                mainAddressFlg: personalInfo.permanmentAddress ? 1 : 0,
                maritalStatus: personalInfo.maritalStatus,
                numberOfChild: personalInfo.childrenCount,
                periodOfSettle: personalInfo.liveTime,
                permanentAddress1: personalInfo.addressOne,
                permanentAddress2: personalInfo.addressTwo,
                permanentAddress3: personalInfo.addressThree,
                permanentCity: personalInfo.city,
                permanentCountry: personalInfo.permanmentContry.key,
                postcode: personalInfo.postCode,
                settleCity: personalInfo.residentialAddressTwo.value,
                settleDetailAddress: personalInfo.residentialDetailAddress,
                settlePostcode: personalInfo.livePostCode,
                settleProvince: personalInfo.residentialAddressOne.value,
                settleStatus: personalInfo.livingSituation.value
            },
            workSpecification: {
                companyType: professionalInfo.natureCompany.value,
                companyWorkAge: professionalInfo.currentWorkingAge,
                customerID: '',
                department: professionalInfo.department,
                industry: professionalInfo.industryCategory.value,
                jobLevel: professionalInfo.jobLevel.value,
                jobTitle: professionalInfo.unitName,
                socialWorkAge: professionalInfo.totalWorkingage,
                workAddress: professionalInfo.detailAddress,
                workCity: professionalInfo.unitAddressCity.value,
                workPostcode: professionalInfo.unitPostCode,
                workProvince: professionalInfo.unitAddress.value,
                workStatus: professionalInfo.employment.value,
                workTelAreaCode: professionalInfo.unitPhoneOne,
                workTelNo: professionalInfo.unitPhoneTwo,
                workType: professionalInfo.profession.value
            }
        };
        console.log(JSON.stringify(submitData));
        this.props.emit(REGISTER_SUBMIT_DATA, submitData);
    }
    render () {
        const { params, nextPage } = this.props;
        const isPrevVisible = this.isPrevVisible || false;
        return (
            <form autoComplete="off" action={`/${params.locale}${nextPage}`} onSubmit={this.handleSubmit}>
                {this.StepComponent}
                <NavigationFooter nextButtonTitle={this.state.nextButtonTitle} isPrevVisible={isPrevVisible} onChangeStepButton={this.handleOnChangeStepForm} />
            </form>
        );
    }
}

StepPage.propTypes = {
    emit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    nextPage: PropTypes.string.isRequired,
    prevPage: PropTypes.string.isRequired,
    stepForm: PropTypes.string.isRequired,
    params: PropTypes.object,
    onStepFormChange: PropTypes.func
};

export default StepPage;
