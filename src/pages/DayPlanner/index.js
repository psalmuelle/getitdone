import React, {useState, useEffect} from "react";





export default function DayPlanner(){
   const [time, setTime] = useState(new Date())
   
   
    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date(), 1000)
        })
      
    }, [time])




    return(
        <div className="bg-black/5 h-screen ">
    <div className=" py-10 flex flex-col justify-center items-center gap-4">    
   <div className="text-4xl md:text-5xl font-bold text-blue-700 font-mono leading-0">{time.toLocaleTimeString()} </div>
   <div className="text-2xl md:text-4xl"> {time.toDateString()}</div>
 </div>
 <hr/>
 <section className="mt-4">
Create a new note


 </section>

        </div>

    )
}

