import React, { useState } from 'react';
import { Field } from 'redux-form';
import { Select, DatePicker } from '../../../../../components/FormControls/FormControls';
import { styles } from './styles/select';

const setDays = (date, days) => {
    date.setDate(date.getDate() + days);
    return date;
}

function DeliveryTimeBlock() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="checkout-form__delivery-time-block">
            <h3 className="checkout-content__header">Date and time</h3>
            <div className="checkout-form__date-time-grid">
                <div className="checkout-form__date">
                    <label htmlFor="date" className="checkout-form__label">Date</label>
                    <Field component={DatePicker} 
                    selected={date} 
                    onChange={(date) => setDate(date)} 
                    className="checkout-form__select" 
                    minDate={new Date()}
                    maxDate={setDays(new Date(), 5)}
                    showTimeSelect
                    minTime={new Date().getTime()}
                    maxTime={() => { 
                        let date = new Date();
                        date.setDate(date.getDate() + 1);
                        return date.getTime();
                    }}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    name="date" />
                </div>
            </div>
        </div>
    )
}

export default DeliveryTimeBlock;
