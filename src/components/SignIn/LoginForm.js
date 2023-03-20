import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const LoginForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const dispatch = useDispatch();

  return (
    <div>
      <nav className='bg-white fixed top color-1'>
       <p className='mx-4'>RSE Ship Manager</p>
      </nav>
    <div className='Login'>
        <div className='container bg-white w-50 h-60 rounded'>
            <div className='text-center my-3'>
            <h1 className='fs-3'>Login to Admin Portal</h1>
            <p className='fs-6'>Please login with your information</p>
            </div>
            <div>
             <form className='mx-4'>
               <div class="mb-3">
                 <label for="exampleInputEmail1" class="form-label fw-bold">Email address</label>
                 <input 
                  type="email"
                  class="form-control" 
                  id="email" 
                  placeholder="alani@gmail.com"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label fw-bold">Password</label>
                 <input 
                 type="password" 
                 class="form-control" 
                 id="password"
                 placeholder="password"
                //  value={password}
                //  onChange={(e) => setPassword(e.target.value)}
                 />
               </div>
               <div class="mb-3 form-check">
                 <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                 <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                 <span className='fw-light pwd'><a class="" href="">Forgot Password?</a></span>
               </div>
               <div class="d-grid gap-2 mb-3">
                 <button class="btn btn-primary btn-1" type="submit">Sign In</button>
                </div>
                <p className='text-center'>Don’t have an account? <a href='' className='stretched-link'>Sign Up now</a> </p>
             </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LoginForm