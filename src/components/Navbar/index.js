import React from 'react'
import "./index.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to="/">
                        <i className='bx bxs-home activeIcon'></i>
                        <span className='nav-label'>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/work">
                        <i className='bx bxs-folder activeIcon'></i>
                        <span className='nav-label'>Work</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user">
                        <i className='bx bxs-user activeIcon'></i>
                        <span className='nav-label'>User</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        <i className='bx bxs-cog activeIcon'></i>
                        <span className='nav-label'>Settings</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;