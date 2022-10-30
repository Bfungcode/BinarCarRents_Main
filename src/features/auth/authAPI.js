import axios from "axios";
const API_URL = "https://bootcamp-rent-cars.herokuapp.com/";

const login = (email, password) => {
    return axios.post(`${API_URL}customer/auth/login`, {
        email,
        password
    })
        .then((res) => {
            if (res.data.access_token) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data
        })
};

const register = (email, password) => {
    return axios.post(`${API_URL}customer/auth/register`, {
        email,
        password
    })
}

const authAPI = {
    login,
    register
};

export default authAPI;