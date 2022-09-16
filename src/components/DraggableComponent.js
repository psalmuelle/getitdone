import React, {useState} from "react";
import {List, arrayMove} from "react-movable";




const DraggableComponent =(props)=>{
const [items, setItems] = useState(props.list)
 return (
    <List
    values={items}
    onChange={({oldIndex, newIndex})=>
    setItems(arrayMove(items, oldIndex, newIndex))
}
renderList={({children, props})=> <ul {...props}>{children}</ul>}
renderItem={({value, props})=> <li {...props}>{value}</li>}
    />
 )

}

export default DraggableComponent