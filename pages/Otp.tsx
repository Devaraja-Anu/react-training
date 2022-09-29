import Image from 'next/image'
import scienceGirl from '../public/casual-life-3d-girl-studying-science-sitting-in-lotus-pose 1.png'
import CheckOTP from './components/OTP/CheckOTP'
import OTPright from './components/OTP/OTPright'

const Otp = ()  => {
    return(
        <div>
            <div className='grid grid-row-2 md:grid-cols-2 h-screen ' >
                <OTPright/>
                {/* Left Side */}
                <CheckOTP/>
            </div>
        </div>
    )
}

export default Otp