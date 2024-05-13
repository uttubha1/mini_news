import axios from 'axios'

const ApiURL = 'http://127.0.0.1:3000'

//whenever Deploying
// const ApiURL = window.location;

export const dummyData = async () => {
    try {
      const res = await axios.get(`${ApiURL}`);
      return res.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
};

export const getSportsNews = async () => {
    try {
      const res = await axios.get(`${ApiURL}/getSportsNews`);
      return res.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
};

export const getBusinessNews = async () => {
    try {
      const res = await axios.get(`${ApiURL}/getBusinessNews`);
      return res.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
};

export const getTechnologyNews = async () => {
    try {
      const res = await axios.get(`${ApiURL}/getTechnologyNews`);
      return res.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
};

export const getNewsById = async (id) => {
    try {
      const res = await axios.post(`${ApiURL}/getNewsById`, { id });
      return res.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
};
