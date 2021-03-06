import { motion } from "framer-motion";
import React, { useState } from "react";
import { Register, Login } from "../../components/Form";
import SlickLogo from "../../images/slick.svg"
import HeroImg from "../../images/3d-flame-man.png"
import CheckImg from "../../images/check.png"
import HomeScreenshot from "../../images/task-list.png"



const LandingPage = () => {
  return (
   <div className=" m-0 p-0">
    <header className="flex justify-between h-22 p-4 pt-6 pb-1 items-center sticky bg-white gap-20  top-0">
        <div className="flex flex-col justify-center items-stretch -mt-5 -ml-4 md:ml-0 md:mt-">
            <img src={SlickLogo} alt="Home-icon" className="block  "/>
        </div>

        <div className="flex md:w-72  w-60  justify-between items-center  ">
            
            <button className="bg-blue-500 py-2 px-6 md:px-10 rounded-lg text-white md:text-lg">Login</button>
            <button className="bg-blue-500 py-2 px-6 md:px-10 rounded-lg text-white md:text-lg">Sign Up</button>
        </div>
    </header>


    <main className="  mt-10 md:mt-10 ">
        <div className="w-5/6 bg-white m-auto flex flex-col gap-28 p-px md:flex-row md:gap-0 pt-10 md:pt-8 ">
    <section className="md:w-1/2">
        
      <h1 className="p-4 mb-8 font-medium text-center text-4xl max-w-md md:max-w-lg m-auto md:pt-0 md:text-5xl">
      A Simple App To Plan <span className="text-indigo-500 ">Your Personal Projects </span> and <span className="text-indigo-500 ">Daily Routines</span> 
    </h1>
    <img src={HeroImg} alt="hero-img" className="w-10/12 md:w-96  block m-auto  "/>
     
    </section> 

    <section className="md:w-1/2">
<div className="text-2xl font-bold md:text-3xl text-center mb-6">
Register To Start Using  <span className=" text-2xl text-indigo-500 font-bold md:text-3xl ">Sl<span className="font-sans font-medium text-black ">i</span>ck</span>
    {
        // Login To Your Dashboard
    }
</div>
<div className="m-auto max-w-sm ">
<Register/>
    </div>
    </section>


</div>
<section className=" w-full mt-10 ">
    <div className="flex justify-center flex-col items-center gap-10 md:flex-row-reverse mt-10 md:mt-0">
        <img src={HomeScreenshot} alt="home-screenshot" className="block w-96 md:w-[450px]" />

        <ul className="px-2 list-none flex flex-col justify-center items-start  gap-4 py-4 w-fit  font-bold text-slate-900">
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> List your projects </li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> Create deadlines for your projects </li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> Get a list of Task for each project</li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> Mark Project as Done</li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> Track changes</li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/>Setup daily routines and time to do them</li>
            
        </ul>
    </div>
  
</section>

    </main>

    <footer className="bg-slate-600 text-white/80 text-center mt-5 p-2">
        Copyright &copy; 2022 || <a href="https://www.erinlesamuel.me " className="text-blue-500  underline font-bold hover:text-white">Erinle Samuel</a>
    </footer>
   </div>










  );
};

export default LandingPage;



/*
<button className="italic hover:border-transparent border hover:bg-black  bg-slate-100 hover:text-white px-4 py-px rounded-2xl">Login</button>

        <ul className="px-2 list-none flex flex-col justify-center items-start  gap-4 py-4 w-fit m-auto">
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> List your projects </li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> Create deadlines for your projects </li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> Get a list of Task for each project</li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> Mark Project as Done</li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/> Track changes</li>
            <li> <img src={CheckImg} className="w-7 inline-block pr-1" alt="checked"/>Setup daily routines and time to do them</li>
            
        </ul>
*/