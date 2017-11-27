import React from 'react';
import { Validated } from './Validation';
import styles from './style.scss';

/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-onchange */
class formValidation extends React.Component {
    constructor (props, context) {
        super(props, context);
        console.log(context, 'context');
        this.state = {
            InputValue1: '',
            InputValue2: ''
        };
    }
    handleSubmit (event) {
    }
    render () {
        const { InputValue1, InputValue2 } = this.state;
        return (
            <div className={styles.formValidation}>
                <h1>add user21</h1>
                <Validated id="name"
                    type="Mandatory"
                    value={InputValue1}
                    min={0}
                    max={1000}
                    onError={(errCode, errMsg) => {
                        return <div><span>{errMsg}</span></div>;
                    }}
                />
                <Validated id="age"
                    type="Min"
                    value={InputValue2 || 25}
                    min={0}
                    max={1000}
                    onError={(errCode, errMsg) => {
                        return <div><span>{errMsg}</span></div>;
                    }}
                />
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor="name">user:</label>
                    <input type="text" id="name" value={InputValue1}
                        onChange={(event) => {
                            this.setState({
                                InputValue1: event.target.value
                            });
                        }}
                    /><br />
                    <label htmlFor="age">age:</label>
                    <input type="text" id="age" value={InputValue2 || 15}
                        onChange={(event) => {
                            this.setState({
                                InputValue2: event.target.value
                            });
                        }}
                    />
                    <br />
                    <label htmlFor="gender">gender:</label>
                    <select id="gender">
                        <option value="">please select</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <br /><br />
                    <button type="sumbit" value="submit" >submit</button>
                </form>
            </div>
        );
    }
}

export default formValidation;
