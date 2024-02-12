import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import photo from "../img/profile.jpg"
import "../css/settings.css"

const Settings = (props) => {
    const [user, setUser] = useState([]);
    const [img, setImg] = useState(photo)

    const logout = () => {
        localStorage.clear();
        props.stlog(false);
    }

    async function getUser() {
        // const url = "https://jinil.rf.gd/api/routes/getUser.php";
        const url = "http://localhost/api/routes/getUser.php";
        const authtoken = localStorage.getItem("tokenflg");
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            },
        });
        const json = await response.json();
        if (json["response_code"] === 200) {
            let rwishes = json["response_data"];
            setUser(rwishes);
            setImg(rwishes['img'])
        } else {
            alert("Something Went Wrong!");
            console.log(json['response_desc']);
        }
        // } catch (error) {
        //     alert("Something Went Wrong!");
        //     console.log(error);
        // }
    }

    useEffect(() => {
        document.title = "JiniL | Settings";
        getUser()
    }, [])

    return (
        <div className='settings-main'>
            <div className='profile'>
                <div className='main-profile'>
                    <img src={img} alt='' />
                    <div className='user-details'>
                        <div className='name'>
                            <h3>{user["name"]}</h3>
                        </div>
                        <div className='subtitle'>
                            {user["category"] === "*" ? "" : user["category"]}
                        </div>
                        <div className='email'>
                            <u>Email:-</u><a id='email-link' rel="noreferrer" href={`mailto:${user["email"]}`}>{user["email"]}</a>
                        </div>
                        <div className='phone'>
                            <u>Phone:-</u><a id='email-link' rel="noreferrer" href={`tel:${user["phone"]}`}>{user["phone"]}</a>
                        </div>
                    </div>
                </div>
                <ul className='user-edit'>
                    <li><NavLink to="/settings/cng-email" >Change Email</NavLink></li>
                    <li><NavLink to="/settings/cng-phone">Change Number</NavLink></li>
                    <li><NavLink to="/settings/cng-passwd">Change Password</NavLink></li>
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