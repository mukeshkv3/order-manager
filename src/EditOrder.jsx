import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { OrderContext } from './OrderDetails'
import axios from 'axios'

const EditOrder = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { orders, setOrders } = useContext(OrderContext)
  const [orderData, setOrderData] = useState({ id: '', customerName: '', value: '' })
  const BASE_URL = "http://localhost:8080/orders"

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`)
        setOrderData(response.data)
      } catch (error) {
        console.error("Error fetching order: ", error)
      }
    }

    fetchOrder()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setOrderData({ ...orderData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, orderData)
      const updatedOrder = response.data
      const updatedOrders = orders ? orders.map(order => 
        order.id === updatedOrder.id ? updatedOrder : order
      ) : []
      setOrders(updatedOrders)
      navigate('/orders')
    } catch (error) {
      console.error("Error updating order: ", error)
    }
  }


  return (
    <div>
      <h2>Edit Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={orderData.id}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name</label>
          <input
            type="text"
            className="form-control"
            name="customerName"
            value={orderData.customerName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="value">Value</label>
          <input
            type="text"
            className="form-control"
            name="value"
            value={orderData.value}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Order</button>
      </form>
    </div>
  )
}

export default EditOrder