import React, { useEffect, useState } from 'react';
import Profile from '../components/Profile';
import photo from "./img/profile.jpg";
import "./css/help.css";
import api from "../server/api"

const Help = () => {
    const [workers, setWorkers] = useState([]);
    const [wrks, setwrks] = useState(false);

    const getHelp = async () => {
        const authtoken = localStorage.getItem("tokenflg");
        const url = api + "/api/routes/fetchHelpers.php";
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            }
        });
        const json = await response.json();
        if (json["response_code"] === 200) {
            let rwishes = json["response_data"];
            if (rwishes.length > 0) {
                setWorkers(rwishes);
                setwrks(true);
            } else {
                setwrks(false);
            }
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
        document.title = "JiniL | Help";
        getHelp();
    }, [])

    return (
        <div className='help-main'>
            <h1>Need Assistance?</h1>
            {wrks === true ?
                <div className='profiles'>
                    {workers.map((item, index) => {
                        if (item[4] !== "") {
                            return <Profile key={index} photo={item[4]} details={item} />
                        } else {
                            return <Profile key={index} photo={photo} details={item} />
                        }
                    })}
                </div> :
                <div className='help-error'>
                    <div>
                        Everyone is Busy Now. But You Can<a id='email-link' style={{ fontSize: "26px", color: "#fff", textDecoration: "underline" }} href='mailto:masterweb801@gmail.com'>Contact Us</a>!
                    </div>
                </div>}
        </div>
    )
}

export default Help