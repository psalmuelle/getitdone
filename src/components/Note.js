import React, {useState} from "react";
import randomColor from "randomcolor";






export default function Note(props){
   
  const [color, setColor]= useState('')
    const randColor = randomColor()
   

    return(
        <li className="border  max-w-xl rounded shadow w w-full" key={props.id}>
        <div onLoad={()=>setColor(randColor)} className={` rounded-tr py-2 rounded-tl h-fit md:h-14 text-center px-2 flex items-center justify-center text-lg text-white break-words`} style={{background: randColor}}>
            {props.title}
        </div>
        
         <p className="p-5 bg-white">{props.note}
            </p>
        <div className="flex justify-center items-center mx-auto  bg-violet-500 w-full px-5 py-2 text-slate-50 rounded-bl rounded-br ">
           Created on: {props.created_on} 
        </div>
        </li>
    )
}
