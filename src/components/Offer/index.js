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
                <span className="card-span">{props.item[1]}</span>
            </div>
            <div className="card-int">
                <div className="card-int-title">{props.item[2]}</div>
                <div className="excerpt">{props.item[3]}</div>
                <button className="card-int-button" onClick={showMore}>Read More</button>
            </div>
            {show === false ? "" : <Navigate to={`/offer/${props.item[0]}`} />}
        </div>
    )
}

export default Offer