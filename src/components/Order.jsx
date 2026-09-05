import React from 'react'
import { Link, useParams } from 'react-router-dom'

 const Order = ({ nom }) => {
  const { inputValue } = useParams()

  return (
    <div>
      <h1>Bienvenue dans votre espace {nom}</h1>
      <h2>ducon {inputValue + "lasalope"}</h2>
      <Link to="/"><button>Order</button></Link></div>
  )
}

export default Order
