import { SERVICEFUNCTION_INPUT } from './actions';

export const initialState = {
    email: '',
    isBankCustom: '',
    curCardNo: '',
    rmbType: '',
    dollarType: ''
};
/* eslint-disable no-console */
const reducer = (state, action) => {
    switch (action.type) {
        case SERVICEFUNCTION_INPUT: {
            const result = {
                ...state,
                serviceFunction: {
                    ...state.serviceFunction,
                    ...action.data
                }
            };
            return result;
        }
    }
};

export default reducer;
