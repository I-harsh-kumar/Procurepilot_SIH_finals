import React from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/Main'
import Signup from './components/Signup';
import Login from './components/Login';
import Edit from './components/Edit';
import View from './components/View';
import CompareChanges from "./components/CompareChanges"
import Admindashboard from './components/Admindashboard';
import AddNewRule from './components/AddNewRule';
import ChatBot from './components/chatBot';
import { createContext, useState,useReducer } from 'react';
import { intialState,reducer } from './reducer/useReducer';

// import { Edit } from '@mui/icons-material';
export const UserContext=createContext();
const App = () => {
  const [state, dispatch] = useReducer(reducer,intialState);
  return ( 
      <UserContext.Provider value={{state,dispatch}}>
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
       
        <ToastContainer />
      </div>
    </Router>
    </UserContext.Provider>
  
  )
}

export default App