import React, { useEffect } from 'react'
import "./index.css";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();

    function changeIndicator(index) {
        const navBar = document.querySelector(".navbar");
        const allLi = navBar.querySelectorAll("li");
        allLi.forEach((li, ind) => {
            if (ind === index) {
                li.classList.add("active");
            } else {
                li.classList.remove("active");
            }
        });
        const indicator = navBar.querySelector(".indicator");
        indicator.style.left = `${(index * 25) + 12.5}vw`;
    };

    useEffect(() => {
        const listLoc = {
            "/": 0,
            "/work": 1,
            "/help": 2,
            "/settings": 3,
            "/settings/cng-email": 3,
            "/settings/cng-phone": 3,
            "/settings/cng-passwd": 3,
            "/settings/cng-img": 3,
        };
        if (listLoc[location.pathname] !== undefined) {
            changeIndicator(listLoc[location.pathname]);
        }
    }, [location]);
    return (
        <div className="navbar">
            <ul>
                <li className="active">
                    <NavLink to="/">
                        <div className='nav-icon'>
                            <i className='bx bx-home icon'></i>
                            <i className='bx bxs-home activeIcon'></i>
                        </div>
                        <div className='nav-label'>
                            <span>Home</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/work">
                        <div className='nav-icon'>
                            <i className='bx bx-folder icon'></i>
                            <i className='bx bxs-folder activeIcon'></i>
                        </div>
                        <div className='nav-label'>
                            <span>Work</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/help">
                        <div className='nav-icon'>
                            <i className='bx bx-user icon'></i>
                            <i className='bx bxs-user activeIcon'></i>
                        </div>
                        <div className='nav-label'>
                            <span>Help</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings">
                        <div className='nav-icon'>
                            <i className='bx bx-cog icon'></i>
                            <i className='bx bxs-cog activeIcon'></i>
                        </div>
                        <div className='nav-label'>
                            <span>Settings</span>
                        </div>
                    </NavLink>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    )
}

export default Navbar;