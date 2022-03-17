import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../Services/sw-api';
import { Link } from 'react-router-dom';

const ShipDetails = (props) => {
  const [shipDetails, setShipDetails] = useState({})
  let location = useLocation()
  
  useEffect(()=>{
    getDetails(location.state.starShip.url)
    .then(shipDetails => setShipDetails(shipDetails))

  }, [])
  
  return (
     <>
      <div id='ship-detail-container'>
        <h3>Ship Details</h3>
        {shipDetails.name ?
          <>
            <h2>{shipDetails.name}</h2>
            <h3>{shipDetails.model}</h3>
            <Link to="/">Return</Link>
          </>
          :
          <>
          <h3>Loading...</h3>
          </>
        }
      </div>
    </> 
  
  );
}
 
export default ShipDetails;