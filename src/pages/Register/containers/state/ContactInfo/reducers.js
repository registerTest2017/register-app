import { CONTACT_INFO_ACTIONS } from './actions';

const initialState = {
    contactOneName: '',
    relationOne: {
        key: '',
        value: ''
    },
    contactOnePhone: '',
    contactTwoName: '',
    relationTwo: {
        key: '',
        value: ''
    },
    contactTwoPhone: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTACT_INFO_ACTIONS: {
            return {
                ...state,
                contactInfo: {
                    ...state.contactInfo,
                    ...action.data
                }
            };
        }
    }
};

export const contactInfoInitialState = initialState;
export default reducer;
