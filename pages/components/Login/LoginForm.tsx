import React from 'react'
import { useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import axios from 'axios' 
import axiosInstance from '../../../Axios/AxiosInstance'
import { string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useRouter} from 'next/router'
import {useMutation, useQuery } from 'react-query';
import useAddLoginData from 'queries/LoginQuery'



type Inputs = {
  mobile:string,
  value:null,
  userId:string,
}


const schemea = {
  mobile:string()
        .typeError("Please enter a valid Phone Number")
        .required("Please Enter Valid Phone Number")
        .max(10, "cannot be over 10 chars")
        .min(7, "cannot be less than 7 chars"),
}


function LoginForm() {

  const router = useRouter()

   const {mutate,isLoading,isError, error} = useAddLoginData()

  const {register,handleSubmit,watch,formState:{errors}}= useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs>= async data => {

    const Logindata = {
      mobile:data.mobile,
      client_id:6,
      device_id:'3d0cd218875efb07h',
      device_type:'ios',
      firebase_token:'vvvvvvv'
      }

      mutate(Logindata,{
        onSuccess(data:any) {
          const UserId = data.data.user_id
          localStorage.setItem("UserId",UserId );
          localStorage.setItem("mobile",Logindata.mobile)
          router.push('/Otp')
        },
        onError(error:any) {
          console.log(error.response.data.message)
         
        },
      })
   }
         

  return (
  <div className='sm:flex sm:flex-col sm:justify-between'>
    <div className='h-auto md:h-full sm:flex sm:justify-center sm:items-center bg-[#FAFFFD]'>
        <div className='border-2 rounded-xl border-black border-opacity-5 px-4 my-16 lg:px-8 m-14  xl:m-20 sm:w-5/6 md:h-auto '>
                
                <div>
                    <h1 className='text-3xl pb-10 pt-8 font-base block text-center font-semibold '>Login/Lookup</h1>  
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('mobile')} id="mobile" placeholder='Phone number' required  className='block border-2  border-[#B9B4B4] rounded-md  bg-[#F9F9F9] text-[#B9B4B4] h-14 p-5 mb-8 w-full '/>
                    <p className='font-base text-red-500 pb-5 pt-0'>{errors?.mobile?.message}</p>

                    <button className='block border-0  font-semibold rounded-xl w-full justify-center  h-14 text-white font-base bg-[#5500C2] mb-8' type="submit" disabled={isLoading}>{`${isLoading?`...Loading`:`Login`}`}</button>
                     <p className='text-red-500 font-base mb-4 text-center'>{isError&&`Error: ${error}`}</p>
                    </form>
                
                </div>
            </div> 
    </div>
  </div>              
  )
}

export default LoginForm


        // try{
        //   setLoading(true)
        //   const response = await axiosInstance.post('/auth/login',Logindata)
        //   const UserId = response.data.user_id
        //   console.log(UserId);
        //   localStorage.setItem("UserId",UserId );
        //   localStorage.setItem("mobile",data.mobile)
        //   router.push('/Otp')

        //   setLoading(false)

        // } catch(error:any)  {
         
        //   setError(error.response.data.message)
        //   setLoading(false)
          
        // }  
        
        