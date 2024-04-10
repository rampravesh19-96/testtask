import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={carousel1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={carousel2}/>
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel