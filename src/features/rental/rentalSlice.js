import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import rentalAPI from './rentalAPI';

export const getAllCars = createAsyncThunk("cars/getAll",
    async (args, thunkAPI) => {
        try {
            const response = await rentalAPI.getALlCars();
            return response.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)

export const getCarById = createAsyncThunk("cars/getById",
    async ({ id }, thunkAPI) => {
        try {
            const response = await rentalAPI.getCarById(id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)

export const postOrder = createAsyncThunk("customer/order",
    async ({ start_rent_at, finish_rent_at, car_id }, thunkAPI) => {
        try {
            const response = await rentalAPI.postOrder(start_rent_at, finish_rent_at, car_id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)
export const getOrder = createAsyncThunk("customer/getOrder",
    async ({ id }, thunkAPI) => {
        try {
            const response = await rentalAPI.getOrder(id);
            return response.data
        }
        catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
)

const initialState = {
    car: null,
    order: null,
}
const rentalSlice = createSlice({
    name: "cars",
    initialState,
    extraReducers: {
        [getAllCars.fulfilled]: (state, action) => {
            state.mobil = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.mobil = null;
        },
        [getCarById.fulfilled]: (state, action) => {
            state.mobil = action.payload;
        },
        [getCarById.rejected]: (state, action) => {
            state.mobil = null;
        },
        [postOrder.fulfilled]: (state, action) => {
            state.getOrder = action.payload;
        },
        [postOrder.rejected]: (state, action) => {
            state.order = null;
        },
        [getOrder.fulfilled]: (state, action) => {
            state.order = action.payload;
        },
        [getOrder.rejected]: (state, action) => {
            state.order = null;
        },
    }
});
const { reducer } = rentalSlice;
export default reducer;