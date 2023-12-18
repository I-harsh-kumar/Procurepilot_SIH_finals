import React, { useState, useContext } from "react";
import Axios from "axios";
import "./css/login.css";
import { useNavigate } from "react-router-dom";
// import { Link } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
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
      dispatch({ type: "USER", payload: true });
      console.log("user sucessfully logged in");
      toast.success("user sucessfully logged in");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Error in logging user");
    }
  };
  return (
    <div className="container" >
      <div class="d-flex  justify-content-center align-items-center flex-column m-5 w-100">
        <div>
          <h3>Name-{}</h3>
          <h3>Email-{}</h3>
        </div>
        {/* <div
      style={{
        height: '2px',
        width:"60vw",
        borderWidth: '0',
        borderColor: 'gray',
        backgroundColor: 'gray',
        margin: '10px 0',
      }}
    ></div> */}
   <hr class="border border-danger border-2 opacity-50"/>
    
        <div class="w-50">
          <p className="mt-2 mb-2 text-end">
            You can approves requisitions, manages guideline repository,
            contracts, and vendor relationships, responsible for enforcement of
            compliance, oversee user and vendor data, and ensure efficient
            procurement processes through workflow automation.
          </p>
            <p className="m text-start">
              Your role is vital for maintaining security, providing user
              support, and improving policies and processes for optimal
              procurement efficiency.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
