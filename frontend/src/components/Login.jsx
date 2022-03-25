import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Cancel, Room } from '@material-ui/icons';
import './Login.css';

const Login = ({ setShowLogin, setCurrentUsername, myStorage }) => {
    const [error, setError] = useState(false);
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        try {
            const res = await axios.post("/users/login", user);
            setCurrentUsername(res.data.username);
            myStorage.setItem('user', res.data.username);
            setShowLogin(false)
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="loginContainer">
            <div className="logo">
                <Room className="logoIcon" />
                <span>Gogi-Pin</span>
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Username"
                    ref={usernameRef}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                />
                <button className="loginBtn" type="submit">
                    Login
                </button>
                {error && (
                    <span className="failure">
                        Something went wrong!!!
                    </span>
                )}
            </form>
            <Cancel 
                className="loginCancel" 
                onClick={() => setShowLogin(false)}
            />
        </div>
    );
}

export default Login;
