import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../../../../../components/FormControls/FormControls';
import { required, number } from '../../../../../utils/validators';

const AddressBlock = () => {
    return (
        <div className="checkout-form__address-block">
            <h3 className="checkout-content__header">Address</h3>
            <div className="checkout-form__address-form">
                <div className="checkout-form__city">
                    <span>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="1" d="M5.21476 8.77934C5.71588 9.24883 6.31096 9.48357 7 9.48357C7.68904 9.48357 8.26846 9.24883 8.73825 8.77934C9.23937 8.27856 9.48993 7.68388 9.48993 6.99531C9.48993 6.30673 9.23937 5.7277 8.73825 5.25822C8.26846 4.75743 7.68904 4.50704 7 4.50704C6.31096 4.50704 5.71588 4.75743 5.21476 5.25822C4.74497 5.7277 4.51007 6.30673 4.51007 6.99531C4.51007 7.68388 4.74497 8.27856 5.21476 8.77934ZM2.02013 2.06573C3.39821 0.688576 5.05817 0 7 0C8.94183 0 10.5861 0.688576 11.9329 2.06573C13.311 3.41158 14 5.05477 14 6.99531C14 7.96557 13.7494 9.07668 13.2483 10.3286C12.7785 11.5806 12.1991 12.7543 11.5101 13.8498C10.821 14.9452 10.132 15.9781 9.44295 16.9484C8.78523 17.8873 8.22148 18.6385 7.75168 19.2019L7 20C6.81208 19.7809 6.56152 19.4992 6.24832 19.1549C5.93512 18.7793 5.37136 18.0595 4.55705 16.9953C3.74273 15.8998 3.02237 14.8513 2.39597 13.8498C1.80089 12.8169 1.2528 11.6588 0.751678 10.3756C0.250559 9.09233 0 7.96557 0 6.99531C0 5.05477 0.673378 3.41158 2.02013 2.06573Z" fill="grey"></path>
                        </svg>
                    </span>
                    <p>Kyiv</p>
                </div>
                <div className="checkout-form__address">
                    <label className="checkout-form__label" htmlFor="street">Street</label>
                    <Field className="checkout-form__input" name="street" component={Input} validate={[ required ]} placeholder="Street.." />
                </div>
                <div className="checkout-form__grid-cell">
                    <label className="checkout-form__label" htmlFor="house">House</label>
                    <Field className="checkout-form__input" name="house" component={Input} validate={[ number, required ]} min="1" type="number" placeholder="House.." />
                </div>
                <div className="checkout-form__grid-cell">
                    <label className="checkout-form__label" htmlFor="apartment">Apartment</label>
                    <Field className="checkout-form__input" name="apartment" component={Input} validate={[ number, required ]} min="1" type="number" placeholder="Apartment.." />
                </div>
                <div className="checkout-form__grid-cell">
                    <label className="checkout-form__label" htmlFor="entrance">Entrance</label>
                    <Field className="checkout-form__input" name="entrance" component={Input} validate={[ number, required ]} min="1" type="number" placeholder="Entrance.." />
                </div>
            </div>
        </div>
    )
}

export default AddressBlock;
