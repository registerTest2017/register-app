import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from '../../../styles/Register.scss';
import StepTrackerItem from './StepTrackerItem';

/* eslint-disable no-console */
class StepTracker extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentStep: props.currentStep
        };
        this.perWidth = '';
        this.getItemWidth = this.getItemWidth.bind(this);
        this.setItemWidth = this.setItemWidth.bind(this);
        this.windowResize = this.windowResize.bind(this);
        this.bindAndUnBindEvent = this.bindAndUnBindEvent.bind(this);
    }
    componentDidMount () {
        this.setItemWidth();
        this.bindAndUnBindEvent(true);
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.currentStep !== this.state.currentStep) {
            this.setState({
                currentStep: nextProps.currentStep
            });
        }
    }
    componentDidUpdate () {
        this.setItemWidth();
    }
    componentWillUnMount () {
        this.bindAndUnBindEvent(false);
    }
    bindAndUnBindEvent (isBind) {
        if (this.tracker) {
            if (window.addEventListener) {
                if (isBind) {
                    window.addEventListener('resize', this.windowResize);
                } else {
                    window.removeEventListener('resize', this.windowResize);
                }
            } else if (window.attachEvent) {
                if (isBind) {
                    window.attachEvent('onresize', this.windowResize);
                } else {
                    window.dettachEvent('onresize', this.windowResize);
                }
            }
        }
    }
    getItemWidth () {
        const itemLength = this.props.data && this.props.data.length ? this.props.data.length : 1;
        let pWidth = this.tracker && !isNaN(this.tracker.clientWidth) && this.tracker.clientWidth > 0 ? this.tracker.clientWidth : 1080;
        pWidth = pWidth <= 1080 ? pWidth : 1080;
        const perWidth = parseInt(pWidth / itemLength, 10);
        let result = '';
        if (document.body.clientWidth >= 1120 || document.body.clientWidth <= 480) {
            result = perWidth;
        } else {
            result = '';
        }
        return result;
    }
    setItemWidth () {
        const perWidth = this.getItemWidth();
        this.perWidth = perWidth;
    }
    windowResize () {
        this.setItemWidth();
        this.setState({});
    }
    render () {
        const { currentStep } = this.state;
        const perItemWidth = this.getItemWidth();
        return (
            <ul className={classNames([styles.stepTracker, this.props.className])}
                ref={(self) => {
                    this.tracker = self;
                }}
            >
                {
                    this.props.data && this.props.data.map && this.props.data.map((item, key) => {
                        const title = item.title || item;
                        const isActive = key < currentStep;
                        const perWidth = key === 0 && document.body.clientWidth <= 480 ? '' : perItemWidth;
                        return (<StepTrackerItem index={key + 1} isActive={isActive} key={key} title={title} width={perWidth} />);
                    })
                }
            </ul>
        );
    }
}

StepTracker.propTypes = {
    currentStep: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    className: PropTypes.string
};

StepTracker.defaultProps = {
    className: '',
    data: [],
    currentStep: 0
};

export default StepTracker;
