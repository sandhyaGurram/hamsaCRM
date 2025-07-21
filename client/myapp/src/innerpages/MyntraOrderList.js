import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import axios from 'axios';

const MyntraOrderList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://hamsa-backend-4rpv.onrender.com/myntraorder')
            .then(res => {
                console.log("API Data:", res.data);
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            $('#myTable').DataTable();
        }
    }, [data]);
    return (
        <section className='py-5'>
            <h2 className='text-center'>Myntra Order List</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='table-responsive'>
                            <table id="myTable" className='table table-bordered display'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Customer Name</th>
                                        <th>Location</th>
                                        <th>packetId</th>

                                        <th>AWB</th>
                                        <th>Products</th>
                                        <th>PaymentMode</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Array.isArray(data) && data.map((prod, index) => (
                                            <tr key={index}>
                                                <td>{new Date(prod.date).toLocaleDateString('en-CA')}</td>
                                                <td>{prod.customerName}</td>
                                                <td>{prod.location}</td>
                                                <td>{prod.packetId}</td>

                                                <td>{prod.awb}</td>
                                                <td>{prod.products}</td>
                                                <td>{prod.paymentMode}</td>
                                                <td>{prod.amount} Rs/-</td>
                                                <td>{prod.status}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyntraOrderList