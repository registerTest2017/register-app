import React, { Component, PropTypes } from 'react';
// wealth lib
import FontIcon from 'group-digital-wealth-common-ui/lib/web/components/ui/fontIcon/';
import Tooltip from 'group-digital-wealth-common-ui/lib/web/components/widgets/tooltip/';
import { NumericInputWithSymbol, NumericInput } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';

class InputContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasTip: this.props && this.props.hasTip !== undefined && this.props.hasTip != null ? this.props.hasTip : true
        };
    }
    // for back button refresh current page
    componentDidMount () {
        this.setState({
            hasTip: this.props && this.props.hasTip !== undefined && this.props.hasTip != null ? this.props.hasTip : true
        });
    }

    render () {
        const { title, name, tips, symbol, theme, placeholder, smallPrint, isNumericInput } = this.props;
        const { hasTip } = this.state;
        const InputComponent = (() => {
            let result = '';
            if (!isNumericInput) {
                result = (
                    <NumericInputWithSymbol
                        {...this.props}
                        placeholder={placeholder}
                        name={name}
                        id={name}
                        symbol={symbol || 'HKD'}
                        theme={theme}
                    />
                );
            } else {
                result = (
                    <NumericInput
                        {...this.props}
                        placeholder={placeholder}
                        name={name}
                        id={name}
                        theme={theme}
                    />
                );
            }
            return result;
        })();
        return (
            <div className={theme.inputContainer} style={this.props.style}>
                <div className={theme.inputContainerHeader}>
                    <label htmlFor={name} className={theme.inputLabel}>
                        {title}
                    </label>
                    <p className={theme.smallPrint}>{smallPrint}</p>
                    {/* <Tooltip ref={(tooltip) => { this.containerTip = tooltip; }} place="bottom" theme={theme}>
                        {tips}
                    </Tooltip> */}
                </div>
                <div className={theme.inputContainerValue}>
                    <div className={theme.inputTextbox} style={{ width: this.props.inputWidth }}>
                        {InputComponent}
                        <div className={theme.hasTip}>
                            { hasTip &&
                                <a ref="aCircleHelp" className={theme.tooltipHandler} onMouseEnter={(event) => { this.containerTip.show(this.refs.aCircleHelp); }} onMouseLeave={(event) => { this.containerTip.hide(this.refs.aCircleHelp); }}>
                                    <FontIcon icon="circle-help-solid" theme={theme} />
                                    <Tooltip ref={(tooltip) => { this.containerTip = tooltip; }} place="bottom" theme={theme}>
                                        {tips}
                                    </Tooltip>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

InputContainer.propTypes = {
    hasTip: PropTypes.bool,
    inputWidth: PropTypes.string,
    isNumericInput: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    smallPrint: PropTypes.string,
    style: PropTypes.object,
    symbol: PropTypes.string,
    theme: PropTypes.object,
    tips: PropTypes.node,
    title: PropTypes.string
};

InputContainer.getDefaultProps = {
    isNumericInput: false,
    symbol: 'HKD',
    value: '',
    inputWidth: '100%'
};

export default InputContainer;
