import React, { Component, PropTypes } from 'react';
import { injectIntl } from 'react-intl';
import { StepView } from 'group-digital-wealth-router';
import styles from '../styles/Register.scss';
import { changeStepForm } from '../../containers/state/actions';
import StepPageContainer from '../../containers';
import { stepFormList } from '../../containers/state/reducers';
import { Layout, StepTracker, StepHeader } from './atoms';
import { StepPageRight } from './organisms/molecules';

/* eslint-disable no-console */
const StepPageView = (props) => (
    <StepView
        statePath="register"
        stepIdAlias={'stepForm'}
        updateStep={({ params }, { store }) => {
            store.dispatch(changeStepForm(params.stepForm));
        }}
        expendProps={(props) => {
            return {
                params: props.match.params,
                ...props
            };
        }}
    >
        {props.children}
    </StepView>
);

StepPageView.propTypes = {
    match: PropTypes.object.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.element,
        PropTypes.node
    ])
};

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentStep: 1,
            fixedClassName: ''
        };
        this.handleOnStepFormChange = this.handleOnStepFormChange.bind(this);
        this.handleWindowScroll = this.handleWindowScroll.bind(this);
        this.onWindowScroll = this.onWindowScroll.bind(this);
    }
    componentDidMount () {
        this.handleWindowScroll();
    }
    componentDidUpdate () {
        this.onWindowScroll();
    }
    componentWillUnMount () {
        this.handleWindowScroll(true);
    }
    handleWindowScroll (isRemove) {
        if (window.addEventListener) {
            if (!isRemove) {
                window.addEventListener('scroll', this.onWindowScroll);
            } else {
                window.removeEventListener('scroll', this.onWindowScroll);
            }
        } else if (window.attachEvent) {
            if (!isRemove) {
                window.attachEvent('onscroll', this.onWindowScroll);
            } else {
                window.detachEvent('onscroll', this.onWindowScroll);
            }
        }
    }
    onWindowScroll () {
        if (this.stepHeader) {
            if (document.body.scrollTop >= 90) {
                this.stepHeader.classList.add(styles.registerStepHeaderFixed);
            } else {
                this.stepHeader.classList.remove(styles.registerStepHeaderFixed);
            }
        }
    }
    handleOnStepFormChange (currentStep) {
        if (this.state.currentStep !== currentStep) {
            this.setState({
                currentStep
            });
            this.onWindowScroll();
        }
    }
    render () {
        const { intl } = this.props;
        const { currentStep } = this.state;
        const { messages } = intl;
        let currentTitle = '';
        const steps = (() => {
            const result = [];
            stepFormList && stepFormList.map && stepFormList.map((item, index) => {
                const key = Object.keys(item)[0];
                const msgKey = `register.pageSteps.${key}`;
                const msg = messages[msgKey] || msgKey;
                result.push(msg);
                if (currentStep === (index + 1)) {
                    currentTitle = msg;
                }
            });
            return result;
        })();
        return (
            <Layout className={styles.registerContainer}>
                <div className={styles.HeaderH}>&nbsp;</div>
                <div className={styles.registerStepHeader}>
                    <div className={styles.registerStepHeader}
                        ref={(self) => {
                            this.stepHeader = self;
                        }}
                    >
                        <div className={styles.stepTrackerContainer}>
                            <StepTracker currentStep={currentStep} data={steps} />
                            <h5>{currentTitle}</h5>
                            <div className={styles.clearfix} />
                        </div>
                    </div>
                </div>
                <div className={styles.stepPageContainer}>
                    <div className={styles.stepPageRightContainer}>
                        <StepPageRight />
                    </div>
                    <div className={styles.stepPageLeftContainer}>
                        <div>
                            <StepHeader title={currentTitle} />
                            <StepPageView match={this.props.match}>
                                <StepPageContainer onStepFormChange={this.handleOnStepFormChange} />
                            </StepPageView>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

Register.propTypes = {
    intl: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default injectIntl(Register);
