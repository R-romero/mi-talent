import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainPage from './Containers/MainPage/main'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={ MainPage }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
