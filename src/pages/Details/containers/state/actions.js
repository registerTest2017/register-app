export const DETAIL_GET_LIST = 'DETAIL_GET_LIST';
export const SEARCH_REJECT_CUSTOM = 'SEARCH_REJECT_CUSTOM';
export const SEARCH_ACCEPT_CUSTOM = 'SEARCH_ACCEPT_CUSTOM';
export const DETAIL_UPDATE_CUSTOMID = 'DETAIL_UPDATE_CUSTOMID';
export const DETAIL_UPDATE_LIST = 'DETAIL_UPDATE_LIST';
export const DETAIL_UPLOAD_FILE = 'DETAIL_UPLOAD_FILE';
export const SURVEY_INFO = 'SURVEY_INFO';
export const DETAIL_UPDATE_MODIFY = 'DETAIL_UPDATE_MODIFY';
export const DETAIL_UPDATE_ACT = 'DETAIL_UPDATE_ACT';

export const detailUpdateActAction = (data) => ({
    type: DETAIL_UPDATE_ACT,
    data
});

export const detailUpdateCustomIDAction = (data) => ({
    type: DETAIL_UPDATE_CUSTOMID,
    data
});

export const detailRejectCustom = (data) => ({
    type: SEARCH_REJECT_CUSTOM,
    data
});

export const detailAcceptCustom = (data) => ({
    type: SEARCH_ACCEPT_CUSTOM,
    data
});

export const detailUpdateList = (data) => ({
    type: DETAIL_UPDATE_LIST,
    data
});

export const detailSurveyInfo = (data) => ({
    type: SURVEY_INFO,
    data
});

export default {};
