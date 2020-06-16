import React, { Component } from 'react';
import Menuimage1 from './menu1.jpg';
import Menuimage2 from './menu2.jpg';
import Carousel from 'react-grid-carousel';

class Menu extends Component {
    render () {
        
        return (
            <div className='center mw8 mb4'>
                <h1 className="f2-ns w-100 pb3 f6 fw6 ttu tracked mb2 tc">Our Menu</h1>
                <div className='o-80'>
                <Carousel cols={1} rows={1} gap={10} loop={true} autoplay={2000} showDots dotColorActive={'white'} dotColorInactive={'black'} mobileBreakpoint={680}>
                    <Carousel.Item>
                        <img width="100%" src={Menuimage1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={Menuimage2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={Menuimage1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={Menuimage1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src={Menuimage1} />
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        );
    }
}

export default Menu;
