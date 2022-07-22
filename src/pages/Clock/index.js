import React, {useState, useEffect} from "react";
import axios from "axios";
import { motion } from "framer-motion";


const quotesURL ="https://free-quotes-api.herokuapp.com/"


export default function ClockPage(){
   const [time, setTime] = useState(new Date())
    const [quote, setQuote]  = useState("")
    const [error, setError] =useState(null)
   
    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date(), 1000)
        })
      
    }, [time])


    useEffect(()=>{
        axios.get(quotesURL)
        .then(res =>{
         const interval = setInterval(()=>{
            setQuote(res.data)
           
         }, 9000)
        }).catch(error =>{
            setError(error)
        })
    },[quote])


    if (quote ===""){
       setQuote({quote: "Loading...",
    author:""})
    }
    if (error) return `Error: ${error.message}`;



    return(
        <div className="bg-black/5 h-screen ">
    <div className=" py-10 flex flex-col justify-center items-center gap-4">    
   <div className="text-5xl md:text-7xl">{time.toLocaleTimeString()} </div>
   <div className="text-4xl md:text-6xl"> {time.toDateString()}</div>
 </div>
 <hr/>
 <div className="h-40 bg-green-400 w-100">{quote.quote}{quote.author}</div>

        </div>

    )
}

