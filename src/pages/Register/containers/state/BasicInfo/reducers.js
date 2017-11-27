import { BASEIC_INFO_ACTIONS } from './actions';

const initialState = {
    firstName: '',
    lastName: '',
    firstNameCN: '',
    lastNameCN: '',
    otherNameRadio: null,
    otherName: '',
    pagersNum: '',
    genderRadio: null,
    dateOfBirth: '',
    pagersUseLife: '',
    provinceDropdown: {
        key: '',
        value: ''
    },
    cityDropdown: {
        key: '',
        value: ''
    },
    applyCardCurrency: {
        key: '',
        value: ''
    },
    applyCardRadio: null,
    imageVerificationCode: '',
    phoneVerificationCode: '',
    phoneNumber: '',
    agreementCheckbox: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BASEIC_INFO_ACTIONS: {
            return {
                ...state,
                basicInfo: {
                    ...state.basicInfo,
                    ...action.data
                }
            };
        }
    }
};

export const basicInfoInitialState = initialState;
export default reducer;
