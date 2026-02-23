import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup submitted");
    };

    return (
        <Container className="mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card shadow border-0">
                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">Signup</h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter username"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter password"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Confirm password"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Signup
                                </button>

                                <select name="role" id="role" className="form-select mt-3">
                                    <option value="">Select Role</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>

                                <div className="text-center mt-3">
                                    <span>Already have an account? </span>
                                    <Link to="/login">Login</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Signup;