import React, { useEffect, useState } from 'react'
import { Cards } from '../../components/cards/Cards'
import { getSportsNews } from '../../services/api'

export const SportsPage = () => {

  const[sportsNews, setSportsNews] = useState([])

  useEffect(() => {
    fetchSportsData(); 
  }, []);

  const fetchSportsData = async () => {
    try {
        const response = await getSportsNews(); 
        setSportsNews(response); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  return (
    <div><Cards apiDummyData={sportsNews}/></div>
  )
}
