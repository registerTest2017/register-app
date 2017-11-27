import { HOME_UPDATE_CARD_TYPE } from './actions';

export const initState = {
    registerCard: {
        type: 'none',
        image: null,
        cardClass: null
    }
};
/* eslint-disable no-console */
export default (state = initState, action) => {
    switch (action.type) {
        case HOME_UPDATE_CARD_TYPE: {
            return {
                ...state,
                registerCard: {
                    ...state.registerCard,
                    ...action.data
                }
            };
        }
        default:
            return state;
    }
};
