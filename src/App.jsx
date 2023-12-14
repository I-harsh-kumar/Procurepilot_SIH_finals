import React from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Main from './components/Main'
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './components/Admin';
import Admindashboard from './components/Admindashboard';
const App = () => {
  return (
    <div>
      <Router>
      <div>
        <Navbar />
        <Routes> {/* Wrap your routes with Routes */}
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admindashboard" element={<Admindashboard/>}/>
        </Routes>
      </div>
    </Router>
      
    </div>
  )
}

export default App