import Image from 'next/image'
import scienceGirl from '../../../public/scienceGirl.png'


const OTPright = () => {
   return <div className='bg-[#DA85A0] flex flex-col justify-center pl-10' ><Image className='sm:object-contain' src={scienceGirl} alt='girl playing with an atom'/></div>
} 

export default OTPright;