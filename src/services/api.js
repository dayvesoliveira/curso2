import axios from 'axios';
import environment from '../config';

const api = axios.create({baseURL: environment.URL_API});

export default api;