import React, {Component} from 'react';
import {GoogleAPI} from 'react-google-oauth';
import PropTypes from 'prop-types';

//App Components
// import Home from './Home';
// import Login from './Login';
import Starter from './Starter';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      email: '',
      loaded: false,
    }
    this.updateLoginStatus = this.updateLoginStatus.bind(this);
  }

  updateLoginStatus(email) {
    this.setState(email ? { loginStatus: true, email: email} : { loginStatus: false, email: ''});
  }

  componentDidMount() {
    window.gapi.load('auth2', async () => {
      let someObj
      try {
        someObj = await window.gapi.auth2.init({clientId: "743246055286-9r431e5rq95qs24r904rnupc3fnrg09a.apps.googleusercontent.com"});
      } catch(err) {
        someObj = await window.gapi.auth2.getAuthInstance();
      }
      const somethingElse = await someObj.currentUser.get();
      if(!somethingElse.w3) {
        this.setState({loaded: true});
      } else {
        this.setState({loginStatus: true, email: somethingElse.w3.U3, loaded: true});
      }
    });
  }

  render(){
    return(
      <GoogleAPI 
        clientId="743246055286-9r431e5rq95qs24r904rnupc3fnrg09a.apps.googleusercontent.com"
      >
        <div className="container">
          <Starter />
          {/* {!this.state.loaded && (<span>Loading...</span>)}
          {(!this.state.loginStatus && this.state.loaded) && (<Login updateLoginStatus={this.updateLoginStatus}/>)}

          {this.state.loginStatus && (<Home />)} */}
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