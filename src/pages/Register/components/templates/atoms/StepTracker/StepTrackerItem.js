import React, { Component, PropTypes } from 'react';
// import classNames from 'classnames';
import styles from '../../../styles/Register.scss';

class StepTrackerItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            width: this.props.width
        };
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.width !== this.state.width) {
            this.setState({
                width: nextProps.width
            });
        }
    }
    render () {
        const sWidth = typeof this.state.width === 'number' ? [this.state.width, 'px'].join('') : this.state.width;
        const activeStyle = this.props.isActive ? styles.active : '';
        return (
            <li className={activeStyle} style={{ width: sWidth }}>
                <span><i>{this.props.index}</i><b>{this.props.title}</b></span>
            </li>
        );
    }
}

StepTrackerItem.propTypes = {
    index: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

StepTrackerItem.defaultProps = {
    title: ''
};

export default StepTrackerItem;
