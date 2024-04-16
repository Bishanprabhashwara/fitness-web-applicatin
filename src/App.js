import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Pages/Login/Login';
import Selection from './Pages/Selection/Selection';
import Running from './Pages/Running';
import Register from './Pages/Register/Register';
import Navybar from './component/Navigationbar/Navybar';
import ShowuserDetail from './Pages/Showuserdetail/ShowuserDeatail';
import ProductDetails from './Pages/ProductDetails';

import MyComponent from './Pages/DisplayBMI/DisplatBMI';
import Pro from './Pages/ProductDetails';
import UserDetail from './Pages/Showuserdetail/ShowuserDeatail';
import ExerciseList from './Pages/Exercise/ExerciseList';
import ExerciseeqpList from './Pages/Exercise/ExerciseeqList';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import CreditCardForm from './Pages/SPayment/SPayment';
import SaveCreditCardForm from './Pages/SPayment/Savecard';
import SaveCardForm from './Pages/SPayment/Savecard';
import Home from './Pages/Home/Home';
import Header from './component/Header/Header';
import Weather from './component/Weather/Weather';





function NotFound() {
  return <h1>404 - Not Found</h1>;
}

function App() {
  return (
    <>
    <div>
      <Header/>
     
    <Router>
      <Routes>
      <Route path="/home" element={<Home/>} />
        <Route path="/running" element={<Running />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/selection" element={<Selection />} />
        <Route path="/register" element={<Register />} />      
        <Route path="/chatbot" element={<Register />} />
        <Route path="/userdetails" element={<UserDetail />} /> 
        <Route path="/exercies" element={<ExerciseList />} />
        <Route path="/exercieseqp" element={<ExerciseeqpList />} />
        <Route path="/bmi" element={<UserDetail />} />
        <Route path="/update" element={<UpdateUser/>} />
        <Route path="/payment" element={<CreditCardForm/>} />
        <Route path="/savecard" element={<SaveCardForm/>} />
        
      </Routes>
    </Router>
    </div>
   
    </>
    
  );
}

export default App;
