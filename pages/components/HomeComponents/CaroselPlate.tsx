import React from "react";
import Image from "next/image";
import ReadDude from '../../../public/ReadDude.svg'

type PlateProps={
    heading:string,
    bottomtext:string,
    background:string,
    image:any
}

const Plates = (props:PlateProps) => {
return(
    <div className="mt-20">
        <div className={`${props.background} mx-10 md:mx-20 rounded-3xl m-20"`}>
            <div className="flex py-4">
                <div className="sm:flex flex-col justify-center items-center pl-10 md:pl-20">
                    <h1 className="font-base text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold">{props.heading}</h1>
                    <p className="font-base text-white pt-2 sm:pt-8 xl:pt-10 md:text-xl  lg:text-3xl">{props.bottomtext}</p>
                </div>

                <div className="p-10 hidden sm:inline-flex">
                <Image className=" sm:object-contain" src={props.image} alt='Corpo art'/>
                </div>
            </div>
        </div>
    </div>
);

}

export default Plates

