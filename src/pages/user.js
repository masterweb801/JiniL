import React, { useEffect } from 'react'

const User = () => {
    useEffect(() => {
        document.title = "JiniL | User";
    }, [])

    return (
        <div>User</div>
    )
}

export default User