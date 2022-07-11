import axios from "axios";

const API_KEY = '28534332-8f968f9e2a1846e3bb62dda3d';
const API_URL = 'https://pixabay.com/api/';

// getting list of pictures
export const getPictures = async (query, page, handleSearchResult) => {
    
    await axios.get(API_URL, {
        params: {
            q: query,
            key: API_KEY,
            page: page,
            per_page: 12,
        }        
     }).then(handleSearchResult)
}