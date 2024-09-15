import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const register = async (university_email, password) => {
    const response = await axios.post(`${API_URL}/auth/register`, {
        university_email,
        password
    });
    return response.data;
};

export const login = async (university_email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        university_email,
        password
    });
    return response.data;
};
