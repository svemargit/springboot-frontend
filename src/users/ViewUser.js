import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function ViewUser() {

    const {id} = useParams()

    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: ""
    })

    const {email, firstName, lastName} = user;


    useEffect(() => {
        loadUser()
    }, []);


    const loadUser = async () => {
        const result = await axios.get(`http://127.0.0.1:8080/api/v1/student/${id}`)
        setUser(result.data);
    }

    return (
        <div className="container-fluid text-center">
            <div>
                <h2>User</h2>
            </div>
            <div className="container d-flex justify-content-center">

                <div className="p-3 shadow col-10">

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label" htmlFor={"lastName"}>Id:</label>
                        <div className="col-sm-8">
                            <span className="form-control">{user.id}</span>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label" htmlFor={"email"}>Email:</label>
                        <div className="col-sm-8">
                            <span className="form-control">{user.email}</span>
                        </div>
                    </div>

                    {/* First Name field */}
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label" htmlFor={"firstName"}>First Name:</label>
                        <div className="col-sm-8">
                            <span className="form-control">{user.firstName}</span>
                        </div>
                    </div>

                    {/* Last Name field */}
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label" htmlFor={"lastName"}>Last Name:</label>
                        <div className="col-sm-8">
                            <span className="form-control">{user.lastName}</span>
                        </div>
                    </div>

                    {/* Submit and Cancel buttons */}
                    <div className="text-center">
                        <Link to="/" className="btn btn-outline-secondary m-2">
                            Go back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}