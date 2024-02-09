import React, { useEffect } from 'react'
import "./css/settings.css"

const Settings = (props) => {
    const logout = () => {
        localStorage.clear();
        props.stlog(false);
    }

    useEffect(() => {
        document.title = "JiniL | Settings";
    }, [])

    return (
        <div className='settings-main'>
            <button className="button-82-pushable" onClick={logout} >
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                    Logout
                </span>
            </button>
        </div>
    )
}

export default Settings