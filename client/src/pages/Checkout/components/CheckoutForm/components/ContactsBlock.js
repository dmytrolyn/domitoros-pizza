import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../../../../../components/FormControls/FormControls';
import { required, email, phone, minLength, maxLength, } from '../../../../../utils/validators';

const maxLength30 = maxLength(30);
const minLength4 = minLength(4);

function ContactsBlock() {
    return (
        <div className="checkout-form__contact-block">
            <h3 className="checkout-content__header">Contacts</h3>
            <div className="checkout-form__contact-grid">
                <div className="checkout-form__contact-grid-cell">
                    <label className="checkout-form__label" htmlFor="name">Name</label>
                    <Field className="checkout-form__input" name="name" component={Input} validate={[ required, maxLength30, minLength4 ]} placeholder="Name.." />
                </div>
                <div className="checkout-form__contact-grid-cell">
                    <label className="checkout-form__label" htmlFor="phone">Phone</label>
                    <Field className="checkout-form__input" name="phone" component={Input} validate={[ required, phone ]} defaultValue="380" placeholder="Phone number.." />
                </div>
                <div className="checkout-form__contact-grid-cell">
                    <label className="checkout-form__label" htmlFor="email">Email</label>
                    <Field className="checkout-form__input" name="email" component={Input} validate={[ required, email ]} type="email" placeholder="Email.." />
                </div>
            </div>
        </div>
    )
}

export default ContactsBlock
