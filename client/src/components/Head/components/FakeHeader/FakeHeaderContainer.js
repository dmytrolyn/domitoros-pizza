import React from 'react';
import FakeHeader from './FakeHeader';
import { connect } from 'react-redux';
import { openAuthModal, logout } from '../../../../services/actions';
import { getLogin } from '../../../../services/reducers';

const FakeHeaderContainer = (props) => {
    return (
        <FakeHeader {...props} />
    )
};

const mapStateToProps = (state) => ({
    login: getLogin(state)
})

export default connect(mapStateToProps, { openAuthModal, logout })(FakeHeaderContainer);