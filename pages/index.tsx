import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
  <div className='bg-gradient-to-r from-blue-600 to-pink-600 h-screen '> {/*Main div */}

    <div>
      <h1 className='text-center text-6xl py-10 font-semibold '>WELCOME</h1>
    </div>

    <div className= 'mx-40'> 
      <div className='grid gap-y-4 sm:grid-cols-3 md:grid-cols-6 md:grid-rows-3 justify-items-center items-center'> {/* The links */}
      

          <Link href="/product">
            <div className="sqbox">1</div>
          </Link>

          <Link href="/login">
            <div className="sqbox">2</div>
          </Link>

          <Link href="/Signup">
            <div className="sqbox">3</div>
          </Link>

          <Link href="Otp">
            <div className="sqbox">4</div>
          </Link>
          <Link href="">
            <div className="sqbox">5</div>
          </Link>
          <Link href="">
            <div className="sqbox">6</div>
          </Link>
          <Link href="">
            <div className="sqbox">7</div>
          </Link>
          <Link href="">
            <div className="sqbox">8</div>
          </Link>
          <Link href="">
            <div className="sqbox">9</div>
          </Link>
          <Link href="">
            <div className="sqbox">10</div>
          </Link>
          <Link href="">
            <div className="sqbox">11</div>
          </Link>
          <Link href="">
            <div className="sqbox">12</div>
          </Link>
          <Link href="">
            <div className="sqbox">13</div>
          </Link>
          <Link href="">
            <div className="sqbox">14</div>
          </Link>
          <Link href="">
            <div className="sqbox">15</div>
          </Link>
          <Link href="">
            <div className="sqbox">16</div>
          </Link>
          <Link href="">
            <div className="sqbox">17</div>
          </Link>
          <Link href="">
            <div className="sqbox">18</div>
          </Link>


      </div>
    </div> 
  </div> 
  )
} 

export default Home