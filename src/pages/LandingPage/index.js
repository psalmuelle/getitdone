import { motion } from "framer-motion";
import React, { useState } from "react";
import { Register, Login, ContactMe } from "../../components/Form";
import SlickLogo from "../../images/slick.svg";
import feature2 from "../../images/feat2.jpg";
import feature1 from "../../images/feature1.jpg";
import feature3 from "../../images/feat3.jpg";
import HeroImg from "../../images/3d-flame-man.png";

const LandingPage = () => {
  return (
    <div className='bg-slate-100/90'>
      <header className='bg-purple-900 w-full '>
        <section className='w-full px-4 bg-white flex  justify-between gap-4'>
          <div className=' w-20 md:w-24 mt-3'>
            <img src={SlickLogo} alt='Home-icon' className='block  ' />
          </div>
          <ul className="lg:flex justify-center items-center list-none  px-1 hidden lg:gap-20 text-slate-800 mr-4">
            <li><a href="#">Features</a></li>
            <li><a href="#">Demo</a></li>
            <li><a href="#">Contact me</a></li>
          </ul>
          <ul className="sm:flex justify-center items-center list-none  px-1 hidden sm:gap-16 text-slate-800 mr-4" >
          <li>Login</li>
            <li className="py-3 border-slate-500 px-10 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer">Sign-up</li>
          </ul>
          {/* <div>
          <img src="https://img.icons8.com/sf-regular/48/000000/menu.png"/>
          <img src="https://img.icons8.com/windows/32/000000/delete-sign.png" className="w-10"/>
          </div> */}
        </section>
        <section className="flex flex-wrap justify-center items-center gap-8 w-full my-8 pb-4">
      <h1 className=" font-serif text-4xl md:text-6xl font-bold text-center mt-10 max-w-xl text-slate-50 p-4">
        A Simple Project and Time Management App For Tech Noobies
      </h1>
      <img src={HeroImg} className= ""/>
        </section>
      </header>

      <main className="p-4 ">
     
        <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 ">Features</h2>
          <section className="flex shadow rounded flex-wrap items-center justify-center p-4 my-10 bg-white gap-8 lg:gap-16">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Project Management</h2>
            <p className="mt-10 max-w-md mb-8">You can manage and keep track of your mini projects. Slick app helps you keep track of your portfolio projects.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer">Sign-up</button>
            </div>
            <img src={feature1} className="block w-full  max-w-xs "/>
          </section>

          <section className="flex shadow flex-row-reverse rounded flex-wrap items-center  justify-center p-4 my-10 bg-white gap-8 lg:gap-16">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Project Management</h2>
            <p className="mt-10 max-w-md mb-8">You can manage and keep track of your mini projects. Slick app helps you keep track of your portfolio projects.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer">Sign-up</button>
            </div>
            <img src={feature2} className="block w-full max-w-sm  "/>
          </section>

          <section className="flex shadow rounded flex-wrap items-center justify-center p-4 my-10 bg-white gap-8 lg:gap-16 py-8">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Project Management</h2>
            <p className="mt-10 max-w-md mb-8">You can manage and keep track of your mini projects. Slick app helps you keep track of your portfolio projects.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer">Sign-up</button>
            </div>
            <img src={feature3} className="block w-full max-w-sm rounded "/>
          </section>

          <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 ">How To Get Started</h2>
         

          <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 ">Contact Developer</h2>
          <p className="p-4 text-center text-black mt-4">My name is <span>Sam</span>. You can send me a message, feebacks or recommendations are welcome!</p>
          <section>
            <ContactMe/>
          </section>
      </main>

      <footer>

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

{
  /* <section className="md:w-1/2">
<div className="text-2xl font-bold md:text-3xl text-center mb-6">
Register To Start Using  <span className=" text-2xl text-indigo-500 font-bold md:text-3xl ">Sl<span className="font-sans font-medium text-black ">i</span>ck</span>
    {
        // Login To Your Dashboard
    }
</div>
<div className="m-auto max-w-sm ">
<Login/>
    </div>
    </section> */
}

// <header className="flex justify-between h-22 p-4 pt-6 pb-1 items-center sticky  gap-20  top-0">
//     <div className="flex flex-col justify-center items-stretch -mt-5 -ml-4 md:ml-0 md:mt-">
//         <img src={SlickLogo} alt="Home-icon" className="block  "/>
//     </div>

//     <div className="flex md:w-72  w-60  justify-between items-center  ">

//     <button></button>

//         <button className="py-2 px-6 md:px-10 rounded-lg  md:text-lg">Login</button>
//         <button className=" py-2 px-6 md:px-10 rounded-lg  md:text-lg">Sign Up</button>
//     </div>
// </header>
