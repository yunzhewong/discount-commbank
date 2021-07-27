import React from 'react';
import './Login.css';
import lock from './lock.png'

function Login(props) {
    return (
        <button onClick={()=>{alert("Login Pressed")}} className="login">
            <img src={lock} alt="Lock logo"/>
            <h1>Log on</h1>
        </button>
    )
}

export default Login;