import React, { useEffect } from 'react'

const Settings = (props) => {
    const logout = () => {
        localStorage.clear();
        props.stlog(false);
    }

    useEffect(() => {
        document.title = "JiniL | Settings";
    }, [])

    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Settings