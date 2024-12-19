import React, { createContext } from 'react'
import PartnerStore from './PartnerStore'
import Logistic from './Logistic'

export const ProductContext = createContext("")

const Provider = ({ children }) => {

    let message = "Context Data"

    let handleClick = () => {
        console.log("Button Clicked")
    }

    const contextData = {
        message,
        handleClick
    }

    return (
        <div>
            <ProductContext.Provider value={contextData}>
                {/* <PartnerStore></PartnerStore>
                <Logistic></Logistic> */}
                {children}
            </ProductContext.Provider>
        </div>
    )

}

export default Provider