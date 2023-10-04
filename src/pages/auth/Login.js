import React from "react";
import styles from '../../styles/pages/auth/Login.module.css'
import { useState, useEffect } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(true);

    const handleValidate = (e) => {
        const login = {
            username: username,
            password: password
        }
        console.log(login);

        setUsername('');
        setPassword('');

        e.preventDefault();
    }

    if(username !== "" || username != null){
        setError(false)
    }
    if(password !== "" || password != null){
        setError(false)
    }

    setUsername('');
    setPassword('');
    useEffect(() => {
        if (username != "" || username != null) {
            setError(false)
        }
        if (password != "" || password != null) {
            setError(false)
        }
    }, [username, password, error])


  useEffect(() => {
    
    
  }, [username, password, error])
  
    return (
        <div className="container">
            <div className="img-box">{/* <img src="" alt="" /> */}</div>
            <div className="login-field">
                <div className="login-box">
                    <h4>Welcome Login Page</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <form className="login-form" onSubmit={handleValidate}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="username"
                            name="name"
                            id="name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {username === "" ? <ErrorMessage>Username is required</ErrorMessage> : ""}

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {password === "" ? <ErrorMessage>Password is required</ErrorMessage> : ""}


                        <div className="submit-button">
                            <button className="button">Login</button>
                        </div>
                    </form>
                    <span>
                        Lorem ipsum dolor sit.? <a href="#">Register</a>
                    </span>
                </div>
            </div>
        </div>
    );
};


const ErrorMessage = ({ children }) => {
    return <span className="error">{children}</span>
}

export default Login;
