import React from 'react' 
import SubList from './components/SubList';
import Pizza from './assets/Pizza';
import Drink from './assets/Drink';
import Dessert from './assets/Dessert';
import * as sizes from '../../utils/sizes';
import * as types from '../../utils/productTypes';

const LeftBlock = () => {
    const pSizes = [sizes.SMALL, sizes.MEDIUM, sizes.LARGE];
    const dsSizes = [sizes.STANDARD, sizes.DOUBLE];
    const drSizes = [sizes.SMALL, sizes.MEDIUM, sizes.LARGE]

    return (
        <aside className="left-block">
            <ul className="left-block__menu">
                <li className="left-block__menu-item">
                    <div className="left-block__menu-link" to="/pizzas"> 
                        <Pizza />
                        <span>Pizzas</span>
                    </div>
                    <SubList type={types.PIZZAS} sizes={pSizes}/>
                </li>
                <li className="left-block__menu-item">
                    <div className="left-block__menu-link" to="/drinks">
                        <Drink />
                        <span>Drinks</span>
                    </div>
                    <SubList type={types.DRINKS} sizes={drSizes}/>
                </li>
                <li className="left-block__menu-item">
                    <div className="left-block__menu-link" to="/desserts">
                        <Dessert />
                        <span>Desserts</span>
                    </div>
                    <SubList type={types.DESSERTS} sizes={dsSizes}/>
                </li>
            </ul>
        </aside>
    )
};

export default LeftBlock;