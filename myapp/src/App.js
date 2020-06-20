import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/"
            name="Eventmanagementpage"
            component={Login}
            exact={true}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
