import React from 'react';
import "./css/login.css";
import "./css/util.css";
import image from "./img/login.png";

const Login = () => {
    return (
        <div className="container-login100">
            <div className="wrap-login100">
                <div className="login100-pic js-tilt" data-tilt>
                    <img src={image} alt="IMG" />
                </div>

                <form className="login100-form validate-form">
                    <span className="login100-form-title">
                        Member Login
                    </span>

                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input className="input100" type="email" name="email" placeholder="Email" required autoComplete='true' />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="bx bxs-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                        <input className="input100" type="password" name="pass" placeholder="Password" />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="bx bxs-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login