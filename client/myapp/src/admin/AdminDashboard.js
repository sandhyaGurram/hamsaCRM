
// AdminDashboard.js
import React, { useState } from 'react'
import innerStyles from '../innerpages/innerpages.module.css'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

const AdminDashboard = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);
    return (
        <>
            <section>
                <div className='container-fluied'>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-auto'>
                            <button onClick={toggleMenu} className="btn btn-primary">
                                ☰ Toggle Sidebar
                            </button>
                        </div>
                        <div className='col-6'>
                            <h4>Admin Dashboard</h4>
                        </div>

                    </div>
                </div>
            </section>

            <AdminSidebar isOpen={menuOpen} onClose={closeMenu} />

            <section className='py-1' style={{ marginLeft: '280px' }}>
                <div className='container-fluid'>
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default AdminDashboard




























// import React, { useState } from 'react'
// import innerStyles from '../innerpages/innerpages.module.css'
// import { NavLink, Outlet, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import AdminSidebar from './AdminSidebar'

// const AdminDashboard = () => {
//     return (
//         <>
//             <section className={innerStyles.breadc}>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-md-12'>
//                             <h4>Admin Dashboard</h4>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className='py-1'>
//                 <div className='container-fluid'>
//                     <div className='row'>
//                         <div className='col-md-3'>
//                             <AdminSidebar />
//                         </div>
//                         <div className='col-md-9'>

//                             <Outlet />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default AdminDashboard