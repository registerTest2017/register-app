import { CHANGE_STEP_FORM, REGISTER_SUBMIT_DATA_ACTION, REGISTER_SUBMIT_DATA } from './actions';
import basicInfoReducers, { basicInfoInitialState } from './BasicInfo/reducers';
import personalInfoReducers, { initialState as personalInfoInitialState } from './PersonalInfo/reducers';
import professionalInfoReducers, { initialState as professionalInfoInitialState } from './ProfessionalInfo/reducers';
import contactInfoReducers, { contactInfoInitialState } from './ContactInfo/reducers';
import authenticationReducers, { initialState as authenticationInitialState } from './Authentication/reducers';
import serviceFunctionReducers, { initialState as serviceFunctionInitialState } from './ServiceFunction/reducers';

export const stepFormList = [
    { 'basicInfo': '/register/basicInfo' },
    { 'personalInfo': '/register/personalInfo' },
    { 'professionalInfo': '/register/professionalInfo' },
    { 'contactInfo': '/register/contactInfo' },
    { 'serviceFunction': '/register/serviceFunction' },
    { 'authentication': '/register/authentication' }
];

const initialState = {
    stepForm: '',
    stepFormList,
    currentStep: 1,
    provinceData: [
        {
            id: '1',
            code: 'GDS',
            name: '广东省'
        }
    ],
    cityData: [
        {
            id: '1',
            code: 'GZ',
            name: '广州市'
        },
        {
            id: '2',
            code: 'SZ',
            name: '深圳市'
        },
        {
            id: '3',
            code: 'DW',
            name: '东莞市'
        }
    ],
    stepPagination: {
        nextPage: '',
        prevPage: ''
    },
    isSubmiting: false,
    basicInfo: {
        ...basicInfoInitialState
    },
    personalInfo: {
        livingCountry: [
            { 'China': '中国' },
            { 'Iran': '伊朗' },
            { 'United States': '美国' },
            { 'HongKong': '香港' },
            { 'Other': '其他' }
        ],
        ...personalInfoInitialState
    },
    professionalInfo: {
        ...professionalInfoInitialState
    },
    contactInfo: {
        ...contactInfoInitialState
    },
    authentication: {
        ...authenticationInitialState
    },
    serviceFunction: {
        ...serviceFunctionInitialState
    }
};
const otherReducers = {
    basicInfo: basicInfoReducers,
    personalInfo: personalInfoReducers,
    contactInfo: contactInfoReducers,
    authentication: authenticationReducers,
    serviceFunction: serviceFunctionReducers,
    professionalInfo: professionalInfoReducers
};
const getOtherReducerState = (state, action) => {
    const rKeys = Object.keys(otherReducers);
    let result = null;
    for (let key = 0; key < rKeys.length; key++) {
        const curKey = rKeys[key];
        result = otherReducers[curKey](state, action);
        if (result !== undefined && result !== null) {
            result = {
                ...state,
                ...result
            };
            break;
        }
    }
    return result;
};
/* eslint-disable no-console */
const reducer = (state = initialState, action) => {
    const newState = getOtherReducerState(state, action);
    if (newState !== null && newState !== undefined) {
        return newState;
    } else {
        const stepPagination = {};
        let currentStep = 0;
        switch (action.type) {
            case CHANGE_STEP_FORM: {
                let isChecked = false;
                const stepForm = action.stepForm;
                stepFormList.map((item, key) => {
                    const curKey = Object.keys(item)[0];
                    if (stepForm === curKey) {
                        let nextItem = null;
                        let prevItem = null;
                        if (key === 0) {
                            nextItem = stepFormList[key + 1];
                            stepPagination.prevPage = '/home';
                            stepPagination.nextPage = nextItem[Object.keys(nextItem)[0]];
                        } else if (key === stepFormList.length - 1) {
                            prevItem = stepFormList[key - 1];
                            stepPagination.prevPage = prevItem[Object.keys(prevItem)[0]];
                            stepPagination.nextPage = '/';
                        } else if (key > 0 && key < stepFormList.length - 1) {
                            prevItem = stepFormList[key - 1];
                            nextItem = stepFormList[key + 1];
                            stepPagination.prevPage = prevItem[Object.keys(prevItem)[0]];
                            stepPagination.nextPage = nextItem[Object.keys(nextItem)[0]];
                        }
                        currentStep = key + 1;
                        isChecked = true;
                    }
                });
                if (!isChecked) {
                    const page2 = stepFormList[1];
                    stepPagination.nextPage = page2[Object.keys(page2)[0]];
                    stepPagination.prevPage = '';
                }
                currentStep = stepForm.length > 0 && currentStep === 0 ? 1 : currentStep;
                return { ...state, stepForm: action.stepForm, stepPagination, currentStep };
            }
            case REGISTER_SUBMIT_DATA_ACTION: {
                return {
                    ...state,
                    isSubmiting: action.data
                };
            }
            case REGISTER_SUBMIT_DATA: {
                if (action.data.success) {
                    alert('开户注册成功！');
                    window.location = '/';
                } else {
                    console.error(action);
                }
                return {
                    ...state,
                    isSubmiting: false
                };
            }
            case 'ERRORHANDLING@register': {
                alert(action.error.errorMessage);
                return {
                    ...state,
                    isSubmiting: false
                };
            }
            default:
                return state;
        }
    }
};

export default reducer;
