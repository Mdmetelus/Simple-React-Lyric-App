import React from 'react';
import { Link } from 'react-router-dom';

const Track =(props) => {
    const { track } = props;
  return (
    <div className="cal-md-6" >
     <div className="">
        <div className="card.mb4.shadow-sm">
           <div className="card-body">
            <h5>{track.artist_name}</h5>
            <p className="card-text">
            <strong><span><i className=" fas.fa-play"> </i></span> Track</strong>:{track.track_name}<br/>
            <strong><span><i className=" fas.fa-compact-disc"> </i></span> Album</strong>:{track.album_name}
            </p>
            <Link to={`lyrics/track/${thrack.track_id}`} className="btn btn-dark btn-block">
                <i className="fas fa-chevron-right" ></i>View Lyrics
            </Link>


           </div>

        </div>
     
     </div>
      
    </div>
  )
}


export default Track;