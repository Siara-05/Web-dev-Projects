import React from 'react'
import './Card.css'
import Subha from '../src/assets/subha.jpg'
import Prem from '../src/assets/prem.jpg'
import Rahul from '../src/assets/rahul.jpg'
import Om from '../src/assets/om.jpg'

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