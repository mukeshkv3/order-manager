import React, { useContext } from 'react'
import { ProductContext } from './Provider'

const PartnerStore = () => {

  const { message, handleClick, bgTheme } = useContext(ProductContext)

  return (
    <div style={{ backgroundColor: bgTheme }}>
      {message} in PartnerStore
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default PartnerStore