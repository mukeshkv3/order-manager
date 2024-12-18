/* eslint-disable react/prop-types */
import 'react'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

export const Table = ({ orders, headers }) => {
    return (
        <div>
            <table>
                <TableHeader headers={headers}></TableHeader>
                <TableBody orders={orders}></TableBody>
            </table>
        </div>
    )
}
