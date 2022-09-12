import React, {useState, useEffect} from "react";
import { AddPlan } from "../../components/Form";
import DraggablePlans from "../../components/DraggablePlans";

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
  
  ]
  




export default function DayPlanner(){
   const [time, setTime] = useState(new Date())
   const [lists, updateLists] = useState({"finalist":[]})
   const handleOnDragEnd = (result)=>{
    if(!result.destination) return;
    const items = Array.from(lists);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateLists(items)
  }
   
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
 <p className="mx-auto text-slate-900 text-center">NB: Added plan expirers after 24 hours </p>
 <ul className="my-4 max-w-lg text-slate-900 mx-auto bg-white p-4 rounded">
<p className="border-b ">&#x2022; Create a Library</p>
<p className="border-b mt-3">&#x2022; Create a Library</p>
<p className="border-b mt-3">&#x2022; Create a Library</p>
<DraggablePlans myPlans={myPlans} handleOnDragEnd= {handleOnDragEnd} />







 </ul>

  <AddPlan/>
        </div>

    )
}

