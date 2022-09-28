import LoginForm from './components/Login/LoginForm'
import LoginRight from './components/Login/LoginRight'

const login = ()  => {
    return(
        <div>
            <div className='grid grid-row-2 md:grid-cols-2 h-screen ' >
                <LoginRight/>
                {/* Left Side */}
                <LoginForm/>
            </div>
        </div>
    )
}

export default login