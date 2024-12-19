/* eslint-disable react/prop-types */
import 'react'

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
            </td>
        </tr>
    )
}
