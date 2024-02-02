import React, { useEffect } from 'react'
import "./index.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    useEffect(() => {
        const navBar = document.querySelector(".navbar")
        const allLi = document.querySelectorAll("li");

        allLi.forEach((li, index) => {
            li.addEventListener("click", () => {
                navBar.querySelector(".active").classList.remove("active");
                li.classList.add("active");

                const indicator = document.querySelector(".indicator");
                indicator.style.left = `${(index * 25) + 12.5}vw`;
            });
        });
    }, []);
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
                    <NavLink to="/user">
                        <div className='nav-icon'>
                            <i className='bx bx-user icon'></i>
                            <i className='bx bxs-user activeIcon'></i>
                        </div>
                        <div className='nav-label'>
                            <span>User</span>
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