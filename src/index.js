import 'intl';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import envConfig from 'envConfig';
import { ApiClientSpecProvider } from 'group-digital-wealth-api-client';
import initStore from './state/initStore';
import createRouter from './routes';
import 'group-digital-wealth-common-ui/lib/web/styles/common.scss';
import './styles/common.scss';
import ValidationProvider from './pages/formValidation/Validation/ValidationProvider';

const initialState = {};
const store = initStore(initialState);
const Router = createRouter(store);
const App = () => (
    <div>
        {Router}
    </div>
);

const appRoot = (
    <Provider store={store}>
        <ValidationProvider>
            <ApiClientSpecProvider apiConfigs={envConfig.services}>
                <App />
            </ApiClientSpecProvider>
        </ValidationProvider>
    </Provider>
);

const target = document.getElementById('app');

render(appRoot, target);
