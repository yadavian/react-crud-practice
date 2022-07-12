import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const UserTable = () => {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    let getUsers = async () => {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3001/users'
        })
        console.log(response.data)
        setUsers(response.data)
    }

    const DeleteUser = async (id) => {
        const response = await axios({
            method: 'delete',
            url: `http://localhost:3001/users/${id}`,
            headers: { 'content-type': 'application/json' },
        });
        console.log(response.data)
        navigate('/user-table');
        getUsers()
    }

    React.useEffect(() => {
        getUsers()
    }, [])


    return (
        <div style={{ margin: 100 }}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users && users.map((value, index) => {
                            console.log(value)
                            return (
                                <>
                                    <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.name}</td>
                                        <td>{value.username}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>
                                            <Link to={`/edit-user/${value.id}`}>
                                                <button className='btn btn-warning'>Edit</button>
                                            </Link>
                                            <button className='btn btn-danger' onClick={() => DeleteUser(value.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserTable