import React from 'react';
import { connect } from 'react-redux';
import { getTotalPrice, getTotalCount } from '../../services/reducers';

import Cart from './Cart';

const CartContainer = ({ total, count }) => {
    return <Cart total={total} count={count}/>
}

const mapStateToProps = (state) => ({
    total: getTotalPrice(state),
    count: getTotalCount(state)
})

export default connect(
    mapStateToProps,
)(CartContainer)