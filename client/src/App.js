import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/:tab' component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
