import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { NavLink } from 'react-router-dom';
import './SignUpForm.css'
import * as sessionActions from "../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login("demo@aa.io", "password"))
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    let errors = [];
    if(!username) errors.push('Please provide a username.')
    if(!email || !email.includes('@')) errors.push('Please provide a valid email address.')
    if (password !== repeatPassword) errors.push('Passwords must match.')
    if (errors.length > 0) {
      setErrors(errors);
      return null;
    } else if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className='sign-up-form-error-container'>
        {errors.map((error, ind) => (
          <div className="error" key={ind}>{error}</div>
        ))}
      </div>
      <div className='sign-up-form-input-container'>
        <input className='sign-up-form-input'
          placeholder='Username'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='sign-up-form-input-container'>
        <input className='sign-up-form-input'
        placeholder='Email Address'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='sign-up-form-input-container'>
        <input className='sign-up-form-input'
        placeholder='Password'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='sign-up-form-input-container'>
        <input className='sign-up-form-input'
        placeholder='Confirm Password'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className='sign-up-form-input-container'>
      <button className='sign-up-form-submit'type='submit'>Sign Up</button>
      </div>
      <div className='sign-up-form-input-container'>
        <p className='log-in-nav-link'>Have an account already? </p>
        </div>
        <div className='sign-up-form-input-container'>
        <NavLink className='sign-up-form-login-link'to='/login'>Log in </NavLink>
        </div>
        <div className='sign-up-form-input-container'>
  <button onClick={demoLogin}>Log in as a Demo User </button>
  </div>
    </form>
  );
};

export default SignUpForm;
