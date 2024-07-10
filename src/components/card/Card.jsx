import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <>
    <div className="card" >
      <div className="cardColor" style={{backgroundColor:props.color.color}}>
      </div>
      <div className="cardDetail">
        <h1 style={{color:props.color.color}}>{props.color.color}</h1>
        <p style={{color:props.color.color}}>{props.color.name}</p>
      </div>

    </div>
    </>
  )
}

export default Card