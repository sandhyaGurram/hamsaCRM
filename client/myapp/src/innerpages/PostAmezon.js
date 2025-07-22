import axios from 'axios'
import Select from 'react-select';
import React, { useState } from 'react'
import innerStyles from './innerpages.module.css'
import '../admin/Sidebar.css'

const PostAmezon = () => {
    const [date, setdate] = useState('')
    const [customerName, setcustomerName] = useState('')
    const [location, setlocation] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')

    const [orderID, setorderID] = useState('')
    const [awb, setawb] = useState('')
    const [products, setproducts] = useState([])
    const [paymentMode, setpaymentMode] = useState('')
    const [amount, setamount] = useState('')
    const [status, setstatus] = useState('')


    const productOptions = [
        { value: 'Glow Moisturizer', label: 'Glow Moisturizer' },
        { value: 'Hair Growth Serum', label: 'Hair Growth Serum' },
        { value: 'Vitamin C Face Wash', label: 'Vitamin C Face Wash' },
        { value: 'Sunscreen SPF 50', label: 'Sunscreen SPF 50' },
        { value: 'Collagen Cream', label: 'Collagen Cream' },
    ];

    const handleProductChange = (selectedOptions) => {
        setproducts(selectedOptions);
    };

    const AmezonData = (e) => {
        e.preventDefault();
        axios.post('https://hamsa-backend-4rpv.onrender.com/fbalist', { date, customerName, location, orderID, products: products.map(p => p.value), paymentMode, amount, status })
            .then((res) => {
                alert("data added success")
                setdate('')
                setcustomerName('')
                setlocation('')
                setorderID('')

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
        <section className='mobile  py-1'>
            <h2 className='text-center'>Post Amezon Order List</h2>
            <div className='container-fluid'>


                <div className='col-md-6 m-auto'>
                    <form className={innerStyles.form} onSubmit={AmezonData}>
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
                            <input type='number' name='phoneNumber' placeholder='phoneNumber' className='form-control mb-3' value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
                        </div>
                        <div className=''>
                            <input type='text' name='orderID' placeholder='orderID' className='form-control mb-3' value={orderID} onChange={(e) => setorderID(e.target.value)} />
                        </div>
                        <div className=''>
                            <input type='text' name='awb' placeholder='awb' className='form-control mb-3' value={awb} onChange={(e) => setawb(e.target.value)} />
                        </div>

                        <div className=''>
                            <Select
                                isMulti
                                name="products"
                                options={productOptions}
                                className="mb-3"
                                classNamePrefix="select"
                                value={products}
                                onChange={handleProductChange}
                            />

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
                            <input type='submit' className='btn btn-success' value='Add FBA order list' />
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default PostAmezon