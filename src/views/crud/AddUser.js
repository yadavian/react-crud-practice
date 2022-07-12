import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const AddUser = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    })

    const addUser = async (e) => {
        e.preventDefault();
        console.log(user);

        const response = await axios({
            method: 'post',
            url: 'http://localhost:3001/users/',
            data: user,
            headers: { 'content-type': 'application/json' },
        }
        );
        // const response = await axios.get("http://localhost:3001/users")
        console.log(response.data)
        navigate('/user-table')
    }

    return (
        <div>
            <form onSubmit={(e) => addUser(e)}>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder='Name'
                    value={user.name}
                    onChange={
                        (e) => setUser({ ...user, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder='username'
                    value={user.username}
                    onChange={
                        (e) => setUser({ ...user, username: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder='Email'
                    value={user.email}
                    onChange={
                        (e) => setUser({ ...user, email: e.target.value })
                    }
                />
                <input
                    type="text"
                    placeholder='Phone'
                    value={user.phone}
                    onChange={
                        (e) => setUser({ ...user, phone: e.target.value })
                    }
                />
                <button
                    type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default AddUser