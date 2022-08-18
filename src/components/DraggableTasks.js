import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";






const DraggableTasks = (props) => {
    return(
<DragDropContext onDragEnd={props.handleOnDragEnd}>
        <Droppable droppableId="tasks">
        {
            (provided) =>(
                <ul className="tasks" {...provided.droppableProps} ref= {provided.innerRef}>
                    {

                        props.myTasks.map(({id, text, taskstatus}, index)=>{
                            return (
                                <Draggable key={id} draggableId={id} index={index} >
                                    {(provided)=>(
                                     <li className="flex justify-start items-center px-5 gap-5 py-4 border-b" ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>

                                     <input type="checkbox"  id={"check"+ id} defaultChecked={taskstatus == "completed" ? "defaultChecked": ""} className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
                                         <label htmlFor={"check"+ id} className="">{text}</label>
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


export default DraggableTasks;