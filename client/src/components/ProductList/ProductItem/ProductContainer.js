import React from 'react'
import { connect } from 'react-redux'
import { addItem, subItem } from '../../../services/actions';
import { getQuantities } from '../../../services/reducers';
import ProductItem from './ProductItem';

const ProductContainer = ({ item, size, counts, addItem, subItem }) => (
  <ProductItem item={item}
    size={size} 
    counts={counts}
    onAddClicked={(currSize) => addItem(item, currSize)} 
    onRemoveClicked={(currSize) => subItem(item._id, currSize)} />  
)

const mapStateToProps = (state, ownProps) => ({
    counts: getQuantities(state, ownProps.item._id)
})

export default connect(
  mapStateToProps,
  { addItem, subItem }
)(ProductContainer)
