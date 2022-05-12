import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../Services/sw-api';
import { Link } from 'react-router-dom';
import { getAllCivs } from "../Services/aoe-2-api";


const Civilizations = () => {
  const [civs, setCivs] = useState([])

  useEffect(()=> {
    getAllCivs()
    .then(civData => setCivs(civData.civilizations))
  },[])

  return ( <>
    <h1>hi</h1>
  
  </> );
}
 
export default Civilizations;