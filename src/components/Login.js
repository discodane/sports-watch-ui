import React from 'react';
import {GoogleLogin} from 'react-google-oauth';

const tryRouting = () => {
  window.location = '/watch';
}

const Login = (props) => {

  console.log('yeah', props.children);
  return (
      <div>
        <h2>LOGIN</h2>
        <GoogleLogin 
          onLoginSuccess={tryRouting}
        />
      </div>
    )
  }

export default Login;