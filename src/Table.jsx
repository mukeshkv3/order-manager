/* eslint-disable react/prop-types */
import 'react'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

export const Table = ({ orders, headers, onDeleteOrder }) => {
    return (
        <div>
            <table class="table-bordered">
                <TableHeader headers={headers}></TableHeader>
                <TableBody orders={orders} onDeleteOrder={onDeleteOrder}></TableBody>
            </table>
        </div>
    )
}
