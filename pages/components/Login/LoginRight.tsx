import Image from 'next/image'
import studyGirl from '../../../public/read-book.png'

const LoginRight=()=>{
return <div className='bg-[#F4BA58] flex flex-col justify-center pl-10' ><Image className='sm:object-contain'  src={studyGirl} alt='Girl studying'/></div>
}

export default LoginRight

