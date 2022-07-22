import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link, NavLink, useNavigate } from "react-router-dom";
import '../css/login.css';
import qs from 'qs';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const [checkbox, setCheckbox] = useState(false);

    
    const login = () => {
        axios.post('http://127.0.0.1:5000/users/login', 
        qs.stringify({ 'username': username, 'password':password }
        )).then(res => {
            if (res.status === 200) {
                navigate('/main');
            }
        });
    }

    return (

            <div className="form-group">
            <Form className="create-form">
            <div className="row">
                <Form.Field>
                <div className="col">
                    <p className="fs-6 text-white">Username</p>
                </div>
                <div className="col">
                    <input placeholder='Username' className="form-control" onChange={(e) => setUsername(e.target.value)}/>
                </div>
                </Form.Field>
            </div>
            <div className="row pt-3">
                <Form.Field>
                <div className="col">
                    <p className="fs-6 text-white">Password</p>
                </div>
                <div className="col">
                        <input placeholder='Password' className="form-control" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                </Form.Field>
                </div>
                <div class="row p-2 w-50">
                    <Button onClick={login} class='form-control btn btn-danger' type='submit' >Login</Button>
                </div>
            </Form>
            </div>
    )
}
