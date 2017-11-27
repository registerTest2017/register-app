import React from 'react';
import envConfig from 'envConfig';
import { AppRouter, Transition } from 'group-digital-wealth-router';
import Layout from './Layout';

AppRouter.addLocaleData(envConfig.localeData);

const createRouter = (store) => {
    const transitionComponent = <Transition caption={'Updating'} />;
    return (
        <AppRouter
            i18nConfig={envConfig.i18n}
            indexPageId={envConfig.index}
            intermediates={transitionComponent}
            layoutComponent={Layout}
            onLoadingError={(error) => {
                /* eslint-disable no-console */
                console.log('routing error: ', error);
                /* eslint-enable no-console */
            }}
            pageConfigs={envConfig.pages}
        />
    );
};

export default createRouter;
