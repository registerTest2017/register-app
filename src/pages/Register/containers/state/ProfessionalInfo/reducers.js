import { PROFESSIONAL_INFO_ACTIONS } from './actions';

export const initialState = {
    currentWorkingAge: '',
    currentWorkingAgeMounth: '',
    department: '',
    detailAddress: '',
    employment: {},
    industryCategory: {},
    jobLevel: {},
    natureCompany: '',
    profession: {},
    totalWorkingage: '',
    unitAddress: {},
    unitAddressCity: {},
    unitName: '',
    unitPhoneOne: '',
    unitPhoneTwo: '',
    unitPostCode: ''

};
/* eslint-disable no-console */
const reducer = (state, action) => {
    switch (action.type) {
        case PROFESSIONAL_INFO_ACTIONS: {
            return {
                ...state,
                professionalInfo: {
                    ...state.professionalInfo,
                    ...action.data
                }
            };
        }
    }
};

export default reducer;
