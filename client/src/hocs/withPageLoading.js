import React from 'react';
import { connect } from 'react-redux';
import { getPageLoadingStatus, getError } from '../services/reducers';
import Loading from '../components/Loading/Loading';

const withPageLoading = (Component) => {
    let PageWithLoading = ({ isLoading, error, ...props}) => {
        return !error ? isLoading ? <Loading />
        : <Component {...props} />
        : <div className="page-error">{error}</div>
    }

    const mapStateToProps = (state) => ({
        isLoading: getPageLoadingStatus(state),
        error: getError(state)
    })

    return connect(mapStateToProps, null)(PageWithLoading);
}

export default withPageLoading;