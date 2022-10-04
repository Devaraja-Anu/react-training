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