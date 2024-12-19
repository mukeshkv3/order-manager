import React, { useContext } from 'react'
import { ProductContext } from './Provider'

const PartnerStore = () => {

    let contextDate = useContext(ProductContext)

  return (
    <div>PartnerStore</div>
  )
}

export default PartnerStore