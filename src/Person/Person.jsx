import React from "react";
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.Click}>I'm  {props.name} and i am {props.age} years old{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}
export default Person