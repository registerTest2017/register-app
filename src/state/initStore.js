import { configureStore } from 'group-digital-wealth-state-binding';
import { routingMiddleware } from 'group-digital-wealth-router';
import rootSaga from './rootSaga';
import reducers from './reducers';

export default function initStore (initialState = {}) {
    return configureStore(initialState, {
        middlewares: [routingMiddleware],
        reducers,
        hotReplaceReducers: (store) => {
            if (module.hot) {
                module.hot.accept('./reducers', () => {
                    store.replaceReducer(require('./reducers'));
                });
            }
        },
        rootSaga,
        enableDev: (process.env.NODE_ENV === 'development'),
        devPorts: {
            redux: process.env.REDUX_DEVTOOLS_PORT || 8000,
            svcMap: process.env.SERVICE_DEVTOOLS_PORT || 9999
        }
    });
}
