import React from 'react'
import innerStyles from '../innerpages/innerpages.module.css'

import { NavLink } from 'react-router-dom'


const AdminSidebar = () => {
    return (

        <div className={innerStyles.sidebar}>
            <h4>Sidebar</h4>
            <ul>
                <li>
                    <NavLink to='orderlist'>Order List</NavLink>
                </li>
                <li>
                    <NavLink to=''> Product List</NavLink>
                </li>
                <li>
                    <NavLink to='postorderlist'>Post Product List</NavLink>
                </li>
                <li>
                    <NavLink to='fbaorder'> FBA </NavLink>
                </li>
                <li>
                    <NavLink to='postfbaorderlist'> Post FBA Orders</NavLink>
                </li>
                <li>
                    <NavLink to='amezonselfship'> Amezon Selfship</NavLink>
                </li>
                <li>
                    <NavLink to=''> Meeshow</NavLink>
                </li>
                <li>
                    <NavLink to=''> FlipKart</NavLink>
                </li>
                <li>
                    <NavLink to=''> Myntra</NavLink>
                </li>
                <li>
                    <NavLink to=''> Website Orders</NavLink>
                </li>

            </ul>
        </div>





    )
}

export default AdminSidebar