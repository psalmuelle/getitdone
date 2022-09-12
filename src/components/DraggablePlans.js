import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";






const DraggablePlans = (props) => {
    return(
<DragDropContext onDragEnd={props.handleOnDragEnd}>
        <Droppable droppableId="plans">
        {
            (provided) =>(
                <ul className="plans" {...provided.droppableProps} ref= {provided.innerRef}>
                    {

                        props.myPlans.map(({id, plan}, index)=>{
                            return (
                                <Draggable key={id} draggableId={id} index={index} >
                                    {(provided)=>(
                                     <li key={id} className="border-b" ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps} >
                                       &#x2022; {plan}
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