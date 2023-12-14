import React, { useState } from 'react'
import { BsDatabaseFillCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div>
      <div id="mySidenav" className={`sidenav ${isSidebarOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">Manage Repository</a>
        <a href="#">Version Control</a>
        <a href="#">Guidelines</a>
        <a href="#">Get Tender Score</a>
        <a href="#">Recent Guidelines</a>
        <a href="#">Profile</a>
        <a href="#">Logout</a>

      </div>

      <span style={{ fontSize: '20px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
    </div>
    <a class="navbar-brand" href="#">
    <BsDatabaseFillCheck style={{ fontSize: '1.5em' }} className='mx-1'/>
    
  </a>
  <a class="navbar-brand" href="#">Procurepilot</a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li className="nav-item active">
            {/* Use the Link component for navigation */}
            <Link className="nav-link" to="/admin">Admin <span className="sr-only">(current)</span></Link>
          </li>
      <li class="nav-item">
      <Link to="/admindashboard" className="nav-link">
  Dashboard
</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
      {/* <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Signup</button> */}
      <Link to="/login" className="btn btn-outline-info my-2 my-sm-0 mx-3">
            Login
          </Link>
      <Link to="/signup" className="btn btn-outline-info my-2 my-sm-0">
            Signup
          </Link>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar