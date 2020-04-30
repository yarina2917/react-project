import axios from 'axios'

import cookies from './cookies'

import config from '../constants/config'

const instance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

instance.interceptors.request.use((request: any) => {
  if (!request.url.includes('login') && !request.url.includes('registration')) {
    request.headers['x-api-key'] = cookies.get('token');
  }
  return request
});

export default instance
