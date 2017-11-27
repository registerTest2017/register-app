import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import loadDetails from 'bundle-loader?lazy!../src/pages/Details';
import loadSearch from 'bundle-loader?lazy!../src/pages/Search';

const pagesLoaders = [
    {
        pageId: 'details',
        pageLoader: loadDetails,
        nextPage: ''
    },
    {
        pageId: 'search',
        pageLoader: loadSearch,
        nextPage: 'home' // nextPage can be a string or a object, You can refer to example app!
    }
];

const indexPage = 'search';

export default {
    index: indexPage,
    pages: [...pagesLoaders],
    localeData: [...en, ...zh],
    devtool: {
        port: 8000
    }
};
