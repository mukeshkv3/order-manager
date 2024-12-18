import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from './Table'
import Search from './Search'

const OrderDetails = () => {

    const [orders, setOrders] = useState([{}])
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const headers = ["ID", "Customer Name", "Value"]

    const fetchData = async () => {
        try {
            let response = await (await axios.get("http://localhost:8080/orders"))
            setOrders(response.data)
        }
        catch (error) {
            console.error("Error fetching data :", error)
        }
    }

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
            <Table orders={filteredData} headers={headers}></Table>
        </div>
    )
}

export default OrderDetails