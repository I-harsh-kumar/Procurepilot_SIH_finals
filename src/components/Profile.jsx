import React, { useState, useContext } from "react";

import "./css/login.css";


const Profile = () => {
  const getName=()=>{
    const userInfoString = localStorage.getItem('userInfo');

// Parse the userInfo string into a JavaScript object
const userInfo = JSON.parse(userInfoString);

// Access the "name" property
const userName = userInfo.name;

// Log or use the userName variable
// console.log(userName);
    return userName;
  }
  const getEmail=()=>{
    const userInfoString = localStorage.getItem('userInfo');

// Parse the userInfo string into a JavaScript object
const userInfo = JSON.parse(userInfoString);

// Access the "name" property
const userName = userInfo.email;

// Log or use the userName variable
console.log(userName);
    return userName;
  }
  return (
    <div className="container" >
   <h3 className="mt-5 text-center">User Profile</h3>
      <div class="" style={{marginTop:"130px"}}>
      <div className="row">
        <div className="col-sm-12 col-lg-10">
        <div>
          <h3><b>Name-{getName()}</b></h3>
          <h3><b>Email-{getEmail()}</b></h3>
        </div>
        </div>
        <div className="col-sm-12 col-lg-2 text-center">
        <img src="/public/Frame.png"></img>
        </div>
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
        
        <div class="w-100">
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
