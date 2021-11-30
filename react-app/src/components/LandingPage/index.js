import SignUpForm from "../auth/SignUpForm"
import './LandingPage.css'

function LandingPage() {
    return (
        <>
        <div className='background'>
        <div className='landing-page-container'>
        <h2 className='welcome-tag'>Welcome to AnimeHunt
        <h3 className='site-description'>A place for anime enthusiasts to share and talk about the latest anime episodes, movies, or other releases.</h3></h2>
        <div className='sign-up-form-container'>
        <h2 className='sign-up-tag'>Sign Up </h2>
        <SignUpForm/>
        </div>
        </div>
        </div>
        <footer className='footer'>
            <h2 className='footer-text'>Made by: Nevin Chow</h2>
            <div className='github-linkedin'>
            <a className='footer-link'href='https://github.com/nevinchow'>Github</a>
            <a className='footer-link'href='https://www.linkedin.com/in/nevin-chow-aa4770221/'>LinkedIn</a>
            </div>
        </footer>
        </>
    )
}

export default LandingPage
