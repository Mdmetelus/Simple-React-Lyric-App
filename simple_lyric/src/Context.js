import React, { Component } from 'react';
import axios from 'axios';

const Context = react.createContext();

class Provider extends Component {
    state ={
        track_list: [
        {track: {track_name: 'abc'}},
        {track: {track_name: '123'}}

        ],
        heading: 'Top 10 Tracks'
    };

    // componentDidMount() {
    //     axios.get(``)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err));
    // }


  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
        
      </Context.Provider>
    )
  }
}

import React, { Component } from 'react'

export const Consumer = Context.Consumer;

