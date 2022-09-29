
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