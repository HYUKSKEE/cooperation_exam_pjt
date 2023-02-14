import axios from 'axios';
import BASE_URL from '../../env';

const request: any = axios.create({
  baseURL: BASE_URL,
});

request.defaults.timeout = 2500;

request.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response: any) => {
    const res = response.data;
    return res;
  },

  (error: any) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default request;
