import { connect } from 'react-redux';
import React from 'react';
import { withServiceApi } from 'group-digital-wealth-api-client';
import { Transition } from 'group-digital-wealth-router';
import StepPage from '../components/templates/organisms/molecules/StepPage';
import configureApi from '../services/configureApi';
// import { stepFormList } from './state/reducers';
import { basicInfoActions } from './state/BasicInfo/actions';
import { personalInfoActions } from './state/PersonalInfo/actions';
import { professionalInfoActions } from './state/ProfessionalInfo/actions';
import { contactInfoActions } from './state/ContactInfo/actions';
import { AuthenticationUpdateInputAction } from './state/Authentication/actions';
import { ServiceFunctionInputAction } from './state/ServiceFunction/actions';
import { registerSubmitDataAction } from './state/actions';
/* eslint-disable no-console */
const mapStateToProps = (state) => {
    return {
        isSubmiting: state.register.isSubmiting,
        currentStep: state.register.currentStep,
        nextPage: state.register.stepPagination.nextPage,
        prevPage: state.register.stepPagination.prevPage,
        stepForm: state.register.stepForm,
        stepFormList: state.register.stepFormList,
        basicInfo: {
            ...state.register.basicInfo,
            provinceData: state.register.provinceData,
            cityData: state.register.cityData
        },
        personalInfo: {
            ...state.register.personalInfo,
            provinceData: state.register.provinceData,
            cityData: state.register.cityData
        },
        contactInfo: state.register.contactInfo,
        authentication: state.register.authentication,
        serviceFunction: state.register.serviceFunction,
        professionalInfo: {
            ...state.register.professionalInfo,
            provinceData: state.register.provinceData,
            cityData: state.register.cityData
        }
    };
};

const mapDispatchToProps = (dispatch) => ({
    basicInfoActions: (value) => dispatch(basicInfoActions(value)),
    personalInfoActions: (value) => dispatch(personalInfoActions(value)),
    professionalInfoActions: (value) => dispatch(professionalInfoActions(value)),
    contactInfoActions: (value) => dispatch(contactInfoActions(value)),
    authenticationActions: {
        AuthenticationUpdateInput: (value) => dispatch(AuthenticationUpdateInputAction(value))
    },
    serviceFunctionActions: {
        serviceFunctionInput: (value) => dispatch(ServiceFunctionInputAction(value))
    },
    registerSubmitData: (value) => dispatch(registerSubmitDataAction(value))
});

const StepPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StepPage);
/* eslint-disable no-console */
// const checkStep = () => {
//     const pathNames = window.location.pathname;
//     if (pathNames === '/en-GB/register') {
//         const firstStep = stepFormList[0];
//         const firstStepKey = Object.keys(firstStep)[0];
//         const newPathName = `/en-GB/register/${firstStepKey}`;
//         window.location = newPathName;
//     }
// };
// checkStep();
const TransitionComponent = <Transition caption={'Loading Data'} />;
export default withServiceApi(StepPageContainer, 'REGISTER_SVC', configureApi, TransitionComponent);
