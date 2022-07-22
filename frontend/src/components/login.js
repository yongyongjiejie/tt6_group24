import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../css/login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [checkbox, setCheckbox] = useState(false);

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
                <Form.Field>
                    <NavLink className="navbar-item" activeClassName="is-active" to="/register" exact> 
                        No account? Click here to register 
                    </NavLink>
                </Form.Field>
                <Button type='submit'>Login</Button>
            </Form>
        </div>
    )
}
