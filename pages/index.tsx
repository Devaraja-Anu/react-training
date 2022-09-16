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
    <div className={styles.container}>

   <div className='navigation'> 
    <div className='navs'>

    <div className='n1'>
     <div className='nav back'>
      <Image src={leftArrow} />
    </div> 
    </div>

    <div className='n2'>
    <div className='nav bag'>
      <Image  src={shoppingBag} />
    </div>
    </div>


    </div>  

    </div>
    <div className='product'>
      <Image src={dude} alt='picture of some dude'/>
    </div>
    <div className='details'>
      <p><span>US POLO ASSN </span> Men Black &#38; Grey</p>
      <p className='jacket'>Jacket</p>
      
     <div className="price">
      <p className='p1'>&#8377; 3999</p><p>&#8377; 4999</p> <p className='deal'>50 % off</p>
      </div> 
      <div className='ratings'>
        <Image className='' src={star} />
        <Image className='' src={star} />
        <Image className='' src={star} />
        <Image className='' src={star} />
        <Image className='' src={star2} />
      </div>
    </div>

    <div className='circles'>
    <p>Colors</p>
        <div className='colors'>
          <div className='color c1'></div>
          <div className='color c2'></div>
          <div className='color c3'></div>
          <div className='color c4'></div>
          <div className='color c5'></div>
        </div>

        <p>Sizes</p>
      <div className='sizes'>
        <div className='size s1'><p>XS</p></div>
        <div className='size s2'><p>S</p></div>
        <div className='size s3'><p>M</p></div>
        <div className='size s4'><p>L</p></div>
        <div className='size s5'><p>XL</p></div>
      </div>
    </div>
    <br />
    <br />

      <div className='bottom'>

      <div className='buy'>
        <button>Add to bag</button>
        </div>  
      <div className='like'>  
        <Image src={heart} />
      </div>
    </div>

    </div>
  )
} 

export default Home