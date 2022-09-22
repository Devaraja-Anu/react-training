import React from 'react'

// border-red-500 border-2

function LoginForm() {
  return (
    <div className=' md:my-52'>
        <div className=' border-2 rounded-xl border-black border-opacity-5 mx-32  '>
                
                <div className='mx-10'>
                    <h1 className='text-3xl pb-10 pt-8 font-base block text-center font-semibold '>Login/Lookup</h1>

                    <div >
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