import React from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Main from './components/Main'
import Signup from './components/Signup';
const App = () => {
  return (
    <div>
      <Router>
      <div>
        <Navbar />
        <Routes> {/* Wrap your routes with Routes */}
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
      
    </div>
  )
}

export default App