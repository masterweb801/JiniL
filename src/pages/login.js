import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import "./css/login.css";
import "./css/util.css";
import image from "./img/login.png";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLoginClick(event) {
        event.preventDefault();
        // const url = "https://jinil.rf.gd/api/routes/login.php";
        const url = "https://localhost/api/routes/login.php";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });
            const json = await response.json();
            if (json['response_code'] === 200) {
                localStorage.setItem('tokenflg', json['response_data'])
                props.stlog(true);
            } else {
                alert("Invalid Credentials")
            }

            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        document.title = "JiniL | Login";
    }, [])

    return (
        <div className="container-login100">
            {props.log === true ? <Navigate to="/" /> : ""}
            <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                    <img src={image} alt="IMG" />
                </div>

                <form className="login100-form validate-form">
                    <span className="login100-form-title">
                        Member Login
                    </span>

                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input className="input100" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" autoComplete='true' required />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="bx bxs-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <input className="input100" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" minLength={8} required />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="bx bxs-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn" type='submit' onClick={handleLoginClick}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login