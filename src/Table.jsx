import React from 'react'
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
        // <table> 
        //     <thead> 
        //         <tr> 
        //             <th>ID</th> 
        //             <th>Name</th> 
        //         </tr> 
        //     </thead> 
        //     <tbody> 
        //         {data.map((item, index) => (
        //             <tr key={index}> 
        //                 <td>{item.id}</td> 
        //                 <td>{item.name}</td> 
        //             </tr>))} 
        //     </tbody>
        // </table>
    )
}
