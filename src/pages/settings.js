import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import photo from "./img/profile.jpg"
import "./css/settings.css"

const Settings = (props) => {
    const logout = () => {
        localStorage.clear();
        props.stlog(false);
    }

    useEffect(() => {
        document.title = "JiniL | Settings";
    }, [])

    return (
        <div className='settings-main'>
            <div className='profile'>
                <img src={photo} alt='' />
                <div className='user-details'>
                    <div className='name'>
                        <h3>{props.details["name"]}</h3>
                    </div>
                    <div className='subtitle'>
                        {props.details["category"] === "*" ? "" : props.details["category"]}
                    </div>
                    <div className='email'>
                        <u>Email:-</u><a id='email-link' rel="noreferrer" href={`mailto:${props.details["email"]}`}>{props.details["email"]}</a>
                    </div>
                    <div className='phone'>
                        <u>Phone:-</u><a id='email-link' rel="noreferrer" href={`tel:${props.details["phone"]}`}>{props.details["phone"]}</a>
                    </div>
                </div>
                <ul className='user-edit'>
                    <li><NavLink to="/cng-email" >Change Email</NavLink></li>
                    <li><NavLink to="/cng-phone">Change Number</NavLink></li>
                    <li><NavLink to="/cng-passwd">Change Password</NavLink></li>
                </ul>
            </div>
            <div className='others'>
                <button className="button-82-pushable" onClick={logout} >
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        Logout
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Settings