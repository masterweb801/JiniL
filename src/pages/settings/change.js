import React from 'react'
import { useParams } from 'react-router-dom'
import Email from '../../components/Email';
import Phone from '../../components/Phone';
import Password from '../../components/Password';
import "../css/change.css";

const Change = () => {
    let { id } = useParams();

    return (
        <div className='change-main'>
            {id === "cng-email" ? <Email /> : ""}
            {id === "cng-phone" ? <Phone /> : ""}
            {id === "cng-passwd" ? <Password /> : ""}
        </div>
    )
}

export default Change