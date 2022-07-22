import 'bootstrap/dist/css/bootstrap.min.css';  
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

            <div class="form-group">
            <Form className="create-form">
            <div class="row">
                <Form.Field>
                <div class="col">
                    <p class="fs-6 text-white">Username</p>
                </div>
                <div class="col">
                    <input placeholder='Username' class="form-control" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                </Form.Field>
            </div>
            <div class="row pt-3">
                <Form.Field>
                <div class="col">
                    <p class="fs-6 text-white">Password</p>
                </div>
                <div class="col">
                        <input placeholder='Password' class="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                </Form.Field>
                </div>
                <div class="row p-2 w-50">
                    <Button class='form-control btn btn-danger' type='submit' >Login</Button>
                </div>
            </Form>
            </div>
    )
}
