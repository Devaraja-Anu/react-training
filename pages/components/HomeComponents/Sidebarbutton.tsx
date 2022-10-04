import React from "react";

type SidebarProps={
    label:string,
}

const SideButton = (props:SidebarProps) => {
    return (
    <div className="flex felx-col justify-center">
        <button className="w-full h-fit py-5 pl-5 sm:ml-5 md:pl-10 pr-10 sm:w-full font-base text-2xl lg:text-3xl xl:text-4xl mt-6 lg:mt-10 lg:ml-4 sm:hover:rounded-l-full hover:bg-white text-[#FFFFFF] hover:text-[#00C285]">
            
            <h2>{props.label}</h2>
        </button>
    </div>
    );
}

export default SideButton