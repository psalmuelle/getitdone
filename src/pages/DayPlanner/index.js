import React, {useState, useEffect, useRef} from "react";
import { AddPlan } from "../../components/Form";
import DraggableComponent from "../../components/DraggableComponent";
import TodoService from "../../services/user.service"
import { motion } from "framer-motion";



export default function DayPlanner(){
   const [time, setTime] = useState(new Date())
   const [requests, setRequests] = useState([])
   const [plans, setPlans] = useState([])
   const [loading, setLoading] = useState(true)
    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date())
        }, 1000)   
    }, [time])

    useEffect(()=> {
      document.title= "Slick | planner"

      TodoService.getPlan().then((res)=>{
       res.data.forEach((data)=>{
        setRequests(requests.push(data))
      })
      
        
      })
      .catch((err)=> console.log(err))
      .then(()=>{
        console.log(requests[1])
        requests.forEach(({id,plan,created_on},i)=>{
        console.log(Date.parse(created_on))
        setPlans(plans.unshift(plan))
        })
        setLoading(false)
        
      })
   
    }, [])
   




    return(
        <div className="bg-black/5 h-full ">
    <div className=" py-10 flex flex-col justify-center items-center gap-4">    
   <div className="text-4xl md:text-5xl font-bold text-blue-700 font-mono leading-0">{time.toLocaleTimeString()} </div>
   <div className="text-2xl md:text-4xl"> {time.toDateString()}</div>
 </div>
 <hr/>
 <p className="mx-auto text-slate-900 text-center">NB: Added plan expirers after 24 hours </p>
 <section className="my-4 max-w-lg text-slate-900 mx-auto  p-4 rounded h-fit mb-4">

{
  loading && (
     <motion.div initial={{transform: "rotate(0deg"}} animate={{transform: "rotate(360deg"}} transition={{repeat: Infinity}} className="w-10 h-10 rounded-full border-4 border-t-violet-600 mx-auto  "> 
     </motion.div>
  )
}

<DraggableComponent list={plans} />

  



 </section>
 <div className="mb-10">

  <AddPlan/>
 </div>

        </div>

    )
}

