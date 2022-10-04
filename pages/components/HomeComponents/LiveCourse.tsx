import React from "react"
import Image from "next/image"
import GirlinSuit from '../../../public/GirlinSuit.png'
import star from '../../../public/icons8-star-100 (1) 1.png'

const CourseCard = () => {
return(
    <div className=" lg:w-6/12 h-fit mb-16 sm:mr-10">       {/*Top Half */}
        <div className="bg-[#3E9962] sm:grid grid-cols-2 relative rounded-t-xl">
            <div className="self-end hidden sm:inline">
                <Image className="object-contain" src={GirlinSuit} alt='Woman in suit with folded arms smiling'/>
            </div>

            <div className="flex flex-col">
                    <div className="bg-[#C13232] rounded-lg self-end flex flex-col justify-center p-5 m-5 font-base w-fit h-10 text-white font-semibold">• Live</div>
                    
                    <div className="bg-[#FB773D] rounded-l-lg text-2xl px-6 py-3 my-4 font-semibold text-white">
                        Aleena Sara
                    </div>

                    <div className="border-b-2 border-[#FB773D] w-fit">    
                        <p className="font-semibold text-white text-lg">B-tech-BITS Pailani</p>
                    </div>
                        <p className="font-base text-xl font-semibold text-white sm:pb-6">Chemistry Expert</p>
                    </div>
                <div className="sm:absolute col-span-full bg-[#1A181D] opacity-60 z-10 w-full self-end">
                    <div className="">
                        <p className="text-white font-base mt-3 sm:mt-0">Start at 10:30pm-432 attending </p>
                </div>
            </div>
        </div>

        <div className="bg-[#FAF5FE] h-fit w-auto rounded-b-xl"> {/*Bottom Half*/}
            <div className="border-b-2 sm:grid grid-cols-3 mx-4">
                <div className="col-span-2">
                    <p className="text-[#626262] sm:pt-2">Chemistry</p>
                    <p className="font-semibold font-base pt-2">Beginner&#39;s Guide: Biomolecules</p>
                    <p className="text-[#626262] py-2">37 min by Vaibhav Uppal</p>
                </div>

                <div className="justify-self-center ml-5 self-center my-3 sm:my-0">
                    <button className="bg-[#FB773D] rounded-2xl text-white font-base px-6 py-2 font-semibold w-11/12 sm:w-auto">Join Us</button>
                </div>
            </div>

            <div className="py-4 px-2">
                <p><Image src={star} alt='Star'/> Master Class</p>
            </div>
        </div>
</div>
);
}

export default CourseCard;