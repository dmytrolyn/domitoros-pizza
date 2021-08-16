import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withoutAuthRedirect from '../../hocs/withoutAuthRedirect';
import Profile from './Profile';
import { getProfile, getToken } from '../../services/reducers';
import { updateUser } from '../../services/actions';

const ProfileContainer = ({ token, updateUser, ...props}) => {
    const handleUserEdit = (values) => {
        let { old_pass, password, password2, ...rest} = values;
        updateUser({ token, data: rest, change: { old_pass, password, password2 }})
    }

    return (
        <Profile onSubmit={handleUserEdit} {...props} />
    )
}

const mapStateToProps = (state) => ({
    profile: getProfile(state),
    token: getToken(state)
})

export default compose(withoutAuthRedirect, connect(mapStateToProps, { updateUser }))(ProfileContainer);