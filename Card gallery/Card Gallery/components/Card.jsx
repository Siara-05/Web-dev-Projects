import React from 'react'
import './Card.css'   // Ensure this CSS file doesn't override Tailwind classes

const Card = (props) => {
  return (
    <div className='user-container'>

        <h2 id='name' > {props.name} </h2>
        
        <img id='pfp' src={props.image} alt={props.name}></img>
        
        <p id='prof' >  {props.prof} </p>
        
        <h6 id='age' className='text-black'> Age- {props.age} </h6>

    </div>
  )
}

export default Card