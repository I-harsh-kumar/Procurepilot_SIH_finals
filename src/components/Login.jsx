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
    <div className="row" style={{marginTop:"80px"}}>
          <div className="col-sm-12 col-lg-7 p-3">
    <h1 style={{ color: "white" }}>Procurpilot</h1>
            <p style={{ color: "white", marginTop: "20px",paddingRight:'30px' }}>
            Welcome to Procurpilot, the secure platform designed for government authorized officials. Our system streamlines access to crucial guidelines and tenders, providing a centralized repository for efficient document management. From the login/signup page to the tender scoring process. 
  </p>
  <p style={{ color: "white", marginTop: "20px",paddingRight:'30px' }}>
  Procurpilot empowers officials with seamless navigation and robust features. Stay informed with our new guidelines notifications and explore the Guidelines Repository, ensuring a comprehensive resource for managing and accessing essential information. </p>
  <p style={{ color: "white", marginTop: "20px",paddingRight:'30px' }}>
  Login now to experience the convenience of Procurpilot in the realm of government document management.</p>
    </div>
    <div
            className="col-sm-12 col-lg-5"
            style={{ backgroundColor: "white", borderRadius:"25px", padding: "0 10px" }}
            
          >
    <div class="signup-form p-5">
                  {/* <!-- Your signup form content goes here --> */}
                  <h2 className="mb-5">Login</h2>
                  <form onSubmit={submitHandler}>
                    
                  <div class="input-wrapper mb-3">
      <input type='text' id="email" onChange={(e)=>setEmail(e.target.value)} required ></input>
      <label 
             for="email"
             class='placeholder'>
       Email
      </label>
    </div>
    <div class="input-wrapper mb-5">
      <input type="password" id="password"  onChange={(e)=>setPassword(e.target.value)} required ></input>
      <label 
             for="password"
             class='placeholder'>
        Password
      </label>
    </div>
                     
                    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <button type="submit" class="btn btn-outline-primary ">
      Login 
    </button>
  </div>
                  </form>
              </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Login