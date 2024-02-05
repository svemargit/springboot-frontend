import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        console.log("Springboot app has been initialized.");
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const results = await axios.get("http://127.0.0.1:8080/api/v1/student/")
        console.log(results.data);
        setUsers(results.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://127.0.0.1:8080/api/v1/student/${id}`);
        loadUsers();
    }


    return (
        <div className="container">
            <div className="py-4">
                <table className="table shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>
                                    <Link className="btn btn-secondary mx-2" to={`/viewuser/${user.id}`}>View</Link>
                                    <Link to={`/edituser/${user.id}`}
                                          className="btn btn-outline-primary mx-2">Edit</Link>
                                    <button className="btn btn-outline-danger mx-2"
                                            onClick={() => deleteUser(user.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}