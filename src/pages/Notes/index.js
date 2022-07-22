import React from "react";
import { motion } from "framer-motion";
import { AddNotes } from "../../components/Form";

export default function Notes(){

    return(
        <div className="bg-black/5">
        <h1 className=" text-lg italic text-center pt-8 text-blue-800">Keep Your Notes/Ideas Here!</h1>

        <div className="flex flex-row justify-around my-10 bg-white py-px">
        <button className="  border w-1/2 bg-indigo-300 py-2.5 px-12 text-gray-800">Notes</button>
        <button className="  border w-1/2 py-2.5 px-12 text-gray-800">Ideas</button> 
        </div>
        <div>
            <section className=" p-5 text-gray-800">
            <span className="text-md font-mono font-bold ">Title:{" "}</span>   <h1 className="inline-block text-lg underline ">This is the title</h1>
            <span className="text-md font-mono font-bold block ">Note:{" "}</span>   <p className="">This sit the where the note and ideas will be. lorem ipsum doret acum cont a anut ao.
                </p>
            </section>
        </div>
        <section className="mt-20">
           <AddNotes/>
        </section>

 
        <div>

            </div>
        </div>
    )
}