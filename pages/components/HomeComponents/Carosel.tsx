import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import OrangePlate from '../../../public/OrangePlate.png'
import OlivePlate from '../../../public/OlivePlate.png'
import RedPlate from '../../../public/RedPlate.png'


function Carosel() {
  return (
    <Carousel autoPlay={true} emulateTouch={true} interval={3000} infiniteLoop={true} stopOnHover={true} showStatus={false} showArrows={false} >
                <div>
                    <Image src={OlivePlate}/>
                </div>
                <div>
                    <Image src={RedPlate}/>
                </div>
                <div>
                    <Image src={OrangePlate}/>
                </div>
    </Carousel>
  )
}

export default Carosel