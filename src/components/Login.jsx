import React, { useState } from 'react'
import Axios from 'axios';
import "./css/login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/api/users/signin", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log("user sucessfully loged in");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-page ">
    <div className="container">
    <div className="row" style={{marginTop:"48px"}}>
          <div className="col-sm-12 col-md-7 col-lg-7 p-0" style={{ position: 'relative', textAlign: 'center'}}>
          
         <img style={{width:"500px", height:"500px"}} src= {'/public/login.jpg'} alt='image'/>
        
    </div>

    <div
            className="col-sm-12 col-md-5 col-lg-5 "
            style={{ backgroundColor: "white",padding: "0 10px" }}
            
          >
            
    <div class="signup-form p-5">
                  {/* <!-- Your signup form content goes here --> */}
                  <h1 className="mb-3">Hey <br />Welcome Back !</h1>
                  <p >Enter your credentials to Login</p> <br />
                  
                  <form onSubmit={submitHandler}>
                    
                  <div class="input-wrapper mb-3">
      <input type='text' id="email" onChange={(e)=>setEmail(e.target.value)} required ></input>
      <label 
             for="email"
             class='placeholder'>
       Email
      </label>
    </div>
    <div class="input-wrapper">
      <input type="password" id="password"  onChange={(e)=>setPassword(e.target.value)} required ></input>
      <label 
             for="password"
             class='placeholder'>
        Password
      </label>
    </div>
             
    <div>
    <div>
    <a href="" className='mt-2' style={{textDecoration:'underline', float:"right"}}>forget password</a>           
    </div> 
    </div>
    <button  type="submit" class=" mt-5 btn btn-outline-primary ">
      Login 
    </button> 
    </form>
  
                  <p style={{marginTop: "10%"}}>Dont have an account?<a href="" style={{textDecoration: "underline"}}>Signup</a> </p>
                
                  <div style={{width:"200px", height:"200px", borderRadius:"50%", border: "0.3px solid #1c1c1c", backgroundColor:"black", position:"absolute",right:'-100px',bottom:'-100px' }}></div> 
                  <div style={{width:"200px", height:"200px", borderRadius:"50%", border: "0.3px solid #1c1c1c", backgroundColor:"none", position:"absolute",right:'-100px',bottom:'-90px' }}></div> 
                  <div style={{width:"200px", height:"200px", borderRadius:"50%", border: "0.3px solid #1c1c1c", backgroundColor:"none", position:"absolute",right:'-100px',bottom:'-80px' }}></div> 
                  <div style={{width:"200px", height:"200px", borderRadius:"50%", border: "0.3px solid #1c1c1c", backgroundColor:"none", position:"absolute",right:'-100px',bottom:'-70px' }}></div> 

                
                  
                  {/* <div className="responsive-circle rcircle1"></div>
                  <div className="responsive-circle rcircle2"></div>
                  <div className="responsive-circle rcircle3"></div>
                  <div className="responsive-circle rcircle4"></div> */}

              </div>
    </div>
  </div>
  </div>
  <div id="lc1" className="circle"></div>
  <div id="lc2" className="circle"></div>
 
  
  </div>
  )
}

export default Login;
