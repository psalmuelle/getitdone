import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './pages/LandingPage';
import DashBoard from './pages/Dashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<BrowserRouter>
  <Routes>
    <Route path='/landing-page'element ={<LandingPage/>}/>
    <Route path='*'element ={<DashBoard/>}/>
   
    
  </Routes>
</BrowserRouter>


);

