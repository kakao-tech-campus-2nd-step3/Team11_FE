import axios, { AxiosInstance } from 'axios';

const apiInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Authorization');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
