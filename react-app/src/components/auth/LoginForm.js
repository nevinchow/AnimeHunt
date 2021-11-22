import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();

    let errors = [];
    if(!email || !email.includes('@')) errors.push('Please provide a valid email address.')
    if (!password) errors.push('Please enter a password.')
    const data = await dispatch(login(email, password));

    if (errors.length > 0) {
      setErrors(errors);
      return null;
    } else if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='background'>
    <div className='log-in-form-container'>
      <h2>Log in</h2>
    <form onSubmit={onLogin}>
      <div className='log-in-form-errors'>
        {errors.map((error, ind) => (
          <div className="error"key={ind}>{error}</div>
        ))}
      </div>
      <div className='log-in-form-input-container'>
        <input className='log-in-form-input'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='log-in-form-input-container'>
        <input className='log-in-form-input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div >
      <div className='log-in-form-button-container'>
        <button className='log-in-form-button'type='submit'>Login</button>
        </div>
      <div className='log-in-form-nav-link-container'>
      <p className='sign-up-nav-link'>Don't have an account? </p>
      </div>
      <div className='log-in-form-nav-link-container'>
      <NavLink className='sign-up-form-login-link'to='/'>Sign Up </NavLink>
      </div>
    </form>
    </div>
    </div>
  );
};

export default LoginForm;
