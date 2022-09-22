import React from 'react'

function CheckOTP() {
  return (
    <div className='h-screen flex justify-center items-center bg-[#FAFFFD]'>
        <div className=' border-2 rounded-xl border-black border-opacity-5 px-4 my-8 md:my-16 lg:px-8  lg:m-14  xl:m-20 w-3/5 h-3/5 ' >
              
              <div>
                <h1 className='font-base font-semibold text-4xl pb-8 pt-14'>Verify OTP</h1>
                <p className='font-osans text-sm lg:text-base'>Enter OTP sent to the</p>
                <p className='font-osans pb-4 text-sm lg:text-base'>Mobile number <span className='font-bold'>+91 91828202029</span></p>
                <input type="text" name="otp1" id="opt1" className="otpbox" /><input type="text" name="otp2" id="otp2" className="otpbox" /><input type="text" name="otp3" id="otp3" className="otpbox" /><input type="text" name="otp4" id="otp4" className="otpbox" />
                <p className='font-osans font-bold py-4'>00:45</p>
                <button className='font-base border-2 bg-[#00C285] text-white w-full h-14 rounded-lg'>login</button>
                <div className='flex justify-center'>
                <button className='font-base font-semibold py-8'>Resent OTP</button>
                </div>
              </div>


              
        </div>
    </div>
  )
}

export default CheckOTP