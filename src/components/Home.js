import React, { useEffect, useState } from "react";
import AddIcon from "../images/icons8-task.svg";

import RepeatIcon from "../images/icons8-ok.svg";
import { AnimatePresence, motion } from "framer-motion";
import { AddTodo, AddTodoList } from "./Form";
import TodoService from '../services/user.service'



export default function HomeSection() {
  const [addList, setAddList] = useState(false);
  const [todo, setTodo] = useState([])
  const [loading, setLoading] = useState(true)
  const [todoLists, setTodoLists] = useState([])

  useEffect(() => {
    document.title = "Slick | home";
    TodoService.getTodo()
    .then((res)=>{
      setTodo((todo)=> [...todo, res.data]) 
      setLoading(false)
    })
    TodoService.getTodoList().then((res)=>{
      setTodoLists((prev)=>[...prev, res.data])
    })
    
  }, []);

  return (
    <div>
      <button
        onClick={() => setAddList(!addList)}
        className='flex justify-center items-center my-5 mx-auto text-white p-3 md:p-4 text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded shadow-2xl w-44 '>
        Add A List <img className='h-8 pl-2' src={AddIcon} />
      </button>

      <AnimatePresence>
        {addList && (
          <motion.div
            initial={{ display: "none" }}
            animate={{ display: "block" }}
            exit={{ opacity: 0 }}
            className='fixed top-0 right-0 w-screen h-screen z-40 backdrop-blur'
            onClick={() => {
              setAddList(!addList);
            }}>
            <div className='w-full h-full flex justify-center items-center bg-black/20 '>
              <div
                className='flex justify-center items-center h-fit backdrop-blur-lg p-4 rounded-lg relative'
                onClick={(e) => e.stopPropagation()}>
                <div
                  className='absolute -top-11 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full text-3xl text-red-600 bg-white'
                  onClick={() => {
                    setAddList(false);
                  }}>
                  &times;
                </div>

                <AddTodo />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <hr className='h-1  border-black/60' />

      <div className='bg-black/5 p-4 pb-16 flex justify-center items-center md:flex-row flex-wrap gap-20 md:gap-28'>


{
  loading && (
    <motion.div initial={{transform: "rotate(0deg"}} animate={{transform: "rotate(360deg"}} transition={{repeat: Infinity, duration: 1}} className="w-10 h-10 rounded-full border-4 border-t-violet-600 mx-auto  "> 
    </motion.div>
 )
}

{
  todo.map((todos, i)=> {
    
    return (
      
      todos.map(({description, title, deadline, id}, i)=> {
        const dDay =Math.floor( Date.parse(deadline) - new Date().getTime())
          const daysRemaining = Math.floor(dDay / 86400000)
          const todoid = id
          return (
            <section className='bg-white/60 text-slate-900 rounded relative shadow-md shadow-black/70   w-96' key={i}>
            <h1 className='bg-indigo-500 rounded-tr rounded-tl h-12 md:h-14  flex items-center justify-center text-lg text-white'>
            {title}
          </h1>
          <div className='mx-5 mt-5 text-slate-700 text-center '>
            {description}
          </div>
          <hr className='mt-4' />
          <div className='mx-5  flex justify-between my-6'>
            <p className='flex gap-1'>
              Inspired
              <img
                className='inline-block ml-1 w-6'
                alt='Repeat-icon'
                src={RepeatIcon}
              />
            </p>
            <p className=''>
              <span className='text-slate-500'>Deadline:</span>{" "}
              {Math.sign(daysRemaining) === -1 ? 'Finished' : daysRemaining + ' Days To Go'}
            </p>
          </div>
            
            {
              todoLists.map((todolists, i)=>{
   
                return(
                  todolists.map(({id, list, completed, todo},i)=>{
                  if (todo === todoid){
                   return( <li
                className='flex justify-start items-center px-5 gap-5 py-4 border-b'
                key={i}>
                <input
                  type='checkbox'
                  id={"check" + i}
                  defaultChecked={
                    completed === true ? "defaultChecked" : ""
                  }
                  className='accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black'
                />
                <label htmlFor={"check" + id} className={completed === true ? "line-through text-green-500" : ""}>
                  {list}
                </label>
              </li>)
                  }
                  })
                )
              })
            }
          
          <div className='flex p-5 pb-2'>
            <p className='font-mono text-black text-center'>
              Trust yourself that you can do it and get it
            </p>
          </div>

          <AddTodoList todo={id} />
          </section>
          )
        })
    )
  })
}
      </div>
    </div>
  );
}


