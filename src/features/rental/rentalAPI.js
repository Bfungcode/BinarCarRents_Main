import axios from "axios";
const user = JSON.parse(localStorage.getItem('user'));

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/";
const orderId = JSON.parse(localStorage.getItem("idOrder"))
const getCars = (name, category, isRented, minPrice, maxPrice, page, pageSize) => {

    const response = axios.get(`${API_URL}customer/v2/car`, {
        params: {
            name,
            category,
            isRented,
            minPrice,
            maxPrice,
            page,
            pageSize
        },
    });
    return response;
};

const getCarById = id => {
    const response = axios.get(`${API_URL}customer/car/${id}`)
    return response;
}

const postOrder = (start_rent_at, finish_rent_at, car_id) => {
    return axios.post(`${API_URL}customer/order`, {
        start_rent_at,
        finish_rent_at,
        car_id
    }, {
        headers: {
            'Content-Type': 'application/json',
            access_token: user.access_token
        }
    })
}

const getOrder = (id) => {
    const response = axios.get(`${API_URL}customer/order/${orderId}`, {
        id: orderId,
        headers: {
            'Content-Type': 'application/json',
            access_token: user.access_token
        }
    });
    return response;
}

const deleteOrder = id => {
    const response = axios.delete(`${API_URL}customer/order/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            access_token: user.access_token
        }
    })
    return response
}

const uploadSLip = (id, slip) => {
    const response = axios.put(`${API_URL}customer/order/${id}/slip`, {
        id,
        slip,
    }, {
        headers: {
            'Content-Type': 'multipart/form-data',
            access_token: user.access_token,
        }
    })
    return response
}
const listOrder = (page, pageSize) => {
    const response = axios.get(`${API_URL}/customer/v2/order`, {
        params: {
            page,
            pageSize,
        },
        headers: {
            'Content-Type': 'multipart/form-data',
            access_token: user.access_token
        }
    })
    return response
}


const rentalAPI = {
    getCars,
    getCarById,
    postOrder,
    getOrder,
    deleteOrder,
    uploadSLip,
    listOrder,
};

export default rentalAPI;