import React from 'react'
import { NavLink } from 'react-router-dom'
import headerstyles from './header.module.css'

const Header = () => {
    return (
        <header>
            <div className={headerstyles.topbar}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <ul className='mb-0 py-2'>
                                <li>
                                    <NavLink to="tel:9059599494">+91 9059599494</NavLink>
                                </li>
                                <li>
                                    <NavLink to="mailto:info@hamsaradiance.com">info@hamsaradiance.com</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <NavLink>
                                <button>Order</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Hamsa Radiance</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/addstudent">Add Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/deletestudent">Delete Student</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Sign Up</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admindashboard">Dashboard</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header




