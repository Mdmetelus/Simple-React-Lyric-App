import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../Context';


export default class Search extends Component {
    state = {
        trackTitle: ''
    };
    findTrack = (dispatch, event) => {
        event.preventDefault();
        axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track${this.state.trackTitle}&page_size=15&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
        )
        .then(res => {
            console.log(res);
            dispatch({
                type: 'SEARCH_TRACKS',
                payload: res.data.message.body.track_list
            });  
            this.setState({ trackTitle: '' })        
        })
        .catch(err => console.log(err));
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }



  render() {
    return (
        <Consumer>
            {value => {
                console.log(value);
                const { dispatch } = value
                return (
                    <div className="card card-body mb-4 p-4">
                        <h1 className="display-4 text-center" >
                            <i className="fas fa-music" >Search For A Song
                            </i>
                        </h1>
                        <p className="lead text-center" >Get the Lyrics for any song</p>
                        <form onSubmit={this.findTrack.bind(this, dispatch)} >
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
