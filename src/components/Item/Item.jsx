import React from 'react'

export default function Item ({id, title,price, stock}){
  return (
    <div className='card-container'>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <span>{price}</span>
      <span>{stock}</span>
    </div>
  )
}

