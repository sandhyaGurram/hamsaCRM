import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OrderList from './innerpages/OrderList'
import Home from './innerpages/Home'
import AdminDashboard from './admin/AdminDashboard'
import FBAOrder from './innerpages/FBAOrder'
import PostOrderList from './innerpages/PostOrderList'
import PostEBAorders from './innerpages/PostEBAorders'
import AmazonSelfShipList from './innerpages/AmazonSelfShipList'

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
                    <Route path='postfbaorderlist' element={<PostEBAorders />} />
                    <Route path='postorderlist' element={<PostOrderList />} />
                    <Route path='amezonselfship' element={<AmazonSelfShipList />} />


                </Route>


            </Routes>
        </div>
    )
}

export default Routing