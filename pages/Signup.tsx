import Image from 'next/image'
import studyGirl from 'file:///C:/work/react_training/public/casual-life-3d-young-woman-imagining-things-while-reading-e-book%201.png'
import SignupForm from './components/Signup/SignUpForm'
import SignupRight from './components/Signup/SignupRight'

const signUp = ()  => {
    return(
        <div>
            <div className='grid md:grid-cols-2 h-screen' > 
                <SignupRight/>
                {/* the right side */}
                <SignupForm />                       
            </div>
        </div>
    )
}

export default signUp