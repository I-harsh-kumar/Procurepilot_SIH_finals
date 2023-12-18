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
      <div class="d-flex  justify-content-center align-items-center flex-column m-5 w-100">
        <div>
          <h3>Name-{getName()}</h3>
          <h3>Email-{getEmail()}</h3>
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
