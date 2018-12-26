import React from 'react'

const Track =(props) => {
    const { track } = props;
  return (
    <div className="cal-md-6" >
     <div className="">
        <div className=".card.mb4.shadow-sm">
           <div className="card-body">
            <h5>{track.artist_name}</h5>
           </div>

        </div>
     
     </div>
      
    </div>
  )
}


export default Track;