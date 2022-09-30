import React from 'react'
import Link from 'next/link'

function SignupForm() {
  return (

        <div className='sm:flex sm:flex-col sm:justify-between'>
              <div className='h-auto md:h-full sm:flex sm:justify-center sm:items-center bg-[#FAFFFD]'>

            <form className=' border-2 rounded-xl  border-black border-opacity-5 px-4 my-16 lg:px-8 h-auto mx-5 lg:m-14  xl:m-20 sm:w-4/5 sm:h-auto' action="post">
              <h1 className='text-3xl pt-14 font-base font-semibold'>Signup</h1>
                <input className='border-gray-300 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-6 block w-full text-[#5B5858]' type="text" placeholder='Phone Number'/>
              <input className='border-gray-300 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-6 block w-full ' type="text" placeholder='Student Name'/>
              <input className='border-gray-300 border-2 rounded bg-[#F9F9F9] h-12 px-3 my-6 block w-full ' type="email" name="email" id="email" placeholder='Student Email' />
              
              <label className='font-semibold mx-2 text-lg lg:text-xl ' htmlFor="buttons">Select Class</label>
              <div className='space-y-2 sm:space-x-4 mx-2  sm:py-4'>
                  <input className='hover:border-[#00C285] border-2 p-2 rounded-3xl font-base text-sm lg:text-lg w-full sm:w-auto' type="button" value="Plus one" />
                  <input className='hover:border-[#00C285] border-2 p-2 rounded-3xl font-base text-sm lg:text-lg w-full sm:w-auto' type="button" value="Plus two" />
              </div>
              <button className='border-0 mx-0 m-4 text-white rounded-xl h-12 bg-[#00C285] font-base w-full' type="submit">Submit</button>
                  <div className='flex pb-4 items-center justify-center'>
                  
                  <div className='h-0 md:border lg:w-6 xl:w-10 border-black bg-black mx-2 '></div>
                  <div className='flex  flex-col'>
                   <p className='font-base text-sm lg:text-base inline'>Already have an Account? 
                   <span className='text-[#00C285] font-base text-center text-sm sm:text-base inline'><Link href={"login"}> Login</Link></span></p>
                  </div>
                   <div className='h-0 md:border lg:w-6 xl:w-10 border-black bg-black mx-2'></div>
                  </div>  
              </form>
              </div> 
               
          </div>
  )
}

export default SignupForm

{/* <div className='flex justify-center md:py-24'>
              <div className='h-screen flex flex-col s justify-center bg-[#FAFFFD]'></div> */}