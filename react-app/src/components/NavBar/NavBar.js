
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import NewPostForm from './NewPostForm';
import NewPostModal from './NewPostModal';
const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const [isClosed, setIsClosed] = useState(false)


  if (sessionUser) {
    return (
      // Upper Nav Bar
      <nav className='nav-bar'>
            <NavLink to='/' exact={true} activeClassName='active' className='home'>
              Home
            </NavLink>
            <NewPostModal setIsClosed={setIsClosed}/>
            <img className='user-profilePic' src={sessionUser.profilePic}></img>
            <LogoutButton className='logout-button' />
      </nav>
    );
  } else {
    return (
      <nav className='nav-bar'>
        <ul>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    );

  }
}

export default NavBar;
