import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCheckoutItems, getToken } from '../../services/reducers';
import { addItem, subItem, checkout } from '../../services/actions';
import withEmptyCartRedirect from '../../hocs/withEmptyCartRedirect';

import Checkout from './Checkout';

const CheckoutContainer = (props) => {
    const sendOrder = (values) => {
        let { items, total, checkout, token } = props;
        let { street, house, entrance, apartment, email, name, phone } = values;
        let address = `${street} street, ${house}/${apartment}, entr. ${entrance}`;
        checkout(token, { address, total, items, email, name, phone });
    }

    return (
        <Checkout {...props} sendOrder={sendOrder} />
    )
}

const mapStateToProps = (state) => ({
    items: getCheckoutItems(state),
    token: getToken(state)
})

export default compose(withEmptyCartRedirect, connect(
    mapStateToProps,
    { addItem, subItem, checkout }
))(CheckoutContainer);