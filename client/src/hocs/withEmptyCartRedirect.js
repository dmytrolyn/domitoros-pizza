import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getTotalPrice } from '../services/reducers';

const withEmptyCartRedirect = (Component) => {

    let ComponentWithRedirect = (props) => (
        props.total === 0 ? <Redirect to="/" /> : <Component {...props} />
    );

    const mapStateToProps = (state) => ({
        total: getTotalPrice(state)
    })

    return connect(mapStateToProps, null)(ComponentWithRedirect);
}

export default withEmptyCartRedirect;