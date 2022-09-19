import Image from 'next/image'
import studyGirl from '../public/casual-life-3d-young-woman-imagining-things-while-reading-e-book 1.png'
import Link from 'next/link'

const signUp = ()  => {
    return(
        <div>
            <div className='grid md:grid-cols-2 h-screen' > 

                <div className='bg-[#00C285] '>{/*Left side */}
                <Image src={studyGirl}/>
                </div>

                {/* the right side */}
                <div>
                    
                   <form className='grid space-y-3  justify-around border-2 border-[#B9B4B4]] xl:m-32 lg:m-24 md:m-16 items-center' action="post">
                    <h1 className='text-3xl p-2'>Signup</h1>
                    <input className='border-gray-300 border-2 rounded bg-[#F1F1F1] h-9 mx-2' type="text" placeholder='Phone Number'/>
                    <input className='border-gray-300 border-2 rounded bg-[#F1F1F1] h-9 mx-2' type="text" placeholder='Student Name'/>
                    <input className='border-gray-300 border-2 rounded bg-[#F1F1F1] h-9 mx-2' type="email" name="email" id="email" placeholder='Student Email' />
                    <label className='font-semibold mx-2' htmlFor="buttons">Select Class</label>
                    <div className='space-x-4 mx-2'>
                        <input className='hover:border-[#00C285] border-2 p-1 rounded-2xl' type="button" value="Plus one" />
                        <input className='hover:border-[#00C285] border-2 p-1 rounded-2xl' type="button" value="Plus two" />
                    </div>
                    <button className='border-0 mx-4 text-white rounded-xl h-9 bg-[#00C285]' type="submit">Submit</button>
                        <div className='flex pb-4 items-center'>
                        <div className='border h-0 w-7 border-black mx-2'></div> <p>Already have an Account? <span className='text-[#00C285]'><Link href={"login"}>Login</Link></span></p> <div className='border h-0 w-7 border-black mx-2'></div>
                        </div>  
                    </form> 
                       
                </div>
            </div>
        </div>
    )
}

export default signUp