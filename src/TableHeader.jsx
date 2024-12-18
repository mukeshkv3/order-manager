import React from 'react'
import { TableRow } from './TableRow'

export const TableHeader = ({ headers }) => {
    return (
        <thead>
            <tr>
                {headers.map((header, index) => (<th key={index}>{header}</th>))}
            </tr>
        </thead>
    )
}
