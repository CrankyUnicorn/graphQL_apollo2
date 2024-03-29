import React from 'react';



function LaunchItem(props) {
 
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h4>Mission: {props.launch.mission_name}</h4>
          <p>Date: {props.launch.launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <button className='btn btn-secondary'>Launch Details</button>        
        </div>
      </div>
    </div>    
  )
}

export default LaunchItem


