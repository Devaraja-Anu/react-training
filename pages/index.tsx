import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import dude from '../public/Rectangle 20.png'
import heart from '../public/icons8-love-100 1.png'
import leftArrow from '../public/left-arrow 1.png'
import shoppingBag from '../public/shopping-bag 1.png'
import star from '../public/icons8-star-100 (1) 1.png'
import star2 from '../public/icons8-star-100 (2) 1.png'


const Home: NextPage = () => {
  return (
    <div className='flex justify-center bg-gray-500'>

    <div className='p-4 bg-white'> {/*this div wraps the card*/}

      <div className='max-w-md'> {/*the back and bag icons */}
        <div>
          <Image src={leftArrow}/>
        </div>
        <div>
        <Image className='' src={shoppingBag}/>
        </div>
      </div>

      <div className='pb-3'>
        <Image src={dude}/>
      </div>

    {/* the text part */}
    <div>
      <div className='flex space-x-1 pl-40'>
        {/* placeholders */}
        <div className='border-solid border-black-200 bg-slate-300 rounded w-2 h-2'></div> 
        <div className='border-solid border-black-200 bg-slate-300 rounded w-2 h-2'></div>
        <div className='border-solid border-black-200 bg-slate-600 rounded w-2 h-2'></div>
      </div>

      <div className='px-4'>
      <div className='pr-2 '><span className='font-bold'>U.S. POLO ASSN</span> Men Black &#38; Grey</div>
      <div >Jacket</div>
      </div>

      <div className='px-4' ><span className='text-gray-500'>	&#8377; <span className='line-through'>3999</span> </span> &#8377; 4999 <span className='pr-2 text-green-500'>50%</span></div>

      <div className='px-4 flex'>
        <div><Image src={star}/></div>
        <div><Image src={star}/></div>
        <div><Image src={star}/></div>
        <div><Image src={star}/></div> 
        <div><Image src={star2}/></div>
      </div>

      {/* colors; The colors are placeholders for now */}

      <div className='grid-cols-5 space-x-2 px-3'>
        <p className='block py-2 px-4 text-xl text-gray-500'>Colors</p>
        <button className='border-solid border-white bg-[#FF9F69] rounded-3xl h-12 w-12 hover: hover:border-5 hover:shadow-md' ></button>
        <button className='border-solid border-white bg-[#F387C8] rounded-3xl h-12 w-12'></button>
        <button className='border-solid border-white bg-[#292D30] rounded-3xl h-12 w-12 '></button>
        <button className='border-solid border-white bg-[#522CBF] rounded-3xl h-12 w-12'></button>
        <button className='border-solid border-white bg-[#666268] rounded-3xl h-12 w-12 '></button>
      </div>

      {/* Sizes */}

      <div className='grid-cols-5 space-x-2 px-3 pb-4'>
        <p className='block py-2 px-4 text-xl text-gray-500'>Size</p>
      <button className='border-solid border-black-200 bg-gray-400  rounded-3xl h-12 w-12'>XS</button>
      <button className='border-solid border-black-200 bg-gray-400  rounded-3xl h-12 w-12'>S</button>
      <button className='border-solid border-black-200 bg-gray-400  rounded-3xl h-12 w-12'>M</button>
      <button className='border-solid border-black-200 bg-gray-400  rounded-3xl h-12 w-12'>L</button>
      <button className='border-solid border-black-200 bg-gray-400  rounded-3xl h-12 w-12'>XL</button>
      </div>

    </div>

    {/* button and like*/}

    <div className='flex'>
      <div>
        <button  className='border-solid border-black-200 bg-[#8C7AE6] text-white rounded-lg h-7 '>Add to bag</button>
      </div>
      <div>
        <Image src={heart}/>
      </div>
    </div>




    </div>
    </div>
  )
} 

export default Home