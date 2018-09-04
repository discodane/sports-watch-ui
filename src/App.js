import React, {Component} from 'react';
import {
  BrowserRouter, 
  Route, 
  Switch, 
} from 'react-router-dom';

//App Components
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/watch" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;