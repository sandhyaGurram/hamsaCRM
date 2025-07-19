import React, { useState } from 'react'
import './testHeader.css'
import { GiHamburgerMenu } from "react-icons/gi";
import AdminSidebar from '../admin/AdminSidebar';
const Test_Header = () => {
    const [showNav, setShowNav]=useState(false)
  return (
    <div className='test-header'>
        <header><GiHamburgerMenu onClick={()=>setShowNav(!showNav)} /></header>
    < AdminSidebar show={showNav} setShowNav={setShowNav}/>
    </div>
  )
}

export default Test_Header