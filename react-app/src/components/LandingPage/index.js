import { signUp } from "../../store/session"
import SignUpForm from "../auth/SignUpForm"
import './LandingPage.css'

function LandingPage() {
    return (
        <>
        <div className='landing-page-container'>
        <h2>Welcome</h2>
        <div className='sign-up-form-container'>
        <SignUpForm/>
        </div>
        </div>
        </>
    )
}

export default LandingPage
