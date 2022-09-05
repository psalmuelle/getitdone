import React, {useEffect, useState} from "react";
import AddIcon from "../images/icons8-task.svg"

import RepeatIcon from "../images/icons8-ok.svg"
import { AnimatePresence, motion } from "framer-motion";
import { AddTodo, AddTodoList } from "./Form";
import DraggableTasks from "./DraggableTasks";


//Tests
const myTasks =[
  {
  "id": "1",
  "text": "Complete the header and footer of my portfolio website",
  "taskstatus": "completed"
},
{
  "id": "2",
  "text": "Complete the header and footer of my portfolio website",
  "taskstatus": "completed"
},
{
  "id": "3",
  "text": "Complete the header and footer of my portfolio website",
  "taskstatus": "not completed"
},
{
  "id": "4",
  "text": "Complete the header and footer of my portfolio website",
  "taskstatus": "completed"
},

]



export default function HomeSection(){
  const [addList, setAddList] = useState(false)
  const [lists, updateLists] = useState({"finalist":[]})
  const handleOnDragEnd = (result)=>{
    if(!result.destination) return;
    const items = Array.from(lists);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateLists(items)
  }
 
    return(
      <div >

        <button onClick={()=> setAddList(!addList)} className="flex justify-center items-center my-5 mx-auto text-white p-3 md:p-4 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded shadow-2xl w-44 ">Add A List <img className="h-8 pl-2" src={AddIcon}/></button>
     
        <AnimatePresence>
{
  addList && (
      <motion.div initial={{opacity:0}} animate={{opacity:1 }} exit={{opacity:0}} className="fixed top-0 right-0 w-screen h-screen z-40 backdrop-blur" onClick={()=>{
        setAddList(!addList)
      }}>
        <div className="w-full h-full flex justify-center items-center bg-black/20 " >
          <div className="flex justify-center items-center h-fit backdrop-blur-lg p-4 rounded-lg relative" onClick={e=>e.stopPropagation()}>

          <div className="absolute -top-11 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full text-3xl text-red-600 bg-white" onClick={()=>{setAddList(false)}}>&times;</div>

     <AddTodo/>
      
          </div>
       
        </div>
      </motion.div>
  )
}
</AnimatePresence>
        <hr className="h-1  border-black/60"/>

        <div className="bg-black/5 p-4 pb-16 flex justify-center items-center md:flex-row flex-wrap gap-20 md:gap-28">
       

        <section className="bg-white/60 text-slate-900 rounded relative shadow-md shadow-black/70   w-96">
          <h1 className="bg-indigo-500 rounded-tr rounded-tl h-12 md:h-14  flex items-center justify-center text-lg text-white">Build My Portfolio</h1>
          <div className="mx-5 mt-5 text-slate-700 text-center ">
            This is a description of the project that I am workin on. I am working on a project that will help me build my Portfolio.
          </div>
          <hr className="mt-4"/>
          <div className="mx-5  flex justify-between my-6">
          <p className="flex gap-1">Inspired<img className="inline-block ml-1 w-6" alt="Repeat-icon" src={RepeatIcon} /></p>
          <p className=""><span className="text-slate-500">Deadline:</span> {"44 Days To Go"}</p>
          </div>
        
       <DraggableTasks myTasks={myTasks} handleOnDragEnd= {handleOnDragEnd} />
     
         
          <div className="flex p-5 pb-2">
            <p className="font-mono text-black text-center">Trust yourself that you can do it and get it</p>
          </div>


         <AddTodoList/>

        </section>



      
     </div>

    </div>
    )
}

