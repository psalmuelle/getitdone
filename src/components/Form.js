
import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import Slider from "./Slider";
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
    const onTodoSubmit =()=>{
        console.log("hello")
    }
    return(
        <form className="text-white" onSubmit={handleSubmit(onTodoSubmit)}>

<label htmlFor = "todoTitle">Title of your Project/Task</label>
<input  type="text" id="todoTitle" {...register("todoTitle", {required:true})}/>

        </form>
    )
}
