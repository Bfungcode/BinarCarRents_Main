import axios from "axios";
import { getAuthHeader } from "../auth/tokenHeader";

const API_URL = "https://bootcamp-rent-car.herokuapp.com/";

const getALlCars = () => {
    const response = axios.get(`${API_URL}admin/car`);
    return response;
};

const getCarById = (id) => {
    const response = axios.get(`${API_URL}admin/car/${id}`)
    return response;
}

const postOrder = (start_rent_at, finish_rent_at, car_id) => {
    return axios.post(`${API_URL}customer/order`, {
        start_rent_at,
        finish_rent_at,
        car_id
    }, { headers: getAuthHeader() })
}

const getOrder = (id) => {
    return axios.get(`${API_URL}customer/order/${id}`, { headers: getAuthHeader() }
    )
}



const rentalAPI = {
    getALlCars,
    getCarById,
    postOrder,
    getOrder
};

export default rentalAPI;