import React, { useState } from 'react'

const Password = () => {
    const [passwordNew, setPasswordNew] = useState("");
    const [passwordNewC, setPasswordNewC] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Change Password</h2>
            <input type="password" value={passwordNew} onChange={(e) => { setPasswordNew(e.target.value) }} placeholder="New Password" minLength={8} required />
            <input type="password" value={passwordNewC} onChange={(e) => { setPasswordNewC(e.target.value) }} placeholder="Confirm" minLength={8} required />
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Current Password" minLength={8} required />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Password