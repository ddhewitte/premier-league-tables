import axios from "axios";
const API_URL = 'https://beliaplikasi.com/dummyjson/premierleague.json';

export const getStandingData = async()=> {
    const response = await axios.get(API_URL);
    return response;
}