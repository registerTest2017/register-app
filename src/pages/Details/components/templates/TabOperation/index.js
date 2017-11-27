import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import Popup from 'group-digital-wealth-common-ui/lib/web/components/widgets/popup';
import {
    SEARCH_ACCEPT_CUSTOM,
    SEARCH_REJECT_CUSTOM
} from '../../../containers/state/actions';

import styles from '../../style.scss';
import DetailSignature from './signature';
/* eslint-disable no-console */
class TabOperation extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isPopupShown: false
        };
        this.backList = this.backList.bind(this);
        this.detailSignature = this.detailSignature.bind(this);
        this.onHandleSignature = this.onHandleSignature.bind(this);
    }
    componentDidMount () {
        this.props.detailRejectCustom({
            success: false
        });
        this.props.detailAcceptCustom({
            success: false
        });
    }

    backList () {
        this.props.detailResult.customerInfo && this.props.detailUpdateList && this.props.detailUpdateList({
            basicCustomerInfo: {
                familyName: '',
                givenName: '',
                credentialNo: '',
                expDate: '',
                cellPhoneNumber: '',
                gender: '',
                dateOfBirth: ''
            },
            personalInfo: {
                permanentCity: '',
                permanentCountry: '',
                maritalStatus: '',
                numberOfChild: ''
            },
            workSpecification: {
                jobTitle: '',
                department: '',
                companyWorkAge: '',
                socialWorkAge: ''
            },
            contacts: {
                firstContactor: '',
                fcRelationShip: '',
                fcPhoneNumber: ''
            }
        });
        this.props.history.push(`/${this.props.match.params.locale}/search`);
    }

    detailSignature () {
        this.setState({ isPopupShown: true });
    }

    onHandleSignature () {
        this.setState({ isPopupShown: false });
    }

    render () {
        const { intl, acceptResult, rejectResult } = this.props;
        const messages = intl.messages;
        return (
            <div className={styles.operations}>
                <div className={styles.backSearch}>
                    <button className={styles.backButton} onClick={this.backList}>&lt; 返回列表页</button>
                </div>
                <div className={styles.operationsButton}>
                    <button className={
                            rejectResult.success || acceptResult.success ? classNames(styles.button, styles.btnworning, styles.buttonDisabled) : classNames(styles.button, styles.btnworning)
                        }
                        onClick={() => {
                            !rejectResult.success && !acceptResult.success && this.props.emit(SEARCH_REJECT_CUSTOM);
                        }}
                    >{rejectResult.success ? '已拒绝' : messages['search.table.Reject']}</button>
                    <button className={
                            rejectResult.success || acceptResult.success ? classNames(styles.button, styles.btnapprove, styles.buttonDisabled) : classNames(styles.button, styles.btnapprove)
                        }
                        onClick={() => {
                            !rejectResult.success && !acceptResult.success && this.props.emit(SEARCH_ACCEPT_CUSTOM);
                        }}
                    >{acceptResult.success ? '已通过' : messages['search.table.Approve']}</button>
                    <button className={styles.button} onClick={this.detailSignature}>客户签名</button>
                    <div className={styles.popUpSignature}>
                        <Popup hideOnOverlayClick theme={styles} show={this.state.isPopupShown}>
                            <DetailSignature onHandleSignature={this.onHandleSignature} />
                        </Popup>
                    </div>
                </div>
            </div>
        );
    }
}

TabOperation.propTypes = {
    detailAcceptCustom: PropTypes.func.isRequired,
    detailRejectCustom: PropTypes.func.isRequired,
    detailResult: PropTypes.object.isRequired,
    detailUpdateList: PropTypes.func.isRequired,
    emit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    acceptResult: PropTypes.object,
    match: PropTypes.object,
    rejectResult: PropTypes.object
};

TabOperation.defaultProps = {
    acceptResult: {
        success: false
    },
    rejectResult: {
        success: false
    }
};

export default injectIntl(TabOperation);
