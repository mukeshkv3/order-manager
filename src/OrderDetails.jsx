import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import { Table } from './Table'
import Search from './Search'
import AddOrder from './AddOrder'
import EditOrder from './EditOrder'

export const OrderContext = createContext("")

const OrderDetails = () => {

    const [orders, setOrders] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const BASE_URL = "http://localhost:8080/orders"

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const headers = ["ID", "Customer Name", "Value", "Action"]

    const fetchData = async () => {
        try {
            let response = await axios.get(BASE_URL)
            setOrders(response.data)
        }
        catch (error) {
            console.error("Error fetching data :", error)
        }
    }

    const addOrder = async (newOrder) => {
        try {
            let response = await axios.post(BASE_URL, newOrder)
            setOrders(prevOrders => [...prevOrders, response.data])
        } catch (error) {
            console.error("Error adding order :", error)
        }
    }

    const deleteOrder = async (orderId) => {
        try {
            await axios.delete(`http://localhost:8080/orders/${orderId}`)
            setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId))
        } catch (error) {
            console.error("Error deleting order :", error)
        }
    }

    const updateOrder = async (orderId, updatedOrder) => {
        try {
            let response = await axios.put(`http://localhost:8080/orders/${orderId}`, updatedOrder)
            setOrders(prevOrders => prevOrders.map(order => order.id === orderId ? response.data : order))
        } catch (error) {
            console.error("Error updating order :", error)
        }
    }

    const filteredData = orders.filter((order) =>
        order.customerName && order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <OrderContext.Provider value={{ orders, setOrders }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, padding: '10px', backgroundColor: '#f9f9f9' }}>
                        <h1>Search and Filter Table</h1>
                        <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                        <Table orders={filteredData} headers={headers} onDeleteOrder={deleteOrder} onUpdateOrder={updateOrder}></Table>
                    </div>
                    <div style={{ flex:0.3, padding: '10px', backgroundColor: '#e9e9e9' }}>
                        <AddOrder addOrder={addOrder}></AddOrder>
                    </div>
                </div>
            </OrderContext.Provider>
        </>
    )
}

export default OrderDetails