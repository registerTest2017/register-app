import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import styles from './style.scss';
/* eslint-disable no-console */
class TabMenus extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: 0,
            tabTitle: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount () {
        this.props.children.map((Item, key) => {
            this.state.tabTitle.push(Item.props.tabTitle);
        });
    }

    handleClick (index) {
        if (this.state.selected !== index) {
            this.setState({
                selected: index
            });
        }
    }

    render () {
        const { children } = this.props;
        const { tabTitle, selected } = this.state;

        return (
            <div className={styles.tabGroups}>
                <div className={styles.tabMenus}>
                    {
                        tabTitle.map((val, index) => {
                            return (
                                <button
                                    key={index}
                                    className={selected === index ? `${styles.selected}` : `${styles.current}`}
                                    onClick={() => {
                                        this.handleClick(index);
                                    }}
                                >{val}</button>
                            );
                        })
                    }
                </div>
                <div className={styles.tabPages}>
                    {
                        children.map((val, index) => {
                            return (
                                (selected === index) && val
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

TabMenus.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.node]).isRequired
};

export default injectIntl(TabMenus);
