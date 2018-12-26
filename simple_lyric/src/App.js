import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './Components/Layout/NavBar';
import Index from './Components/Layout/Index';
import Lyrics from './Components/Tracks/Lyrics';
import { Provider } from './Context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>

        <Router>
          <div className="App">
            <>
              <NavBar />

              <div className="container" >
                <Switch>
                  <Route exact path="/" container={Index} />
                  <Route exact path="/lyrics/track/:id" container={Lyrics} />


                </Switch>


              </div>
            </>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
