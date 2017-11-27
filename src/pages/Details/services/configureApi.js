import { createErrorType } from 'group-digital-wealth-error-handling';
import { get } from 'lodash';
import {
    DETAIL_GET_LIST,
    SEARCH_ACCEPT_CUSTOM,
    SEARCH_REJECT_CUSTOM,
    DETAIL_UPLOAD_FILE,
    DETAIL_UPDATE_MODIFY
} from '../containers/state/actions';

/* eslint-disable no-console */
const configureApi = (apiClientSpec) => {
    apiClientSpec.Get({
        endpointId: 'detail',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json;charset=UTF-8'
        },
        uriParams: (action, store) => {
            // abstract key/value pairs from action or store and return.
            return {
                customerID: store.getState().detail.customID
            };
        }
    }).ResponseHandler({
        emit: DETAIL_GET_LIST,
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        preHandler: (response) => { // {status, data, headers}
            console.log(JSON.stringify(response.data.customerInfo));
            console.log('==================================================');
            return {
                detailResult: response.data
            };
        }
    }).ErrorHandler({
        emit: createErrorType('detail'), // @ERRORHANDLING@dashboard
        preHandler: (error) => { // { status, data, errorMessage, headers }
            // Do transformation before emit if necessary.
            return { error };
        }
    }).Trigger({
        on: DETAIL_GET_LIST
    });

    apiClientSpec.Post({
        endpointId: 'searchApprove',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json;charset=UTF-8'
        },
        uriParams: (action, store) => {
            // abstract key/value pairs from action or store and return.
            return {
                customeID: get(store.getState(), 'detail.customID')
            };
        }
    }).ResponseHandler({
        emit: SEARCH_ACCEPT_CUSTOM,
        preHandler: (response) => { // {status, data, headers}
            return {
                data: response.data
            };
        }
    }).ErrorHandler({
        emit: createErrorType('search-accept'), // @ERRORHANDLING@dashboard
        preHandler: (error) => { // { status, data, errorMessage, headers }
            // Do transformation before emit if necessary.
            console.error(error);
            return { error };
        }
    }).Trigger({
        on: SEARCH_ACCEPT_CUSTOM
    });

    apiClientSpec.Post({
        endpointId: 'searchReject',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json;charset=UTF-8'
        },
        uriParams: (action, store) => {
            // abstract key/value pairs from action or store and return.
            return {
                customeID: get(store.getState(), 'detail.customID')
            };
        }
    }).ResponseHandler({
        emit: SEARCH_REJECT_CUSTOM,
        preHandler: (response) => { // {status, data, headers}
            return {
                data: response.data
            };
        }
    }).ErrorHandler({
        emit: createErrorType('search-reject'), // @ERRORHANDLING@dashboard
        preHandler: (error) => { // { status, data, errorMessage, headers }
            // Do transformation before emit if necessary.
            return { error };
        }
    }).Trigger({
        on: SEARCH_REJECT_CUSTOM
    });

    apiClientSpec.Post({
        endpointId: '',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'multipart/form-data',
            'process-data': false
        },
        uriParams: (action, store) => {
            // abstract key/value pairs from action or store and return.
            return {
                customeID: get(store.getState(), 'detail.customID')
            };
        },
        payload: (data) => {
            return data;
        }
    }).ResponseHandler({
        emit: DETAIL_UPLOAD_FILE,
        preHandler: (response) => { // {status, data, headers}
            return {
                data: response.data
            };
        }
    }).ErrorHandler({
        emit: createErrorType('search-accept'), // @ERRORHANDLING@dashboard
        preHandler: (error) => { // { status, data, errorMessage, headers }
            // Do transformation before emit if necessary.
            console.error(error);
            return { error };
        }
    }).Trigger({
        on: DETAIL_UPLOAD_FILE
    });

    apiClientSpec.Post({
        endpointId: 'detailUpdate',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json;charset=UTF-8'
        },
        uriParams: (action, store) => {
            // abstract key/value pairs from action or store and return.
            return {};
        },
        payload: (data) => {
            return data;
        }
    }).ResponseHandler({
        emit: DETAIL_UPDATE_MODIFY,
        preHandler: (response) => { // {status, data, headers}
            return {
                data: response.data
            };
        }
    }).ErrorHandler({
        emit: createErrorType('detail_update'), // @ERRORHANDLING@dashboard
        preHandler: (error) => { // { status, data, errorMessage, headers }
            // Do transformation before emit if necessary.
            console.error(error);
            return { error };
        }
    }).Trigger({
        on: DETAIL_UPDATE_MODIFY
    });
};

export default configureApi;
