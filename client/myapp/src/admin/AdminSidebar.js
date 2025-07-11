import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='orderlist'>Amezon Easyship</NavLink>
                </li>
                <li>
                    <NavLink to=''> Product List</NavLink>
                </li>
                <li>
                    <NavLink to='fbaorder'> FBA </NavLink>
                </li>
                <li>
                    <NavLink to=''> Amezon Selfship</NavLink>
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