import React, {Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery{
    launches{
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`; 

function Launches() {
  

  return (
    <Fragment>
      <h1 className='display-6 my-3'>Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {
         ({ loading, error, data}) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);
            console.log(data);

            return <Fragment>
              {
                
                data.launches.filter((launch, index) => {
                  
                  if(index<data.launches.length-1) return launch.flight_number !== data.launches.at(index+1).flight_number 

                  return true
                
                }
                ).map((launch)=>{
                  return <LaunchItem key={launch.flight_number} launch={launch} />
                })
                
              }
            </Fragment>
          } 
        }
      </Query>
    </Fragment>
  )
}

export default Launches


