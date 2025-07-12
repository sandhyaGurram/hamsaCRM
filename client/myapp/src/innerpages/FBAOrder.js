import React, { useEffect, useState } from 'react'
import innerStyles from './innerpages.module.css'
import axios from 'axios'

const FBAOrder = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/fbalist')
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <section className='py-5'>
                <h2 className='text-center'>FBA Order List</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Customer Name</th>
                                            <th>Location</th>
                                            <th>OrderID</th>
                                            <th>Products</th>
                                            <th>PaymentMode</th>
                                            <th>Amount</th>
                                            <th>Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((prod) => {
                                                return (
                                                    <tr>
                                                        <td>{new Date(prod.date).toLocaleDateString('en-CA')}</td>
                                                        <td>{prod.customerName}</td>
                                                        <td>{prod.location}</td>
                                                        <td>{prod.orderID}</td>
                                                        <td>{prod.products}</td>
                                                        <td>{prod.paymentMode}</td>
                                                        <td>{prod.amount}</td>
                                                        <td>{prod.status}</td>


                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FBAOrder