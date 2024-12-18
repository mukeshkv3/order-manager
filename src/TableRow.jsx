import React from 'react'

export const TableRow = ({ item }) => {
    return (
        <tr>
            {
                Object.values(item).map((value, index) => (
                    <td key={index}>{value}</td>
                ))
            }
        </tr>
    )
}
