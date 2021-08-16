import React from 'react';
import { Field } from 'redux-form';
import { Select } from '../../../../../components/FormControls/FormControls';
import { styles } from './styles/select';
import { required } from '../../../../../utils/validators';

const options = [
    { value: "Cash", label: "Cash" },
    { value: "Card", label: "Card" },
]

function PaymentBlock() {
    return (
        <div className="checkout-form__payment-block">
            <h3 className="checkout-content__header">Payment</h3>
            <div className="checkout-form__payment">
                <label htmlFor="payment" className="checkout-form__label">Payment</label>
                <Field component={Select} validation={[ required ]} defaultValue={options[0]} options={options} styles={styles} tabIndex="1" name="payment" />
            </div>
        </div>
    )
}

export default PaymentBlock
