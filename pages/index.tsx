import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
  <div> {/*Main div */}

    <div>
      <h1 className='text-center text-6xl py-10'>WELCOME</h1>
    </div>

    <div className= 'mx-40'> 
      <div className='grid gap-y-4 grid-cols-6 grid-rows-3 justify-items-center items-center'> {/* The links */}
      
        <div className='sqbox'>
          <Link href="/product">1</Link>
          </div>

        <div className='sqbox'>
        <Link href="/login">2</Link>
        </div>
        <div className='sqbox'>
        <Link href="/Signup">3</Link>
        </div>
        <div className='sqbox'>4</div>
        <div className='sqbox'>5</div>
        <div className='sqbox'>6</div>
        <div className='sqbox'>7</div>
        <div className='sqbox'>8</div>
        <div className='sqbox'>9</div>
        <div className='sqbox'>10</div>
        <div className='sqbox'>11</div>
        <div className='sqbox'>12</div>
        <div className='sqbox'>13</div>
        <div className='sqbox'>14</div>
        <div className='sqbox'>15</div>
        <div className='sqbox'>16</div>
        <div className='sqbox'>17</div>
        <div className='sqbox'>18</div>
      </div>
    </div> 
  </div> 
  )
} 

export default Home