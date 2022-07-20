import React from "react";
import { motion } from "framer-motion";
import { AddNotes } from "../../components/Form";

export default function Notes(){

    return(
        <div className="bg-black/10">
        <h1 className=" text-lg italic text-center pt-5 text-blue-800">Keep Your Notes/Ideas Here!</h1>

        <div className="flex flex-row justify-around my-10 bg-white py-px">
        <button className=" border py-2.5 px-12 text-gray-800">Notes</button>
        <button className=" border py-2.5 px-12 text-gray-800">Ideas</button> 
        </div>
        <div>
            <section>
                <h1>This is the title</h1>
                <p>This sit the where the note and ideas will be. lorem ipsum doret acum cont a anut ao.
                </p>
            </section>
        </div>
        <section className="my-6">
           <AddNotes/>
        </section>

 
        <div>

            </div>
        </div>
    )
}