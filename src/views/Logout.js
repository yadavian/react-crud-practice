import React from 'react'
import { useDispatch } from 'react-redux'
import { setLogout } from '../redux/slices/userSlice';

const Logout = () => {

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(setLogout())
    }

    return (
        <div>
            <form onSubmit={(e) => handleLogout(e)}>
                <h1>Welcome : Ankit</h1>
                <button type='submit'>Logout</button>
            </form>

        </div>
    )
}

export default Logout