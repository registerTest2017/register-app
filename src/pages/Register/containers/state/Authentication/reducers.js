import { AUTHENTICATION_UPDATE_INPUT } from './actions';

export const initialState = {
    idCard: '',
    cusName: '',
    bankCard: '',
    isPhoneVolidate: '',
    phoneNumber: ''
};
/* eslint-disable no-console */
const reducer = (state, action) => {
    switch (action.type) {
        case AUTHENTICATION_UPDATE_INPUT: {
            const result = {
                ...state,
                authentication: {
                    ...state.authentication,
                    ...action.data
                }
            };
            return result;
        }
    }
};

export default reducer;
