import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from '../components/Navbar';

const Dashboard = () => {
    return (
        <>
            <Navbar />

            <Container className="mt-5">

                {/* Stats Cards */}
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h1 className="fw-bold text-primary">0</h1>
                                <p className="text-muted">My Projects</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h1 className="fw-bold text-success">3</h1>
                                <p className="text-muted">Total Projects</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h1 className="fw-bold text-danger">0</h1>
                                <p className="text-muted">My Tasks</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons Row */}
                <div className="card shadow-sm border-0 p-4 mt-4">
                    <div className="row text-center">

                        <div className="col-md-4 mb-3">
                            <button className="btn btn-primary w-100">
                                New Project
                            </button>
                        </div>

                        <div className="col-md-4 mb-3">
                            <button className="btn btn-secondary w-100">
                                New Task
                            </button>
                        </div>

                        <div className="col-md-4 mb-3">
                            <button className="btn btn-success w-100">
                                View All Projects
                            </button>
                        </div>

                    </div>
                </div>

            </Container>

            <div className="card">
                <h5 className="card-title">Recent Activity</h5>
                <div className="card-body">
                        
                
                </div>
            </div>
        </>
    );
};

export default Dashboard;