import React, {useEffect, useState} from "react";
import AddIcon from "../images/icons8-task.svg"
import { motion } from "framer-motion";
import { AddTodo } from "./Form";



export default function HomeSection(){
  const [addList, setAddList] = useState(false)
 
    return(
      <div className="">

        <button onClick={()=> setAddList(!addList)} className="flex justify-center items-center my-5 mx-auto text-white p-3 md:p-4 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded shadow-2xl w-44 ">Add A List </button>
        {
          addList && (
            <div className="fixed top-0 flex justify-center items-center h-screen  w-screen backdrop-blur-2xl bg-black/40 ">
              <div className="bg-indigo-500 rounded-xl w-11/12 h-4/5 overflow-scroll relative shadow-lg shadow-black max-w-2xl">

                <button onClick={()=>setAddList(!addList)} className="bg-black/30 flex items-center justify-center absolute top-6 right-6 text-white text-4xl w-10 h-10 rounded-full active:bg-black/70 shadow-lg shadow-slate-500 ">&times;</button>
              
              <AddTodo/>
            

              </div>
            </div>
          )
        }
        <section className="">
          <img/>
          <h1>Project Name: Build My Portfolio</h1>
          <div>
          <p>Repeat <input type="checkbox" checked/></p>
          <p>Dealine: {"44 Days To Go"}</p>
          </div>
        
          <table>
            <tbody>
            <tr>
              <td><input type="checkbox" id="check"/></td>
              <td><label htmlFor="check">Complete the Header and the footer</label></td>
            </tr>
            <tr>
              <td><input  type="checkbox" id="check"/></td>
              <td><label htmlFor="check">Complete the Header and the footer</label></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="check"/></td>
              <td><label htmlFor="check">Complete the Header and the footer</label></td>
            </tr>
            <tr>
              <td><input type="checkbox" id="check"/></td>
              <td><label htmlFor="check">Complete the Header and the footer</label></td>
            </tr>
            </tbody>
          </table>
          <div>
            <p>You are {"80%"} Done with the Task</p>
            <div>O</div>
          </div>
        </section>

     

    </div>
    )
}