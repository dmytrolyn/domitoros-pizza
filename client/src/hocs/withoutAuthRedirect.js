import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getLogin } from '../services/reducers';

const withoutAuthRedirect = (Component) => {

    let ComponentWithRedirect = (props) => (
        props.login === null ? <Redirect to="/" /> : <Component {...props} />
    );

    const mapStateToProps = (state) => ({
        login: getLogin(state)
    })

    return connect(mapStateToProps, null)(ComponentWithRedirect);
}

export default withoutAuthRedirect;