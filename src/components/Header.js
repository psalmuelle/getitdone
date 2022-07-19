import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SlickLogo from "../images/slick.svg";

import NoteIcon from "../images/icons8-note.svg"
import ClockIcon from "../images/icons8-clock.svg"
import SignoutIcon from "../images/icons8-sign-out.svg"



export default function Header (){
    return (
     
<header className="shadow-lg flex pt-1 justify-around px-4 items-center gap-20  bg-slate-50 sticky top-0">

        <div className="flex flex-col justify-center items-stretch  -ml-4 md:ml-0 ">
          <Link to="/">

            <img src={SlickLogo} alt="Home-icon" className="block  "/>
          </Link>
        </div>



      <div className="flex items-center justify-between  max-w-2xl text-slate-800 w-4/5 w-">
       

        

        <div className="flex flex-col justify-center items-center ">
          <Link to="/clock">
        <img src={ClockIcon} alt="clock-icon" className="w-8 block -mb-px"/>
        <p className="">Clock</p>
          </Link>
        </div>

       
        <div className="flex flex-col justify-center items-center ">
          <Link to="/notes">

        <img src={NoteIcon} alt="note-icon" className="w-8 block -mb-px"/>
        <p className="">Notes</p>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <Link to="/logout">

        <img src={SignoutIcon} alt="logout-icon" className="w-8 block -mb-px"/>
        <p className="">Logout</p>
          </Link>
        </div>
      </div>

    </header>
    
    )
    
}
