import axios from 'axios';
const theCatApiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/images/',
});
export default theCatApiClient;