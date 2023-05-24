import React from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/login')
  };
  return (
    <>
    <section className='signup'>
        <div className="center-signup">
        <h1>Signup</h1>
        <form method="post">
            <div className="txt_field">
            <input type="text" required/>
            <span></span>
            <label>Username</label>
            </div>
            <div className="txt_field">
                <input type="text" required/>
                <span></span>
                <label>Email</label>
            </div>
            <div className="txt_field">
            <input type="password" required/>
            <span></span>
            <label>Password</label>
            </div>
            <div className="txt_field">
                <input type="password" required/>
                <span></span>
                <label>Confirm Password</label>
            </div>
            <button type="submit" onClick={handleSubmit} className="signup_btn">Signup</button>
            <br/><br/>
            <div className="signup_link">
            Already have an account? <a href="/login">Signin</a>
            </div>
        </form>
        </div>
    </section>
  </>
  )
}

export default Register