import axios from 'axios';

const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export const clientImages = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL_IMAGES
});

export const getUrl = {
  featured: "now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20",
  popular: "popular?api_key=6f26fd536dd6192ec8a57e94141f8b20",
}

export default clientAxios;