import React from 'react';
import { getPizzasFromServer } from '../../services/actions';
import { connect } from 'react-redux';
import { getPizzas } from '../../services/reducers';
import { identifyItems } from '../../utils/identifier';
import { capitalizeWord } from '../../utils/stringManager';
import * as categories from '../../utils/categories';
import * as sizes from '../../utils/sizes';
import Pizzas from './Pizzas';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import withPageLoading from '../../hocs/withPageLoading';
import withSideRequest from '../../hocs/withSideRequest';

const PizzasContainer = ({ location, data }) => {
    return (
        <Pizzas scroll={location.state && location.state.category} 
            classic={identifyItems(capitalizeWord(categories.CLASSIC), data)}
            premium={identifyItems(capitalizeWord(categories.PREMIUM), data)}
            legendary={identifyItems(capitalizeWord(categories.LEGENDARY), data)}
            branded={identifyItems(capitalizeWord(categories.BRANDED), data)}
            size={(location.state && location.state.size) || sizes.SMALL}/>
    )
}

const mapStateToProps = (state) => ({
    data: getPizzas(state),
})

export default compose(withRouter, connect(mapStateToProps, { getData: getPizzasFromServer }), withSideRequest, withPageLoading)(PizzasContainer);