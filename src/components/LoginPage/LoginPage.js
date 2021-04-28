import "./Login.css";

import {Link} from 'react-router-dom'
import React from "react";
import InputField from "../InputField";

import UIBall from '../UIBall'

class LoginPage extends React.Component {
  render() {
    return (
      <div className="MainCard bg-purple flex direction-column content-sb relative">
        <div>
          <h1 className="text-large text-color-white">
            Welcome <span className="text-small">!</span>
          </h1>
          <h3 className="text-color-white text-medium">ZeevhY Login Form</h3>
        </div>
        <div>
          <p className="text-color-white">
            Designed by <span className="text-medium-large">Huzaifa</span>
          </p>
        </div>
        <div className="FormCard shadow">
          <div>
            <h3 className="text-color-purple text-center text-large text-500">
              Login
            </h3>
          </div>
          <UIBall/>
          <form>
            <InputField field_name='Username' type='text' field_id='id_username' />
            <InputField field_name = 'Password' type='password' field_id='id_password' />
            <div className='btn btn-primary'>
                <p>Login</p>
            </div>
            <div className='shadow btn'>
                <Link to='register' >Don't Have Account?</Link>
            </div>
            <div className=''>
                <Link >Forgot Password?</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
