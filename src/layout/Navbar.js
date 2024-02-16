import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={""}>Springboot App</Link>
                    <div className={"text-align-right"}>
                        <Link className="btn btn-outline-dark mx-2" to={"/adduser"}>Add new user</Link>
                        <Link className="btn btn-outline-dark mx-2" to={""}>Go Home</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}