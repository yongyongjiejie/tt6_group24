import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../css/login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [checkbox, setCheckbox] = useState(false);

    const login = () => {
        axios.post('http://127.0.0.1:5000/api/auth/login', {
            headers: {'Content-Type' : 'application/json'},
            username,
            password
            // checkbox
        }).then(res => {
            if (res.status === 200) {
                // navigate('/read');
            }
        });
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </Form.Field>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )
}
