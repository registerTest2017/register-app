import React from 'react';
import PropTypes from 'prop-types';
import PageHeaderCom from '../shared/components/templates/PageHeader';
import PageFooterCom from '../shared/components/templates/PageFooter';
/**
 * This is projet Layout.
 * @param {object} props - object is a collection of dom elements.
*/
// You can define your own layout in here
const Layout = (props) => (
    <div>
        <header>
            <PageHeaderCom />
        </header>
        <section>
            {props.children}
        </section>
        <footer>
            <PageFooterCom />
        </footer>
    </div>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

export default Layout;
