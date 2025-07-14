import React, { useEffect, useState } from 'react'
import innerStyles from './innerpages.module.css'
import axios from 'axios'
import $ from 'jquery';

import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://hamsa-backend-4rpv.onrender.com/product')
            .then(res => {
                console.log("API Data:", res.data);
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            $('#myTable').DataTable();
        }
    }, [data]);

    return (
        <>
            <section className='py-5'>
                <h2 className='text-center'>Products List</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='table-responsive'>
                                <table id="myTable" className='table table-bordered display'>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Quantity</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Array.isArray(data) && data.map((prod) => {
                                                return (
                                                    <tr>
                                                        <td>{prod.name}</td>
                                                        <td>{prod.quantity}</td>

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

export default Home