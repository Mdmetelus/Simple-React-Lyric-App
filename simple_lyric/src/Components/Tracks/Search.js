import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../Context';


export default class Search extends Component {
    state = {
        trackTitle: ''
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }



  render() {
    return (
        <Consumer>
            {value => {
                return (
                    <div className="card card-body mb-4 p-4">
                        <h1 className="display-4 text-center" >
                            <i className="fas fa-music" >Search For A Song
                            </i>
                        </h1>
                        <p className="lead text-center" >Get the Lyrics for any song</p>
                        <form onSubmit={this.formSubmit} >
                            <div className="form-group" >
                                <input type="text" 
                                className=" form-control form-control-lg" 
                                placeholder="Spong Title..." 
                                name="trackTitle" 
                                onChange={this.onChange.bind(this)}
                                value={this.state.trackTitle} ></input>
                            </div>
                            <button 
                                className="btn btn-primary btn-lg btn-block mb-5" 
                                type="submit"
                                >
                                Get Track List</button>
                        </form>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}
