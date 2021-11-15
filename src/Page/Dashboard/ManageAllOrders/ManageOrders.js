import { Button, Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { TableCell } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    const productShipped = e => {

        e.preventDefult();
    }


    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setOrders(data))
    }, [user.email])
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '50%' }} aria-label="Ordered List">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Item Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Shipping</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="right">{row.orderName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right"><Button onClick={() => productShipped}></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div >
    );
};

export default ManageOrders;