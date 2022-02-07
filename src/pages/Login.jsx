import axios from 'axios';
import React, { Component, createRef } from 'react';

class Login extends Component {
    email = createRef();
    password = createRef();
   
    baseURL = "https://reqres.in/api/users";

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log({email: this.email.current.value});
        console.log({password: this.password.current.value});
        const account = {
            email: this.email.current.value,
            password: this.password.current.value
        }
        if(account.email && account.password) {
            const response = await axios.post(this.baseURL, account);
            console.log(response);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='email'>Email:</label>
                    <input ref={this.email} id='email' className='form-control' type="text" />
                </div>
                <div className="mb-3">
                    <label htmlFor='password'>Password:</label>
                    <input ref={this.password} id='password' className='form-control' type="text" />
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
        );
    }
}

export default Login;