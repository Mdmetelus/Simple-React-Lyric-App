import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './Components/Layout/NavBar';
import Index from './Components/Layout/Index';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <>
            <NavBar />

            <div className="container" >
              <Switch>
                <Route exact path="/" container={Index} />


              </Switch>


            </div>
          </>
        </div>
        </Router>
    );
  }
}

export default App;
