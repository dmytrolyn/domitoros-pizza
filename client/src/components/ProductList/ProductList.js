import React from 'react';
import ProductContainer from './ProductItem/ProductContainer';

export default class ProductList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.begin = React.createRef();
    }

    componentDidUpdate() {
        if(this.props.scroll && this.begin.current) {
            window.scrollTo(0, this.begin.current.offsetTop - 200);
        }
    }

    componentDidMount() {
        if(this.props.scroll) {
            this.forceUpdate();
        }
    }

    render () {
        return (
            <ul ref={this.begin} className="product-list">
                {this.props.products.map(x => {
                    return <li key={x.name} className="product-list__item">
                        <ProductContainer item={x} size={this.props.size} />
                    </li>
                })}
            </ul>
        )
    } 
}