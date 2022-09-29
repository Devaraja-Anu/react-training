import Image from 'next/image'
import scienceGirl from '../../../public/scienceGirl.png'


const OTPright = () => {
   return <div className='bg-[#DA85A0] py-52 flex px-0' ><Image className='sm:object-contain' src={scienceGirl} alt='girl playing with an atom'/></div>
} 

export default OTPright;