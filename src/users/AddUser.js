import React, {useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        firstName: "",
        lastName: ""
    })

    const {email, firstName, lastName} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:8080/api/v1/student/", user)
        navigate("/")
    }

    return (
        <div className="container-fluid text-center">
            <div>
                <h2>User Form</h2>
            </div>
            <div className="container d-flex justify-content-center">
                <form onSubmit={onSubmit} className={"col-10"}>
                    <input name="id" type="hidden"/>
                    <div className="p-3 shadow">
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor={"email"}>Email:</label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    maxLength="30"
                                    minLength="5"
                                    required
                                    type="email"
                                    name="email"
                                    placeholder={"enter email"}
                                    value={email}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        {/* First Name field */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor={"firstName"}>First Name:</label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    maxLength="30"
                                    minLength="2"
                                    required
                                    type="text"
                                    placeholder="enter last name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        {/* Last Name field */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" htmlFor={"lastName"}>Last Name:</label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    maxLength="30"
                                    minLength="2"
                                    required
                                    type="text"
                                    placeholder="enter last name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        {/* Submit and Cancel buttons */}
                        <div className="text-center">
                            <button className="btn btn-primary m-2" type="submit">
                                Submit
                            </button>
                            <Link to="/" className="btn btn-outline-danger m-2">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}