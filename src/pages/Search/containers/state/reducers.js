import {
    SEARCH_GET_LIST,
    SEARCH_ACCEPT_CUSTOM,
    SEARCH_REJECT_CUSTOM,
    SEARCH_ACCEPT_CUSTOMID_UPDATE,
    SEARCH_ACCEPT_SET_OPERATE_FINSHED
} from './actions';

const initState = {
    acceptCustomID: '',
    searchResult: [],
    lastFreshData: new Date().getTime()
};
/* eslint-disable no-console */
const reducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_GET_LIST: {
            return {
                ...state,
                searchResult: [
                    ...formatServerSearchResult(action.data)
                ]
            };
        }
        case SEARCH_ACCEPT_CUSTOMID_UPDATE: {
            return {
                ...state,
                acceptCustomID: action.data
            };
        }
        case SEARCH_ACCEPT_CUSTOM: {
            return {
                ...state,
                lastFreshData: new Date().getTime(),
                searchResult: []
            };
        }
        case SEARCH_REJECT_CUSTOM: {
            return {
                ...state,
                lastFreshData: new Date().getTime(),
                searchResult: []
            };
        }
        case SEARCH_ACCEPT_SET_OPERATE_FINSHED: {
            return {
                ...state,
                acceptFinished: action.data
            };
        }
        default:
            return state;
    }
};

const formatServerSearchResult = (data) => {
    const result = [];
    const permanentCountryValue = {
        'China': '中国',
        'Iran': '伊朗',
        'USA': '美国',
        'HK': '香港',
        'other': '其他'
    };
    data && data.map && data.map((curData, key) => {
        const { customerInfo, validationResult } = curData;
        const { basicCustomerInfo, personalInfo } = customerInfo;
        const itemResult = {
            ID: key + 1,
            UserName: [basicCustomerInfo.familyName, basicCustomerInfo.givenName].join(''),
            IDCard: basicCustomerInfo.credentialNo,
            Gender: basicCustomerInfo.gender,
            PermanentCountry: permanentCountryValue[personalInfo.permanentCountry],
            IDCardCheck: 1,
            BackListCheck: validationResult.blacklistUserCheckStatus,
            ExitingCheck: validationResult.existCustomerCheckStatus,
            PEPCheck: validationResult.pepcheckStatus,
            SanctionCheck: validationResult.sanctionCheckStatus,
            Status: parseInt(validationResult.status, 10),
            customeID: basicCustomerInfo.customerID
        };
        result.push(itemResult);
    });
    return result;
};

export default reducer;
