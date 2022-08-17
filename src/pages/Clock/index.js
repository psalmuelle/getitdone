import React, {useState, useEffect} from "react";





export default function ClockPage(){
   const [time, setTime] = useState(new Date())
    const [joke, setJoke]  = useState("")
    const [error, setError] =useState(null)
   
    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date(), 1000)
        })
      
    }, [time])




    return(
        <div className="bg-black/5 h-screen ">
    <div className=" py-10 flex flex-col justify-center items-center gap-4">    
   <div className="text-5xl md:text-7xl font-bold text-blue-700 font-mono leading-0">{time.toLocaleTimeString()} </div>
   <div className="text-4xl md:text-6xl"> {time.toDateString()}</div>
 </div>
 <hr/>
 <div className="h-40 bg-green-400 w-100">{"quote"}</div>

        </div>

    )
}

