import React from "react";
import "./Card.css"
interface MyComponentProps {
    image: string;
    title: string;
    text:  string;
    date:  string;
    id: number;
  }

const Card:React.FC<MyComponentProps> = (props)=>{
    

    return(
       <div className="card">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <small>{props.date}</small>
       </div>
    )
}

export default Card