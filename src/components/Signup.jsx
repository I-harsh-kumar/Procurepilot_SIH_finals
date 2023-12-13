import { useState } from "react";
import "./css/Login.css";
import Axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const { data } = await Axios.post("/api/users/signup", {
        name,
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log('new user created');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-lg-7">
            <h1 style={{ color: "white" }}>Procurpilot</h1>
          </div>
          <div
            className="col-sm-12 col-lg-5"
            style={{ backgroundColor: "white" }}
          >
            <div class="signup-form p-4">
              {/* <!-- Your signup form content goes here --> */}
              <h2>Sign Up</h2>
              <form onSubmit={submitHandler}>
                <div style={{ margin: "0px" }} class="form-group">
                  <label style={{ fontSize: "18px" }} for="username">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter your username"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div style={{ margin: "0px" }} class="form-group">
                  <label style={{ fontSize: "18px" }} for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label style={{ fontSize: "18px" }} for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label style={{ fontSize: "18px" }} for="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
