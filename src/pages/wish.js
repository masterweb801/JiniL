import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import "./css/wish.css"

const Wish = () => {
    let { id } = useParams();
    const [details, setdetails] = useState([]);

    const getDetails = useCallback(async () => {
        const url = "http://localhost/api/routes/getDetails.php";
        const authtoken = localStorage.getItem("tokenflg");
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ authtoken, id })
            });
            const json = await response.json();
            if (json["response_code"] === 200) {
                let rwishes = json["response_data"];
                setdetails(rwishes);
            } else {
                alert("Something Went Wrong!");
            }

        } catch (error) {
            alert("Something Went Wrong!");
            console.log(error);
        }

    }, [id])

    useEffect(() => {
        document.title = `Wish No. ${id}`;
        getDetails();
    }, [id, getDetails]);
    return (
        <div className='container'>

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
            <button className='button-89'>Start Working</button>
        </div>
    )
}

export default Wish