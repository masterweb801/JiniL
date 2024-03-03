import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import api from "../../server/api"

const Password = () => {
    const [done, setDone] = useState(false);
    const [passwordNew, setPasswordNew] = useState("");
    const [passwordNewC, setPasswordNewC] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordNew === passwordNewC) {
            const url = api + "/api/routes/changeDetails.php";
            const authtoken = localStorage.getItem("tokenflg");
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": authtoken
                    },
                    body: JSON.stringify({ passwordNew, password })
                });
                const json = await response.json();
                if (json["response_code"] === 200) {
                    let rwishes = json["response_data"];
                    setDone(rwishes);
                } else {
                    alert("Something Went Wrong!");
                    console.log(json["response_desc"]);
                }
            } catch (error) {
                alert("Something Went Wrong!");
                console.log(error);
            }
        } else {
            alert("Passwords Doesn't Match!");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {done === true ?
                <Navigate to="/settings" /> :
                <>
                    <h2>Change Password</h2>
                    <input type="password" value={passwordNew} onChange={(e) => { setPasswordNew(e.target.value) }} placeholder="New Password" minLength={8} required />
                    <input type="password" value={passwordNewC} onChange={(e) => { setPasswordNewC(e.target.value) }} placeholder="Confirm" minLength={8} required />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Current Password" minLength={8} required />
                    <button type='submit'>Submit</button>
                </>
            }
        </form>
    )
}

export default Password