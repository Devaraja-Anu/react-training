import React from 'react'
import OtpInput from 'react-otp-input'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CheckOTP() {
    const [otp,setOtp] =useState('');
    const notify = () => toast(`OTP ${otp} Verified`);

   
  return (
  <div className='sm:flex sm:flex-col sm:justify-between'>
    <div className='h-auto md:h-full sm:flex sm:justify-center sm:items-center bg-[#FAFFFD]'>
        <div className='  border-2 rounded-xl border-black border-opacity-5 px-4 my-16 lg:px-8 mx-5 md:w-auto lg:m-14  xl:m-20 sm:w-3/5 md:h-auto' >
              
              <div>
                <h1 className='font-base font-semibold text-2xl sm:text-4xl pb-8 pt-6 md:pt-14'>Verify OTP</h1>
                <p className='font-osans text-sm lg:text-base'>Enter OTP sent to the</p>
                <p className='font-osans pb-4 text-sm lg:text-base'>Mobile number <span className='font-bold'>+91 91828202029</span></p>
                {/* <input type="text" name="otp1" id="opt1" className="otpbox" /><input type="text" name="otp2" id="otp2" className="otpbox" /><input type="text" name="otp3" id="otp3" className="otpbox" /><input type="text" name="otp4" id="otp4" className="otpbox" /> */}
                {/* <OtpInput value={otp} onChange={handle} numInputs={4} inputStyle='otpbox' separator={<span>-</span>}/> */}
                
                <div className='pr-5'>
                <OtpInput value={otp}
                   inputStyle='otpbox'
                onChange={(otp:string) => setOtp(otp)} numInputs={4} />
                </div>
                
                <p className='font-osans font-bold py-4'>00:45</p>
                <button className='font-base border-2 bg-[#00C285] text-white w-full h-14 rounded-lg'
                onClick={notify}>login</button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  />
                <div className='flex justify-center'>
                <button className='font-base font-semibold py-8'>Resent OTP</button>
                </div>
              </div>

              


              
        </div>
    </div>
    </div>  
  )
}

export default CheckOTP
