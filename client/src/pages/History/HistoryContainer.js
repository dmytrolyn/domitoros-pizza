import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getToken, getHistory } from '../../services/reducers';
import { getUser } from '../../services/actions';
import withoutAuthRedirect from '../../hocs/withoutAuthRedirect';
import withPageLoading from '../../hocs/withPageLoading';
import withAuthorizedSideRequest from '../../hocs/withAuthorizedSideRequest';
import History from './History';

const HistoryContainer = ({ history = [] }) => {
    return (
        <History history={history} />
    )
}

const mapStateToProps = (state) => ({
    history: getHistory(state),
    token: getToken(state),
})

export default compose(withoutAuthRedirect, connect(mapStateToProps, { getData: getUser }), withAuthorizedSideRequest, withPageLoading)(HistoryContainer);