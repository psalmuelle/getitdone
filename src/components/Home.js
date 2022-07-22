import React, {useEffect, useState} from "react";
import AddIcon from "../images/icons8-task.svg"
import Close from "../images/icons8-close.svg"
import RepeatIcon from "../images/icons8-ok.svg"
import NoRepeatIcon from "../images/icons8-cancel.svg"
import { motion } from "framer-motion";
import { AddTodo } from "./Form";



export default function HomeSection(){
  const [addList, setAddList] = useState(false)
 
    return(
      <div className="">

        <button onClick={()=> setAddList(!addList)} className="flex justify-center items-center my-5 mx-auto text-white p-3 md:p-4 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded shadow-2xl w-44 ">Add A List <img className="h-8 pl-2" src={AddIcon}/></button>
        {
          addList && (
            <div  className="fixed top-0 flex justify-center items-center h-screen  w-screen backdrop-blur-2xl bg-black/40 ">
              <div className="bg-slate-500 rounded-xl w-11/12 h-4/5 overflow-scroll flex justify-center items-center relative shadow-lg shadow-black max-w-2xl ">

                <button onClick={()=>setAddList(!addList)} className="bg-slate-600/75 flex items-center justify-center absolute top-6 right-6 text-white text-4xl w-10 h-10 rounded-full active:bg-slate-600/70 shadow-lg shadow-slate-500 "><img src={Close} alt="close" className="w-5"/></button>
              
              <AddTodo/>
            

              </div>
            </div>
          )
      
        }
        <hr className="h-1  border-black/60"/>

        <div className="bg-black/5 p-4 flex justify-center items-center md:flex-row flex-wrap gap-20 md:gap-28">

        <section className="bg-white/60 text-slate-900 rounded  shadow-md shadow-black/70 w- w- w-96">
          <h1 className="bg-indigo-500 rounded-tr rounded-tl h-12 md:h-14  flex items-center justify-center text-lg text-white">Build My Portfolio</h1>
          <div className="mx-5  flex justify-between my-6">
          <p>Repeat <img className="inline-block ml-1 w-6" alt="Repeat-icon" src={RepeatIcon} /></p>
          <p className=""><span className="text-slate-500">Deadline:</span> {"44 Days To Go"}</p>
          </div>
        
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" defaultChecked id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer and also make them in a circle plus make sure that that man did not make his way</label>
         </div>
        <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input defaultChecked type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>



          <div className="flex p-5 bg-">
            <p className="font-mono text-black ">You are <span className="text-xl text--600 font-extrabold">{"80%"}</span> Done with the Task</p>
          </div>

        </section>

        <section className="bg-white/60 text-slate-900 rounded  shadow-md shadow-black/70 w- w- w-96">
          <h1 className="bg-indigo-500 rounded-tr rounded-tl h-12 md:h-14  flex items-center justify-center text-lg text-white">Build My Portfolio</h1>
          <div className="mx-5  flex justify-between my-6">
          <p>Repeat <img className="inline-block ml-1 w-6" alt="Repeat-icon" src={RepeatIcon} /></p>
          <p className=""><span className="text-slate-500">Deadline:</span> {"44 Days To Go"}</p>
          </div>
        
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" defaultChecked id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer and also make them in a circle plus make sure that that man did not make his way</label>
         </div>
        <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input defaultChecked type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>



          <div className="flex p-5 bg-">
            <p className="font-mono text-black ">You are <span className="text-xl text--600 font-extrabold">{"80%"}</span> Done with the Task</p>
          </div>

        </section>



        <section className="bg-white/60 text-slate-900 rounded  shadow-md shadow-black/70 w- w- w-96">
          <h1 className="bg-indigo-500 rounded-tr rounded-tl h-12 md:h-14  flex items-center justify-center text-lg text-white">Build My Portfolio</h1>
          <div className="mx-5  flex justify-between my-6">
          <p>Repeat <img className="inline-block ml-1 w-6" alt="Repeat-icon" src={NoRepeatIcon} /></p>
          <p className=""><span className="text-slate-500">Deadline:</span> {"44 Days To Go"}</p>
          </div>
        
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" defaultChecked id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer and also make them in a circle plus make sure that that man did not make his way</label>
         </div>
        <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input defaultChecked type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>



          <div className="flex p-5 bg-">
            <p className="font-mono text-black ">You are <span className="text-xl text--600 font-extrabold">{"80%"}</span> Done with the Task</p>
          </div>

        </section>



        <section className="bg-white/60 text-slate-900 rounded  shadow-md shadow-black/70 w- w- w-96">
          <h1 className="bg-indigo-500 rounded-tr rounded-tl h-12 md:h-14  flex items-center justify-center text-lg text-white">Build My Portfolio</h1>
          <div className="mx-5  flex justify-between my-6">
          <p>Repeat <img className="inline-block ml-1 w-6" alt="Repeat-icon" src={RepeatIcon} /></p>
          <p className=""><span className="text-slate-500">Deadline:</span> {"44 Days To Go"}</p>
          </div>
        
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" defaultChecked id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer and also make them in a circle plus make sure that that man did not make his way</label>
         </div>
        <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input defaultChecked type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>



          <div className="flex p-5 bg-">
            <p className="font-mono text-black ">You are <span className="text-xl text--600 font-extrabold">{"80%"}</span> Done with the Task</p>
          </div>

        </section>



        <section className="bg-white/60 text-slate-900 rounded  shadow-md shadow-black/70 w- w- w-96">
          <h1 className="bg-indigo-500 rounded-tr rounded-tl h-12 md:h-14  flex items-center justify-center text-lg text-white">Build My Portfolio</h1>
          <div className="mx-5  flex justify-between my-6">
          <p>Repeat <img className="inline-block ml-1 w-6" alt="Repeat-icon" src={NoRepeatIcon} /></p>
          <p className=""><span className="text-slate-500">Deadline:</span> {"44 Days To Go"}</p>
          </div>
        
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" defaultChecked id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer and also make them in a circle plus make sure that that man did not make his way</label>
         </div>
        <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input defaultChecked type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>



          <div className="flex p-5 bg-">
            <p className="font-mono text-black ">You are <span className="text-xl text--600 font-extrabold">{"80%"}</span> Done with the Task</p>
          </div>

        </section>



        <section className="bg-white/60 text-slate-900 rounded  shadow-md shadow-black/70 w- w- w-96">
          <h1 className="bg-indigo-500 rounded-tr rounded-tl h-12 md:h-14  flex items-center justify-center text-lg text-white">Build My Portfolio</h1>
          <div className="mx-5  flex justify-between my-6">
          <p>Repeat <img className="inline-block ml-1 w-6" alt="Repeat-icon" src={RepeatIcon} /></p>
          <p className=""><span className="text-slate-500">Deadline:</span> {"44 Days To Go"}</p>
          </div>
        
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" defaultChecked id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer and also make them in a circle plus make sure that that man did not make his way</label>
         </div>
        <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input defaultChecked type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="line-through">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>
         <hr/>
         <div className="flex justify-start items-center px-5 gap-5 py-4">
         <input type="checkbox" id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
             <label htmlFor="check" className="">Complete the Header and the footer</label>
         </div>



          <div className="flex p-5 bg-">
            <p className="font-mono text-black ">You are <span className="text-xl text--600 font-extrabold">{"80%"}</span> Done with the Task</p>
          </div>

        </section>



      
     </div>

    </div>
    )
}