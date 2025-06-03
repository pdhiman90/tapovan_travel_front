import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL)

const signup = async (payload) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/signup`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};
const sendOtp = async (payload) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/sendOtp`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

const login = async (payload)=>{
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error
    }
}

const verifyOtp = async (payload)=>{
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/verifyOtp`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error
    }
}   
const auth = {
    signup,
    sendOtp,
    login,
    verifyOtp
};

export default auth;