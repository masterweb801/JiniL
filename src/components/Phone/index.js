import React, { useState } from 'react'

const Phone = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Change Phone Number</h2>
            <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder="New Number" autoComplete='true' required />
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Current Password" minLength={8} required />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Phone