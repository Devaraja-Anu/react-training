import React from 'react'
import Image from 'next/image';


type SubjectButtons={
    topic:string,
    color:string,
    image:any,
}

const SubjectButtons= (props:SubjectButtons) => {

    return(
    <div className=' w-fit flex flex-col justify-center items-center'>
        <button className={`w-28 h-28 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 p-2  object-contain rounded-3xl hover:scale-110 ${props.color}`}>
            <Image src={props.image} alt='buttons with representative Images on them'/>
        </button>
        <h2 className='text-center font-base font-semibold text-2xl py-2'>{props.topic}</h2>
        <p className='text-center font-base text-[#858585]'>14 Chapters</p>
    </div>   
    );
}

export default SubjectButtons