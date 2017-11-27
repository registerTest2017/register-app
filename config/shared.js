import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import loadRegister from 'bundle-loader?lazy!../src/pages/Register';
import loadHome from 'bundle-loader?lazy!../src/pages/Home';
import loadDetails from 'bundle-loader?lazy!../src/pages/Details';
import loadSearch from 'bundle-loader?lazy!../src/pages/Search';
import formValidation from 'bundle-loader?lazy!../src/pages/formValidation';
const pagesLoaders = [
    {
        pageId: 'home',
        pageLoader: loadHome,
        nextPage: 'register/baseicInfo'
    },
    {
        pageId: 'register',
        pageLoader: loadRegister,
        nextPage: 'home' // nextPage can be a string or a object, You can refer to example app!
    },
    {
        pageId: 'details',
        pageLoader: loadDetails,
        nextPage: ''
    },
    {
        pageId: 'search',
        pageLoader: loadSearch,
        nextPage: 'home' // nextPage can be a string or a object, You can refer to example app!
    },
    {
        pageId: 'formValidation',
        pageLoader: formValidation,
        nextPage: ''
    }
];

const indexPage = 'home';

export default {
    index: indexPage,
    pages: [...pagesLoaders],
    localeData: [...en, ...zh],
    devtool: {
        port: 8000
    }
};
