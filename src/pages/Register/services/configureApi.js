import { createErrorType } from 'group-digital-wealth-error-handling';
import {
    REGISTER_SUBMIT_DATA
} from '../containers/state/actions';

/* eslint-disable no-console */
const configureApi = (apiClientSpec) => {
    apiClientSpec.Post({
        endpointId: 'register.submit',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json;charset=UTF-8'
        },
        queryParams: (action, store) => {
            // abstract key/value pairs from action or store and return.
            return {};
        },
        payload: (data) => {
            return data;
        }
    }).ResponseHandler({
        emit: REGISTER_SUBMIT_DATA,
        headers: {
            'content-type': 'application/json;charset=UTF-8'
        },
        preHandler: (response) => { // {status, data, headers}
            return {
                data: response.data
            };
        }
    }).ErrorHandler({
        emit: createErrorType('register'), // @ERRORHANDLING@dashboard
        preHandler: (error) => { // { status, data, errorMessage, headers }
            // Do transformation before emit if necessary.
            return { error };
        }
    }).Trigger({
        on: REGISTER_SUBMIT_DATA
    });
};

export default configureApi;
