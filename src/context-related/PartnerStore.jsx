import React, { useContext } from 'react'
import { ProductContext } from './Provider'

const PartnerStore = () => {

  const { message, handleClick } = useContext(ProductContext)

  return (
    <div>{message} in PartnerStore</div>
  )
}

export default PartnerStore