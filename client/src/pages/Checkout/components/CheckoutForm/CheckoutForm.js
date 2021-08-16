import React from 'react';
import { reduxForm } from 'redux-form';
import ContactsBlock from './components/ContactsBlock';
import AddressBlock from './components/AddressBlock';
import DeliveryTimeBlock from './components/DeliveryTimeBlock';
import PaymentBlock from './components/PaymentBlock';
import TotalBlock from './components/TotalBlock';

let CheckoutForm = ({ total, handleSubmit, submitting }) => {
    return(
        <form onSubmit={handleSubmit} className="cc__col-1">
            <div className="checkout-form">
                <ContactsBlock />
                <AddressBlock />
                <DeliveryTimeBlock />
                <PaymentBlock />
                <TotalBlock submitting={submitting} total={total} />
            </div>
        </form>
    )
}

CheckoutForm = reduxForm({
    form: 'checkout'
})(CheckoutForm);

export default CheckoutForm;

