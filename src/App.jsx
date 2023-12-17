import React from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main'
import Signup from './components/Signup';
import Login from './components/Login';
import Edit from './components/Edit';
import View from './components/View';
import CompareChanges from "./components/CompareChanges"
import Admindashboard from './components/Admindashboard';
import AddNewRule from './components/AddNewRule';
import ChatBot from './components/chatBot';

// import { Edit } from '@mui/icons-material';
const App = () => {
  return (
    <div>
      <Router>
      <div>
        <Navbar />
        <Routes> 
           <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/compare/:id" element={<CompareChanges/>}/>
          <Route path="/addNewRule" element={<AddNewRule/>} />
          <Route path="/searchByAI" element={<ChatBot/>} />
          
          <Route path="/admindashboard" element={<Admindashboard/>}/> 
        </Routes>
      </div>
    </Router>
      
    </div>
  )
}

export default App