import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
import axios from 'axios';
import '../admin/Sidebar.css'

const FlipList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://hamsa-backend-4rpv.onrender.com/flipkartorder')
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
    <section className='mobile py-5'>
      <h2 className='text-center'>Flipkart Order List</h2>
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
                    <th>Order Id</th>

                    <th>AWB</th>
                    <th>Products</th>
                    <th>PaymentMode</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Delivery date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Array.isArray(data) && data.map((prod, index) => (
                      <tr key={index}>
                        <td>{new Date(prod.date).toLocaleDateString('en-CA')}</td>
                        <td>{prod.customerName}</td>
                        <td>{prod.location}</td>
                        <td>{prod.orderId}</td>

                        <td>{prod.awb}</td>
                        <td>{prod.products}</td>
                        <td>{prod.payment}</td>
                        <td>{prod.amount} Rs/-</td>
                        <td>{prod.status}</td>
                        <td>{new Date(prod.deliveryDate).toLocaleDateString('en-CA')}</td>
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

export default FlipList