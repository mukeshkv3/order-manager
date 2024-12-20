/* eslint-disable react/prop-types */
import 'react'
import { Link } from 'react-router-dom'

export const TableRow = ({ item, onDeleteOrder }) => {
    return (
        <tr>
            {
                Object.values(item).map((value, index) => (
                    <td key={index}>{value}</td>
                ))
            }
            <td>
                <button onClick={() => onDeleteOrder(item.id)}>Delete</button>
                <Link to={`/edit/${item.id}`}>Edit</Link>
            </td>
        </tr>
    )
}
