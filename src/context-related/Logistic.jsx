import React, { useContext } from 'react'
import { ProductContext } from './Provider'

const Logistic = () => {

  const { message, handleClick, bgTheme } = useContext(ProductContext)

  return (
    <div style={{ backgroundColor: bgTheme }}>
      {message} in Logistic
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Logistic