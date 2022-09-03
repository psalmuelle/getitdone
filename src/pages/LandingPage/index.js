import { AnimatePresence,useAnimation, domAnimation, LazyMotion, motion,m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect} from "react";
import { Register, Login, ContactMe } from "../../components/Form";
import SlickLogo from "../../images/slick.svg";
import feature2 from "../../images/feat2.jpg";
import feature1 from "../../images/feature1.jpg";
import feature3 from "../../images/feat3.jpg";
import HeroImg from "../../images/3d-flame-man.png";
import samImg from "../../images/sam.jpg"
import { AnimatedTextCharacter, AnimatedTextWord } from "../../components/wayyTexts";




const LandingPage = () => {
const heroMsg = " A Simple Project and Time Management App For Tech Noobies"

const [popup, setPopup] = useState({
  login: false,
  signup: false,
  menu: false,
})
 useEffect(()=>{
  document.title = "slick--Landing-Page"
 })






  return (
    <div className='relative '>

{
  (popup.login || popup.signup) && (
      <div className="fixed top-0 right-0 w-screen h-screen   ">
        <div className="bg">
        <div>
     { popup.signup ? <Register/>: <Login/> }
        </div>
        </div>
      </div>
  )
}


 <motion.header animate={{position:"sticky", backdropFilter:"blur(15px)" , WebkitBackdropFilter: "blur(5px)" , top:0 }}        
        className='w-full  px-4 bg-unset flex  justify-between gap-4 '>
          <div className=' w-20 cursor-pointer  md:w-24 mt-3'>
            <img src={SlickLogo} alt='Home-icon' className='block  ' />
          </div>
          <ul className="lg:flex justify-center items-center list-none  px-1 hidden lg:gap-20 text-slate-800 mr-4">
            <li><a href="#">Features</a></li>
            <li><a href="#">Demo</a></li>
            <li><a href="#">Contact me</a></li>
          </ul>
          <ul className="sm:flex justify-center items-center list-none  px-1 hidden sm:gap-16 text-slate-800 mr-4" >
          <motion.li whileHover={{scale:1.2}} whileTap={{scale:1.1}} onClick={()=>{setPopup({...popup,
          login: !popup.login
          })}} className="cursor-pointer">Login</motion.li>
            <motion.li whileHover={{scale:1.1}} whileTap={{scale:1.05}} className="py-3 border-slate-500 px-10 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer" 
            onClick={()=>{ setPopup({...popup, signup:!popup.signup})}}>Sign-up</motion.li>
          </ul>
          <motion.button whileHover={{scale:1.2}} whileTap={{scale:1.1}} className="sm:hidden w-11 flex justify-center items-center" onClick={()=>{ setPopup({...popup, menu:!popup.menu})}} > 
          <img src={popup["menu"] ? "https://img.icons8.com/windows/32/000000/delete-sign.png" : "https://img.icons8.com/sf-regular/48/000000/menu.png"} alt="hamburger" className="w-8"/>
          </motion.button>
          
          <AnimatePresence>
          {
            
          popup.menu &&
          ( 
            <motion.section
            initial={{y: "-100%",opacity:0.5}}
            animate={{y:"0", opacity:1}}
            exit= {{ opacity:0, y:-40}}
            
            className="bg-white py-4 border-t sm:hidden absolute w-full top-full right-0">
               <ul className="flex justify-center items-center list-none  px-1 flex-col   gap-4 text-slate-800">
            <li><a href="#">Features</a></li>
            <li><a href="#">Demo</a></li>
            <li><a href="#">Contact me</a></li>
            <li className="text-lg" 
            onClick={()=>{ setPopup({...popup, login:!popup.login})}}>Login</li>
            <li className="text-lg" 
            onClick={()=>{ setPopup({...popup, signup:!popup.signup})}}>Sign-up</li>
            </ul>
            </motion.section>
          )
        }
          </AnimatePresence>


        </motion.header>
       
       <div className="bg-slate-200 ">

      
        <section className="flex flex-wrap justify-center items-center gap-8 w-full pt-8 mb-8 pb-4 bg-purple-900 ">
      <h1 className=" max-w-xl" aria-label={heroMsg}>
        <AnimatedTextWord text={heroMsg}>
        <AnimatedTextCharacter text={heroMsg}/>
      </AnimatedTextWord>
      </h1>
      <LazyMotion features={domAnimation}>
      <m.img animate={{opacity:1, y:0}} initial={{y:20}} src={HeroImg} className= ""/>
      </LazyMotion>
        </section>
      <div className="bg-slate-200 w-full h-24 -mt-32 md:hidden"></div>


      <main className="p-4 ">
     
        <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 ">Features</h2>
          <motion.section whileInView={{y:0, opacity:1}} initial={{y:60,opacity:0.7}} transition={{type:"spring", stiffness:100, delay:0.09}} className="flex shadow rounded flex-wrap items-center justify-center p-4 py-6 my-10 bg-white gap-8 lg:gap-16">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Project Management</h2>
            <p className="mt-10 max-w-md mb-8">You can manage and keep track of your mini projects. Slick app helps you keep track of your portfolio projects.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer" onClick={()=>{ setPopup({...popup, signup:!popup.signup})}}>Get Started</button>
            </div>
            <img src={feature1} className="block w-full  max-w-xs "/>
          </motion.section>

          <motion.section whileInView={{y:0, opacity:1}} initial={{y:50,opacity:0.7}} transition={{type:"spring", stiffness:100, delay:0.09}} className="flex shadow flex-row-reverse rounded flex-wrap items-center  justify-center p-4 py-6 my-10 bg-white gap-8 lg:gap-16">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Keep Your Ideas in One Place</h2>
            <p className="mt-10 max-w-md mb-8">Write about your thoughts or ideas and come back to check it out anytime. You can keep log of future ideas for your projects on this app.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer" onClick={()=>{ setPopup({...popup, signup:!popup.signup})}}>Sign-up</button>
            </div>
            <img src={feature2} className="block w-full max-w-sm  "/>
          </motion.section>

          <motion.section whileInView={{y:0, opacity:1}} initial={{y:40,opacity:0.7}} transition={{type:"spring", stiffness:100, delay:0.09}} className="flex shadow rounded flex-wrap items-center justify-center p-4 my-10 bg-white gap-8 lg:gap-16 py-6">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Daily Todo List</h2>
            <p className="mt-10 max-w-md mb-8">This webapp comes with a simple and easy to track todo list. Daily todo automatically expires after 24 hours. Your list doesn't have to get messy!</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer" onClick={()=>{ setPopup({...popup, signup:!popup.signup})}}>Join now</button>
            </div>
            <img src={feature3} className="block w-full max-w-sm rounded "/>
          </motion.section>


         
          <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 pt-5">Testimonies</h2>
         <section className="my-10 flex overflow-hidden gap-4  ">
          <div className="text-center p-4 bg-white shadow max-w-md">
            <blockquote className="italic text-black my-4 px-4">"Slick app makes it easier for me to get started with my projects. I can see deadline of my project which makes me work towards it."</blockquote>
            <div className="flex justify-center items-center gap-4 mt-8"><img alt="testimonial image" src={samImg} className ="w-14 rounded-full "/> Erinle Samuel <span className="text-slate-700">|</span><span className="text-slate-700">Fullstack</span> </div>

          </div> 
          <div className="text-center p-4 bg-white shadow max-w-md">
            <blockquote className="italic text-black my-4 px-4">"Slick app makes it easier for me to get started with my projects. I can see deadline of my project which makes me work towards it."</blockquote>
            <div className="flex justify-center items-center gap-4 mt-8"><img alt="testimonial image" src={samImg} className ="w-14 rounded-full "/> Erinle Samuel <span className="text-slate-700">|</span><span className="text-slate-700">Fullstack</span> </div>

          </div> 
          <div className="text-center p-4 bg-white shadow max-w-md">
            <blockquote className="italic text-black my-4 px-4">"Slick app makes it easier for me to get started with my projects. I can see deadline of my project which makes me work towards it."</blockquote>
            <div className="flex justify-center items-center gap-4 mt-8"><img alt="testimonial image" src={samImg} className ="w-14 rounded-full "/> Erinle Samuel <span className="text-slate-700">|</span><span className="text-slate-700">Fullstack</span> </div>

          </div> 
          <div className="text-center p-4 bg-white shadow max-w-md">
            <blockquote className="italic text-black my-4 px-4">"Slick app makes it easier for me to get started with my projects. I can see deadline of my project which makes me work towards it."</blockquote>
            <div className="flex justify-center items-center gap-4 mt-8"><img alt="testimonial image" src={samImg} className ="w-14 rounded-full "/> Erinle Samuel <span className="text-slate-700">|</span><span className="text-slate-700">Fullstack</span> </div>

          </div> 
         </section>
         
          <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 pt-10">Contact Developer</h2>
          <p className="p-4 text-center text-black mt-4">My name is <span>Sam</span>, you can send me a message. Feebacks and recommendations are welcome!</p>
          <section className="">
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
    </div>
  );
};

export default LandingPage;

