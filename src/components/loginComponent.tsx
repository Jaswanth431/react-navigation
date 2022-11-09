import React from 'react';
import validator from 'validator';
import { Box, Button, TextField } from '@mui/material';

import './css/loginComponentStyles.css';

const LoginComponent = () => {

    const loginFunc = (email: String, password: String) => {
        // Login function
    }

    const handleLoginSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const emailInput = (document.getElementById('email-input') as HTMLInputElement).value;
        const passwordInput = (document.getElementById('password-input') as HTMLInputElement).value;
        if(!emailInput || !passwordInput) {
            return alert("Please enter email and password");
        }
        if(!validator.isEmail(emailInput)) {
            return alert("Please enter a valid email address");
        }
        loginFunc(emailInput, passwordInput);
    }

    return (
        <form onSubmit={handleLoginSubmit} id="login-form" action='/submit'>
            <h2>Login to your account</h2>
            <TextField className='login-form-component' id='email-input' label='Email' variant='outlined' />
            <br />
            <TextField className='login-form-component' id='password-input' type='password' label='Password' variant='outlined' />
            <button id='login-form-submit' className='login-form-component' >LOGIN</button>
        </form>
    )
}

export default LoginComponent;