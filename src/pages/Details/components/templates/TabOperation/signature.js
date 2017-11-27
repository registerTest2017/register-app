import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import signatureBefore from '../../../../../images/signature_before.jpg';
import signatureAfter from '../../../../../images/signature_after.jpg';

import styles from '../../style.scss';
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
class Signature extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isShow: false
        };
        this.signatureShow = this.signatureShow.bind(this);
    }
    signatureShow () {
        this.setState({ isShow: true });
    }
    render () {
        return (
            <div className={styles.signature}>
                {!this.state.isShow &&
                    <div tabIndex="0" role="button" onKeyPress={() => {}} onClick={this.signatureShow}>
                        <img src={signatureBefore} alt="" />
                    </div>
                }
                {this.state.isShow &&
                    <div tabIndex="0" role="button" onKeyPress={() => {}}
                        onClick={() => {
                            this.props.onHandleSignature && this.props.onHandleSignature();
                        }}
                    >
                        <img src={signatureAfter} alt="" />
                    </div>
                }
            </div>
        );
    }
}

Signature.propTypes = {
    onHandleSignature: PropTypes.func.isRequired
};

export default injectIntl(Signature);
