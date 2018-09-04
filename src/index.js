import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {GoogleAPI} from 'react-google-oauth'

//ReactDOM.render(<App />, document.getElementById('root'));

let loggedIn = false;
const notSureWhatThisDoes = (loggedInOrNot) => {
  console.log('whaaa');
  loggedIn = loggedInOrNot;
}

const alsoUnclearHere = () => {
  console.log("on init failure");
}

ReactDOM.render(
  <GoogleAPI 
    clientId="743246055286-9r431e5rq95qs24r904rnupc3fnrg09a.apps.googleusercontent.com"
    onUpdateSigninStatus={notSureWhatThisDoes}
    onInitFailure={alsoUnclearHere} 
  >
    <App loggedIn={loggedIn} />
  </GoogleAPI>, document.getElementById('root'));
registerServiceWorker();
