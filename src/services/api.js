import axios from 'axios';
import environment from '../config';

const api = axios.create({baseUrl: environment.URL_API});

export default api;