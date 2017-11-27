import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'group-digital-wealth-common-ui/lib/web/components/ui/button';
import styles from './style.scss';
/* eslint-disable no-console */
class NavigationFooter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isPrevVisible: this.props.isPrevVisible
        };
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.isPrevVisible !== this.state.isPrevVisible) {
            this.setState({
                isPrevVisible: nextProps.isPrevVisible
            });
        }
    }
    render () {
        const { isPrevVisible } = this.state;
        return (
            <div className={styles.stepButton}>
                {
                    isPrevVisible &&
                    <Button
                        ref={(continueButton) => { this.continueButton = continueButton; }}
                        value={this.props.backButtonTitle}
                        onClick={() => this.props.onChangeStepButton('prev')}
                        type="button"
                        theme={{ button: styles.btnPrevStep }}
                    />
                }
                <Button
                    ref={(continueButton) => { this.continueButton = continueButton; }}
                    value={this.props.nextButtonTitle}
                    onClick={() => this.props.onChangeStepButton('next')}
                    type="button"
                    theme={{ button: styles.btnNextStep }}
                />
            </div>
        );
    }
}

NavigationFooter.propTypes = {
    backButtonTitle: PropTypes.string.isRequired,
    isPrevVisible: PropTypes.bool.isRequired,
    nextButtonTitle: PropTypes.string.isRequired,
    onChangeStepButton: PropTypes.func.isRequired
};

NavigationFooter.defaultProps = {
    backButtonTitle: '上一步',
    nextButtonTitle: '下一步'
};

export default NavigationFooter;
