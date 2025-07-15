
import React, { useState } from 'react'
import innerStyles from '../innerpages/innerpages.module.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
    return (
        <>
            <section className={innerStyles.breadc}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4>Admin Dashboard</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-1'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <AdminSidebar />
                        </div>
                        <div className='col-md-9'>

                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminDashboard