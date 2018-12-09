import React, { Component } from 'react'

const Context = react.createContext();

export class Provider extends Component {
    state ={
        track_list: [
        {track: {track_name: 'abc'}},
        {track: {track_name: '123'}}

        ],
        heading: 'Top 10 tracks'
    };
  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
        
      </Context.Provider>
    )
  }
}

import React, { Component } from 'react'

export class Consumer extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

