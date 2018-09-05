import React, {Component} from 'react';
import {GoogleAPI} from 'react-google-oauth';
import PropTypes from 'prop-types';

//App Components
import Home from './Home';
import Login from './Login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      email: '',
    }
    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  updateLoginStatus(email) {
    this.setState(email ? { loginStatus: true, email: email} : { loginStatus: false, email: ''});
  }

  componentDidMount() {
    console.log(window.gapi.auth2.getAuthInstance());
  }

  render(){
    console.log(this.state);
    return(
      <GoogleAPI 
        clientId="743246055286-9r431e5rq95qs24r904rnupc3fnrg09a.apps.googleusercontent.com"
      >
        <div className="container">
          {!this.state.loginStatus && (<Login updateLoginStatus={this.updateLoginStatus}/>)}
          {this.state.loginStatus && (<Home />)}
        </div>
      </GoogleAPI>
    );
  }
}

App.propTypes = {
  loginStatus: PropTypes.bool,
  email: PropTypes.string,
}

export default App;