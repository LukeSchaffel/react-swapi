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
      {starShips.length ? 
        <>
          <div className='ships-div'>
            {starShips.map(starShip => 
              <Link to='/ship' state={{starShip}} key={starShip.model}>
              <button id='name-button'>{starShip.name}</button>
              </Link>
              )}
          </div>
        </>
        :
        <>
         <h3 id='starships-loading'>Loading...</h3>
        </>
      }
      </>
     
     );
}
 
export default StarShips;