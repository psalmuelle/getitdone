import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";






const DraggableTasks = ({ tasks, onDragEnd }) => {
    return(
<DragDropContext>
        <Droppable droppableId="tasks">
        {
            (provided) =>(
                <ul className="tasks" {...provided.droppableProps} ref= {provided.innerRef}>
                    {
                        tasks.map(({id, text, taskstatus}, index)=>{
                            return (
                                <Draggable key={id} draggableId={id} index={index} >
                                    {(provided)=>(
                                     <li className="flex justify-start items-center px-5 gap-5 py-4 border-b" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                                     <input type="checkbox" {...taskstatus== "completed"? defaultChecked: null} id="check" className="accent-emerald-700 shadow checked:shadow-black/80 outline-none h-7 bg-black" />
                                         <label htmlFor="check" className={...taskstatus== "completed"? "line-through": ""}>{text}</label>
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