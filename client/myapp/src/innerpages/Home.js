import React, { useEffect, useState } from 'react'
import innerStyles from './innerpages.module.css'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/product')
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='table-responsive'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Quantity</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((prod) => {
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