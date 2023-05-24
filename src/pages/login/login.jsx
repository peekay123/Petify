import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const Login = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/index');
        toast.success('Welcome to Petify', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    
    } 
  return (
    <>
    <section className='signin'>
        <div class="center">
        <h1>Signin</h1>
        <form method="post">
            <div class="txt_field">
            <input type="text" required/>
            <span></span>
            <label>Username</label>
            </div>
            <div class="txt_field">
            <input type="password" required/>
            <span></span>
            <label>Password</label>
            </div>
            <button type="submit" class="signin_btn" onClick={handleClick}>Signin</button>
            <br/><br/>
            <div class="signup_link">
            Don't have an account? <a href="/register">Signup</a>
            </div>
        </form>
        </div>
    </section>
  </>
  )
}

export default Login