import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                alert('Registration successful');
                navigate('/login');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="auth-container">
            <h2>REGISTER NOW</h2>
            <form onSubmit={handleRegister} className="auth-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="auth-button">Register</button>
            </form>
            <p className="auth-text">
                Already have an account? <Link to="/login" className="auth-link">Log in</Link>
            </p>
        </div>
    );
}

export default Register;
