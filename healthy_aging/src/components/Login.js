import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const BASE_API_URL = 'http://localhost:8080/users';
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const loginRequest = {
                username: username,
                password: password,
                role: role
            };

            const response = await axios.post(`${BASE_API_URL}/login`, loginRequest);

            if (response.status === 200) {
                alert('login successful');
                console.log('login successful');
                // Handle successful login
                const user = response.data;
                // For example, store user information in local storage
                localStorage.setItem('user', JSON.stringify(user));

                // Redirect to the user page or any other desired route
                navigate('/dashboard');
            } else {
                // Handle login failure
                setError('Invalid credentials');
            }
        } catch (error) {
            // Handle login error
            setError('An error occurred');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                        className="form-control"
                        id="role"
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        {/* <option value="admin">Admin</option> */}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>

    );
};

export default Login;
