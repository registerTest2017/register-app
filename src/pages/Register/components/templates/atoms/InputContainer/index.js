import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input } from 'group-digital-wealth-common-ui/lib/web/components/ui/form';

class InputContainer extends Component {
    constructor (props) {
        super(props);
        this.onInput = this.onInput.bind(this);
    }

    onInput (event) {
        this.props.onInput && this.props.onInput(event);
    }

    render () {
        const { title, id, value, isHaveStar, themes } = this.props;
        return (
            <div className={themes.Rows}>
                <div className={classNames(themes.columns, themes.oneCols)}>
                    <div className={themes.columnsLeft}>
                        <label htmlFor={id}>
                            {title}{isHaveStar && <i>*</i>}
                        </label>
                    </div>
                    <div className={themes.columnsRight}>
                        <Input
                            id={id}
                            name={id}
                            theme={themes}
                            value={value}
                            onInput={this.onInput}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

InputContainer.propTypes = {
    id: PropTypes.string.isRequired,
    isHaveStar: PropTypes.bool.isRequired,
    themes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInput: PropTypes.func
};

InputContainer.defaultProps = {
    isHaveStar: true
};

export default InputContainer;
