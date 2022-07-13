import React, { useState } from "react";
import { motion } from "framer-motion";
import SlickLogo from "../images/slick-logo.svg";
import HomeIcon from "../images/icons8-home.svg"
import CompletedTaskIcon from "../images/icons8-tick-box.svg"
import ClockIcon from "../images/icons8-clock.svg"
import SignoutIcon from "../images/icons8-sign-out.svg"

export default function Header (){
    return (
<header className="shadow-lg flex pt-1 justify-around px-4 items-center gap-5 bg-slate-50 sticky top-0">
    <h1 className="m-auto mx-0 pt-6  md:flex justify-center items-center w-fit hidden"> <div className="relative  w-fit">
            <img src={SlickLogo} alt="logo" className="block w-6 md:w-7 absolute rotate-180 "style={{top:"-55%", right:"32.5%"}}/>
            <span className="block text-2xl text-indigo-500 font-bold md:text-3xl ">Sl<span className="font-sans  font-medium text-black">i</span>ck</span>
            </div> 
            </h1>

      <div className="flex items-center justify-between w-full max-w-2xl ">
        <div className="flex flex-col justify-center items-center ">
        <img src={HomeIcon} alt="Home-icon" className="w-8 block -mb-px"/>
        <p className="">Home</p>
        </div>

        <div className="flex flex-col justify-center items-center ">
        <img src={CompletedTaskIcon} alt="completed-task-icon" className="w-8 block -mb-px"/>
        <p className="text-center">Completed Task</p>
        </div>

        <div className="flex flex-col justify-center items-center ">
        <img src={ClockIcon} alt="completed-task-icon" className="w-8 block -mb-px"/>
        <p className="">Clock</p>
        </div>

        <div className="flex flex-col justify-center items-center ">
        <img src={SignoutIcon} alt="completed-task-icon" className="w-8 block -mb-px"/>
        <p className="">Logout</p>
        </div>
      </div>

    </header>
    )
}
