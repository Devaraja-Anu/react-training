
import Image from "next/image";
import OrangePlate from '../../../public/OrangePlate.png'
import RedPlate from '../../../public/RedPlate.png'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel >
                <div>
                    <Image src='../../../public/OrangePlate.png'/>
                </div>
                <div>
                    <Image src='../../../public/RedPlate.png'/>
                </div>

            </Carousel>
        );
    }
};

export default DemoCarousel