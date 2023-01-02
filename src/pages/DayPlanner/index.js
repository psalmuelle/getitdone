import React, {useState, useEffect} from "react";
import { AddPlan } from "../../components/Form";
import DraggableComponent from "../../components/DraggableComponent";
import TodoService from "../../services/user.service"
import { motion } from "framer-motion";
import { useSelector } from "react-redux";





export default function DayPlanner(){
   const [time, setTime] = useState(new Date())
   const [plans, setPlans] = useState([])
 
   const [loading, setLoading] = useState(true)
   const updatePlanner = useSelector(state=> state.planner.changes)

    useEffect(() => {
        setInterval(() =>{
            setTime(new Date())
        }, 1000)   
    }, [time])

    useEffect(()=> {
      document.title= "Slick | planner"

      TodoService.getPlan().then((res)=>{
       res.data.forEach(({id, plan, created_on},i)=>{
         setPlans(plans.unshift(plan))
         
         const now = new Date()
         const msBetweenDates = Math.abs(Date.parse(created_on) - now.getTime())
         
         const hoursBetweenDates = msBetweenDates / (60*60*1000)
         
         if(hoursBetweenDates > 24){
           TodoService.deletePlan(id)
          }
          
         
       
      })
      
      
    }).catch((err)=> console.log(err))
    .then(()=>{
      setLoading(false)
    })
    
    
   
    }, [updatePlanner])
   


    return(
     
        <div className="bg-black/5 h-full -z-50 pb-20">
    <div className=" py-10 flex flex-col justify-center items-center gap-4">    
   <div className="text-4xl md:text-5xl font-bold text-blue-700 font-mono leading-0">{time.toLocaleTimeString()} </div>
   <div className="text-2xl md:text-4xl"> {time.toDateString()}</div>
 </div>
 <hr/>
 <p className="mx-auto text-slate-900 text-center">NB: Added plan expires after 24 hours </p>
 <section className="my-4 max-w-lg text-slate-900 mx-auto  p-4 rounded h-fit mb-4">

{
  loading && (
     <motion.div initial={{transform: "rotate(0deg"}} animate={{transform: "rotate(360deg"}} transition={{repeat: Infinity, duration: 1}} className="w-10 h-10 rounded-full border-4 border-t-violet-600 mx-auto  "> 
     </motion.div>
  )
}

<DraggableComponent list={plans} />

 </section>
 <div className="">

  <AddPlan/>
 </div>

        </div>
      
    )
}

