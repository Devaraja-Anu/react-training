import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
  <div className='bg-gradient-to-r from-blue-600 to-pink-600  h-screen pb-10 '> {/*Main div */}

    <div>
      <h1 className='text-center text-6xl py-10 font-semibold '>WELCOME</h1>
    </div>

    <div className= 'mx-20 sm:mx-40'> 
      <div className='grid gap-y-4 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:grid-rows-3 justify-items-center items-center'> {/* The links */}
      
          <Link href="/product">
            <button className="sqbox bg-gradient-to-br from-zinc-500 to-white hover:from-white  hover:to-zinc-500">Card</button>
          </Link>

          <Link href="/login">
            <button className="sqbox bg-gradient-to-br from-red-500 to-yellow-500 hover:from-yellow-500  hover:to-red-500">Login</button>
          </Link>

          <Link href="/Signup">
            <button className='sqbox bg-gradient-to-br from-green-500 to-blue-500 hover:from-blue-500  hover:to-green-500'>Signup</button>
          </Link>

          <Link href="Otp">
        <button className='sqbox bg-gradient-to-br from-pink-500 to-purple-500 hover:from-purple-500  hover:to-pink-500'>Otp</button>
          </Link>
          <Link href="">
          <button className='sqbox bg-gradient-to-br  from-pink-600 to-blue-600'></button>
          </Link>
          <Link href="">
          <button className='sqbox bg-gradient-to-br   from-pink-600 to-blue-600'></button>
          </Link>
          {/* <Link href="">
          <button className='sqbox'></button>
          </Link>
          <Link href="">
          <button className='sqbox'></button>
          </Link>
          <Link href="">
          <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link>
          <Link href="">
            <button className='sqbox'></button>
          </Link> */}


      </div>
    </div> 
  </div> 
  )
} 

export default Home
