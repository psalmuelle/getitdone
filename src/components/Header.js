import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import SlickLogo from "../images/slick.svg";
import NoteIcon from "../images/icons8-note.svg"
import ClockIcon from "../images/icons8-clock.svg"
import SignoutIcon from "../images/icons8-sign-out.svg"



export default function Header (){


    return (
     
<header className="shadow-lg flex pt-1 justify-between md:justify-around px-4 items-center gap-16  bg-slate-50 sticky top-0">

          <NavLink to="/">
        <div className="flex flex-col justify-center items-stretch -ml-4 md:ml-0 " >

            <img src={SlickLogo} alt="Home-icon" className="block  "/>
        </div>
          </NavLink>



      <div className="flex items-center justify-between  max-w-xl text-slate-800 w-4/5 ">
       

        

          <NavLink to="/clock">
        <div   className="flex-col justify-center items-center">
        <img src={ClockIcon} alt="clock-icon" className="w-8 block -mb-px"/>
        <p className="">Clock</p>
        </div>
          </NavLink>

       
          <NavLink to="/notes">
        <div className="flex flex-col justify-center items-center ">

        <img src={NoteIcon} alt="note-icon" className="w-8 block -mb-px"/>
        <p className="">Notes</p>
        </div>
          </NavLink>

          <NavLink to="/logout">
        <div className="flex flex-col justify-center items-center ">

        <img src={SignoutIcon} alt="logout-icon" className="w-8 block -mb-px"/>
        <p className="">Logout</p>
        </div>
          </NavLink>
      </div>

    </header>
    
    )
    
}
