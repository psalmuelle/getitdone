import React, {useState} from "react";
import DnDList from "react-dnd-list"






const Item = (props) => {
    const dnd = props.dnd
    return(
    <li
    style={{...dnd.item.styles, ...dnd.handler.styles}}
    className= {dnd.item.classes}
    ref={dnd.item.ref}
    {...dnd.handler.listeners}
    >
        <div
        className="text-lg"
        style={{height:props.item.height}}
        >
         {props.item.value}
        </div>
    </li>

    )
    }

const TileList =props=>{
    const [list, setList] = useState(props.item)
    return (
        <ul>
            <DnDList
            items= {list}
            itemComponent={Item}
            setList= {setList}
            setSwapThreshold={size =>size * .75}
            setOverflowThreshold={()=> 50}
            />
        </ul>
    )
}

export default TileList