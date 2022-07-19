
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"

import * as yup from "yup"


//Register Component
export function Register(){

    const formSchema = yup.object().shape({
        password: yup.string().min(8),
        password1: yup.string().oneOf([yup.ref('password')], 'Passwords does not match'),
      })

      

  const {register, handleSubmit,formState:{errors}} = useForm({ resolver: yupResolver(formSchema) })
 const onSubmit = data => console.log(data)

    return(
  
    <form onSubmit={handleSubmit(onSubmit)} className= " flex flex-col p-4 m-auto flex-nowrap justify-items-start items-start ">

  <label htmlFor = "username" className="m-2 ml-0 mt-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg ">Username</label>
    <input type="text" className="shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm" id="username"{...register("username", {required:true})}/>

    <label className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg " htmlFor = "email">Email</label>
    <input className="shadow appearance-none border rounded w-full py-2 h-11 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm" type="text" id="email"{...register("email", {
        required:true,
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
        }
        })}/>

    <p className="text-red-500 text-sm -mt-2 italic">{errors.email && errors.email.message}</p>
    

    <label className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg " htmlFor = "password">Password</label>

    <input className="shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm" type="password" id="password" {...register("password", {required:true})}/>


    <label className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg " htmlFor = "password1">Confirm Password</label>

    <input className="shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm" type="password" id="password1" {...register("password1", {
        required:true
        })}/>
 <p className="text-red-500 text-sm -mt-2 italic">{ errors.password1 &&errors.password1.message}</p>
   
 
    <button className="bg-indigo-500 py-4 px-20  mt-8 rounded-md  w-full  min-w-max max-w-sm text-white hover:bg-indigo-400 active:bg-indigo-600 shadow-lg " type="submit" >Register</button>
    
    </form>
  
    )

}


//Login Component
export function Login(){
    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = data => console.log(data)
   
    

    return(
  
    <form  className= " flex flex-col p-4 m-auto flex-nowrap justify-items-start items-start " onSubmit={handleSubmit(onSubmit)}>

<label className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg " htmlFor = "email">Email</label>
    <input className="shadow appearance-none border rounded w-full py-2 h-11 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm" type="text" id="email"{...register("email", {
        required:true,
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
        }
        })}/>

    <p className="text-red-500 text-sm -mt-2 italic">{errors.email && errors.email.message}</p>
    
   

<label className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg " htmlFor = "password">Password</label>

<input className="shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm" type="password" id="password" {...register("password", {required:true})}/>

<button className="bg-indigo-500 py-4 px-20  mt-8 rounded-md  w-full  min-w-max max-w-sm text-white hover:bg-indigo-400 active:bg-indigo-600 shadow-lg " type="submit" >Login</button>
    </form>

    )
}



export function AddTodo (){
    const {register, handleSubmit, formState:errors} = useForm()
    const [next, setNext] = useState(false)
    const [task, setTask] = useState(0)
   
  
    const onSubmit =(data)=>{
        console.log(data)
    }
    const onContinueForm=()=>{
    setNext(!next)
    }
    const onAddTask =()=>{
    setTask(task + 1)
  
    
    }
  
    return(
        <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
{
!next && (
<>
<label className="block text-slate-100 text-center w-fit m-auto text-lg" htmlFor = "todoTitle">Title of your Project/Task</label>
<input   className="block focus:outline-black focus:outline-dashed text-black text-lg rounded-lg shadow px-4 m-auto my-4 h-11 w-5/6 w96" type="text" id="todoTitle" {...register("todoTitle", {required:true})}/>

<label className="block text-slate-100 text-center w-fit m-auto mt-5 text-lg" htmlFor = "durationType">Duration Type</label>
<select className="block focus:outline-black focus:outline-dashed text-black text-lg rounded-lg shadow px-4 m-auto my-4 h-11 w-44" id="durationType" {...register("durationType", {required:true})}>
    <option htmlFor="durationType" value="repeat">Repeat</option>
    <option htmlFor ="durationType" value="no-repeat">No Repeat</option>
</select>

<label className="block text-slate-100 text-center w-fit m-auto mt-5 text-lg" htmlFor = "deadline">Deadline</label>
<input className="block focus:outline-black focus:outline-dashed text-black text-lg rounded-lg shadow px-4 m-auto mt-4 mb-10 h-11 w-44" type="date" id="deadline" {...register("deadline", {required:true})}/>

<button type="button" onClick={onContinueForm} className=" float-right mr-10 border border-spacing-6 mt-5 px-8 rounded-xl py-2 hover:border-none hover:bg-white/70 hover:text-black active:bg-white/60 shadow-md shadow-black absolute bottom-14 -right-3">Next</button>
</>

)
}
{
  next && (
    <>
    
  <label className="block text-slate-100 text-center w-fit m-auto text-lg" htmlFor = {`task${task}`}>Tasks</label>
<input  className="block focus:outline-black focus:outline-dashed text-black text-lg rounded-lg shadow px-4 m-auto my-4 h-11 w-5/6" type="text"  id={`task${task}`} placeholder = {`Task ${task}`} {...register(`task[${task}]`, {required:true})}/>



<button type="button" onClick={onAddTask} className=" bg-black/80 rounded block m-auto px-3 text-3xl ">+</button>

<button type="button" onClick={onContinueForm} className=" float-right mr-10 border border-spacing-6 mt-5 px-5 rounded-xl py-2 hover:border-none hover:bg-white/70 hover:text-black active:bg-white/60 shadow-md shadow-black absolute bottom-14 left-5">Previous</button>


<button className="bg-slate-900/90 border-slate-500 px-5 shadow-xl active:bg-slate-900 text-lg py-2 m-auto rounded-xl mt-24 block  " type="submit" >Create Todo</button>

    </>
  )  
}




        </form>
    )
}
