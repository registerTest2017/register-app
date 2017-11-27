import { combineReducers } from 'redux';
import { routerReducer, intlReducer } from 'group-digital-wealth-router';
import { errorHandlingReducer } from 'group-digital-wealth-error-handling';
import registerReducer from '../pages/Register/containers/state/reducers';
import homeReducer from '../pages/Home/containers/state/reducers';
import searchReducer from '../pages/Search/containers/state/reducers';
import detailReducer from '../pages/Details/containers/state/reducers';
// Please do not change reducersMap name and add your own reducers in reducersMap object!
const reducersMap = {
    register: registerReducer,
    home: homeReducer,
    search: searchReducer,
    detail: detailReducer
};

const reducers = combineReducers({
    router: routerReducer,
    intl: intlReducer,
    errorHandling: errorHandlingReducer,
    ...reducersMap
});

export default reducers;
