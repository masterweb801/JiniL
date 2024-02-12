import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Phone = () => {
    const [done, setDone] = useState(false);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        // const url = "https://jinil.rf.gd/api/routes/changeDetails.php";
        const url = "http://localhost/api/routes/changeDetails.php";
        const authtoken = localStorage.getItem("tokenflg");
        // try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authtoken
            },
            body: JSON.stringify({ phone, password })
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
                    <h2>Change Phone Number</h2>
                    <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="New Number" autoComplete='true' required />
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Current Password" minLength={8} required />
                    <button type='submit'>Submit</button>
                </>
            }
        </form>
    )
}

export default Phone