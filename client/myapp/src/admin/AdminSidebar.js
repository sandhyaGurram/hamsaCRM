import React from 'react'
import innerStyles from '../innerpages/innerpages.module.css'
import { scaleRotate as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const AdminSidebar = ({ isOpen, onClose }) => {
    return (
        <Menu
            isOpen={isOpen}
            onStateChange={({ isOpen }) => !isOpen && onClose()}
            customBurgerIcon={false}  // HIDE the default icon
        >
            <NavLink className="menu-item" to="orderlist">Order List</NavLink>
            <NavLink className="menu-item" to="">Product List</NavLink>
            <NavLink className="menu-item" to="postorderlist">Post Product List</NavLink>
            <NavLink className="menu-item" to="fbaorder">FBA</NavLink>
            <NavLink className="menu-item" to="postfbaorderlist">Post FBA Orders</NavLink>
            <NavLink className="menu-item" to="amezonselfship">Amazon Selfship</NavLink>
            <NavLink className="menu-item" to="">Meesho</NavLink>
            <NavLink className="menu-item" to="">Flipkart</NavLink>
            <NavLink className="menu-item" to="">Myntra</NavLink>
            <NavLink className="menu-item" to="">Website Orders</NavLink>
        </Menu>





        // <div >
        //     <h4>Sidebar</h4>
        //     <ul>
        //         <li>
        //             <NavLink className="menu-item" to='orderlist'>Order List</NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to=''> Product List</NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to='postorderlist'>Post Product List</NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to='fbaorder'> FBA </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to='postfbaorderlist'> Post FBA Orders</NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to='amezonselfship'> Amezon Selfship</NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to=''> Meeshow</NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to=''> FlipKart</NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to=''> Myntra</NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="menu-item" to=''> Website Orders</NavLink>
        //         </li>

        //     </ul>
        // </div>
    )
}

export default AdminSidebar