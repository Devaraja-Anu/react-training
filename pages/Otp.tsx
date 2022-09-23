import Image from 'next/image'
import scienceGirl from '../public/casual-life-3d-girl-studying-science-sitting-in-lotus-pose 1.png'
import CheckOTP from './components/CheckOTP'

const Otp = ()  => {
    return(
        <div>
            <div className='grid grid-row-2 md:grid-cols-2 md:h-screen ' >
                <div className='bg-[#DA85A0] pt-28  px-10' >
                    <Image src={scienceGirl}/>
                </div>
                {/* Left Side */}
                <div className='sm:flex sm:flex-col sm:justify-between'>
                    <CheckOTP/>
                </div>
            </div>
        </div>
    )
}

export default Otp