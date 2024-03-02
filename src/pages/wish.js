import React, { useEffect, useState, useCallback } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import "./css/wish.css"
import api from "../server/api"

const Wish = () => {
    let { id } = useParams();
    const [details, setdetails] = useState([]);
    const [work, setwork] = useState(false);

    const getDetails = useCallback(async () => {
        const url = api + "/api/routes/getDetails.php";
        const authtoken = localStorage.getItem("tokenflg");

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authtoken
                },
                body: JSON.stringify({ id })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();

            if (json && json["response_code"] === 200) {
                let rwishes = json["response_data"];
                setdetails(rwishes);
            } else {
                alert("Something Went Wrong!");
                console.log(json['response_desc']);
            }
        } catch (error) {
            alert("Something Went Wrong!");
            console.error('Error:', error);
        }
    }, [id]);

    async function startWork() {
        const url = api + "/api/routes/startWork.php";
        const authtoken = localStorage.getItem("tokenflg");
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            },
            body: JSON.stringify({ id })
        });
        const json = await response.json();
        if (json["response_code"] === 200) {
            let rwishes = json["response_data"];
            setwork(rwishes);
        } else {
            alert("Something Went Wrong!");
            console.log(json["response_desc"]);
        }
        // } catch (error) {
        //     alert("Something Went Wrong!");
        //     console.log(error);
        // }
    }

    useEffect(() => {
        document.title = `Wish No. ${id}`;
        getDetails();
    }, [id, getDetails]);
    return (
        <div className='container'>
            {work === true ? <Navigate to="/work" /> : ""}
            <h1>{details['title']}</h1>

            <div className='main'>

                <ul className='extra'>
                    <li>
                        <label>
                            <i className='bx bxs-id-card'></i>
                            <b>WISH ID</b>
                        </label>
                        <p>{id}</p>
                    </li>
                    <li>
                        <label>
                            <i className='bx bx-street-view'></i>
                            <b>NAME</b>
                        </label>
                        <p>{details['name']}</p>
                    </li>
                    <li>
                        <label>
                            <i className='bx bxs-envelope'></i>
                            <b>EMAIL</b>
                        </label>
                        <a id='email-link' target='_blank' rel="noreferrer" href={`mailto:${details['email']}`}>{details['email']}</a>
                    </li>
                    <li>
                        <label>
                            <i className='bx bxs-category' ></i>
                            <b>CATEGORY</b>
                        </label>
                        <p>{details['category']}</p>
                    </li>
                    <li>
                        <label>
                            <i className='bx bx-money'></i>
                            <b>BUDGET</b>
                        </label>
                        <p>{details['budget']} $</p>
                    </li>
                </ul>

                <div className='content'>
                    <h2>Details :-</h2>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;{details['details']}
                    </p>
                </div>
            </div>
            <button className='button-89' onClick={startWork}>Start Working</button>
        </div>
    )
}

export default Wish