import {
    DETAIL_GET_LIST,
    DETAIL_UPDATE_CUSTOMID,
    SEARCH_ACCEPT_CUSTOM,
    SEARCH_REJECT_CUSTOM,
    DETAIL_UPDATE_LIST,
    SURVEY_INFO,
    DETAIL_UPDATE_MODIFY,
    DETAIL_UPDATE_ACT
} from './actions';

const initState = {
    detailResult: {
    },
    customID: '',
    acceptResult: {
        success: false
    },
    rejectResult: {
        success: false
    },
    surveyInfo: {
        customerType: {},
        isHaveLowRiskProducts: {},
        isHaveCreditCardProducts: {},
        isHaveContactHSBC: {},
        isTopFinancialClients: {},
        isSaveInitialCapital: {},
        modeToAccount: {}
    },
    updateResult: {
        state: 0,
        success: false,
        resultState: ''
    }
};
/* eslint-disable no-console */
const reducer = (state = initState, action) => {
    switch (action.type) {
        case DETAIL_GET_LIST: {
            return {
                ...state,
                detailResult: action.detailResult,
                acceptResult: {
                    success: action.detailResult.validationResult.status === '1'
                },
                rejectResult: {
                    success: action.detailResult.validationResult.status === '2'
                }
            };
        }
        case DETAIL_UPDATE_LIST: {
            const customeInfoData = state.detailResult.customerInfo || {};
            const basicCustomerInfo = state.detailResult.customerInfo.basicCustomerInfo || {};
            const personalInfo = state.detailResult.customerInfo.personalInfo || {};
            const workSpecification = state.detailResult.customerInfo.workSpecification || {};
            const contacts = state.detailResult.customerInfo.contacts || {};
            const result = {
                ...state,
                detailResult: {
                    ...state.detailResult,
                    customerInfo: {
                        ...customeInfoData,
                        personalInfo: {
                            ...personalInfo,
                            ...(action.data.personalInfo || {})
                        },
                        basicCustomerInfo: {
                            ...basicCustomerInfo,
                            ...(action.data.basicCustomerInfo || {})
                        },
                        workSpecification: {
                            ...workSpecification,
                            ...(action.data.workSpecification || {})
                        },
                        contacts: {
                            ...contacts,
                            ...(action.data.contacts || {})
                        }
                    }
                }
            };
            return result;
        }
        case DETAIL_UPDATE_CUSTOMID: {
            return {
                ...state,
                customID: action.data
            };
        }
        case SEARCH_ACCEPT_CUSTOM: {
            return {
                ...state,
                acceptResult: action.data
            };
        }
        case SEARCH_REJECT_CUSTOM: {
            return {
                ...state,
                rejectResult: action.data
            };
        }
        case SURVEY_INFO: {
            return {
                ...state,
                surveyInfo: {
                    ...state.surveyInfo,
                    ...action.data
                }
            };
        }
        case DETAIL_UPDATE_MODIFY: {
            const updateResult = {
                state: 2,
                success: action.data.success,
                resultState: action.data.success ? '您的信息提交成功' : '您的信息提交失败'
            };
            return {
                ...state,
                updateResult
            };
        }
        case DETAIL_UPDATE_ACT: {
            return {
                ...state,
                updateResult: {
                    ...state.updateResult,
                    ...action.data
                }
            };
        }
        default:
            return state;
    }
};

export default reducer;
