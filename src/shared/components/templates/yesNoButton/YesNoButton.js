import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
// import RadioButton from './RadioButton';
import { RadioButton } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';
import styles from './style.scss';

class YesNoButton extends Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            yesNo: props.defaultYesNo
        };
    }

    handleClick (event) {
        const yesNo = (event.target.value === '1');
        if (yesNo) {
            // this.yesBtn.inputComponent.input.checked = 'checked';
            this.yesBtn.inputComponent.setAttribute('checked', 'checked');
            window.yesBtn = this.yesBtn.inputComponent;
        } else {
            // this.noBtn.inputComponent.input.checked = 'checked';
            this.noBtn.inputComponent.setAttribute('checked', 'checked');
            window.noBtn = this.noBtn.inputComponent;
        }
        this.setState({
            yesNo
        });
        (this.props.onChange instanceof Function) && this.props.onChange(yesNo);
    }

    render () {
        const { name, labels, theme } = this.props;
        const { yesNo } = this.state;

        return (
            <div className={classNames(styles.yesNoButton, theme.yesNoButton)}>
                <label htmlFor={`${name}_yes`} className={classNames(styles.radioButtonLabel, theme.radioButtonLabel)}>
                    <RadioButton theme={{ ...styles, ...theme }}
                        name={name}
                        id={`${name}_yes`}
                        value={1}
                        defaultChecked={yesNo === true}
                        onClick={this.handleClick}
                        ref={(yesBtn) => {
                            this.yesBtn = yesBtn;
                        }}
                    />
                    <span dangerouslySetInnerHTML={{ __html: labels[0] }} className={classNames(styles.labelText)} />
                </label>
                <label htmlFor={`${name}_no`} className={classNames(styles.radioButtonLabel, theme.radioButtonLabel)}>
                    <RadioButton theme={{ ...styles, ...theme }}
                        name={name}
                        id={`${name}_no`}
                        value={0}
                        defaultChecked={yesNo === false}
                        onClick={this.handleClick}
                        ref={(noBtn) => {
                            this.noBtn = noBtn;
                        }}
                    />
                    <span dangerouslySetInnerHTML={{ __html: labels[1] }} className={classNames(styles.labelText)} />
                </label>
            </div>
        );
    }
}

YesNoButton.propTypes = {
    // intl: PropTypes.object.isRequired,

    /*
     *  true: Yesx
     *  false: No
     *  null: select nothing
     */
    defaultYesNo: PropTypes.oneOf([true, false, null]),

    labels: PropTypes.array,
    name: PropTypes.string,
    theme: PropTypes.object,

    onChange: PropTypes.func
};

YesNoButton.defaultProps = {
    defaultYesNo: null,
    theme: {},
    labels: ['Yes', 'No']
};

export default injectIntl(YesNoButton);
