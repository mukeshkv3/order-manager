import React, { useState } from 'react'

const AddOrder = ({ addOrder }) => {
    const initialValue = { id: 0, customerName: '', value: 0 }
    const [orderData, setOrderData] = useState(initialValue)

    const handleSubmit = (event) => {
        event.preventDefault()
        addOrder(orderData)
        setOrderData(initialValue)
    }

    const handleChange = ({ target }) => {
        let details = { [target.name]: target.value }
        setOrderData(values => ({ ...values, [target.name]: target.value }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="id">ID</label>
                <input type="text" className="form-control" name='id' onChange={handleChange} />
                <label htmlFor="customerName">Customer Name</label>
                <input type="text" className="form-control" name='customerName' onChange={handleChange} />
                <label htmlFor="value">Value</label>
                <input type="text" className="form-control" name='value' onChange={handleChange} />
                <div className='card'>
                    <input type="submit" value="Add Order" className='btn btn-primary' onClick={handleSubmit} />
                </div>
            </div>
        </form>
    )
}

export default AddOrder