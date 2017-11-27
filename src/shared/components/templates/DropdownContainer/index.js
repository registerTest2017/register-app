import React, { Component, PropTypes } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import FontIcon from 'group-digital-wealth-common-ui/lib/web/components/ui/fontIcon';
import Tooltip from 'group-digital-wealth-common-ui/lib/web/components/widgets/tooltip';
import { Dropdown, DropdownItem } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';

/**
 * @extends Component
 * @desc DropdownRistLevel propTypes validation:
 * <pre>
 *   params: is object.
 * </pre>
 * */
class DropdownContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        const { selectLevelValue, descriptionList, title, dropdownId, tipsId, hasTip, styles } = this.props;
        const dropdownItemNode = descriptionList.map((option, index) =>
            <DropdownItem
                key={`${index}`}
                value={`${index}`}
                displayValue={option.title}
                theme={styles}
            >
                <div className={classNames(styles.riskLevelItemContainer)}>
                    <div className={classNames(styles.levelInfo)}>
                        <strong>
                            {option.title}
                        </strong>
                        <div dangerouslySetInnerHTML={{ __html: option.description }} className={classNames(styles.description)} />
                    </div>
                </div>
            </DropdownItem>
        );
        return (
            <div className={styles.inputContainer}>
                <div className={styles.inputContainerHeader}>
                    <label htmlFor={dropdownId} className={styles.inputLabel}>
                        {title}
                    </label>
                </div>
                <div className={styles.inputContainerValue}>
                    <div className={styles.inputTextbox}>
                        <Dropdown
                            name={dropdownId}
                            id={dropdownId}
                            initialDisplayValue={selectLevelValue.value}
                            initialValue={selectLevelValue.value}
                            value={selectLevelValue.key}
                            onChange={this.props.onChangeHandle}
                            theme={styles}
                        >
                            {dropdownItemNode}
                        </Dropdown>
                        {hasTip && <div className={styles.hasTip}>
                            <a ref="aCircleHelp" className={styles.tooltipHandler} onMouseEnter={(event) => { this.savingChangeRiskLeveltip.show(this.refs.aCircleHelp); }} onMouseLeave={(event) => { this.savingChangeRiskLeveltip.hide(this.refs.aCircleHelp); }}>
                                <FontIcon icon="circle-help-solid" theme={styles} />
                                <Tooltip ref={(tooltip) => { this.savingChangeRiskLeveltip = tooltip; }} place="bottom" theme={styles}>
                                    <p>
                                        <FormattedMessage
                                            id={tipsId}
                                            values={{
                                                LineBreaker: <br />
                                            }}
                                        />
                                    </p>
                                </Tooltip>
                            </a>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}

DropdownContainer.propTypes = {
    descriptionList: PropTypes.array.isRequired,
    dropdownId: PropTypes.string.isRequired,
    selectLevelValue: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    onChangeHandle: PropTypes.func.isRequired,
    hasTip: PropTypes.bool,
    tipsId: PropTypes.string
};

DropdownContainer.defaultProps = {
    hasTip: true
};

export default injectIntl(DropdownContainer);
