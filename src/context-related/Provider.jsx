import React, { createContext, useState } from 'react'
import PartnerStore from './PartnerStore'
import Logistic from './Logistic'
import OrderDetails from '../OrderDetails'

export const ProductContext = createContext("")

const Provider = ({ children }) => {

    const [bgTheme, setBgTheme] = useState("grey")
    const [greet, setGreet] = useState("Hello")
    const [message, setMessage] = useState("Context Data")

    let handleClick = () => {
        console.log("Button Clicked")
        setMessage("Context Data Changed")
        setBgTheme("blue")
    }

    const contextData = {
        message,
        handleClick,
        bgTheme,
    }

    return (
        <div>
            <ProductContext.Provider value={contextData}>
                {children}
            </ProductContext.Provider>
        </div>
    )

}

export default Provider