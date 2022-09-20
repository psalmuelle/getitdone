import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";
import AuthService from "../services/auth.service";
import { useDispatch } from "react-redux";
import { checkAuthentication } from "../redux/userSlice";

//Register Component
export function Register() {
  const dispatch = useDispatch()
  const formSchema = yup.object().shape({
    password: yup.string().min(8),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    AuthService.register(data).then((res)=>{

    dispatch(checkAuthentication())

    }) 
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit) }
      className=' flex flex-col p-4 m-auto flex-nowrap justify-items-start items-start '>
      <label
        htmlFor='username'
        className="m-2 ml-0 mt-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg ">
        Username
      </label>
      <input
        type='text'
        className='shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm'
        id='username'
        {...register("username", { required: true })}
      />

      <label
        className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg "
        htmlFor='email'>
        Email
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 h-11 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm'
        type='email'
        id='email'
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      <p className='text-red-500 text-sm -mt-2 italic'>
        {errors.email && errors.email.message}
      </p>

      <label
        className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg "
        htmlFor='password'>
        Password
      </label>

      <input
        className='shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm'
        type='password'
        id='password'
        {...register("password", { required: true })}
      />

      <button
        className=' bg-gradient-to-r from-sky-500 to-indigo-500 py-4 px-20  mt-8 rounded-md  w-full  min-w-max max-w-sm text-white hover:bg-indigo-400 active:bg-indigo-600 shadow-lg '
        type='submit'>
        Register
      </button>
    </form>
  );
}


//Login Component
export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      className=' flex flex-col p-4 m-auto flex-nowrap justify-items-start items-start '
      onSubmit={handleSubmit(onSubmit)}>
      <label
        className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg "
        htmlFor='email'>
        Email
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 h-11 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm'
        type='text'
        id='email'
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />

      <p className='text-red-500 text-sm -mt-2 italic'>
        {errors.email && errors.email.message}
      </p>

      <label
        className="m-2 mt-3 ml-0 font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg "
        htmlFor='password'>
        Password
      </label>

      <input
        className='shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline min-w-max max-w-sm'
        type='password'
        id='password'
        {...register("password", { required: true })}
      />

      <button
        className=' bg-gradient-to-r from-sky-500 to-indigo-500 py-4 px-20  mt-8 rounded-md  w-full  min-w-max max-w-sm text-white hover:bg-indigo-400 active:bg-indigo-600 shadow-lg '
        type='submit'>
        Login
      </button>
    </form>
  );
}

//Dashboard Todo Form.

export function AddTodo() {
  const formSchema = yup.object().shape({
    title: yup.string().max(100),
    description: yup.string().max(200),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className='text-white ' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col  round gap-2'>
        <label
          htmlFor='title'
          className=" block w-fit p-1 text-black font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg ">
          Title
        </label>
        <input
          className='shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-800 mb-3 mx-auto leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='title'
          {...register("title", { required: true })}
        />
      </div>

      <div className='flex flex-col  round gap-2 mt-2'>
        <label
          htmlFor='description'
          className=" block w-fit p-1 text-black font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg ">
          Description
        </label>
        <textarea
          className='shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-800 mb-3 mx-auto leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          id='description'
          {...register("description", { required: true })}
        />
      </div>
      <div className='flex flex-col  round gap-2 mt-2'>
        <label
          htmlFor='deadline'
          className=" block w-fit p-1 text-black font-medium before:content-['*'] before:text-red-600 before:mr-px md:text-lg ">
          Deadline
        </label>
        <input
          className='shadow appearance-none border rounded w-full h-11 py-2 px-3 text-gray-800 mb-3 mx-auto leading-tight focus:outline-none focus:shadow-outline'
          type='date'
          id='deadline'
          {...register("deadline", { required: true })}
        />
      </div>

      <motion.button whileTap={{scale:1.1}} whileHover={{opacity:0.8}}
        className='border-slate-500 px-10 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-3  m-auto rounded-md mt-7 block text-slate-50'
        type='submit'>
        Add Note
      </motion.button>
    </form>
  );
}

//Dashboard TodoLists Form.

export function AddTodoList() {
  const formSchema = yup.object().shape({
    tasklist: yup.string().max(100),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <form className='' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex justify-between items-center mx-auto absolute bg-violet-500 w-full px-5 py-1 pl-1 rounded-bl rounded-br '>
        <input
          type='text'
          placeholder='Add a task to list'
          className='rounded pl-4 pr-1 h-10'
          aria-required
          {...register("tasklist", { required: true })}
        />
        <motion.button whileTap={{scale:1.1}} whileHover={{opacity:0.8}} className='text-slate-900  px-3 pb-1 rounded-full flex justify-center items-center  bg-gradient-to-r from-slate-500 via-purple-300 to-white text-3xl'>
          +
        </motion.button>
      </div>
    </form>
  );
}

//Add Note Form from Note Page

export function AddNotes() {
  const { register, reset, handleSubmit } = useForm();
  const onAddNote = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onAddNote)}
      className='flex flex-col p-4 bg-slate-500/60'>
      <label
        htmlFor='title'
        className='block text-white w-3/4 max-w-sm m-auto pl-1 text-md'>
        Title
      </label>
      <input
        placeholder='Note title'
        type='text'
        {...register("title", { required: true })}
        id='title'
        className='block focus:outline-black/70 focus:outline-dashed text-slate-900 bg-gray-50/95 rounded shadow px-4 m-auto mt-1 h-11 w-3/4 max-w-sm'
      />

      <label
        htmlFor='note'
        className='block text-white w-full max-w-xl  mt-8 mb-2 pl-1 text-md m-auto'>
        Write Your Thought
      </label>
      <textarea
        {...register("note", { required: true })}
        placeholder='Write your Thoughts'
        id='note'
        className='resize-none block p-2.5 w-full text-gray-900 bg-gray-50/95 rounded border border-gray-300 focus:outline-black/70 focus:outline-dashed h-40 max-w-xl m-auto '></textarea>

      <button
        className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-slate-500 px-5 shadow-xl  text-lg py-2 m-auto rounded mt-5 block text-white'
        type='submit'>
        Add Note
      </button>
    </form>
  );
}

//Add Plan Fom from DayPlanner Page.

export function AddPlan() {
  const { register, handleSubmit, reset, formState: errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <form className='' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex justify-between items-center mx-auto bg-violet-500  w-11/12  max-w-lg px-5 py-1 pl-1 rounded '>
        <input
          type='text'
          placeholder='Add a task to list'
          className='rounded pl-4 pr-1 h-10 w-9/12'
          {...register("plan", { required: true })}
        />
        <motion.button whileTap={{scale:1.1}} whileHover={{opacity:0.8}} className='text-slate-900  px-3 pb-1 rounded-full flex justify-center items-center  bg-gradient-to-r from-slate-500 via-purple-300 to-white text-3xl'>
          +
        </motion.button>
      </div>
    </form>
  );
}


//Contact Me Form

export function ContactMe (){
  const { register, handleSubmit, reset, formState: errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <form  onSubmit={handleSubmit(onSubmit)} className="bg-slate-500 rounded p-4 " >
      <div className="flex flex-wrap justify-center gap-7">
      <div className='flex flex-col items-start justify-center w-80 '>
        <label htmlFor="name" className="p-2 text-white">Name</label>
        <input
          type='text'
          placeholder='Your Name'
          id="name"
          className='rounded w-full pl-2 pr-1 h-10 border '
          {...register("name", { required: true })}
        />
           
      </div>
      <div className='flex flex-col items-start justify-center w-80'>
        <label htmlFor="useremail" className="p-2 text-white">Email</label>
        <input
          type='email'
          placeholder='domain@email.com'
          id="useremail"
          className='w-full rounded pl-2 pr-1 h-10 border '
          {...register("email", { required: true })}
        />
           
      </div>
    </div>
    <div className="flex flex-wrap justify-center ">
    <div className='flex flex-col items-start justify-center w-80   mt-8  md:w-[42rem]'>
        <label htmlFor="message"  className="p-2 text-white">Message!</label>
       
        <textarea className=" rounded pl-2 pr-1 border w-full p-4 h-52 " placeholder="Write a message" {...register("message", {required:true} )} id="message">
        </textarea>
      </div>
      </div>
      <button type="submit" className="py-3 my-10 mx-auto block  border-slate-500 px-10 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-slate-50 rounded-3xl cursor-pointer">Send Message</button>
    </form>
  );
}