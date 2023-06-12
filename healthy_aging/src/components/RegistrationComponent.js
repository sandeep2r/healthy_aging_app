import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../service/UserService';

const RegistrationComponent = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            const user = {
                username,
                password,
                role: 'user', // Setting the role to 'user' by default
            };

            await UserService.createUser(user);

            // Registration successful, show an alert
            alert('Registration successful');

            // Clear the input fields
            setUsername('');
            setPassword('');

            // Redirect to the home page
            navigate('/');
        } catch (error) {
            // Handle any errors during registration
            console.error('Registration error:', error);
            // Display an error message to the user, e.g., using a toast library
        }
    };

    return (
        <div className="container">
            <h2>Registration</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleRegistration}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationComponent;
