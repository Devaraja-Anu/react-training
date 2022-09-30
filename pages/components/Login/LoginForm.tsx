import React from 'react'

// border-red-500 border-2

function LoginForm() {
  return (
  <div className='sm:flex sm:flex-col sm:justify-between'>
    <div className='h-auto md:h-full sm:flex sm:justify-center sm:items-center bg-[#FAFFFD]'>
        <div className='border-2 rounded-xl border-black border-opacity-5 px-4 my-16 lg:px-8 m-14  xl:m-20 sm:w-5/6 md:h-auto '>
                
                <div>
                    <h1 className='text-3xl pb-10 pt-8 font-base block text-center font-semibold '>Login/Lookup</h1>
                    
                    <form action="post">
                    <input className='block border-2  border-[#B9B4B4] rounded-md  bg-[#F9F9F9] text-[#B9B4B4] h-14 p-5 mb-8 w-full ' type="text" name="phNo" id="phNo" placeholder='Phone number' required/>
                    <button className='block border-0  font-semibold rounded-xl w-full justify-center  h-14 text-white font-base bg-[#5500C2] mb-8' type="submit">Login</button>
                    </form>
                
                </div>
            </div> 
    </div>
  </div>              
  )
}

export default LoginForm
