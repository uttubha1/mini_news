import React, { useEffect, useState } from 'react'
import { Cards } from '../../components/cards/Cards'
import { getBusinessNews } from '../../services/api'

export const BusinessPage = () => {

    const[apiBusinessData, setApiBusinessData] = useState([])

    useEffect(() => {
        fetchBusinessData(); 
    }, []);
  
    const fetchBusinessData = async () => {
      try {
          const response = await getBusinessNews(); 
          setApiBusinessData(response); 
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    };
  
    return (
      <div><Cards apiDummyData={apiBusinessData}/></div>
    )
  }
