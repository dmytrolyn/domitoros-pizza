import React from 'react';
import cn from 'classnames';
import ReactSelect from 'react-select';
import ReactDatePicker from 'react-datepicker';

const FormControl = ({ element, className, input, meta, err, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            {React.createElement(element, {...input, ...props, ...props.children, className: cn(className, (hasError || err) && (className + "_error"))})}
            {hasError && <small className={cn(className + "_error-msg")}>{meta.error}</small>}
        </>
    )
}

const VendorFormControl = ({ Component, input, ...props }) => {
    return (
        <Component {...props} {...input} />
    )
}

export const Input = (props) => (
    <FormControl {...props} element="input" />
)

export const Textarea = (props) => (
    <FormControl {...props} element="textarea" rows="10" />
)

export const Select = (props) => (
    <VendorFormControl {...props} Component={ReactSelect} />
)

export const DatePicker = (props) => (
    <VendorFormControl {...props} Component={ReactDatePicker} />
)