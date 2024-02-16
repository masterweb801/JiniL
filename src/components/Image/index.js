import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// const api = process.env.REACT_APP_API
const api = ""

const Image = () => {
    const [done, setDone] = useState(false);
    const [img, setImg] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = api + "/api/routes/changeDetails.php";
        const authtoken = localStorage.getItem("tokenflg");
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            },
            body: JSON.stringify({ img, password })
        });
        const json = await response.json();
        if (json["response_code"] === 200) {
            let rwishes = json["response_data"];
            setDone(rwishes);
        } else {
            alert("Something Went Wrong!");
            console.log(json["response_desc"]);
        }
        // } catch (error) {
        //     alert("Something Went Wrong!");
        //     console.log(error);
        // }
    }

    return (
        <form onSubmit={handleSubmit}>
            {done === true ?
                <Navigate to="/settings" /> :
                <>
                    <h2>Change Image</h2>
                    <input type="text" value={img} onChange={(e) => { setImg(e.target.value) }} placeholder="New Image Link" required />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Current Password" minLength={8} required />
                    <button type='submit'>Submit</button>
                </>
            }
        </form>
    )
}

export default Image