import React from 'react'
import './card.css'

function card(props) {
  const {title , content} = props;
  return (
    <>
      <div className="card">
      <h2 className='card-title'>{title}</h2>
      <p className='card-content'>{content}</p>
    </div>
    </>
  )
}

export default card