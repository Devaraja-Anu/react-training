import React from 'react'
import OtpInput from 'react-otp-input'
import { useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, Controller,SubmitHandler  } from "react-hook-form";
import axiosInstance from '../../../Axios/AxiosInstance'
import {useRouter} from 'next/router'
import {useMutation, useQuery } from 'react-query';
import useOtpData from 'queries/OtpQuery';


type OtpProps={
  Otp:string,
}

const formdata = {
  otp:8352,
  client_id:6
}



function CheckOTP() {
  interface OtpVaules{
    otp:string
  }

  const router = useRouter()

  const{mutate,isLoading,isError,error} = useOtpData()


  //const [Loading,isLoading] = useState(false)
  //const[Error,setError] = useState(null)
  


  const { handleSubmit, control, reset } = useForm<OtpVaules>();
    const [otp,setOtp] =useState('');
    const notify = () => toast(`OTP ${otp} Verified`);

    const onSubmit: SubmitHandler<OtpVaules> = async(data) => {

      const formdata = {
        otp:data.otp,
        client_id:6
      }
      

      mutate(formdata,{
          onSuccess(data){
            const token =data.data.token.access_token
            localStorage.setItem("token",token)
            const email = data.data.user.email
            email?router.push('/Home'):router.push('/Signup');
          }
      })

      // try{
      //   isLoading(true)
      // const response = await axiosInstance.post(`auth/verify-otp/${userId}`,formdata)
      // const token =response.data.token.access_token
      // localStorage.setItem("token",token)
      // const email = response.data.user.email
      // email?router.push('/Home'):router.push('/Signup');

      // //'/Home' '/Signup'

      // isLoading(false)
      // }
      // catch(err:any){
      //   isLoading(false)
      //   console.log(err);
      //   setError(err.response.data.error)
      //   console.log(Error)
      // }


    }

    const resendOtp = async() => {

      const mobile =  localStorage.getItem("mobile")
      console.log(mobile)

        const Logindata = {
          mobile:mobile,
          client_id:6,
          device_id:'3d0cd218875efb07h',
          device_type:'ios',
          firebase_token:'vvvvvvv'
          }
      
      try{  
         await axiosInstance.post('/auth/login',Logindata)
      }
      catch(err:any){
        console.log(err.response.data.error)
      }


    }

    
  return (
  <div className='sm:flex sm:flex-col sm:justify-between'>
    <div className='h-auto md:h-full sm:flex sm:justify-center sm:items-center bg-[#FAFFFD]'>
        <div className='  border-2 rounded-xl border-black border-opacity-5 px-4 my-16 lg:px-8 mx-5 md:w-auto lg:m-14  xl:m-20 sm:w-3/5 md:h-auto' >
              
              <div>
                <h1 className='font-base font-semibold text-2xl sm:text-4xl pb-8 pt-6 md:pt-14'>Verify OTP</h1>
                <p className='font-osans text-sm lg:text-base'>Enter OTP sent to the</p>
                <p className='font-osans pb-4 text-sm lg:text-base'>Mobile number <span className='font-bold'>+91 91828202029</span></p>

                <form onSubmit={handleSubmit(onSubmit)}>
                <div className='pr-5'>
                  <Controller
                    name = "otp"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <OtpInput {...field} inputStyle='otpbox' numInputs={4} />}
                  />
              
                <p className='font-osans font-bold py-4'>00:45</p>
                <button className='font-base border-2 bg-[#00C285] text-white w-full h-14 rounded-lg' disabled={isLoading}
                onClick={notify}  type='submit' >{`${isLoading?`...Loading`:`Login`}`}</button>
              
              </div>
              </form>
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
                 
                <div className='flex flex-col items-center justify-center'>
                <p className='text-red-500 py-3'>{isError&&`Error: ${error}`}</p>
                <button onClick={resendOtp} className='font-base font-semibold py-5'>Resent OTP</button>
                
                </div>
              </div>

              


              
        </div>
    </div>
    </div>  
  )
}

export default CheckOTP
