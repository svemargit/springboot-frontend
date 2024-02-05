import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Springboot App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="btn btn-outline-dark" to={"/adduser"}>Add new user</Link>
                </div>
            </nav>
        </div>
    );
}