import React, { useState } from 'react'
import Axios from 'axios';

const Login = () => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const { data } = await Axios.post('/api/users/signin', {
      email,
      password,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    console.log('user sucessfully loged in');
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="login-page">
    <div className="container">
  <div className="row mt-5">
    <div className="col-7">
    <h1 style={{color:"white"}}>Procurpilot</h1>
    </div>
    <div className="col-5" style={{backgroundColor:"white"}}>
    <div class="signup-form p-4">
                  {/* <!-- Your signup form content goes here --> */}
                  <h2>Login</h2>
                  <form onSubmit={submitHandler}>
                      <div style={{margin:"0px"}} class="form-group">
                          <label style={{fontSize:"18px"}} for="email">Email</label>
                          <input type="email" class="form-control" id="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>

                      </div>
                      <div style={{margin:"0px"}} class="form-group">
                          <label style={{fontSize:"18px"}} for="password">Password</label>
                          <input type="password" class="form-control" id="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                      </div>
                      
                      <button type="submit" class="btn btn-primary">Login</button>
                  </form>
              </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Login