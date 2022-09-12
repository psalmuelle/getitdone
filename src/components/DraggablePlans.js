import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";






const DraggablePlans = (props) => {
    return(
<DragDropContext onDragEnd={props.handleOnDragEnd}>
        <Droppable droppableId="plan">
        {
            (provided) =>(
                <ul className="plans " id="plans" {...provided.droppableProps} ref= {provided.innerRef}>
                    {

                        props.myPlans.map(({id, plan}, index)=>{
                            return (
                                <Draggable key={id} draggableId={id} index={index} >
                                    {(provided)=>(
                                     <li key={id} 
                                     className="border-b py-4 bg-green-500 mb-1 rounded px-2" ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps} >
                                       {plan}
                                     </li>    
                                    )}
                                </Draggable>
                                
                            )
                        })
                    }
                    {provided.placeholder}
                </ul>
            )
            
            
        }
        </Droppable>
       </DragDropContext>

    )}


export default DraggablePlans;