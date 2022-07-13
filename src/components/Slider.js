import React, {useState} from "react";




export default function Slider(props) {
    const [current, setCurrent] = useState(0)
    const length = props.slides.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 :current+1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 :current-1)
    }
   
    {props.slides.map((slide, index)=>{
        return(
            <div key={index}>
            {index === current && <div> {slide} </div>}
            </div>
        )
    })
    }
   
}