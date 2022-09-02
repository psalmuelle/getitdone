import { motion } from "framer-motion";
import React, { useState, useEffect} from "react";
import { Register, Login, ContactMe } from "../../components/Form";
import SlickLogo from "../../images/slick.svg";
import feature2 from "../../images/feat2.jpg";
import feature1 from "../../images/feature1.jpg";
import feature3 from "../../images/feat3.jpg";
import HeroImg from "../../images/3d-flame-man.png";

const LandingPage = () => {


const [menu, setMenu] = useState(false)
 useEffect(()=>{
  document.title = "slick--Landing-Page"
 })
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
          <button className="sm:hidden w-11 flex justify-center items-center" onClick={()=>{setMenu(!menu)}} > 
          <img src={menu ? "https://img.icons8.com/windows/32/000000/delete-sign.png" : "https://img.icons8.com/sf-regular/48/000000/menu.png"} alt="hamburger"/>
          </button>

        </section>
        {
          menu &&
          ( 
            <section className="bg-white py-4 border-t">
               <ul className="flex justify-center items-center list-none  px-1 flex-col   gap-4 text-slate-800">
            <li><a href="#">Features</a></li>
            <li><a href="#">Demo</a></li>
            <li><a href="#">Contact me</a></li>
            <li className="text-lg">Login</li>
            <li className="text-lg">Sign-up</li>
            </ul>
            </section>
          )
        }
        <section className="flex flex-wrap justify-center items-center gap-8 w-full my-8 pb-4">
      <h1 className=" font-serif text-4xl md:text-6xl font-bold text-center mt-10 max-w-xl text-slate-50 p-4">
        A Simple Project and Time Management App For Tech Noobies
      </h1>
      <img src={HeroImg} className= ""/>
        </section>
      </header>

      <main className="p-4 ">
     
        <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 ">Features</h2>
          <section className="flex shadow rounded flex-wrap items-center justify-center p-4 py-6 my-10 bg-white gap-8 lg:gap-16">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Project Management</h2>
            <p className="mt-10 max-w-md mb-8">You can manage and keep track of your mini projects. Slick app helps you keep track of your portfolio projects.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer">Get Started</button>
            </div>
            <img src={feature1} className="block w-full  max-w-xs "/>
          </section>

          <section className="flex shadow flex-row-reverse rounded flex-wrap items-center  justify-center p-4 py-6 my-10 bg-white gap-8 lg:gap-16">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Keep Your Ideas in One Place</h2>
            <p className="mt-10 max-w-md mb-8">Write about your thoughts or ideas and come back to check it out anytime. You can keep log of future ideas for your projects on this app.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer">Sign-up</button>
            </div>
            <img src={feature2} className="block w-full max-w-sm  "/>
          </section>

          <section className="flex shadow rounded flex-wrap items-center justify-center p-4 my-10 bg-white gap-8 lg:gap-16 py-6">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Daily Todo List</h2>
            <p className="mt-10 max-w-md mb-8">This webapp comes with a simple and easy to track todo list. Daily todo automatically expires after 24 hours. Your list doesn't have to get messy!</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer">Join now</button>
            </div>
            <img src={feature3} className="block w-full max-w-sm rounded "/>
          </section>

          <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 ">Testimonies</h2>
         <section>
          <div className="text-center p-4 bg-white shadow max-w-md">
            <p>"Slick app makes it easier for me to get started with my projects. I can see deadline of my project which makes me work towards it."</p>
            <div><img alt="testimonial image" src=""/> Erinle Samuel | <span>Fullstack</span> </div>

          </div> 
         </section>

          <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 ">Contact Developer</h2>
          <p className="p-4 text-center text-black mt-4">My name is <span>Sam</span>, you can send me a message. Feebacks and recommendations are welcome!</p>
          <section >
            <ContactMe/>
          </section>
      </main>

      <footer className="bg-purple-900 mt-10">
<div className="flex  justify-center items-center gap-4 md:gap-6 pt-4 pb-4">

<a href="https://twitter.com/erinle_sam" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter" className="block invert w-8 md:w-10 "/></a>
<a href="https://www.linkedin.com/in/erinle-samuel/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/linkedin-circled--v1.png" className="block invert w-8 md:w-10 " alt="linkedin"/></a>

<a href="https://github.com/psalmuelle" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios/50/000000/github--v1.png" className="block invert w-8 md:w-10 " alt="github"/></a>

</div>
<p className="text-center text-white ">&copy; {new Date().getFullYear()} Erinle Samuel</p>
      </footer>
    </div>
  );
};

export default LandingPage;

