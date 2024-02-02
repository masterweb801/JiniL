import React, { useState } from 'react'
import "./index.css";
import { Navigate } from "react-router-dom";

const Offer = (props) => {
    const [show, setShow] = useState(false)
    function showMore() {
        setShow(true)
    }
    return (
        <div className="card">
            <div className="card-corner"></div>
            <div className="card-img">
                <span className="card-span">{props.cat}</span>
            </div>
            <div className="card-int">
                <div className="card-int-title">{props.title}</div>
                <div className="excerpt">{props.desc}</div>
                <button className="card-int-button" onClick={showMore}>Read More</button>
            </div>
            {show === false ? "" : <Navigate to={`/offer/${props.id}`} />}
        </div>
    )
}

export default Offer