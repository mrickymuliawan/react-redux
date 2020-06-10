import React from 'react'

const Card = (props) => {

  return <div>
    <h2>{props.title}</h2>
    <p>Harga jual {props.price}</p>
    <small>Penjual {props.seller}</small>

  </div>
}
export default Card
