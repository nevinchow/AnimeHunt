import SignUpForm from "../auth/SignUpForm"
import './LandingPage.css'

function LandingPage() {
    return (
        <>
        <div className='background'>
        <div className='landing-page-container'>
        <h2 className='welcome-tag'>Welcome to AnimeHunt</h2>
        <div className='sign-up-form-container'>
        <h2 className='sign-up-tag'>Sign Up </h2>
        <SignUpForm/>
        </div>
        </div>
        </div>
        </>
    )
}

export default LandingPage
