import axios from 'axios'
import Select from 'react-select';
import innerStyles from '../innerpages.module.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FBAedit = () => {
    const [date, setdate] = useState('')
    const [customerName, setcustomerName] = useState('')
    const [location, setlocation] = useState('')
    const [orderID, setorderID] = useState('')
    const [products, setproducts] = useState([])
    const [paymentMode, setpaymentMode] = useState('')
    const [amount, setamount] = useState('')
    const [status, setstatus] = useState('')
    let { id } = useParams();

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

    useEffect(() => {
        axios.get(`https://hamsa-backend-4rpv.onrender.com/fbalist/${id}`)
            .then((res) => {
                setdate(res.data.date.slice(0, 10));
                setcustomerName(res.data.customerName)
                setlocation(res.data.location)
                setorderID(res.data.orderID)
                // Map string array to {value, label}
                const selectedProductOptions = res.data.products.map(productName => ({
                    value: productName,
                    label: productName
                }));
                setproducts(selectedProductOptions);
                setpaymentMode(res.data.paymentMode)
                setamount(res.data.amount)
                setstatus(res.data.status)
            })
            .catch(err => console.log(err))
    }, [])

    const editFBA = (e) => {
        e.preventDefault()
        axios.put(`https://hamsa-backend-4rpv.onrender.com/fbalist/${id}`, { date, customerName, location, orderID, products: products.map(p => p.value), paymentMode, amount, status })
            .then((res) => {
                alert("edit success")
                setdate('')
                setcustomerName('')
                setlocation('')
                setorderID('')

                setproducts([])
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
            <h2 className='text-center'>Edit FBA Order List</h2>
            <div className='container-fluid'>


                <div className='col-md-6 m-auto'>
                    <form className={innerStyles.form} onSubmit={editFBA}>
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
                            <Select
                                isMulti
                                name="products"
                                options={productOptions}
                                className="mb-3"
                                classNamePrefix="select"
                                value={products}
                                onChange={handleProductChange}
                            />
                            {/* <select
                                name='products'
                                className='form-control mb-3'
                                multiple
                                value={products}
                                onChange={(e) =>
                                    setproducts(Array.from(e.target.selectedOptions, option => option.value))
                                }
                            >
                                <option value='' disabled hidden>Select a product</option>
                                {productList.map((product, index) => (
                                    <option key={index} value={product.name}>
                                        {product.name}
                                    </option>
                                ))}
                            </select> */}
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
                            <input type='submit' className='btn btn-success' value='update FBA order list' />
                        </div>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default FBAedit