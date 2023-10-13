import { AnimatePresence, motion, } from "framer-motion";
import React, { useState, useEffect} from "react";
import { Register, Login, ContactMe } from "../../components/Form";
import SlickLogo from "../../images/slick.svg";
import feature2 from "../../images/feat2.jpg";
import feature1 from "../../images/feature1.jpg";
import feature3 from "../../images/feat3.jpg";
import HeroImg from "../../images/3d-flame-man.png";
import { AnimatedTextCharacter, AnimatedTextWord } from "../../components/wayyTexts";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuthentication } from "../../redux/userSlice";
import AuthService from "../../services/auth.service"
import {GrClose} from 'react-icons/gr'




const LandingPage = () => {
const heroMsg = " A Simple Project and Time Management App For Tech Noobies"

const loggedIn = useSelector(state=>state.user.authenticated)
const navigate = useNavigate()
const dispatch = useDispatch()

const [popup, setPopup] = useState({
  login: false,
  signup: false,
  menu: false,
})


 useEffect(()=>{
  document.title = "Slick"


AuthService.getUser().then((res)=>{
  if (Object.keys(res.data).length >= 1){
    dispatch(checkAuthentication())
    }else{
      localStorage.clear()
    }
  })

 }, [])


 useEffect(()=>{
  if (loggedIn){
    return navigate("/home")
  }
 }, [loggedIn])


  return (
    <div className='relative ' >

{
  (popup.login || popup.signup) && (
      <div  className="fixed top-0 right-0 w-screen h-screen z-40 backdrop-blur">
        <div className="w-full h-full flex justify-center items-center bg-black/20 " >
          <div className="flex justify-center items-center h-fit backdrop-blur-lg p-4 rounded-lg relative">

          <div className="absolute -top-11 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full bg-white" onClick={()=>{ setPopup({...popup, signup:false, login:false})}}><GrClose color="red"/></div>

     { popup.signup ? <Register/>: <Login/> }
      
          </div>
       
        </div>
      </div>
  )
}


 <motion.header animate={{position:"sticky", backdropFilter:"blur(15px)" , WebkitBackdropFilter: "blur(5px)" , top:0 }}        
        className='w-full  px-12 bg-unset flex  justify-between gap-4 z-10'>
          <div className=' w-20 cursor-pointer  md:w-24 mt-3'>
            <img src={SlickLogo} alt='Home-icon' className='block  ' />
          </div>
          <ul className="lg:flex justify-center items-center list-none  px-1 hidden lg:gap-20 text-slate-800 mr-4">
            <li><a href="#features">Features</a></li>
            <li><a href="#demo">Demo</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
          <ul className="sm:flex justify-center items-center list-none  px-1 hidden sm:gap-16 text-slate-800 mr-4 font-bold" >
          <motion.li whileHover={{scale:1.15, opacity:0.8}} whileTap={{scale:1.1, opacity:0.7}} onClick={()=>{setPopup({...popup,
          login: !popup.login
          })}} className="cursor-pointer">Login</motion.li>
            <motion.li whileHover={{scale:1.1, opacity:0.8}} whileTap={{scale:1.05, opacity:0.8}} className="py-4  border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50  cursor-pointer" 
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
            <li onClick={()=>{ setPopup({...popup, menu:false})}}><a href="#features">Features</a></li>
            <li onClick={()=>{ setPopup({...popup, menu:false})}}><a href="#demo">Demo</a></li>
            <li onClick={()=>{ setPopup({...popup, menu:!popup.menu})}}><a href="#contact">Contact me</a></li>
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
       
       <div className=" ">

      
        <section className="flex flex-wrap justify-center items-center gap-8 w-full pt-8 mb-8 pb-4 bg-purple-900 ">
      <h1 className=" max-w-xl" aria-label={heroMsg}>
        <AnimatedTextWord text={heroMsg}>
        <AnimatedTextCharacter text={heroMsg}/>
      </AnimatedTextWord>
      </h1>
   
      <img animate={{opacity:1, y:0}} initial={{y:20}} src={HeroImg} className= "" alt="hero section"/>
    
        </section>
      <div className="border-none bg-slate-200 w-full h-24 -mt-32 md:hidden"></div>


      <main className="p-4 mt-10">
     
        <motion.div initial={{y:40}} whileInView={{y:0}} id="features"
      >
          <motion.section whileInView={{ y:0}} initial={{y:20}} className="flex shadow rounded flex-wrap items-center justify-center p-4 py-6 my-10 bg-white gap-8 lg:gap-16">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Project Management</h2>
            <p className="mt-10 max-w-md mb-8 leading-7">You can manage and keep track of your mini projects. Slick app helps you keep track of your portfolio projects.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded cursor-pointer" onClick={()=>{ setPopup({...popup, signup:!popup.signup})}}>Get Started</button>
            </div>
            <img src={feature1} className="block w-full  max-w-xs " alt="feature"/>
          </motion.section>

          <motion.section whileInView={{ y:0}} initial={{y:20}} className="flex shadow flex-row-reverse rounded flex-wrap items-center  justify-center p-4 py-6 my-10 bg-white gap-8 lg:gap-16">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Keep Your Ideas in One Place</h2>
            <p className="mt-10 max-w-md mb-8 leading-7">Write about your thoughts or ideas and come back to check it out anytime. You can keep log of future ideas for your projects on this app.</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded cursor-pointer" onClick={()=>{ setPopup({...popup, signup:!popup.signup})}}>Sign-up</button>
            </div>
            <img src={feature2} className="block w-full max-w-sm  " alt="feature"/>
          </motion.section>

          <motion.section whileInView={{ y:0}} initial={{y:20}} className="flex shadow rounded flex-wrap items-center justify-center p-4 my-10 bg-white gap-8 lg:gap-16 py-10">
            <div className="max-w-xl text-slate-900 ">
            <h2 className="font-bold text-xl ">Daily Todo List</h2>
            <p className="mt-10 max-w-md mb-8 leading-7">This webapp comes with a simple and easy to track todo list. Daily todo automatically expires after 24 hours. Your list doesn't have to get messy!</p>
            <button className="py-3 border-slate-500 px-12 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded cursor-pointer" onClick={()=>{ setPopup({...popup, signup:!popup.signup})}}>Join now</button>
            </div>
            <img src={feature3} className="block w-full max-w-sm rounded py-6" alt="feature"/>
          </motion.section>
          </motion.div>

      
          <h2 className="border-b-4 w-fit  border-indigo-900 mx-auto text-black/90 pt-10" id="contact">Contact Developer</h2>
          <p className="p-4 text-center text-black mt-4">My name is <span>Sam</span>, you can send me a message. Feebacks and recommendations are welcome!</p>
          <motion.section whileInView={{ opacity:1}} initial={{opacity:0.5}}  className="">
            <ContactMe/>
          </motion.section>
      </main>

      <footer className=" bg-gradient-to-b from-slate-500 to-slate-800 mt-10">
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

