import React, { useEffect, useState } from 'react'
import { Cards } from '../../components/cards/Cards'
import { getTechnologyNews } from '../../services/api'

export const TechnologyPage = () => {

    const[apiTechData, setApiTechData] = useState([])

    useEffect(() => {
      fetchData(); 
    }, []);
  
    const fetchData = async () => {
      try {
          const response = await getTechnologyNews(); 
          setApiTechData(response); 
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div><Cards apiDummyData={apiTechData}/></div>
    )
  }