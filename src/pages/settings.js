import React from 'react'

const Settings = (props) => {
    const logout = () => {
        localStorage.clear();
        props.stlog(false);
    }
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Settings