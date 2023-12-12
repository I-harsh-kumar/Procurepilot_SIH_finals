import React from 'react'

const Login = () => {
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
                  <form>
                      <div style={{margin:"0px"}} class="form-group">
                          <label style={{fontSize:"18px"}} for="username">Email</label>
                          <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
                      </div>
                      <div style={{margin:"0px"}} class="form-group">
                          <label style={{fontSize:"18px"}} for="email">Password</label>
                          <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
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