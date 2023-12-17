import React, { useEffect, useState,useContext} from 'react';
import "./css/Login.css";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const {state,dispatch} = useContext(UserContext);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    // Update the window height when the window is resized
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      // Display an error toast if passwords do not match
      toast.error('Passwords do not match');
      return;
    }

    try {
      const { data } = await Axios.post("/api/users/signup", {
        name,
        email,
        password,
      });

      // Save user information to localStorage
      localStorage.setItem("userInfo", JSON.stringify(data));

      // Dispatch action if needed
      dispatch({ type: "USER", payload: true });

      // Display a success toast
      toast.success('New user created successfully');

      // Navigate to the home page or any other desired route
      navigate('/');
    } catch (err) {
      // Display an error toast if there is an API error
      toast.error('Error creating a new user');

      console.log(err);
    }
  };
  return (
    
    <div className="login-page">
      {console.log(windowHeight)}
      <div className="container">
        <div className="row" style={{marginTop:"80px"}}>
          <div className="col-sm-12 col-lg-7 p-3" >
            
          <img style={{width:"600px", height:"400px"}} src= {'/public/Signup.png'} alt='image'/>
          </div>
          <div
            className="col-sm-12 col-lg-5"
            style={{ backgroundColor: "white", borderRadius:"25px", padding: "0 10px" }}
            
          >
            <div class="signup-form p-5">
              {/* <!-- Your signup form content goes here --> */}
              <h2 className="mb-2">Welcome</h2>
              <p >Enter your credentials to Signup</p> <br />
              <form onSubmit={submitHandler}>
              <div class="input-wrapper mb-3">
      <input type='text' id="username" onChange={(e) => setName(e.target.value)} required ></input>
      <label 
             htmlFor="username"
             class='placeholder'>
        Username
      </label>
    </div>
    <div class="input-wrapper mb-3">
      <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required ></input>
      <label 
             htmlFor="email"
             class='placeholder'>
        Email
      </label>
    </div>
    <div class="input-wrapper mb-3">
      <input type="password"  id="password" onChange={(e) => setPassword(e.target.value)} required ></input>
      <label 
             htmlFor="password"
             class='placeholder'>
        Password
      </label>
    </div>
    <div class="input-wrapper mb-5">
      <input type="password"   id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} required ></input>
      <label 
             htmlFor="confirmPassword"
             class='placeholder'>
        Confirm Password
      </label>
    </div>    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <button type="submit" class="btn btn-outline-primary ">
      Sign Up
    </button>
  </div>
              </form>
              <p style={{marginTop: "10%"}}>Already Have a account? <Link to="/login" style={{textDecoration: "underline"}}>Login</Link> </p>
              <div style={{width:"200px", height:"200px", borderRadius:"50%", border: "0.3px solid #1c1c1c", backgroundColor:"black", position:"absolute",right:'-100px',bottom:'-100px' }}></div> 
                  <div style={{width:"200px", height:"200px", borderRadius:"50%", border: "0.3px solid #1c1c1c", backgroundColor:"none", position:"absolute",right:'-100px',bottom:'-90px' }}></div> 
                  <div style={{width:"200px", height:"200px", borderRadius:"50%", border: "0.3px solid #1c1c1c", backgroundColor:"none", position:"absolute",right:'-100px',bottom:'-80px' }}></div> 
                  <div style={{width:"200px", height:"200px", borderRadius:"50%", border: "0.3px solid #1c1c1c", backgroundColor:"none", position:"absolute",right:'-100px',bottom:'-70px' }}></div> 

                
            </div>
          </div>
        </div>
      </div>
      <div id="lc1" className="circle"></div>
  <div id="lc2" className="circle"></div>
    </div>
  );
};

export default Signup;
