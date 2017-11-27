import { PERSONAL_INFO_ACTIONS } from './actions';

export const initialState = {
    permanmentAddress: false,
    permanmentContry: {},
    city: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    postCode: '',
    foreignTax: false,
    maritalStatus: '',
    childrenCount: '',
    educationLevel: {},
    annualIncome: '',
    livingSituation: {},
    residentialAddressOne: {},
    residentialAddressTwo: {},
    residentialDetailAddress: '',
    liveTime: '',
    livePostCode: '',
    phoneOne: '',
    phoneTwo: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case PERSONAL_INFO_ACTIONS: {
            return {
                ...state,
                personalInfo: {
                    ...state.personalInfo,
                    ...action.data
                }
            };
        }
    }
};

export default reducer;
