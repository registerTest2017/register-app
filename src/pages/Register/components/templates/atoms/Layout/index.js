import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from '../../../styles/Register.scss';

class Layout extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <div className={classNames([styles.registerLayout, this.props.className])}>
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.string,
        PropTypes.number
    ]),
    className: PropTypes.string
};

Layout.defaultProps = {
    className: ''
};

export default Layout;
