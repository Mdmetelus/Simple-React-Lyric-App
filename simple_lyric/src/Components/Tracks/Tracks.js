import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Spinner from '../Layout/Spinner';
import Track from '../Tracks/Track';

class Tracks extends Component {
  render() {
    return(
        <Consumer>
              {value => {
                console.log(value);
                if(value.track_list === undefined || value.track_list.length === 0) {
                    return <Spinner />

                } else {
                    return(
                        <React.Fragment>
                            <h3 className="text-Center">{value.heading}
                            
                            </h3>

                        <div className="row" >
                            {.value.track_list.map(item =>(
                                <Track key={item.track.track_id} track={item.track}/>
                            ))}
                        </div>
                        </React.Fragment>
                    );<h1>Tracks Loaded</h1>
                }
              }
                  }
          </Consumer>
    );
  }
}


export default Tracks;