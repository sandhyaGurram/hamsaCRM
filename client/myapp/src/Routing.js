import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OrderList from './innerpages/OrderList'
import Home from './innerpages/Home'
import AdminDashboard from './admin/AdminDashboard'
import FBAOrder from './innerpages/FBAOrder'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/orderlist' element={<OrderList />} />
                <Route path='/admindashboard' element={<AdminDashboard />} >
                    <Route path='orderlist' element={<OrderList />} />
                    <Route path='' element={<Home />} />
                    <Route path='fbaorder' element={<FBAOrder />} />


                </Route>


            </Routes>
        </div>
    )
}

export default Routing