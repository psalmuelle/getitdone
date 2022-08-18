import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header"
import {  Routes, Route } from "react-router-dom";
import HomeSection from "../../components/Home";
import Notes from "../Notes";
import DayPlanner from "../DayPlanner";


export default function DashBoard() {
 
  
  return (
    <div >
  <Header/>
<main className="">
  <div>
<Routes>
<Route path= "/" element={<HomeSection/>}/>
<Route path="/notes" element={<Notes/>}/>
<Route path="/planner" element={<DayPlanner/>}/>
<Route path ="*" element={<HomeSection/>}/>
</Routes>

  </div>

</main>



    </div>
  );
}