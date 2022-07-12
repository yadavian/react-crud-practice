import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const EditUser = () => {

    const navigate = useNavigate()
    const { id } = useParams();

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: ''
    })

    React.useEffect(() => {
        let getUsers = async () => {
            const response = await axios({
                method: 'get',
                url: `http://localhost:3001/users/${id}`
            })
            console.log(response.data)
            setUser(response.data)
        }
        getUsers()
    }, [])


    const EditUser = async (e) => {
        e.preventDefault();
        console.log(user);

        const response = await axios({
            method: 'put',
            url: `http://localhost:3001/users/${id}`,
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
            <form onSubmit={(e) => EditUser(e)}>





                <div className='container'>
                    <div className='row' style={{margin : "50px"}}>
                        <h1 style={{ textAlign: "center" }}>Login</h1>
                        <div className='col-md-6 offset-md-3'>
                            <div className="row" style={{ margin: "20px" }}>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    value={user.name}
                                    onChange={
                                        (e) => setUser({ ...user, name: e.target.value })
                                    }
                                />
                            </div>
                            <div className="row" style={{ margin: "20px" }}>
                                <input
                                    type="text"
                                    placeholder='username'
                                    value={user.username}
                                    onChange={
                                        (e) => setUser({ ...user, username: e.target.value })
                                    }
                                />
                            </div>
                            <div className="row" style={{ margin: "20px" }}>
                                <input
                                    type="text"
                                    placeholder='Email'
                                    value={user.email}
                                    onChange={
                                        (e) => setUser({ ...user, email: e.target.value })
                                    }
                                />
                            </div>
                            <div className="row" style={{ margin: "20px" }}>
                                <input
                                    type="text"
                                    placeholder='Phone'
                                    value={user.phone}
                                    onChange={
                                        (e) => setUser({ ...user, phone: e.target.value })
                                    }
                                />
                            </div>
                            <div className="row" style={{ margin: "20px" }}>
                                <button type="submit" class="btn btn-primary">Edit User</button>
                            </div>
                        </div>
                    </div>


                </div>
            </form>
        </div>
    )
}

export default EditUser