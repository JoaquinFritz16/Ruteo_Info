import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Region()  {
    const continent = ['africa', 'europe', 'america']
  const [region, setRegion] = useState([])
  const [selectedRegion, setSelectedRegion] = useState('africa')
  const [error, SetError] = useState(null)
  const selectRegion = (region) => {
      axios.get(`https://restcountries.com/v3.1/region/${region}`)
      .then(response => setRegion(response.data))
      .catch(error => SetError(error))
  }
  useEffect(()=>{
    selectRegion(selectedRegion)
  },[selectedRegion])
    return (
        <>
        <h1>Paises listados por region:</h1>
        {error && <p>Error:{error}</p>}
        <ul>
          {region.map((reg, index)=>(
            <li key={index}>
              <Link to={`/region/${reg.name.common.toLowerCase()}`}>{reg.name.common}</Link>
            </li>
          ))}
        </ul>
        
        <select onChange={(e)=>setSelectedRegion(e.target.value)} value={selectedRegion}>
          {continent.map((con, index)=>(
            <option key={index}>{con}</option>
            ))}
        </select>
        <button>
            <Link to="/subregion">Ver los paises por su Sub region</Link>
        </button>
        </>
    )
}
export default Region;