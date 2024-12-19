import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table } from './Table'
import Search from './Search'
import AddOrder from './AddOrder'

const OrderDetails = () => {

    const [orders, setOrders] = useState([{}])
    const [searchTerm, setSearchTerm] = useState('')
    const BASE_URL = "http://localhost:8080/orders"

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const headers = ["ID", "Customer Name", "Value"]

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

    // const addOrder = (newOrder) => { setOrders(prevOrders => [...prevOrders, newOrder]) }

    // const deleteOrder = (orderId) => { setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId))
    // }

    const filteredData = orders.filter((order) =>
        order.customerName && order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <h1>Search and Filter Table</h1>
            <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Table orders={filteredData} headers={headers} onDeleteOrder={deleteOrder} onUpdateOrder={updateOrder}></Table>
            <div className='card'>
                <AddOrder addOrder={addOrder}></AddOrder>
            </div>
        </div>
    )
}

export default OrderDetails