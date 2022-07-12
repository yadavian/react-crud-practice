import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from '../views/crud/AddUser';
import EditUser from '../views/crud/EditUser';
import UserTable from '../views/crud/UserTable';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserTable />} />
                <Route path="/add" element={<AddUser />} />
                {/* <Route index element={<Home />} /> */}
                <Route path="user-table" element={<UserTable />} />
                <Route path="edit-user/:id" element={<EditUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing