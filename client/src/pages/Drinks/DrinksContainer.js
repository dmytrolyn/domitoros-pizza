import React from 'react';
import { getDrinksFromServer } from '../../services/actions';
import { connect } from 'react-redux';
import { getDrinks } from '../../services/reducers';
import * as sizes from '../../utils/sizes';
import Drinks from './Drinks';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import withPageLoading from '../../hocs/withPageLoading';
import withSideRequest from '../../hocs/withSideRequest';

const DrinksContainer = ({ location, data }) => {
    return (
        <Drinks drinks={data} size={(location.state && location.state.size) || sizes.SMALL} />
    )
}

const mapStateToProps = (state) => ({
    data: getDrinks(state),
})

export default compose(withRouter, connect(mapStateToProps, { getData: getDrinksFromServer }), withSideRequest, withPageLoading)(DrinksContainer);