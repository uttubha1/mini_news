import React, { useEffect, useState } from 'react'
import { Cards } from '../../components/cards/Cards'
import { dummyData } from '../../services/api'

export const HomePage = () => {

  const[apiDummyData, setApiDummyData] = useState([])

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
        const response = await dummyData(); 
        setApiDummyData(response); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  return (
    <div><Cards apiDummyData={apiDummyData}/></div>
  )
}
