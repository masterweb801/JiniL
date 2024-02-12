import React, { useState } from 'react'

const Email = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Change Email</h2>
            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="New Email" autoComplete='true' required />
            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Current Password" minLength={8} required />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Email