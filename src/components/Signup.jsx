import "./css/Login.css";

const Signup = () => {
  return (
    <div className="login-page">
      <div className="container">
    <div className="row mt-5">
      <div className="col-sm-12 col-lg-7">
      <h1 style={{color:"white"}}>Procurpilot</h1>
      </div>
      <div className="col-sm-12 col-lg-5" style={{backgroundColor:"white"}}>
      <div class="signup-form p-4">
                    {/* <!-- Your signup form content goes here --> */}
                    <h2>Sign Up</h2>
                    <form>
                        <div style={{margin:"0px"}} class="form-group">
                            <label style={{fontSize:"18px"}} for="username">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
                        </div>
                        <div style={{margin:"0px"}} class="form-group">
                            <label style={{fontSize:"18px"}} for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                        </div>
                        <div class="form-group">
                            <label style={{fontSize:"18px"}} for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
                        </div>
                        <div class="form-group">
                            <label style={{fontSize:"18px"}} for="confirmPassword">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                    </form>
                </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Signup;
