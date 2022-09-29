import Image from 'next/image'
import studyGirl from 'file:///C:/work/react_training/public/casual-life-3d-young-woman-imagining-things-while-reading-e-book%201.png'

const SignupRight = ()=>{
return (
    <div className='bg-[#00C285] flex flex-col justify-center pl-10'>{/*Left side */}
                <Image  className='sm:object-contain' src={studyGirl} alt='Girl studying'/>
                </div>
);
}

export default SignupRight