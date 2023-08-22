import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Home() {
    const { uid, firstName, lastName, email } = useSelector(state => state.user.value)
    return (
        <div>
            <p>{uid}</p>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
        </div>
    )
}

export default Home