import axios from 'axios';
import LocalStorage from '../utils/LocalStorage';
import { GlobalError, UnauthorizedError } from '../utils/Error';

const axiosInstance = axios.create({
    baseURL: "http://10.10.102.38:8080"
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await LocalStorage().getData('token');
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
)

const apiClient = async ({ url, method, body = null, params = null }) => {
    try {
        let result;
        if (method === 'put' || method === 'post') {
            result = await axiosInstance[method](url, body);
        } else {
            result = await axiosInstance[method](url, { params });
        }
        return result;
    } catch (error) {
        if (error.response.status === 401) {
            throw new UnauthorizedError("Unauthorized");
        } else {
            throw new GlobalError(error.response.data.message)
        }
    }
}

export default apiClient;