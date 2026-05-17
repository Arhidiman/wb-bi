import axios from "axios";
import { notification } from "antd";

const port = import.meta.env.VITE_API_GATEWAY_PORT
const host = import.meta.env.VITE_API_GATEWAY_HOST
const apiPrefix = import.meta.env.VITE_API_PREFIX

console.log(`http://${host}:${port}/${apiPrefix}`, 'base url')

export const axiosInstance = axios.create({
    baseURL: `http://${host}:${port}/${apiPrefix}`,
    // timeout: 1000,
    headers: {
        access_token:localStorage.getItem('access_token')
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    config.headers['access_token'] = localStorage.getItem('access_token')
    return config;
})

axiosInstance.interceptors.response.use(
    (config) => config, 
    (error) => notification.error({ message: `Something wrong.\n${error.message}` })
)
