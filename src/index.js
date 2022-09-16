import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './pages/LandingPage';
import DashBoard from './pages/Dashboard';
import DayPlanner from './pages/DayPlanner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './pages/Notes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<BrowserRouter>
  <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/home'element ={<DashBoard/>}/>
    <Route path='/planner'element ={<DayPlanner/>}/>
    <Route path='/notes' element={<Notes/>}/>
    <Route path='/logout' element={<LandingPage/>}/>
  </Routes>
</BrowserRouter>


);

