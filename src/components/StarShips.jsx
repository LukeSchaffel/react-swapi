import { useEffect, useState } from 'react'
import { getAllStarships } from '../Services/sw-api';
import { Link } from 'react-router-dom'

const StarShips = (props) => {
  const [starShips, setStarShips] = useState([])

  useEffect(()=> {
    getAllStarships()
    .then(starShipData => setStarShips(starShipData.results))
  },[])
  

  return (
     <>
      <div>
        {starShips.map(starShip => 
          <h1>{starShip.name}</h1>
          )}
      </div>
     </>
     
     );
}
 
export default StarShips;