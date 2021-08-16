import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../FormControls/FormControls';
import { required, maxLength, minLength, password, compareNewPassword, compareRepeatPassword } from '../../../utils/validators';
import cn from 'classnames';

const maxLength13 = maxLength(13);
const maxLength16 = maxLength(16);
const minLength6 = minLength(6);
const minLength8 = minLength(8);

const RegisterForm = ({ swapState, handleSubmit, error, submitting }) => {
    return (
        <form onSubmit={handleSubmit} class="form">
            <h3 className="form-title">Register</h3>
            <small className={cn(error && "form-error")}>{error}</small>
            <div className="form-group">
                <Field component={Input} err={error} validate={[ required, maxLength13, minLength6 ]} className="form-input" placeholder={"Login"} name="login" />
            </div>
            <div className="form-group">
                <Field component={Input} validate={[ required, maxLength16, minLength8, password, compareNewPassword ]} type="password" className="form-input" placeholder={"Password"} name="password" />
            </div>
            <div className="form-group">
                <Field component={Input} validate={[ required, maxLength16, minLength8, password, compareRepeatPassword ]} type="password" className="form-input" placeholder={"Repeat password"} name="password2" />
            </div>
            <div className="form-group">
                <button disabled={submitting} className="form-button" type="submit">Sign up</button>
                <button onClick={swapState} className="form-button" type="button">Back to login</button>
            </div>
        </form>
    )
} 

export default reduxForm({
    form: 'register'
})(RegisterForm);
