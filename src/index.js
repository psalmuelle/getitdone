import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './pages/LandingPage';
import DashBoard from './pages/Dashboard';
import HomeSection from "./components/Home";
import Notes from "./pages/Notes";
import DayPlanner from "./pages/DayPlanner";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<BrowserRouter>
   <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element= {
         <ProtectedRoute>
            <DashBoard/>
         </ProtectedRoute>
      }>
        <Route  index element={<HomeSection/>} />
        <Route path='notes' element={<Notes/>}/>
        <Route path='planner' element={<DayPlanner/>}/>
        <Route path='*' element={<HomeSection/>}/>
      </Route>
      <Route path='*' element={<LandingPage/>} />
   </Routes>

</BrowserRouter>
</Provider>

);

