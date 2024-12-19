import React, { createContext } from 'react'
import PartnerStore from './PartnerStore'
import Logistic from './Logistic'

export const ProductContext = createContext("")

const Provider = () => {

    let contextData = "I am From Context"

    return (
        <div>
            <ProductContext.Provider value={contextData}>
                <PartnerStore></PartnerStore>
                <Logistic></Logistic>
            </ProductContext.Provider>
        </div>
    )

}

export default Provider