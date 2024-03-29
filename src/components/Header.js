import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import SlickLogo from "../images/slick.svg";
import NoteIcon from "../images/icons8-note.svg"
import ClockIcon from "../images/icons8-planner-50.png"
import SignoutIcon from "../images/icons8-sign-out.svg"
import HomeIcon from "../images/home.png"
import AuthService from "../services/auth.service"
import { useDispatch } from "react-redux";
import { removeAuthentication } from "../redux/userSlice";


export default function Header (){
const [menu, setMenu]= useState(false)
const dispatch = useDispatch()
const navigate = useNavigate()

const handleLogout=()=>{
AuthService.logout().then(()=>{
dispatch(removeAuthentication()) && navigate("/")

})
}
    return (
     
<header className="shadow-lg flex pt-1 justify-between md:px-20 lg:px-4 lg:justify-around px-4 items-center gap-16  bg-slate-50 sticky top-0 z-40">

          <NavLink to="/home">
        <div onClick={()=> setMenu(false)} className="flex flex-col justify-center items-stretch -ml-4 md:ml-0 " >

            <img src={SlickLogo} alt="Home-icon" className="block  "/>
        </div>
          </NavLink>



      <motion.div initial= {{opacity:0.7}} animate={{opacity:1}} className=" items-center justify-between  max-w-xl text-slate-800 w-4/5 hidden lg:flex">
       

        

          <NavLink to="planner">
        <div  onClick={()=> setMenu(false)} className=" flex flex-col justify-center items-center 
        ">
        <img src={ClockIcon} alt="clock-icon" className="w-8 block mx-auto"/>
        <p className="">Day Planner</p>
        </div>
          </NavLink>

       
          <NavLink to="notes">
        <div onClick={()=> setMenu(false)} className="flex flex-col justify-center items-center ">

        <img src={NoteIcon} alt="note-icon" className="w-8 block -mb-px"/>
        <p className="">Notes</p>
        </div>
          </NavLink>

          
        <div onClick={()=> {setMenu(false)
       handleLogout()
      
        }} className="flex flex-col cursor-pointer justify-center items-center " >

        <img src={SignoutIcon} alt="logout-icon" className="w-8 block -mb-px"/>
        <p className="">Logout</p>
        </div>
          
      </motion.div>

         <motion.button whileHover={{scale:1.2}} whileTap={{scale:1.1}} className="lg:hidden w-11 flex justify-center items-center" onClick={()=>{ setMenu(!menu)}} > 
          <img src={menu ? "https://img.icons8.com/windows/32/000000/delete-sign.png" : "https://img.icons8.com/sf-regular/48/000000/menu.png"} alt="hamburger" className="w-8"/>
          </motion.button>
      <AnimatePresence>
          {
            
         menu &&
          ( 
            <motion.section
            initial={{y: "-100%",opacity:0.5}}
            animate={{y:"0", opacity:1}}
            exit= {{ opacity:0, y:-30}}
            
            className="bg-white py-6 border-t lg:hidden absolute w-full top-full right-0 gap-4 flex justify-center items-start  flex-col" style={{paddingLeft:"calc(50% - 4.2rem )"}}>


<NavLink to="/home">
          <div onClick={()=> setMenu(false)} className="flex gap-4  justify-center items-center " >

<img src={HomeIcon} alt="dashboard" className="w-6 block -mb-px"/>
<p className="">Home</p>
</div>
          </NavLink>
            
          <NavLink to="planner">
          <div onClick={()=> setMenu(false)} className="flex gap-4  justify-center items-center " >

<img src={ClockIcon} alt="note-icon" className="w-6 block -mb-px"/>
<p className="">Day Planner</p>
</div>
          </NavLink>

       
          <NavLink to="notes">
        <div onClick={()=> setMenu(false)} className="flex gap-4 justify-center items-center ">

        <img src={NoteIcon} alt="note-icon" className="w-6 block -mb-px"/>
        <p className="">Notes</p>
        </div>
          </NavLink>

          
        <div onClick={()=> {setMenu(false)
        handleLogout()
        }} className="flex cursor-pointer gap-4 justify-center items-center ">

        <img src={SignoutIcon} alt="logout-icon" className="w-6 block -mb-px"/>
        <p className="">Logout</p>
        </div>
         
            </motion.section>
          )
        }
          </AnimatePresence>

    </header>
    
    )
    
}
