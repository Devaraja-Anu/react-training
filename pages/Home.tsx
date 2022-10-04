import Image from "next/image"

import AtomImage from '../public/atomIcon.png'
import Beaker from '../public/BeakerIcon.png'
import PlantBeaker from '../public/PlantBeaker.png'
import MathImage from '../public/MathIcon.png'
import Logo from '../public/Logo.png'
import Search from '../public/Search.png'
import Bell from '../public/bell.png'
import Pfp from '../public/pfp.png'
import Plates from "./components/HomeComponents/CaroselPlate"
import ReadDude from '../public/ReadDude.svg'
import ReadWoman from '../public/ReadWoman.svg'
import StandRead from '../public/StandRead.svg'

import LiveCourse from './components/HomeComponents/LiveCourse'
import SubjectButtons from "./components/HomeComponents/SubjectButtons"
import SideButton from "./components/HomeComponents/Sidebarbutton"

const Home = ()=> {

const Blue = 'bg-gradient-to-t from-[#444E9C] to-[#7F8CF1]';
const Red =  'bg-gradient-to-t from-[#A73F3A] to-[#F85750]';
const Yellow =  'bg-gradient-to-t from-[#9C6B1E] to-[#F39C12]';
const Purple = 'bg-gradient-to-t from-[#4A3AA7] to-[#9459D7]'; 



return(
    <div className="sm:grid sm:grid-cols-10 grid-rows-none h-screen "> {/*The grid */}
        
        <div className="col-start-1 col-end-3 border-2 bg-[#00C285] ">{/*Sidebar (left Side) */}
            <div className="bg-[#00C285] pb-10">
            <div className="flex justify-center pt-14 object-contain" >
            <Image className="border-2 border-red-500" src={Logo} alt='Company Logo'/>
            </div>

            <SideButton label="Home"/>
            <SideButton label="My Course"/>
            <SideButton label="Mock Test"/>
            <SideButton label="Practice"/>
            </div>
        </div>



        {/*Right Side */}

        <div className=" col-span-8">  

                {/*Top Nav bar */}
            <div className="drop-shadow h-28 border-b-2 flex flex-col justify-center items-end "> {/*Top Nav */}
                
                <div>
                    
                    <button className="pr-8">
                    <Image src={Search} alt="Search image"/>
                    </button>
                
                    <button className="pr-8">
                    <Image src={Bell} alt="Notification Image"/>
                    </button>
                    
                    <button className="pr-8">
                    <Image src={Pfp} alt='Profile Pic'/>
                    </button>
                </div>
            </div>

            {/*Carosel */}


            <div>
             <Plates background="bg-[#F24C5C]" heading="Personalized Attention" bottomtext="Dedicated Teachers" image={StandRead} /> 
            </div>

            

            {/* Subject Buttons */}
            <div className="px-10 md:pl-20">

                <h1 className="pb-10 pt-20 font-base font-semibold text-4xl text-center sm:text-start">
                    <span className="text-[#00C285]">Learn</span> with Video Classes</h1>
                
                <div> {/*Button Grid for subjects*/}
                    <div className=" grid grid-cols-2 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 md:gap-x-5 gap-y-6 items-center md:pr-20 lg:pr-32 xl:pr-40">
                        
                        <SubjectButtons topic="Physics" color={Red} image={AtomImage} />
                        <SubjectButtons topic="Chemisty" color={Purple} image={Beaker} />
                        <SubjectButtons topic="Maths" color={Blue} image={MathImage} />
                        <SubjectButtons topic="Biology" color={Yellow} image={PlantBeaker} />
                        <SubjectButtons topic="Physics" color={Red} image={AtomImage} />
                        <SubjectButtons topic="Chemisty" color={Purple} image={Beaker} />
                        <SubjectButtons topic="Maths" color={Blue} image={MathImage} />
                        <SubjectButtons topic="Biology" color={Yellow} image={PlantBeaker} />
                        <SubjectButtons topic="Physics" color={Red} image={AtomImage} />
                   

                    </div>
                </div>

            </div>
            
            {/* Live Classes */}

            <div className="pl-20">
                <h1 className="pb-10 pt-20 font-base font-semibold text-4xl">
                    <span className="text-[#00C285]">Learn</span> with Live Classes</h1>

                <div className="lg:flex justify-start gap-10">
                    <LiveCourse/><LiveCourse/>
                </div>                 
            </div>



        </div>                
    </div>
    );
}

export default Home

//flex-col xl:flex-row items-center xl:items-start