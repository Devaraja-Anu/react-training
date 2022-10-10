import React, { useState } from "react";
import Link from "next/link";
import { string, number, object } from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from '../../../Axios/AxiosInstance'
import Router, {useRouter} from 'next/router'


type Inputs = {
  PhoneNumber: string;
  StudentName: string;
  StudentEmail: string;
  Std:boolean,
};

const schemea = object({
  PhoneNumber: string()
    .typeError("Please enter a valid Phone Number")
    .required("Please Enter Valid Phone Number")
    .max(10, "cannot be over 10 chars")
    .min(7, "cannot be less than 7 chars"),
  StudentName: string().required("Please your Name"),
  StudentEmail: string()
    .email("Must be a valid Email Address")
    .required("Email is required"),
});

const SignupData = {
  
}

function SignupForm() {

  const router = useRouter()
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({resolver:yupResolver(schemea)});

  const [error,setError]=useState('')
  const [loading,setLoading] =useState(false)



  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    try{
      setLoading(true)
       await axiosInstance.post('/users')
       router.push('/Home')
       setLoading(false)

    }
    catch(err:any){
      setLoading(false)
      setError(err.response.data.message)
    }
  };


  return (
    <div className="sm:flex sm:flex-col sm:justify-between">
      <div className="h-auto md:h-full mt-20 sm:flex sm:justify-center sm:items-center bg-[#FAFFFD]">
        <form
          className=" border-2 rounded-xl  border-black border-opacity-5 px-4 myt-16 lg:px-8 h-auto mx-5 lg:m-14  xl:m-20 sm:w-4/5 sm:h-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-3xl pt-14 font-base font-semibold">Signup</h1>
          <input
            {...register("PhoneNumber")}
            className="border-gray-300 border-2 rounded bg-[#F9F9F9] h-12 px-3 mt-6 block w-full text-[#5B5858]"
            placeholder="Phone Number"
          />
          <p className="font-base text-red-500 pt-3 text-xs  md:text-base ">
            {errors?.PhoneNumber?.message}
          </p>

          <input
            {...register("StudentName")}
            className="border-gray-300 border-2 rounded bg-[#F9F9F9] h-12 px-3 mt-6 block w-full "
            type="text"
            placeholder="Student Name"
          />
          <p className="font-base text-red-500 pt-3 text-xs md:text-base">
            {errors?.StudentName?.message}
          </p>

          <input
            {...register("StudentEmail")}
            className="border-gray-300 border-2 rounded bg-[#F9F9F9] h-12 px-3 mt-6 block w-full"
            type="email"
            // name="email"
            // id="email"
            placeholder="Student Email"
          />
          <p className="font-base text-red-500 my-2 text-xs  md:text-base">
            {errors?.StudentEmail?.message}
          </p>

          <label
            className="font-semibold mx-2 text-lg lg:text-xl "
            htmlFor="buttons"
          >
            Select Class
          </label>


          <div className="space-y-2 sm:space-x-4 mx-2  sm:py-4">
            <ul className="grid gap-3  w-full md:grid-cols-2 lg:grid-cols-3 my-4 sm:my-0">
              <li>
                <input
                  type="radio"
                  id="hosting-1"
                  {...register("Std")}
                  className="hidden peer"
                  value='Plus one'
                />
                <label
                  htmlFor="hosting-1"
                  className="flex justify-center items-center w-full text-gray-500 bg-white  focus:border-[#00C285] border-2 p-2 rounded-3xl cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#00C285] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block ">
                    <div className="font-base text-sm lg:text-lg ">
                      Plus One
                    </div>
                  </div>
                </label>
              </li>

              <li>
                <input
                  type="radio"
                  id="hosting-2"
                  {...register("Std")}
                  className="hidden peer"
                  value='Plus two'                  
                />
                <label
                  htmlFor="hosting-2"
                  className="flex justify-center items-center w-full text-gray-500 bg-white  focus:border-[#00C285] border-2 p-2 rounded-3xl cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-[#00C285] hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="block ">
                    <div className="font-base text-sm lg:text-lg ">
                      Plus Two
                    </div>
                  </div>
                </label>
              </li>
            </ul>
          </div> 



          <button
            className="border-0 mx-0 m-4 text-white rounded-xl h-12 bg-[#00C285] font-base w-full"
            type="submit" disabled={loading}
          >
            {`${loading?`...Loading`:`Submit`}`}
          </button>
          
          <p className='text-red-500 py-3'>{error&&`Error: ${error}`}</p>

          <div className="flex pb-4 items-center justify-center">
            <div className="h-0 md:border lg:w-6 xl:w-10 border-black bg-black mx-2 "></div>
            <div className="flex  flex-col">
              <p className="font-base text-sm lg:text-base inline">
                Already have an Account?
                <span className="text-[#00C285] font-base text-center text-sm sm:text-base inline">
                  <Link href={"login"}> Login</Link>
                </span>
              </p>
            </div>
            <div className="h-0 md:border lg:w-6 xl:w-10 border-black bg-black mx-2"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;

{
  /* <div className='flex justify-center md:py-24'>
              <div className='h-screen flex flex-col s justify-center bg-[#FAFFFD]'></div> */
}
