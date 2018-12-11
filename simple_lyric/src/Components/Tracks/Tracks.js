import React, { Component } from 'react';
import { Consumer } from '../../Context';

export default class Tracks extends Component {
  render() {
    return (
      <div>
          <h1>Tracks</h1>
          <Consumer>
              {value => {console.log(value);
            <h1>Tracks</h1>}}
          </Consumer>
        
      </div>
    )
  }
}
