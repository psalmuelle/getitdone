import React, {useState, useRef, useEffect} from "react";
import {List, arrayMove} from "react-movable";


export const HandleIcon =()=>{
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#555"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-move"
  >
    <polyline points="5 9 2 12 5 15" />
    <polyline points="9 5 12 2 15 5" />
    <polyline points="15 19 12 22 9 19" />
    <polyline points="19 9 22 12 19 15" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
  )
}

export const buttonStyles = {
    border: 'none',
    cursor: 'pointer',
    background: 'white',
    
  };



const DraggableComponent =(props)=>{
const [items, setItems] = useState(props.list)
const [container, setContainer] = React.useState(null)
const wrapper = useRef()
useEffect(()=>{
    setContainer(wrapper.current)
}, [wrapper.current])

 return (

    <div
      ref={wrapper}
      style={{
        maxWidth: '100%',
        margin: '0px auto',
        textAlign: "center"
      }}
    >
      <List
        container={container}
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{
              padding: "0em 0em 1em 0em",
              cursor: isDragged ? 'grabbing' : "inherit"
            }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged, isSelected }) => (
          <li
            {...props}
            className=" mb-6 list-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-slate-500 rounded-md shadow-md text-gray-900 font-medium shadow-black/70 text-left h-fit"
            style={{
              ...props.style,
              cursor: isDragged ? 'grabbing' : 'inherit', 
            }}
          >
            <div
            className=" h-full"
            style={{
            display:"flex",

              
            }}
            >
                
              <button
                data-movable-handle
                className="bg-white rounded-l flex justify-center items-center min-h-full min-w-[3rem] "
                style={{
                  cursor: isDragged ? 'grabbing' : 'grab',
                  marginRight: '1.5em',

                }}
                tabIndex={-1}
              >
                <HandleIcon />
              </button>
              <div className="py-4 pr-2">{value}</div>
            </div>
        
          </li>
        )}
      />
    </div>
 )

}

export default DraggableComponent