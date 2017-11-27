export const SEARCH_GET_LIST = 'SEARCH_GET_LIST';
export const SEARCH_ACCEPT_CUSTOM = 'SEARCH_ACCEPT_CUSTOM';
export const SEARCH_ACCEPT_CUSTOMID_UPDATE = 'SEARCH_ACCEPT_CUSTOMID_UPDATE';
export const SEARCH_ACCEPT_SET_OPERATE_FINSHED = 'SEARCH_ACCEPT_OPERATE_FINSHED';
export const SEARCH_REJECT_CUSTOM = 'SEARCH_REJECT_CUSTOM';

export const searchAcceptSetOperateFinshedAction = (data) => ({
    type: SEARCH_ACCEPT_SET_OPERATE_FINSHED,
    data
});

export const searchAcceptCustomAction = (data) => ({
    type: SEARCH_ACCEPT_CUSTOMID_UPDATE,
    data
});

export default {};
