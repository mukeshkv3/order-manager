import React, { useContext } from 'react'
import { ProductContext } from './Provider'

const Logistic = () => {

    let contextDate = useContext(ProductContext)
  return (
    <div>Logistic</div>
  )
}

export default Logistic