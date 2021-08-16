import React from 'react';
import { getDessertsFromServer } from '../../services/actions';
import { connect } from 'react-redux';
import { getDesserts } from '../../services/reducers';
import * as sizes from '../../utils/sizes';
import Desserts from './Desserts';
import { withRouter } from 'react-router';
import withPageLoading from '../../hocs/withPageLoading';
import withSideRequest from '../../hocs/withSideRequest';
import { compose } from 'redux';

const DessertsContainer = ({ location, data }) => {
    return (
        <Desserts desserts={data} size={(location.state && location.state.size) || sizes.STANDARD} />
    )
}

const mapStateToProps = (state) => ({
    data: getDesserts(state),
})

export default compose(withRouter, connect(mapStateToProps, { getData: getDessertsFromServer }), withSideRequest, withPageLoading)(DessertsContainer);