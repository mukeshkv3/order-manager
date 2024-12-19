import React, { useContext } from 'react'
import { ProductContext } from './Provider'

const Logistic = () => {

  const { message, handleClick } = useContext(ProductContext)

  return (
    <div>{message} in Logistic</div>
  )
}

export default Logistic