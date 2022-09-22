import Image from 'next/image'
import studyGirl from 'file:///C:/work/react_training/public/casual-life-3d-young-woman-imagining-things-while-reading-e-book%201.png'
import LoginForm from './components/LoginForm'

const login = ()  => {
    return(
        <div>
            <div className='grid grid-row-2 md:grid-cols-2 md:h-screen ' >
                <div className='bg-[#F4BA58] py-20 px-10' >
                    <Image src={studyGirl}/>
                </div>
                {/* Left Side */}
                <div className='flex flex-col justify-between'>
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}

export default login