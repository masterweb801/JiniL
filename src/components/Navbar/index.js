import React, { useEffect } from 'react'
import "./index.css";

const Navbar = () => {
    useEffect(() => {
        const navBar = document.querySelector(".navbar")
        const allLi = document.querySelectorAll("li");

        allLi.forEach((li, index) => {
            li.addEventListener("click", e => {
                e.preventDefault();
                navBar.querySelector(".active").classList.remove("active");
                li.classList.add("active");

                const indicator = document.querySelector(".indicator");
                indicator.style.transform = `translateX(calc(${index * 25}vw))`;
            });
        });
    }, []);
    return (
        <div className="navbar">
            <ul>
                <li className="active">
                    <a href="#">
                        <i className='bx bx-home icon'></i>
                        <i className='bx bxs-home activeIcon'></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user icon'></i>
                        <i className='bx bxs-user activeIcon'></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-folder icon'></i>
                        <i className='bx bxs-folder activeIcon'></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-cog icon'></i>
                        <i className='bx bxs-cog activeIcon'></i>
                    </a>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    )
}

export default Navbar;