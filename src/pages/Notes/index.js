import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import { AddNotes } from "../../components/Form";
import Note from "../../components/Note";
import TodoService from "../../services/user.service"

export default function Notes(){
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  
    useEffect(
        ()=>{
          document.title= "Slick | notes"
          TodoService.getNote()
          .then(res =>{ 
             setNotes((notes)=> [...notes, res.data] )   
             setLoading(false)
           
          })
          .catch((err)=> console.log(err))
        },[]
        )
        
        console.log(notes)

    return(
        <div className="bg-black/5">
        <h1 className=" text-lg italic text-center py-8 text-indigo-800 underline">Keep Your Notes/Ideas Here!</h1>
         
        
        <div className=" flex items-center justify-center  bg-white/50 mb-4 px-4 py-4">
        {
  loading && (
     <motion.div initial={{transform: "rotate(0deg"}} animate={{transform: "rotate(360deg"}} transition={{repeat: Infinity, duration: 1}} className="w-10 h-10 rounded-full border-4 border-t-violet-600 mx-auto  "> 
     </motion.div>
  )
}
       {
        notes.map((note, i)=>{
       return (
         
      
       <ul className="flex flex-col gap-10 justify-center items-center lg:grid lg:grid-cols-2">
       { note.map(({title, note, created_on, id},i)=>{ 
        const date = new Date(created_on).toDateString()
              
           return (
    
              <Note title = {title} note= {note} created_on={date} key={created_on}/>
              
              )
           })}
            </ul>
       )
     
        })
       }
          
        </div>
        <section className="my-10 shadow" >
           <AddNotes/>
        </section>

 
        <div>

            </div>
        </div>
    )
}