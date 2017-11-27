import { createErrorType } from 'group-digital-wealth-error-handling';
import { get } from 'lodash';
import {
    SEARCH_GET_LIST,
    SEARCH_ACCEPT_CUSTOM,
    SEARCH_REJECT_CUSTOM
} from '../containers/state/actions';

/* eslint-disable no-console */
const configureApi = (apiClientSpec) => {
    apiClientSpec.Get({
        endpointId: 'search',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json;charset=UTF-8'
        },
        queryParams: (action, store) => {
            // abstract key/value pairs from action or store and return.
            return {
            };
        }
    }).ResponseHandler({
        emit: SEARCH_GET_LIST,
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        preHandler: (response) => { // {status, data, headers}
            return {
                data: response.data
            };
        }
    }).ErrorHandler({
        emit: createErrorType('search'), // @ERRORHANDLING@dashboard
        preHandler: (error) => { // { status, data, errorMessage, headers }
            // Do transformation before emit if necessary.
            return { error };
        }
    }).Trigger({
        on: SEARCH_GET_LIST
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
                customeID: get(store.getState(), 'search.acceptCustomID')
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
                customeID: get(store.getState(), 'search.acceptCustomID')
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
};

export default configureApi;
