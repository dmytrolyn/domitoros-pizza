import React, { useEffect } from 'react';
import Slider from './Slider';

const SliderComponent = () => {
    useEffect(() => {
        new Slider();
    }, []);

    return (
        <div className="slider">
            <ul className="slider-list">
                <li><img src="http://pvbk.spb.ru/inc/slider/imgs/no-image.gif" alt="screen"/></li> 
                <li className="slider-item"><img src="https://media.dominos.ua/slider/slide_image_mobile/2020/04/03/-50-wings_mobile_eng.jpg" alt="0"/></li>
                <li className="slider-item"><img src="https://media.dominos.ua/slider/slide_image_mobile/2020/04/06/curry_mobile_eng.jpg" alt="1"/></li>
                <li className="slider-item"><img src="https://media.dominos.ua/slider/slide_image_mobile/2020/04/02/woweekend_mobile_eng.jpg" alt="2"/></li>
                <li className="slider-item"><img src="https://media.dominos.ua/slider/slide_image_mobile/2020/03/17/Pepsi_mobile_1200x580.jpg" alt="3"/></li>
                <li className="slider-item"><img src="https://media.dominos.ua/slider/slide_image_mobile/2020/03/30/-40_slider_1.jpg" alt="4"/></li>
                <li className="slider-item"><img src="https://media.dominos.ua/slider/slide_image_mobile/2020/03/16/dost_mobile.jpg" alt="5"/></li>
            </ul>
            <div className="slider-nav"></div>
        </div>
    )
};

export default SliderComponent;