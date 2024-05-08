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
    const verifyOTP = async (body) => {
        const { payload } = await apiClient({
            url: '/api/auth/validation-otp',
            method: 'post',
            body: body,
        });
        return payload;
    }
    const login = async (body) => {
        const { payload } = await apiClient({
            url: '/api/auth/login',
            method: 'post',
            body: body,
        });
        return payload;
    }



    return {
        register,
        verifyOTP,
        login

    }
}
export default AuthServices