import React from "react";




export default function Note(props){
    return(
        <section className="border max-w max-w-xl rounded shadow">
        <div className="bg-indigo-500 rounded-tr py-2 rounded-tl h-fit md:h-14 text-center px-2 flex items-center justify-center text-lg text-white break-words">
            This is going to be the title of the note you are writing.
        </div>
        
         <p className="p-5 ">This sit the where the note and ideas will be. lorem ipsum doret acum cont a anut ao.
            </p>
        <div className="flex justify-center items-center mx-auto  bg-violet-500 w-full px-5 py-2 text-slate-50 rounded-bl rounded-br ">
           Created on: 12-10-2022 
        </div>
        </section>
    )
}
