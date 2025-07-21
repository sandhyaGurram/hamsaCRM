
import React, { useState } from 'react'
import innerStyles from '../innerpages/innerpages.module.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {
    return (
        <>


            <section className='mobile py-1'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className=''>
                            <AdminSidebar />
                        </div>
                        <div className=''>

                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminDashboard