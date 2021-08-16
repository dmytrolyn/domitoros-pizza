import React, { useState, useEffect } from 'react';
import { reduxForm, Field, change, untouch } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { required, maxLength, minLength, email, password, compareNewPassword, compareRepeatPassword, phone } from '../../utils/validators';
import { Input, Select } from '../../components/FormControls/FormControls';
import { Collapse } from 'react-collapse';
import cn from 'classnames';

const maxLength20 = maxLength(20);
const minLength4 = minLength(4);
const minLength8 = minLength(8);

const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
]

let Profile = ({ profile, submitting, pristine, handleSubmit, error, initialize, dispatch }) => {

    const [collapseState, setCollapseState] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        initialize(profile);
    }, [profile, initialize])

    const changeState = () => {
        if(collapseState) {
            ["old_pass", "password", "password2"].forEach(key => {
                dispatch(change("profile", key, ""));
                dispatch(untouch("profile", key));
            })
            setCollapseState(false);
        } else {
            setCollapseState(true);
        }
    }

    return (
        redirect ? <Redirect to="/" /> :
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="form-title">Your account</h3>
            <small className={cn(error && "form-error")}>{error}</small>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <Field id="name" component={Input} validate={[ required, maxLength20, minLength4 ]} className="form-input" placeholder={"Name"} name="name" />
            </div>
            <div className="form-group">
                <label htmlFor="surname" className="form-label">Surname</label>
                <Field id="surname" component={Input} validate={[ required, maxLength20, minLength4 ]} className="form-input" placeholder={"Surname"} name="surname" />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <Field id="email" component={Input} validate={[ required, email ]} type="email" className="form-input" placeholder={"Email"} name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <Field id="phone" component={Input} validate={[ required, phone ]} className="form-input" placeholder={"Phone number"} name="phone" />
            </div>
            <div className="form-group">
                <label htmlFor="gender" className="form-label">Gender</label>
                <Field id="gender" component={Select} options={genderOptions} name="gender" />
            </div>
            <div className="form-extra" onClick={changeState}>
                <p className="form-extra__title">Change password</p>
            </div>
            <Collapse isOpened={collapseState}>
                <div className="form-group">
                    <Field component={Input} type="password" className="form-input" name="old_pass" placeholder={"Old password"} />
                </div>
                <div className="form-group">
                    <Field component={Input} type="password" validate={[ minLength8, compareNewPassword, password ]} className="form-input" name="password" placeholder={"New password"} />
                </div>
                <div className="form-group">
                    <Field component={Input} type="password" validate={[ minLength8, compareRepeatPassword, password ]} className="form-input" name="password2" placeholder={"Repeat password"} />
                </div>
            </Collapse>
            <div className="form-group">
                <button disabled={submitting || pristine} className="form-button" type="submit">Save</button>
                <button disabled={submitting} onClick={() => setRedirect(true)} className="form-cancel" type="submit">Cancel</button>
            </div>
        </form>
    )
}

Profile = reduxForm({
    form: "profile"
})(Profile);

export default Profile;