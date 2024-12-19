/* eslint-disable react/prop-types */
import 'react'
import { TableRow } from './TableRow'

export const TableBody = ({ orders, onDeleteOrder }) => {
    return (
        <tbody>
            {orders.map((item, index) => (
                <TableRow key={index} item={item} onDeleteOrder={onDeleteOrder} />
            ))}
        </tbody>
    )
}
