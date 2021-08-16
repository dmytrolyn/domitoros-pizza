export const required = (value) => 
    value ? undefined : "Field is required";

export const maxLength = (maxLength) => (value) => 
    (value && value.length > maxLength) ? `Max length is ${maxLength} characters`: undefined;

export const minLength = (minLength) => (value) =>
    (value && value.length < minLength) ? `Min length is ${minLength} characters`: undefined;

export const number = value => 
    value && isNaN(Number(value)) ? 'Must be a number': undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;

export const phone = value =>
    value && !/^[0-9\-+]{9,15}$/.test(value) ? 
    'Invalid phone number' : undefined;

export const password = value => 
    value && !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value) ?
    'Password is not safe' : undefined;

export const compareNewPassword = (value, all) => value === all.password2 ? undefined : "Passwords are not equal";

export const compareRepeatPassword = (value, all) => value === all.password ? undefined : "Passwords are not equal";