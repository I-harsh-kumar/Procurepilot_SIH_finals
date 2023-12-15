import React from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Main from './components/Main'
import Signup from './components/Signup';
import Login from './components/Login';
import Edit from './components/Edit';
import View from './components/View';

import Admindashboard from './components/Admindashboard';

// import { Edit } from '@mui/icons-material';
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
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />

          <Route path="/admindashboard" element={<Admindashboard/>}/>
        </Routes>
      </div>
    </Router>
      
    </div>
  )
}

export default App