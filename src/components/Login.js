import React from 'react';
import {GoogleLogin} from 'react-google-oauth';

const tryRouting = (somethingelse, updateLoginStatus) => {
  console.log({somethingelse});
  updateLoginStatus(somethingelse.w3.U3);
}

const Login = (props) => {
  return (
      <div>
        <h2>LOGIN</h2>
        <GoogleLogin 
          onLoginSuccess={(response) => tryRouting(response, props.updateLoginStatus)}
        />
      </div>
    )
  }

export default Login;