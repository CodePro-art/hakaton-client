import React from 'react'

export default function card(props) {
  return (
    <article className="card-container">
      <img src={props.src} alt="story image"/>
      <h3 className="card-title">{props.title}</h3>
      
    </article>
  )
}

