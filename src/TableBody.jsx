/* eslint-disable react/prop-types */
import 'react'
import { TableRow } from './TableRow'

export const TableBody = ({ orders }) => {
    return (
        <tbody>
            {orders.map((item, index) => (
                <TableRow key={index} item={item} />
            ))}
        </tbody>
    )
}
