import React from 'react';
import { getPizzasFromServer } from '../../services/actions';
import { connect } from 'react-redux';
import { getPizzas } from '../../services/reducers';
import * as sizes from '../../utils/sizes';
import Index from './Index';
import withPageLoading from '../../hocs/withPageLoading';
import withSideRequest from '../../hocs/withSideRequest';
import { compose } from 'redux';

const IndexContainer = ({ data }) => {
    return (
        <Index products={data} size={sizes.SMALL} />
    )
}

const mapStateToProps = (state) => ({
    data: getPizzas(state),
})

export default compose(connect(mapStateToProps, { getData: getPizzasFromServer }), withSideRequest, withPageLoading)(IndexContainer);