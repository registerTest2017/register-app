/* eslint-disable no-undef */
import localContent from 'localContent';
import shared from './shared';

const pagesEndPoints = {
    register: {
        submit: 'personalInfo'
    }
};

export default {
    ...shared,
    i18n: {
        localeCookie: LOCALE_COOKIE || '',
        contentBaseUrl: CONTENT_BASE_URL || 'http://smp_ao_content.cf.wgdc-drn-01.cloud.uk.hsbc',
        domain: CONTENT_DOMAIN || 'HK',
        localContent
    },
    services: [
        {
            namespace: 'REGISTER_SVC', // You can change the namespace or add more namespace
            baseUrl: 'http://smp-ao-demo.cf.wgdc-drn-01.cloud.uk.hsbc/', // You can change the baseUrl according to your namespace
            endpoints: pagesEndPoints
        },
        {
            namespace: 'SEARCH_SVC', // You can change the namespace or add more namespace
            baseUrl: 'http://smp-ao-demo.cf.wgdc-drn-01.cloud.uk.hsbc/',
            endpoints: {
                search: 'queryAllApplicationForm',
                detail: 'queryApplicationForm/#{customerID}',
                searchApprove: 'accept/#{customeID}',
                searchReject: 'reject/#{customeID}',
                detailUpdate: 'updatePersonalInfo'
            }
        }
    ]
};
/* eslint-enable no-undef */
