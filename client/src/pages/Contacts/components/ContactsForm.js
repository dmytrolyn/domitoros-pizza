import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../../components/FormControls/FormControls';
import { required, maxLength } from '../../../utils/validators';

const maxLength400 = maxLength(400);

let ContactsForm = (props) => {
    return (
        <form className="contacts__feedback-form" onSubmit={props.handleSubmit}>
            <div className="contacts__feedback-input-group">
                <Field component={Input} validate={[ required ]} name="name" className="contacts__feedback-input" placeholder="Enter name.." />
            </div>
            <Field component={Textarea} validate={[ required, maxLength400 ]} name="message" className="contacts__feedback-text" placeholder="Leave feedback..." />
            <button type="submit" className="contacts__feedback-btn">Leave feedback!</button>
        </form>
    )
}

ContactsForm = reduxForm({
    form: 'contacts'
})(ContactsForm)

export default ContactsForm;