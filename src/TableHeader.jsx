/* eslint-disable react/prop-types */
import 'react'

export const TableHeader = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => (<th key={index}>{header}</th>))}
            </tr>
        </thead>
    )
}
