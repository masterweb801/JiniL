import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Email = () => {
    const [done, setDone] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "/api/routes/changeDetails.php";
        // const url = "http://localhost/api/routes/changeDetails.php";
        const authtoken = localStorage.getItem("tokenflg");
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            },
            body: JSON.stringify({ email, password })
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
                    <h2>Change Email</h2>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="New Email" autoComplete='true' required />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Current Password" minLength={8} required />
                    <button type='submit'>Submit</button>
                </>
            }
        </form>
    )
}

export default Email