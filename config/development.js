import localContent from 'localContent';
import shared from './shared';

const pagesEndPoints = {
    register: {
        submit: 'personalInfo'
    }
};

export default {
    // other configurations goes here.
    ...shared,
    i18n: {
        localeCookie: '',
        contentBaseUrl: 'http://localhost:10800',
        domain: 'HK', // You can change the domain in here
        localContent
    },
    services: [
        {
            namespace: 'REGISTER_SVC', // You can change the namespace or add more namespace
            baseUrl: 'http://smp-ao-demo.cf.wgdc-drn-01.cloud.uk.hsbc/',
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
