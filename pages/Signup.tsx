import Image from 'next/image'
import studyGirl from '../public/casual-life-3d-young-woman-imagining-things-while-reading-e-book 1.png'
import Link from 'next/link'
import SignupForm from './components/SignUpForm'

const signUp = ()  => {
    return(
        <div>
            <div className='grid md:grid-cols-2 h-screen' > 

                <div className='bg-[#00C285] py-20 px-10'>{/*Left side */}
                <div>
                <Image className='' src={studyGirl}/>
                </div>
                </div>

                {/* the right side */}
                <div>
                    <SignupForm/>                       
                </div>
            </div>
        </div>
    )
}

export default signUp