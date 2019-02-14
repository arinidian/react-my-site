import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage.js';
import LoginPage from './component/LoginPage.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <Route exact path="/" component={HomePage} />

          <Route exact path="/login" component={LoginPage} />

        </div>

      </Router>

    );
  }
}

export default App;
