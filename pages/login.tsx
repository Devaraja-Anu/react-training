import Image from 'next/image'
import studyGirl from '../public/casual-life-3d-young-woman-imagining-things-while-reading-e-book 1.png'

// THis is a mess need to be better organized. The top card is too big in mobile form

const login = ()  => {
    return(
        <div>
            <div className='grid grid-row-2 md:grid-cols-2 md:h-screen ' >
                <div className='bg-[#F4BA58] py-20 px-10 flex' >
                <Image className='self-center' src={studyGirl}/>
                </div>
                <div className='grid grid-rows-3  justify-around border-4 lg:m-32 md:m-16  '>
                    <h1 className='text-3xl p-5 self-end'>Login/Lookup</h1>
                    <input className='border-gray-500 rounded-sm  bg-[#F1F1F1] self-center h-10 w-60' type="text" name="phNo" id="phNo" placeholder='Phone number' required/>
                    <button className='border-0  rounded-xl justify-center  h-10 text-white self-start bg-[#5500C2]' type="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default login