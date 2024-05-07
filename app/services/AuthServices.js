import axiosInstance from "../api/axiosInstance";
import apiClient from "../api/axiosInstance";
const AuthServices = () => {

    const register = async (body) => {
        const { payload } = await apiClient({
            url: '/api/auth/register/customer',
            method: 'post',
            body: body,
        });
        return payload;
    }



    return {
        register

    }
}