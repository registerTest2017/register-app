import React from 'react';
import styles from './style.scss';

/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-onchange */
class formValidation extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            form: {
                name: {
                    valid: false,
                    value: '',
                    error: '',
                    type: 'required'
                },
                age: {
                    valid: false,
                    value: '0',
                    error: ''
                },
                gender: {
                    valid: false,
                    value: '',
                    error: ''
                }
            }
        };
    }
    isValid (value, field) {
        const newFieldObj = { value, valid: true, error: '' };
        switch (field) {
            case 'name': {
                if (value.length >= 5) {
                    newFieldObj.error = 'the input more than 4 charactor';
                    newFieldObj.valid = false;
                } else if (value.length === 0) {
                    newFieldObj.error = 'please enter';
                    newFieldObj.valid = false;
                }
                break;
            }
            case 'age': {
                if (value > 100 || value <= 0) {
                    newFieldObj.error = 'please input 1--100';
                    newFieldObj.valid = false;
                }
                break;
            }
            case 'required': {
                if (!value) {
                    newFieldObj.error = 'please select';
                    newFieldObj.valid = false;
                }
                break;
            }
        }
        return newFieldObj;
    }
    handlevalueChange (field, value, type) {
        console.log(value, 'value');
        const { form } = this.state;
        const newFieldObj = this.isValid(value, type);
        console.log(newFieldObj, 'newFieldObj');
        this.setState({
            form: {
                ...form,
                [field]: newFieldObj
            }
        });
    }
    handleSubmit (event) {
        event.preventDefault();

        const { form: { name, age, gender }, form } = this.state;
        Object.keys(form).map((item, index) => {
            console.log(item, index);
            this.handlevalueChange(item, form[item].value);
        });

        if (!name.valid || !age.valid || !gender.valid) {
            console.log('please enter');
            return;
        }
        console.log('success');
    }
    render () {
        const { form: { name, age, gender } } = this.state;
        return (
            <div className={styles.formValidation}>
                <h1>add user</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor="name">user:</label>
                    <input type="text" id="name" value={name.value} tag="input"
                        onChange={(event) => this.handlevalueChange('name', event.target.value, 'required')}
                    />
                    {!name.valie && <span>{name.error}</span>}
                    <br />
                    <label htmlFor="age">age:</label>
                    <input type="text" id="age" value={age.value}
                        onChange={(event) => this.handlevalueChange('age', event.target.value)}
                    />
                    {!age.valie && <span>{age.error}</span>}
                    <br />
                    <label htmlFor="gender">gender:</label>
                    <select value={gender.value} id="gender"
                        ref={(self) => { this.genderself = self; }}
                        onChange={(event) => this.handlevalueChange('gender', event.target.value, 'required')}
                    >
                        <option value="">please select</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    {!gender.valie && <span>{gender.error}</span>}
                    <br /><br />
                    <button type="sumbit" value="submit" >submit</button>
                </form>
            </div>
        );
    }
}

export default formValidation;
