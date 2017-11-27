import React, { PropTypes, Component } from 'react';

/* eslint-disable no-console */
class TabContent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: props.tabTitle
        };
    }
    render () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

TabContent.propTypes = {
    tabTitle: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.element,
        PropTypes.node
    ])
};

export default TabContent;
