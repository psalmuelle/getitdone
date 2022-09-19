import React, {useState, useEffect, useRef} from "react";
import { AddPlan } from "../../components/Form";
import DraggableComponent from "../../components/DraggableComponent";


const myPlans =[
    {
    "id": "1",
    "plan": "Complete the header and footer of my portfolio website"
  },
  {
    "id": "2",
    "plan": "Complete the header and footer of my portfolio website"
  },
  {
    "id": "3",
    "plan": "Complete the header and footer of my portfolio website"
  },
  {
    "id": "4",
    "plan": "Complete the header and footer of my portfolio website"
  },
  {
    "id": "5",
    "plan": "This is a plan"
  },
  {
    "id": "6",
    "plan": "Yet another plan"
  },
  {
    "id": "7",
    "plan": "A plan"
  },

  ]
const plans = []

myPlans.map(({id, plan},i)=>{
  plans.push(plan)
  return plans
})


export default function DayPlanner(){
   const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() =>{
            setTime(new Date(), 1000)
        })   
    }, [time])
    useEffect(()=> {document.title= "Slick | planner"}, [])




    return(
        <div className="bg-black/5 h-full ">
    <div className=" py-10 flex flex-col justify-center items-center gap-4">    
   <div className="text-4xl md:text-5xl font-bold text-blue-700 font-mono leading-0">{time.toLocaleTimeString()} </div>
   <div className="text-2xl md:text-4xl"> {time.toDateString()}</div>
 </div>
 <hr/>
 <p className="mx-auto text-slate-900 text-center">NB: Added plan expirers after 24 hours </p>
 <section className="my-4 max-w-lg text-slate-900 mx-auto  p-4 rounded h-fit mb-4">


<DraggableComponent list={plans} />


 </section>
 <div className="mb-10">

  <AddPlan/>
 </div>

        </div>

    )
}

