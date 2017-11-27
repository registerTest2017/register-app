import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Input } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';

import styles from '../../style.scss';
/* eslint-disable no-console */
class PhoneVerificationCode extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0,
            liked: true
        };
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleValueChange (key, value) {
        const params = {};
        params[key] = value;
        this.props.basicInfoActions && this.props.basicInfoActions(params);
    }

    handleClick () {
        if (this.state.liked) {
            this.inputSelf && this.inputSelf.classList.add(styles.getTwoCode_gray);
            this.setState({ liked: false, count: 60 });
            this.timer = setInterval(() => {
                const count = this.state.count;
                if (count < 1) {
                    this.setState({ liked: true });
                    clearInterval(this.timer);
                    this.inputSelf && this.inputSelf.classList.remove(styles.getTwoCode_gray);
                }
                this.setState({ count: count - 1 });
            }, 1000);
        }
    }

    render () {
        const {
            phoneVerificationCode,
            intl
        } = this.props;
        const messages = intl.messages;
        const getMessage = (keys) => {
            const type = Object.prototype.toString.call(keys);
            const tmpKey = type === '[object Array]' ? keys.join('.') : keys;
            return messages[`register.basicInfo.${tmpKey}`];
        };

        const codeText = this.state.liked ? `${getMessage('getPhoneVerificationCode')}` : `${getMessage('resGetPhoneVerificationCode')}(${this.state.count}s)`;

        return (
            <li>
                <div className={styles.Rows}>
                    <div className={classNames(styles.columns, styles.oneCols)}>
                        <div className={styles.columnsLeft}>
                            <label htmlFor="phoneVerificationCode">
                                {getMessage('phoneVerificationCode')}<i>*</i>
                            </label>
                        </div>
                        <div className={classNames(styles.columnsRight, styles.minInput)}>
                            <Input
                                id="phoneVerificationCode"
                                name="phoneVerificationCode"
                                value={phoneVerificationCode}
                                theme={styles}
                                onInput={(event) => {
                                    this.handleValueChange('phoneVerificationCode', event.target.value);
                                }}
                            />
                            <input
                                type="button"
                                value={codeText}
                                className={styles.getTwoCode}
                                onClick={this.handleClick}
                                ref={(self) => {
                                    this.inputSelf = self;
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.errorTips}>
                    <p>errortips,dfd dfdlsdfsdfdf error!</p>
                </div>
            </li>
        );
    }
}

PhoneVerificationCode.propTypes = {
    basicInfoActions: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    phoneVerificationCode: PropTypes.string.isRequired
};

export default injectIntl(PhoneVerificationCode);

