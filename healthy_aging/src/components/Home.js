import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div >
            <div className="d-flex justify-content-center align-items-center vh-100" >
                <div className="text-center">
                    <h2>Welcome to the Home Page</h2>
                    <div className="my-4">
                        <Link to="/login" className="btn btn-primary me-3 mr-5">
                            Sign In
                        </Link>
                        <Link to="/save" className="btn btn-secondary">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
