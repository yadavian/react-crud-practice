import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLogin } from '../redux/slices/userSlice'

const Login = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //jab bhi reducer ke kisi function me data pass karna ho tab dispatch use karte h
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(setLogin({
            name: name,
            email: email,
            password: password,
            loggedIn: true
        }))
    }

    return (
        <div>
            <form onSubmit={(e) => handleLogin(e)}>
                <h1>Login</h1>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login