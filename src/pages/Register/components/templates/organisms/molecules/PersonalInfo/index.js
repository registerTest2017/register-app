import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Input, Dropdown, DropdownItem } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';
import YesNoButton from '../../../../../../../shared/components/templates/yesNoButton';
import InputContainer from '../../../../templates/atoms/InputContainer';

import styles from './style.scss';
/* eslint-disable no-console */
class PersonalInfo extends Component {
    constructor (props) {
        super(props);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange (value) {
        this.props.personalInfoActions && this.props.personalInfoActions(value);
    }

    render () {
        const { permanmentAddress, permanmentContry, city, addressOne,
            addressTwo, addressThree, postCode, foreignTax, maritalStatus,
            childrenCount, educationLevel, annualIncome, livingSituation,
            residentialAddressOne, residentialAddressTwo, residentialDetailAddress,
            liveTime, livePostCode, phoneTwo, phoneOne, intl,
            provinceData, cityData } = this.props;
        const getMessage = (keys) => {
            return intl.messages[`register.PersonalInfo.${keys}`];
        };
        return (
            <div className={classNames(styles.RegisterInfoContainer, styles.PersonalInfoContainer)}>
                <ul>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="permanmentAddress">
                                        {getMessage('permanmentAddress')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <YesNoButton
                                        name="permanmentAddress"
                                        id="permanmentAddress"
                                        defaultYesNo={permanmentAddress}
                                        labels={[getMessage('yes'), getMessage('no')]}
                                        onChange={(value) => {
                                            this.handleValueChange({
                                                'permanmentAddress': value
                                            });
                                        }}
                                        theme={styles}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.permanmentContry}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="permanmentContry">
                                        {getMessage('permanmentContry')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Dropdown
                                        name="permanmentContry"
                                        id="permanmentContry"
                                        initialDisplayValue={permanmentContry.value || getMessage('pleaseChoose')}
                                        initialValue={permanmentContry.key}
                                        value={permanmentContry.key}
                                        onChange={(value, displayValue) => {
                                            this.handleValueChange({
                                                'permanmentContry': {
                                                    value: displayValue,
                                                    key: value
                                                }
                                            });
                                        }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="China" displayValue="中国" theme={styles} />
                                        <DropdownItem value="Iran" displayValue="伊朗" theme={styles} />
                                        <DropdownItem value="USA" displayValue="美国" theme={styles} />
                                        <DropdownItem value="HK" displayValue="香港" theme={styles} />
                                        <DropdownItem value="other" displayValue="其他" theme={styles} />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <InputContainer id="city" isHaveStar title={getMessage('city')} value={city} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'city': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="addressOne" isHaveStar title={getMessage('addressOne')} value={addressOne} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'addressOne': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="addressTwo" isHaveStar={false} title={getMessage('addressTwo')} value={addressTwo} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'addressTwo': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="addressThree" isHaveStar={false} title={getMessage('addressThree')} value={addressThree} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'addressThree': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="postCode" isHaveStar={false} title={getMessage('postCode')} value={postCode} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'postCode': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="foreignTax">
                                        {getMessage('foreignTax')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <YesNoButton
                                        id="foreignTax"
                                        name="foreignTax"
                                        defaultYesNo={foreignTax}
                                        labels={[getMessage('yes'), getMessage('no')]}
                                        onChange={(value) => {
                                            this.handleValueChange({
                                                'foreignTax': value
                                            });
                                        }}
                                        theme={styles}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <InputContainer id="maritalStatus" isHaveStar title={getMessage('maritalStatus')} value={maritalStatus} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'maritalStatus': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="childrenCount" title={getMessage('childrenCount')} value={childrenCount} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'childrenCount': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li className={styles.educationLevel}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="educationLevel">
                                        {getMessage('educationLevel')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Dropdown
                                        name="educationLevel"
                                        id="educationLevel"
                                        initialDisplayValue={educationLevel.value || getMessage('pleaseChoose')}
                                        initialValue={educationLevel.key}
                                        value={educationLevel.key}
                                        onChange={(value, displayValue) => {
                                            this.handleValueChange({
                                                'educationLevel': {
                                                    value: displayValue,
                                                    key: value
                                                }
                                            });
                                        }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue="研究生" theme={styles} />
                                        <DropdownItem value="2" displayValue="本科" theme={styles} />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <InputContainer id="annualIncome" title={getMessage('annualIncome')} value={annualIncome} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'annualIncome': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li className={styles.livingSituationLi}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="livingSituation">
                                        {getMessage('livingSituation')}<i>*</i>
                                    </label>
                                </div>
                                <div className={classNames(styles.columnsRight, styles.livingSituation)}>
                                    <Dropdown
                                        name="livingSituation"
                                        id="livingSituation"
                                        initialDisplayValue={livingSituation.value || getMessage('pleaseChoose')}
                                        initialValue={livingSituation.key}
                                        value={livingSituation.key}
                                        onChange={(value, displayValue) => {
                                            this.handleValueChange({
                                                'livingSituation': {
                                                    value: displayValue,
                                                    key: value
                                                }
                                            });
                                        }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue="一般" theme={styles} />
                                        <DropdownItem value="2" displayValue="其他" theme={styles} />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.residentialAddress}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.TwoCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="residentialAddressOne">
                                        {getMessage('residentialAddress')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <div className={styles.twoDropdown}>
                                        <Dropdown
                                            name="residentialAddressOne"
                                            id="residentialAddressOne"
                                            initialDisplayValue={residentialAddressOne.value || getMessage('pleaseChoose')}
                                            initialValue={residentialAddressOne.key}
                                            value={residentialAddressOne.key}
                                            onChange={(value, displayValue) => {
                                                this.handleValueChange({
                                                    'residentialAddressOne': {
                                                        value: displayValue,
                                                        key: value
                                                    }
                                                });
                                            }}
                                            theme={styles}
                                        >
                                            {
                                                provinceData.map((item) => {
                                                    return (
                                                        <DropdownItem value={item.id} displayValue={item.name} theme={styles} key={item.id} />
                                                    );
                                                })
                                            }
                                        </Dropdown>
                                    </div>
                                    <div className={styles.twoDropdown}>
                                        <Dropdown
                                            name="residentialAddressTwo"
                                            id="residentialAddressTwo"
                                            initialDisplayValue={residentialAddressTwo.value || getMessage('pleaseChoose')}
                                            initialValue={residentialAddressTwo.key}
                                            value={residentialAddressTwo.key}
                                            onChange={(value, displayValue) => {
                                                this.handleValueChange({
                                                    'residentialAddressTwo': {
                                                        value: displayValue,
                                                        key: value
                                                    }
                                                });
                                            }}
                                            theme={styles}
                                        >
                                            {
                                                cityData.map((item) => {
                                                    return (
                                                        <DropdownItem value={item.id} displayValue={item.name} theme={styles} key={item.id} />
                                                    );
                                                })
                                            }
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <InputContainer id="residentialDetailAddress" title={getMessage('residentialDetailAddress')} value={residentialDetailAddress} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'residentialDetailAddress': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="liveTime" title={getMessage('liveTime')} value={liveTime} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'liveTime': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="livePostCode" title={getMessage('livePostCode')} value={livePostCode} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'livePostCode': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.PersonalTwoCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="phoneOne">
                                        {getMessage('phone')}
                                    </label>
                                </div>
                                <div className={classNames(styles.columnsRight, styles.columnsPhone)}>
                                    <Input
                                        id="phoneOne"
                                        name="phoneOne"
                                        theme={styles}
                                        value={phoneOne}
                                        onInput={(event) => {
                                            this.handleValueChange({
                                                'phoneOne': event.target.value
                                            });
                                        }}
                                    />
                                    <b className={styles.bLine}>&nbsp;</b>
                                    <Input id="phoneTwo"
                                        name="phoneTwo"
                                        theme={styles}
                                        value={phoneTwo}
                                        onInput={(event) => {
                                            this.handleValueChange({
                                                'phoneTwo': event.target.value
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        );
    }
}

PersonalInfo.propTypes = {
    addressOne: PropTypes.string.isRequired,
    addressThree: PropTypes.string.isRequired,
    addressTwo: PropTypes.string.isRequired,
    annualIncome: PropTypes.string.isRequired,
    childrenCount: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    educationLevel: PropTypes.object.isRequired,
    foreignTax: PropTypes.bool.isRequired,
    intl: PropTypes.object.isRequired,
    livePostCode: PropTypes.string.isRequired,
    liveTime: PropTypes.string.isRequired,
    livingSituation: PropTypes.object.isRequired,
    maritalStatus: PropTypes.string.isRequired,
    permanmentAddress: PropTypes.bool.isRequired,
    permanmentContry: PropTypes.object.isRequired,
    personalInfoActions: PropTypes.func.isRequired,
    phoneOne: PropTypes.string.isRequired,
    phoneTwo: PropTypes.string.isRequired,
    postCode: PropTypes.string.isRequired,
    residentialAddressOne: PropTypes.object.isRequired,
    residentialAddressTwo: PropTypes.object.isRequired,
    residentialDetailAddress: PropTypes.string.isRequired,
    cityData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    provinceData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default injectIntl(PersonalInfo);
