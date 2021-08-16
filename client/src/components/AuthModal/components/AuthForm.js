import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Google from '../assets/Google';
import facebook from '../assets/facebook.svg';
import { Input } from '../../FormControls/FormControls';
import { maxLength, required, minLength } from '../../../utils/validators';
import cn from 'classnames';

const maxLength13 = maxLength(13);
const maxLength16 = maxLength(16);
const minLength6 = minLength(6);
const minLength8 = minLength(8);

const AuthForm = ({ swapState, handleSubmit, error, submitting }) => (
    <form onSubmit={handleSubmit} className="form">
        <h3 className="form-title">Auth</h3>
        <small className={cn(error && "form-error")}>{error}</small>
        <div className="form-group">
            <Field component={Input} err={error} className="form-input" validate={[ required, maxLength13, minLength6 ]} placeholder="Login" name="login" />
        </div>
        <div className="form-group">
            <Field component={Input} err={error} className="form-input" type="password" validate={[ required, maxLength16, minLength8 ]} placeholder="Password" name="password" />
        </div>
        <button disabled={submitting} className="form-button" type="submit">Sign in</button>
        <button disabled={submitting} onClick={swapState} className="form-button" type="button">Register</button>
        <p className="form-caption">Sign in with social network</p>
        <div className="social-sign-in-block">
            <a href="/" className="social-sign-in-btn"><img src={facebook} alt="fb-icon" /></a>
            <a href="/" className="social-sign-in-btn"><Google /></a>
        </div> 
    </form>
)

export default reduxForm({
    form: 'auth'
})(AuthForm);
