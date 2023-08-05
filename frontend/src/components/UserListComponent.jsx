import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const UserListComponent = () => {
    useEffect(() => {
      
        getAllUsers();
    
    }, [])
    const [users, setusers] = useState([])
    
    const getAllUsers = async()=>{

        const res = await axios.get("http://localhost:5000/user/user");
        setusers(res.data.data);
    }
  return (
    <div>
        <h1>user list</h1>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>role</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user)=>(
                    <tr key={user._id}>
                        <td>{user?.firstName} {user?.lastName}</td>
                        <td>{user?.email}</td>
                        <td>{user?.role?.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}
