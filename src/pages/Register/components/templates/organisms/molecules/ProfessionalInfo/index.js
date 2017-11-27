import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import { Input, Dropdown, DropdownItem } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';
import InputContainer from '../../../../templates/atoms/InputContainer';

import styles from './style.scss';
/* eslint-disable no-console */
class ProfessionalInfo extends Component {
    constructor (props) {
        super(props);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange (value) {
        this.props.professionalInfoActions && this.props.professionalInfoActions(value);
    }

    render () {
        const { employment, industryCategory, profession, jobLevel,
            unitName, department, currentWorkingAge, currentWorkingAgeMounth,
            totalWorkingage, unitAddress, unitAddressCity, detailAddress, unitPostCode,
            unitPhoneOne, unitPhoneTwo, natureCompany, intl, provinceData, cityData } = this.props;
        const getMessage = (keys) => {
            return intl.messages[`register.ProfessionalInfo.${keys}`];
        };
        return (
            <div className={classNames(styles.RegisterInfoContainer, styles.ProfessionalInfoContainer)}>
                <ul>
                    <li className={styles.employment}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="employment">
                                        {getMessage('employment')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Dropdown
                                        name="employment"
                                        id="employment"
                                        initialDisplayValue={employment.value || getMessage('pleaseChoose')}
                                        initialValue={employment.key}
                                        value={employment.key}
                                        onChange={(value, displayValue) => {
                                            this.handleValueChange({
                                                'employment': {
                                                    value: displayValue,
                                                    key: value
                                                }
                                            });
                                        }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue="全职" theme={styles} />
                                        <DropdownItem value="2" displayValue="其他" theme={styles} />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.industryCategory}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="industryCategory">
                                        {getMessage('industryCategory')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Dropdown
                                        name="industryCategory"
                                        id="industryCategory"
                                        initialDisplayValue={industryCategory.value || getMessage('pleaseChoose')}
                                        initialValue={industryCategory.key}
                                        value={industryCategory.key}
                                        onChange={(value, displayValue) => {
                                            this.handleValueChange({
                                                'industryCategory': {
                                                    value: displayValue,
                                                    key: value
                                                }
                                            });
                                        }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue="互联网" theme={styles} />
                                        <DropdownItem value="2" displayValue="其他" theme={styles} />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.profession}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="profession">
                                        {getMessage('profession')}
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Dropdown
                                        name="profession"
                                        id="profession"
                                        initialDisplayValue={profession.value || getMessage('pleaseChoose')}
                                        initialValue={profession.key}
                                        value={profession.key}
                                        onChange={(value, displayValue) => {
                                            this.handleValueChange({
                                                'profession': {
                                                    value: displayValue,
                                                    key: value
                                                }
                                            });
                                        }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue="IT" theme={styles} />
                                        <DropdownItem value="2" displayValue="其他" theme={styles} />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.jobLevel}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="jobLevel">{getMessage('jobLevel')}</label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Dropdown
                                        name="jobLevel"
                                        id="jobLevel"
                                        initialDisplayValue={jobLevel.value || getMessage('pleaseChoose')}
                                        initialValue={jobLevel.key}
                                        value={jobLevel.key}
                                        onChange={(value, displayValue) => {
                                            this.handleValueChange({
                                                'jobLevel': {
                                                    value: displayValue,
                                                    key: value
                                                }
                                            });
                                        }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue="高级" theme={styles} />
                                        <DropdownItem value="2" displayValue="中级" theme={styles} />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.unitName}>
                        <InputContainer id="unitName" isHaveStar title={getMessage('unitName')} value={unitName} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'unitName': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="department" title={getMessage('department')} value={department} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'department': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.TwoCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="currentWorkingAge">
                                        {getMessage('currentWorkingAge')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="currentWorkingAge"
                                        name="currentWorkingAge"
                                        theme={styles}
                                        value={currentWorkingAge}
                                        onInput={(event) => {
                                            this.handleValueChange({
                                                'currentWorkingAge': event.target.value
                                            });
                                        }}
                                    />
                                    &nbsp;{getMessage('year')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Input
                                        id="currentWorkingAgeMounth"
                                        name="currentWorkingAgeMounth"
                                        theme={styles}
                                        value={currentWorkingAgeMounth}
                                        onInput={(event) => {
                                            this.handleValueChange({
                                                'currentWorkingAgeMounth': event.target.value
                                            });
                                        }}
                                    /> {getMessage('month')}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="totalWorkingage">
                                        {getMessage('totalWorkingage')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <Input
                                        id="totalWorkingage"
                                        name="totalWorkingage"
                                        theme={styles}
                                        value={totalWorkingage}
                                        onInput={(event) => {
                                            this.handleValueChange({
                                                'totalWorkingage': event.target.value
                                            });
                                        }}
                                    /> {getMessage('year')}
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.unitAddress}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.TwoCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="unitAddress">
                                        {getMessage('unitAddress')}<i>*</i>
                                    </label>
                                </div>
                                <div className={styles.columnsRight}>
                                    <div className={styles.twoDropdown}>
                                        <Dropdown
                                            name="unitAddress"
                                            id="unitAddress"
                                            initialDisplayValue={unitAddress.value || getMessage('pleaseChoose')}
                                            initialValue={unitAddress.key}
                                            value={unitAddress.key}
                                            onChange={(value, displayValue) => {
                                                this.handleValueChange({
                                                    'unitAddress': {
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
                                            name="unitAddressCity"
                                            id="unitAddressCity"
                                            initialDisplayValue={unitAddressCity.value || getMessage('pleaseChoose')}
                                            initialValue={unitAddressCity.key}
                                            value={unitAddressCity.key}
                                            onChange={(value, displayValue) => {
                                                this.handleValueChange({
                                                    'unitAddressCity': {
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
                        <InputContainer id="detailAddress" title={getMessage('detailAddress')} value={detailAddress} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'detailAddress': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <InputContainer id="unitPostCode" title={getMessage('unitPostCode')} value={unitPostCode} themes={styles}
                            onInput={(event) => {
                                this.handleValueChange({
                                    'unitPostCode': event.target.value
                                });
                            }}
                        />
                    </li>
                    <li>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.PersonalTwoCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="unitPhoneOne">
                                        {getMessage('unitPhone')}<i>*</i>
                                    </label>
                                </div>
                                <div className={classNames(styles.columnsRight, styles.columnsPhone)}>
                                    <Input
                                        id="unitPhoneOne"
                                        name="unitPhoneOne"
                                        theme={styles}
                                        value={unitPhoneOne}
                                        onInput={(event) => {
                                            this.handleValueChange({
                                                'unitPhoneOne': event.target.value
                                            });
                                        }}
                                    />
                                    <b className={styles.bLine}>&nbsp;</b>
                                    <Input id="unitPhoneTwo"
                                        name="unitPhoneTwo"
                                        theme={styles}
                                        value={unitPhoneTwo}
                                        onInput={(event) => {
                                            this.handleValueChange({
                                                'unitPhoneTwo': event.target.value
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles.livingSituationLi}>
                        <div className={styles.Rows}>
                            <div className={classNames(styles.columns, styles.oneCols)}>
                                <div className={styles.columnsLeft}>
                                    <label htmlFor="natureCompany">
                                        {getMessage('natureCompany')}<i>*</i>
                                    </label>
                                </div>
                                <div className={classNames(styles.columnsRight, styles.livingSituation)}>
                                    <Dropdown
                                        name="natureCompany"
                                        id="natureCompany"
                                        initialDisplayValue={natureCompany.value || getMessage('pleaseChoose')}
                                        initialValue={natureCompany.key}
                                        value={natureCompany.key}
                                        onChange={(value, displayValue) => {
                                            this.handleValueChange({
                                                'natureCompany': {
                                                    value: displayValue,
                                                    key: value
                                                }
                                            });
                                        }}
                                        theme={styles}
                                    >
                                        <DropdownItem value="1" displayValue="国营" theme={styles} />
                                        <DropdownItem value="2" displayValue="私企" theme={styles} />
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

ProfessionalInfo.propTypes = {
    currentWorkingAge: PropTypes.string.isRequired,
    currentWorkingAgeMounth: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    detailAddress: PropTypes.string.isRequired,
    employment: PropTypes.object.isRequired,
    industryCategory: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    jobLevel: PropTypes.object.isRequired,
    natureCompany: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    professionalInfoActions: PropTypes.func.isRequired,
    totalWorkingage: PropTypes.string.isRequired,
    unitAddress: PropTypes.object.isRequired,
    unitAddressCity: PropTypes.object.isRequired,
    unitName: PropTypes.string.isRequired,
    unitPhoneOne: PropTypes.string.isRequired,
    unitPhoneTwo: PropTypes.string.isRequired,
    unitPostCode: PropTypes.string.isRequired,
    cityData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    provinceData: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default injectIntl(ProfessionalInfo);
