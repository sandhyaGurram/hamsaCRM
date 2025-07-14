import axios from 'axios'
import React, { useState } from 'react'
import innerStyles from './innerpages.module.css'

const PostOrderList = () => {
    const [date, setdate] = useState('')
    const [customerName, setcustomerName] = useState('')
    const [location, setlocation] = useState('')
    const [orderID, setorderID] = useState('')
    const [AWB, setAWB] = useState('')
    const [products, setproducts] = useState('')
    const [paymentMode, setpaymentMode] = useState('')
    const [amount, setamount] = useState('')
    const [status, setstatus] = useState('')


    const orderListData = (e) => {
        e.preventDefault();
        axios.post('https://hamsa-backend-4rpv.onrender.com/orderlist', { date, customerName, location, orderID, AWB, products, paymentMode, amount, status })
            .then((res) => {
                alert("data added success")
                setdate('')
                setcustomerName('')
                setlocation('')
                setorderID('')
                setAWB('')
                setproducts('')
                setpaymentMode('')
                setamount('')
                setstatus('')
            })
            .catch(err => console.log(err))

    }

    const productList = [
        { name: 'Glow Moisturizer' },
        { name: 'Hair Growth Serum' },
        { name: 'Vitamin C Face Wash' },
        { name: 'Sunscreen SPF 50' },
        { name: 'Collagen Cream' }
    ];

    return (
        <>


            <section className='py-1'>
                <h2 className='text-center'>Post Order List</h2>
                <div className='container'>
                    <div className='row'>

                        <div className='col-md-8'>
                            <form className={innerStyles.form} onSubmit={orderListData}>
                                <div className=''>
                                    <input type='date' name='date' placeholder='date' className='form-control mb-3' value={date} onChange={(e) => setdate(e.target.value)} />
                                </div>
                                <div className=''>
                                    <input type='text' name='customerName' placeholder='customerName' className='form-control mb-3' value={customerName} onChange={(e) => setcustomerName(e.target.value)} />
                                </div>
                                <div className=''>
                                    <input type='text' name='location' placeholder='location' className='form-control mb-3' value={location} onChange={(e) => setlocation(e.target.value)} />
                                </div>
                                <div className=''>
                                    <input type='text' name='orderID' placeholder='orderID' className='form-control mb-3' value={orderID} onChange={(e) => setorderID(e.target.value)} />
                                </div>
                                <div className=''>
                                    <input type='text' name='AWB' placeholder='AWB' className='form-control mb-3' value={AWB} onChange={(e) => setAWB(e.target.value)} />
                                </div>
                                <div className=''>
                                    <select
                                        name='products'
                                        className='form-control mb-3'
                                        value={products}
                                        onChange={(e) => setproducts(e.target.value)}
                                    >
                                        <option value='' disabled hidden>Select a product</option>
                                        {productList.map((product, index) => (
                                            <option key={index} value={product.name}>
                                                {product.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className=''>
                                    <select
                                        name='paymentMode'
                                        className='form-control mb-3'
                                        value={paymentMode}
                                        onChange={(e) => setpaymentMode(e.target.value)}
                                    >
                                        <option value='' disabled hidden>Select Payment Mode</option>
                                        <option value='Prepaid'>Prepaid</option>
                                        <option value='COD'>COD</option>
                                    </select>
                                </div>
                                <div className=''>
                                    <input type='number' name='amount' placeholder='amount' className='form-control mb-3' value={amount} onChange={(e) => setamount(e.target.value)} />
                                </div>
                                <div className=''>
                                    <input type='text' name='status' placeholder='status' className='form-control mb-3' value={status} onChange={(e) => setstatus(e.target.value)} />
                                </div>

                                <div className=''>
                                    <input type='submit' className='btn btn-success' value='Add order list' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostOrderList