import React from 'react';
import "./index.css";

const Profile = (props) => {
    return (
        <div className="uname">
            <img src={props.photo} alt="" />
            <div className="details">
                <div className='name'>
                    <h4>{props.details[0]}</h4>
                </div>
                <div className='subtitle'>
                    {props.details[1] === "*" ? "" : props.details[1]}
                </div>
                <div className='email'>
                    <u>Email:-</u><a id='email-link' rel="noreferrer" href={`mailto:${props.details[2]}`}>{props.details[2]}</a>
                </div>
                <div className='phone'>
                    <u>Phone:-</u><a id='email-link' rel="noreferrer" href={`tel:${props.details[3]}`}>{props.details[3]}</a>
                </div>
            </div>
        </div>
    )
}

export default Profile