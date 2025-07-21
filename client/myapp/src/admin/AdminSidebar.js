import React from 'react'
import innerStyles from '../innerpages/innerpages.module.css'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'


const AdminSidebar = ({ show, setShowNav }) => {
    const handleNavClick = () => {
        setShowNav(false)
    }
    return (

        <div className={show ? 'sidenav active' : 'sidenav'}>
            <h4>Navigation</h4>
            <ul>
                <li>
                    <NavLink to='orderlist' onClick={handleNavClick}>Order List</NavLink>
                </li>
                <li>
                    <NavLink to='fbaorder' onClick={handleNavClick}> Product List</NavLink>
                </li>
                <li>
                    <NavLink to='postorderlist' onClick={handleNavClick}>Post Product List</NavLink>
                </li>
                <li>
                    <NavLink to='fbaorder' onClick={handleNavClick}> FBA </NavLink>
                </li>
                <li>
                    <NavLink to='postfbaorderlist' onClick={handleNavClick}> Post FBA Orders</NavLink>
                </li>
                <li>
                    <NavLink to='amezonselfship' onClick={handleNavClick}> Amezon Selfship</NavLink>
                </li>
                <li>
                    <NavLink to='imageupload' onClick={handleNavClick}> Image Upload</NavLink>
                </li>
                <li>
                    <NavLink to='fliplist' onClick={handleNavClick}> FlipKart</NavLink>
                </li>
                <li>
                    <NavLink to='myntraorderlist' onClick={handleNavClick}> Myntra</NavLink>
                </li>
                <li>
                    <NavLink to='weborderlist' onClick={handleNavClick}> Website Orders</NavLink>
                </li>

            </ul>
        </div>





    )
}

export default AdminSidebar