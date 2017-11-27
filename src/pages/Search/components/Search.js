import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import PageButtonGroup from 'group-digital-wealth-common-ui/lib/web/components/widgets/pageButtonGroup';
import {
    SEARCH_GET_LIST,
    SEARCH_REJECT_CUSTOM,
    SEARCH_ACCEPT_CUSTOM
} from '../containers/state/actions';
import { detailUpdateCustomIDAction } from '../../Details/containers/state/actions';
import styles from './style.scss';

/* eslint-disable no-console */
class Search extends Component {
    constructor (props, context) {
        super(props);
        this.state = {
            options: [1, 'All'],
            currentOption: 'All'
        };
        this.lastFreshData = props.lastFreshData;
        this.store = context.store;
        this.handleOnPageSelect = this.handleOnPageSelect.bind(this);
    }

    componentWillMount () {
        this.props.emit(SEARCH_GET_LIST);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.lastFreshData !== this.lastFreshData) {
            this.props.emit(SEARCH_GET_LIST);
            this.lastFreshData = nextProps.lastFreshData;
        }
    }

    handleOnPageSelect (value) {
        this.setState({
            currentOption: value
        });
    }
    render () {
        const { searchResult, intl } = this.props;
        const { messages } = intl;
        return (
            <div className={styles.registerContainer}>
                <div className={styles.HeaderH} />
                <div className={styles.searchContext}>
                    <div>
                        <table className={styles.searchTable} style={{ width: '1060px' }}>
                            <thead>
                                <tr style={{
                                    height: '40px',
                                    lineHeight: '40px',
                                    overflow: 'hidden'
                                }}
                                >
                                    <td rowSpan="2" width="40"><br />{messages['search.table.ID']}</td>
                                    <td colSpan="4">{messages['search.table.BasicInformation']}</td>
                                    <td colSpan="5">{messages['search.table.CheckResult']}</td>
                                    <td rowSpan="2" width="40"><br />{messages['search.table.Status']}</td>
                                    <td rowSpan="2" width="200"><br />{messages['search.table.Operation']}</td>
                                </tr>
                                <tr>
                                    <td width="80"><span className={styles.fixLineHeight}>{messages['search.table.UserName']}</span></td>
                                    <td width="140"><span className={styles.fixLineHeight}>{messages['search.table.IDCard']}</span></td>
                                    <td width="30"><span className={styles.twoLineFix}>{messages['search.table.Gender']}</span></td>
                                    <td width="60"><span className={styles.twoLineFix}>{messages['search.table.permanmentContry']}</span></td>
                                    <td width="40"><span className={styles.twoLineFix}>{messages['search.table.IDCardCheck']}</span></td>
                                    <td width="60"><span className={styles.twoLineFix}>{messages['search.table.BackListCheck']}</span></td>
                                    <td width="60"><span className={styles.twoLineFix}>{messages['search.table.ExitingCheck']}</span></td>
                                    <td width="60"><span className={styles.twoLineFix}>{messages['search.table.PEPCheck']}</span></td>
                                    <td width="40"><span className={styles.twoLineFix}>{messages['search.table.SanctionCheck']}</span></td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searchResult && searchResult.map && searchResult.map((item, key) => {
                                        const disabledClass = item.Status !== 0 ? styles.statusDisabled : '';
                                        const disabledStatus = item.Status !== 0 ? 'disabled' : null;
                                        return (
                                            <tr key={key}>
                                                {
                                                    Object.keys(item).map((subKey, index) => {
                                                        const boolKeys = ['IDCardCheck', 'BackListCheck', 'ExitingCheck', 'PEPCheck', 'SanctionCheck'];
                                                        const ignoreKeys = ['customeID'];
                                                        if (ignoreKeys.indexOf(subKey) < 0) {
                                                            if (boolKeys.indexOf(subKey) >= 0) {
                                                                let checkClassName = 0;
                                                                if (!isNaN(item[subKey])) {
                                                                    if (parseInt(item[subKey], 10) === 1) {
                                                                        checkClassName = styles.tdStatusPass;
                                                                    } else if (parseInt(item[subKey], 10) === 2) {
                                                                        checkClassName = styles.tdStatusFaild;
                                                                    } else {
                                                                        checkClassName = styles.tdStatusWait;
                                                                    }
                                                                } else {
                                                                    checkClassName = styles.tdStatusWait;
                                                                }
                                                                return (<td key={index}><span className={classNames(styles.tdStatus, checkClassName)} /></td>);
                                                            } else if (subKey === 'Status') {
                                                                let statusClass = '';
                                                                if (item[subKey] === 1) {
                                                                    statusClass = styles.statusApprove;
                                                                } else if (item[subKey] === 2) {
                                                                    statusClass = styles.statusReject;
                                                                } else {
                                                                    statusClass = styles.statusWait;
                                                                }
                                                                return (<td key={index}><span className={statusClass} /></td>);
                                                            } else {
                                                                const widthObj = {
                                                                    ID: 40,
                                                                    UserName: 80,
                                                                    IDCard: 140,
                                                                    Gender: 30,
                                                                    PermanentCountry: 60
                                                                };
                                                                const lStyle = {
                                                                    width: widthObj[subKey] || '',
                                                                    display: 'block',
                                                                    overflow: 'hidden',
                                                                    whiteSpace: 'no-wrap',
                                                                    textOverflow: 'ellipsis'
                                                                };
                                                                return (<td key={index}><span title={item[subKey]} style={lStyle}>{item[subKey]}</span></td>);
                                                            }
                                                        }
                                                    })
                                                }
                                                <td>
                                                    <button disabled={disabledStatus} className={classNames([styles.button, styles.btnworning, disabledClass])}
                                                        onClick={() => {
                                                            this.props.searchAcceptCustom(item.customeID);
                                                            this.props.emit(SEARCH_REJECT_CUSTOM);
                                                        }}
                                                    >{messages['search.table.Reject']}</button>
                                                    <button disabled={disabledStatus} className={classNames([styles.button, styles.btnapprove, disabledClass])}
                                                        onClick={() => {
                                                            this.props.searchAcceptCustom(item.customeID);
                                                            this.props.emit(SEARCH_ACCEPT_CUSTOM);
                                                        }}
                                                    >{messages['search.table.Approve']}</button>
                                                    <Link className={classNames([styles.button, styles.btnprimary])} to="details"
                                                        onClick={() => {
                                                            this.store.dispatch(detailUpdateCustomIDAction(item.customeID));
                                                        }}
                                                    >{messages['search.table.Detail']}</Link>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        <div style={{ marginTop: '10px' }}>
                            <PageButtonGroup onSelect={this.handleOnPageSelect} options={this.state.options} currentOption={this.state.currentOption} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    emit: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
    lastFreshData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    searchAcceptCustom: PropTypes.func.isRequired,
    searchResult: PropTypes.array.isRequired
};

Search.contextTypes = {
    store: PropTypes.object.isRequired
};

export default injectIntl(Search);
